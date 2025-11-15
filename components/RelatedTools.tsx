import Link from 'next/link'
import { Tool } from '@/data/tools'

interface RelatedToolsProps {
  tools: Tool[]
}

export default function RelatedTools({ tools }: RelatedToolsProps) {
  if (!tools || tools.length === 0) return null

  return (
    <div>
      <h3 className="text-2xl font-bold text-foreground mb-6">Related Tools</h3>
      
      <div className="flex flex-col gap-8">
        {tools.map((tool) => (
          <Link 
            key={tool.slug}
            href={tool.href}
            className="p-6 cursor-pointer hover:bg-[#181c26] hover:shadow-lg rounded-lg transition-all duration-300 border border-border-subtle min-h-[180px] flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-7 h-7 rounded bg-gray-700" />
                <h4 className="font-medium text-foreground">{tool.name}</h4>
              </div>
              <p className="text-sm text-muted-foreground line-clamp-2">
                {tool.description}
              </p>
            </div>
            <div className="flex flex-wrap gap-1.5 mt-3">
              {tool.categories.slice(0, 2).map((category) => (
                <span
                  key={category}
                  className="px-2 py-0.5 bg-secondary text-xs text-muted-foreground rounded-full"
                >
                  {category}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
