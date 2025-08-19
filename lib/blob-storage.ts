import { put, del, list } from "@vercel/blob"

export interface BlobUploadResult {
  url: string
  downloadUrl: string
  pathname: string
  size: number
}

export class BlobStorageService {
  static async uploadImage(file: File, path: string): Promise<BlobUploadResult | null> {
    try {
      // Validate file type
      if (!file.type.startsWith("image/")) {
        throw new Error("File must be an image")
      }

      // Validate file size (max 10MB)
      const maxSize = 10 * 1024 * 1024
      if (file.size > maxSize) {
        throw new Error("File size must be less than 10MB")
      }

      const blob = await put(path, file, {
        access: "public",
        addRandomSuffix: true,
      })

      return {
        url: blob.url,
        downloadUrl: blob.downloadUrl,
        pathname: blob.pathname,
        size: file.size,
      }
    } catch (error) {
      console.error("Error uploading to blob storage:", error)
      return null
    }
  }

  static async deleteImage(url: string): Promise<boolean> {
    try {
      await del(url)
      return true
    } catch (error) {
      console.error("Error deleting from blob storage:", error)
      return false
    }
  }

  static async listImages(prefix?: string) {
    try {
      const { blobs } = await list({
        prefix: prefix || "products/",
        limit: 100,
      })
      return blobs
    } catch (error) {
      console.error("Error listing blob storage:", error)
      return []
    }
  }

  static validateImageFile(file: File): { valid: boolean; error?: string } {
    // Check file type
    if (!file.type.startsWith("image/")) {
      return { valid: false, error: "File must be an image" }
    }

    // Check file size (max 10MB)
    const maxSize = 10 * 1024 * 1024
    if (file.size > maxSize) {
      return { valid: false, error: "File size must be less than 10MB" }
    }

    // Check supported formats
    const supportedTypes = ["image/jpeg", "image/jpg", "image/png", "image/webp", "image/gif"]
    if (!supportedTypes.includes(file.type)) {
      return { valid: false, error: "Supported formats: JPEG, PNG, WebP, GIF" }
    }

    return { valid: true }
  }

  static generateImagePath(productId: string, filename: string): string {
    const timestamp = Date.now()
    const cleanFilename = filename.replace(/[^a-zA-Z0-9.-]/g, "_")
    return `products/${productId}/${timestamp}_${cleanFilename}`
  }
}
