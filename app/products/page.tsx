"use client"

import { useState, useMemo } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, ArrowLeft, ShoppingCart, Star, Search, Grid, List } from "lucide-react"
import Link from "next/link"
import { products, productCategories, type Product } from "@/lib/products"
import { useCart } from "@/lib/cart-context"

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [sortBy, setSortBy] = useState<string>("name")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 100000])

  const { state, dispatch } = useCart()

  const filteredProducts = useMemo(() => {
    let filtered = products

    // Filter by category
    if (selectedCategory !== "all") {
      filtered = filtered.filter((product) => product.category === selectedCategory)
    }

    // Filter by subcategory
    if (selectedSubcategory !== "all") {
      filtered = filtered.filter((product) => product.subcategory === selectedSubcategory)
    }

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(
        (product) =>
          product.name.toLowerCase().includes(query) ||
          product.description.toLowerCase().includes(query) ||
          product.tags.some((tag) => tag.toLowerCase().includes(query)),
      )
    }

    // Filter by price range
    filtered = filtered.filter((product) => product.price >= priceRange[0] && product.price <= priceRange[1])

    // Sort products
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.price - b.price
        case "price-high":
          return b.price - a.price
        case "rating":
          return b.rating - a.rating
        case "name":
        default:
          return a.name.localeCompare(b.name)
      }
    })

    return filtered
  }, [selectedCategory, selectedSubcategory, searchQuery, sortBy, priceRange])

  const addToCart = (product: Product) => {
    dispatch({ type: "ADD_ITEM", product })
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
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="hover:text-cyan-400 transition-colors">
                Home
              </Link>
              <Link href="/products" className="text-cyan-400">
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
                className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black bg-transparent relative"
                asChild
              >
                <Link href="/cart">
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Cart
                  {state.itemCount > 0 && (
                    <Badge className="absolute -top-2 -right-2 bg-purple-500 text-white text-xs">
                      {state.itemCount}
                    </Badge>
                  )}
                </Link>
              </Button>
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
              Our Products
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Professional-grade security equipment designed for modern protection needs
            </p>
          </div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 bg-gray-900/50">
        <div className="container mx-auto px-4">
          {/* Search Bar */}
          <div className="mb-6">
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-black/50 border border-gray-600 rounded-lg focus:border-cyan-400 focus:outline-none text-white placeholder-gray-400"
              />
            </div>
          </div>

          {/* Filter Controls */}
          <div className="flex flex-wrap gap-4 justify-between items-center">
            <div className="flex flex-wrap gap-4">
              {/* Category Filter */}
              <select
                value={selectedCategory}
                onChange={(e) => {
                  setSelectedCategory(e.target.value)
                  setSelectedSubcategory("all")
                }}
                className="px-4 py-2 bg-black/50 border border-gray-600 rounded-lg focus:border-cyan-400 focus:outline-none text-white"
              >
                <option value="all">All Categories</option>
                {Object.entries(productCategories).map(([key, category]) => (
                  <option key={key} value={key}>
                    {category.name}
                  </option>
                ))}
              </select>

              {/* Subcategory Filter */}
              {selectedCategory !== "all" && (
                <select
                  value={selectedSubcategory}
                  onChange={(e) => setSelectedSubcategory(e.target.value)}
                  className="px-4 py-2 bg-black/50 border border-gray-600 rounded-lg focus:border-cyan-400 focus:outline-none text-white"
                >
                  <option value="all">All Subcategories</option>
                  {Object.entries(
                    productCategories[selectedCategory as keyof typeof productCategories].subcategories,
                  ).map(([key, name]) => (
                    <option key={key} value={key}>
                      {name}
                    </option>
                  ))}
                </select>
              )}

              {/* Sort Filter */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 bg-black/50 border border-gray-600 rounded-lg focus:border-cyan-400 focus:outline-none text-white"
              >
                <option value="name">Sort by Name</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center gap-2">
              <Button
                variant={viewMode === "grid" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("grid")}
                className={viewMode === "grid" ? "bg-cyan-500" : "border-gray-600 text-gray-400"}
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("list")}
                className={viewMode === "list" ? "bg-cyan-500" : "border-gray-600 text-gray-400"}
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-4 text-gray-400">Showing {filteredProducts.length} products</div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-gray-400 text-lg">No products found matching your criteria.</p>
              <Button
                onClick={() => {
                  setSelectedCategory("all")
                  setSelectedSubcategory("all")
                  setSearchQuery("")
                }}
                className="mt-4 bg-gradient-to-r from-cyan-500 to-purple-500"
              >
                Clear Filters
              </Button>
            </div>
          ) : (
            <div
              className={viewMode === "grid" ? "grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8" : "space-y-6"}
            >
              {filteredProducts.map((product) => (
                <Card
                  key={product.id}
                  className={`bg-gradient-to-br from-gray-900 to-gray-800 border-purple-500/20 hover:border-cyan-400/50 transition-all duration-300 group ${
                    viewMode === "list" ? "flex flex-row" : ""
                  }`}
                >
                  <CardContent className={`p-6 ${viewMode === "list" ? "flex w-full gap-6" : ""}`}>
                    {/* Product Image */}
                    <div
                      className={`${viewMode === "list" ? "w-48 flex-shrink-0" : "aspect-square"} bg-gray-800 rounded-lg mb-4 overflow-hidden relative`}
                    >
                      <img
                        src={product.images[0] || "/placeholder.svg"}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      {product.discount && (
                        <Badge className="absolute top-2 right-2 bg-red-500 text-white">-{product.discount}%</Badge>
                      )}
                      {!product.inStock && (
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                          <Badge variant="destructive">Out of Stock</Badge>
                        </div>
                      )}
                    </div>

                    <div className={viewMode === "list" ? "flex-1" : ""}>
                      {/* Rating and Reviews */}
                      <div className="flex items-center mb-2">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-600"
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-gray-400 ml-2">
                          ({product.rating}) • {product.reviewCount} reviews
                        </span>
                      </div>

                      {/* Product Info */}
                      <h3 className="text-xl font-bold mb-2 text-white">{product.name}</h3>
                      <p className="text-gray-400 text-sm mb-4 line-clamp-2">{product.shortDescription}</p>

                      {/* Brand */}
                      <Badge variant="outline" className="mb-4 border-cyan-400/50 text-cyan-400">
                        {product.brand}
                      </Badge>

                      {/* Price */}
                      <div className="mb-4">
                        <div className="flex items-center gap-2">
                          <span className="text-2xl font-bold text-cyan-400">{formatPrice(product.price)}</span>
                          {product.originalPrice && (
                            <span className="text-lg text-gray-500 line-through">
                              {formatPrice(product.originalPrice)}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Key Features */}
                      {viewMode === "list" && (
                        <div className="mb-4">
                          <ul className="text-sm text-gray-400 space-y-1">
                            {product.features.slice(0, 3).map((feature, index) => (
                              <li key={index} className="flex items-center">
                                <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Action Buttons */}
                      <div className="flex gap-2">
                        <Button
                          onClick={() => addToCart(product)}
                          disabled={!product.inStock}
                          className="flex-1 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 disabled:opacity-50"
                          size="sm"
                        >
                          <ShoppingCart className="h-4 w-4 mr-2" />
                          Add to Cart
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-cyan-400/50 text-cyan-400 hover:bg-cyan-400 hover:text-black bg-transparent"
                          asChild
                        >
                          <Link href={`/products/${product.slug}`}>View Details</Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-900/20 to-cyan-900/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">Need Custom Solutions?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Our experts can design a custom security system tailored to your specific requirements.
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600"
            asChild
          >
            <Link href="/quote">Get Custom Quote</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
