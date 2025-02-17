import type { Metadata } from "next"
import { NavBar } from "@/components/nav-bar"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"
import { ContactInfo } from "@/components/contact-info"
import { Map } from "@/components/map"

export const metadata: Metadata = {
  title: "Contact Us | DHBOSS Car Rental Sarajevo",
  description:
    "Get in touch with DHBOSS Car Rental in Sarajevo. We're here to answer your questions and help you with your car rental needs.",
}

export default function ContactPage() {
  return (
    <>
      <NavBar />
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-12">Contact Us</h1>
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <ContactForm />
          </div>
          <div className="space-y-12">
            <ContactInfo />
            <Map />
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

