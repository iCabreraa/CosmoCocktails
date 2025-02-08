// app/cocktails/page.js
import CocktailCard from "../_components/CocktailCard";

const cocktailsData = [
  // Datos de ejemplo, más adelante se pueden cargar desde Supabase
  {
    slug: "ginTonic",
    name: "Gin Tonic",
    image: "/path/to/gintonic.jpg", // Asegúrate de tener la imagen en public/
  },
  {
    slug: "margarita",
    name: "Margarita",
    image: "/path/to/margarita.jpg", // Asegúrate de tener la imagen en public/
  },
  {
    slug: "pina-colada",
    name: "Piña Colada",
    image: "/path/to/pina-colada.jpg", // Asegúrate de tener la imagen en public/
  },
  {
    slug: "Pornstar Martini",
    name: "Pornstar Martini",
    image: "/path/to/pornstar-martini.jpg", // Asegúrate de tener la imagen en public/
  },
  // Otros cócteles
];

export default function CocktailsPage() {
  return (
    <section className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {cocktailsData.map((cocktail) => (
        <CocktailCard key={cocktail.slug} cocktail={cocktail} />
      ))}
    </section>
  );
}
