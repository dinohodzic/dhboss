"use client"

import { useRef, useEffect } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const destinations = [
  {
    name: "Old Town Sarajevo",
    image: "/images/sarajevo.jpg",
    description: "Explore the historic heart of Sarajevo with its charming streets and rich cultural heritage.",
  },
  {
    name: "Jahorina Mountain",
    image: "/images/jahorina.jpg",
    description: "Experience breathtaking views and outdoor activities in this beautiful mountain resort.",
  },
  {
    name: "Mostar Bridge",
    image: "/images/mostar.jpg",
    description: "Visit the iconic Stari Most and dive into the history of this UNESCO World Heritage site.",
  },
]

export function FeaturedDestinations() {
  const parallaxRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrolled = window.scrollY
        parallaxRef.current.style.transform = `translateY(${scrolled * 0.1}px)`
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="py-16 relative overflow-hidden">
      <div
        ref={parallaxRef}
        className="absolute inset-0 z-0"
        style={{
            backgroundColor: "var(--secondary-color)", // Use the secondary color variable

          backgroundPosition: "center",
          transform: "translateY(0)",
        }}
      />
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">Featured Destinations</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {destinations.map((destination) => (
            <Card key={destination.name} className="bg-white/90 backdrop-blur-sm">
              <Image
                src={destination.image || "/placeholder.svg"}
                alt={destination.name}
                width={600}
                height={400}
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-4">
                <h3 className="text-xl font-semibold mb-2">{destination.name}</h3>
                <p className="text-muted-foreground mb-4">{destination.description}</p>
                <Button variant="outline" className="w-full">
                  Explore
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

