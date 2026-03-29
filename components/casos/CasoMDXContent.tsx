import { MDXRemote } from 'next-mdx-remote/rsc'

const components = {
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 className="font-heading font-bold text-2xl text-text mt-10 mb-4" {...props} />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 className="font-heading font-bold text-xl text-text mt-8 mb-3" {...props} />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="text-muted leading-relaxed mb-5" {...props} />
  ),
  ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
    <ol className="space-y-2 mb-5 pl-0" {...props} />
  ),
  li: (props: React.HTMLAttributes<HTMLLIElement>) => (
    <li className="flex items-start gap-3 text-muted">
      <span className="text-accent mt-1 flex-shrink-0">→</span>
      <span>{props.children}</span>
    </li>
  ),
  blockquote: (props: React.HTMLAttributes<HTMLElement>) => (
    <blockquote className="border-l-2 border-accent pl-6 my-6 italic text-text/80" {...props} />
  ),
  strong: (props: React.HTMLAttributes<HTMLElement>) => (
    <strong className="font-semibold text-text" {...props} />
  ),
}

export default function CasoMDXContent({ source }: { source: string }) {
  return <MDXRemote source={source} components={components} />
}
