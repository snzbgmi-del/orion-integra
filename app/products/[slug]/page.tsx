"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, ArrowLeft, ShoppingCart, Star, Check, Truck, ShieldIcon, Phone } from "lucide-react"
import Link from "next/link"
import { getProductBySlug } from "@/lib/products"
import { useCart } from "@/lib/cart-context"
import { notFound } from "next/navigation"

interface ProductPageProps {
  params: {
    slug: string
  }
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = getProductBySlug(params.slug)
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const { dispatch } = useCart()

  if (!product) {
    notFound()
  }

  const addToCart = () => {
    for (let i = 0; i < quantity; i++) {
      dispatch({ type: "ADD_ITEM", product })
    }
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(price)
  }

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
            </div>
          </div>
        </div>
      </nav>

      {/* Breadcrumb */}
      <section className="pt-24 pb-8 bg-gradient-to-br from-purple-900/20 to-cyan-900/20">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2 text-sm text-gray-400 mb-4">
            <Link href="/" className="hover:text-cyan-400">
              Home
            </Link>
            <span>/</span>
            <Link href="/products" className="hover:text-cyan-400">
              Products
            </Link>
            <span>/</span>
            <span className="text-white">{product.name}</span>
          </div>
          <Button variant="ghost" className="text-cyan-400 hover:text-cyan-300" asChild>
            <Link href="/products">
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Products
            </Link>
          </Button>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div>
              <div className="aspect-square bg-gray-800 rounded-lg mb-4 overflow-hidden">
                <img
                  src={product.images[selectedImage] || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-4 gap-2">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-square bg-gray-800 rounded-lg overflow-hidden border-2 transition-colors ${
                      selectedImage === index ? "border-cyan-400" : "border-transparent"
                    }`}
                  >
                    <img
                      src={image || "/placeholder.svg"}
                      alt={`${product.name} view ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div>
              <Badge variant="outline" className="mb-4 border-cyan-400/50 text-cyan-400">
                {product.brand}
              </Badge>

              <h1 className="text-4xl font-bold mb-4 text-white">{product.name}</h1>

              {/* Rating */}
              <div className="flex items-center mb-6">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-600"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-gray-400 ml-2">
                  {product.rating} ({product.reviewCount} reviews)
                </span>
              </div>

              {/* Price */}
              <div className="mb-6">
                <div className="flex items-center gap-4">
                  <span className="text-4xl font-bold text-cyan-400">{formatPrice(product.price)}</span>
                  {product.originalPrice && (
                    <>
                      <span className="text-2xl text-gray-500 line-through">{formatPrice(product.originalPrice)}</span>
                      <Badge className="bg-red-500 text-white">Save {product.discount}%</Badge>
                    </>
                  )}
                </div>
              </div>

              {/* Stock Status */}
              <div className="mb-6">
                {product.inStock ? (
                  <div className="flex items-center text-green-400">
                    <Check className="h-5 w-5 mr-2" />
                    In Stock
                  </div>
                ) : (
                  <div className="flex items-center text-red-400">
                    <span className="h-5 w-5 mr-2">✕</span>
                    Out of Stock
                  </div>
                )}
              </div>

              {/* Description */}
              <p className="text-gray-300 mb-6 leading-relaxed">{product.description}</p>

              {/* Quantity and Add to Cart */}
              <div className="flex items-center gap-4 mb-8">
                <div className="flex items-center border border-gray-600 rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-2 text-gray-400 hover:text-white"
                  >
                    -
                  </button>
                  <span className="px-4 py-2 text-white">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-2 text-gray-400 hover:text-white"
                  >
                    +
                  </button>
                </div>
                <Button
                  onClick={addToCart}
                  disabled={!product.inStock}
                  className="flex-1 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 disabled:opacity-50"
                  size="lg"
                >
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Add to Cart
                </Button>
              </div>

              {/* Service Info */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="flex items-center text-sm text-gray-400">
                  <Truck className="h-5 w-5 mr-2 text-cyan-400" />
                  Free Delivery
                </div>
                <div className="flex items-center text-sm text-gray-400">
                  <ShieldIcon className="h-5 w-5 mr-2 text-cyan-400" />
                  {product.warranty}
                </div>
                {product.installation && (
                  <div className="flex items-center text-sm text-gray-400">
                    <Phone className="h-5 w-5 mr-2 text-cyan-400" />
                    Installation Available
                  </div>
                )}
              </div>

              {/* Contact for Quote */}
              <Card className="bg-gradient-to-r from-purple-900/20 to-cyan-900/20 border-purple-500/20">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-2">Need Installation?</h3>
                  <p className="text-gray-400 mb-4">Get professional installation with warranty</p>
                  <Button
                    variant="outline"
                    className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black bg-transparent"
                    asChild
                  >
                    <Link href="/quote">Get Installation Quote</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Product Details Tabs */}
          <div className="mt-16">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Features */}
              <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-purple-500/20">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 text-white">Key Features</h3>
                  <ul className="space-y-3">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start text-gray-300">
                        <Check className="h-5 w-5 text-cyan-400 mr-3 mt-0.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Specifications */}
              <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-purple-500/20">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 text-white">Specifications</h3>
                  <div className="space-y-4">
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <div key={key} className="flex justify-between items-center border-b border-gray-700 pb-2">
                        <span className="text-gray-400">{key}</span>
                        <span className="text-white font-medium">{value}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
