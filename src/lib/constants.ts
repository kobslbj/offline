import { ProductCategory, NavigationItem } from './types'

// Site Configuration
export const SITE_CONFIG = {
  name: 'Offline',
  description: '離開螢幕，回歸自己。為球場的專注與堅毅而生的自在感設計。',
  url: 'https://offline.com',
} as const

// Navigation Menu
export const NAVIGATION_ITEMS: NavigationItem[] = [
  {
    name: '購物',
    href: '/products',
    children: [
      { name: '全部商品', href: '/products' },
      { name: '生活穿搭', href: '/products?category=lifestyle' },
      { name: '服飾', href: '/products?category=apparel' },
      { name: '配件', href: '/products?category=accessories' },
    ]
  },
  {
    name: '關於我們',
    href: '/about'
  }
]

// Product Categories
export const PRODUCT_CATEGORIES: ProductCategory[] = [
  {
    id: 'lifestyle',
    name: '生活穿搭',
    slug: 'lifestyle',
    description: '日常生活中的高爾夫風格穿搭',
    image: '/images/categories/lifestyle.png'
  },
  {
    id: 'apparel',
    name: '服飾',
    slug: 'apparel', 
    description: '專業高爾夫球服飾系列',
    image: '/images/categories/apparel.png'
  },
  {
    id: 'accessories',
    name: '配件',
    slug: 'accessories',
    description: '精選高爾夫球配件用品',
    image: '/images/categories/accessories.png'
  }
]

// Theme Colors (matching your design)
export const BRAND_COLORS = {
  primary: '#1a1a1a',
  secondary: '#f5f5f5',
  accent: '#4f46e5',
  muted: '#6b7280',
} as const

// Text Content
export const CONTENT = {
  hero: {
    title: '登出時刻系列',
    subtitle: '離開螢幕，回歸自己。為球場的專注與堅毅而生的自在感設計。',
    ctaShopMens: 'Shop Mens',
    ctaShopWomens: 'Shop Womens'
  },
  categories: {
    title: '依分類選購'
  },
  mission: {
    title: '我們的使命',
    description: '登出片刻，揮桿上場。',
    cta: '瞭解更多'
  }
} as const