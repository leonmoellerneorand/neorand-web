import React from 'react'
import FadeIn from '@/components/ui/FadeIn'
import SectionHeader from '@/components/ui/SectionHeader'
import ParallaxBg from '@/components/ui/ParallaxBg'

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
    visual: (
      <div className="mt-4 space-y-2">
        {[
          { color: 'bg-red-400', text: 'Ticket #1 — Resuelto automáticamente' },
          { color: 'bg-yellow-400', text: 'Ticket #2 — Resuelto automáticamente' },
          { color: 'bg-green-400', text: 'Ticket #3 — Resuelto automáticamente' },
        ].map((t, i) => (
          <div key={i} className="flex items-center gap-2 p-2 rounded-lg bg-black/30 border border-white/5 text-xs text-muted">
            <span className={`w-2 h-2 rounded-full flex-shrink-0 ${t.color}`} />
            {t.text}
          </div>
        ))}
      </div>
    ),
  },
  {
    num: 3, color: 'text-green-400', bgColor: 'bg-green-500/10 border-green-500/20',
    title: 'Pipeline de ventas automático',
    badge: 'Kanban automático',
    visual: (
      <div className="mt-4 flex gap-2 text-xs overflow-hidden">
        {['Nuevo', 'Calificado', 'Propuesta', 'Cerrado'].map((s, i) => (
          <div key={s} className="flex-1 p-2 rounded-lg bg-black/30 border border-white/5 min-w-0">
            <div className="text-muted mb-1 truncate text-[10px]">{s}</div>
            {Array.from({ length: i < 2 ? 2 : 1 }).map((_, j) => (
              <div key={j} className={`w-full h-3 rounded mb-1 ${i === 3 ? 'bg-sky-500/30' : 'bg-white/5'}`} />
            ))}
            {i === 3 && (
              <div className="w-full h-3 rounded bg-sky-500/50 mb-1 animate-[kanban-arrive_2.5s_ease-out_infinite]" />
            )}
          </div>
        ))}
      </div>
    ),
  },
  {
    num: 4, color: 'text-amber-400', bgColor: 'bg-amber-500/10 border-amber-500/20',
    title: 'Reportes financieros automáticos',
    badge: '0 horas de captura',
    visual: (
      <div className="mt-4 flex gap-1 items-end h-16">
        {[40, 65, 50, 80, 70, 90, 75].map((h, i) => (
          <div key={i} className="flex-1 rounded-t" style={{ height: `${h}%`, background: i === 5 ? 'rgba(14,165,233,0.8)' : 'rgba(56,189,248,0.2)' }} />
        ))}
      </div>
    ),
  },
  {
    num: 5, color: 'text-orange-400', bgColor: 'bg-orange-500/10 border-orange-500/20',
    title: 'Marketing en piloto automático',
    badge: '↑ 3× alcance orgánico',
    visual: (
      <div className="mt-4 flex items-center gap-1 flex-wrap text-xs">
        {['Email 1 enviado', 'Email 2 enviado', 'Conversión'].map((step, i) => (
          <React.Fragment key={step}>
            <div className="flex items-center gap-1 px-2 py-1 rounded-lg bg-orange-500/10 border border-orange-500/20 text-orange-400">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
              </svg>
              {step}
            </div>
            {i < 2 && <span className="text-muted">→</span>}
          </React.Fragment>
        ))}
      </div>
    ),
  },
  {
    num: 6, wide: true, color: 'text-cyan-400', bgColor: 'bg-cyan-500/10 border-cyan-500/20',
    title: 'Reportes semanales sin trabajo manual',
    badge: 'Lunes 8:00 AM · automático',
    visual: (
      <div className="mt-4 flex gap-1 items-end h-16">
        {[40, 65, 50, 80, 70, 90, 75].map((h, i) => (
          <div key={i} className="flex-1 rounded-t" style={{ height: `${h}%`, background: i === 5 ? 'rgba(14,165,233,0.8)' : 'rgba(56,189,248,0.2)' }} />
        ))}
      </div>
    ),
  },
  {
    num: 7, color: 'text-purple-400', bgColor: 'bg-purple-500/10 border-purple-500/20',
    title: 'Agente de reclutamiento',
    badge: '−70% tiempo de contratación',
    visual: (
      <div className="mt-4 relative h-28">
        {[
          { label: 'Descartado', color: 'bg-red-500/20 border-red-500/30 text-red-400', offset: 'top-0 left-0', z: 'z-[1]' },
          { label: 'En proceso', color: 'bg-yellow-500/20 border-yellow-500/30 text-yellow-400', offset: 'top-[38px] left-2', z: 'z-[2]' },
          { label: 'Seleccionado', color: 'bg-green-500/20 border-green-500/30 text-green-400', offset: 'top-[76px] left-4', z: 'z-[3]' },
        ].map((cv, i) => (
          <div key={i} className={`absolute ${cv.offset} ${cv.z} w-[90%] p-2 rounded-lg bg-black/40 border border-white/5 flex items-center justify-between text-xs`}>
            <span className="text-muted">CV candidato</span>
            <span className={`px-1.5 py-0.5 rounded border text-[10px] ${cv.color}`}>{cv.label}</span>
          </div>
        ))}
      </div>
    ),
  },
  {
    num: 8, wide: true, color: 'text-green-400', bgColor: 'bg-green-500/10 border-green-500/20',
    title: 'Cobranza automática y recordatorios de pago',
    badge: '↑ 40% recuperación',
    visual: (
      <div className="mt-4 flex gap-2 text-xs flex-wrap items-center">
        {['Recordatorio 1', 'Recordatorio 2', 'Pago recibido ✓'].map((step, i) => (
          <React.Fragment key={step}>
            <div className={`px-2 py-1 rounded-lg border ${i === 2 ? 'bg-sky-500/20 border-sky-500/30 text-sky-400' : 'bg-black/30 border-white/5 text-muted'}`}>
              {step}
            </div>
            {i < 2 && <span className="text-muted">→</span>}
          </React.Fragment>
        ))}
      </div>
    ),
  },
]

export default function UseCasesGrid() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <ParallaxBg src="/images/bg-automatizaciones.png" opacity={0.13} />
      <div className="max-w-6xl mx-auto relative z-10">
        <FadeIn>
          <SectionHeader
            label="Automatizaciones"
            title="Si puedes imaginarlo, / podemos automatizarlo."
            sub="Ejemplos reales de lo que podemos construir para tu operación."
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
