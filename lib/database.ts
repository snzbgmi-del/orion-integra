import { neon } from "@neondatabase/serverless"

// Lazy initialization to prevent build-time errors
let sqlClient: ReturnType<typeof neon> | null = null

function getSqlClient() {
  if (!sqlClient) {
    const connectionString = process.env.DATABASE_URL
    if (!connectionString) {
      throw new Error("DATABASE_URL environment variable is not set")
    }
    sqlClient = neon(connectionString)
  }
  return sqlClient
}

export interface ProductImage {
  id: string
  product_id: string
  url: string
  filename: string
  alt: string
  is_primary: boolean
  sort_order: number
  size: number
  uploaded_at: Date
}

export interface ProductWithImages {
  id: string
  name: string
  description: string
  price: number
  category: string
  stock: number
  created_at: Date
  updated_at: Date
  images: ProductImage[]
}

export class DatabaseService {
  static async getProductImages(productId: string): Promise<ProductImage[]> {
    const sql = getSqlClient()

    try {
      const result = await sql`
        SELECT * FROM product_images 
        WHERE product_id = ${productId} 
        ORDER BY sort_order ASC, uploaded_at DESC
      `
      return result as ProductImage[]
    } catch (error) {
      console.error("Error fetching product images:", error)
      return []
    }
  }

  static async addProductImage(image: Omit<ProductImage, "uploaded_at">): Promise<ProductImage | null> {
    const sql = getSqlClient()

    try {
      const result = await sql`
        INSERT INTO product_images (
          id, product_id, url, filename, alt, is_primary, sort_order, size
        ) VALUES (
          ${image.id}, ${image.product_id}, ${image.url}, ${image.filename}, 
          ${image.alt}, ${image.is_primary}, ${image.sort_order}, ${image.size}
        )
        RETURNING *
      `
      return (result as ProductImage[])[0] as ProductImage
    } catch (error) {
      console.error("Error adding product image:", error)
      return null
    }
  }

  static async deleteProductImage(imageId: string): Promise<boolean> {
    const sql = getSqlClient()

    try {
      await sql`DELETE FROM product_images WHERE id = ${imageId}`
      return true
    } catch (error) {
      console.error("Error deleting product image:", error)
      return false
    }
  }

  static async updateImageOrder(imageId: string, sortOrder: number): Promise<boolean> {
    const sql = getSqlClient()

    try {
      await sql`
        UPDATE product_images 
        SET sort_order = ${sortOrder} 
        WHERE id = ${imageId}
      `
      return true
    } catch (error) {
      console.error("Error updating image order:", error)
      return false
    }
  }

  static async setPrimaryImage(productId: string, imageId: string): Promise<boolean> {
    const sql = getSqlClient()

    try {
      // First, unset all primary images for this product
      await sql`
        UPDATE product_images 
        SET is_primary = false 
        WHERE product_id = ${productId}
      `

      // Then set the specified image as primary
      await sql`
        UPDATE product_images 
        SET is_primary = true 
        WHERE id = ${imageId} AND product_id = ${productId}
      `

      return true
    } catch (error) {
      console.error("Error setting primary image:", error)
      return false
    }
  }
}
