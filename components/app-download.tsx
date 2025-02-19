import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function AppDownload() {
  return (
    <section className="container mx-auto px-4 py-12">
      <Card className="overflow-hidden">
        <CardContent className="p-0">
          <div className="grid md:grid-cols-2">
            <div className="relative min-h-[300px] md:min-h-[400px]">
              <Image
                src="/images/download-app.svg?height=400&width=600"
                alt="DHBOSS Mobile App"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col justify-center p-6 md:p-12">
              <h2 className="text-3xl font-bold mb-4">Download the DHBOSS App</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Book your next car rental in seconds. Get exclusive deals and manage your reservations with our mobile
                app.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="h-[60px]" variant="ghost">
                  <Image
                    src="/images/app-store.png"
                    alt="Download on the App Store"
                    width={135}
                    height={40}
                  />
                </Button>
                <Button className="h-[60px]" variant="ghost">
                  <Image
                    src="/images/google-play.png"
                    alt="Get it on Google Play"
                    width={135}
                    height={40}
                  />
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}

