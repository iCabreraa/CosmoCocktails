import CocktailCard from "../_components/CocktailCard";

const cocktailsData = [
  {
    slug: "ginTonic",
    name: "Gin Tonic",
    image: "/cocktails/margherita/margherita.webp",
  },
  {
    slug: "margherita",
    name: "Margarita",
    image: "/cocktails/margherita/margherita.webp",
  },
  {
    slug: "pina-colada",
    name: "Piña Colada",
    image: "/cocktails/margherita/margherita.webp",
  },
  {
    slug: "Pornstar Martini",
    name: "Pornstar Martini",
    image: "/cocktails/margherita/margherita.webp",
  },
];

export default function CocktailsPage() {
  return (
    <section className="p-4 sm:p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {cocktailsData.map((cocktail) => (
        <CocktailCard key={cocktail.slug} cocktail={cocktail} />
      ))}
    </section>
  );
}
