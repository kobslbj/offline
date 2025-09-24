import { Product } from '@/lib/types'

export const SAMPLE_PRODUCTS: Product[] = [
  {
    id: '1',
    name: '經典高爾夫POLO衫',
    description: '舒適透氣的高品質POLO衫，適合球場內外穿著',
    price: 1200,
    originalPrice: 1500,
    images: ['/images/products/polo-1.jpg'],
    category: {
      id: 'apparel',
      name: '服飾',
      slug: 'apparel',
      description: '專業高爾夫球服飾系列',
      image: '/images/categories/apparel.jpg'
    },
    variants: [
      { id: 'polo-black', name: '黑色', value: '#000000', type: 'color', available: true },
      { id: 'polo-blue', name: '藍色', value: '#1e40af', type: 'color', available: true },
      { id: 'polo-white', name: '白色', value: '#ffffff', type: 'color', available: true },
    ],
    inStock: true,
    featured: true
  },
  {
    id: '2',
    name: '專業高爾夫帽',
    description: '防曬透氣設計，提供最佳的球場保護',
    price: 800,
    images: ['/images/products/cap-1.jpg'],
    category: {
      id: 'accessories',
      name: '配件',
      slug: 'accessories',
      description: '精選高爾夫球配件用品',
      image: '/images/categories/accessories.jpg'
    },
    variants: [
      { id: 'cap-white', name: '白色', value: '#ffffff', type: 'color', available: true },
      { id: 'cap-navy', name: '深藍', value: '#1e3a8a', type: 'color', available: true },
      { id: 'cap-grey', name: '灰色', value: '#6b7280', type: 'color', available: true },
    ],
    inStock: true,
    featured: true
  },
  {
    id: '3',
    name: '高爾夫球訓練組',
    description: '專業訓練用球組合，提升你的球技表現',
    price: 1600,
    images: ['/images/products/training-balls.jpg'],
    category: {
      id: 'accessories',
      name: '配件',
      slug: 'accessories',
      description: '精選高爾夫球配件用品',
      image: '/images/categories/accessories.jpg'
    },
    variants: [
      { id: 'balls-white', name: '白球', value: '#ffffff', type: 'color', available: true },
      { id: 'balls-yellow', name: '黃球', value: '#fbbf24', type: 'color', available: true },
      { id: 'balls-orange', name: '橘球', value: '#f97316', type: 'color', available: true },
    ],
    inStock: true,
    featured: true
  }
]