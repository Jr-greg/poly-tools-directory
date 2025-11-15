'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Plus } from 'lucide-react'

export default function Header() {
  const handleSubmitClick = () => {
    alert('Coming Soon! 🚀')
  }

  return (
    <div className="fixed top-0 z-[60] w-full">
      <header className="flex transition-all backdrop-blur-md" style={{ background: 'rgba(10, 1, 24, 0.4)' }}>
        <div className="w-full flex items-center h-16">
          {/* Logo - 左边对齐侧边栏内容 */}
          <div className="w-56 flex-shrink-0 px-6">
            <Link href="/" className="flex gap-2 items-center">
              <div className="flex items-center">
                <Image 
                  src="/poly-logo.svg" 
                  alt="Poly Tools Logo" 
                  width={24} 
                  height={24}
                  className="rounded-sm shadow-lg shadow-fuchsia-500/30"
                />
              </div>
              <span className="text-xl font-semibold">Poly123</span>
            </Link>
          </div>
          
          {/* 右侧内容区 - 对齐主内容 */}
          <div className="flex-1 flex justify-end items-center max-w-[1600px] mx-auto px-6">
            <button 
              onClick={handleSubmitClick}
              className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-all hover:bg-fuchsia-500/20 hover:text-fuchsia-300 h-9 px-4 py-2 border border-transparent hover:border-fuchsia-500/30"
            >
              <Plus className="mr-2 h-4 w-4" />
              Submit
            </button>
          </div>
        </div>
      </header>
    </div>
  )
}
