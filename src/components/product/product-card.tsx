"use client";

import Image from "next/image";
import Link from "next/link";
import { ShoppingCart, Heart, Eye } from "lucide-react";
import { Product } from "@/lib/types";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface ProductCardProps {
  product: Product;
  className?: string;
}

export function ProductCard({ product, className }: ProductCardProps) {
  const [selectedVariant, setSelectedVariant] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("zh-TW", {
      style: "currency",
      currency: "TWD",
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div
      className={cn(
        "group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500",
        className,
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image */}
      <div className="relative aspect-square overflow-hidden bg-white">
        <Link href={`/products/${product.id}`}>
          <div className="relative w-full h-full">
            {product.images[0] ? (
              <Image
                src={product.images[0]}
                alt={product.name}
                fill
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority={product.featured}
                loading={product.featured ? "eager" : "lazy"}
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                <div className="text-center text-gray-400">
                  <div className="w-16 h-16 mx-auto mb-2 bg-gray-300 rounded-2xl flex items-center justify-center">
                    <svg
                      className="w-8 h-8"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <span className="text-xs font-medium">商品圖片</span>
                </div>
              </div>
            )}
          </div>
        </Link>

        {/* Action Buttons Overlay */}
        {isHovered && (
          <div className="absolute inset-0 bg-black/20 transition-opacity duration-300">
            {/* Top Right Actions */}
            <div className="absolute top-3 right-3 flex flex-col space-y-2">
              {/* Wishlist Button */}
              <button
                className={cn(
                  "w-10 h-10 rounded-full backdrop-blur-md shadow-lg flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-90",
                  isWishlisted
                    ? "bg-red-500 text-white"
                    : "bg-white/90 text-gray-700 hover:bg-white",
                )}
                onClick={(e) => {
                  e.preventDefault();
                  setIsWishlisted(!isWishlisted);
                }}
              >
                <Heart
                  className={cn("h-4 w-4", isWishlisted && "fill-current")}
                />
              </button>

              {/* Quick View Button */}
              <button
                className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-md shadow-lg text-gray-700 hover:bg-white flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-90"
                onClick={(e) => {
                  e.preventDefault();
                  // Quick view logic
                }}
              >
                <Eye className="h-4 w-4" />
              </button>
            </div>

            {/* Bottom Add to Cart Button */}
            <div className="absolute bottom-4 left-4 right-4">
              <button
                className="w-full bg-black/90 backdrop-blur-md text-white py-3 px-4 rounded-full font-semibold flex items-center justify-center space-x-2 hover:bg-black hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
                onClick={(e) => {
                  e.preventDefault();
                  // Add to cart logic
                }}
              >
                <ShoppingCart className="h-4 w-4" />
                <span>加入購物車</span>
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-6">
        {/* New Badge */}
        {product.featured && (
          <div className="inline-flex items-center px-2 py-1 mb-3 bg-emerald-100 text-emerald-700 text-xs font-semibold rounded-full">
            NEW
          </div>
        )}

        <Link href={`/products/${product.id}`}>
          <h3 className="font-bold text-gray-900 text-lg mb-2 line-clamp-2 hover:text-gray-700 transition-colors">
            {product.name}
          </h3>
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
                <button
                  key={variant.id}
                  className={cn(
                    "w-7 h-7 rounded-full border-2 shadow-sm transition-all duration-200 hover:scale-110 active:scale-95",
                    selectedVariant === index
                      ? "border-gray-900 ring-2 ring-gray-900/20"
                      : "border-gray-300 hover:border-gray-500",
                  )}
                  style={{ backgroundColor: variant.value }}
                  onClick={() => setSelectedVariant(index)}
                  title={variant.name}
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
          <span className="text-xl font-bold text-gray-900">
            {formatPrice(product.price)}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-gray-500 line-through">
              {formatPrice(product.originalPrice)}
            </span>
          )}
        </div>

        {/* Stock Status */}
        {!product.inStock && (
          <p className="text-sm text-red-500 font-medium">暫時缺貨</p>
        )}
      </div>
    </div>
  );
}
