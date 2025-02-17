import Link from "next/link";

export function LocationLinks() {
  const locations = [
    { name: "Rent a car Sarajevo", href: "/rent-a-car-sarajevo" },
    { name: "Rent a car Zenica", href: "/rent-a-car-zenica" },
    { name: "Rent a car Tuzla", href: "/rent-a-car-tuzla" },
    { name: "Rent a car Visoko", href: "/rent-a-car-visoko" },
    { name: "Rent a car Banja Luka", href: "/rent-a-car-banja-luka" },
    { name: "Rent a car Mostar", href: "/rent-a-car-mostar" },
  ];

  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="mb-2 text-2xl font-bold text-primary">Discover popular car rental locations</h2>
      <p className="mb-6 text-muted-foreground">Find the best deals and discounts for your next journey</p>
      <div className="flex flex-wrap gap-4">
        {locations.map((location) => (
          <Link
            key={location.name}
            href={location.href}
            className="rounded-full border px-4 py-2 text-sm text-primary hover:bg-secondary hover:text-white transition-colors"
          >
            {location.name}
          </Link>
        ))}
      </div>
    </section>
  );
}