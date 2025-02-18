import { Shield, Award, ThumbsUp } from "lucide-react"

const trustSignals = [
  {
    icon: Shield,
    title: "Secure Payments",
    description: "Your payment information is always protected.",
  },
  {
    icon: Award,
    title: "Quality Assurance",
    description: "All our vehicles meet strict quality standards.",
  },
  {
    icon: ThumbsUp,
    title: "Customer Satisfaction",
    description: "We're committed to providing the best service.",
  },
]

export function TrustSignals() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Why You Can Trust Us</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {trustSignals.map((signal, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <signal.icon className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{signal.title}</h3>
              <p className="text-muted-foreground">{signal.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

