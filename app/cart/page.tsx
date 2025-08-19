"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, ArrowLeft, Trash2, Plus, Minus, ShoppingBag } from "lucide-react"
import Link from "next/link"
import { useCart } from "@/lib/cart-context"

export default function CartPage() {
  const { state, dispatch } = useCart()

  const updateQuantity = (productId: string, quantity: number) => {
    dispatch({ type: "UPDATE_QUANTITY", productId, quantity })
  }

  const removeItem = (productId: string) => {
    dispatch({ type: "REMOVE_ITEM", productId })
  }

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" })
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

      {/* Header */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-purple-900/20 to-cyan-900/20">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-8">
            <Button variant="ghost" className="text-cyan-400 hover:text-cyan-300" asChild>
              <Link href="/products">
                <ArrowLeft className="h-5 w-5 mr-2" />
                Continue Shopping
              </Link>
            </Button>
          </div>
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-200 to-purple-200 bg-clip-text text-transparent">
              Shopping Cart
            </h1>
            <p className="text-xl text-gray-300">
              {state.itemCount} {state.itemCount === 1 ? "item" : "items"} in your cart
            </p>
          </div>
        </div>
      </section>

      {/* Cart Content */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          {state.items.length === 0 ? (
            <div className="text-center py-16">
              <ShoppingBag className="h-24 w-24 text-gray-600 mx-auto mb-6" />
              <h2 className="text-2xl font-bold text-white mb-4">Your cart is empty</h2>
              <p className="text-gray-400 mb-8">Add some products to get started</p>
              <Button
                className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600"
                asChild
              >
                <Link href="/products">Browse Products</Link>
              </Button>
            </div>
          ) : (
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-4">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-white">Cart Items</h2>
                  <Button
                    variant="outline"
                    onClick={clearCart}
                    className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white bg-transparent"
                  >
                    Clear Cart
                  </Button>
                </div>

                {state.items.map((item) => (
                  <Card
                    key={item.product.id}
                    className="bg-gradient-to-br from-gray-900 to-gray-800 border-purple-500/20"
                  >
                    <CardContent className="p-6">
                      <div className="flex gap-4">
                        <div className="w-24 h-24 bg-gray-800 rounded-lg overflow-hidden flex-shrink-0">
                          <img
                            src={item.product.images[0] || "/placeholder.svg"}
                            alt={item.product.name}
                            className="w-full h-full object-cover"
                          />
                        </div>

                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-white mb-2">{item.product.name}</h3>
                          <p className="text-gray-400 text-sm mb-4">{item.product.shortDescription}</p>

                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className="flex items-center border border-gray-600 rounded-lg">
                                <button
                                  onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                                  className="p-2 text-gray-400 hover:text-white"
                                >
                                  <Minus className="h-4 w-4" />
                                </button>
                                <span className="px-3 py-2 text-white">{item.quantity}</span>
                                <button
                                  onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                                  className="p-2 text-gray-400 hover:text-white"
                                >
                                  <Plus className="h-4 w-4" />
                                </button>
                              </div>

                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => removeItem(item.product.id)}
                                className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white bg-transparent"
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>

                            <div className="text-right">
                              <div className="text-xl font-bold text-cyan-400">
                                {formatPrice(item.product.price * item.quantity)}
                              </div>
                              <div className="text-sm text-gray-400">{formatPrice(item.product.price)} each</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Order Summary */}
              <div>
                <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-purple-500/20 sticky top-24">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-white mb-6">Order Summary</h3>

                    <div className="space-y-4 mb-6">
                      <div className="flex justify-between text-gray-300">
                        <span>Subtotal ({state.itemCount} items)</span>
                        <span>{formatPrice(state.total)}</span>
                      </div>
                      <div className="flex justify-between text-gray-300">
                        <span>Shipping</span>
                        <span className="text-green-400">Free</span>
                      </div>
                      <div className="border-t border-gray-700 pt-4">
                        <div className="flex justify-between text-xl font-bold text-white">
                          <span>Total</span>
                          <span className="text-cyan-400">{formatPrice(state.total)}</span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <Button className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600">
                        Proceed to Checkout
                      </Button>
                      <Button
                        variant="outline"
                        className="w-full border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black bg-transparent"
                        asChild
                      >
                        <Link href="/quote">Get Installation Quote</Link>
                      </Button>
                    </div>

                    <div className="mt-6 p-4 bg-purple-900/20 rounded-lg">
                      <h4 className="font-semibold text-white mb-2">Need Help?</h4>
                      <p className="text-sm text-gray-400 mb-3">
                        Our experts can help you choose the right products and provide installation services.
                      </p>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-black bg-transparent"
                        asChild
                      >
                        <Link href="/contact">Contact Us</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
