import Image from "next/image"
import Link from "next/link"
import { Star, Clock } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { format } from "date-fns"

interface CarCardProps {
  id: number
  category: string
  name: string
  transmission: string
  seats: number
  bags: number
  rating: number
  price: number
  image: string
  isBooked?: boolean
  availableFrom?: Date
}

export function CarCard({
  id,
  category,
  name,
  transmission,
  seats,
  bags,
  rating,
  price,
  image,
  isBooked,
  availableFrom,
}: CarCardProps) {
  return (
    <Link href={`/cars/${id}`}>
      <Card className="overflow-hidden transition-shadow hover:shadow-lg">
        <CardHeader className="p-0">
          <div className="relative">
            <Badge className="absolute left-4 top-4 z-10">{category}</Badge>
            {isBooked && availableFrom && (
              <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                <div className="text-center text-white p-4">
                  <Clock className="h-6 w-6 mx-auto mb-2" />
                  <p className="text-sm font-medium">Available from</p>
                  <p className="font-bold">{format(new Date(availableFrom), "MMM dd, yyyy")}</p>
                </div>
              </div>
            )}
            <Image
              src={image || "/placeholder.svg"}
              alt={name}
              width={300}
              height={200}
              className="h-48 w-full object-cover"
            />
          </div>
        </CardHeader>
        <CardContent className="p-4">
          <h3 className="text-lg font-semibold">{name}</h3>
          <p className="text-sm text-muted-foreground">{transmission}</p>
          <div className="mt-2 flex items-center gap-4">
            <div className="flex items-center gap-1">
              <span className="text-sm">{seats}</span>
              <span className="text-sm text-muted-foreground">Seats</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-sm">{bags}</span>
              <span className="text-sm text-muted-foreground">Bags</span>
            </div>
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-primary text-primary" />
              <span className="text-sm">{rating}</span>
            </div>
          </div>
          <div className="mt-4 flex items-center justify-between">
            <div>
              <span className="text-2xl font-bold">EUR {price}</span>
              <span className="text-sm text-muted-foreground">/day</span>
            </div>
            {!isBooked && (
              <Badge variant="secondary" className="font-medium">
                Available Now
              </Badge>
            )}
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}

