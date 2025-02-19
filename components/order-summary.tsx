import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { format } from "date-fns"

interface OrderSummaryProps {
  carName: string
  price: number
  insurance: string
  insurancePrice: number
  pickupDate: string
  returnDate: string
}

export function OrderSummary({ carName, price, insurance, insurancePrice, pickupDate, returnDate }: OrderSummaryProps) {
  const startDate = pickupDate ? new Date(pickupDate) : null
  const endDate = returnDate ? new Date(returnDate) : null
  const days = startDate && endDate ? Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)) : 0

  const rentalTotal = price * days
  const insuranceTotal = insurancePrice * days
  const total = rentalTotal + insuranceTotal

  return (
    <Card>
      <CardHeader>
        <CardTitle>Order Summary</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h3 className="font-semibold mb-2">{carName}</h3>
          <div className="text-sm text-muted-foreground space-y-1">
            <div>Pickup: {startDate ? format(startDate, "PPP") : "Not specified"}</div>
            <div>Return: {endDate ? format(endDate, "PPP") : "Not specified"}</div>
            <div>
              Duration: {days} {days === 1 ? "day" : "days"}
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Car Rental</span>
            <span>EUR {rentalTotal}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">{insurance} Insurance</span>
            <span>EUR {insuranceTotal}</span>
          </div>
          <div className="border-t pt-2 mt-4">
            <div className="flex justify-between font-semibold">
              <span>Total</span>
              <span>EUR {total}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

