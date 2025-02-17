import { NavBar } from "@/components/nav-bar"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { WhyChooseSarajevo } from "@/components/why-choose-sarajevo"
import { FaqSection } from "@/components/faq-section"
import { CarList } from "@/components/car-list"

export default function RentACarSarajevoPage() {
  return (
    <>
      <NavBar />
      <main>
        <HeroSection
          title="Rent a Car in Sarajevo"
          subtitle="Explore Sarajevo with comfort and style"
          imageUrl="/images/sarajevo-cityscape.jpg"
        />
<CarList/>
        <WhyChooseSarajevo />
        <FaqSection />
      </main>
      <Footer />
    </>
  )
}

