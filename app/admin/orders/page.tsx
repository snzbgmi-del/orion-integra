"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Eye, Search, Download } from "lucide-react"
import Link from "next/link"
import { orders } from "@/lib/admin-data"
import { AdminLayout } from "@/components/admin-layout"

export default function AdminOrdersPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [sortBy, setSortBy] = useState("date-desc")

  const filteredOrders = orders
    .filter((order) => {
      const matchesSearch =
        order.orderNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
        order.customerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        order.customerEmail.toLowerCase().includes(searchQuery.toLowerCase())

      const matchesStatus = statusFilter === "all" || order.status === statusFilter

      return matchesSearch && matchesStatus
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "date-desc":
          return new Date(b.orderDate).getTime() - new Date(a.orderDate).getTime()
        case "date-asc":
          return new Date(a.orderDate).getTime() - new Date(b.orderDate).getTime()
        case "amount-desc":
          return b.total - a.total
        case "amount-asc":
          return a.total - b.total
        default:
          return 0
      }
    })

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(amount)
  }

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat("en-IN", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }).format(date)
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending":
        return "bg-yellow-500/20 text-yellow-300 border-yellow-500/30"
      case "confirmed":
        return "bg-blue-500/20 text-blue-300 border-blue-500/30"
      case "processing":
        return "bg-purple-500/20 text-purple-300 border-purple-500/30"
      case "shipped":
        return "bg-cyan-500/20 text-cyan-300 border-cyan-500/30"
      case "delivered":
        return "bg-green-500/20 text-green-300 border-green-500/30"
      case "cancelled":
        return "bg-red-500/20 text-red-300 border-red-500/30"
      default:
        return "bg-gray-500/20 text-gray-300 border-gray-500/30"
    }
  }

  const getPaymentStatusColor = (status: string) => {
    switch (status) {
      case "paid":
        return "bg-green-500/20 text-green-300 border-green-500/30"
      case "pending":
        return "bg-yellow-500/20 text-yellow-300 border-yellow-500/30"
      case "failed":
        return "bg-red-500/20 text-red-300 border-red-500/30"
      case "refunded":
        return "bg-gray-500/20 text-gray-300 border-gray-500/30"
      default:
        return "bg-gray-500/20 text-gray-300 border-gray-500/30"
    }
  }

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-white">Orders</h1>
            <p className="text-gray-400">Manage and track all customer orders</p>
          </div>
          <Button className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600">
            <Download className="h-4 w-4 mr-2" />
            Export Orders
          </Button>
        </div>

        {/* Filters */}
        <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-purple-500/20">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <input
                    type="text"
                    placeholder="Search orders, customers..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 bg-black/50 border border-gray-600 rounded-lg focus:border-cyan-400 focus:outline-none text-white placeholder-gray-400"
                  />
                </div>
              </div>

              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="px-4 py-2 bg-black/50 border border-gray-600 rounded-lg focus:border-cyan-400 focus:outline-none text-white"
              >
                <option value="all">All Status</option>
                <option value="pending">Pending</option>
                <option value="confirmed">Confirmed</option>
                <option value="processing">Processing</option>
                <option value="shipped">Shipped</option>
                <option value="delivered">Delivered</option>
                <option value="cancelled">Cancelled</option>
              </select>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 bg-black/50 border border-gray-600 rounded-lg focus:border-cyan-400 focus:outline-none text-white"
              >
                <option value="date-desc">Newest First</option>
                <option value="date-asc">Oldest First</option>
                <option value="amount-desc">Highest Amount</option>
                <option value="amount-asc">Lowest Amount</option>
              </select>
            </div>
          </CardContent>
        </Card>

        {/* Orders List */}
        <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-purple-500/20">
          <CardHeader>
            <CardTitle className="text-white">Orders ({filteredOrders.length})</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {filteredOrders.length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-gray-400">No orders found matching your criteria.</p>
                </div>
              ) : (
                filteredOrders.map((order) => (
                  <div
                    key={order.id}
                    className="p-6 bg-black/30 rounded-lg border border-gray-700 hover:border-cyan-400/50 transition-colors"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-4">
                        <div>
                          <h3 className="font-semibold text-white">{order.orderNumber}</h3>
                          <p className="text-sm text-gray-400">{formatDate(order.orderDate)}</p>
                        </div>
                        <div className="flex space-x-2">
                          <Badge className={getStatusColor(order.status)}>{order.status}</Badge>
                          <Badge className={getPaymentStatusColor(order.paymentStatus)}>{order.paymentStatus}</Badge>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="text-right">
                          <p className="font-bold text-cyan-400">{formatCurrency(order.total)}</p>
                          <p className="text-sm text-gray-400">{order.items.length} items</p>
                        </div>
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-cyan-400/50 text-cyan-400 hover:bg-cyan-400 hover:text-black bg-transparent"
                          asChild
                        >
                          <Link href={`/admin/orders/${order.id}`}>
                            <Eye className="h-4 w-4 mr-2" />
                            View
                          </Link>
                        </Button>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-gray-400">Customer</p>
                        <p className="text-white font-medium">{order.customerName}</p>
                        <p className="text-gray-400">{order.customerEmail}</p>
                        <p className="text-gray-400">{order.customerPhone}</p>
                      </div>
                      <div>
                        <p className="text-gray-400">Shipping Address</p>
                        <p className="text-white">{order.shippingAddress.street}</p>
                        <p className="text-gray-400">
                          {order.shippingAddress.city}, {order.shippingAddress.state} {order.shippingAddress.zipCode}
                        </p>
                      </div>
                    </div>

                    {order.trackingNumber && (
                      <div className="mt-4 p-3 bg-cyan-500/10 border border-cyan-500/20 rounded-lg">
                        <p className="text-cyan-300 text-sm">
                          <strong>Tracking Number:</strong> {order.trackingNumber}
                        </p>
                      </div>
                    )}

                    {order.notes && (
                      <div className="mt-4 p-3 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
                        <p className="text-yellow-300 text-sm">
                          <strong>Notes:</strong> {order.notes}
                        </p>
                      </div>
                    )}
                  </div>
                ))
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  )
}
