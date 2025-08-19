"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { CheckCircle, XCircle, Upload, Settings } from "lucide-react"

export default function TestUploadPage() {
  const [file, setFile] = useState<File | null>(null)
  const [uploading, setUploading] = useState(false)
  const [result, setResult] = useState<any>(null)
  const [error, setError] = useState<string | null>(null)

  // Check environment variables
  const envCheck = {
    DATABASE_URL: typeof process.env.DATABASE_URL !== "undefined",
    BLOB_READ_WRITE_TOKEN: typeof process.env.BLOB_READ_WRITE_TOKEN !== "undefined",
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0]
    if (selectedFile) {
      setFile(selectedFile)
      setResult(null)
      setError(null)
    }
  }

  const testDirectBlobUpload = async () => {
    if (!file) return

    setUploading(true)
    setError(null)
    setResult(null)

    try {
      const response = await fetch("/api/test-blob", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          filename: file.name,
          contentType: file.type,
        }),
      })

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`)
      }

      const data = await response.json()
      setResult(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unknown error")
    } finally {
      setUploading(false)
    }
  }

  const testFullUpload = async () => {
    if (!file) return

    setUploading(true)
    setError(null)
    setResult(null)

    try {
      const formData = new FormData()
      formData.append("file", file)
      formData.append("alt", file.name.split(".")[0])
      formData.append("isPrimary", "true")

      const response = await fetch("/api/admin/products/test-product-1/images", {
        method: "POST",
        body: formData,
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || `HTTP ${response.status}`)
      }

      const data = await response.json()
      setResult(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unknown error")
    } finally {
      setUploading(false)
    }
  }

  return (
    <div className="container mx-auto py-8 space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-2">Blob Storage Integration Test</h1>
        <p className="text-gray-600">Test your Vercel Blob and database integration</p>
      </div>

      {/* Environment Check */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Settings className="h-5 w-5" />
            Environment Variables
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="flex items-center gap-2">
            {envCheck.DATABASE_URL ? (
              <CheckCircle className="h-4 w-4 text-green-500" />
            ) : (
              <XCircle className="h-4 w-4 text-red-500" />
            )}
            <span>DATABASE_URL</span>
          </div>
          <div className="flex items-center gap-2">
            {envCheck.BLOB_READ_WRITE_TOKEN ? (
              <CheckCircle className="h-4 w-4 text-green-500" />
            ) : (
              <XCircle className="h-4 w-4 text-red-500" />
            )}
            <span>BLOB_READ_WRITE_TOKEN</span>
          </div>
        </CardContent>
      </Card>

      {/* File Upload */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Upload className="h-5 w-5" />
            Upload Test
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="file">Select Image File</Label>
            <Input id="file" type="file" accept="image/*" onChange={handleFileChange} className="mt-1" />
          </div>

          {file && (
            <div className="flex gap-4">
              <Button onClick={testDirectBlobUpload} disabled={uploading} variant="outline">
                {uploading ? "Testing..." : "Test Direct Blob Upload"}
              </Button>
              <Button onClick={testFullUpload} disabled={uploading}>
                {uploading ? "Testing..." : "Test Full Upload (Blob + DB)"}
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Results */}
      {error && (
        <Alert variant="destructive">
          <XCircle className="h-4 w-4" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {result && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-green-600">
              <CheckCircle className="h-5 w-5" />
              Success!
            </CardTitle>
          </CardHeader>
          <CardContent>
            <pre className="bg-gray-100 p-4 rounded text-sm overflow-auto">{JSON.stringify(result, null, 2)}</pre>
            {result.url && (
              <div className="mt-4">
                <p className="font-medium mb-2">Uploaded Image:</p>
                <img src={result.url || "/placeholder.svg"} alt="Uploaded" className="max-w-xs rounded border" />
              </div>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  )
}
