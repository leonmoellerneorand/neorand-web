import Image from 'next/image'
import { Settings, Workflow, GitBranch, Map, BarChart2, Sparkles, Brain } from 'lucide-react'
import FadeIn from '@/components/ui/FadeIn'
import SectionHeader from '@/components/ui/SectionHeader'
import type { LucideIcon } from 'lucide-react'

interface ServiceCard {
  num: string
  title: string
  desc: string
  wide?: boolean
  tag?: string
  Icon: LucideIcon
}

const CARDS: ServiceCard[] = [
  {
    num: '01', Icon: Settings, wide: true,
    title: 'Mantenimiento continuo',
    desc: 'Asistentes inteligentes para WhatsApp, tu sitio web y correo. Atienden, califican y convierten en piloto automático.',
  },
  {
    num: '02', Icon: Workflow,
    title: 'Automatización de Flujos de Trabajo',
    desc: 'Conectamos tus herramientas y eliminamos el trabajo repetitivo con flujos que corren solos.',
  },
  {
    num: '03', Icon: GitBranch,
    title: 'Integración de Sistemas y APIs',
    desc: 'Unimos tus apps favoritas: CRMs, ERPs, bases de datos y cualquier sistema con API.',
  },
  {
    num: '04', Icon: Map,
    title: 'Consultoría y Mapeo de Procesos',
    desc: 'Analizamos tu operación, identificamos cuellos de botella y diseñamos el plan de automatización.',
  },
  {
    num: '05', Icon: BarChart2,
    title: 'Dashboards y Reportes Automáticos',
    desc: 'Visualiza tus métricas en tiempo real. Los reportes llegan solos, cuando los necesitas.',
  },
  {
    num: '06', Icon: Sparkles, wide: true, tag: 'Más popular',
    title: 'Solución Personalizada',
    desc: 'Diseñamos la automatización perfecta para tu negocio: desde el diagnóstico hasta el lanzamiento.',
  },
  {
    num: '07', Icon: Brain,
    title: 'Arquitectura de Datos e IA Personalizada',
    desc: 'Infraestructura de datos y modelos de IA adaptados a los procesos únicos de tu empresa.',
  },
]

export default function ServicesGrid() {
  return (
    <section id="servicios" className="py-24 px-6 relative overflow-hidden">
      {/* Circuit board background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <Image
          src="/images/services-circuit.jpg"
          alt=""
          fill
          className="object-cover opacity-[0.04]"
        />
        <div className="absolute bottom-0 inset-x-0 h-48 bg-gradient-to-t from-[#050A14] to-transparent" />
      </div>

      <div className="max-w-6xl mx-auto relative">
        <FadeIn>
          <SectionHeader
            label="Servicios"
            title="Más que automatizaciones."
            sub="Tu operación en manos expertas, mes a mes."
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

                {/* Icon */}
                <div className="rounded-xl p-3 bg-white/5 flex w-fit mb-4">
                  <card.Icon className="w-6 h-6 text-sky-400" />
                </div>

                <h3 className="font-heading font-bold text-lg mb-2 text-text">{card.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{card.desc}</p>

                {/* Chat image for card 01 */}
                {card.num === '01' && (
                  <div className="mt-4 relative h-32 rounded-xl overflow-hidden">
                    <Image
                      src="/images/service-chat.jpg"
                      alt="Agente de chat en acción"
                      fill
                      className="object-cover opacity-70"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-bg/80 to-transparent" />
                  </div>
                )}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
