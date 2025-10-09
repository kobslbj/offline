"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ProductCard } from "@/components/product/product-card";
import { MissionSection } from "@/components/common/mission-section";
import { cn } from "@/lib/utils";
import { Product } from "@/lib/types";

const categories = [
  { id: "all", label: "全部", count: 6 },
  { id: "apparel", label: "服飾", count: 4 },
  { id: "accessories", label: "配件", count: 2 },
];

const mockProducts: Product[] = [
  {
    id: "1",
    name: "經典帽款休閒帽",
    description: "簡約設計的日常帽款",
    price: 1680,
    images: ["/placeholder-cap.jpg"],
    category: {
      id: "accessories",
      name: "配件",
      slug: "accessories",
      description: "",
      image: "",
    },
    variants: [
      {
        id: "1-1",
        name: "灰色",
        value: "#E5E7EB",
        type: "color",
        available: true,
      },
      {
        id: "1-2",
        name: "黑色",
        value: "#1F2937",
        type: "color",
        available: true,
      },
      {
        id: "1-3",
        name: "白色",
        value: "#F9FAFB",
        type: "color",
        available: true,
      },
    ],
    inStock: true,
    featured: true,
  },
  {
    id: "2",
    name: "經典款短袖Polo 衫",
    description: "舒適的日常Polo衫",
    price: 3300,
    images: ["/placeholder-polo.jpg"],
    category: {
      id: "apparel",
      name: "服飾",
      slug: "apparel",
      description: "",
      image: "",
    },
    variants: [
      {
        id: "2-1",
        name: "白色",
        value: "#F9FAFB",
        type: "color",
        available: true,
      },
      {
        id: "2-2",
        name: "藍色",
        value: "#3B82F6",
        type: "color",
        available: true,
      },
      {
        id: "2-3",
        name: "灰色",
        value: "#6B7280",
        type: "color",
        available: true,
      },
    ],
    inStock: true,
    featured: true,
  },
  {
    id: "3",
    name: "經典款短袖上衣",
    description: "簡約的短袖T恤",
    price: 2200,
    images: ["/placeholder-tshirt.jpg"],
    category: {
      id: "apparel",
      name: "服飾",
      slug: "apparel",
      description: "",
      image: "",
    },
    variants: [
      {
        id: "3-1",
        name: "黑色",
        value: "#1F2937",
        type: "color",
        available: true,
      },
      {
        id: "3-2",
        name: "白色",
        value: "#F9FAFB",
        type: "color",
        available: true,
      },
      {
        id: "3-3",
        name: "灰色",
        value: "#6B7280",
        type: "color",
        available: true,
      },
    ],
    inStock: true,
    featured: false,
  },
  {
    id: "4",
    name: "經典款短袖上衣",
    description: "舒適的日常T恤",
    price: 2200,
    images: ["/placeholder-tshirt-2.jpg"],
    category: {
      id: "apparel",
      name: "服飾",
      slug: "apparel",
      description: "",
      image: "",
    },
    variants: [
      {
        id: "4-1",
        name: "黑色",
        value: "#1F2937",
        type: "color",
        available: true,
      },
      {
        id: "4-2",
        name: "藍色",
        value: "#1E40AF",
        type: "color",
        available: true,
      },
      {
        id: "4-3",
        name: "白色",
        value: "#F9FAFB",
        type: "color",
        available: true,
      },
    ],
    inStock: true,
    featured: false,
  },
  {
    id: "5",
    name: "聯名上衣",
    description: "特別聯名款式",
    price: 0,
    images: ["/placeholder-collab.jpg"],
    category: {
      id: "apparel",
      name: "服飾",
      slug: "apparel",
      description: "",
      image: "",
    },
    variants: [
      {
        id: "5-1",
        name: "黑色",
        value: "#1F2937",
        type: "color",
        available: true,
      },
      {
        id: "5-2",
        name: "藍色",
        value: "#1E40AF",
        type: "color",
        available: true,
      },
      {
        id: "5-3",
        name: "白色",
        value: "#F9FAFB",
        type: "color",
        available: true,
      },
    ],
    inStock: false,
    featured: false,
  },
  {
    id: "6",
    name: "T-shirt",
    description: "基本款T恤",
    price: 0,
    images: ["/placeholder-basic-tee.jpg"],
    category: {
      id: "apparel",
      name: "服飾",
      slug: "apparel",
      description: "",
      image: "",
    },
    variants: [
      {
        id: "6-1",
        name: "黑色",
        value: "#1F2937",
        type: "color",
        available: true,
      },
      {
        id: "6-2",
        name: "藍色",
        value: "#1E40AF",
        type: "color",
        available: true,
      },
      {
        id: "6-3",
        name: "白色",
        value: "#F9FAFB",
        type: "color",
        available: true,
      },
    ],
    inStock: false,
    featured: false,
  },
];

export function MensProductCatalog() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredProducts =
    selectedCategory === "all"
      ? mockProducts
      : mockProducts.filter(
          (product) => product.category.id === selectedCategory,
        );

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
            男士
          </motion.h1>

          {/* Category Filter */}
          <motion.div
            className="flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {categories.map((category) => (
              <motion.button
                key={category.id}
                className={cn(
                  "px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300",
                  selectedCategory === category.id
                    ? "bg-black text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200",
                )}
                onClick={() => setSelectedCategory(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.label}
              </motion.button>
            ))}

            {/* Sort Options */}
            <div className="ml-auto hidden md:flex items-center space-x-4">
              <span className="text-sm text-gray-500">5 結果</span>
              <select className="text-sm border-none bg-transparent text-gray-700 focus:outline-none cursor-pointer">
                <option>最新上架</option>
                <option>價格低至高</option>
                <option>價格高至低</option>
              </select>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Products Grid */}
      <div className="px-6 md:px-12 lg:px-24 pb-20">
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                    ease: "easeOut",
                  }}
                >
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Empty State */}
          {filteredProducts.length === 0 && (
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
  );
}
