// app/_components/CocktailCard.js
import Link from "next/link";
import Image from "next/image";

export default function CocktailCard({ cocktail }) {
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
      <Image
        src={cocktail.image}
        alt={cocktail.name}
        width={300}
        height={200}
        className="object-cover rounded-md"
      />
      <h2 className="mt-4 text-xl font-semibold">{cocktail.name}</h2>
      <Link
        href={`/cocktails/${cocktail.slug}`}
        className="text-accent-500 hover:underline mt-2 inline-block"
      >
        Ver más
      </Link>
    </div>
  );
}
