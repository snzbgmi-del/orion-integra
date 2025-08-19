"use client"

import { useState, useCallback } from "react"
import { useDropzone } from "react-dropzone"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { X, Upload, Star, StarOff } from "lucide-react"

interface ProductImage {
  id: string
  url: string
  filename: string
  alt: string
  is_primary: boolean
  sort_order: number
  size: number
}

interface ImageUploadProps {
  productId: string
  images: ProductImage[]
  onImagesChange: (images: ProductImage[]) => void
}

export function ImageUpload({ productId, images, onImagesChange }: ImageUploadProps) {
  const [uploading, setUploading] = useState(false)
  const [uploadProgress, setUploadProgress] = useState(0)
  const [error, setError] = useState<string | null>(null)

  const onDrop = useCallback(
    async (acceptedFiles: File[]) => {
      setError(null)
      setUploading(true)
      setUploadProgress(0)

      try {
        for (let i = 0; i < acceptedFiles.length; i++) {
          const file = acceptedFiles[i]
          const formData = new FormData()
          formData.append("file", file)
          formData.append("alt", file.name.split(".")[0])
          formData.append("isPrimary", images.length === 0 ? "true" : "false")

          const response = await fetch(`/api/admin/products/${productId}/images`, {
            method: "POST",
            body: formData,
          })

          const result = await response.json()

          if (result.success) {
            onImagesChange([...images, result.image])
          } else {
            throw new Error(result.error || "Upload failed")
          }

          setUploadProgress(((i + 1) / acceptedFiles.length) * 100)
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : "Upload failed")
      } finally {
        setUploading(false)
        setUploadProgress(0)
      }
    },
    [productId, images, onImagesChange],
  )

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/*": [".jpeg", ".jpg", ".png", ".webp", ".gif"],
    },
    maxSize: 10 * 1024 * 1024, // 10MB
    disabled: uploading,
  })

  const handleDelete = async (imageId: string) => {
    try {
      const response = await fetch(`/api/admin/products/images/${imageId}`, {
        method: "DELETE",
      })

      const result = await response.json()

      if (result.success) {
        onImagesChange(images.filter((img) => img.id !== imageId))
      } else {
        setError(result.error || "Delete failed")
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Delete failed")
    }
  }

  const handleSetPrimary = async (imageId: string) => {
    try {
      const response = await fetch(`/api/admin/products/images/${imageId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          action: "setPrimary",
          productId,
        }),
      })

      const result = await response.json()

      if (result.success) {
        const updatedImages = images.map((img) => ({
          ...img,
          is_primary: img.id === imageId,
        }))
        onImagesChange(updatedImages)
      } else {
        setError(result.error || "Failed to set primary image")
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to set primary image")
    }
  }

  return (
    <div className="space-y-6">
      {/* Upload Area */}
      <Card>
        <CardContent className="p-6">
          <div
            {...getRootProps()}
            className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors ${
              isDragActive ? "border-blue-400 bg-blue-50" : "border-gray-300 hover:border-gray-400"
            } ${uploading ? "opacity-50 cursor-not-allowed" : ""}`}
          >
            <input {...getInputProps()} />
            <Upload className="mx-auto h-12 w-12 text-gray-400 mb-4" />
            {isDragActive ? (
              <p className="text-blue-600">Drop the images here...</p>
            ) : (
              <div>
                <p className="text-gray-600 mb-2">Drag & drop images here, or click to select</p>
                <p className="text-sm text-gray-500">Supports: JPEG, PNG, WebP, GIF (max 10MB each)</p>
              </div>
            )}
          </div>

          {uploading && (
            <div className="mt-4">
              <Progress value={uploadProgress} className="w-full" />
              <p className="text-sm text-gray-600 mt-2">Uploading... {Math.round(uploadProgress)}%</p>
            </div>
          )}

          {error && (
            <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-md">
              <p className="text-red-600 text-sm">{error}</p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Image Gallery */}
      {images.length > 0 && (
        <Card>
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold mb-4">Product Images</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {images.map((image) => (
                <div key={image.id} className="relative group">
                  <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                    <img src={image.url || "/placeholder.svg"} alt={image.alt} className="w-full h-full object-cover" />
                  </div>

                  {/* Overlay Controls */}
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center space-x-2">
                    <Button size="sm" variant="secondary" onClick={() => handleSetPrimary(image.id)} className="p-2">
                      {image.is_primary ? (
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ) : (
                        <StarOff className="h-4 w-4" />
                      )}
                    </Button>
                    <Button size="sm" variant="destructive" onClick={() => handleDelete(image.id)} className="p-2">
                      <X className="h-4 w-4" />
                    </Button>
                  </div>

                  {/* Primary Badge */}
                  {image.is_primary && (
                    <div className="absolute top-2 left-2 bg-yellow-400 text-black text-xs px-2 py-1 rounded-full font-medium">
                      Primary
                    </div>
                  )}

                  {/* File Info */}
                  <div className="mt-2">
                    <p className="text-sm font-medium truncate">{image.filename}</p>
                    <p className="text-xs text-gray-500">{(image.size / 1024 / 1024).toFixed(2)} MB</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
