import { getCasoBySlug, getAllCasos } from '@/lib/mdx'
import CasoMDXContent from '@/components/casos/CasoMDXContent'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllCasos().map((caso) => ({ slug: caso.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const caso = getCasoBySlug(slug)
  if (!caso) return {}
  return { title: `${caso.title} — NEORAND`, description: caso.excerpt }
}

export default async function CasoPostPage({ params }: Props) {
  const { slug } = await params
  const caso = getCasoBySlug(slug)
  if (!caso) return notFound()

  return (
    <main className="pt-32 pb-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Hero card */}
        <div className="card-glass rounded-card-lg p-8 mb-12 relative overflow-hidden border-t-2 border-accent/50">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-6 items-start">
            <div>
              <span className="inline-block px-3 py-1 rounded-badge text-xs font-medium text-accent bg-accent/10 border border-accent/20 mb-4">
                {caso.tag}
              </span>
              <h1 className="font-heading font-bold text-3xl md:text-4xl text-text mb-3 leading-tight">
                {caso.title}
              </h1>
              <p className="text-muted text-sm">{caso.company} · {caso.industry}</p>
            </div>
            {/* Metrics */}
            <div className="flex gap-4">
              {[
                { label: caso.metric1Label, value: caso.metric1Value },
                { label: caso.metric2Label, value: caso.metric2Value },
                { label: caso.metric3Label, value: caso.metric3Value },
              ].map(({ label, value }) => (
                <div key={label} className="text-center p-4 rounded-card border border-card-border bg-white/[0.02] min-w-[80px]">
                  <div className="font-heading font-bold text-xl text-accent">{value}</div>
                  <div className="text-muted text-[11px] mt-1 leading-tight">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_240px] gap-12">
          {/* Main content */}
          <div>
            <Link href="/casos" className="text-muted text-sm hover:text-accent transition-colors mb-8 inline-flex items-center gap-2">
              ← Volver a casos
            </Link>
            <article className="mt-6">
              <CasoMDXContent source={caso.content} />
            </article>
          </div>

          {/* Sticky sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-28 space-y-6">
              <div className="card-glass rounded-card p-5">
                <p className="text-xs font-medium text-muted uppercase tracking-widest mb-4">Detalles del proyecto</p>
                <dl className="space-y-3">
                  {[
                    { term: 'Industria', detail: caso.industry },
                    { term: 'Servicio', detail: caso.serviceType },
                    { term: 'Canal', detail: caso.canal },
                    { term: 'Implementación', detail: caso.implementacion },
                    { term: 'Herramientas', detail: caso.herramientas },
                  ].map(({ term, detail }) => (
                    <div key={term}>
                      <dt className="text-muted text-xs mb-0.5">{term}</dt>
                      <dd className="text-text text-sm font-medium">{detail}</dd>
                    </div>
                  ))}
                </dl>
              </div>
              <div className="card-glass rounded-card p-5 border border-accent/10">
                <p className="font-heading font-bold text-sm text-text mb-2">¿Quieres este resultado?</p>
                <p className="text-muted text-xs mb-4">Implementamos en menos de 2 semanas.</p>
                <a href="mailto:leonmoeller@neorand.com"
                   className="block w-full text-center py-2 rounded-btn text-xs font-medium bg-accent/10 text-accent border border-accent/20 hover:bg-accent/20 transition-colors">
                  Contáctanos →
                </a>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  )
}
