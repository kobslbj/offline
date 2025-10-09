"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

const items: Array<{ label: string; href: string }> = [
  { label: "即將推出", href: "/shopping#upcoming" },
  { label: "最新上市", href: "/shopping#new" },
  { label: "女士", href: "/products?category=womens" },
  { label: "男士", href: "/products?category=mens" },
  { label: "配件", href: "/products?category=accessories" },
  { label: "系列", href: "/shopping#collections" },
  { label: "全部商品", href: "/products" },
];

const container = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.06, delayChildren: 0.1 },
  },
};

const itemVariant = {
  hidden: { opacity: 0, x: 8 },
  show: { opacity: 1, x: 0 },
};

export function ShoppingSideMenu({ className }: { className?: string }) {
  return (
    <aside
      className={cn(
        "h-full w-full sm:w-[320px] lg:w-[360px]",
        // glass panel
        "bg-white/80 backdrop-blur-xl ring-1 ring-black/5 shadow-[0_10px_40px_rgba(0,0,0,0.12)]",
        // shape and spacing
        "rounded-l-3xl px-5 sm:px-6 py-8 pt-24 md:pt-28",
        className,
      )}
      aria-label="Shopping categories"
    >
      <div className="flex h-full flex-col">
        <div className="mb-6">
          <p className="text-[11px] tracking-widest text-gray-500">SHOP</p>
          <h2 className="mt-1 text-xl font-semibold text-gray-900">探索選購</h2>
        </div>

        <motion.ul
          variants={container}
          initial="hidden"
          animate="show"
          className="space-y-5 flex-1"
        >
          {items.map((item, idx) => {
            const isLast = idx === items.length - 1;
            return (
              <motion.li key={item.label} variants={itemVariant}>
                {isLast ? (
                  <Link
                    href={item.href}
                    className="group inline-flex items-center gap-2 rounded-xl bg-gray-900 px-4 py-3 text-white shadow hover:bg-black transition-colors"
                  >
                    <span className="text-base font-semibold tracking-tight">
                      {item.label}
                    </span>
                    <ChevronRight className="h-4 w-4 opacity-80 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                ) : (
                  <Link href={item.href} className="group block text-gray-900">
                    <div className="inline-flex items-center gap-2">
                      <span className="text-2xl sm:text-3xl font-bold tracking-tight">
                        {item.label}
                      </span>
                      <ChevronRight className="h-5 w-5 text-gray-400 opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-0.5" />
                    </div>
                    <span className="mt-1 block h-[2px] w-0 bg-gray-900 transition-all duration-300 group-hover:w-16" />
                  </Link>
                )}
              </motion.li>
            );
          })}
        </motion.ul>

        <div className="mt-8 text-[10px] text-gray-500">
          <span className="align-middle">提供最新系列與配色更新</span>
        </div>
      </div>
    </aside>
  );
}
