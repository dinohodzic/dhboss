import { NavBar } from "@/components/nav-bar"
import { HeroSection } from "@/components/hero-section"
import { VehicleShowcase } from "@/components/vehicle-showcase"
import { LocationLinks } from "@/components/location-links"
import { PromotionalDeals } from "@/components/promotional-deals"
import { AppDownload } from "@/components/app-download"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main>
      <NavBar />
      <HeroSection />
      <VehicleShowcase />
      <LocationLinks />
      <AppDownload />
      <PromotionalDeals />
      <Footer />
    </main>
  )
}

