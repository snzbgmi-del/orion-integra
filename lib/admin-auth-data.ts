// Admin authentication data
export const adminCredentials = {
  // CEO - Full Admin Access
  "ceo@orionintegra.com": {
    password: "admin123",
    user: {
      id: "admin-1",
      name: "Md Shahnawaz",
      email: "ceo@orionintegra.com",
      role: "admin" as const,
      avatar: "/placeholder.svg?height=40&width=40&text=MS",
      lastLogin: new Date("2024-01-15T10:30:00"),
      permissions: ["all"],
    },
  },
  // CTO - Technical Admin
  "cto@orionintegra.com": {
    password: "admin123",
    user: {
      id: "admin-2",
      name: "Hasmat Ali",
      email: "cto@orionintegra.com",
      role: "admin" as const,
      avatar: "/placeholder.svg?height=40&width=40&text=HA",
      lastLogin: new Date("2024-01-15T09:15:00"),
      permissions: ["products", "orders", "customers", "analytics"],
    },
  },
  // Manager - Limited Access
  "manager@orionintegra.com": {
    password: "manager123",
    user: {
      id: "manager-1",
      name: "Rajesh Kumar",
      email: "manager@orionintegra.com",
      role: "manager" as const,
      avatar: "/placeholder.svg?height=40&width=40&text=RK",
      lastLogin: new Date("2024-01-15T08:45:00"),
      permissions: ["orders", "customers", "products"],
    },
  },
}

export function validateAdminCredentials(email: string, password: string) {
  const credential = adminCredentials[email as keyof typeof adminCredentials]
  if (credential && credential.password === password) {
    return credential.user
  }
  return null
}
