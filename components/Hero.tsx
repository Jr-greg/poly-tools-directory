export default function Hero() {
  return (
    <div className="flex flex-col relative">
      {/* Twitter Announcement */}
      <div className="flex justify-center pt-20 pb-2 px-4">
        <a 
          target="_blank"
          className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all bg-fuchsia-500/10 backdrop-blur-sm hover:bg-fuchsia-500/20 hover:scale-105 text-purple-200 hover:text-fuchsia-300 h-9 px-4 rounded-full border border-fuchsia-500/20 hover:border-fuchsia-500/40"
          href="https://twitter.com"
        >
          <span className="mr-1">🎉</span>
          <span>Follow us on</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 512 512" className="w-4 h-4">
            <path fill="currentColor" d="M389.2 48h70.6L305.6 224.2L487 464H345L233.7 318.6L106.5 464H35.8l164.9-188.5L26.8 48h145.6l100.5 132.9zm-24.8 373.8h39.1L151.1 88h-42z"/>
          </svg>
        </a>
      </div>

      {/* Hero Text */}
      <div className="flex flex-col gap-6 justify-center items-center pt-6 pb-2 px-4 relative z-50">
        <div className="flex flex-col gap-6 items-center mb-6 max-w-5xl text-center mx-auto">
          <h1 className="max-w-5xl text-3xl font-bold sm:text-4xl md:text-5xl text-foreground leading-tight">
            Discover the Polymarket Ecosystem
          </h1>
          <h2 className="max-w-4xl font-semibold sm:text-xl text-muted-foreground leading-relaxed">
            Get the right tools. Make the right trades.
          </h2>
        </div>
      </div>
    </div>
  )
}
