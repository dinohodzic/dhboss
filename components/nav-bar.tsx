"use client";
import { Menu } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";
import { Globe } from "lucide-react";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const menuItems = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Our Fleet", href: "/search" },
  { name: "Contact", href: "/contact" },
  { name: "Blog", href: "/blog" },
];

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("EN"); // Default language

  // Function to handle language change
  const handleLanguageChange = (language: string) => {
    setSelectedLanguage(language);
    // Add logic here to update the language state (e.g., using Next.js i18n or context)
    console.log(`Selected language: ${language}`);
  };

  return (
    <nav className="sticky top-0 z-50 w-full h-16 bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 py-2">
        {/* Logo Section */}
        <div className="flex items-center gap-8">
          <Link href="/" className="text-xl font-bold text-primary hover:text-primary/80 transition-colors">
            <Image
              src="/images/logo.png" // Path to your logo in the public folder
              alt="DHBOSS Logo" // Alt text for accessibility
              width={120} // Adjust based on your logo's dimensions
              height={40} // Adjust based on your logo's dimensions
              className="object-contain" // Ensures proper scaling
            />
          </Link>
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
        {/* Right Section (Buttons and Mobile Menu) */}
        <div className="flex items-center gap-4">
          {/* Language Selector */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="flex gap-2 text-muted-foreground hover:text-primary">
                <Globe className="h-4 w-4" />
                {selectedLanguage}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuLabel>Select Language</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => handleLanguageChange("EN")}>
                English (EN)
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleLanguageChange("BS")}>
                Bosanski (BS)
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleLanguageChange("DE")}>
                Deutsch (DE)
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleLanguageChange("TR")}>
                Türkçe (TR)
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleLanguageChange("AR")}>
                العربية (AR)
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* CTA Button */}
          

          {/* Mobile Menu Trigger */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5 text-muted-foreground hover:text-primary" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px] p-6">
              <div className="flex flex-col gap-4 pt-8">
                {/* Mobile Menu Items */}
                {menuItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-lg text-muted-foreground hover:text-primary transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <hr className="my-4 border-gray-200" />
                {/* Mobile CTA Button */}
              
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}