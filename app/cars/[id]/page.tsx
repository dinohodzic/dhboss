import type { Metadata } from "next"
import Image from "next/image"
import { NavBar } from "@/components/nav-bar"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Star, Users, Briefcase, Fuel, Gauge, Cog } from "lucide-react"

// This would typically come from an API or database
const carData = {
  id: 1,
  name: "Toyota Camry",
  category: "Sedan",
  price: 70,
  rating: 4.8,
  reviews: 120,
  transmission: "Automatic",
  seats: 5,
  bags: 3,
  fuelType: "Hybrid",
  mileage: "50 mpg",
  features: [
    "Bluetooth",
    "Backup camera",
    "Navigation",
    "Sunroof",
    "Apple CarPlay",
    "Android Auto",
    "Heated seats",
    "Keyless entry",
  ],
  images: [
    "/placeholder.svg?height=600&width=800",
    "/placeholder.svg?height=600&width=800",
  
  ],
  description:
    "The Toyota Camry is a reliable and comfortable sedan, perfect for both city driving and long trips. With its hybrid engine, you'll enjoy excellent fuel economy without compromising on performance. This model comes equipped with a range of modern features to enhance your driving experience.",
}

export const metadata: Metadata = {
  title: `${carData.name} - DHBOSS Car Rental`,
  description: `Rent the ${carData.name} from DHBOSS Car Rental in Sarajevo. ${carData.seats} seats, ${carData.transmission} transmission, and great fuel economy.`,
}

export default function CarPage({ params }: { params: { id: string } }) {
  return (
    <>
      <NavBar />
      <main className="container mx-auto px-4 py-12">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h1 className="text-3xl font-bold mb-2">{carData.name}</h1>
              <div className="flex items-center gap-2 mb-4">
                <Badge>{carData.category}</Badge>
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <span className="ml-1 font-semibold">{carData.rating}</span>
                  <span className="text-muted-foreground ml-1">({carData.reviews} reviews)</span>
                </div>
              </div>
            </div>
            <Tabs defaultValue="gallery" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="gallery">Gallery</TabsTrigger>
                <TabsTrigger value="features">Features</TabsTrigger>
              </TabsList>
              <TabsContent value="gallery">
                <div className="grid gap-4 mt-4">
                  {carData.images.map((image, index) => (
                    <Image
                      key={index}
                      src={image || "/placeholder.svg"}
                      alt={`${carData.name} - Image ${index + 1}`}
                      width={800}
                      height={600}
                      className="rounded-lg w-full h-auto"
                    />
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="features">
                <ul className="mt-4 grid grid-cols-2 gap-4">
                  {carData.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <Cog className="h-5 w-5 mr-2 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </TabsContent>
            </Tabs>
          </div>
          <div>
            <div className="bg-secondary p-6 rounded-lg mb-8 sticky top-4">
              <div className="text-3xl font-bold mb-4">
                ${carData.price} <span className="text-lg font-normal text-muted-foreground">/day</span>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center">
                  <Users className="h-5 w-5 mr-2 text-primary" />
                  <span>{carData.seats} Seats</span>
                </div>
                <div className="flex items-center">
                  <Briefcase className="h-5 w-5 mr-2 text-primary" />
                  <span>{carData.bags} Bags</span>
                </div>
                <div className="flex items-center">
                  <Cog className="h-5 w-5 mr-2 text-primary" />
                  <span>{carData.transmission}</span>
                </div>
                <div className="flex items-center">
                  <Fuel className="h-5 w-5 mr-2 text-primary" />
                  <span>{carData.fuelType}</span>
                </div>
                <div className="flex items-center col-span-2">
                  <Gauge className="h-5 w-5 mr-2 text-primary" />
                  <span>Mileage: {carData.mileage}</span>
                </div>
              </div>
              <Button className="w-full">Book Now</Button>
            </div>
          </div>
        </div>
        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">About this car</h2>
          <p className="text-muted-foreground">{carData.description}</p>
        </div>
      </main>
      <Footer />
    </>
  )
}

