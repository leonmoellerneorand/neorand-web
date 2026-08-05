import FadeIn from '@/components/ui/FadeIn'
import ShimmerButton from '@/components/ui/ShimmerButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Agenda tu reunión gratuita — NEORAND',
  description: '¿No sabes cómo implementar IA en tus procesos? Agenda un diagnóstico gratuito con NEORAND.',
}

const CAL_COM_EVENT_URL = 'https://cal.com/leon-moeller-zvhokz/30min'

export default function AgendaPage() {
  return (
    <main className="pt-32 pb-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Hero */}
        <FadeIn>
          <div className="text-center mb-12">
            <h1 className="font-heading font-bold text-5xl md:text-6xl tracking-tight leading-tight mb-6">
              <span className="text-gradient">Agenda tu reunión</span>
              <br />
              <span className="text-text">gratuita</span>
            </h1>
            <p className="font-heading font-bold text-xl md:text-2xl text-text mb-4">
              ¿No sabes cómo implementar IA en tus procesos?
            </p>
            <p className="text-muted text-lg max-w-2xl mx-auto leading-relaxed">
              Es como tener el teléfono más avanzado del mercado... sin internet. Tienes en las manos la herramienta más poderosa de los últimos años, pero si no sabes dónde conectarla a tu negocio, no te sirve de nada.
            </p>
          </div>
        </FadeIn>

        {/* Stat */}
        <FadeIn delay={0.1}>
          <div className="card-glass rounded-card-lg p-8 md:p-10 mb-12 text-center">
            <div className="font-heading font-bold text-5xl md:text-6xl text-accent mb-3">74%</div>
            <p className="text-text text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-3">
              de las empresas en América Latina tuvo dificultades para capturar valor real de sus iniciativas de IA en 2025.
            </p>
            <p className="text-muted text-sm max-w-2xl mx-auto leading-relaxed">
              No es falta de herramientas — es falta de diagnóstico. Identificar exactamente en qué proceso de tu negocio aplicar IA es el paso que marca la diferencia entre un experimento que no despega y una automatización que ahorra horas cada semana.
            </p>
          </div>
        </FadeIn>

        {/* CTA */}
        <FadeIn delay={0.2}>
          <div className="text-center mb-20">
            <ShimmerButton href="#calendario" variant="solid" className="text-base px-8 py-4">
              Agendar cita →
            </ShimmerButton>
          </div>
        </FadeIn>

        {/* Calendar */}
        <FadeIn delay={0.3}>
          <div id="calendario" className="scroll-mt-32">
            <h2 className="font-heading font-bold text-2xl text-text mb-6 text-center">
              Elige el día y la hora que mejor te acomode
            </h2>
            <div className="card-glass rounded-card-lg overflow-hidden">
              <iframe
                src={CAL_COM_EVENT_URL}
                title="Agenda tu reunión gratuita con NEORAND"
                className="w-full h-[700px]"
                frameBorder="0"
              />
            </div>
          </div>
        </FadeIn>
      </div>
    </main>
  )
}
