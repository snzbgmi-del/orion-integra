"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/lib/auth-context"
import { useAdminAuth } from "@/lib/admin-auth"
import { UserProfile } from "@/components/user-profile"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function ProfilePage() {
  const { user, isAuthenticated, isLoading } = useAuth()
  const { user: adminUser, isAuthenticated: isAdminAuthenticated, isLoading: isAdminLoading } = useAdminAuth()
  const router = useRouter()

  useEffect(() => {
    if (!isLoading && !isAdminLoading && !isAuthenticated && !isAdminAuthenticated) {
      router.push("/auth/login")
    }
  }, [isAuthenticated, isAdminAuthenticated, isLoading, isAdminLoading, router])

  if (isLoading || isAdminLoading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-400 mx-auto mb-4"></div>
          <p className="text-gray-400">Loading...</p>
        </div>
      </div>
    )
  }

  if (!isAuthenticated && !isAdminAuthenticated) {
    return null
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-purple-500/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Button variant="ghost" className="text-cyan-400 hover:text-cyan-300" asChild>
                <Link href="/">
                  <ArrowLeft className="h-5 w-5 mr-2" />
                  Back to Home
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2">
                Your Profile
              </h1>
              <p className="text-gray-400">
                Manage your account information and preferences
              </p>
            </div>

            <UserProfile />
          </div>
        </div>
      </div>
    </div>
  )
}