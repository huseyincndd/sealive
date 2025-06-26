import Header from '@/components/Header'
import Hero from '@/components/Hero'
import WarehouseSection from '@/components/WarehouseSection'
import AnalyticsSection from '@/components/AnalyticsSection'
import TestimonialSection from '@/components/TestimonialSection'

export default function Home() {
  return (
    <main className="relative">
      <Header />
      <Hero />
      <WarehouseSection />
      <AnalyticsSection />
      <TestimonialSection />
      
    </main>
  )
}
