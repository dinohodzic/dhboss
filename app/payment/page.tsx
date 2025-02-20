"use client"

import { Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { NavBar } from "@/components/nav-bar"
import { Footer } from "@/components/footer"
import { PaymentForm } from "@/components/payment-form"
import { OrderSummary } from "@/components/order-summary"

function PaymentContent() {
  const searchParams = useSearchParams()
  const carId = searchParams.get("carId")
  const carName = searchParams.get("carName")
  const price = searchParams.get("price")
  const insurance = searchParams.get("insurance")
  const insurancePrice = searchParams.get("insurancePrice")
  const pickupDate = searchParams.get("pickupDate")
  const returnDate = searchParams.get("returnDate")

  return (
    <div className="container mx-auto px-4 py-12 pt-20">
      <h1 className="text-3xl font-bold mb-8">Complete Your Booking</h1>
      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <PaymentForm />
        </div>
        <div className="lg:col-span-1">
          <OrderSummary
            carName={carName || ""}
            price={Number(price) || 0}
            insurance={insurance || ""}
            insurancePrice={Number(insurancePrice) || 0}
            pickupDate={pickupDate || ""}
            returnDate={returnDate || ""}
          />
        </div>
      </div>
    </div>
  )
}

export default function PaymentPage() {
  return (
    <>
      <NavBar />
      <main>
        <Suspense fallback={<div className="container mx-auto px-4 py-12 pt-20">Loading...</div>}>
          <PaymentContent />
        </Suspense>
      </main>
      <Footer />
    </>
  )
}

