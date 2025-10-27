"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { 
  User, 
  LogOut, 
  Settings, 
  Shield, 
  Crown,
  Menu,
  X
} from "lucide-react"
import { useAuth } from "@/lib/auth-context"
import { useAdminAuth } from "@/lib/admin-auth"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { toast } from "sonner"

export function AuthNav() {
  const { user, logout, isAuthenticated } = useAuth()
  const { user: adminUser, logout: adminLogout, isAuthenticated: isAdminAuthenticated } = useAdminAuth()
  const router = useRouter()
  const [isLoggingOut, setIsLoggingOut] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

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

  const getInitials = (firstName: string, lastName: string) => {
    return `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase()
  }

  const getUserTypeColor = () => {
    if (isAdmin) {
      return "bg-gradient-to-r from-yellow-500 to-orange-500"
    }
    if (currentUser?.userType === "employee") {
      return "bg-gradient-to-r from-purple-500 to-pink-500"
    }
    return "bg-gradient-to-r from-cyan-500 to-blue-500"
  }

  const getUserTypeLabel = () => {
    if (isAdmin) {
      return adminUser?.role === "ceo" ? "CEO" : "Admin"
    }
    return currentUser?.userType === "employee" ? "Employee" : "Customer"
  }

  const getUserTypeIcon = () => {
    if (isAdmin) {
      return <Crown className="h-4 w-4" />
    }
    return <Shield className="h-4 w-4" />
  }

  // Desktop Navigation
  const DesktopNav = () => {
    if (currentUser) {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="relative h-10 w-10 rounded-full">
              <Avatar className="h-10 w-10">
                <AvatarImage src={currentUser.avatar} alt={currentUser.name || `${currentUser.firstName} ${currentUser.lastName}`} />
                <AvatarFallback className={`text-white text-sm font-semibold ${getUserTypeColor()}`}>
                  {getInitials(currentUser.firstName || currentUser.name?.split(' ')[0] || '', currentUser.lastName || currentUser.name?.split(' ')[1] || '')}
                </AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56 bg-gray-900 border-gray-700" align="end" forceMount>
            <DropdownMenuLabel className="font-normal">
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium leading-none text-white">
                  {currentUser.name || `${currentUser.firstName} ${currentUser.lastName}`}
                </p>
                <p className="text-xs leading-none text-gray-400">{currentUser.email}</p>
                <div className="flex items-center gap-2 mt-1">
                  {getUserTypeIcon()}
                  <Badge variant="secondary" className="bg-gray-700 text-gray-300 text-xs">
                    {getUserTypeLabel()}
                  </Badge>
                </div>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator className="bg-gray-700" />
            <DropdownMenuItem 
              className="text-gray-300 hover:bg-gray-800 hover:text-white cursor-pointer"
              onClick={() => router.push("/profile")}
            >
              <User className="mr-2 h-4 w-4" />
              <span>Profile</span>
            </DropdownMenuItem>
            <DropdownMenuItem 
              className="text-gray-300 hover:bg-gray-800 hover:text-white cursor-pointer"
              onClick={() => router.push("/profile/settings")}
            >
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator className="bg-gray-700" />
            <DropdownMenuItem 
              className="text-red-400 hover:bg-red-500 hover:text-white cursor-pointer"
              onClick={handleLogout}
              disabled={isLoggingOut}
            >
              <LogOut className="mr-2 h-4 w-4" />
              <span>{isLoggingOut ? "Logging out..." : "Logout"}</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    }

    return (
      <div className="flex items-center gap-4">
        <Button variant="ghost" className="text-gray-300 hover:text-white" asChild>
          <Link href="/auth/login">Sign In</Link>
        </Button>
        <Button className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600" asChild>
          <Link href="/auth/signup">Sign Up</Link>
        </Button>
      </div>
    )
  }

  // Mobile Navigation
  const MobileNav = () => {
    if (currentUser) {
      return (
        <div className="flex items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                <Avatar className="h-10 w-10">
                  <AvatarImage src={currentUser.avatar} alt={currentUser.name || `${currentUser.firstName} ${currentUser.lastName}`} />
                  <AvatarFallback className={`text-white text-sm font-semibold ${getUserTypeColor()}`}>
                    {getInitials(currentUser.firstName || currentUser.name?.split(' ')[0] || '', currentUser.lastName || currentUser.name?.split(' ')[1] || '')}
                  </AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 bg-gray-900 border-gray-700" align="end" forceMount>
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium leading-none text-white">
                    {currentUser.name || `${currentUser.firstName} ${currentUser.lastName}`}
                  </p>
                  <p className="text-xs leading-none text-gray-400">{currentUser.email}</p>
                  <div className="flex items-center gap-2 mt-1">
                    {getUserTypeIcon()}
                    <Badge variant="secondary" className="bg-gray-700 text-gray-300 text-xs">
                      {getUserTypeLabel()}
                    </Badge>
                  </div>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator className="bg-gray-700" />
              <DropdownMenuItem 
                className="text-gray-300 hover:bg-gray-800 hover:text-white cursor-pointer"
                onClick={() => router.push("/profile")}
              >
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
              </DropdownMenuItem>
              <DropdownMenuItem 
                className="text-gray-300 hover:bg-gray-800 hover:text-white cursor-pointer"
                onClick={() => router.push("/profile/settings")}
              >
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator className="bg-gray-700" />
              <DropdownMenuItem 
                className="text-red-400 hover:bg-red-500 hover:text-white cursor-pointer"
                onClick={handleLogout}
                disabled={isLoggingOut}
              >
                <LogOut className="mr-2 h-4 w-4" />
                <span>{isLoggingOut ? "Logging out..." : "Logout"}</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      )
    }

    return (
      <div className="flex flex-col gap-2">
        <Button variant="ghost" className="text-gray-300 hover:text-white justify-start" asChild>
          <Link href="/auth/login">Sign In</Link>
        </Button>
        <Button className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 justify-start" asChild>
          <Link href="/auth/signup">Sign Up</Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="flex items-center gap-4">
      {/* Desktop Navigation */}
      <div className="hidden md:block">
        <DesktopNav />
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        <DropdownMenu open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="sm" className="md:hidden">
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56 bg-gray-900 border-gray-700" align="end" forceMount>
            <MobileNav />
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  )
}