'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import ShimmerButton from '@/components/ui/ShimmerButton'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <nav className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-5xl px-6 py-3 rounded-card flex items-center justify-between transition-all duration-300 ${
      scrolled
        ? 'bg-bg/80 backdrop-blur-xl border border-card-border shadow-lg'
        : 'bg-bg/40 backdrop-blur-md border border-white/5'
    }`}>
      {/* Logo */}
      <Link href="/" className="font-heading font-bold text-xl text-text tracking-tight flex items-center gap-1">
        NEORAND
        <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block ml-0.5 mb-1" />
      </Link>

      {/* Links */}
      <div className="hidden md:flex items-center gap-8">
        {[
          { label: 'Servicios', href: '/#servicios' },
          { label: 'Casos', href: '/casos' },
          { label: 'Blog', href: '/blog' },
          { label: 'Precios', href: '/#precios' },
        ].map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-sm text-muted hover:text-text transition-colors duration-200"
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* CTA */}
      <ShimmerButton href="mailto:leonmoeller@neorand.com" variant="solid">
        Contáctanos
      </ShimmerButton>
    </nav>
  )
}
