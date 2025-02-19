import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function PromotionalDeals() {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold">Enjoy extra miles with our best deal</h2>
        <Button variant="link" className="hidden sm:flex items-center">
          See All <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card className="relative overflow-hidden">
          <CardContent className="p-6">
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" />
            <Image src="/images/bg.svg?height=200&width=300" alt="Promotional offer" fill className="object-cover" />
            <div className="relative z-10 text-white">
              <p className="text-sm text-black font-medium">Limited time offer</p>
              <p className="text-4xl text-black font-bold">40%</p>
              <p className="mt-2 text-black">Off on your first ride</p>
            </div>
          </CardContent>
        </Card>

        <Card className="relative overflow-hidden">
          <CardContent className="p-6">
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" />
            <Image src="/images/bg.svg?height=200&width=300" alt="Special discount" fill className="object-cover" />
            <div className="relative text-black z-10 text-white">
              <p className="text-sm  text-black font-medium">Special discount</p>
              <p className="text-4xl text-black font-bold">65%</p>
              <p className="mt-2 text-black">For weekend trips</p>
            </div>
          </CardContent>
        </Card>

        <Card className="relative overflow-hidden md:col-span-2">
          <CardContent className="p-6">
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" />
            <Image src="/images/bg.svg?height=300&width=600" alt="Luxury comfort" fill className="object-cover" />
            <div className="relative z-10 text-white max-w-[50%]">
              <h3 className="text-xl text-black font-bold mb-2">A whole new level of comfort</h3>
              <p className="text-sm text-black mb-4">Experience premium features and service</p>
              <Button variant="secondary" size="sm">
                Explore more
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

