import FadeIn from '@/components/ui/FadeIn'
import ShimmerButton from '@/components/ui/ShimmerButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Nosotros — NEORAND',
  description: 'Automatizamos negocios para que las personas hagan lo que importa.',
}

const VALUES = [
  {
    title: 'Resultados primero',
    desc: 'Medimos cada proyecto por el impacto real en tu operación, no por las horas trabajadas.',
    icon: '🎯',
  },
  {
    title: 'Simple por diseño',
    desc: 'La mejor automatización es la que no necesita explicación. Construimos para que funcione sin fricción.',
    icon: '✦',
  },
  {
    title: 'Socio, no proveedor',
    desc: 'No entregamos un proyecto y desaparecemos. Acompañamos tu crecimiento de forma continua.',
    icon: '🤝',
  },
]

export default function NosotrosPage() {
  return (
    <main className="pt-32 pb-24 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Hero */}
        <FadeIn>
          <h1 className="font-heading font-bold text-5xl md:text-6xl tracking-tight leading-tight mb-8">
            <span className="text-gradient">Automatizamos negocios</span>
            <br />
            <span className="text-text">para que las personas</span>
            <br />
            <span className="text-text">hagan lo que importa.</span>
          </h1>
          <p className="text-muted text-lg max-w-2xl leading-relaxed mb-16">
            NEORAND nació de una idea simple: los mejores equipos no deberían perder tiempo en tareas repetitivas. Con IA y automatización, liberamos a las personas para que se enfoquen en lo que realmente crea valor.
          </p>
        </FadeIn>

        {/* Founder section */}
        <FadeIn delay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {/* Founder card */}
            <div className="card-glass rounded-card-lg p-8">
              <div className="w-16 h-16 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center font-heading font-bold text-xl text-accent mb-6">
                LM
              </div>
              <div className="font-heading font-bold text-lg text-text mb-1">León Moeller</div>
              <div className="text-muted text-sm mb-4">Fundador & CEO</div>
              <p className="text-muted text-sm leading-relaxed">
                Especialista en automatización e inteligencia artificial aplicada a negocios. Le apasiona profundamente la IA — no solo como herramienta, sino como el catalizador de una nueva era. Es un entusiasta convencido de que estamos en el umbral de avances tecnológicos exponenciales, y que la IA será lo que nos permita como humanidad resolver problemas que hoy parecen imposibles.
              </p>
            </div>

            {/* Quote */}
            <div className="flex flex-col justify-center p-8">
              <div className="font-heading font-bold text-6xl text-accent/20 leading-none mb-4">"</div>
              <blockquote className="font-heading font-bold text-xl md:text-2xl text-text leading-snug mb-4">
                Vi cómo los mejores equipos desperdiciaban horas en procesos que no necesitaban de un humano para funcionar.
              </blockquote>
              <p className="text-muted text-sm">Por eso creé NEORAND.</p>
            </div>
          </div>
        </FadeIn>

        {/* Values */}
        <FadeIn delay={0.2}>
          <h2 className="font-heading font-bold text-2xl text-text mb-8">Cómo trabajamos</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {VALUES.map((v) => (
              <div key={v.title} className="card-glass card-hover rounded-card-lg p-6">
                <div className="text-2xl mb-4">{v.icon}</div>
                <h3 className="font-heading font-bold text-base text-text mb-2">{v.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Bottom CTA */}
        <FadeIn delay={0.3}>
          <div className="text-center">
            <p className="font-heading font-bold text-2xl text-text mb-6">¿Hablamos sobre tu negocio?</p>
            <ShimmerButton href="https://wa.me/5218110105977" variant="solid" className="text-base px-8 py-4">
              Contáctanos →
            </ShimmerButton>
          </div>
        </FadeIn>
      </div>
    </main>
  )
}
