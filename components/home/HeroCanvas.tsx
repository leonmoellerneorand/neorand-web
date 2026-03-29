'use client'
import { useEffect, useRef } from 'react'

interface Node {
  x: number
  y: number
  vx: number
  vy: number
  ox: number
  oy: number
  radius: number
}

const NODE_COUNT = 72
const MAX_DIST = 160
const REPULSION_RADIUS = 220

export default function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef({ x: -9999, y: -9999 })
  const nodesRef = useRef<Node[]>([])
  const rafRef = useRef<number>(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)

    // Init nodes
    nodesRef.current = Array.from({ length: NODE_COUNT }, () => {
      const x = Math.random() * canvas.width
      const y = Math.random() * canvas.height
      return { x, y, ox: x, oy: y, vx: 0, vy: 0, radius: Math.random() * 2 + 1.5 }
    })

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top }
    }
    canvas.addEventListener('mousemove', onMouseMove)
    canvas.addEventListener('mouseleave', () => { mouseRef.current = { x: -9999, y: -9999 } })

    const draw = () => {
      if (!canvas || !ctx) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      const nodes = nodesRef.current
      const mouse = mouseRef.current

      // Update nodes
      for (const node of nodes) {
        const dx = mouse.x - node.x
        const dy = mouse.y - node.y
        const dist = Math.sqrt(dx * dx + dy * dy)

        if (dist < REPULSION_RADIUS) {
          const force = (REPULSION_RADIUS - dist) / REPULSION_RADIUS
          node.vx -= (dx / dist) * force * 2.5
          node.vy -= (dy / dist) * force * 2.5
        }

        // Spring back to origin
        node.vx += (node.ox - node.x) * 0.04
        node.vy += (node.oy - node.y) * 0.04
        node.vx *= 0.88
        node.vy *= 0.88
        node.x += node.vx
        node.y += node.vy
      }

      // Draw connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x
          const dy = nodes[i].y - nodes[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < MAX_DIST) {
            const alpha = (1 - dist / MAX_DIST) * 0.35
            ctx.strokeStyle = `rgba(56,189,248,${alpha})`
            ctx.lineWidth = 0.8
            ctx.beginPath()
            ctx.moveTo(nodes[i].x, nodes[i].y)
            ctx.lineTo(nodes[j].x, nodes[j].y)
            ctx.stroke()
          }
        }
      }

      // Draw nodes with radialGradient glow
      for (const node of nodes) {
        const grad = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, node.radius * 4)
        grad.addColorStop(0, 'rgba(56,189,248,0.9)')
        grad.addColorStop(1, 'rgba(56,189,248,0)')
        ctx.beginPath()
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2)
        ctx.fillStyle = grad
        ctx.fill()
      }

      rafRef.current = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      window.removeEventListener('resize', resize)
      canvas.removeEventListener('mousemove', onMouseMove)
      cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ pointerEvents: 'auto' }}
    />
  )
}
