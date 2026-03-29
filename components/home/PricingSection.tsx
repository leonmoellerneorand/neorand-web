import FadeIn from '@/components/ui/FadeIn'
import SectionHeader from '@/components/ui/SectionHeader'
import ShimmerButton from '@/components/ui/ShimmerButton'

const FEATURES_LEFT = [
  'Diagnóstico y mapeo',
  'Integración con sistemas actuales',
  'Entrega y lanzamiento en tiempo acordado',
  'Demos incluidas: revisas el avance y solicitas cambios antes del lanzamiento',
]

const FEATURES_RIGHT = [
  'Soporte 24/7',
  'Mantenimiento y monitoreo continuo',
  'Hosting y operación incluidos',
  'Cancela cuando quieras, sin penalizaciones',
  'Capacitación continua',
  'Consultoría cuando la necesites',
]

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="flex-shrink-0 mt-0.5">
      <circle cx="8" cy="8" r="7" stroke="currentColor" strokeOpacity="0.3" />
      <path d="M5 8l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function PricingSection() {
  return (
    <section id="precios" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <SectionHeader
            label="Precios"
            title="Inversión que / se paga sola."
          />
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left: Arquitectura Personalizada */}
          <FadeIn delay={0.1}>
            <div className="card-glass card-hover rounded-card-lg p-8 border border-card-border h-full flex flex-col">
              <h3 className="font-heading font-bold text-xl text-text mb-1">Arquitectura Personalizada</h3>
              <div className="text-3xl font-heading font-bold text-text mt-4 mb-2">Pago único</div>
              <p className="text-muted text-sm leading-relaxed mb-6">
                Diseñamos y construimos tu automatización desde cero, integrada con tus sistemas y escalada a tu operación. El costo depende de la magnitud del proyecto.
              </p>
              <ul className="space-y-3 flex-1 mb-8">
                {FEATURES_LEFT.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-muted">
                    <span className="text-accent"><CheckIcon /></span>
                    {f}
                  </li>
                ))}
              </ul>
              <ShimmerButton href="mailto:leonmoeller@neorand.com" variant="outline" className="w-full justify-center">
                Solicitar propuesta →
              </ShimmerButton>
            </div>
          </FadeIn>

          {/* Right: Suscripción Mensual */}
          <FadeIn delay={0.2}>
            <div className="rounded-card-lg p-8 h-full flex flex-col relative overflow-hidden"
                 style={{
                   background: 'rgba(56,189,248,0.04)',
                   border: '1px solid rgba(56,189,248,0.2)',
                   boxShadow: '0 0 40px rgba(56,189,248,0.06)',
                 }}>
              {/* Glow */}
              <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full pointer-events-none"
                   style={{ background: 'radial-gradient(circle, rgba(56,189,248,0.12) 0%, transparent 70%)' }} />

              <h3 className="font-heading font-bold text-xl text-text mb-1">Suscripción Mensual</h3>
              <div className="mt-4 mb-2 flex items-baseline gap-2">
                <span className="text-3xl font-heading font-bold text-accent">$3,400</span>
                <span className="text-muted text-sm">MXN / mes</span>
              </div>
              {/* Pulse dot */}
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse2 inline-block" />
                <span className="text-accent text-xs">Activa</span>
              </div>
              <p className="text-muted text-sm leading-relaxed mb-6">
                Requerida al adquirir cualquier solución NEORAND. Te da acceso a todos nuestros servicios y a comprar soluciones adicionales a precio preferencial.
              </p>
              <ul className="space-y-3 flex-1 mb-8">
                {FEATURES_RIGHT.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-muted">
                    <span className="text-accent"><CheckIcon /></span>
                    {f}
                  </li>
                ))}
              </ul>
              <ShimmerButton href="mailto:leonmoeller@neorand.com" variant="solid" className="w-full justify-center">
                ¿Ya tienes tu solución? →
              </ShimmerButton>
            </div>
          </FadeIn>
        </div>

        {/* Note */}
        <p className="text-center text-muted mt-4" style={{ fontSize: '12px' }}>
          Con tu suscripción activa, cada solución adicional tiene un costo preferencial.
        </p>
      </div>
    </section>
  )
}
