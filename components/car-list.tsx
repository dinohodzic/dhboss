"use client"

import type React from "react"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CarCard } from "@/components/car-card"

const cars = [
  {
    id: 1,
    name: "Toyota Corolla",
    category: "Economy",
    price: 50,
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.8,
    seats: 5,
    bags: 2,
    transmission: "Automatic",
    isBooked: false,
  },
  {
    id: 2,
    name: "Volkswagen Golf",
    category: "Compact",
    price: 60,
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.7,
    seats: 5,
    bags: 2,
    transmission: "Manual",
    isBooked: false,
  },
  {
    id: 3,
    name: "BMW 3 Series",
    category: "Luxury",
    price: 100,
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.9,
    seats: 5,
    bags: 3,
    transmission: "Automatic",
    isBooked: true,
    availableFrom: new Date("2024-03-15"),
  },
  {
    id: 4,
    name: "Škoda Octavia",
    category: "Midsize",
    price: 70,
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.6,
    seats: 5,
    bags: 3,
    transmission: "Automatic",
    isBooked: false,
  },
  {
    id: 5,
    name: "Renault Clio",
    category: "Economy",
    price: 45,
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.5,
    seats: 5,
    bags: 1,
    transmission: "Manual",
    isBooked: false,
  },
  {
    id: 6,
    name: "Mercedes-Benz E-Class",
    category: "Luxury",
    price: 120,
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.9,
    seats: 5,
    bags: 3,
    transmission: "Automatic",
    isBooked: false,
  },
]

export function CarList() {
  const [filteredCars, setFilteredCars] = useState(cars)
  const [searchTerm, setSearchTerm] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("")

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value.toLowerCase()
    setSearchTerm(term)
    filterCars(term, categoryFilter)
  }

  const handleCategoryFilter = (value: string) => {
    setCategoryFilter(value)
    filterCars(searchTerm, value)
  }

  const filterCars = (term: string, category: string) => {
    const filtered = cars.filter((car) => {
      const matchesTerm = car.name.toLowerCase().includes(term)
      const matchesCategory = category === "all" || car.category === category
      return matchesTerm && matchesCategory
    })
    setFilteredCars(filtered)
  }

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Car Fleet in Sarajevo</h2>
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1">
            <Label htmlFor="search">Search Cars</Label>
            <Input id="search" placeholder="Enter car name..." onChange={handleSearch} />
          </div>
          <div className="w-full md:w-48">
            <Label htmlFor="category">Filter by Category</Label>
            <Select onValueChange={handleCategoryFilter}>
              <SelectTrigger id="category">
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="Economy">Economy</SelectItem>
                <SelectItem value="Compact">Compact</SelectItem>
                <SelectItem value="Midsize">Midsize</SelectItem>
                <SelectItem value="Luxury">Luxury</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredCars.map((car) => (
            <CarCard key={car.id} {...car} />
          ))}
        </div>
      </div>
    </section>
  )
}

