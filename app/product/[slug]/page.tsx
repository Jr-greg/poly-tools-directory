import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Home, ExternalLink, Check } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FAQSection from '@/components/FAQSection'
import RelatedTools from '@/components/RelatedTools'
import { getToolBySlug, getRelatedTools } from '@/data/tools'

export default function ProductPage({ params }: { params: { slug: string } }) {
  const tool = getToolBySlug(params.slug)
  
  if (!tool) {
    notFound()
  }

  const relatedTools = getRelatedTools(tool, 3)

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-16">
        <div className="max-w-[82rem] mx-auto px-4 py-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-8 text-sm">
            <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
              <Home className="w-4 h-4" />
            </Link>
            <span className="text-muted-foreground">/</span>
            <span className="text-foreground font-medium">{tool.name}</span>
          </div>

          {/* Product Header */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            {/* Left: Product Info */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-7 h-7 rounded bg-gray-700" />
                <h1 className="text-4xl font-bold text-foreground tracking-tight">
                  {tool.name}
                </h1>
              </div>
              
              <p className="text-base text-muted-foreground leading-relaxed">
                {tool.description}
              </p>

              {/* Social Links */}
              {(tool.twitter || tool.team) && (
                <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center sm:gap-6">
                  {tool.twitter && (
                    <div className="flex items-center gap-3">
                      <span className="text-sm text-muted-foreground font-medium">Community:</span>
                      <a 
                        href={tool.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                        </svg>
                      </a>
                    </div>
                  )}
                  
                  {tool.team && tool.team.length > 0 && (
                    <div className="flex items-start gap-2 sm:items-center sm:gap-3">
                      <span className="text-sm text-muted-foreground font-medium">Team:</span>
                      <div className="flex flex-wrap gap-x-3 gap-y-1 text-sm text-muted-foreground">
                        {tool.team.map((member, index) => (
                          <span key={index} className="inline-flex items-center gap-1">
                            <a
                              href={member.twitter}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-muted-foreground hover:text-primary transition-colors"
                            >
                              {member.name}
                            </a>
                            {index < tool.team!.length - 1 && <span className="opacity-40">,</span>}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Platforms */}
              {tool.platforms && tool.platforms.length > 0 && (
                <div className="flex items-center gap-3">
                  <span className="text-sm text-muted-foreground font-medium">Supported Platforms:</span>
                  <div className="flex items-center gap-3">
                    {tool.platforms.map((platform) => (
                      <div key={platform.name} className="flex items-center gap-2 transition-colors duration-200 cursor-pointer">
                        <div className="w-5 h-5 rounded bg-gray-700" />
                        <span className="text-sm text-muted-foreground">{platform.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Categories */}
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-sm text-muted-foreground font-medium">Categories:</span>
                <div className="flex flex-wrap gap-2">
                  {tool.categories.map((category) => (
                    <span
                      key={category}
                      className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-secondary text-muted-foreground hover:bg-primary/10 hover:text-primary transition-all duration-200 cursor-pointer"
                    >
                      {category}
                    </span>
                  ))}
                </div>
              </div>

              {/* Visit Website Button */}
              {tool.website && (
                <div className="max-w-sm">
                  <a
                    href={tool.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 hover:scale-105 text-white px-6 py-2.5 rounded-md font-medium transition-all duration-200 text-sm"
                  >
                    Visit Website
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              )}
            </div>

            {/* Right: Screenshot */}
            <div className="lg:col-span-1 lg:pl-12">
              <div className="relative p-[5px] group aspect-[16/9] border border-border-subtle rounded-2xl bg-[rgba(20,99,255,0.05)]">
                <div className="block relative w-full h-full rounded-xl bg-gray-800 flex items-center justify-center">
                  <span className="text-muted-foreground">Product Screenshot</span>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-border-subtle mb-12 w-full" />

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-8 gap-8">
            {/* Left: Main Content */}
            <div className="lg:col-span-6 space-y-8">
              {/* Overview */}
              {tool.overview && (
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-6">Product Overview</h2>
                  <div className="rounded-xl p-6 border border-border-subtle">
                    <h3 className="text-xl font-bold text-foreground mb-3">What is {tool.name}?</h3>
                    <p className="text-base leading-7 text-muted-foreground">
                      {tool.overview}
                    </p>
                  </div>
                </div>
              )}

              {/* Features */}
              {tool.features && tool.features.length > 0 && (
                <div className="rounded-lg p-6 border border-border-subtle">
                  <h2 className="text-xl font-bold text-foreground mb-6">Key Features</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {tool.features.map((feature, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex items-start gap-3">
                          <div className="w-6 h-6 bg-primary/10 rounded-lg flex items-center justify-center mt-0.5 flex-shrink-0">
                            <Check className="w-3.5 h-3.5 text-primary" />
                          </div>
                          <div>
                            <h4 className="text-base font-bold text-foreground mb-1">
                              {feature.title}
                            </h4>
                            <p className="text-base text-muted-foreground leading-relaxed">
                              {feature.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Use Cases */}
              {tool.useCases && tool.useCases.length > 0 && (
                <div className="rounded-lg p-6 border border-border-subtle">
                  <h2 className="text-xl font-bold text-foreground mb-6">Use Cases</h2>
                  <div className="space-y-4">
                    {tool.useCases.map((useCase, index) => (
                      <div key={index} className="flex gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <div>
                          <h4 className="text-base font-bold text-foreground mb-1">
                            {useCase.title}
                          </h4>
                          <p className="text-base text-muted-foreground leading-relaxed">
                            {useCase.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* FAQs */}
              {tool.faqs && tool.faqs.length > 0 && (
                <FAQSection faqs={tool.faqs} />
              )}
            </div>

            {/* Right: Sidebar */}
            <div className="lg:col-span-2">
              <RelatedTools tools={relatedTools} />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
