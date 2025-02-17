import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { NavBar } from "@/components/nav-bar"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "DHBOSS Car Rental Blog | Latest News and Travel Tips",
  description:
    "Stay updated with the latest car rental news, travel tips, and Sarajevo guides on the DHBOSS blog. Discover how to make the most of your car rental experience.",
}

const blogPosts = [
  {
    id: 1,
    title: "Top 10 Scenic Drives Around Sarajevo",
    excerpt: "Discover the most beautiful routes to explore with your rental car in Sarajevo.",
    image: "/placeholder.svg?height=400&width=600",
    category: "Travel",
    date: "February 15, 2024",
    slug: "top-10-scenic-drives-sarajevo",
  },
  {
    id: 2,
    title: "5 Tips for a Smooth Car Rental Experience",
    excerpt: "Learn how to make your car rental process hassle-free and enjoyable.",
    image: "/placeholder.svg?height=400&width=600",
    category: "Tips",
    date: "February 10, 2024",
    slug: "5-tips-smooth-car-rental-experience",
  },
  {
    id: 3,
    title: "The Ultimate Guide to Driving in Bosnia and Herzegovina",
    excerpt: "Everything you need to know about road rules, parking, and driving etiquette in Bosnia.",
    image: "/placeholder.svg?height=400&width=600",
    category: "Guide",
    date: "February 5, 2024",
    slug: "ultimate-guide-driving-bosnia-herzegovina",
  },
  // Add more blog posts as needed
]

export default function BlogPage() {
  return (
    <>
      <NavBar />
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">DHBOSS Car Rental Blog</h1>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <Link href={`/blog/${post.slug}`} key={post.id}>
              <Card className="overflow-hidden transition-shadow hover:shadow-lg">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-6">
                  <Badge className="mb-2">{post.category}</Badge>
                  <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                  <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                  <p className="text-sm text-muted-foreground">{post.date}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </>
  )
}

