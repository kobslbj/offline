'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ShoppingCart, Heart, Eye } from 'lucide-react'
import { Product } from '@/lib/types'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface ProductCardProps {
  product: Product
  className?: string
}

export function ProductCard({ product, className }: ProductCardProps) {
  const [selectedVariant, setSelectedVariant] = useState(0)
  const [isWishlisted, setIsWishlisted] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('zh-TW', {
      style: 'currency',
      currency: 'TWD',
      minimumFractionDigits: 0,
    }).format(price)
  }

  return (
    <motion.div 
      className={cn(
        "group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500",
        className
      )}
      whileHover={{ y: -8 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      layout
    >
      {/* Product Image */}
      <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
        <Link href={`/products/${product.id}`}>
          <motion.div className="relative w-full h-full">
            {product.images[0] ? (
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <Image
                  src={product.images[0]}
                  alt={product.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </motion.div>
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                <div className="text-center text-gray-400">
                  <motion.div 
                    className="w-16 h-16 mx-auto mb-2 bg-gray-300 rounded-2xl flex items-center justify-center"
                    whileHover={{ rotate: 5, scale: 1.05 }}
                  >
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </motion.div>
                  <span className="text-xs font-medium">商品圖片</span>
                </div>
              </div>
            )}
          </motion.div>
        </Link>
        
        {/* Sale Badge */}
        <AnimatePresence>
          {product.originalPrice && (
            <motion.div 
              className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg"
              initial={{ scale: 0, rotate: -12 }}
              animate={{ scale: 1, rotate: -12 }}
              exit={{ scale: 0 }}
            >
              特價
            </motion.div>
          )}
        </AnimatePresence>

        {/* Action Buttons Overlay */}
        <AnimatePresence>
          {isHovered && (
            <motion.div 
              className="absolute inset-0 bg-black/20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {/* Top Right Actions */}
              <div className="absolute top-3 right-3 flex flex-col space-y-2">
                {/* Wishlist Button */}
                <motion.button
                  className={cn(
                    "w-10 h-10 rounded-full backdrop-blur-md shadow-lg flex items-center justify-center transition-colors",
                    isWishlisted 
                      ? "bg-red-500 text-white" 
                      : "bg-white/90 text-gray-700 hover:bg-white"
                  )}
                  onClick={(e) => {
                    e.preventDefault()
                    setIsWishlisted(!isWishlisted)
                  }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                >
                  <Heart className={cn(
                    "h-4 w-4",
                    isWishlisted && "fill-current"
                  )} />
                </motion.button>

                {/* Quick View Button */}
                <motion.button
                  className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-md shadow-lg text-gray-700 hover:bg-white flex items-center justify-center"
                  onClick={(e) => {
                    e.preventDefault()
                    // Quick view logic
                  }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <Eye className="h-4 w-4" />
                </motion.button>
              </div>

              {/* Bottom Add to Cart Button */}
              <motion.div 
                className="absolute bottom-4 left-4 right-4"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <motion.button
                  className="w-full bg-black/90 backdrop-blur-md text-white py-3 px-4 rounded-full font-semibold flex items-center justify-center space-x-2 hover:bg-black transition-colors"
                  onClick={(e) => {
                    e.preventDefault()
                    // Add to cart logic
                  }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <ShoppingCart className="h-4 w-4" />
                  <span>加入購物車</span>
                </motion.button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Product Info */}
      <div className="p-6">
        <Link href={`/products/${product.id}`}>
          <motion.h3 
            className="font-bold text-gray-900 text-lg mb-2 line-clamp-2 hover:text-gray-700 transition-colors"
            whileHover={{ x: 2 }}
          >
            {product.name}
          </motion.h3>
        </Link>
        
        {/* Category */}
        <p className="text-sm text-gray-500 mb-4 font-medium">
          {product.category.name}
        </p>

        {/* Color Variants */}
        {product.variants.length > 0 && (
          <div className="flex items-center space-x-2 mb-4">
            <span className="text-xs text-gray-500 font-medium">顏色:</span>
            <div className="flex space-x-2">
              {product.variants.slice(0, 4).map((variant, index) => (
                <motion.button
                  key={variant.id}
                  className={cn(
                    "w-7 h-7 rounded-full border-2 shadow-sm transition-all duration-200",
                    selectedVariant === index 
                      ? "border-gray-900 ring-2 ring-gray-900/20" 
                      : "border-gray-300 hover:border-gray-500"
                  )}
                  style={{ backgroundColor: variant.value }}
                  onClick={() => setSelectedVariant(index)}
                  title={variant.name}
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.95 }}
                />
              ))}
              {product.variants.length > 4 && (
                <span className="text-xs text-gray-500 self-center ml-2 font-medium">
                  +{product.variants.length - 4}
                </span>
              )}
            </div>
          </div>
        )}

        {/* Pricing */}
        <div className="flex items-center space-x-3 mb-2">
          <motion.span 
            className="text-xl font-bold text-gray-900"
            key={product.price}
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
          >
            {formatPrice(product.price)}
          </motion.span>
          {product.originalPrice && (
            <motion.span 
              className="text-sm text-gray-500 line-through"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {formatPrice(product.originalPrice)}
            </motion.span>
          )}
        </div>

        {/* Stock Status */}
        <AnimatePresence>
          {!product.inStock && (
            <motion.p 
              className="text-sm text-red-500 font-medium"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              暫時缺貨
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}