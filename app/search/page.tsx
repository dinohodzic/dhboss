"use client"

import { useState } from "react"
import { NavBar } from "@/components/nav-bar"
import { Footer } from "@/components/footer"
import { CarCard } from "@/components/car-card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { CalendarIcon, MapPin } from "lucide-react"
import { format } from "date-fns"

// Mock data for available cars
const availableCars = [
  {
    id: 1,
    category: "Economy",
    name: "Toyota Yaris",
    transmission: "Automatic",
    seats: 5,
    bags: 2,
    rating: 4.5,
    price: 50,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 2,
    category: "SUV",
    name: "Honda CR-V",
    transmission: "Automatic",
    seats: 5,
    bags: 3,
    rating: 4.7,
    price: 80,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 3,
    category: "Luxury",
    name: "Mercedes-Benz E-Class",
    transmission: "Automatic",
    seats: 5,
    bags: 3,
    rating: 4.9,
    price: 120,
    image: "/placeholder.svg?height=200&width=300",
  },
  // Add more cars as needed
]

export default function SearchPage() {
  const [filters, setFilters] = useState({
    location: "",
    pickupDate: new Date(),
    returnDate: new Date(),
    carType: "",
    priceRange: [0, 200],
  })

  const [showFilters, setShowFilters] = useState(false)

  const handleFilterChange = (key: string, value: any) => {
    setFilters((prev) => ({ ...prev, [key]: value }))
  }

  return (
    <>
      <NavBar />
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8">Available Cars</h1>
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/4">
            <Button className="w-full mb-4 lg:hidden" onClick={() => setShowFilters(!showFilters)}>
              {showFilters ? "Hide Filters" : "Show Filters"}
            </Button>
            <div className={`space-y-6 ${showFilters ? "block" : "hidden lg:block"}`}>
              <div>
                <Label htmlFor="location">Location</Label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="location"
                    placeholder="City, airport or station"
                    className="pl-9"
                    value={filters.location}
                    onChange={(e) => handleFilterChange("location", e.target.value)}
                  />
                </div>
              </div>
              <div>
                <Label>Pick-up Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className="w-full justify-start text-left font-normal">
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {filters.pickupDate ? format(filters.pickupDate, "PPP") : <span>Pick a date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={filters.pickupDate}
                      onSelect={(date) => handleFilterChange("pickupDate", date)}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
              <div>
                <Label>Return Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className="w-full justify-start text-left font-normal">
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {filters.returnDate ? format(filters.returnDate, "PPP") : <span>Pick a date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={filters.returnDate}
                      onSelect={(date) => handleFilterChange("returnDate", date)}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
              <div>
                <Label htmlFor="carType">Car Type</Label>
                <Select value={filters.carType} onValueChange={(value) => handleFilterChange("carType", value)}>
                  <SelectTrigger id="carType">
                    <SelectValue placeholder="Select car type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="economy">Economy</SelectItem>
                    <SelectItem value="compact">Compact</SelectItem>
                    <SelectItem value="suv">SUV</SelectItem>
                    <SelectItem value="luxury">Luxury</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label>Price Range</Label>
                <Slider
                  min={0}
                  max={200}
                  step={10}
                  value={filters.priceRange}
                  onValueChange={(value) => handleFilterChange("priceRange", value)}
                  className="mt-2"
                />
                <div className="flex justify-between mt-2">
                  <span>${filters.priceRange[0]}</span>
                  <span>${filters.priceRange[1]}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-3/4">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {availableCars.map((car) => (
                <CarCard key={car.id} {...car} />
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

