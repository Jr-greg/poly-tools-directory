'use client'

import { categories } from '@/data/tools'
import { cn } from '@/lib/utils'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

interface CategorySidebarProps {
  currentCategory: string
  onCategoryChange: (category: string) => void
}

export default function CategorySidebar({ currentCategory, onCategoryChange }: CategorySidebarProps) {
  const [isOpen, setIsOpen] = useState(false)

  const handleCategoryClick = (category: string) => {
    onCategoryChange(category)
    setIsOpen(false)
  }

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed bottom-6 right-6 z-50 p-3 bg-gradient-to-r from-fuchsia-600 to-purple-600 rounded-full shadow-lg shadow-fuchsia-500/30 text-white"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed left-0 top-16 w-56 h-[calc(100vh-4rem)] z-30 transition-transform duration-300",
          "max-lg:bg-background",
          isOpen ? "max-lg:translate-x-0" : "max-lg:-translate-x-full lg:translate-x-0"
        )}
      >
        <div className="flex flex-col h-full border-r border-border-subtle bg-background/40 p-6 overflow-y-auto">
          <nav className="flex flex-col gap-1.5 pt-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryClick(category)}
                className={cn(
                  "flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 text-left",
                  currentCategory === category
                    ? "bg-gradient-to-r from-fuchsia-600/30 to-purple-600/30 text-white border border-fuchsia-500/30"
                    : "text-muted-foreground hover:bg-fuchsia-500/10 hover:text-white"
                )}
              >
                <span className="flex-1">{category}</span>
                {currentCategory === category && (
                  <div className="w-1.5 h-1.5 rounded-full bg-fuchsia-400"></div>
                )}
              </button>
            ))}
          </nav>
        </div>
      </aside>
    </>
  )
}

