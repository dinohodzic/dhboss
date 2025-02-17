// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import { Footer } from "@/components/footer";
import { NavBar } from "@/components/nav-bar";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rent a Car in Sarajevo | Best Deals with DHBOSS",
  description:
    "Find affordable car rentals in Sarajevo with DHBOSS. Enjoy flexible options, reliable vehicles, and 24/7 support for your journey.",
  icons: {
    icon: "/images/logo.png", // Ensure the favicon path is correct
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/images/logo.png" type="image/png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
      </head>
      <body className={inter.className}>
        <NavBar />
        {children}
        
      </body>
    </html>
  );
}