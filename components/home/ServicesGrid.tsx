import FadeIn from '@/components/ui/FadeIn'
import SectionHeader from '@/components/ui/SectionHeader'

interface ServiceCard {
  num: string
  title: string
  desc: string
  wide?: boolean
  tag?: string
  icon: string
}

const CARDS: ServiceCard[] = [
  {
    num: '01', icon: '💬', wide: true,
    title: 'Agentes de IA Conversacionales',
    desc: 'Asistentes inteligentes para WhatsApp, tu sitio web y correo. Atienden, califican y convierten en piloto automático.',
  },
  {
    num: '02', icon: '⚡',
    title: 'Automatización de Flujos de Trabajo',
    desc: 'Conectamos tus herramientas y eliminamos el trabajo repetitivo con flujos que corren solos.',
  },
  {
    num: '03', icon: '🔗',
    title: 'Integración de Sistemas y APIs',
    desc: 'Unimos tus apps favoritas: CRMs, ERPs, bases de datos y cualquier sistema con API.',
  },
  {
    num: '04', icon: '🗺️',
    title: 'Consultoría y Mapeo de Procesos',
    desc: 'Analizamos tu operación, identificamos cuellos de botella y diseñamos el plan de automatización.',
  },
  {
    num: '05', icon: '📊',
    title: 'Dashboards y Reportes Automáticos',
    desc: 'Visualiza tus métricas en tiempo real. Los reportes llegan solos, cuando los necesitas.',
  },
  {
    num: '06', icon: '🚀', wide: true, tag: 'Más popular',
    title: 'Solución Personalizada',
    desc: 'Diseñamos la automatización perfecta para tu negocio: desde el diagnóstico hasta el lanzamiento.',
  },
  {
    num: '07', icon: '🧠',
    title: 'Arquitectura de Datos e IA Personalizada',
    desc: 'Infraestructura de datos y modelos de IA adaptados a los procesos únicos de tu empresa.',
  },
]

export default function ServicesGrid() {
  return (
    <section id="servicios" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <SectionHeader
            label="Servicios"
            title="Todo lo que necesitas / para automatizar."
            sub="Si puedes imaginarlo, podemos automatizarlo."
          />
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {CARDS.map((card, i) => (
            <FadeIn key={card.num} delay={i * 0.05}>
              <div className={`card-glass card-hover rounded-card-lg p-6 relative overflow-hidden h-full ${
                card.wide ? 'md:col-span-2' : ''
              }`}>
                {/* Number watermark */}
                <span className="absolute top-4 right-4 font-heading font-bold text-5xl text-white/[0.04] select-none">
                  {card.num}
                </span>

                {/* Tag badge */}
                {card.tag && (
                  <span className="inline-block mb-3 px-3 py-1 rounded-badge text-xs font-medium bg-accent/10 text-accent border border-accent/20">
                    {card.tag}
                  </span>
                )}

                {/* Glow for wide cards */}
                {card.wide && (
                  <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full pointer-events-none"
                       style={{ background: 'radial-gradient(circle, rgba(56,189,248,0.08) 0%, transparent 70%)' }} />
                )}

                <div className="text-2xl mb-4">{card.icon}</div>
                <h3 className="font-heading font-bold text-lg mb-2 text-text">{card.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{card.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
