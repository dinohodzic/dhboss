"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    avatar: "/placeholder.svg?height=100&width=100",
    role: "Frequent Traveler",
    content:
      "DHBOSS made my trip to Sarajevo unforgettable. The car was in perfect condition, and the service was top-notch!",
    rating: 5,
  },
  {
    id: 2,
    name: "Mark Thompson",
    avatar: "/placeholder.svg?height=100&width=100",
    role: "Business Executive",
    content:
      "I always choose DHBOSS for my business trips. Their fleet is modern, and the booking process is seamless.",
    rating: 5,
  },
  {
    id: 3,
    name: "Emily Chen",
    avatar: "/placeholder.svg?height=100&width=100",
    role: "Adventure Seeker",
    content: "Renting an SUV from DHBOSS allowed me to explore Bosnia's beautiful countryside with ease and comfort.",
    rating: 4,
  },
]

export function TestimonialCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="bg-secondary py-16" 
    style={{
      backgroundImage: `url(/images/bg.svg)`,
    }}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <Card key={testimonial.id} className="flex-shrink-0 w-full">
                  <CardContent className="flex flex-col items-center text-center p-6">
                    <Avatar className="w-20 h-20 mb-4">
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                      <AvatarFallback>
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <p className="text-lg mb-4">{testimonial.content}</p>
                    <div className="flex items-center mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${
                            i < testimonial.rating ? "text-yellow-400 fill-current" : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          <div className="flex justify-center mt-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`h-2 w-2 rounded-full mx-1 ${index === activeIndex ? "bg-primary" : "bg-gray-300"}`}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

