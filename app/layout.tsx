import type { Metadata } from 'next'
import { Space_Grotesk, Inter } from 'next/font/google'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-space-grotesk',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'NEORAND — Automatización con IA',
  description: 'Construimos, automatizamos y optimizamos con inteligencia artificial a la medida de tus necesidades.',
  openGraph: {
    title: 'NEORAND — Automatización con IA',
    description: 'Soluciones inteligentes para un mundo nuevo.',
    siteName: 'NEORAND',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body className="font-body bg-bg text-text antialiased">
        {children}
      </body>
    </html>
  )
}
