import Hero from '@/components/homepage/Hero'
import Problems from '@/components/homepage/Problems'
import HowItWorks from '@/components/homepage/HowItWorks'
import ToolsPreview from '@/components/homepage/ToolsPreview'
import TrustSection from '@/components/homepage/TrustSection'

export default function Home() {
  return (
    <div>
      <Hero />
      <Problems />
      <HowItWorks />
      <ToolsPreview />
      <TrustSection />
    </div>
  )
}

