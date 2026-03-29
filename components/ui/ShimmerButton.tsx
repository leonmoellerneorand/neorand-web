import Link from 'next/link'

interface ShimmerButtonProps {
  href: string
  children: React.ReactNode
  variant?: 'solid' | 'outline'
  className?: string
}

export default function ShimmerButton({ href, children, variant = 'solid', className = '' }: ShimmerButtonProps) {
  const base = 'shimmer-btn inline-flex items-center gap-2 px-6 py-3 rounded-btn font-medium text-sm transition-all duration-300'
  const variants = {
    solid: 'bg-accent text-bg hover:bg-accent/90',
    outline: 'border border-accent/40 text-accent hover:border-accent hover:bg-accent/5',
  }
  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  )
}
