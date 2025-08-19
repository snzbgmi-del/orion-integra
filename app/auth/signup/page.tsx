import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, ArrowLeft, User, Building, Crown } from "lucide-react"
import Link from "next/link"

export default function SignupPage() {
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
              Join Orion Integra
            </CardTitle>
            <p className="text-gray-400">Choose your account type to get started</p>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              {/* Customer Signup */}
              <Card className="bg-black/30 border-cyan-400/30 hover:border-cyan-400/60 transition-all cursor-pointer group">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <User className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white">Customer Account</h3>
                      <p className="text-sm text-gray-400">For homeowners and businesses</p>
                    </div>
                  </div>
                  <ul className="mt-4 space-y-2 text-sm text-gray-400">
                    <li>• Track orders and installations</li>
                    <li>• Access support tickets</li>
                    <li>• View warranty information</li>
                  </ul>
                  <Button className="w-full mt-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600">
                    Sign Up as Customer
                  </Button>
                </CardContent>
              </Card>

              {/* Employee Access Request */}
              <Card className="bg-black/30 border-purple-400/30 hover:border-purple-400/60 transition-all cursor-pointer group">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Building className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white">Employee Access</h3>
                      <p className="text-sm text-gray-400">Request access to CRM system</p>
                    </div>
                  </div>
                  <ul className="mt-4 space-y-2 text-sm text-gray-400">
                    <li>• Lead management system</li>
                    <li>• Order tracking dashboard</li>
                    <li>• Customer database access</li>
                  </ul>
                  <Button
                    variant="outline"
                    className="w-full mt-4 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-black bg-transparent"
                  >
                    Request Employee Access
                  </Button>
                </CardContent>
              </Card>

              {/* CEO Login Info */}
              <Card className="bg-black/30 border-yellow-400/30">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center">
                      <Crown className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white">CEO/Admin Access</h3>
                      <p className="text-sm text-gray-400">Exclusive access for executives</p>
                    </div>
                  </div>
                  <div className="mt-4 p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
                    <p className="text-sm text-yellow-300">
                      CEO accounts are invitation-only. Contact your system administrator for access.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <p className="text-gray-400">
                Already have an account?{" "}
                <Link href="/auth/login" className="text-cyan-400 hover:text-cyan-300 font-medium">
                  Sign in
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
