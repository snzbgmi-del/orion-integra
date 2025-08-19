import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Shield,
  Camera,
  Network,
  Server,
  ArrowRight,
  Star,
  CheckCircle,
  Phone,
  Mail,
  MapPin,
  Zap,
  Eye,
  Lock,
} from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-purple-500/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Shield className="h-8 w-8 text-cyan-400" />
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Orion Integra
              </span>
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

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-cyan-900/20" />
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border-cyan-400/50 text-cyan-300">
              Next-Generation Security Solutions
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-200 to-purple-200 bg-clip-text text-transparent">
              Securing Your Future, Today.
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Advanced CCTV systems, intelligent monitoring, and comprehensive security solutions for homes and
              businesses. Experience the future of protection.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-lg px-8 py-6"
                asChild
              >
                <Link href="/products">
                  Explore Products
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black text-lg px-8 py-6 bg-transparent"
                asChild
              >
                <Link href="/quote">Request Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Why Choose Orion Integra?
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Cutting-edge technology meets unparalleled security expertise
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gray-900/50 border-purple-500/20 hover:border-cyan-400/50 transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Eye className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">24/7 Monitoring</h3>
                <p className="text-gray-400">
                  Advanced AI-powered surveillance with real-time alerts and cloud storage
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-purple-500/20 hover:border-cyan-400/50 transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Smart Integration</h3>
                <p className="text-gray-400">Seamless integration with smart home systems and mobile applications</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-purple-500/20 hover:border-cyan-400/50 transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Lock className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Enterprise Security</h3>
                <p className="text-gray-400">Military-grade encryption and secure data transmission protocols</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Products Showcase */}
      <section id="products" className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Our Product Range
            </h2>
            <p className="text-gray-400 text-lg">Professional-grade security equipment for every need</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-purple-500/20 hover:border-cyan-400/50 transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Camera className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">CCTV Cameras</h3>
                <p className="text-gray-400 text-sm mb-4">Dome, Bullet, PTZ cameras with 4K resolution</p>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-cyan-400/50 text-cyan-400 hover:bg-cyan-400 hover:text-black bg-transparent"
                  asChild
                >
                  <Link href="/products">View Products</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-purple-500/20 hover:border-cyan-400/50 transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Network className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">PoE Switches</h3>
                <p className="text-gray-400 text-sm mb-4">4-port to 48-port managed switches</p>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-cyan-400/50 text-cyan-400 hover:bg-cyan-400 hover:text-black bg-transparent"
                  asChild
                >
                  <Link href="/products">View Products</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-purple-500/20 hover:border-cyan-400/50 transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Server className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">NVRs & Storage</h3>
                <p className="text-gray-400 text-sm mb-4">Network Video Recorders with cloud backup</p>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-cyan-400/50 text-cyan-400 hover:bg-cyan-400 hover:text-black bg-transparent"
                  asChild
                >
                  <Link href="/products">View Products</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-purple-500/20 hover:border-cyan-400/50 transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">Accessories</h3>
                <p className="text-gray-400 text-sm mb-4">Cables, mounts, and security accessories</p>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-cyan-400/50 text-cyan-400 hover:bg-cyan-400 hover:text-black bg-transparent"
                  asChild
                >
                  <Link href="/products">View Products</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Our Services
            </h2>
            <p className="text-gray-400 text-lg">Complete security solutions from consultation to maintenance</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-black/50 border-purple-500/20 hover:border-cyan-400/50 transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-white">Professional Installation</h3>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-cyan-400 mr-3" />
                    Site survey and planning
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-cyan-400 mr-3" />
                    Expert installation team
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-cyan-400 mr-3" />
                    System testing and training
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-black/50 border-purple-500/20 hover:border-cyan-400/50 transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-white">AMC & Maintenance</h3>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-cyan-400 mr-3" />
                    24/7 technical support
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-cyan-400 mr-3" />
                    Regular maintenance visits
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-cyan-400 mr-3" />
                    Software updates
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-black/50 border-purple-500/20 hover:border-cyan-400/50 transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-white">Security Consultation</h3>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-cyan-400 mr-3" />
                    Risk assessment
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-cyan-400 mr-3" />
                    Custom solution design
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-cyan-400 mr-3" />
                    Compliance guidance
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-purple-500/20">
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6">
                  "Orion Integra transformed our office security. The installation was seamless and the monitoring
                  system is incredibly reliable."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold">RK</span>
                  </div>
                  <div>
                    <p className="text-white font-semibold">Rajesh Kumar</p>
                    <p className="text-gray-400 text-sm">Business Owner</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-purple-500/20">
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6">
                  "Professional service and cutting-edge technology. Our home security has never been better. Highly
                  recommended!"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold">PS</span>
                  </div>
                  <div>
                    <p className="text-white font-semibold">Priya Sharma</p>
                    <p className="text-gray-400 text-sm">Homeowner</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-purple-500/20">
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6">
                  "The AMC service is excellent. Quick response times and proactive maintenance keep our systems running
                  perfectly."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold">AM</span>
                  </div>
                  <div>
                    <p className="text-white font-semibold">Amit Mehta</p>
                    <p className="text-gray-400 text-sm">IT Manager</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <p className="text-gray-400 text-lg">
              Ready to secure your future? Contact us today for a free consultation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-white">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mr-4">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Phone</p>
                    <p className="text-gray-400">+91 6200 399921</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mr-4">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Email</p>
                    <p className="text-gray-400">info@orionintegra.com</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mr-4">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Address</p>
                    <p className="text-gray-400">Athgaon, Guwahati, Assam, India - 781001</p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="bg-gray-900/50 border-purple-500/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-white">Send us a Message</h3>
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg focus:border-cyan-400 focus:outline-none text-white"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg focus:border-cyan-400 focus:outline-none text-white"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg focus:border-cyan-400 focus:outline-none text-white"
                      placeholder="Tell us about your security needs..."
                    />
                  </div>
                  <Button className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-purple-500/20 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Shield className="h-8 w-8 text-cyan-400" />
                <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Orion Integra
                </span>
              </div>
              <p className="text-gray-400">Securing your future with advanced technology and professional expertise.</p>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Products</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/products?category=cctv" className="hover:text-cyan-400 transition-colors">
                    CCTV Cameras
                  </Link>
                </li>
                <li>
                  <Link href="/products?category=switches" className="hover:text-cyan-400 transition-colors">
                    PoE Switches
                  </Link>
                </li>
                <li>
                  <Link href="/products?category=nvr" className="hover:text-cyan-400 transition-colors">
                    NVRs & Storage
                  </Link>
                </li>
                <li>
                  <Link href="/products?category=accessories" className="hover:text-cyan-400 transition-colors">
                    Accessories
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/services#installation" className="hover:text-cyan-400 transition-colors">
                    Installation
                  </Link>
                </li>
                <li>
                  <Link href="/services#amc" className="hover:text-cyan-400 transition-colors">
                    AMC & Support
                  </Link>
                </li>
                <li>
                  <Link href="/services#consultation" className="hover:text-cyan-400 transition-colors">
                    Consultation
                  </Link>
                </li>
                <li>
                  <Link href="/services#training" className="hover:text-cyan-400 transition-colors">
                    Training
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/about" className="hover:text-cyan-400 transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:text-cyan-400 transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="hover:text-cyan-400 transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-cyan-400 transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Orion Integra. All rights reserved. | Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
