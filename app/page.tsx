import HeroSection from '@/components/home/HeroSection'
import MarqueeStrip from '@/components/home/MarqueeStrip'
import ServicesGrid from '@/components/home/ServicesGrid'
import UseCasesGrid from '@/components/home/UseCasesGrid'
import HowItWorks from '@/components/home/HowItWorks'
import PricingSection from '@/components/home/PricingSection'
import FinalCTA from '@/components/home/FinalCTA'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <MarqueeStrip />
      <ServicesGrid />
      <UseCasesGrid />
      <HowItWorks />
      <PricingSection />
      <FinalCTA />
    </main>
  )
}
