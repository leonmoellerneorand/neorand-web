import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import type { BlogPost, CasoPost } from './types'

function getContentDir(type: 'blog' | 'casos') {
  return path.join(process.cwd(), 'content', type)
}

export function getAllBlogPosts(): BlogPost[] {
  const dir = getContentDir('blog')
  if (!fs.existsSync(dir)) return []
  const files = fs.readdirSync(dir).filter((f) => f.endsWith('.mdx'))
  return files.map((file) => {
    const raw = fs.readFileSync(path.join(dir, file), 'utf-8')
    const { data, content } = matter(raw)
    return { slug: file.replace('.mdx', ''), ...data, content } as BlogPost
  }).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getBlogPostBySlug(slug: string): BlogPost | null {
  const filePath = path.join(getContentDir('blog'), `${slug}.mdx`)
  if (!fs.existsSync(filePath)) return null
  const raw = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(raw)
  return { slug, ...data, content } as BlogPost
}

export function getAllCasos(): CasoPost[] {
  const dir = getContentDir('casos')
  if (!fs.existsSync(dir)) return []
  const files = fs.readdirSync(dir).filter((f) => f.endsWith('.mdx'))
  return files.map((file) => {
    const raw = fs.readFileSync(path.join(dir, file), 'utf-8')
    const { data, content } = matter(raw)
    return { slug: file.replace('.mdx', ''), ...data, content } as CasoPost
  }).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getCasoBySlug(slug: string): CasoPost | null {
  const filePath = path.join(getContentDir('casos'), `${slug}.mdx`)
  if (!fs.existsSync(filePath)) return null
  const raw = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(raw)
  return { slug, ...data, content } as CasoPost
}
