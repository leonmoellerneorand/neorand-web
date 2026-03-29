import Link from 'next/link'
import type { CasoPost } from '@/lib/types'

const BAND_COLORS = [
  'bg-cyan-500/40',
  'bg-indigo-500/40',
  'bg-green-500/40',
  'bg-purple-500/40',
]

interface CasoCardProps {
  caso: CasoPost
  index: number
}

export default function CasoCard({ caso, index }: CasoCardProps) {
  return (
    <div className="card-glass card-hover rounded-card-lg overflow-hidden flex flex-col">
      {/* Colored top band */}
      <div className={`h-1.5 w-full ${BAND_COLORS[index % BAND_COLORS.length]}`} />

      <div className="p-6 flex flex-col flex-1">
        {/* Company + industry */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-card bg-white/5 border border-card-border flex items-center justify-center font-heading font-bold text-sm text-accent">
            {caso.company.slice(0, 2).toUpperCase()}
          </div>
          <div>
            <div className="font-medium text-sm text-text">{caso.company}</div>
            <div className="text-muted text-xs">{caso.industry}</div>
          </div>
        </div>

        <span className="inline-block self-start px-3 py-1 rounded-badge text-xs font-medium text-accent bg-accent/10 border border-accent/20 mb-3">
          {caso.tag}
        </span>
        <h3 className="font-heading font-bold text-lg text-text mb-2 leading-snug flex-1">{caso.title}</h3>
        <p className="text-muted text-sm leading-relaxed mb-6">{caso.excerpt}</p>

        {/* 3 metrics */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          {[
            { label: caso.metric1Label, value: caso.metric1Value },
            { label: caso.metric2Label, value: caso.metric2Value },
            { label: caso.metric3Label, value: caso.metric3Value },
          ].map(({ label, value }) => (
            <div key={label} className="text-center p-2 rounded-xl bg-white/[0.02] border border-card-border">
              <div className="font-heading font-bold text-base text-accent">{value}</div>
              <div className="text-muted text-[10px] leading-tight mt-0.5">{label}</div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-card-border">
          <span className="text-muted text-xs">{caso.serviceType}</span>
          <Link href={`/casos/${caso.slug}`} className="text-accent text-xs hover:text-accent/80 transition-colors">
            Ver caso completo →
          </Link>
        </div>
      </div>
    </div>
  )
}
