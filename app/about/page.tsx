import type { Metadata } from "next"
import Image from "next/image"
import { NavBar } from "@/components/nav-bar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "About DHBOSS - Premier Car Rental Service in Sarajevo | Rent a Car Sarajevo",
  description:
    "DHBOSS offers premium car rental services in Sarajevo. Experience hassle-free car rental with our modern fleet and exceptional customer service. Best rates for car rental in Sarajevo.",
}

export default function AboutPage() {
  return (
    <>
      <NavBar />
      <main>
        <div className="relative h-[300px] md:h-[400px]">
          <Image
            src="/images/bg.svg?height=400&width=1200"
            alt="DHBOSS Car Rental Sarajevo Office"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white text-center">
              Your Trusted Car Rental Partner in Sarajevo
            </h1>
          </div>
        </div>

        <section className="container mx-auto px-4 py-12">
          <div className="grid gap-12 md:grid-cols-2">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">About DHBOSS Car Rental Sarajevo</h2>
              <p className="text-lg text-muted-foreground">
                Since 2015, DHBOSS has been the leading car rental service provider in Sarajevo, offering premium
                vehicles and exceptional customer service to both local and international clients. Our commitment to
                quality and reliability has made us the preferred choice for car rental in Sarajevo.
              </p>
              <p className="text-lg text-muted-foreground">
                Located in the heart of Sarajevo, we provide easy access to both business and tourist destinations.
                Whether you're visiting for business or pleasure, our diverse fleet of well-maintained vehicles ensures
                you'll find the perfect car for your needs.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex items-start gap-2">
                  <Clock className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold">Fast Service</h3>
                    <p className="text-sm text-muted-foreground">Quick and efficient rental process</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold">Multiple Locations</h3>
                    <p className="text-sm text-muted-foreground">Convenient pickup points across Sarajevo</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="rounded-lg border bg-card p-6">
                <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <p>Main Office: Sarajevo City Center, 71000 Sarajevo</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <p>+387 33 123 456</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <p>info@dhboss.com</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-primary" />
                    <p>Open daily: 08:00 - 20:00</p>
                  </div>
                </div>
                <Button className="mt-6 w-full">Contact Us</Button>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-secondary">
          <div className="container mx-auto px-4 py-12">
            <h2 className="text-2xl font-bold mb-8 text-center">Why Choose DHBOSS for Car Rental in Sarajevo?</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: "Modern Fleet",
                  description: "Latest model vehicles maintained to the highest standards",
                },
                {
                  title: "Competitive Rates",
                  description: "Best car rental prices in Sarajevo with no hidden fees",
                },
                {
                  title: "24/7 Support",
                  description: "Round-the-clock customer service for peace of mind",
                },
                {
                  title: "Flexible Rental",
                  description: "Short and long-term rental options available",
                },
              ].map((feature) => (
                <div key={feature.title} className="rounded-lg bg-background p-6">
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

