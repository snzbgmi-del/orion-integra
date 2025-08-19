import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, ArrowLeft, CheckCircle, Wrench, Users, Clock, Phone, Award } from "lucide-react"
import Link from "next/link"

export default function ServicesPage() {
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
              <Link href="/services" className="text-cyan-400">
                Services
              </Link>
              <Link href="/about" className="hover:text-cyan-400 transition-colors">
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
              Our Services
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Complete security solutions from consultation to ongoing maintenance
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Professional Installation */}
            <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-purple-500/20 hover:border-cyan-400/50 transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mb-6">
                  <Wrench className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Professional Installation</h3>
                <p className="text-gray-400 mb-6">
                  Expert installation services with comprehensive site survey and system optimization.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="h-5 w-5 text-cyan-400 mr-3" />
                    Free site survey and consultation
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="h-5 w-5 text-cyan-400 mr-3" />
                    Professional cable management
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="h-5 w-5 text-cyan-400 mr-3" />
                    System testing and configuration
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="h-5 w-5 text-cyan-400 mr-3" />
                    User training and documentation
                  </li>
                </ul>
                <Button className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600">
                  Schedule Installation
                </Button>
              </CardContent>
            </Card>

            {/* AMC & Maintenance */}
            <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-purple-500/20 hover:border-cyan-400/50 transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mb-6">
                  <Clock className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">AMC & Maintenance</h3>
                <p className="text-gray-400 mb-6">
                  Comprehensive maintenance contracts to keep your security systems running optimally.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="h-5 w-5 text-cyan-400 mr-3" />
                    24/7 technical support hotline
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="h-5 w-5 text-cyan-400 mr-3" />
                    Quarterly maintenance visits
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="h-5 w-5 text-cyan-400 mr-3" />
                    Software updates and patches
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="h-5 w-5 text-cyan-400 mr-3" />
                    Priority repair services
                  </li>
                </ul>
                <Button className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600">
                  Get AMC Quote
                </Button>
              </CardContent>
            </Card>

            {/* Security Consultation */}
            <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-purple-500/20 hover:border-cyan-400/50 transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mb-6">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Security Consultation</h3>
                <p className="text-gray-400 mb-6">
                  Expert security assessment and custom solution design for your specific needs.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="h-5 w-5 text-cyan-400 mr-3" />
                    Comprehensive risk assessment
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="h-5 w-5 text-cyan-400 mr-3" />
                    Custom solution design
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="h-5 w-5 text-cyan-400 mr-3" />
                    Compliance guidance
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="h-5 w-5 text-cyan-400 mr-3" />
                    ROI analysis and budgeting
                  </li>
                </ul>
                <Button className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600">
                  Book Consultation
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-16 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Why Choose Our Services?
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Professional expertise backed by years of experience and cutting-edge technology
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Certified Experts</h3>
              <p className="text-gray-400">Industry-certified technicians with extensive experience</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Quick Response</h3>
              <p className="text-gray-400">Fast response times for all service requests</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">24/7 Support</h3>
              <p className="text-gray-400">+91 6200 399921</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Quality Guarantee</h3>
              <p className="text-gray-400">100% satisfaction guarantee on all our services</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gradient-to-r from-purple-900/20 to-cyan-900/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">Ready to Get Started?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your security needs and get a customized service plan.
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
              <Link href="/quote">Get Quote</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
