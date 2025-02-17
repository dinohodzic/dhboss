import { Mountain, Building, Utensils, MapPin } from "lucide-react"

export function WhyChooseSarajevo() {
  const reasons = [
    {
      icon: Mountain,
      title: "Natural Beauty",
      description: "Explore the stunning mountains and landscapes surrounding Sarajevo.",
    },
    {
      icon: Building,
      title: "Rich History",
      description: "Discover the fascinating blend of Ottoman, Austro-Hungarian, and Yugoslav heritage.",
    },
    {
      icon: Utensils,
      title: "Delicious Cuisine",
      description: "Taste the unique flavors of Bosnian cuisine at your own pace.",
    },
    {
      icon: MapPin,
      title: "Strategic Location",
      description: "Perfect starting point for exploring Bosnia and Herzegovina.",
    },
  ]

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Why Rent a Car in Sarajevo?</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <reason.icon className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
              <p className="text-muted-foreground">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

