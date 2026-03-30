'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import ShimmerButton from '@/components/ui/ShimmerButton'

function NeorandLogo() {
  return (
    <svg width="140" height="32" viewBox="0 0 140 32" fill="none" aria-label="NEORAND AI">
      <text x="0" y="24" fontFamily="var(--font-space-grotesk), sans-serif" fontWeight="700" fontSize="22" fill="#3B82F6">neo</text>
      <text x="52" y="24" fontFamily="var(--font-space-grotesk), sans-serif" fontWeight="700" fontSize="22" fill="#F1F5F9">rand</text>
      <text x="110" y="28" fontFamily="var(--font-space-grotesk), sans-serif" fontWeight="700" fontSize="12" fill="#64748B">AI</text>
    </svg>
  )
}

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
      <Link href="/" className="flex items-center">
        <NeorandLogo />
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
      <ShimmerButton href="https://wa.me/5218110105977" variant="solid">
        Contáctanos
      </ShimmerButton>
    </nav>
  )
}
