import Link from 'next/link'
import type { BlogPost } from '@/lib/types'

const TAG_COLORS: Record<string, string> = {
  'Automatización': 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20',
  'IA': 'text-indigo-400 bg-indigo-500/10 border-indigo-500/20',
  'Casos': 'text-green-400 bg-green-500/10 border-green-500/20',
}

function tagColor(tag: string) {
  return TAG_COLORS[tag] ?? 'text-accent bg-accent/10 border-accent/20'
}

interface BlogCardProps {
  post: BlogPost
  featured?: boolean
}

export default function BlogCard({ post, featured = false }: BlogCardProps) {
  if (featured) {
    return (
      <Link href={`/blog/${post.slug}`} className="card-glass card-hover rounded-card-lg grid md:grid-cols-2 overflow-hidden group">
        {/* Abstract image placeholder */}
        <div className="h-48 md:h-auto min-h-[200px]"
             style={{ background: 'linear-gradient(135deg, rgba(56,189,248,0.08) 0%, rgba(59,130,246,0.08) 100%)' }}>
          <div className="w-full h-full flex items-center justify-center opacity-10">
            <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
              <circle cx="40" cy="40" r="30" stroke="#38BDF8" strokeWidth="1" />
              <circle cx="40" cy="40" r="20" stroke="#38BDF8" strokeWidth="0.5" />
              <circle cx="40" cy="40" r="10" stroke="#38BDF8" strokeWidth="0.5" />
            </svg>
          </div>
        </div>
        <div className="p-8 flex flex-col justify-center">
          <span className={`inline-block self-start px-3 py-1 rounded-badge text-xs font-medium border mb-4 ${tagColor(post.tag)}`}>
            {post.tag}
          </span>
          <h2 className="font-heading font-bold text-xl text-text mb-3 leading-snug group-hover:text-accent transition-colors">
            {post.title}
          </h2>
          <p className="text-muted text-sm leading-relaxed mb-6">{post.excerpt}</p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <span className="text-muted text-xs">{post.date}</span>
              <span className="text-muted text-xs">{post.readTime} de lectura</span>
            </div>
            <span className="text-accent text-sm">→</span>
          </div>
        </div>
      </Link>
    )
  }

  return (
    <Link href={`/blog/${post.slug}`} className="card-glass card-hover rounded-card-lg p-6 flex flex-col group">
      <span className={`inline-block self-start px-3 py-1 rounded-badge text-xs font-medium border mb-4 ${tagColor(post.tag)}`}>
        {post.tag}
      </span>
      <h3 className="font-heading font-bold text-base text-text mb-2 leading-snug group-hover:text-accent transition-colors flex-1">
        {post.title}
      </h3>
      <p className="text-muted text-sm leading-relaxed mb-4 line-clamp-2">{post.excerpt}</p>
      <div className="flex items-center justify-between mt-auto pt-4 border-t border-card-border">
        <span className="text-muted text-xs">{post.date}</span>
        <span className="text-accent text-sm">→</span>
      </div>
    </Link>
  )
}
