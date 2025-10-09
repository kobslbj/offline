// Product Types
export interface Product {
  id: string
  name: string
  description: string
  price: number
  originalPrice?: number
  images: string[]
  category: ProductCategory
  variants: ProductVariant[]
  inStock: boolean
  featured: boolean
  gender?: 'mens' | 'womens' | 'unisex'
}

export interface ProductVariant {
  id: string
  name: string
  value: string
  type: 'color' | 'size'
  available: boolean
}

export interface ProductCategory {
  id: string
  name: string
  slug: string
  description: string
  image: string
}

// Navigation Types
export interface NavigationItem {
  name: string
  href: string
  children?: NavigationItem[]
}

// Cart Types
export interface CartItem {
  productId: string
  variantId?: string
  quantity: number
  product: Product
}

export interface Cart {
  items: CartItem[]
  total: number
  itemCount: number
}

// User Types
export interface User {
  id: string
  name: string
  email: string
  avatar?: string
}