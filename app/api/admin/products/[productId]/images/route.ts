import { type NextRequest, NextResponse } from "next/server"
import { BlobStorageService } from "@/lib/blob-storage"
import { DatabaseService } from "@/lib/database"

export async function GET(request: NextRequest, { params }: { params: { productId: string } }) {
  try {
    const images = await DatabaseService.getProductImages(params.productId)
    return NextResponse.json({ success: true, images })
  } catch (error) {
    console.error("Error fetching product images:", error)
    return NextResponse.json({ success: false, error: "Failed to fetch images" }, { status: 500 })
  }
}

export async function POST(request: NextRequest, { params }: { params: { productId: string } }) {
  try {
    const formData = await request.formData()
    const file = formData.get("file") as File
    const alt = (formData.get("alt") as string) || ""
    const isPrimary = formData.get("isPrimary") === "true"

    if (!file) {
      return NextResponse.json({ success: false, error: "No file provided" }, { status: 400 })
    }

    // Validate file
    const validation = BlobStorageService.validateImageFile(file)
    if (!validation.valid) {
      return NextResponse.json({ success: false, error: validation.error }, { status: 400 })
    }

    // Generate unique path
    const imagePath = BlobStorageService.generateImagePath(params.productId, file.name)

    // Upload to Vercel Blob
    const uploadResult = await BlobStorageService.uploadImage(file, imagePath)
    if (!uploadResult) {
      return NextResponse.json({ success: false, error: "Failed to upload image" }, { status: 500 })
    }

    // Save to database
    const imageId = `img_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    const imageData = {
      id: imageId,
      product_id: params.productId,
      url: uploadResult.url,
      filename: file.name,
      alt: alt,
      is_primary: isPrimary,
      sort_order: 0,
      size: uploadResult.size,
    }

    const savedImage = await DatabaseService.addProductImage(imageData)
    if (!savedImage) {
      // Clean up blob if database save failed
      await BlobStorageService.deleteImage(uploadResult.url)
      return NextResponse.json({ success: false, error: "Failed to save image data" }, { status: 500 })
    }

    // If this is set as primary, update other images
    if (isPrimary) {
      await DatabaseService.setPrimaryImage(params.productId, imageId)
    }

    return NextResponse.json({
      success: true,
      image: savedImage,
      message: "Image uploaded successfully",
    })
  } catch (error) {
    console.error("Error uploading image:", error)
    return NextResponse.json({ success: false, error: "Internal server error" }, { status: 500 })
  }
}
