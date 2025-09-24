'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Search, ShoppingBag, User, Menu, X } from 'lucide-react'
import { useState, useEffect, useRef } from 'react'
import { SITE_CONFIG } from '@/lib/constants'
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion'
import { cn } from '@/lib/utils'

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [isScrolled, setIsScrolled] = useState(false)
  const searchInputRef = useRef<HTMLInputElement>(null)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 100)
  })

  useEffect(() => {
    if (searchOpen && searchInputRef.current) {
      searchInputRef.current.focus()
    }
  }, [searchOpen])

  const searchSuggestions = [
    '高爾夫球衫',
    '高爾夫帽子', 
    '高爾夫手套',
    'POLO衫',
    '高爾夫球包'
  ]

  const filteredSuggestions = searchSuggestions.filter(item => 
    item.toLowerCase().includes(searchQuery.toLowerCase()) && searchQuery.length > 0
  )

  return (
    <>
      <motion.header 
        className={cn(
          "fixed top-0 z-50 w-full transition-all duration-500",
          isScrolled 
            ? "bg-white/95 backdrop-blur-xl shadow-lg" 
            : "bg-transparent"
        )}
      >
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <motion.div 
              className="flex items-center"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <Link href="/" className="relative h-8 w-[120px] flex items-center justify-center">
                {/* 黑色 Logo - 滾動後顯示 */}
                <Image
                  src="/images/logos/Offline logo Black.png"
                  alt={SITE_CONFIG.name}
                  width={120}
                  height={32}
                  className={cn(
                    "transition-opacity duration-300 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",
                    isScrolled ? "opacity-100" : "opacity-0"
                  )}
                  priority
                />
                {/* 白色 Logo - 初始狀態顯示 */}
                <Image
                  src="/images/logos/Offline logo white.png"
                  alt={SITE_CONFIG.name}
                  width={120}
                  height={32}
                  className={cn(
                    "transition-opacity duration-300 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",
                    isScrolled ? "opacity-0" : "opacity-100"
                  )}
                  priority
                />
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-12">
              <Link 
                href="/products" 
                className={cn(
                  "text-base font-normal transition-all duration-300 hover:opacity-80",
                  isScrolled ? "text-gray-900" : "text-white"
                )}
              >
                購物
              </Link>
              <Link 
                href="/about" 
                className={cn(
                  "text-base font-normal transition-all duration-300 hover:opacity-80",
                  isScrolled ? "text-gray-900" : "text-white"
                )}
              >
                關於我們
              </Link>
            </nav>

            {/* Actions */}
            <div className="flex items-center space-x-4">
              {/* Language Selector */}
              <button 
                className={cn(
                  "text-base font-normal transition-all duration-300 hover:opacity-80 hidden sm:block",
                  isScrolled ? "text-gray-900" : "text-white"
                )}
              >
                繁體中文
              </button>

              {/* Search Button */}
              <motion.button
                className={cn(
                  "p-2 transition-all duration-300",
                  isScrolled ? "text-gray-900 hover:bg-gray-100" : "text-white hover:bg-white/10"
                )}
                onClick={() => setSearchOpen(true)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Search className="h-6 w-6" />
                <span className="sr-only">搜尋</span>
              </motion.button>

              {/* Shopping Cart */}
              <motion.button
                className={cn(
                  "p-2 transition-all duration-300",
                  isScrolled ? "text-gray-900 hover:bg-gray-100" : "text-white hover:bg-white/10"
                )}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ShoppingBag className="h-6 w-6" />
                <span className="sr-only">購物車</span>
              </motion.button>

              {/* Account */}
              <motion.button
                className={cn(
                  "p-2 transition-all duration-300",
                  isScrolled ? "text-gray-900 hover:bg-gray-100" : "text-white hover:bg-white/10"
                )}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <User className="h-6 w-6" />
                <span className="sr-only">我的帳戶</span>
              </motion.button>

              {/* Mobile Menu Toggle */}
              <motion.button 
                className={cn(
                  "p-2 lg:hidden transition-all duration-300",
                  isScrolled ? "text-gray-900 hover:bg-gray-100" : "text-white hover:bg-white/10"
                )}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <AnimatePresence mode="wait">
                  {mobileMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="h-6 w-6" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="h-6 w-6" />
                    </motion.div>
                  )}
                </AnimatePresence>
                <span className="sr-only">選單</span>
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              className={cn(
                "lg:hidden border-t",
                isScrolled ? "border-gray-200 bg-white" : "border-white/10 bg-black/20 backdrop-blur-xl"
              )}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <div className="container mx-auto px-6 py-6">
                <nav className="flex flex-col space-y-4">
                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                  >
                    <Link
                      href="/products"
                      className={cn(
                        "block text-lg font-medium py-2 transition-colors",
                        isScrolled
                          ? "text-gray-900 hover:text-blue-600"
                          : "text-white hover:text-blue-200"
                      )}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      購物
                    </Link>
                  </motion.div>
                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <Link
                      href="/about"
                      className={cn(
                        "block text-lg font-medium py-2 transition-colors",
                        isScrolled
                          ? "text-gray-900 hover:text-blue-600"
                          : "text-white hover:text-blue-200"
                      )}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      關於我們
                    </Link>
                  </motion.div>
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Search Modal */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div
            className="fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSearchOpen(false)}
          >
            <motion.div
              className="container mx-auto px-4 pt-24"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
                <div className="p-6">
                  <div className="relative">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <input
                      ref={searchInputRef}
                      type="text"
                      placeholder="搜尋商品..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-12 pr-12 py-4 text-lg border-0 focus:outline-none focus:ring-0 bg-gray-50 rounded-xl"
                    />
                    <button
                      onClick={() => setSearchOpen(false)}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      <X className="h-5 w-5" />
                    </button>
                  </div>
                  
                  {/* Search Suggestions */}
                  {filteredSuggestions.length > 0 && (
                    <motion.div 
                      className="mt-4 space-y-2"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      {filteredSuggestions.map((suggestion, index) => (
                        <motion.button
                          key={suggestion}
                          className="w-full text-left px-4 py-3 hover:bg-gray-50 rounded-lg transition-colors"
                          onClick={() => {
                            setSearchQuery(suggestion)
                            setSearchOpen(false)
                          }}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                        >
                          <div className="flex items-center space-x-3">
                            <Search className="h-4 w-4 text-gray-400" />
                            <span className="font-medium">{suggestion}</span>
                          </div>
                        </motion.button>
                      ))}
                    </motion.div>
                  )}

                  {/* Popular Searches */}
                  {searchQuery === '' && (
                    <motion.div 
                      className="mt-6"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      <h3 className="text-sm font-semibold text-gray-500 mb-3">熱門搜尋</h3>
                      <div className="flex flex-wrap gap-2">
                        {searchSuggestions.map((item) => (
                          <button
                            key={item}
                            onClick={() => {
                              setSearchQuery(item)
                              setSearchOpen(false)
                            }}
                            className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-sm font-medium transition-colors"
                          >
                            {item}
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}