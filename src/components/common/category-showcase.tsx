'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { PRODUCT_CATEGORIES, CONTENT } from '@/lib/constants'
import { Button } from '@/components/ui/button'

export function CategoryShowcase() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {CONTENT.categories.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            探索我們的產品系列，找到最適合你的高爾夫風格
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {PRODUCT_CATEGORIES.map((category, index) => (
            <Link
              key={category.id}
              href={`/products?category=${category.slug}`}
              className="group relative overflow-hidden rounded-xl bg-white shadow-sm hover:shadow-lg transition-all duration-300"
            >
              {/* Category Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-blue-900 via-purple-900 to-blue-800">
                  {/* Category-specific gradient backgrounds */}
                  <div className={`w-full h-full ${
                    index === 0 ? 'bg-gradient-to-br from-green-600 to-green-800' :
                    index === 1 ? 'bg-gradient-to-br from-blue-600 to-blue-800' :
                    'bg-gradient-to-br from-purple-600 to-purple-800'
                  }`}></div>
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
                
                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <div className="text-white">
                    <h3 className="text-2xl font-bold mb-2">
                      {category.name}
                    </h3>
                    <p className="text-white/90 mb-4 line-clamp-2">
                      {category.description}
                    </p>
                    
                    <Button
                      variant="secondary"
                      className="bg-white/90 text-black hover:bg-white group-hover:translate-x-1 transition-all duration-200"
                    >
                      探索更多
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}