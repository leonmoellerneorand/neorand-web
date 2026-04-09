import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#050A14',
        accent: '#38BDF8',
        accent2: '#3B82F6',
        text: '#F1F5F9',
        muted: '#64748B',
        card: 'rgba(255,255,255,0.03)',
        'card-border': 'rgba(255,255,255,0.07)',
      },
      fontFamily: {
        heading: ['var(--font-space-grotesk)', 'sans-serif'],
        body: ['var(--font-inter)', 'sans-serif'],
      },
      borderRadius: {
        card: '16px',
        'card-lg': '24px',
        btn: '12px',
        badge: '100px',
      },
      animation: {
        marquee: 'marquee 28s linear infinite',
        shimmer: 'shimmer 2.5s infinite',
        'travel-line': 'travelLine 3.5s linear infinite',
        pulse2: 'pulse2 2s ease-in-out infinite',
        blink: 'blink 1.4s step-end infinite',
        'progress-fill': 'progressFill 3.5s ease-in-out infinite',
        'kanban-arrive': 'kanban-arrive 2.5s ease-out infinite',
        'glow-travel': 'glowTravel 3s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%) skewX(-15deg)' },
          '100%': { transform: 'translateX(200%) skewX(-15deg)' },
        },
        travelLine: {
          '0%': { left: '0%' },
          '100%': { left: '100%' },
        },
        pulse2: {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.15)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        progressFill: {
          '0%': { width: '0%', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { width: '100%', opacity: '0' },
        },
        'kanban-arrive': {
          '0%, 60%': { opacity: '0', transform: 'translateY(-8px)' },
          '80%, 100%': { opacity: '1', transform: 'translateY(0)' },
        },
        glowTravel: {
          '0%': { left: '-35%' },
          '100%': { left: '100%' },
        },
      },
    },
  },
  plugins: [],
}

export default config
