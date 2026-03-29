import { getAllBlogPosts } from '@/lib/mdx'
import BlogCard from '@/components/blog/BlogCard'
import SectionHeader from '@/components/ui/SectionHeader'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog — NEORAND',
  description: 'Ideas, guías y casos reales sobre automatización e IA.',
}

export default function BlogPage() {
  const posts = getAllBlogPosts()
  const [featured, ...rest] = posts

  return (
    <main className="pt-32 pb-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          label="Blog"
          title="Ideas, guías y / casos reales."
        />

        {featured && (
          <div className="mb-8">
            <BlogCard post={featured} featured />
          </div>
        )}

        {rest.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {rest.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        )}

        {posts.length === 0 && (
          <p className="text-muted text-center py-24">Próximamente.</p>
        )}
      </div>
    </main>
  )
}
