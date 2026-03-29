import { getAllCasos } from '@/lib/mdx'
import CasoCard from '@/components/casos/CasoCard'
import SectionHeader from '@/components/ui/SectionHeader'
import FadeIn from '@/components/ui/FadeIn'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Casos de Éxito — NEORAND',
  description: 'Resultados reales de automatización con IA para negocios reales.',
}

const STATS = [
  { value: '+500%', label: 'conversiones' },
  { value: '−70%', label: 'tareas manuales' },
  { value: '24/7', label: 'operación' },
  { value: '<2 sem', label: 'implementación' },
]

export default function CasosPage() {
  const casos = getAllCasos()

  return (
    <main className="pt-32 pb-24 px-6">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <SectionHeader
            label="Casos de Éxito"
            title="Resultados reales, / negocios reales."
          />
        </FadeIn>

        {/* Stats bar */}
        <FadeIn delay={0.1}>
          <div className="card-glass rounded-card-lg px-8 py-5 flex flex-wrap items-center justify-center gap-10 mb-16">
            {STATS.map(({ value, label }) => (
              <div key={value} className="text-center">
                <div className="font-heading font-bold text-2xl text-accent">{value}</div>
                <div className="text-muted text-xs mt-0.5">{label}</div>
              </div>
            ))}
          </div>
        </FadeIn>

        {casos.length > 0 ? (
          <FadeIn delay={0.2}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {casos.map((caso, i) => (
                <CasoCard key={caso.slug} caso={caso} index={i} />
              ))}
            </div>
          </FadeIn>
        ) : (
          <p className="text-muted text-center py-24">Próximamente.</p>
        )}
      </div>
    </main>
  )
}
