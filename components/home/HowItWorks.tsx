import FadeIn from '@/components/ui/FadeIn'
import SectionHeader from '@/components/ui/SectionHeader'
import ParallaxBg from '@/components/ui/ParallaxBg'

const STEPS = [
  {
    num: '01',
    title: 'Cuéntanos',
    desc: 'Agenda una llamada gratuita. Nos cuentas tus procesos, retos y objetivos.',
  },
  {
    num: '02',
    title: 'Propuesta',
    desc: 'Diseñamos una solución a medida con alcance, tiempos y costo claro.',
  },
  {
    num: '03',
    title: 'Diseñamos',
    desc: 'Construimos, integramos y probamos tu automatización con demos en el camino.',
  },
  {
    num: '04',
    title: 'Producción',
    desc: 'Lanzamos y dejamos todo funcionando. Soporte continuo incluido.',
  },
]

export default function HowItWorks() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <ParallaxBg src="/images/bg-proceso.png" opacity={0.10} />
      <div className="max-w-6xl mx-auto relative z-10">
        <FadeIn>
          <SectionHeader
            label="Proceso"
            title="Simple. Rápido. / Sin fricción."
            sub="De idea a automatización en cuatro pasos."
          />
        </FadeIn>

        <div className="relative mt-12">
          {/* Progress line connecting all 4 step circles */}
          <div className="hidden md:block absolute top-8 left-[calc(100%/8)] right-[calc(100%/8)] h-px bg-white/10 overflow-hidden">
            <div
              className="absolute top-0 h-full w-[35%] bg-gradient-to-r from-transparent via-accent to-transparent opacity-70"
              style={{ animation: 'glowTravel 3s linear infinite', left: '-35%' }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {STEPS.map((step, i) => (
              <FadeIn key={step.num} delay={i * 0.1}>
                <div className="card-glass card-hover rounded-card-lg p-6 group">
                  <div className="w-12 h-12 rounded-full border border-accent/30 flex items-center justify-center font-heading font-bold text-accent text-sm mb-4 group-hover:border-accent group-hover:shadow-[0_0_16px_rgba(56,189,248,0.3)] transition-all duration-300">
                    {step.num}
                  </div>
                  <h3 className="font-heading font-bold text-lg text-text mb-2">{step.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{step.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
