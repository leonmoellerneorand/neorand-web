import { getBlogPostBySlug, getAllBlogPosts } from '@/lib/mdx'
import MDXContent from '@/components/blog/MDXContent'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllBlogPosts().map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)
  if (!post) return {}
  return { title: `${post.title} — NEORAND`, description: post.excerpt }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)
  if (!post) notFound()

  // Generate TOC from h2 headings
  const headings = [...post.content.matchAll(/^## (.+)/gm)].map((m, i) => ({
    num: i + 1,
    text: m[1],
    id: m[1].toLowerCase().replace(/\s+/g, '-'),
  }))

  return (
    <main className="pt-32 pb-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_220px] gap-12">
          {/* Main content */}
          <div>
            <Link href="/blog" className="text-muted text-sm hover:text-accent transition-colors mb-6 inline-flex items-center gap-2">
              ← Volver al blog
            </Link>
            <span className="inline-block mt-4 px-3 py-1 rounded-badge text-xs font-medium text-accent bg-accent/10 border border-accent/20 mb-4">
              {post.tag}
            </span>
            <h1 className="font-heading font-bold text-4xl md:text-5xl tracking-tight text-text mb-4 leading-tight">
              {post.title}
            </h1>
            <p className="text-muted text-sm mb-8">{post.author} · {post.readTime} de lectura</p>

            {/* Hero image placeholder */}
            <div className="w-full h-48 rounded-card-lg mb-10"
                 style={{ background: 'linear-gradient(135deg, rgba(56,189,248,0.06) 0%, rgba(59,130,246,0.06) 100%)', border: '1px solid rgba(255,255,255,0.05)' }} />

            <article>
              <MDXContent source={post.content} />
            </article>
          </div>

          {/* Sticky sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-28 space-y-6">
              {headings.length > 0 && (
                <div className="card-glass rounded-card p-5">
                  <p className="text-xs font-medium text-muted uppercase tracking-widest mb-4">En este artículo</p>
                  <ol className="space-y-3">
                    {headings.map((h) => (
                      <li key={h.id} className="flex gap-3">
                        <span className="text-accent/50 font-heading font-bold text-xs mt-0.5">{String(h.num).padStart(2, '0')}</span>
                        <a href={`#${h.id}`} className="text-muted text-xs leading-snug hover:text-text transition-colors">{h.text}</a>
                      </li>
                    ))}
                  </ol>
                </div>
              )}
              <div className="card-glass rounded-card p-5 border border-accent/10">
                <p className="font-heading font-bold text-sm text-text mb-2">¿Quieres uno para tu negocio?</p>
                <p className="text-muted text-xs mb-4">Implementamos esta solución en menos de 2 semanas.</p>
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
