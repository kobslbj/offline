'use client'

import { CONTENT } from '@/lib/constants'
import Link from 'next/link'
import { motion } from 'framer-motion'

export function MissionSection() {
  return (
    <section className="relative overflow-hidden bg-black text-white">
      {/* 背景漸層與柔光，延續 Hero 的沉穩感 */}
      <div className="absolute inset-0 -z-10 opacity-80 bg-[radial-gradient(circle_at_20%_0%,rgba(59,130,246,0.18),transparent_40%),radial-gradient(circle_at_80%_100%,rgba(147,51,234,0.16),transparent_40%)]" />

      <div className="container mx-auto px-6 md:px-12 lg:px-24 py-20 md:py-28">
        <div className="max-w-4xl">
          <motion.p
            className="mb-4 text-sm tracking-widest text-white/60 uppercase"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            Our Mission
          </motion.p>

          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-normal leading-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            {CONTENT.mission.title}
          </motion.h2>

          <motion.p
            className="text-base md:text-lg text-white/80 leading-relaxed mb-10 max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
          >
            {CONTENT.mission.description}
          </motion.p>

          <motion.div
            className="flex items-center gap-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
          >
            <Link href="/about">
              <button className="border border-white/60 text-white font-medium px-6 py-2.5 rounded-full text-base hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
                {CONTENT.mission.cta}
              </button>
            </Link>
            <span className="text-sm text-white/50">了解 Offline 的設計哲學與長期承諾</span>
          </motion.div>
        </div>
      </div>
    </section>
  )
}