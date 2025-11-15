'use client'

import PixelBlast from './PixelBlast'

export default function HomeHero() {
  return (
    <div className="relative flex items-center justify-center -mt-6" style={{ minHeight: '400px', backgroundColor: '#0F041F' }}>
      {/* PixelBlast 像素特效 */}
      <div style={{ 
        position: 'absolute', 
        top: 0, 
        left: 0, 
        right: 0, 
        bottom: 0, 
        zIndex: 1,
        pointerEvents: 'auto',
        backgroundColor: 'transparent'
      }}>
        <PixelBlast
          variant="circle"
          pixelSize={4}
          color="#C084FC"
          patternScale={2}
          patternDensity={1}
          pixelSizeJitter={0}
          enableRipples={true}
          rippleSpeed={0.5}
          rippleThickness={0.15}
          rippleIntensityScale={2}
          liquid={false}
          speed={0.5}
          edgeFade={0.25}
          transparent={true}
          antialias={true}
        />
      </div>
      
      {/* 内容层 */}
      <div className="relative flex flex-col items-center justify-center gap-6 px-4 mx-auto max-w-5xl text-center w-full py-12" style={{ zIndex: 10 }}>
        {/* 小标签 */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/20 backdrop-blur-sm">
          <div className="w-1.5 h-1.5 rounded-full bg-fuchsia-400 animate-pulse"></div>
          <span className="text-xs font-medium text-fuchsia-300">Polymarket Ecosystem</span>
        </div>
        
        {/* 主标题 - 使用更大的字号，符合设计规范 */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight max-w-4xl">
          发现最强工具，洞察市场先机
        </h1>
        
        {/* 副标题 - 使用更大的字号和更好的对比度 */}
        <p className="text-base sm:text-lg md:text-xl text-gray-300 font-medium max-w-3xl leading-relaxed">
          精选预测市场分析、交易与数据工具
        </p>
      </div>
    </div>
  )
}

