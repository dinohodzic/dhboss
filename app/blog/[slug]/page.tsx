import type { Metadata } from "next"
import Image from "next/image"
import { NavBar } from "@/components/nav-bar"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Top 10 Scenic Drives Around Sarajevo | DHBOSS Car Rental Blog",
  description:
    "Explore the most breathtaking routes around Sarajevo with our curated list of top 10 scenic drives. Perfect for your next car rental adventure with DHBOSS.",
}

export default function BlogPost() {
  return (
    <>
      <NavBar />
      <main className="container mx-auto px-4 py-12">
        <article className="max-w-3xl mx-auto">
          <Badge className="mb-4">Travel</Badge>
          <h1 className="text-4xl font-bold mb-4">Top 10 Scenic Drives Around Sarajevo</h1>
          <p className="text-muted-foreground mb-8">Published on February 15, 2024</p>
          <Image
            src="/placeholder.svg?height=600&width=1200"
            alt="Scenic drive near Sarajevo"
            width={1200}
            height={600}
            className="w-full h-auto rounded-lg mb-8"
          />
          <div className="prose prose-lg max-w-none">
            <p>
              Sarajevo, the capital of Bosnia and Herzegovina, is surrounded by stunning natural beauty and rich
              history. With a rental car from DHBOSS, you can explore the breathtaking landscapes and charming villages
              just outside the city. Here are our top 10 scenic drives that will make your Sarajevo visit unforgettable.
            </p>
            <h2>1. Sarajevo to Mostar</h2>
            <p>
              This iconic drive takes you through the heart of Herzegovina, offering spectacular views of the Neretva
              River and culminating in the historic city of Mostar, famous for its Ottoman-era Stari Most bridge.
            </p>
            <h2>2. The Olympic Mountains Tour</h2>
            <p>
              Visit the sites of the 1984 Winter Olympics by driving through Bjelašnica, Igman, and Jahorina mountains.
              The winding roads offer panoramic views of the Bosnian countryside.
            </p>
            <h2>3. Vrelo Bosne Nature Park</h2>
            <p>
              A short drive from Sarajevo's city center, this route takes you to the spring of the Bosna River,
              surrounded by lush parklands and walking trails.
            </p>
            {/* Add more content for the blog post */}
            <h2>Conclusion</h2>
            <p>
              These scenic drives showcase the diverse beauty of the Sarajevo region. With a reliable car from DHBOSS
              Car Rental, you can explore these routes at your own pace, creating unforgettable memories of your visit
              to Bosnia and Herzegovina. Remember to check road conditions before your trip and always drive safely.
            </p>
          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}

