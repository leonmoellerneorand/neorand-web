import React from 'react'
import FadeIn from '@/components/ui/FadeIn'
import SectionHeader from '@/components/ui/SectionHeader'

interface UseCase {
  num: number
  color: string
  bgColor: string
  title: string
  badge: string
  wide?: boolean
  visual?: React.ReactNode
}

const CASES: UseCase[] = [
  {
    num: 1, wide: true, color: 'text-cyan-400', bgColor: 'bg-cyan-500/10 border-cyan-500/20',
    title: 'Agente de WhatsApp 24/7',
    badge: '↑ 5× más conversiones',
    visual: (
      <div className="mt-4 p-3 rounded-xl bg-black/30 border border-white/5 text-xs space-y-2 max-w-[220px]">
        <div className="flex gap-2"><span className="w-6 h-6 rounded-full bg-cyan-500/20 flex-shrink-0" /><span className="text-muted">¿Tienen disponibilidad hoy?</span></div>
        <div className="flex gap-2 justify-end"><span className="text-text bg-cyan-500/20 px-2 py-1 rounded-lg">Sí, ¿a qué hora?</span></div>
        <div className="flex gap-2"><span className="w-6 h-6 rounded-full bg-cyan-500/20 flex-shrink-0" /><span className="text-muted">A las 3pm por favor</span></div>
        <div className="flex gap-2 justify-end"><span className="text-text bg-cyan-500/20 px-2 py-1 rounded-lg">¡Listo! Cita confirmada ✓</span></div>
      </div>
    ),
  },
  {
    num: 2, color: 'text-indigo-400', bgColor: 'bg-indigo-500/10 border-indigo-500/20',
    title: 'Soporte sin intervención humana',
    badge: '−80% tickets manuales',
  },
  {
    num: 3, color: 'text-green-400', bgColor: 'bg-green-500/10 border-green-500/20',
    title: 'Pipeline de ventas automático',
    badge: 'Kanban automático',
    visual: (
      <div className="mt-4 flex gap-2 text-xs">
        {['Nuevo', 'Calificado', 'Propuesta', 'Cerrado'].map((s, i) => (
          <div key={s} className="flex-1 p-2 rounded-lg bg-black/30 border border-white/5">
            <div className="text-muted mb-1">{s}</div>
            {Array.from({ length: i === 0 ? 3 : i === 1 ? 2 : 1 }).map((_, j) => (
              <div key={j} className="w-full h-4 rounded bg-green-500/10 mb-1" />
            ))}
          </div>
        ))}
      </div>
    ),
  },
  {
    num: 4, color: 'text-amber-400', bgColor: 'bg-amber-500/10 border-amber-500/20',
    title: 'Reportes financieros automáticos',
    badge: '0 horas de captura',
  },
  {
    num: 5, color: 'text-orange-400', bgColor: 'bg-orange-500/10 border-orange-500/20',
    title: 'Marketing en piloto automático',
    badge: '↑ 3× alcance orgánico',
  },
  {
    num: 6, wide: true, color: 'text-cyan-400', bgColor: 'bg-cyan-500/10 border-cyan-500/20',
    title: 'Reportes semanales sin trabajo manual',
    badge: 'Lunes 8:00 AM · automático',
    visual: (
      <div className="mt-4 flex gap-1 items-end h-16">
        {[40, 65, 50, 80, 70, 90, 75].map((h, i) => (
          <div key={i} className="flex-1 rounded-t" style={{ height: `${h}%`, background: i === 5 ? 'rgba(56,189,248,0.7)' : 'rgba(56,189,248,0.2)' }} />
        ))}
      </div>
    ),
  },
  {
    num: 7, color: 'text-purple-400', bgColor: 'bg-purple-500/10 border-purple-500/20',
    title: 'Agente de reclutamiento',
    badge: '−70% tiempo de contratación',
  },
  {
    num: 8, wide: true, color: 'text-green-400', bgColor: 'bg-green-500/10 border-green-500/20',
    title: 'Cobranza automática y recordatorios de pago',
    badge: '↑ 40% recuperación',
    visual: (
      <div className="mt-4 flex gap-2 text-xs overflow-x-auto">
        {['Recordatorio 1', 'Recordatorio 2', 'Cobranza', 'Recuperado ✓'].map((step, i) => (
          <div key={step} className="flex items-center gap-2 flex-shrink-0">
            <div className={`px-2 py-1 rounded-lg border ${i === 3 ? 'bg-green-500/20 border-green-500/30 text-green-400' : 'bg-black/30 border-white/5 text-muted'}`}>
              {step}
            </div>
            {i < 3 && <span className="text-muted">→</span>}
          </div>
        ))}
      </div>
    ),
  },
]

export default function UseCasesGrid() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <SectionHeader
            label="Casos de Uso"
            title="Automatiza lo que / ya sabes que falla."
            sub="Estos son los procesos que más tiempo roban. Todos se pueden automatizar hoy."
          />
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {CASES.map((c, i) => (
            <FadeIn key={c.num} delay={i * 0.04}>
              <div className={`card-glass card-hover rounded-card-lg p-5 border ${c.bgColor} h-full ${c.wide ? 'lg:col-span-2' : ''}`}>
                <span className={`inline-block px-2 py-0.5 rounded-badge text-xs font-medium mb-3 ${c.color}`} style={{ background: 'rgba(0,0,0,0.2)', border: '1px solid currentColor', borderOpacity: '0.2' } as React.CSSProperties}>
                  {c.badge}
                </span>
                <h3 className="font-heading font-bold text-base text-text leading-snug">{c.title}</h3>
                {c.visual}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
