"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Product } from "@/lib/types";
import { Button } from "@/components/ui/button";

interface ProductDetailProps {
  product: Product;
}

export function ProductDetail({ product }: ProductDetailProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]?.id);

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === product.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? product.images.length - 1 : prev - 1
    );
  };

  return (
    <div className="mx-auto max-w-7xl px-4 pt-24 pb-8 sm:px-6 lg:px-8 lg:pt-32">
      <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
        {/* 圖片區 */}
        <div>
          {/* 主圖 */}
          <div className="relative aspect-square w-full overflow-hidden rounded-lg bg-gray-100">
            <Image
              src={product.images[currentImageIndex]}
              alt={product.name}
              fill
              className="object-cover object-center"
              priority
            />

            {/* 圖片導航按鈕 */}
            {product.images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 shadow-lg hover:bg-white transition-colors"
                  aria-label="上一張圖片"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 shadow-lg hover:bg-white transition-colors"
                  aria-label="下一張圖片"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </>
            )}

            {/* 圖片指示器 */}
            {product.images.length > 1 && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {product.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`h-2 w-2 rounded-full transition-all ${
                      index === currentImageIndex
                        ? "bg-black w-8"
                        : "bg-black/30"
                    }`}
                    aria-label={`前往第 ${index + 1} 張圖片`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>

        {/* 產品資訊區 */}
        <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
          {/* 麵包屑 */}
          <nav className="text-sm mb-4">
            <ol className="flex items-center gap-2">
              <li>
                <Link href="/products" className="text-gray-500 hover:text-black transition-colors">
                  {product.category.name}
                </Link>
              </li>
              <li className="text-gray-300">/</li>
              <li className="text-gray-900">{product.name.split(' ')[0]}</li>
            </ol>
          </nav>

          {/* 商品名稱 */}
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            {product.name}
          </h1>

          {/* 價格 */}
          <div className="mt-3">
            <div className="flex items-baseline gap-2">
              {product.originalPrice && (
                <span className="text-sm text-gray-500 line-through">
                  TWD {product.originalPrice.toLocaleString()}
                </span>
              )}
              <p className="text-2xl font-semibold text-gray-900">
                TWD {product.price.toLocaleString()}
              </p>
            </div>
            {product.originalPrice && (
              <p className="mt-1 text-sm text-blue-600 font-medium">
                新上市
              </p>
            )}
          </div>

          {/* 商品描述 */}
          <div className="mt-6">
            <p className="text-gray-700 leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* 規格選擇 */}
          {product.variants && product.variants.length > 0 && (
            <div className="mt-8">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-medium text-gray-900">
                  {product.variants[0].type === 'color' ? '顏色' : '尺寸'}
                </h3>
                <span className="text-sm text-gray-500">
                  {product.variants.find(v => v.id === selectedVariant)?.name}
                </span>
              </div>

              <div className="mt-4 flex flex-wrap gap-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant.id}
                    onClick={() => setSelectedVariant(variant.id)}
                    disabled={!variant.available}
                    className={`group relative flex items-center justify-center rounded-full transition-all ${
                      variant.type === 'color'
                        ? 'h-10 w-10'
                        : 'px-4 py-2 border'
                    } ${
                      selectedVariant === variant.id
                        ? variant.type === 'color'
                          ? 'ring-2 ring-black ring-offset-2'
                          : 'border-black bg-black text-white'
                        : variant.type === 'color'
                        ? 'ring-1 ring-gray-300'
                        : 'border-gray-300 hover:border-black'
                    } ${
                      !variant.available && 'opacity-25 cursor-not-allowed'
                    }`}
                  >
                    {variant.type === 'color' ? (
                      <span
                        className="h-8 w-8 rounded-full border border-gray-200"
                        style={{ backgroundColor: variant.value }}
                      />
                    ) : (
                      <span className="text-sm font-medium">{variant.name}</span>
                    )}
                    {!variant.available && (
                      <span className="absolute inset-0 flex items-center justify-center">
                        <span className="h-px w-full bg-gray-400 rotate-45" />
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* 庫存狀態 */}
          <div className="mt-6">
            <p className={`text-sm ${product.inStock ? 'text-green-600' : 'text-red-600'}`}>
              {product.inStock ? '✓ 現貨供應' : '✗ 暫時缺貨'}
            </p>
          </div>

          {/* 加入購物車按鈕 */}
          <div className="mt-10">
            <Button
              size="lg"
              className="w-full"
              disabled={!product.inStock}
            >
              加入購物袋
            </Button>
          </div>

          {/* 縮圖 */}
          {product.images.length > 1 && (
            <div className="mt-8">
              <h3 className="text-sm font-medium text-gray-900 mb-4">更多圖片</h3>
              <div className="grid grid-cols-4 gap-3">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`relative aspect-square overflow-hidden rounded-lg bg-gray-100 transition-all ${
                      index === currentImageIndex
                        ? "ring-2 ring-black"
                        : "ring-1 ring-gray-200 hover:ring-gray-400"
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`${product.name} 圖片 ${index + 1}`}
                      fill
                      className="object-cover object-center"
                    />
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
