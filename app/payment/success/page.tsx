import Link from "next/link"
import { CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { NavBar } from "@/components/nav-bar"
import { Footer } from "@/components/footer"

export default function PaymentSuccessPage() {
  return (
    <>
      <NavBar />
      <main className="container mx-auto px-4 py-12 pt-20">
        <Card className="max-w-md mx-auto">
          <CardContent className="pt-6 text-center">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h1 className="text-2xl font-bold mb-2">Payment Successful!</h1>
            <p className="text-muted-foreground mb-6">
              Thank you for your booking. We have sent a confirmation email with all the details.
            </p>
            <div className="space-y-2">
              <Button asChild className="w-full">
                <Link href="/">Return to Home</Link>
              </Button>
              <Button variant="outline" asChild className="w-full">
                <Link href="/account/bookings">View Booking</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </>
  )
}

