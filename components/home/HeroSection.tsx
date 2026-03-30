'use client'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import ShimmerButton from '@/components/ui/ShimmerButton'

const HeroCanvas = dynamic(() => import('./HeroCanvas'), { ssr: false })

const integrations = [
  'WhatsApp', 'n8n', 'Microsoft Office', 'Google Workspace',
  'Slack', 'Make', 'OpenAI', 'HubSpot', 'Notion', 'PostgreSQL',
]

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-40 pb-16 overflow-hidden">
      <Image
        src="/images/hero-bg.jpg"
        alt=""
        fill
        className="object-cover opacity-20"
        priority
      />
      <HeroCanvas />

      {/* Radial glow background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
             style={{ background: 'radial-gradient(circle, rgba(56,189,248,0.06) 0%, transparent 70%)' }} />
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <h1 className="font-heading font-bold text-5xl md:text-7xl tracking-tight leading-none mb-6">
          <span className="text-gradient">Soluciones inteligentes</span>
          <br />
          <span className="text-text">en un mundo nuevo.</span>
        </h1>
        <p className="text-muted text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          ¿Listo para escalar sin límites? Construimos, automatizamos y optimizamos con inteligencia artificial a la medida de tus necesidades.
        </p>
        <ShimmerButton href="https://wa.me/5218110105977" variant="solid" className="text-base px-8 py-4">
          Contáctanos →
        </ShimmerButton>
      </div>

      {/* Stats bar */}
      <div className="relative z-10 mt-16 card-glass rounded-card-lg px-8 py-5 flex flex-wrap items-center justify-center gap-8">
        {[
          { stat: '5×', label: 'más leads' },
          { stat: '50–100%', label: 'menos tareas' },
          { stat: '24/7', label: 'operación' },
        ].map(({ stat, label }) => (
          <div key={stat} className="text-center">
            <div className="font-heading font-bold text-2xl text-accent">{stat}</div>
            <div className="text-muted text-xs mt-0.5">{label}</div>
          </div>
        ))}
      </div>

      {/* Integrations row */}
      <div className="relative z-10 mt-8 text-center">
        <p className="text-muted text-xs mb-3 tracking-wide uppercase">Integraciones populares</p>
        <div className="flex flex-wrap justify-center gap-2">
          {integrations.map((name) => (
            <span key={name} className="px-3 py-1 rounded-badge text-xs border border-card-border text-muted bg-card">
              {name}
            </span>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-bounce">
        <div className="w-px h-8 bg-gradient-to-b from-transparent to-accent/50" />
        <div className="w-1.5 h-1.5 rounded-full bg-accent/50" />
      </div>
    </section>
  )
}
