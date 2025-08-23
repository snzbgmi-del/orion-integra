export interface AdminUser {
  id: string
  name: string
  email: string
  role: "ceo" | "cto" | "manager"
  permissions: string[]
  avatar?: string
  lastLogin?: Date
}

export interface Order {
  id: string
  orderNumber: string
  customerId: string
  customerName: string
  customerEmail: string
  customerPhone: string
  items: OrderItem[]
  subtotal: number
  tax: number
  shipping: number
  total: number
  status: "pending" | "confirmed" | "processing" | "shipped" | "delivered" | "cancelled"
  paymentStatus: "pending" | "paid" | "failed" | "refunded"
  paymentMethod: string
  shippingAddress: Address
  billingAddress: Address
  orderDate: Date
  estimatedDelivery?: Date
  trackingNumber?: string
  notes?: string
}

export interface OrderItem {
  productId: string
  productName: string
  productImage: string
  quantity: number
  price: number
  total: number
}

export interface Address {
  street: string
  city: string
  state: string
  zipCode: string
  country: string
}

export interface Customer {
  id: string
  name: string
  email: string
  phone: string
  company?: string
  address: Address
  totalOrders: number
  totalSpent: number
  joinDate: Date
  lastOrderDate?: Date
  status: "active" | "inactive"
  customerType: "individual" | "business"
}

export interface DashboardStats {
  totalRevenue: number
  totalOrders: number
  totalCustomers: number
  totalProducts: number
  revenueGrowth: number
  orderGrowth: number
  customerGrowth: number
  productGrowth: number
  recentOrders: Order[]
  topProducts: Array<{
    productId: string
    productName: string
    sales: number
    revenue: number
  }>
  salesByMonth: Array<{
    month: string
    revenue: number
    orders: number
  }>
}

// Sample admin users
export const adminUsers: AdminUser[] = [
  {
    id: "1",
    name: "Md Shahnawaz",
    email: "ceo@orionintegra.com",
    role: "ceo",
    permissions: ["all"],
    avatar: "/avatars/ceo.jpg",
  },
  {
    id: "2",
    name: "Hasmat Ali",
    email: "cto@orionintegra.com",
    role: "cto",
    permissions: ["products", "orders", "customers", "analytics"],
    avatar: "/avatars/cto.jpg",
  },
  {
    id: "3",
    name: "Rajesh Kumar",
    email: "manager@orionintegra.com",
    role: "manager",
    permissions: ["orders", "customers"],
    avatar: "/avatars/manager.jpg",
  },
]

// Sample customers
export const customers: Customer[] = [
  {
    id: "cust-1",
    name: "Amit Sharma",
    email: "amit.sharma@email.com",
    phone: "+91 98765 43210",
    company: "Tech Solutions Pvt Ltd",
    address: {
      street: "123 Business Park, Sector 18",
      city: "Gurgaon",
      state: "Haryana",
      zipCode: "122015",
      country: "India",
    },
    totalOrders: 5,
    totalSpent: 125000,
    joinDate: new Date("2023-08-15"),
    lastOrderDate: new Date("2024-01-10"),
    status: "active",
    customerType: "business",
  },
  {
    id: "cust-2",
    name: "Priya Patel",
    email: "priya.patel@email.com",
    phone: "+91 87654 32109",
    address: {
      street: "456 Residential Colony",
      city: "Mumbai",
      state: "Maharashtra",
      zipCode: "400001",
      country: "India",
    },
    totalOrders: 2,
    totalSpent: 35000,
    joinDate: new Date("2023-11-20"),
    lastOrderDate: new Date("2024-01-05"),
    status: "active",
    customerType: "individual",
  },
  {
    id: "cust-3",
    name: "Vikram Singh",
    email: "vikram.singh@email.com",
    phone: "+91 76543 21098",
    company: "Security Services Ltd",
    address: {
      street: "789 Industrial Area",
      city: "Delhi",
      state: "Delhi",
      zipCode: "110001",
      country: "India",
    },
    totalOrders: 8,
    totalSpent: 280000,
    joinDate: new Date("2023-06-10"),
    lastOrderDate: new Date("2024-01-12"),
    status: "active",
    customerType: "business",
  },
]

// Sample orders
export const orders: Order[] = [
  {
    id: "order-1",
    orderNumber: "ORD-2024-001",
    customerId: "cust-1",
    customerName: "Amit Sharma",
    customerEmail: "amit.sharma@email.com",
    customerPhone: "+91 98765 43210",
    items: [
      {
        productId: "dome-4k-pro",
        productName: "4K Ultra HD Dome Camera",
        productImage: "/placeholder.svg?height=60&width=60&text=4K+Dome",
        quantity: 4,
        price: 12999,
        total: 51996,
      },
      {
        productId: "poe-switch-8port",
        productName: "8-Port Gigabit PoE+ Switch",
        productImage: "/placeholder.svg?height=60&width=60&text=8Port+Switch",
        quantity: 1,
        price: 15999,
        total: 15999,
      },
    ],
    subtotal: 67995,
    tax: 12239,
    shipping: 0,
    total: 80234,
    status: "processing",
    paymentStatus: "paid",
    paymentMethod: "UPI",
    shippingAddress: {
      street: "123 Business Park, Sector 18",
      city: "Gurgaon",
      state: "Haryana",
      zipCode: "122015",
      country: "India",
    },
    billingAddress: {
      street: "123 Business Park, Sector 18",
      city: "Gurgaon",
      state: "Haryana",
      zipCode: "122015",
      country: "India",
    },
    orderDate: new Date("2024-01-10T14:30:00"),
    estimatedDelivery: new Date("2024-01-17"),
    trackingNumber: "TRK123456789",
    notes: "Installation required - contact customer before delivery",
  },
  {
    id: "order-2",
    orderNumber: "ORD-2024-002",
    customerId: "cust-2",
    customerName: "Priya Patel",
    customerEmail: "priya.patel@email.com",
    customerPhone: "+91 87654 32109",
    items: [
      {
        productId: "dome-2mp-basic",
        productName: "2MP HD Dome Camera",
        productImage: "/placeholder.svg?height=60&width=60&text=2MP+Dome",
        quantity: 2,
        price: 4999,
        total: 9998,
      },
    ],
    subtotal: 9998,
    tax: 1800,
    shipping: 500,
    total: 12298,
    status: "delivered",
    paymentStatus: "paid",
    paymentMethod: "Credit Card",
    shippingAddress: {
      street: "456 Residential Colony",
      city: "Mumbai",
      state: "Maharashtra",
      zipCode: "400001",
      country: "India",
    },
    billingAddress: {
      street: "456 Residential Colony",
      city: "Mumbai",
      state: "Maharashtra",
      zipCode: "400001",
      country: "India",
    },
    orderDate: new Date("2024-01-05T11:15:00"),
    estimatedDelivery: new Date("2024-01-12"),
    trackingNumber: "TRK987654321",
  },
  {
    id: "order-3",
    orderNumber: "ORD-2024-003",
    customerId: "cust-3",
    customerName: "Vikram Singh",
    customerEmail: "vikram.singh@email.com",
    customerPhone: "+91 76543 21098",
    items: [
      {
        productId: "nvr-16ch-4k",
        productName: "16-Channel 4K NVR System",
        productImage: "/placeholder.svg?height=60&width=60&text=16CH+NVR",
        quantity: 1,
        price: 35999,
        total: 35999,
      },
      {
        productId: "bullet-4k-zoom",
        productName: "4K Varifocal Bullet Camera",
        productImage: "/placeholder.svg?height=60&width=60&text=4K+Bullet",
        quantity: 8,
        price: 18999,
        total: 151992,
      },
    ],
    subtotal: 187991,
    tax: 33838,
    shipping: 0,
    total: 221829,
    status: "confirmed",
    paymentStatus: "paid",
    paymentMethod: "Bank Transfer",
    shippingAddress: {
      street: "789 Industrial Area",
      city: "Delhi",
      state: "Delhi",
      zipCode: "110001",
      country: "India",
    },
    billingAddress: {
      street: "789 Industrial Area",
      city: "Delhi",
      state: "Delhi",
      zipCode: "110001",
      country: "India",
    },
    orderDate: new Date("2024-01-12T16:45:00"),
    estimatedDelivery: new Date("2024-01-20"),
    notes: "Large installation project - coordinate with technical team",
  },
]

// Dashboard statistics
export const dashboardStats: DashboardStats = {
  totalRevenue: 2450000,
  totalOrders: 1234,
  totalCustomers: 856,
  totalProducts: 45,
  revenueGrowth: 12.5,
  orderGrowth: 8.2,
  customerGrowth: 15.3,
  productGrowth: 5.1,
  recentOrders: [
    {
      id: "1",
      orderNumber: "ORD-2024-001",
      customerId: "cust_1",
      customerName: "Amit Sharma",
      customerEmail: "amit.sharma@example.com",
      customerPhone: "+91-98765-43210",
      items: [],
      subtotal: 125000,
      tax: 12500,
      shipping: 0,
      total: 125000,
      status: "delivered",
      paymentStatus: "paid",
      paymentMethod: "Credit Card",
      shippingAddress: {
        street: "123 Main St",
        city: "Mumbai",
        state: "Maharashtra",
        zipCode: "400001",
        country: "India",
      },
      billingAddress: {
        street: "123 Main St",
        city: "Mumbai",
        state: "Maharashtra",
        zipCode: "400001",
        country: "India",
      },
      orderDate: new Date("2024-01-15"),
    },
    {
      id: "2",
      orderNumber: "ORD-2024-002",
      customerId: "cust_2",
      customerName: "Priya Patel",
      customerEmail: "priya.patel@example.com",
      customerPhone: "+91-98765-43211",
      items: [],
      subtotal: 89000,
      tax: 8900,
      shipping: 0,
      total: 89000,
      status: "shipped",
      paymentStatus: "paid",
      paymentMethod: "Credit Card",
      shippingAddress: {
        street: "456 Oak Ave",
        city: "Delhi",
        state: "Delhi",
        zipCode: "110001",
        country: "India",
      },
      billingAddress: {
        street: "456 Oak Ave",
        city: "Delhi",
        state: "Delhi",
        zipCode: "110001",
        country: "India",
      },
      orderDate: new Date("2024-01-14"),
    },
    {
      id: "3",
      orderNumber: "ORD-2024-003",
      customerId: "cust_3",
      customerName: "Rahul Singh",
      customerEmail: "rahul.singh@example.com",
      customerPhone: "+91-98765-43212",
      items: [],
      subtotal: 156000,
      tax: 15600,
      shipping: 0,
      total: 156000,
      status: "processing",
      paymentStatus: "paid",
      paymentMethod: "Credit Card",
      shippingAddress: {
        street: "789 Pine St",
        city: "Bangalore",
        state: "Karnataka",
        zipCode: "560001",
        country: "India",
      },
      billingAddress: {
        street: "789 Pine St",
        city: "Bangalore",
        state: "Karnataka",
        zipCode: "560001",
        country: "India",
      },
      orderDate: new Date("2024-01-13"),
    },
  ],
  topProducts: [
    {
      productId: "1",
      productName: "AI Security Camera Pro",
      sales: 145,
      revenue: 725000,
    },
    {
      productId: "2",
      productName: "Smart NVR System",
      sales: 89,
      revenue: 534000,
    },
    {
      productId: "3",
      productName: "Wireless Security Kit",
      sales: 67,
      revenue: 335000,
    },
  ],
  salesByMonth: [
    { month: "Jan", revenue: 425000, orders: 156 },
    { month: "Feb", revenue: 380000, orders: 142 },
    { month: "Mar", revenue: 520000, orders: 189 },
    { month: "Apr", revenue: 465000, orders: 167 },
    { month: "May", revenue: 590000, orders: 203 },
    { month: "Jun", revenue: 670000, orders: 234 },
  ],
}

export function getOrderById(id: string): Order | undefined {
  return orders.find((order) => order.id === id)
}

export function getCustomerById(id: string): Customer | undefined {
  return customers.find((customer) => customer.id === id)
}

export function getOrdersByStatus(status: Order["status"]): Order[] {
  return orders.filter((order) => order.status === status)
}

export function getOrdersByCustomer(customerId: string): Order[] {
  return orders.filter((order) => order.customerId === customerId)
}
