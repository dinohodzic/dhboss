// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/footer";
import { NavBar } from "@/components/nav-bar";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rent a Car in Sarajevo | Best Deals with DHBOSS",
  description:
    "Find affordable car rentals in Sarajevo with DHBOSS. Enjoy flexible options, reliable vehicles, and 24/7 support for your journey.",
  openGraph: {
    title: "Rent a Car in Sarajevo | Best Deals with DHBOSS",
    description:
      "Find affordable car rentals in Sarajevo with DHBOSS. Enjoy flexible options, reliable vehicles, and 24/7 support for your journey.",
    url: "https://www.dhbosscarrental.com",
    siteName: "DHBOSS Car Rental",
    images: [
      {
        url: "https://www.dhbosscarrental.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Rent a Car in Sarajevo with DHBOSS",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/logo.png" type="image/png" /> {/* Favicon link */}
      </head>
      <body className={inter.className}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}