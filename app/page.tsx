import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import ToolsGrid from '@/components/ToolsGrid'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="flex-1 relative z-10">
        <Hero />
        <Stats />
        <ToolsGrid />
      </main>
      <Footer />
    </div>
  )
}
