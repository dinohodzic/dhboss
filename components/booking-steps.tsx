"use client"

import { motion } from "framer-motion"
import { Search, Calendar, CreditCard, Car } from "lucide-react"

const steps = [
  {
    icon: Search,
    title: "Search",
    description: "Find the perfect car for your needs",
  },
  {
    icon: Calendar,
    title: "Select Dates",
    description: "Choose your pickup and return dates",
  },
  {
    icon: CreditCard,
    title: "Book & Pay",
    description: "Quick and secure payment process",
  },
  {
    icon: Car,
    title: "Enjoy Your Ride",
    description: "Pick up your car and start your journey",
  },
]

export function BookingSteps() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Book in 4 Easy Steps</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 p-4 rounded-full bg-primary/10 relative">
                  <step.icon className="h-8 w-8 text-primary" />
                  <div className="absolute -right-2 -top-2 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[60%] w-[calc(100%-60%)] h-[2px] bg-primary/20">
                  <motion.div
                    className="h-full bg-primary"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    viewport={{ once: true }}
                  />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

