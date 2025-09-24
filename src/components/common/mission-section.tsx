'use client'

import { Button } from '@/components/ui/button'
import { CONTENT } from '@/lib/constants'
import Link from 'next/link'

export function MissionSection() {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Content */}
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {CONTENT.mission.title}
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              {CONTENT.mission.description}
            </p>
            <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
              在這個數位時代，我們相信真正的專注來自於暫時離開螢幕。
              高爾夫球場是最好的修練場所，在這裡你可以專注於每一次揮桿，
              感受球桿與球的完美結合，體驗專注帶來的內在平靜。
            </p>
          </div>

          {/* CTA */}
          <div className="space-y-4">
            <Link href="/about">
              <Button 
                size="lg"
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-gray-900 font-semibold px-8 py-4 text-lg"
              >
                {CONTENT.mission.cta}
              </Button>
            </Link>
            <p className="text-sm text-gray-500">
              了解更多關於我們的品牌理念與永續發展目標
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}