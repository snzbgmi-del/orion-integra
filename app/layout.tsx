import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { CartProvider } from "@/lib/cart-context"
import { AuthProvider } from "@/lib/auth-context"
import { AdminAuthProvider } from "@/lib/admin-auth"
import { Toaster } from "sonner"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Orion Integra - Advanced Security Solutions",
  description:
    "Professional CCTV systems, intelligent monitoring, and comprehensive security solutions for homes and businesses. Securing your future, today.",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <AuthProvider>
          <AdminAuthProvider>
            <CartProvider>
              {children}
              <Toaster 
                position="top-right"
                richColors
                closeButton
                duration={4000}
              />
            </CartProvider>
          </AdminAuthProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
