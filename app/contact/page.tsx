import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, ArrowLeft, Phone, Mail, MapPin, Clock, Send } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
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
              <Link href="/about" className="hover:text-cyan-400 transition-colors">
                About
              </Link>
              <Link href="/contact" className="text-cyan-400">
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
              Contact Us
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Get in touch with our security experts for consultation and support
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Get In Touch
              </h2>

              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
                    <p className="text-gray-300">+91 98765 43210</p>
                    <p className="text-gray-300">+91 87654 32109</p>
                    <p className="text-gray-400 text-sm mt-1">Available 24/7 for emergencies</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
                    <p className="text-gray-300">info@orionintegra.com</p>
                    <p className="text-gray-300">support@orionintegra.com</p>
                    <p className="text-gray-400 text-sm mt-1">We'll respond within 2 hours</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Office Address</h3>
                    <p className="text-gray-300">123 Tech Park, Sector 18</p>
                    <p className="text-gray-300">Cyber City, Gurgaon - 122015</p>
                    <p className="text-gray-300">Haryana, India</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Business Hours</h3>
                    <p className="text-gray-300">Monday - Friday: 9:00 AM - 7:00 PM</p>
                    <p className="text-gray-300">Saturday: 10:00 AM - 5:00 PM</p>
                    <p className="text-gray-300">Sunday: Emergency calls only</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-purple-500/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-white">Send us a Message</h3>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">First Name</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg focus:border-cyan-400 focus:outline-none text-white placeholder-gray-500"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Last Name</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg focus:border-cyan-400 focus:outline-none text-white placeholder-gray-500"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg focus:border-cyan-400 focus:outline-none text-white placeholder-gray-500"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Phone</label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg focus:border-cyan-400 focus:outline-none text-white placeholder-gray-500"
                      placeholder="+91 98765 43210"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Service Interest</label>
                    <select className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg focus:border-cyan-400 focus:outline-none text-white">
                      <option value="">Select a service</option>
                      <option value="installation">Professional Installation</option>
                      <option value="amc">AMC & Maintenance</option>
                      <option value="consultation">Security Consultation</option>
                      <option value="products">Product Purchase</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg focus:border-cyan-400 focus:outline-none text-white placeholder-gray-500"
                      placeholder="Tell us about your security needs..."
                    />
                  </div>

                  <Button className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600">
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Visit Our Office
            </h2>
            <p className="text-gray-400">Located in the heart of Cyber City, Gurgaon</p>
          </div>

          <div className="bg-gray-800 rounded-lg p-4 h-96 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-16 w-16 text-cyan-400 mx-auto mb-4" />
              <p className="text-gray-300">Interactive map will be integrated here</p>
              <p className="text-gray-400 text-sm">123 Tech Park, Sector 18, Cyber City, Gurgaon</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-purple-500/20">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-white mb-3">How quickly can you respond to service calls?</h3>
                <p className="text-gray-400">
                  We provide 24/7 emergency support with response times of 2-4 hours for critical issues and same-day
                  service for regular maintenance.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-purple-500/20">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-white mb-3">Do you provide free consultations?</h3>
                <p className="text-gray-400">
                  Yes, we offer free initial consultations and site surveys to assess your security needs and provide
                  customized recommendations.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-purple-500/20">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-white mb-3">What areas do you serve?</h3>
                <p className="text-gray-400">
                  We serve the entire NCR region including Delhi, Gurgaon, Noida, Faridabad, and surrounding areas with
                  full installation and support services.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-purple-500/20">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-white mb-3">Do you offer financing options?</h3>
                <p className="text-gray-400">
                  Yes, we provide flexible financing options and EMI plans to make our security solutions accessible to
                  all customers.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
