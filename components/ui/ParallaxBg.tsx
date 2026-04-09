'use client'
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'

interface Props {
  src: string
  opacity?: number
}

export default function ParallaxBg({ src, opacity = 0.13 }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const bgOpacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, opacity, opacity, 0])
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '15%'])

  return (
    <div ref={ref} className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Gradient masks — blend into site bg at section edges */}
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-[#050A14] to-transparent z-[1]" />
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-[#050A14] to-transparent z-[1]" />

      {/* Parallax image — inset gives room to move without showing edges */}
      <motion.div className="absolute inset-[-15%]" style={{ opacity: bgOpacity, y }}>
        <Image src={src} alt="" fill className="object-cover" sizes="100vw" />
      </motion.div>
    </div>
  )
}
