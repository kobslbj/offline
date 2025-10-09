'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { ProductCard } from '@/components/product/product-card'
import { MissionSection } from '@/components/common/mission-section'
import { cn } from '@/lib/utils'
import { SAMPLE_PRODUCTS } from '@/data/products'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

interface ProductCatalogProps {
  category: string
}

const categories = {
  mens: [
    { id: 'all', label: '全部', count: 5 },
    { id: 'apparel', label: '服飾', count: 4 },
    { id: 'accessories', label: '配件', count: 1 },
  ],
  womens: [
    { id: 'all', label: '全部', count: 5 },
    { id: 'apparel', label: '服飾', count: 4 },
    { id: 'accessories', label: '配件', count: 1 },
  ]
}

const sortOptions = [
  { value: 'newest', label: '最新上架' },
  { value: 'price-low', label: '價格低至高' },
  { value: 'price-high', label: '價格高至低' },
  { value: 'name', label: '名稱 A-Z' },
]

export function ProductCatalog({ category }: ProductCatalogProps) {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [sortBy, setSortBy] = useState('newest')

  const isMens = category === 'mens'
  const currentCategories = categories[isMens ? 'mens' : 'womens']
  const title = isMens ? '男士' : '女士'

  // 根據性別過濾商品
  const genderFilteredProducts = SAMPLE_PRODUCTS.filter(
    product => product.gender === (isMens ? 'mens' : 'womens')
  )

  // 再根據類別過濾
  const filteredProducts = selectedCategory === 'all'
    ? genderFilteredProducts
    : genderFilteredProducts.filter(product => product.category.id === selectedCategory)

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price
      case 'price-high':
        return b.price - a.price
      case 'name':
        return a.name.localeCompare(b.name)
      case 'newest':
      default:
        return 0
    }
  })

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <motion.div
        className="pt-32 pb-16 px-6 md:px-12 lg:px-24"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-normal text-gray-900 mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            {title}
          </motion.h1>

          {/* Category Filter */}
          <motion.div
            className="flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {currentCategories.map((cat) => (
              <motion.button
                key={cat.id}
                className={cn(
                  "px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300",
                  selectedCategory === cat.id
                    ? "bg-black text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                )}
                onClick={() => setSelectedCategory(cat.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {cat.label}
              </motion.button>
            ))}

            {/* Sort Options */}
            <div className="ml-auto hidden md:flex items-center space-x-4">
              <span className="text-sm text-gray-500">{sortedProducts.length} 結果</span>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="flex items-center space-x-2 text-sm text-gray-700 hover:text-gray-900 focus:outline-none">
                    <span>{sortOptions.find(option => option.value === sortBy)?.label}</span>
                    <ChevronDown className="h-4 w-4" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  {sortOptions.map((option) => (
                    <DropdownMenuItem
                      key={option.value}
                      onClick={() => setSortBy(option.value)}
                      className={cn(
                        "cursor-pointer",
                        sortBy === option.value && "bg-gray-100"
                      )}
                    >
                      {option.label}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Products Grid */}
      <div className="px-6 md:px-12 lg:px-24 pb-20">
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${category}-${selectedCategory}`}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {sortedProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                    ease: "easeOut"
                  }}
                >
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Empty State */}
          {sortedProducts.length === 0 && (
            <motion.div
              className="text-center py-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-gray-500 text-lg">此類別暫無商品</p>
            </motion.div>
          )}
        </div>
      </div>

      {/* Mission Section */}
      <MissionSection />
    </div>
  )
}
