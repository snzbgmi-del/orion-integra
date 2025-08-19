import { type NextRequest, NextResponse } from "next/server"
import { adminUsers } from "@/lib/admin-data"

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json()

    console.log("Login attempt:", { email, password })

    // Find user by email
    const user = adminUsers.find((u) => u.email.toLowerCase() === email.toLowerCase())

    if (!user) {
      console.log("User not found:", email)
      return NextResponse.json(
        {
          success: false,
          message: "Invalid email or password",
        },
        { status: 401 },
      )
    }

    // For demo purposes, accept any password
    // In production, you would verify the password hash
    console.log("User found:", user.email, "Role:", user.role)

    // Generate a simple token (in production, use JWT)
    const token = `admin_${user.id}_${Date.now()}`

    // Update last login
    const updatedUser = {
      ...user,
      lastLogin: new Date(),
    }

    console.log("Login successful for:", user.email)

    return NextResponse.json({
      success: true,
      user: updatedUser,
      token,
      message: "Login successful",
    })
  } catch (error) {
    console.error("Auth API error:", error)
    return NextResponse.json(
      {
        success: false,
        message: "Internal server error",
      },
      { status: 500 },
    )
  }
}
