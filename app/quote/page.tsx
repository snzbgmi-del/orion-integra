import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, ArrowLeft, Send, Calculator } from "lucide-react"
import Link from "next/link"

export default function QuotePage() {
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
              Request a Quote
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Get a customized security solution tailored to your specific needs
            </p>
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-purple-500/20">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-center bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                <Calculator className="h-8 w-8 mx-auto mb-4 text-cyan-400" />
                Security Solution Quote Request
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <form className="space-y-8">
                {/* Personal Information */}
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Personal Information</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Full Name *</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg focus:border-cyan-400 focus:outline-none text-white placeholder-gray-500"
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Email *</label>
                      <input
                        type="email"
                        className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg focus:border-cyan-400 focus:outline-none text-white placeholder-gray-500"
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Phone *</label>
                      <input
                        type="tel"
                        className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg focus:border-cyan-400 focus:outline-none text-white placeholder-gray-500"
                        placeholder="+91 98765 43210"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Company (Optional)</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg focus:border-cyan-400 focus:outline-none text-white placeholder-gray-500"
                        placeholder="Company Name"
                      />
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Project Details</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Property Type *</label>
                      <select
                        className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg focus:border-cyan-400 focus:outline-none text-white"
                        required
                      >
                        <option value="">Select property type</option>
                        <option value="residential">Residential Home</option>
                        <option value="apartment">Apartment/Flat</option>
                        <option value="office">Office Building</option>
                        <option value="retail">Retail Store</option>
                        <option value="warehouse">Warehouse</option>
                        <option value="industrial">Industrial Facility</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Property Size (sq ft)</label>
                        <input
                          type="number"
                          className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg focus:border-cyan-400 focus:outline-none text-white placeholder-gray-500"
                          placeholder="2000"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Number of Floors</label>
                        <select className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg focus:border-cyan-400 focus:outline-none text-white">
                          <option value="">Select floors</option>
                          <option value="1">1 Floor</option>
                          <option value="2">2 Floors</option>
                          <option value="3">3 Floors</option>
                          <option value="4+">4+ Floors</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Address</label>
                      <textarea
                        rows={3}
                        className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg focus:border-cyan-400 focus:outline-none text-white placeholder-gray-500"
                        placeholder="Complete address of the property"
                      />
                    </div>
                  </div>
                </div>

                {/* Security Requirements */}
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Security Requirements</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-3">
                        Required Products (Select all that apply)
                      </label>
                      <div className="grid md:grid-cols-2 gap-3">
                        {[
                          "CCTV Cameras",
                          "NVR System",
                          "PoE Switches",
                          "Access Control",
                          "Alarm System",
                          "Intercom System",
                          "Motion Sensors",
                          "Smart Locks",
                        ].map((product) => (
                          <label key={product} className="flex items-center">
                            <input
                              type="checkbox"
                              className="rounded border-gray-600 bg-black/50 text-cyan-400 focus:ring-cyan-400"
                            />
                            <span className="ml-2 text-gray-300">{product}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Estimated Number of Cameras
                        </label>
                        <select className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg focus:border-cyan-400 focus:outline-none text-white">
                          <option value="">Select range</option>
                          <option value="1-4">1-4 Cameras</option>
                          <option value="5-8">5-8 Cameras</option>
                          <option value="9-16">9-16 Cameras</option>
                          <option value="17-32">17-32 Cameras</option>
                          <option value="32+">32+ Cameras</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Budget Range</label>
                        <select className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg focus:border-cyan-400 focus:outline-none text-white">
                          <option value="">Select budget</option>
                          <option value="under-50k">Under ₹50,000</option>
                          <option value="50k-1l">₹50,000 - ₹1,00,000</option>
                          <option value="1l-2l">₹1,00,000 - ₹2,00,000</option>
                          <option value="2l-5l">₹2,00,000 - ₹5,00,000</option>
                          <option value="above-5l">Above ₹5,00,000</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Special Requirements</label>
                      <textarea
                        rows={4}
                        className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg focus:border-cyan-400 focus:outline-none text-white placeholder-gray-500"
                        placeholder="Please describe any specific requirements, concerns, or areas of focus for your security system..."
                      />
                    </div>
                  </div>
                </div>

                {/* Timeline */}
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Project Timeline</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Preferred Installation Timeline
                      </label>
                      <select className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg focus:border-cyan-400 focus:outline-none text-white">
                        <option value="">Select timeline</option>
                        <option value="asap">ASAP (Within 1 week)</option>
                        <option value="2-4weeks">2-4 weeks</option>
                        <option value="1-2months">1-2 months</option>
                        <option value="3-6months">3-6 months</option>
                        <option value="planning">Just planning/researching</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Best Time to Contact</label>
                      <select className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg focus:border-cyan-400 focus:outline-none text-white">
                        <option value="">Select time</option>
                        <option value="morning">Morning (9 AM - 12 PM)</option>
                        <option value="afternoon">Afternoon (12 PM - 5 PM)</option>
                        <option value="evening">Evening (5 PM - 8 PM)</option>
                        <option value="anytime">Anytime</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    className="rounded border-gray-600 bg-black/50 text-cyan-400 focus:ring-cyan-400"
                    required
                  />
                  <span className="ml-2 text-gray-300 text-sm">
                    I agree to be contacted by Orion Integra regarding this quote request and understand that my
                    information will be kept confidential.
                  </span>
                </div>

                <Button className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-lg py-4">
                  <Send className="h-5 w-5 mr-2" />
                  Submit Quote Request
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* What Happens Next */}
      <section className="py-16 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              What Happens Next?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Review & Contact</h3>
              <p className="text-gray-400">Our experts will review your requirements and contact you within 2 hours</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Site Survey</h3>
              <p className="text-gray-400">Free on-site consultation to assess your security needs</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Custom Quote</h3>
              <p className="text-gray-400">Detailed proposal with customized solutions and transparent pricing</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
