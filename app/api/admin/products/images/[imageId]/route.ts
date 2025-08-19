import { type NextRequest, NextResponse } from "next/server"
import { BlobStorageService } from "@/lib/blob-storage"
import { DatabaseService } from "@/lib/database"

export async function DELETE(request: NextRequest, { params }: { params: { imageId: string } }) {
  try {
    // Get image data first to get the blob URL
    const images = await DatabaseService.getProductImages("") // This would need to be modified to get by image ID
    const image = images.find((img) => img.id === params.imageId)

    if (!image) {
      return NextResponse.json({ success: false, error: "Image not found" }, { status: 404 })
    }

    // Delete from database first
    const dbDeleted = await DatabaseService.deleteProductImage(params.imageId)
    if (!dbDeleted) {
      return NextResponse.json({ success: false, error: "Failed to delete image from database" }, { status: 500 })
    }

    // Delete from blob storage
    const blobDeleted = await BlobStorageService.deleteImage(image.url)
    if (!blobDeleted) {
      console.warn("Failed to delete image from blob storage:", image.url)
      // Don't fail the request if blob deletion fails
    }

    return NextResponse.json({
      success: true,
      message: "Image deleted successfully",
    })
  } catch (error) {
    console.error("Error deleting image:", error)
    return NextResponse.json({ success: false, error: "Internal server error" }, { status: 500 })
  }
}

export async function PATCH(request: NextRequest, { params }: { params: { imageId: string } }) {
  try {
    const { action, productId, sortOrder } = await request.json()

    if (action === "setPrimary" && productId) {
      const success = await DatabaseService.setPrimaryImage(productId, params.imageId)
      if (!success) {
        return NextResponse.json({ success: false, error: "Failed to set primary image" }, { status: 500 })
      }
    } else if (action === "updateOrder" && typeof sortOrder === "number") {
      const success = await DatabaseService.updateImageOrder(params.imageId, sortOrder)
      if (!success) {
        return NextResponse.json({ success: false, error: "Failed to update image order" }, { status: 500 })
      }
    } else {
      return NextResponse.json({ success: false, error: "Invalid action or missing parameters" }, { status: 400 })
    }

    return NextResponse.json({
      success: true,
      message: "Image updated successfully",
    })
  } catch (error) {
    console.error("Error updating image:", error)
    return NextResponse.json({ success: false, error: "Internal server error" }, { status: 500 })
  }
}
