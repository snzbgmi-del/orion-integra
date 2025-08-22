"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { 
  User, 
  Mail, 
  Phone, 
  Building, 
  Calendar, 
  LogOut, 
  Settings,
  Shield,
  Crown
} from "lucide-react"
import { useAuth } from "@/lib/auth-context"
import { useAdminAuth } from "@/lib/admin-auth"
import { useRouter } from "next/navigation"
import { toast } from "sonner"

export function UserProfile() {
  const { user, logout, isAuthenticated } = useAuth()
  const { user: adminUser, logout: adminLogout, isAuthenticated: isAdminAuthenticated } = useAdminAuth()
  const router = useRouter()
  const [isLoggingOut, setIsLoggingOut] = useState(false)

  const handleLogout = async () => {
    setIsLoggingOut(true)
    try {
      if (isAdminAuthenticated) {
        adminLogout()
        toast.success("Admin logged out successfully")
      } else if (isAuthenticated) {
        logout()
        toast.success("Logged out successfully")
      }
      router.push("/")
    } catch (error) {
      console.error("Logout error:", error)
      toast.error("Error logging out")
    } finally {
      setIsLoggingOut(false)
    }
  }

  const currentUser = adminUser || user
  const isAdmin = !!adminUser

  if (!currentUser) {
    return null
  }

  const getInitials = (firstName: string, lastName: string) => {
    return `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase()
  }

  const getUserTypeIcon = () => {
    if (isAdmin) {
      return <Crown className="h-4 w-4" />
    }
    return <Shield className="h-4 w-4" />
  }

  const getUserTypeColor = () => {
    if (isAdmin) {
      return "bg-gradient-to-r from-yellow-500 to-orange-500"
    }
    if (currentUser.userType === "employee") {
      return "bg-gradient-to-r from-purple-500 to-pink-500"
    }
    return "bg-gradient-to-r from-cyan-500 to-blue-500"
  }

  const getUserTypeLabel = () => {
    if (isAdmin) {
      return adminUser?.role === "ceo" ? "CEO" : "Admin"
    }
    return currentUser.userType === "employee" ? "Employee" : "Customer"
  }

  return (
    <Card className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 border-purple-500/20 backdrop-blur-md">
      <CardHeader className="text-center">
        <div className="flex justify-center mb-4">
          <Avatar className="h-20 w-20">
            <AvatarImage src={currentUser.avatar} alt={currentUser.name || `${currentUser.firstName} ${currentUser.lastName}`} />
            <AvatarFallback className={`text-white text-lg font-semibold ${getUserTypeColor()}`}>
              {getInitials(currentUser.firstName || currentUser.name?.split(' ')[0] || '', currentUser.lastName || currentUser.name?.split(' ')[1] || '')}
            </AvatarFallback>
          </Avatar>
        </div>
        <CardTitle className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
          {currentUser.name || `${currentUser.firstName} ${currentUser.lastName}`}
        </CardTitle>
        <div className="flex items-center justify-center gap-2 mt-2">
          {getUserTypeIcon()}
          <Badge variant="secondary" className="bg-gray-700 text-gray-300">
            {getUserTypeLabel()}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-3">
          <div className="flex items-center gap-3 text-gray-300">
            <Mail className="h-4 w-4 text-cyan-400" />
            <span className="text-sm">{currentUser.email}</span>
          </div>
          
          {currentUser.phone && (
            <div className="flex items-center gap-3 text-gray-300">
              <Phone className="h-4 w-4 text-cyan-400" />
              <span className="text-sm">{currentUser.phone}</span>
            </div>
          )}
          
          {currentUser.company && (
            <div className="flex items-center gap-3 text-gray-300">
              <Building className="h-4 w-4 text-cyan-400" />
              <span className="text-sm">{currentUser.company}</span>
            </div>
          )}
          
          {currentUser.createdAt && (
            <div className="flex items-center gap-3 text-gray-300">
              <Calendar className="h-4 w-4 text-cyan-400" />
              <span className="text-sm">
                Member since {new Date(currentUser.createdAt).toLocaleDateString()}
              </span>
            </div>
          )}
        </div>

        <Separator className="bg-gray-600" />

        <div className="space-y-2">
          <Button 
            variant="outline" 
            className="w-full border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white"
            onClick={() => router.push("/profile/settings")}
          >
            <Settings className="h-4 w-4 mr-2" />
            Account Settings
          </Button>
          
          <Button 
            variant="outline" 
            className="w-full border-red-500/50 text-red-400 hover:bg-red-500 hover:text-white"
            onClick={handleLogout}
            disabled={isLoggingOut}
          >
            <LogOut className="h-4 w-4 mr-2" />
            {isLoggingOut ? "Logging out..." : "Logout"}
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}