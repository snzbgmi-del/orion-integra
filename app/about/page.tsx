import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, ArrowLeft, Target, Eye, Users, Award, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-purple-500/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Shield className="h-8 w-8 text-cyan-400" />
              <Link
                href="/"
                className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
              >
                Orion Integra
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="hover:text-cyan-400 transition-colors">
                Home
              </Link>
              <Link href="/products" className="hover:text-cyan-400 transition-colors">
                Products
              </Link>
              <Link href="/services" className="hover:text-cyan-400 transition-colors">
                Services
              </Link>
              <Link href="/about" className="text-cyan-400">
                About
              </Link>
              <Link href="/contact" className="hover:text-cyan-400 transition-colors">
                Contact
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Button
                variant="outline"
                className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black bg-transparent"
                asChild
              >
                <Link href="/auth/login">Login</Link>
              </Button>
              <Button
                className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600"
                asChild
              >
                <Link href="/auth/signup">Sign Up</Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-purple-900/20 to-cyan-900/20">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-8">
            <Button variant="ghost" className="text-cyan-400 hover:text-cyan-300" asChild>
              <Link href="/">
                <ArrowLeft className="h-5 w-5 mr-2" />
                Back to Home
              </Link>
            </Button>
          </div>
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-200 to-purple-200 bg-clip-text text-transparent">
              About Orion Integra
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Leading the future of security technology with innovative solutions and unmatched expertise
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Our Story
              </h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Founded in 2018, Orion Integra emerged from a vision to revolutionize the security industry through
                cutting-edge technology and exceptional service. What started as a small team of passionate security
                experts has grown into a leading provider of comprehensive security solutions.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                We believe that security is not just about surveillance—it's about peace of mind, protection of assets,
                and enabling businesses and families to thrive without worry. Our commitment to innovation and customer
                satisfaction has made us the trusted choice for thousands of clients.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">500+</div>
                  <div className="text-gray-400">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">98%</div>
                  <div className="text-gray-400">Customer Satisfaction</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-2xl p-8">
                <img
                  src="/placeholder.svg?height=400&width=400"
                  alt="Orion Integra Team"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-purple-500/20">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mb-6">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Our Mission</h3>
                <p className="text-gray-300 leading-relaxed">
                  To provide innovative, reliable, and comprehensive security solutions that protect what matters most
                  to our clients. We strive to stay ahead of emerging threats through continuous innovation and
                  exceptional service delivery.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-purple-500/20">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mb-6">
                  <Eye className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Our Vision</h3>
                <p className="text-gray-300 leading-relaxed">
                  To be the leading security solutions provider, recognized for our technological innovation,
                  customer-centric approach, and contribution to creating safer communities and businesses across the
                  region.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Our Values
            </h2>
            <p className="text-gray-400 text-lg">The principles that guide everything we do</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Security First</h3>
              <p className="text-gray-400">Every solution is designed with security as the top priority</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Customer Focus</h3>
              <p className="text-gray-400">Our clients' needs drive our innovation and service excellence</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Excellence</h3>
              <p className="text-gray-400">We maintain the highest standards in everything we deliver</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Integrity</h3>
              <p className="text-gray-400">Honest, transparent, and ethical in all our business practices</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Our Leadership Team
            </h2>
            <p className="text-gray-400 text-lg">Experienced professionals leading the way in security innovation</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-purple-500/20 text-center">
              <CardContent className="p-8">
                <div className="w-24 h-24 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">MS</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">Md Shahnawaz</h3>
                <p className="text-cyan-400 mb-4">CEO & Founder</p>
                <p className="text-gray-400 text-sm">
                  5+ years in security technology with expertise in system design and business strategy.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-purple-500/20 text-center">
              <CardContent className="p-8">
                <div className="w-24 h-24 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">HA</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">Hasmat Ali</h3>
                <p className="text-cyan-400 mb-4">CTO</p>
                <p className="text-gray-400 text-sm">
                  Technology leader with deep expertise in AI, IoT, and cybersecurity solutions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-900/20 to-cyan-900/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">Ready to Secure Your Future?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied customers who trust Orion Integra for their security needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600"
              asChild
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black bg-transparent"
              asChild
            >
              <Link href="/products">View Products</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
