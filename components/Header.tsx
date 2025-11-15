'use client'

import Link from 'next/link'
import { Plus } from 'lucide-react'

export default function Header() {
  return (
    <div className="fixed top-0 z-[60] w-full">
      <header className="flex justify-center transition-all backdrop-blur-md" style={{ background: 'rgba(10, 1, 24, 0.4)' }}>
        <div className="container max-w-[82rem] flex justify-between items-center h-16 px-4">
          {/* Logo */}
          <div className="flex flex-1 gap-6 items-center md:gap-10">
            <Link href="/" className="flex gap-[7px] items-center">
              <div className="flex items-center">
                <div className="w-4 h-4 bg-gradient-to-br from-fuchsia-500 to-purple-600 rounded-sm shadow-lg shadow-fuchsia-500/30"></div>
              </div>
              <span className="text-xl font-semibold">Poly Tools</span>
            </Link>
          </div>
          
          {/* Submit Button */}
          <div className="flex items-center gap-2">
            <button 
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
