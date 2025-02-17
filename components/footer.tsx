import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Footer() {
  const footerLinks = {
    About: [
      { name: "How it works", href: "/how-it-works" },
      { name: "Featured", href: "/featured" },
      { name: "Partnership", href: "/partnership" },
      { name: "Business Relations", href: "/business-relations" },
    ],
    Community: [
      { name: "Events", href: "/events" },
      { name: "Blog", href: "/blog" },
    ],
    Socials: [
      { name: "Facebook", href: "https://www.facebook.com/dhbosscarrental", icon: Facebook },
      { name: "Twitter", href: "https://www.twitter.com/dhbosscarrental", icon: Twitter },
      { name: "Instagram", href: "https://www.instagram.com/dhbosscarrental", icon: Instagram },
      { name: "YouTube", href: "https://www.youtube.com/channel/UCYOUR_CHANNEL_ID", icon: Youtube },
    ],
    Legal: [
      { name: "Terms & Conditions", href: "/terms-and-conditions" },
      { name: "Privacy Policy", href: "/privacy-policy" },
      { name: "Cookie Policy", href: "/cookie-policy" },
    ],
  };

  return (
    <footer className="bg-secondary mt-12">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-bold mb-4 text-primary">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    {link.icon ? (
                      <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary">
                        <Button variant="ghost" size="icon">
                          <link.icon className="h-5 w-5" />
                        </Button>
                        {link.name}
                      </Link>
                    ) : (
                      <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary">
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 md:flex-row">
          <p className="text-sm text-muted-foreground">© 2025 DHBOSS. All rights reserved.</p>
          <div className="flex gap-4">
            {footerLinks.Socials.map((social) => (
              <Button key={social.name} variant="ghost" size="icon" asChild>
                <a href={social.href} target="_blank" rel="noopener noreferrer">
                  <social.icon className="h-5 w-5 text-primary hover:text-primary/80 transition-colors" />
                </a>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}