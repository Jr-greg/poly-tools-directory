import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="py-12 px-4 mt-16 border-t border-border-subtle">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center flex-wrap gap-4">
          <div className="text-muted-foreground text-sm">
            © 2025 Poly Tools All Rights Reserved.
          </div>
          <div className="flex gap-6">
            <a href="mailto:hello@polytools.com" className="text-muted-foreground hover:text-fuchsia-400 text-sm transition-colors">
              Contact Us
            </a>
            <Link href="/privacy" className="text-muted-foreground hover:text-fuchsia-400 text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/tos" className="text-muted-foreground hover:text-fuchsia-400 text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
