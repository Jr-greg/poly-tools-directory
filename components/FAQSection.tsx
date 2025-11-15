'use client'

import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

interface FAQProps {
  faqs: Array<{
    question: string
    answer: string
  }>
}

export default function FAQSection({ faqs }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="rounded-lg p-6 border border-border-subtle">
      <h2 className="text-xl font-bold text-foreground mb-6">FAQs</h2>
      
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-border-subtle">
            <button
              className="w-full py-3 text-left flex justify-between items-center focus:outline-none hover:opacity-80 transition-opacity"
              onClick={() => toggleFAQ(index)}
            >
              <span className="text-base font-medium text-foreground">
                {index + 1}. {faq.question}
              </span>
              <ChevronDown 
                className={`w-4 h-4 transition-transform duration-200 ${
                  openIndex === index ? 'rotate-180' : ''
                }`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                openIndex === index ? 'max-h-32 pb-3' : 'max-h-0'
              }`}
            >
              <p className="text-base text-muted-foreground leading-relaxed">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
