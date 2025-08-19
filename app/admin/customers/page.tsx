"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Eye, Search, Mail, Phone, Building, User, Calendar } from "lucide-react"
import { customers } from "@/lib/admin-data"
import { AdminLayout } from "@/components/admin-layout"

export default function AdminCustomersPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [typeFilter, setTypeFilter] = useState("all")
  const [statusFilter, setStatusFilter] = useState("all")
  const [sortBy, setSortBy] = useState("name")

  const filteredCustomers = customers
    .filter((customer) => {
      const matchesSearch =
        customer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        customer.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
        customer.phone.includes(searchQuery) ||
        (customer.company && customer.company.toLowerCase().includes(searchQuery.toLowerCase()))

      const matchesType = typeFilter === "all" || customer.customerType === typeFilter
      const matchesStatus = statusFilter === "all" || customer.status === statusFilter

      return matchesSearch && matchesType && matchesStatus
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "name":
          return a.name.localeCompare(b.name)
        case "spent-desc":
          return b.totalSpent - a.totalSpent
        case "spent-asc":
          return a.totalSpent - b.totalSpent
        case "orders-desc":
          return b.totalOrders - a.totalOrders
        case "join-date":
          return new Date(b.joinDate).getTime() - new Date(a.joinDate).getTime()
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
    }).format(date)
  }

  const totalCustomers = customers.length
  const businessCustomers = customers.filter((c) => c.customerType === "business").length
  const individualCustomers = customers.filter((c) => c.customerType === "individual").length
  const activeCustomers = customers.filter((c) => c.status === "active").length

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-white">Customers</h1>
            <p className="text-gray-400">Manage your customer relationships</p>
          </div>
          <Button className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600">
            <Mail className="h-4 w-4 mr-2" />
            Send Newsletter
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-purple-500/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm font-medium">Total Customers</p>
                  <p className="text-2xl font-bold text-white">{totalCustomers}</p>
                </div>
                <User className="h-8 w-8 text-cyan-400" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-purple-500/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm font-medium">Business</p>
                  <p className="text-2xl font-bold text-purple-400">{businessCustomers}</p>
                </div>
                <Building className="h-8 w-8 text-purple-400" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-purple-500/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm font-medium">Individual</p>
                  <p className="text-2xl font-bold text-green-400">{individualCustomers}</p>
                </div>
                <User className="h-8 w-8 text-green-400" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-purple-500/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm font-medium">Active</p>
                  <p className="text-2xl font-bold text-cyan-400">{activeCustomers}</p>
                </div>
                <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">✓</span>
                </div>
              </div>
            </CardContent>
          </Card>
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
                    placeholder="Search customers..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 bg-black/50 border border-gray-600 rounded-lg focus:border-cyan-400 focus:outline-none text-white placeholder-gray-400"
                  />
                </div>
              </div>

              <select
                value={typeFilter}
                onChange={(e) => setTypeFilter(e.target.value)}
                className="px-4 py-2 bg-black/50 border border-gray-600 rounded-lg focus:border-cyan-400 focus:outline-none text-white"
              >
                <option value="all">All Types</option>
                <option value="business">Business</option>
                <option value="individual">Individual</option>
              </select>

              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="px-4 py-2 bg-black/50 border border-gray-600 rounded-lg focus:border-cyan-400 focus:outline-none text-white"
              >
                <option value="all">All Status</option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 bg-black/50 border border-gray-600 rounded-lg focus:border-cyan-400 focus:outline-none text-white"
              >
                <option value="name">Sort by Name</option>
                <option value="spent-desc">Highest Spender</option>
                <option value="spent-asc">Lowest Spender</option>
                <option value="orders-desc">Most Orders</option>
                <option value="join-date">Newest First</option>
              </select>
            </div>
          </CardContent>
        </Card>

        {/* Customers List */}
        <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-purple-500/20">
          <CardHeader>
            <CardTitle className="text-white">Customers ({filteredCustomers.length})</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {filteredCustomers.length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-gray-400">No customers found matching your criteria.</p>
                </div>
              ) : (
                filteredCustomers.map((customer) => (
                  <div
                    key={customer.id}
                    className="p-6 bg-black/30 rounded-lg border border-gray-700 hover:border-cyan-400/50 transition-colors"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center">
                          <span className="text-white font-bold">
                            {customer.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </span>
                        </div>
                        <div>
                          <div className="flex items-center space-x-2 mb-1">
                            <h3 className="font-semibold text-white text-lg">{customer.name}</h3>
                            <Badge
                              className={
                                customer.customerType === "business"
                                  ? "bg-purple-500/20 text-purple-300 border-purple-500/30"
                                  : "bg-green-500/20 text-green-300 border-green-500/30"
                              }
                            >
                              {customer.customerType}
                            </Badge>
                            <Badge
                              className={
                                customer.status === "active"
                                  ? "bg-green-500/20 text-green-300 border-green-500/30"
                                  : "bg-gray-500/20 text-gray-300 border-gray-500/30"
                              }
                            >
                              {customer.status}
                            </Badge>
                          </div>
                          {customer.company && <p className="text-gray-400 text-sm mb-1">{customer.company}</p>}
                          <div className="flex items-center space-x-4 text-sm text-gray-400">
                            <div className="flex items-center">
                              <Mail className="h-4 w-4 mr-1" />
                              {customer.email}
                            </div>
                            <div className="flex items-center">
                              <Phone className="h-4 w-4 mr-1" />
                              {customer.phone}
                            </div>
                            <div className="flex items-center">
                              <Calendar className="h-4 w-4 mr-1" />
                              Joined {formatDate(customer.joinDate)}
                            </div>
                          </div>
                        </div>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-cyan-400/50 text-cyan-400 hover:bg-cyan-400 hover:text-black bg-transparent"
                      >
                        <Eye className="h-4 w-4 mr-2" />
                        View Profile
                      </Button>
                    </div>

                    <div className="grid md:grid-cols-4 gap-4 mb-4">
                      <div>
                        <p className="text-gray-400 text-sm">Total Orders</p>
                        <p className="text-white font-bold text-lg">{customer.totalOrders}</p>
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm">Total Spent</p>
                        <p className="text-cyan-400 font-bold text-lg">{formatCurrency(customer.totalSpent)}</p>
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm">Average Order</p>
                        <p className="text-purple-400 font-bold text-lg">
                          {formatCurrency(customer.totalSpent / Math.max(customer.totalOrders, 1))}
                        </p>
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm">Last Order</p>
                        <p className="text-white">
                          {customer.lastOrderDate ? formatDate(customer.lastOrderDate) : "Never"}
                        </p>
                      </div>
                    </div>

                    <div className="p-4 bg-gray-800/50 rounded-lg">
                      <p className="text-gray-400 text-sm mb-1">Address</p>
                      <p className="text-white">
                        {customer.address.street}, {customer.address.city}, {customer.address.state}{" "}
                        {customer.address.zipCode}
                      </p>
                    </div>
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
