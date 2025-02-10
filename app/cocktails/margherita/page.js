"use client";

import { useState } from "react";
import VersionSlider from "@/app/_components/VersionSlider";
import Modal from "@/app/_components/Modal";

// export const metadata = {
//   title: "Margarita",
// };

export default function Page() {
  // Define las versiones del cóctel
  const versions = [
    {
      type: "Alcoholic",
      image: "/cocktails/margherita/margherita.webp", // Asegúrate de tener la imagen en public/
      description: "La clásica Margarita con tequila, triple sec y lima.",
    },
    {
      type: "Non-Alcoholic",
      image: "/cocktails/margherita/margherita.webp",
      description:
        "Una refrescante Margarita sin alcohol, perfecta para todos.",
    },
  ];

  const [showModal, setShowModal] = useState(false);

  return (
    <div className="p-4 sm:p-8 max-w-5xl mx-auto">
      {/* Slider para versiones del cóctel */}
      <VersionSlider versions={versions} />

      {/* Información del cóctel */}
      <div className="mt-6">
        <h1 className="text-3xl font-bold mb-4">Margarita</h1>
        <p className="text-lg mb-4">
          {
            versions[0]
              .description /* Puedes optar por mostrar la descripción de la versión actual, o la alcohólica por defecto */
          }
        </p>
        {/* Aquí podrías agregar más detalles como ingredientes, preparación, etc. */}
      </div>

      {/* Botón de compra */}
      <div className="mt-6">
        <button
          onClick={() => setShowModal(true)}
          className="bg-accent-500 px-6 py-3 rounded-lg text-primary-900 font-semibold shadow hover:bg-accent-600 transition"
        >
          Buy this Cocktail
        </button>
      </div>

      {/* Modal de opciones de compra */}
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Purchase Options</h2>
            <p className="mb-4">
              Aquí se mostrarán las opciones de compra para la Margarita.
            </p>
            {/* Detalla aquí las opciones: por ejemplo, tamaños, packs, etc. */}
            <button
              onClick={() => setShowModal(false)}
              className="bg-accent-500 px-4 py-2 rounded mt-4 text-primary-900 font-semibold hover:bg-accent-600 transition"
            >
              Close
            </button>
          </div>
        </Modal>
      )}
    </div>
  );
}
