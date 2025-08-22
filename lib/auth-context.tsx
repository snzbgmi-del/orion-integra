"use client"

import * as React from "react"

interface User {
  id: string
  firstName: string
  lastName: string
  email: string
  userType: "customer" | "employee"
  phone: string
  company?: string
  createdAt: Date
}

type AuthContext = {
  user: User | null
  isAuthenticated: boolean
  isLoading: boolean
  login: (email: string, password: string, userType: "customer" | "employee") => Promise<boolean>
  signup: (userData: any) => Promise<boolean>
  logout: () => void
  hasPermission: (permission: string) => boolean
}

const Ctx = React.createContext<AuthContext | null>(null)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = React.useState<User | null>(null)
  const [isLoading, setIsLoading] = React.useState(true)

  // Load session from localStorage on mount (client-side only)
  React.useEffect(() => {
    if (typeof window === "undefined") return

    try {
      const savedUser = localStorage.getItem("user")
      const savedToken = localStorage.getItem("token")

      if (savedUser && savedToken) {
        const parsedUser = JSON.parse(savedUser)
        setUser(parsedUser)
        console.log("Restored user session:", parsedUser.email)
      }
    } catch (error) {
      console.error("Error loading user session:", error)
      if (typeof window !== "undefined") {
        localStorage.removeItem("user")
        localStorage.removeItem("token")
      }
    } finally {
      setIsLoading(false)
    }
  }, [])

  const login = async (email: string, password: string, userType: "customer" | "employee"): Promise<boolean> => {
    try {
      console.log("Attempting login with:", { email, userType })

      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password, userType }),
      })

      const data = await response.json()
      console.log("Login response:", data)

      if (data.success && data.user) {
        setUser(data.user)
        if (typeof window !== "undefined") {
          localStorage.setItem("user", JSON.stringify(data.user))
          localStorage.setItem("token", data.token)
        }
        console.log("Login successful, user set:", data.user)
        return true
      } else {
        console.log("Login failed:", data.message)
        return false
      }
    } catch (error) {
      console.error("Login error:", error)
      return false
    }
  }

  const signup = async (userData: any): Promise<boolean> => {
    try {
      console.log("Attempting signup with:", { email: userData.email, userType: userData.userType })

      const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      })

      const data = await response.json()
      console.log("Signup response:", data)

      if (data.success) {
        console.log("Signup successful")
        return true
      } else {
        console.log("Signup failed:", data.message)
        return false
      }
    } catch (error) {
      console.error("Signup error:", error)
      return false
    }
  }

  const logout = () => {
    setUser(null)
    if (typeof window !== "undefined") {
      localStorage.removeItem("user")
      localStorage.removeItem("token")
    }
    console.log("User logged out")
  }

  const hasPermission = (permission: string): boolean => {
    if (!user) return false
    
    // Define permissions based on user type
    const permissions = {
      customer: ["view_orders", "create_support_ticket", "view_warranty"],
      employee: ["view_orders", "create_support_ticket", "view_warranty", "view_customers", "manage_orders"],
    }
    
    return permissions[user.userType]?.includes(permission) || false
  }

  const value: AuthContext = {
    user,
    isAuthenticated: !!user,
    isLoading,
    login,
    signup,
    logout,
    hasPermission,
  }

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>
}

export function useAuth(): AuthContext {
  const ctx = React.useContext(Ctx)

  // Safe fallback for SSR/build time
  if (!ctx && typeof window === "undefined") {
    return {
      user: null,
      isAuthenticated: false,
      isLoading: false,
      async login() {
        return false
      },
      async signup() {
        return false
      },
      logout() {},
      hasPermission() {
        return false
      },
    }
  }

  if (!ctx) {
    throw new Error("useAuth must be used within an AuthProvider")
  }

  return ctx
}