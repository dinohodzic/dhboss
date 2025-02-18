import { Facebook, Instagram, Twitter, Youtube, CreditCard, Lock } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Footer() {
  const footerLinks = {
    About: ["How It Works", "About Us", "Our Team", "Careers"],
    Services: ["Car Rental",  "Airport Transfers", "Special Offers"],
    Help: ["FAQ", "Contact Us", "Reservations", "Returns"],
    Policies: ["Terms & Conditions", "Privacy Policy", "Cookie Policy", "Cancellation Policy"],
  };

  return (
    <footer className="bg-secondary mt-12">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-bold mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-muted-foreground hover:text-primary">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <h3 className="text-sm font-semibold mb-4">Secure Payments</h3>
          <div className="flex items-center space-x-4">
            <CreditCard className="h-8 w-8 text-gray-400" />
            <Image src="/images/mastercard-logo.png" alt="Mastercard" width={48} height={32} />
            <Image src="/images/visa.png" alt="Visa" width={48} height={16} />
            <Lock className="h-6 w-6 text-green-500" />
            <span className="text-sm text-muted-foreground">SSL Encrypted</span>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 md:flex-row">
          <p className="text-sm text-muted-foreground">© 2025 DHBoss. All rights reserved.</p>
          <div className="flex gap-4">
            <Button variant="ghost" size="icon">
              <Facebook className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Twitter className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Instagram className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Youtube className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  )
}

