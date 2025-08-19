"use client"

import * as React from "react"
import type { AdminUser } from "./admin-data"

type AdminAuthContext = {
  user: AdminUser | null
  isAuthenticated: boolean
  isLoading: boolean
  login: (email: string, password: string) => Promise<boolean>
  logout: () => void
  hasPermission: (permission: string) => boolean
}

const Ctx = React.createContext<AdminAuthContext | null>(null)

export function AdminAuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = React.useState<AdminUser | null>(null)
  const [isLoading, setIsLoading] = React.useState(true)

  // Load session from localStorage on mount (client-side only)
  React.useEffect(() => {
    if (typeof window === "undefined") return

    try {
      const savedUser = localStorage.getItem("admin_user")
      const savedToken = localStorage.getItem("admin_token")

      if (savedUser && savedToken) {
        const parsedUser = JSON.parse(savedUser)
        setUser(parsedUser)
        console.log("Restored admin session:", parsedUser.email)
      }
    } catch (error) {
      console.error("Error loading admin session:", error)
      if (typeof window !== "undefined") {
        localStorage.removeItem("admin_user")
        localStorage.removeItem("admin_token")
      }
    } finally {
      setIsLoading(false)
    }
  }, [])

  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      console.log("Attempting login with:", { email })

      const response = await fetch("/api/admin/auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      })

      const data = await response.json()
      console.log("Login response:", data)

      if (data.success && data.user) {
        setUser(data.user)
        if (typeof window !== "undefined") {
          localStorage.setItem("admin_user", JSON.stringify(data.user))
          localStorage.setItem("admin_token", data.token)
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

  const logout = () => {
    setUser(null)
    if (typeof window !== "undefined") {
      localStorage.removeItem("admin_user")
      localStorage.removeItem("admin_token")
    }
    console.log("User logged out")
  }

  const hasPermission = (permission: string): boolean => {
    if (!user) return false
    if (user.permissions.includes("all")) return true
    return user.permissions.includes(permission)
  }

  const value: AdminAuthContext = {
    user,
    isAuthenticated: !!user,
    isLoading,
    login,
    logout,
    hasPermission,
  }

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>
}

export function useAdminAuth(): AdminAuthContext {
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
      logout() {},
      hasPermission() {
        return false
      },
    }
  }

  if (!ctx) {
    throw new Error("useAdminAuth must be used within an AdminAuthProvider")
  }

  return ctx
}
