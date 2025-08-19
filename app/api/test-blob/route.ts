import { type NextRequest, NextResponse } from "next/server"
import { put } from "@vercel/blob"

export async function POST(request: NextRequest) {
  try {
    const { filename, contentType } = await request.json()

    // Create a simple test file
    const testContent = `Test file created at ${new Date().toISOString()}`
    const blob = new Blob([testContent], { type: contentType || "text/plain" })

    // Upload to Vercel Blob
    const result = await put(`test/${filename}`, blob, {
      access: "public",
    })

    return NextResponse.json({
      success: true,
      url: result.url,
      pathname: result.pathname,
      message: "Vercel Blob upload successful",
    })
  } catch (error) {
    console.error("Blob test error:", error)
    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : "Unknown error",
        success: false,
      },
      { status: 500 },
    )
  }
}
