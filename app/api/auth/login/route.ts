import { type NextRequest, NextResponse } from "next/server"

// Mock user database - in production, this would be a real database
const mockUsers = [
  {
    id: "customer-1",
    firstName: "John",
    lastName: "Doe",
    email: "customer@example.com",
    password: "password123", // In production, this would be hashed
    userType: "customer",
    phone: "+1 (555) 123-4567",
    company: null,
    createdAt: new Date("2024-01-01"),
  },
  {
    id: "employee-1",
    firstName: "Jane",
    lastName: "Smith",
    email: "employee@example.com",
    password: "password123", // In production, this would be hashed
    userType: "employee",
    phone: "+1 (555) 987-6543",
    company: "Orion Integra",
    createdAt: new Date("2024-01-01"),
  },
]

export async function POST(request: NextRequest) {
  try {
    const { email, password, userType } = await request.json()

    console.log("Login attempt:", { email, userType })

    // Find user by email and user type
    const user = mockUsers.find(
      (u) => u.email.toLowerCase() === email.toLowerCase() && u.userType === userType
    )

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

    // Check password (in production, you would verify the password hash)
    if (user.password !== password) {
      console.log("Invalid password for user:", email)
      return NextResponse.json(
        {
          success: false,
          message: "Invalid email or password",
        },
        { status: 401 },
      )
    }

    // Generate a simple token (in production, use JWT)
    const token = `${user.userType}_${user.id}_${Date.now()}`

    // Return user data without password
    const { password: _, ...userWithoutPassword } = user

    console.log("Login successful for:", user.email)

    return NextResponse.json({
      success: true,
      user: userWithoutPassword,
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