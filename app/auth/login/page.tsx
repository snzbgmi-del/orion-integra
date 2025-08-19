import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, ArrowLeft, EyeOff } from "lucide-react"
import Link from "next/link"

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-cyan-900/20" />
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 w-full max-w-md">
        <div className="flex items-center mb-8">
          <Button variant="ghost" className="text-cyan-400 hover:text-cyan-300" asChild>
            <Link href="/">
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Home
            </Link>
          </Button>
        </div>

        <Card className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 border-purple-500/20 backdrop-blur-md">
          <CardHeader className="text-center">
            <div className="flex items-center justify-center mb-4">
              <Shield className="h-12 w-12 text-cyan-400" />
            </div>
            <CardTitle className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Welcome Back
            </CardTitle>
            <p className="text-gray-400">Sign in to your Orion Integra account</p>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <Button
                variant="outline"
                className="w-full border-cyan-400/50 text-cyan-400 hover:bg-cyan-400 hover:text-black bg-transparent"
              >
                Customer Login
              </Button>
              <Button
                variant="outline"
                className="w-full border-purple-400/50 text-purple-400 hover:bg-purple-400 hover:text-black bg-transparent"
              >
                Employee Login
              </Button>
              <Button
                variant="outline"
                className="w-full border-yellow-400/50 text-yellow-400 hover:bg-yellow-400 hover:text-black bg-transparent"
              >
                CEO/Admin Login
              </Button>
            </div>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-gray-600" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-gray-800 px-2 text-gray-400">Or continue with email</span>
              </div>
            </div>

            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg focus:border-cyan-400 focus:outline-none text-white placeholder-gray-500"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Password</label>
                <div className="relative">
                  <input
                    type="password"
                    className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg focus:border-cyan-400 focus:outline-none text-white placeholder-gray-500 pr-12"
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-300"
                  >
                    <EyeOff className="h-5 w-5" />
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="rounded border-gray-600 bg-black/50 text-cyan-400 focus:ring-cyan-400"
                  />
                  <span className="ml-2 text-sm text-gray-400">Remember me</span>
                </label>
                <Link href="/auth/forgot-password" className="text-sm text-cyan-400 hover:text-cyan-300">
                  Forgot password?
                </Link>
              </div>

              <Button className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600">
                Sign In
              </Button>
            </form>

            <div className="text-center">
              <p className="text-gray-400">
                Don't have an account?{" "}
                <Link href="/auth/signup" className="text-cyan-400 hover:text-cyan-300 font-medium">
                  Sign up
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
