"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function HeroSection() {
  const ref = useRef<HTMLElement>(null);

  // Initialize scroll tracking for parallax effects
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative h-screen overflow-hidden pt-16 md:pt-20"
    >
      {/* Background Image - 使用 testing.png */}
      <motion.div style={{ y }} className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url(/herosection.png)",
          }}
        >
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
      </motion.div>

      {/* Content - 與圖片完全一致的佈局 */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 h-full flex flex-col justify-end items-start px-6 md:px-12 lg:px-24 pb-12 md:pb-16 lg:pb-24 max-w-6xl"
      >
        {/* Main Heading - 完全復刻圖片中的排版 */}
        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-normal mb-6 text-white leading-tight"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        >
          登出時刻系列
        </motion.h1>

        {/* Subtitle - 完全復刻圖片中的文字 */}
        <motion.p
          className="text-base md:text-lg mb-8 text-white/90 font-light leading-relaxed max-w-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
        >
          離開螢幕，回歸自己。為球場的專注與堅毅而生的自在感設計。
        </motion.p>

        {/* CTA Buttons - 完全復刻圖片中的按鈕設計 */}
        <motion.div
          className="flex gap-3"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
        >
          <motion.div
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            <Link href="/products?category=mens">
              <button className="bg-white/90 backdrop-blur-sm text-black font-medium px-6 py-2.5 rounded-full text-base hover:bg-white transition-all duration-300 shadow-lg">
                Shop Men&apos;s
              </button>
            </Link>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            <Link href="/products?category=womens">
              <button className="border border-white/60 text-white font-medium px-6 py-2.5 rounded-full text-base hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
                Shop Women&apos;s
              </button>
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
