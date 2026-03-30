interface SectionHeaderProps {
  label: string
  title: string        // Use " / " to insert a line break
  sub?: string
  className?: string
}

export default function SectionHeader({ label, title, sub, className = '' }: SectionHeaderProps) {
  const lines = title.split(' / ')
  return (
    <div className={`mb-12 text-center ${className}`}>
      <span className="inline-block px-3 py-1 rounded-badge text-xs font-medium tracking-widest uppercase text-accent border border-accent/20 bg-accent/5 mb-4">
        {label}
      </span>
      <h2 className="font-heading font-bold text-4xl md:text-5xl tracking-tight leading-tight mb-4">
        {lines.map((line, i) => (
          <span key={i}>
            {i === 0 ? <span className="text-gradient">{line}</span> : line}
            {i < lines.length - 1 && <br />}
          </span>
        ))}
      </h2>
      {sub && <p className="text-muted text-lg max-w-xl mx-auto">{sub}</p>}
    </div>
  )
}
