"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { TrendingUp, ShoppingCart, Users, Package, DollarSign, Eye } from "lucide-react"
import Link from "next/link"
import { dashboardStats } from "@/lib/admin-data"
import { useAdminAuth } from "@/lib/admin-auth"
import { AdminLayout } from "@/components/admin-layout"

export default function AdminDashboard() {
  const { user } = useAdminAuth()

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

  return (
    <AdminLayout>
      <div className="space-y-8">
        {/* Welcome Header */}
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Welcome back, {user?.name}! 👋</h1>
          <p className="text-gray-400">Here's what's happening with your business today.</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-purple-500/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm font-medium">Total Revenue</p>
                  <p className="text-2xl font-bold text-white">{formatCurrency(dashboardStats.totalRevenue)}</p>
                </div>
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                  <DollarSign className="h-6 w-6 text-white" />
                </div>
              </div>
              <div className="flex items-center mt-4">
                <TrendingUp className="h-4 w-4 text-green-400 mr-1" />
                <span className="text-green-400 text-sm font-medium">+{dashboardStats.revenueGrowth}%</span>
                <span className="text-gray-400 text-sm ml-2">from last month</span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-purple-500/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm font-medium">Total Orders</p>
                  <p className="text-2xl font-bold text-white">{dashboardStats.totalOrders}</p>
                </div>
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                  <ShoppingCart className="h-6 w-6 text-white" />
                </div>
              </div>
              <div className="flex items-center mt-4">
                <TrendingUp className="h-4 w-4 text-green-400 mr-1" />
                <span className="text-green-400 text-sm font-medium">+{dashboardStats.orderGrowth}%</span>
                <span className="text-gray-400 text-sm ml-2">from last month</span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-purple-500/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm font-medium">Total Customers</p>
                  <p className="text-2xl font-bold text-white">{dashboardStats.totalCustomers}</p>
                </div>
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                  <Users className="h-6 w-6 text-white" />
                </div>
              </div>
              <div className="flex items-center mt-4">
                <TrendingUp className="h-4 w-4 text-green-400 mr-1" />
                <span className="text-green-400 text-sm font-medium">+{dashboardStats.customerGrowth}%</span>
                <span className="text-gray-400 text-sm ml-2">from last month</span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-purple-500/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm font-medium">Total Products</p>
                  <p className="text-2xl font-bold text-white">{dashboardStats.totalProducts}</p>
                </div>
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                  <Package className="h-6 w-6 text-white" />
                </div>
              </div>
              <div className="flex items-center mt-4">
                <TrendingUp className="h-4 w-4 text-green-400 mr-1" />
                <span className="text-green-400 text-sm font-medium">+{dashboardStats.productGrowth}%</span>
                <span className="text-gray-400 text-sm ml-2">from last month</span>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Recent Orders */}
          <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-purple-500/20">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-white">Recent Orders</CardTitle>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-cyan-400/50 text-cyan-400 hover:bg-cyan-400 hover:text-black bg-transparent"
                  asChild
                >
                  <Link href="/admin/orders">View All</Link>
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {dashboardStats.recentOrders.map((order) => (
                  <div key={order.id} className="flex items-center justify-between p-4 bg-black/30 rounded-lg">
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <p className="font-medium text-white">{order.orderNumber}</p>
                        <Badge className={getStatusColor(order.status)}>{order.status}</Badge>
                      </div>
                      <p className="text-sm text-gray-400">{order.customerName}</p>
                      <p className="text-sm text-gray-500">{formatDate(order.orderDate)}</p>
                    </div>
                    <div className="text-right ml-4">
                      <p className="font-bold text-cyan-400">{formatCurrency(order.total)}</p>
                      <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white p-1" asChild>
                        <Link href={`/admin/orders/${order.id}`}>
                          <Eye className="h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Top Products */}
          <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-purple-500/20">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-white">Top Products</CardTitle>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-cyan-400/50 text-cyan-400 hover:bg-cyan-400 hover:text-black bg-transparent"
                  asChild
                >
                  <Link href="/admin/products">View All</Link>
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {dashboardStats.topProducts.map((product, index) => (
                  <div key={product.productId} className="flex items-center justify-between p-4 bg-black/30 rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        {index + 1}
                      </div>
                      <div>
                        <p className="font-medium text-white">{product.productName}</p>
                        <p className="text-sm text-gray-400">{product.sales} units sold</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-cyan-400">{formatCurrency(product.revenue)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sales Chart Placeholder */}
        <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-purple-500/20">
          <CardHeader>
            <CardTitle className="text-white">Sales Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 bg-black/30 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <TrendingUp className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
                <p className="text-gray-300 mb-2">Sales Chart</p>
                <p className="text-gray-500 text-sm">Chart visualization will be integrated here</p>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mt-6">
              {dashboardStats.salesByMonth.map((data) => (
                <div key={data.month} className="text-center">
                  <p className="text-sm text-gray-400">{data.month}</p>
                  <p className="font-bold text-cyan-400">{formatCurrency(data.revenue)}</p>
                  <p className="text-xs text-gray-500">{data.orders} orders</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  )
}
