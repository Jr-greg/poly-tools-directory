'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import CategorySidebar from '@/components/CategorySidebar'
import ToolsGrid from '@/components/ToolsGrid'
import HomeHero from '@/components/HomeHero'
import Footer from '@/components/Footer'

export default function Home() {
  const [currentCategory, setCurrentCategory] = useState('Home')

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <CategorySidebar 
        currentCategory={currentCategory}
        onCategoryChange={setCurrentCategory}
      />
      <main className="pt-16 pl-0 lg:pl-56">
        {currentCategory === 'Home' && <HomeHero />}
        <div className="max-w-[1600px] mx-auto px-6 pb-8">
          <ToolsGrid currentCategory={currentCategory} />
        </div>
        <Footer />
      </main>
    </div>
  )
}
