"use client"

import { useState } from "react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent } from "@/components/ui/card"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Star, Users, Briefcase, Fuel, Gauge, Check, CalendarIcon, Shield, Clock, MapPin } from "lucide-react"
import { format } from "date-fns"
import { useRouter } from "next/navigation"

// Add this interface for form data
interface BookingFormData {
  pickupLocation: string
  dropoffLocation: string
  pickupDate: Date | undefined
  returnDate: Date | undefined
  pickupTime: string
  returnTime: string
}

// Generate time slots from 00:00 to 23:30 in 30-minute intervals
const generateTimeSlots = () => {
  const slots = []
  for (let hour = 0; hour < 24; hour++) {
    for (let minute = 0; minute < 60; minute += 30) {
      const formattedHour = hour.toString().padStart(2, "0")
      const formattedMinute = minute.toString().padStart(2, "0")
      slots.push(`${formattedHour}:${formattedMinute}`)
    }
  }
  return slots
}

const timeSlots = generateTimeSlots()

interface CarDetailsProps {
  car: {
    id: number
    name: string
    category: string
    price: number
    rating: number
    reviews: number
    transmission: string
    seats: number
    bags: number
    fuelType: string
    mileage: string
    location: string
    features: string[]
    images: string[]
    description: string
    insuranceOptions: {
      name: string
      price: number
      coverage: string[]
    }[]
  }
}

export function CarDetails({ car }: CarDetailsProps) {
  const router = useRouter()
  const [selectedImage, setSelectedImage] = useState(car.images[0])
  const [selectedInsurance, setSelectedInsurance] = useState<string>("Basic")
  const [formError, setFormError] = useState<string>("")

  // Initialize form data
  const [formData, setFormData] = useState<BookingFormData>({
    pickupLocation: "",
    dropoffLocation: "",
    pickupDate: undefined,
    returnDate: undefined,
    pickupTime: "10:00", // Default time
    returnTime: "10:00", // Default time
  })

  const handleFormChange = (field: keyof BookingFormData, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    setFormError("") // Clear error when form is modified
  }

  const validateForm = (): boolean => {
    if (!formData.pickupLocation) {
      setFormError("Please enter pickup location")
      return false
    }
    if (!formData.dropoffLocation) {
      setFormError("Please enter drop-off location")
      return false
    }
    if (!formData.pickupDate) {
      setFormError("Please select pickup date")
      return false
    }
    if (!formData.returnDate) {
      setFormError("Please select return date")
      return false
    }
    if (!formData.pickupTime) {
      setFormError("Please select pickup time")
      return false
    }
    if (!formData.returnTime) {
      setFormError("Please select return time")
      return false
    }

    // Check if return date/time is after pickup date/time
    const pickupDateTime = new Date(`${format(formData.pickupDate, "yyyy-MM-dd")}T${formData.pickupTime}`)
    const returnDateTime = new Date(`${format(formData.returnDate, "yyyy-MM-dd")}T${formData.returnTime}`)

    if (returnDateTime <= pickupDateTime) {
      setFormError("Return date/time must be after pickup date/time")
      return false
    }

    return true
  }

  const handleBooking = () => {
    if (!validateForm()) {
      return
    }

    const searchParams = new URLSearchParams({
      carId: car.id.toString(),
      carName: car.name,
      price: car.price.toString(),
      insurance: selectedInsurance,
      insurancePrice: car.insuranceOptions.find((opt) => opt.name === selectedInsurance)?.price.toString() || "0",
      pickupLocation: formData.pickupLocation,
      dropoffLocation: formData.dropoffLocation,
      pickupDate: formData.pickupDate?.toISOString() || "",
      returnDate: formData.returnDate?.toISOString() || "",
      pickupTime: formData.pickupTime,
      returnTime: formData.returnTime,
    })

    router.push(`/payment?${searchParams.toString()}`)
  }

  const calculateDuration = () => {
    if (!formData.pickupDate || !formData.returnDate || !formData.pickupTime || !formData.returnTime) {
      return 0
    }

    const pickupDateTime = new Date(`${format(formData.pickupDate, "yyyy-MM-dd")}T${formData.pickupTime}`)
    const returnDateTime = new Date(`${format(formData.returnDate, "yyyy-MM-dd")}T${formData.returnTime}`)

    // Calculate the difference in milliseconds and convert to days
    const durationInMs = returnDateTime.getTime() - pickupDateTime.getTime()
    const durationInDays = Math.ceil(durationInMs / (1000 * 60 * 60 * 24))

    // Return at least 1 day
    return Math.max(1, durationInDays)
  }

  const calculateTotalPrice = () => {
    const days = calculateDuration()
    const dailyInsurance = car.insuranceOptions.find((option) => option.name === selectedInsurance)?.price || 0

    const dailyTotal = car.price + dailyInsurance
    return {
      days,
      rentalPrice: car.price * days,
      insurancePrice: dailyInsurance * days,
      total: dailyTotal * days,
    }
  }

  return (
    <main className="container mx-auto px-4 py-12 pt-20">
      <div className="grid gap-8 lg:grid-cols-3">
        {/* Left Column - Images and Details */}
        <div className="lg:col-span-2 space-y-8">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="relative w-full h-0 pb-[40%] overflow-hidden rounded-lg bg-gray-100">
              <Image
                src={selectedImage || "/placeholder.svg"}
                alt={car.name}
                fill
                className="object-contain" // Changed from object-cover to object-contain
                quality={100}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 50vw"
                priority
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {car.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(image)}
                  className={`relative w-full h-0 pb-[40%] overflow-hidden rounded-lg border-2 transition-all bg-gray-100 ${
                    selectedImage === image ? "border-primary" : "border-transparent"
                  }`}
                >
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${car.name} view ${index + 1}`}
                    fill
                    className="object-contain p-1" // Added padding and changed to object-contain
                    quality={85}
                    sizes="(max-width: 768px) 25vw, 20vw"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Car Details */}
          <div className="space-y-6">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <h1 className="text-3xl font-bold mb-2">{car.name}</h1>
                <div className="flex flex-wrap items-center gap-3">
                  <Badge className="px-3 py-1">{car.category}</Badge>
                  
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>{car.location}</span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold">EUR {car.price}</div>
                <div className="text-muted-foreground">per day</div>
              </div>
            </div>

            <Separator />

            {/* Key Features */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold">{car.seats} Seats</div>
                  <div className="text-sm text-muted-foreground">Capacity</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Briefcase className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold">{car.bags} Bags</div>
                  <div className="text-sm text-muted-foreground">Luggage</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Fuel className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold">{car.fuelType}</div>
                  <div className="text-sm text-muted-foreground">Fuel Type</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Gauge className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold">{car.mileage}</div>
                  <div className="text-sm text-muted-foreground">Mileage</div>
                </div>
              </div>
            </div>

            <Separator />

            {/* Description */}
            <div>
              <h2 className="text-xl font-semibold mb-4">About this car</h2>
              <p className="text-muted-foreground leading-relaxed">{car.description}</p>
            </div>

            {/* Features */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Features & Amenities</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {car.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-primary" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Updated Booking Card */}
        <div className="lg:col-span-1">
          <Card className="sticky top-24">
            <CardContent className="p-6 space-y-6">
              {/* Location Inputs */}
              <div className="space-y-4">
                <div>
                  <Label htmlFor="pickupLocation">Pickup Location</Label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="pickupLocation"
                      placeholder="Enter pickup location"
                      className="pl-9"
                      value={formData.pickupLocation}
                      onChange={(e) => handleFormChange("pickupLocation", e.target.value)}
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="dropoffLocation">Drop-off Location</Label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="dropoffLocation"
                      placeholder="Enter drop-off location"
                      className="pl-9"
                      value={formData.dropoffLocation}
                      onChange={(e) => handleFormChange("dropoffLocation", e.target.value)}
                    />
                  </div>
                </div>
              </div>

              {/* Pickup Date and Time */}
              <div className="space-y-3">
                <div>
                  <div className="flex flex-col md:flex-row md:justify-between md:gap-2">
                    <Label className="md">Pickup Date & Time</Label>
                  </div>
                  <div className="relative grid grid-cols-2 md:grid-cols-1 gap-2">
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button variant="outline" className="w-full justify-start text-left font-normal">
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {formData.pickupDate ? format(formData.pickupDate, "PPP") : <span>Pick date</span>}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0 z-50" align="start" side="bottom">
                        <Calendar
                          mode="single"
                          selected={formData.pickupDate}
                          onSelect={(date) => handleFormChange("pickupDate", date)}
                          disabled={(date) => date < new Date()}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>

                    <Select
                      value={formData.pickupTime}
                      onValueChange={(value) => handleFormChange("pickupTime", value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select time" />
                      </SelectTrigger>
                      <SelectContent>
                        {timeSlots.map((time) => (
                          <SelectItem key={time} value={time}>
                            {time}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Return Date and Time */}
                <div>
                  <div className="flex flex-col md:flex-row md:justify-between md:gap-2">
                    <Label className="md:pt-2">Return Date & Time</Label>
                  </div>
                  <div className="relative grid grid-cols-2 md:grid-cols-1 gap-2">
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button variant="outline" className="w-full justify-start text-left font-normal">
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {formData.returnDate ? format(formData.returnDate, "PPP") : <span>Pick date</span>}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0 z-50" align="start" side="bottom">
                        <Calendar
                          mode="single"
                          selected={formData.returnDate}
                          onSelect={(date) => handleFormChange("returnDate", date)}
                          disabled={(date) => {
                            const today = new Date()
                            return date < today || (formData.pickupDate ? date < formData.pickupDate : false)
                          }}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>

                    <Select
                      value={formData.returnTime}
                      onValueChange={(value) => handleFormChange("returnTime", value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select time" />
                      </SelectTrigger>
                      <SelectContent>
                        {timeSlots.map((time) => (
                          <SelectItem key={time} value={time}>
                            {time}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              {formError && (
                <div className="text-sm text-destructive bg-destructive/10 p-3 rounded-md">{formError}</div>
              )}

              <Separator />

              {/* Insurance Options */}
              <div>
                <h3 className="font-semibold mb-4">Insurance Options</h3>
                <div className="space-y-3">
                  {car.insuranceOptions.map((option) => (
                    <div
                      key={option.name}
                      className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                        selectedInsurance === option.name ? "border-primary bg-primary/5" : "border-border"
                      }`}
                      onClick={() => setSelectedInsurance(option.name)}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <div className="font-semibold">{option.name}</div>
                        <div>EUR {option.price}/day</div>
                      </div>
                      <ul className="text-sm text-muted-foreground">
                        {option.coverage.map((item, index) => (
                          <li key={index} className="flex items-center gap-2">
                            <Shield className="h-4 w-4 text-primary" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              <Separator />

              {/* Price Breakdown */}
              <div>
                <h3 className="font-semibold mb-4">Price Breakdown</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Car Rental</span>
                    <div className="text-right">
                      <div>EUR {car.price}/day</div>
                      {calculateDuration() > 0 && (
                        <div className="text-sm text-muted-foreground">
                          EUR {calculateTotalPrice().rentalPrice} for {calculateDuration()} days
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Insurance</span>
                    <div className="text-right">
                      <div>
                      EUR {car.insuranceOptions.find((option) => option.name === selectedInsurance)?.price || 0}/day
                      </div>
                      {calculateDuration() > 0 && (
                        <div className="text-sm text-muted-foreground">
                          EUR {calculateTotalPrice().insurancePrice} for {calculateDuration()} days
                        </div>
                      )}
                    </div>
                  </div>
                  {calculateDuration() > 0 && (
                    <>
                      <Separator className="my-2" />
                      <div className="flex justify-between font-semibold">
                        <span>Total</span>
                        <span>EUR {calculateTotalPrice().total}</span>
                      </div>
                      <div className="text-sm text-muted-foreground text-right">
                        for {calculateDuration()} {calculateDuration() === 1 ? "day" : "days"}
                      </div>
                    </>
                  )}
                </div>
              </div>

              <Button className="w-full" onClick={handleBooking}>
                Book Now
              </Button>

              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" />
                <span>Free cancellation up to 24 hours before pickup</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}

