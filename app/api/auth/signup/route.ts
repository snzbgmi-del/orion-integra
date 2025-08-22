import { type NextRequest, NextResponse } from "next/server"

// Mock user database - in production, this would be a real database
let mockUsers: any[] = [
  {
    id: "customer-1",
    firstName: "John",
    lastName: "Doe",
    email: "customer@example.com",
    password: "password123",
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
    password: "password123",
    userType: "employee",
    phone: "+1 (555) 987-6543",
    company: "Orion Integra",
    createdAt: new Date("2024-01-01"),
  },
]

export async function POST(request: NextRequest) {
  try {
    const {
      firstName,
      lastName,
      email,
      password,
      phone,
      company,
      userType,
    } = await request.json()

    console.log("Signup attempt:", { email, userType })

    // Check if user already exists
    const existingUser = mockUsers.find(
      (u) => u.email.toLowerCase() === email.toLowerCase()
    )

    if (existingUser) {
      return NextResponse.json(
        {
          success: false,
          message: "User with this email already exists",
        },
        { status: 409 },
      )
    }

    // Validate required fields
    if (!firstName || !lastName || !email || !password || !phone) {
      return NextResponse.json(
        {
          success: false,
          message: "All required fields must be provided",
        },
        { status: 400 },
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        {
          success: false,
          message: "Please provide a valid email address",
        },
        { status: 400 },
      )
    }

    // Validate password strength
    if (password.length < 8) {
      return NextResponse.json(
        {
          success: false,
          message: "Password must be at least 8 characters long",
        },
        { status: 400 },
      )
    }

    // Validate phone number
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/
    if (!phoneRegex.test(phone.replace(/\s/g, ""))) {
      return NextResponse.json(
        {
          success: false,
          message: "Please provide a valid phone number",
        },
        { status: 400 },
      )
    }

    // Validate company name for employees
    if (userType === "employee" && !company?.trim()) {
      return NextResponse.json(
        {
          success: false,
          message: "Company name is required for employee accounts",
        },
        { status: 400 },
      )
    }

    // Create new user
    const newUser = {
      id: `${userType}-${Date.now()}`,
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      email: email.toLowerCase().trim(),
      password, // In production, this would be hashed
      userType,
      phone: phone.trim(),
      company: company?.trim() || null,
      createdAt: new Date(),
    }

    // Add user to database (in production, this would be a real database operation)
    mockUsers.push(newUser)

    console.log("User created successfully:", newUser.email)

    // Return user data without password
    const { password: _, ...userWithoutPassword } = newUser

    return NextResponse.json({
      success: true,
      user: userWithoutPassword,
      message: "Account created successfully",
    })
  } catch (error) {
    console.error("Signup API error:", error)
    return NextResponse.json(
      {
        success: false,
        message: "Internal server error",
      },
      { status: 500 },
    )
  }
}