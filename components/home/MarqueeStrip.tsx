'use client'

const ITEMS = [
  'Automatización', 'Inteligencia Artificial', 'Escala', 'Eficiencia',
  'NEORAND', 'WhatsApp Bots', 'Operaciones', 'Crecimiento',
]

export default function MarqueeStrip() {
  const repeated = [...ITEMS, ...ITEMS]

  return (
    <div className="relative py-5 border-y border-card-border overflow-hidden group">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
           style={{ background: 'linear-gradient(to right, #050A14, transparent)' }} />
      <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
           style={{ background: 'linear-gradient(to left, #050A14, transparent)' }} />

      <div className="flex animate-marquee group-hover:[animation-play-state:paused] whitespace-nowrap">
        {repeated.map((item, i) => (
          <span key={i} className="flex items-center mx-8 text-sm font-medium text-muted uppercase tracking-widest">
            {item}
            <span className="ml-8 w-1 h-1 rounded-full bg-accent/60 inline-block" />
          </span>
        ))}
      </div>
    </div>
  )
}
