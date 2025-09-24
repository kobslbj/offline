'use client'

import { SAMPLE_PRODUCTS } from '@/data/products'
import { ProductGrid } from './product-grid'

export function FeaturedProducts() {
  // Filter featured products
  const featuredProducts = SAMPLE_PRODUCTS.filter(product => product.featured)

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            精選商品
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            探索我們精心挑選的高爾夫用品，為你的球場表現加分
          </p>
        </div>

        <ProductGrid 
          products={featuredProducts}
          columns={3}
          className="max-w-6xl mx-auto"
        />
      </div>
    </section>
  )
}