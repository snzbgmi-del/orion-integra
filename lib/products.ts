export interface Product {
  id: string
  name: string
  slug: string
  category: string
  subcategory: string
  brand: string
  price: number
  originalPrice?: number
  discount?: number
  rating: number
  reviewCount: number
  inStock: boolean
  images: string[]
  shortDescription: string
  description: string
  features: string[]
  specifications: Record<string, string>
  warranty: string
  installation: boolean
  tags: string[]
}

export const productCategories = {
  cctv: {
    name: "CCTV Cameras",
    subcategories: {
      dome: "Dome Cameras",
      bullet: "Bullet Cameras",
      ptz: "PTZ Cameras",
      ip: "IP Cameras",
    },
  },
  switches: {
    name: "PoE Switches",
    subcategories: {
      "4port": "4-Port Switches",
      "8port": "8-Port Switches",
      "16port": "16+ Port Switches",
    },
  },
  nvr: {
    name: "NVRs & Storage",
    subcategories: {
      "4ch": "4-Channel NVRs",
      "8ch": "8-Channel NVRs",
      "16ch": "16+ Channel NVRs",
    },
  },
  accessories: {
    name: "Accessories",
    subcategories: {
      cables: "Cables",
      mounts: "Mounts & Brackets",
      power: "Power Supplies",
    },
  },
}

export const products: Product[] = [
  // CCTV Cameras - Dome
  {
    id: "dome-4k-pro",
    name: "4K Ultra HD Dome Camera",
    slug: "4k-ultra-hd-dome-camera",
    category: "cctv",
    subcategory: "dome",
    brand: "Orion Pro",
    price: 12999,
    originalPrice: 15999,
    discount: 19,
    rating: 4.8,
    reviewCount: 124,
    inStock: true,
    images: [
      "/placeholder.svg?height=400&width=400&text=4K+Dome+Front",
      "/placeholder.svg?height=400&width=400&text=4K+Dome+Side",
      "/placeholder.svg?height=400&width=400&text=4K+Dome+Install",
    ],
    shortDescription: "Professional 4K dome camera with advanced night vision and AI detection",
    description:
      "The 4K Ultra HD Dome Camera delivers exceptional image quality with 8MP resolution and advanced AI-powered analytics. Perfect for indoor and outdoor surveillance with weatherproof design and vandal-resistant housing.",
    features: [
      "4K Ultra HD (3840×2160) resolution",
      "Advanced AI human/vehicle detection",
      "120dB True WDR technology",
      "Smart IR up to 30m range",
      "IP67 weatherproof rating",
      "Vandal-resistant IK10 housing",
      "PoE+ powered",
      "Mobile app remote viewing",
    ],
    specifications: {
      Resolution: "4K (3840×2160) @ 30fps",
      Sensor: '1/2.8" CMOS',
      Lens: "2.8mm fixed lens",
      "Night Vision": "Smart IR up to 30m",
      WDR: "120dB True WDR",
      Audio: "Built-in microphone",
      Storage: "MicroSD up to 256GB",
      Power: "PoE+ (25.5W max)",
      "Operating Temp": "-30°C to +60°C",
      Dimensions: "Ø140 × 122mm",
    },
    warranty: "3 years comprehensive warranty",
    installation: true,
    tags: ["4k", "dome", "ai-detection", "night-vision", "weatherproof"],
  },
  {
    id: "dome-2mp-basic",
    name: "2MP HD Dome Camera",
    slug: "2mp-hd-dome-camera",
    category: "cctv",
    subcategory: "dome",
    brand: "Orion Essential",
    price: 4999,
    rating: 4.5,
    reviewCount: 89,
    inStock: true,
    images: [
      "/placeholder.svg?height=400&width=400&text=2MP+Dome+Front",
      "/placeholder.svg?height=400&width=400&text=2MP+Dome+Side",
    ],
    shortDescription: "Affordable 2MP dome camera with excellent image quality and night vision",
    description:
      "Cost-effective surveillance solution with 1080p Full HD recording, infrared night vision, and weatherproof design. Ideal for small businesses and residential applications.",
    features: [
      "1080p Full HD resolution",
      "IR night vision up to 20m",
      "IP66 weatherproof",
      "Motion detection alerts",
      "PoE powered",
      "Easy installation",
      "Mobile viewing app",
      "3-axis adjustment",
    ],
    specifications: {
      Resolution: "1080p (1920×1080) @ 30fps",
      Sensor: '1/2.9" CMOS',
      Lens: "3.6mm fixed lens",
      "Night Vision": "IR up to 20m",
      WDR: "Digital WDR",
      Storage: "MicroSD up to 128GB",
      Power: "PoE (6W max)",
      "Operating Temp": "-20°C to +50°C",
      Dimensions: "Ø110 × 85mm",
    },
    warranty: "2 years warranty",
    installation: true,
    tags: ["1080p", "dome", "night-vision", "budget-friendly"],
  },

  // CCTV Cameras - Bullet
  {
    id: "bullet-4k-zoom",
    name: "4K Varifocal Bullet Camera",
    slug: "4k-varifocal-bullet-camera",
    category: "cctv",
    subcategory: "bullet",
    brand: "Orion Pro",
    price: 18999,
    originalPrice: 22999,
    discount: 17,
    rating: 4.9,
    reviewCount: 156,
    inStock: true,
    images: [
      "/placeholder.svg?height=400&width=400&text=4K+Bullet+Front",
      "/placeholder.svg?height=400&width=400&text=4K+Bullet+Side",
      "/placeholder.svg?height=400&width=400&text=4K+Bullet+Mount",
    ],
    shortDescription: "Professional 4K bullet camera with motorized zoom and advanced analytics",
    description:
      "High-performance 4K bullet camera featuring motorized varifocal lens, advanced AI analytics, and superior low-light performance. Perfect for perimeter security and long-range surveillance.",
    features: [
      "4K Ultra HD recording",
      "2.8-12mm motorized varifocal lens",
      "AI-powered analytics",
      "Starlight night vision technology",
      "Smart IR up to 60m",
      "Audio alarm and white light deterrent",
      "IP67 weatherproof",
      "Remote zoom and focus",
    ],
    specifications: {
      Resolution: "4K (3840×2160) @ 30fps",
      Sensor: '1/2.8" Starlight CMOS',
      Lens: "2.8-12mm motorized varifocal",
      "Night Vision": "Starlight + Smart IR 60m",
      WDR: "140dB True WDR",
      Audio: "Audio in/out",
      Alarm: "Audio alarm + white light",
      Power: "PoE+ (25.5W max)",
      "Operating Temp": "-40°C to +60°C",
      Dimensions: "357 × 96 × 96mm",
    },
    warranty: "3 years comprehensive warranty",
    installation: true,
    tags: ["4k", "bullet", "varifocal", "ai-analytics", "long-range"],
  },

  // PoE Switches
  {
    id: "poe-switch-8port",
    name: "8-Port Gigabit PoE+ Switch",
    slug: "8-port-gigabit-poe-switch",
    category: "switches",
    subcategory: "8port",
    brand: "Orion Network",
    price: 15999,
    rating: 4.7,
    reviewCount: 78,
    inStock: true,
    images: [
      "/placeholder.svg?height=400&width=400&text=8Port+Switch+Front",
      "/placeholder.svg?height=400&width=400&text=8Port+Switch+Back",
      "/placeholder.svg?height=400&width=400&text=8Port+Switch+Rack",
    ],
    shortDescription: "Managed 8-port PoE+ switch with 120W power budget and advanced features",
    description:
      "Professional managed PoE+ switch designed for IP camera installations. Features 8 Gigabit PoE+ ports with 120W total power budget, VLAN support, and comprehensive management options.",
    features: [
      "8 × Gigabit PoE+ ports",
      "120W total power budget",
      "30W per port PoE+ capability",
      "Web-based management",
      "VLAN and QoS support",
      "Port isolation and mirroring",
      "Fanless silent operation",
      "Rack mountable design",
    ],
    specifications: {
      Ports: "8 × 10/100/1000 PoE+ ports",
      "Power Budget": "120W total",
      "PoE Standard": "IEEE 802.3at/af",
      "Switching Capacity": "16 Gbps",
      "MAC Address": "8K entries",
      Management: "Web GUI, SNMP",
      "Power Input": "AC 100-240V",
      Dimensions: "440 × 200 × 44mm",
      "Operating Temp": "0°C to +50°C",
      Mounting: "Desktop/Rack mount",
    },
    warranty: "Lifetime warranty",
    installation: true,
    tags: ["poe-switch", "managed", "8-port", "gigabit", "rack-mount"],
  },

  // NVRs
  {
    id: "nvr-16ch-4k",
    name: "16-Channel 4K NVR System",
    slug: "16-channel-4k-nvr-system",
    category: "nvr",
    subcategory: "16ch",
    brand: "Orion Pro",
    price: 35999,
    originalPrice: 42999,
    discount: 16,
    rating: 4.8,
    reviewCount: 92,
    inStock: true,
    images: [
      "/placeholder.svg?height=400&width=400&text=16CH+NVR+Front",
      "/placeholder.svg?height=400&width=400&text=16CH+NVR+Back",
      "/placeholder.svg?height=400&width=400&text=16CH+NVR+Interface",
    ],
    shortDescription: "Professional 16-channel 4K NVR with AI analytics and cloud storage",
    description:
      "Enterprise-grade 16-channel NVR supporting 4K recording on all channels. Features built-in AI analytics, cloud storage integration, and comprehensive remote management capabilities.",
    features: [
      "16-channel 4K recording",
      "Built-in AI analytics",
      "H.265+ compression",
      "RAID 1/5/6 support",
      "Cloud storage integration",
      "Mobile and web access",
      "Alarm integration",
      "Redundant power supply ready",
    ],
    specifications: {
      Channels: "16 IP camera inputs",
      Recording: "4K @ 30fps all channels",
      Compression: "H.265+/H.264+",
      Storage: "8 × SATA HDD (up to 80TB)",
      Network: "2 × Gigabit Ethernet",
      Display: "HDMI 4K, VGA",
      "AI Features": "Face detection, perimeter protection",
      Power: "≤65W (without HDD)",
      "Operating Temp": "-10°C to +55°C",
      Dimensions: "445 × 400 × 70mm",
    },
    warranty: "3 years comprehensive warranty",
    installation: true,
    tags: ["nvr", "16-channel", "4k", "ai-analytics", "enterprise"],
  },

  // Accessories
  {
    id: "cat6-cable-305m",
    name: "CAT6 UTP Cable 305m Box",
    slug: "cat6-utp-cable-305m",
    category: "accessories",
    subcategory: "cables",
    brand: "Orion Cable",
    price: 8999,
    rating: 4.6,
    reviewCount: 45,
    inStock: true,
    images: [
      "/placeholder.svg?height=400&width=400&text=CAT6+Cable+Box",
      "/placeholder.svg?height=400&width=400&text=CAT6+Cable+Detail",
    ],
    shortDescription: "High-quality CAT6 UTP cable for professional installations",
    description:
      "Premium CAT6 UTP cable suitable for IP camera installations and network infrastructure. Meets all industry standards with excellent performance and durability.",
    features: [
      "CAT6 UTP specification",
      "23 AWG solid copper conductors",
      "LSZH jacket available",
      "550MHz bandwidth",
      "Gigabit Ethernet support",
      "Easy pull box design",
      "Color-coded pairs",
      "Professional grade quality",
    ],
    specifications: {
      Category: "CAT6 UTP",
      Conductor: "23 AWG solid copper",
      Jacket: "PVC/LSZH options",
      Bandwidth: "550 MHz",
      Length: "305 meters",
      Color: "Blue/Gray options",
      Temperature: "-20°C to +60°C",
      Standards: "TIA/EIA-568-B.2-1",
    },
    warranty: "25 years warranty",
    installation: false,
    tags: ["cable", "cat6", "networking", "installation"],
  },
]

export function getProductsByCategory(category: string): Product[] {
  return products.filter((product) => product.category === category)
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug)
}

export function getFeaturedProducts(): Product[] {
  return products.filter((product) => product.rating >= 4.7).slice(0, 8)
}

export function searchProducts(query: string): Product[] {
  const lowercaseQuery = query.toLowerCase()
  return products.filter(
    (product) =>
      product.name.toLowerCase().includes(lowercaseQuery) ||
      product.description.toLowerCase().includes(lowercaseQuery) ||
      product.tags.some((tag) => tag.toLowerCase().includes(lowercaseQuery)),
  )
}
