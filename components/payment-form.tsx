"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { CreditCard, Lock, CheckCircle2, AlertCircle, ChevronRight } from "lucide-react"

interface CardDetails {
  number: string
  name: string
  expiry: string
  cvc: string
}

export function PaymentForm() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [step, setStep] = useState(1)
  const [cardDetails, setCardDetails] = useState<CardDetails>({
    number: "",
    name: "",
    expiry: "",
    cvc: "",
  })

  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "")
    const matches = v.match(/\d{4,16}/g)
    const match = (matches && matches[0]) || ""
    const parts = []

    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4))
    }

    if (parts.length) {
      return parts.join(" ")
    } else {
      return value
    }
  }

  const formatExpiry = (value: string) => {
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "")
    if (v.length >= 2) {
      return `${v.substring(0, 2)}/${v.substring(2, 4)}`
    }
    return v
  }

  const handleInputChange = (field: keyof CardDetails, value: string) => {
    let formattedValue = value
    if (field === "number") {
      formattedValue = formatCardNumber(value)
    } else if (field === "expiry") {
      formattedValue = formatExpiry(value)
    }
    setCardDetails((prev) => ({ ...prev, [field]: formattedValue }))
  }

  const getCardType = (number: string) => {
    const cleanNumber = number.replace(/\D/g, "")
    const re = {
      visa: /^4/,
      mastercard: /^(5[1-5]|2[2-7])/,
      amex: /^3[47]/,
      discover: /^6(?:011|5)/,
    }

    if (re.visa.test(cleanNumber)) return "visa"
    if (re.mastercard.test(cleanNumber)) return "mastercard"
    if (re.amex.test(cleanNumber)) return "amex"
    if (re.discover.test(cleanNumber)) return "discover"
    return null
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate payment processing
    setTimeout(() => {
      setIsLoading(false)
      router.push("/payment/success")
    }, 2000)
  }

  return (
    <div className="space-y-8">
      {/* Payment Progress */}
      <div className="flex items-center justify-between">
        {["Billing Details", "Payment Method", "Confirmation"].map((label, index) => (
          <div key={index} className="flex items-center">
            <div
              className={`flex items-center justify-center w-8 h-8 rounded-full border-2 ${
                step > index + 1
                  ? "bg-primary border-primary text-primary-foreground"
                  : step === index + 1
                    ? "border-primary text-primary"
                    : "border-muted text-muted-foreground"
              }`}
            >
              {step > index + 1 ? <CheckCircle2 className="w-5 h-5" /> : <span>{index + 1}</span>}
            </div>
            <span
              className={`ml-2 hidden sm:inline-block ${
                step === index + 1 ? "text-primary font-medium" : "text-muted-foreground"
              }`}
            >
              {label}
            </span>
            {index < 2 && (
              <ChevronRight className={`mx-2 w-4 h-4 ${step > index + 1 ? "text-primary" : "text-muted-foreground"}`} />
            )}
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Card Preview */}
        <div className="relative h-48 rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 p-6 text-white shadow-lg">
          <div className="absolute right-6 top-6">
            {cardDetails.number && (
              <div className="h-8">
                {getCardType(cardDetails.number) === "visa" && (
                  <Image src="/images/visa.png" alt="Visa" width={30} height={16} className="h-auto w-auto" />
                )}
                {getCardType(cardDetails.number) === "mastercard" && (
                  <Image src="/images/mastercard-logo.png" alt="Mastercard" width={48} height={32} className="h-full w-auto" />
                )}
                {getCardType(cardDetails.number) === "amex" && <div className="text-sm font-medium">AMEX</div>}
                {getCardType(cardDetails.number) === "discover" && <div className="text-sm font-medium">Discover</div>}
              </div>
            )}
          </div>
          <div className="mt-4">
            <div className="text-xl tracking-wider">{cardDetails.number || "•••• •••• •••• ••••"}</div>
          </div>
          <div className="mt-8 flex justify-between">
            <div>
              <div className="text-xs uppercase text-gray-400">Card Holder</div>
              <div className="text-sm tracking-wider">{cardDetails.name || "YOUR NAME"}</div>
            </div>
            <div>
              <div className="text-xs uppercase text-gray-400">Expires</div>
              <div className="text-sm tracking-wider">{cardDetails.expiry || "MM/YY"}</div>
            </div>
          </div>
        </div>

        <Card>
          <CardContent className="p-6">
            <div className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="cardNumber">Card Number</Label>
                <div className="relative">
                  <Input
                    id="cardNumber"
                    placeholder="1234 5678 9012 3456"
                    maxLength={19}
                    value={cardDetails.number}
                    onChange={(e) => handleInputChange("number", e.target.value)}
                    className={`pl-12 ${getCardType(cardDetails.number) ? "border-primary" : ""}`}
                  />
                  <CreditCard className="absolute left-4 top-3 h-4 w-4 text-muted-foreground" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="cardName">Cardholder Name</Label>
                <Input
                  id="cardName"
                  placeholder="Name as appears on card"
                  value={cardDetails.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="expiry">Expiry Date</Label>
                  <Input
                    id="expiry"
                    placeholder="MM/YY"
                    maxLength={5}
                    value={cardDetails.expiry}
                    onChange={(e) => handleInputChange("expiry", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cvc">CVC</Label>
                  <Input
                    id="cvc"
                    placeholder="123"
                    maxLength={4}
                    type="password"
                    value={cardDetails.cvc}
                    onChange={(e) => handleInputChange("cvc", e.target.value)}
                  />
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <div className="flex items-center gap-2 rounded-lg bg-primary/5 p-3">
                  <Lock className="h-5 w-5 text-primary" />
                  <div className="text-sm">
                    <span className="font-medium">Secure Payments</span>
                    <span className="text-muted-foreground"> - Your payment information is encrypted</span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <Image src="/images/visa.png" alt="Visa" width={32} height={30} className="h-auto w-auto" />
                    <Image src="/images/mastercard-logo.png" alt="Mastercard" width={32} height={30} className="h-auto w-auto" />
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <AlertCircle className="h-4 w-4" />
                    <span>Your card will be charged after confirmation</span>
                  </div>
                </div>
              </div>

              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "Processing..." : "Pay Securely"}
              </Button>
            </div>
          </CardContent>
        </Card>
      </form>
    </div>
  )
}

