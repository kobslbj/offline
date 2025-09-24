'use client'

import { Product } from '@/lib/types'
import { ProductCard } from './product-card'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'

interface ProductGridProps {
  products: Product[]
  className?: string
  columns?: 2 | 3 | 4
}

export function ProductGrid({ 
  products, 
  className, 
  columns = 3 
}: ProductGridProps) {
  const gridCols = {
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1] as [number, number, number, number]
      }
    }
  }

  if (products.length === 0) {
    return (
      <motion.div 
        className="text-center py-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
          <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M9 21V9a2 2 0 012-2h2a2 2 0 012 2v12" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">目前沒有商品</h3>
        <p className="text-gray-500">請稍後再來查看新商品</p>
      </motion.div>
    )
  }

  return (
    <motion.div 
      className={cn(
        "grid gap-8",
        gridCols[columns],
        className
      )}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {products.map((product, index) => (
        <motion.div
          key={product.id}
          variants={itemVariants}
        >
          <ProductCard product={product} />
        </motion.div>
      ))}
    </motion.div>
  )
}