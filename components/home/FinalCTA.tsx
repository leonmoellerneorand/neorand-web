import Image from 'next/image'
import FadeIn from '@/components/ui/FadeIn'
import ShimmerButton from '@/components/ui/ShimmerButton'

export default function FinalCTA() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <div className="relative rounded-card-lg p-12 md:p-16 overflow-hidden"
               style={{
                 background: 'rgba(255,255,255,0.02)',
                 border: '1px solid rgba(255,255,255,0.07)',
               }}>
            {/* Grid line decoration */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
                 style={{
                   backgroundImage: 'linear-gradient(rgba(56,189,248,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.5) 1px, transparent 1px)',
                   backgroundSize: '40px 40px',
                 }} />

            {/* Corner glows */}
            <div className="absolute top-0 left-0 w-64 h-64 rounded-full pointer-events-none"
                 style={{ background: 'radial-gradient(circle at top left, rgba(56,189,248,0.08) 0%, transparent 60%)' }} />
            <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full pointer-events-none"
                 style={{ background: 'radial-gradient(circle at bottom right, rgba(59,130,246,0.08) 0%, transparent 60%)' }} />

            <div className="relative z-10 lg:grid lg:grid-cols-[1fr_380px] lg:gap-12 items-center">
              {/* Text content */}
              <div className="text-center lg:text-left">
                {/* Label */}
                <div className="flex items-center justify-center lg:justify-start gap-2 mb-6">
                  <span className="w-2 h-2 rounded-full bg-accent animate-blink inline-block" />
                  <span className="text-xs font-medium text-muted uppercase tracking-widest">Empieza hoy</span>
                </div>

                <h2 className="font-heading font-bold text-4xl md:text-5xl tracking-tight mb-4">
                  <span className="text-gradient">Tu negocio no debería</span>
                  <br />
                  <span className="text-text">depender de ti para operar.</span>
                </h2>
                <p className="text-muted text-lg max-w-xl mx-auto lg:mx-0 mb-10">
                  Automatiza los procesos que te quitan tiempo y enfócate en lo que realmente importa.
                </p>
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                  <ShimmerButton href="https://wa.me/5218110105977" variant="solid" className="text-base px-8 py-4">
                    Contáctanos →
                  </ShimmerButton>
                  <ShimmerButton href="/casos" variant="outline" className="text-base px-8 py-4">
                    Ver casos de éxito
                  </ShimmerButton>
                </div>
              </div>

              {/* Automation image */}
              <div className="hidden lg:block relative h-56 rounded-2xl overflow-hidden border border-white/5 mt-0">
                <Image
                  src="/images/service-auto.jpg"
                  alt="Automatización en acción"
                  fill
                  className="object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-transparent to-bg/50" />
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
