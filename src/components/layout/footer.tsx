import Link from 'next/link'
import { SITE_CONFIG } from '@/lib/constants'

const FOOTER_SECTIONS = [
  {
    title: '購買資訊',
    links: [
      { name: '購買條款', href: '/terms' },
      { name: '退款政策', href: '/refund' },
      { name: '運送資訊', href: '/shipping' }
    ]
  },
  {
    title: '幫助中心',
    links: [
      { name: '聯絡我們', href: '/contact' },
      { name: '尺寸指南', href: '/size-guide' },
      { name: '常見問題', href: '/faq' }
    ]
  },
  {
    title: '關於我們',
    links: [
      { name: '品牌故事', href: '/about' },
      { name: '永續發展', href: '/sustainability' },
      { name: '職涯機會', href: '/careers' }
    ]
  }
]

export function Footer() {
  return (
    <footer className="bg-muted/20 border-t">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <Link href="/" className="text-2xl font-bold text-primary mb-4 block">
                {SITE_CONFIG.name}
              </Link>
              <p className="text-muted-foreground text-sm mb-6 max-w-sm">
                {SITE_CONFIG.description}
              </p>
              
              {/* Newsletter Signup */}
              <div>
                <h3 className="font-semibold mb-3">訂閱電子報</h3>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="輸入您的 Email"
                    className="flex-1 px-3 py-2 border rounded-l-md text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                  <button className="bg-primary text-primary-foreground px-4 py-2 rounded-r-md text-sm font-medium hover:bg-primary/90 transition-colors">
                    訂閱
                  </button>
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  訂閱即可收到最新產品資訊與特別優惠
                </p>
              </div>
            </div>

            {/* Footer Links */}
            {FOOTER_SECTIONS.map((section) => (
              <div key={section.title}>
                <h3 className="font-semibold mb-4">{section.title}</h3>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link 
                        href={link.href}
                        className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              © 2024 {SITE_CONFIG.name}. 保留所有權利。
            </div>
            
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">
                隱私權政策
              </Link>
              <Link href="/terms" className="text-muted-foreground hover:text-foreground transition-colors">
                服務條款
              </Link>
              <Link href="/cookies" className="text-muted-foreground hover:text-foreground transition-colors">
                Cookie 政策
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}