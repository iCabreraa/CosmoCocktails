// app/cocktails/ginTonic/page.js
import Image from "next/image";

export const metadata = {
  title: "Gin N Tonic",
};

export default function GinTonicPage() {
  return (
    <article className="p-8">
      <h1 className="text-4xl font-bold mb-4">Gin Tonic</h1>
      <Image
        src="/path/to/gintonic.jpg"
        alt="Gin Tonic"
        width={600}
        height={400}
        className="rounded-md"
      />
      <p className="mt-4">
        Descripción detallada del Gin Tonic. Aquí puedes incluir ingredientes,
        preparación y recomendaciones.
      </p>
    </article>
  );
}
