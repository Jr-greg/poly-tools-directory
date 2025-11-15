'use client'

import { useEffect, useState } from 'react'

export default function Stats() {
  const [categories, setCategories] = useState(0)
  const [tools, setTools] = useState(0)
  const [users, setUsers] = useState(0)

  useEffect(() => {
    // 数字动画
    const animateNumber = (target: number, setter: (val: number) => void, duration: number = 2000) => {
      const start = 0
      const startTime = Date.now()
      
      const animate = () => {
        const now = Date.now()
        const progress = Math.min((now - startTime) / duration, 1)
        const easeOutQuart = 1 - Math.pow(1 - progress, 4)
        const current = Math.round(start + (target - start) * easeOutQuart)
        
        setter(current)
        
        if (progress < 1) {
          requestAnimationFrame(animate)
        }
      }
      
      requestAnimationFrame(animate)
    }

    // 启动动画
    setTimeout(() => {
      animateNumber(19, setCategories)
      animateNumber(173, setTools)
      animateNumber(308, setUsers)
    }, 500)
  }, [])

  return (
    <div style={{ padding: '20px 20px 30px', textAlign: 'center', position: 'relative' }}>
      <div 
        id="statsContainer" 
        style={{
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(192, 38, 211, 0.2)',
          borderRadius: '16px',
          padding: '24px 32px',
          maxWidth: '600px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          position: 'relative',
          overflow: 'hidden',
          background: 'linear-gradient(135deg, rgba(26, 15, 46, 0.6) 0%, rgba(58, 25, 78, 0.4) 100%)',
          boxShadow: '0 4px 24px rgba(192, 38, 211, 0.15), inset 0 1px 0 rgba(232, 121, 249, 0.1)',
          opacity: 0.95,
        }}
      >
        {/* Categories */}
        <div className="stat-item-hover" style={{ textAlign: 'center', position: 'relative', zIndex: 1, transition: '0.2s', cursor: 'pointer', borderRadius: '8px', padding: '8px' }}>
          <div className="stat-number" style={{ fontSize: '2.2rem', fontWeight: 600, background: 'linear-gradient(135deg, #e879f9 0%, #c026d3 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: '4px', lineHeight: 1 }}>
            {categories}
          </div>
          <div className="stat-label" style={{ fontSize: '11px', color: 'rgba(200, 180, 220, 0.7)', fontWeight: 500, letterSpacing: '0.5px', textTransform: 'uppercase' }}>
            Categories
          </div>
        </div>

        {/* Divider */}
          <div style={{ width: '1px', height: '32px', background: 'linear-gradient(180deg, transparent 0%, rgba(192, 38, 211, 0.4) 50%, transparent 100%)', margin: '0 24px' }} />

        {/* Tools */}
        <div className="stat-item-hover" style={{ textAlign: 'center', position: 'relative', zIndex: 1, transition: '0.2s', cursor: 'pointer', borderRadius: '8px', padding: '8px' }}>
          <div className="stat-number" style={{ fontSize: '2.2rem', fontWeight: 600, background: 'linear-gradient(135deg, #e879f9 0%, #c026d3 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: '4px', lineHeight: 1 }}>
            {tools}
          </div>
          <div className="stat-label" style={{ fontSize: '11px', color: 'rgba(200, 180, 220, 0.7)', fontWeight: 500, letterSpacing: '0.5px', textTransform: 'uppercase' }}>
            Tools Listed
          </div>
        </div>

        {/* Divider */}
          <div style={{ width: '1px', height: '32px', background: 'linear-gradient(180deg, transparent 0%, rgba(192, 38, 211, 0.4) 50%, transparent 100%)', margin: '0 24px' }} />

        {/* Users */}
        <div className="stat-item-hover" style={{ textAlign: 'center', position: 'relative', zIndex: 1, transition: '0.2s', cursor: 'pointer', borderRadius: '8px', padding: '8px' }}>
          <div className="stat-number" style={{ fontSize: '2.2rem', fontWeight: 600, background: 'linear-gradient(135deg, #e879f9 0%, #c026d3 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: '4px', lineHeight: 1 }}>
            {users}k
          </div>
          <div className="stat-label" style={{ fontSize: '11px', color: 'rgba(200, 180, 220, 0.7)', fontWeight: 500, letterSpacing: '0.5px', textTransform: 'uppercase' }}>
            Monthly Users
          </div>
        </div>
      </div>
    </div>
  )
}
