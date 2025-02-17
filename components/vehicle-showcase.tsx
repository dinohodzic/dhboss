import carsData from "@/data/cars.json"
import { CarCard } from "@/components/car-card"

export function VehicleShowcase() {
  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="mb-2 text-2xl font-bold">Top picks vehicle this month</h2>
      <p className="mb-8 text-muted-foreground">Experience the epitome of amazing journey with our top picks.</p>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {carsData.topPicks.map((car) => (
          <CarCard key={car.id} {...car} />
        ))}
      </div>
    </section>
  )
}

