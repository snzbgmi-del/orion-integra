"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft, Save } from "lucide-react"
import { ImageUpload } from "@/components/admin/image-upload"
import type { ProductImage, ProductWithImages } from "@/lib/database"
import AdminLayout from "@/components/admin-layout"

export default function EditProductPage() {
  const params = useParams()
  const router = useRouter()
  const productId = params.productId as string

  const [product, setProduct] = useState<ProductWithImages | null>(null)
  const [images, setImages] = useState<ProductImage[]>([])
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)

  const fetchProduct = async () => {
    try {
      // In a real app, you'd fetch the product data from your API
      // For now, we'll create a mock product
      const mockProduct: ProductWithImages = {
        id: productId,
        name: "Sample Product",
        description: "This is a sample product description",
        price: 99.99,
        category: "Electronics",
        stock: 10,
        created_at: new Date(),
        updated_at: new Date(),
        images: [],
      }
      setProduct(mockProduct)
    } catch (error) {
      console.error("Error fetching product:", error)
    }
  }

  const fetchImages = async () => {
    try {
      const response = await fetch(`/api/admin/products/${productId}/images`)
      if (response.ok) {
        const fetchedImages = await response.json()
        setImages(fetchedImages)
      }
    } catch (error) {
      console.error("Error fetching images:", error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchProduct()
    fetchImages()
  }, [productId])

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)

    try {
      // Here you would save the product data to your database
      // For now, we'll just simulate a save
      await new Promise((resolve) => setTimeout(resolve, 1000))

      alert("Product saved successfully!")
    } catch (error) {
      console.error("Error saving product:", error)
      alert("Failed to save product")
    } finally {
      setSaving(false)
    }
  }

  if (loading) {
    return (
      <AdminLayout>
        <div className="flex items-center justify-center h-64">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p>Loading product...</p>
          </div>
        </div>
      </AdminLayout>
    )
  }

  if (!product) {
    return (
      <AdminLayout>
        <div className="text-center py-12">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h1>
          <Button onClick={() => router.back()}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Go Back
          </Button>
        </div>
      </AdminLayout>
    )
  }

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button variant="outline" onClick={() => router.back()}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Edit Product</h1>
              <p className="text-gray-600">Manage product details and images</p>
            </div>
          </div>
          <Button onClick={handleSave} disabled={saving}>
            <Save className="w-4 h-4 mr-2" />
            {saving ? "Saving..." : "Save Changes"}
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Product Details */}
          <Card>
            <CardHeader>
              <CardTitle>Product Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <form onSubmit={handleSave}>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="name">Product Name</Label>
                    <Input id="name" defaultValue={product.name} placeholder="Enter product name" required />
                  </div>

                  <div>
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                      id="description"
                      defaultValue={product.description}
                      placeholder="Enter product description"
                      rows={4}
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="price">Price ($)</Label>
                      <Input
                        id="price"
                        type="number"
                        step="0.01"
                        defaultValue={product.price}
                        placeholder="0.00"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="stock">Stock</Label>
                      <Input id="stock" type="number" defaultValue={product.stock} placeholder="0" required />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="category">Category</Label>
                    <Input id="category" defaultValue={product.category} placeholder="Enter category" required />
                  </div>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Product Stats */}
          <Card>
            <CardHeader>
              <CardTitle>Product Statistics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">{images.length}</div>
                  <div className="text-sm text-gray-600">Images</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">{product.stock}</div>
                  <div className="text-sm text-gray-600">In Stock</div>
                </div>
              </div>
              <div className="mt-4 text-sm text-gray-500">
                <p>Created: {product.created_at.toLocaleDateString()}</p>
                <p>Updated: {product.updated_at.toLocaleDateString()}</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Image Management */}
        <Card>
          <CardHeader>
            <CardTitle>Product Images</CardTitle>
          </CardHeader>
          <CardContent>
            <ImageUpload productId={productId} images={images} onImagesChange={fetchImages} />
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  )
}
