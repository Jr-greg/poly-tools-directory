'use client'

import { useState } from 'react'
import { Flame, Clock } from 'lucide-react'
import { tools as allTools } from '@/data/tools'
import Link from 'next/link'

interface ToolsGridProps {
  currentCategory: string
}

export default function ToolsGrid({ currentCategory }: ToolsGridProps) {
  const [currentSort, setCurrentSort] = useState('popular')
  const [displayCount, setDisplayCount] = useState(12)

  // 过滤工具
  const filteredTools = currentCategory === 'Home' 
    ? allTools 
    : allTools.filter(tool => tool.categories.includes(currentCategory))

  // 排序工具
  const sortedTools = [...filteredTools].sort((a, b) => {
    if (currentSort === 'latest') {
      return 0
    }
    return b.views - a.views
  })

  const displayedTools = sortedTools.slice(0, displayCount)
  const hasMore = displayCount < sortedTools.length

  return (
    <div className="flex-1 min-w-0">
      {/* 标题区域 */}
      {currentCategory === 'Home' && (
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-white mb-2">精选工具</h2>
          <p className="text-muted-foreground">探索 Polymarket 生态中最受欢迎的工具</p>
        </div>
      )}
      
      <div className="mb-6">
        {/* Sort Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setCurrentSort('popular')}
            className={`tag-chip ${currentSort === 'popular' ? 'active' : ''}`}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.28rem',
              padding: '0.32rem 0.75rem',
              borderRadius: '0.55rem',
              border: currentSort === 'popular' ? '1px solid rgba(192, 38, 211, 0.3)' : '1px solid transparent',
              background: currentSort === 'popular' ? 'rgba(192, 38, 211, 0.2)' : 'rgba(26, 15, 46, 0.5)',
              color: currentSort === 'popular' ? '#e879f9' : 'rgba(200, 180, 220, 0.7)',
              fontSize: '0.78rem',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
          >
            <Flame className="w-4 h-4" />
            <span>Popular</span>
          </button>
          <button
            onClick={() => setCurrentSort('latest')}
            className={`tag-chip ${currentSort === 'latest' ? 'active' : ''}`}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.28rem',
              padding: '0.32rem 0.75rem',
              borderRadius: '0.55rem',
              border: currentSort === 'latest' ? '1px solid rgba(192, 38, 211, 0.3)' : '1px solid transparent',
              background: currentSort === 'latest' ? 'rgba(192, 38, 211, 0.2)' : 'rgba(26, 15, 46, 0.5)',
              color: currentSort === 'latest' ? '#e879f9' : 'rgba(200, 180, 220, 0.7)',
              fontSize: '0.78rem',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
          >
            <Clock className="w-4 h-4" />
            <span>Latest</span>
          </button>
          <span className="text-muted-foreground text-sm ml-2">
            共 {filteredTools.length} 个工具
          </span>
        </div>
      </div>

      {/* Tools Grid */}
      <div className="grid grid-cols-1 gap-4 w-full sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {displayedTools.map((tool) => (
          <div key={tool.name} className="tool-card flex flex-col gap-2 justify-between rounded-lg border pb-[18px] group transition-colors duration-300">
            <div className="flex flex-col gap-4">
              {/* Image */}
              <Link href={tool.href}>
                <div className="overflow-hidden relative aspect-[16/9] rounded-t-md transition-all border-b border-border-subtle group-hover:border-fuchsia-500/30">
                  <img 
                    src={tool.image} 
                    alt={tool.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </Link>

              {/* Content */}
              <Link href={tool.href} className="flex flex-col gap-4">
                  <div className="flex flex-col gap-4 px-4">
                      <div className="flex gap-2 justify-between items-center">
                        <img 
                          src={tool.icon} 
                          alt={`${tool.name} icon`}
                          className="w-5 h-5 rounded"
                        />
                        <h3 className="overflow-hidden flex-1 min-w-0 text-xl font-semibold truncate">
                          <span className="tool-name truncate transition-colors duration-200">{tool.name}</span>
                        </h3>
                      </div>
                  <p className="text-sm line-clamp-2 leading-relaxed min-h-[3rem] text-white">
                    {tool.description}
                  </p>
                </div>
              </Link>
            </div>

            {/* Categories */}
            <div className="flex overflow-hidden flex-wrap gap-[6px] px-4 h-6">
              {tool.categories.slice(0, 2).map((category) => (
                <span key={category} className="flex items-center min-w-0 truncate">
                  <span className="h-6 px-1.5 rounded flex items-center justify-center text-xs text-nowrap max-w-[180px] text-muted-foreground hover:text-primary leading-6 w-full truncate border border-border-subtle transition-colors duration-200">
                    {category}
                  </span>
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      {hasMore && (
        <div className="flex justify-center mt-12 mb-8">
          <button
            onClick={() => setDisplayCount(prev => prev + 12)}
            className="inline-flex items-center justify-center px-6 py-2.5 bg-gradient-to-r from-fuchsia-600 to-purple-600 hover:from-fuchsia-500 hover:to-purple-500 hover:scale-105 hover:shadow-lg hover:shadow-fuchsia-500/30 text-white rounded-lg transition-all duration-200 font-medium text-sm"
          >
            加载更多
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
              <polyline points="6,9 12,15 18,9"></polyline>
            </svg>
          </button>
        </div>
      )}
    </div>
  )
}
