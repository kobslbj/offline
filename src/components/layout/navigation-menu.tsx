"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { NavigationItem } from "@/lib/types";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface NavigationMenuProps {
  items: NavigationItem[];
  isScrolled?: boolean;
}

export function NavigationMenu({
  items,
  isScrolled = false,
}: NavigationMenuProps) {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const handleMouseEnter = (itemName: string) => {
    setActiveDropdown(itemName);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <div className="flex items-center space-x-8">
      {items.map((item) => (
        <div
          key={item.name}
          className="relative"
          onMouseEnter={() => item.children && handleMouseEnter(item.name)}
          onMouseLeave={handleMouseLeave}
        >
          <Link
            href={item.href}
            className={cn(
              "flex items-center transition-all duration-200 font-medium text-lg group",
              isScrolled
                ? "text-gray-900 hover:text-black"
                : "text-white/90 hover:text-white",
            )}
          >
            <motion.span
              whileHover={{ x: 2 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              {item.name}
            </motion.span>
            {item.children && (
              <motion.div
                animate={{
                  rotate: activeDropdown === item.name ? 180 : 0,
                }}
                transition={{ duration: 0.2 }}
              >
                <ChevronDown className="ml-2 h-4 w-4" />
              </motion.div>
            )}
          </Link>

          {/* Dropdown Menu */}
          <AnimatePresence>
            {item.children && activeDropdown === item.name && (
              <motion.div
                className="absolute top-full left-0 mt-3 w-56 bg-white/95 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl z-10 overflow-hidden"
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                <div className="py-3">
                  {item.children.map((child, index) => (
                    <motion.div
                      key={child.name}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        href={child.href}
                        className="block px-6 py-3 text-sm font-medium text-gray-900 hover:bg-gray-100/50 transition-all duration-200 group"
                      >
                        <motion.span
                          whileHover={{ x: 4 }}
                          transition={{ type: "spring", stiffness: 400 }}
                        >
                          {child.name}
                        </motion.span>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
