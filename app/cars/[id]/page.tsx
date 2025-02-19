import { notFound } from "next/navigation"
import carsData from "@/data/all-cars.json"
import { CarDetails } from "@/components/car-details"
import { NavBar } from "@/components/nav-bar"
import { Footer } from "@/components/footer"

interface CarPageProps {
  params: {
    id: string
  }
}

export default function CarPage({ params }: CarPageProps) {
  const car = carsData.cars.find((c) => c.id === Number.parseInt(params.id))

  if (!car) {
    notFound()
  }

  return (
    <>
      <NavBar />
      <CarDetails car={car} />
      <Footer />
    </>
  )
}

