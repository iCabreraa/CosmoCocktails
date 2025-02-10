// app/_components/VersionSlider.js
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function VersionSlider({ versions }) {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % versions.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + versions.length) % versions.length);
  };

  return (
    // Contenedor con alturas fijas responsivas para evitar que la imagen se corte
    <div className="relative overflow-hidden rounded-lg h-64 sm:h-80 md:h-96">
      <AnimatePresence initial={false}>
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 50, y: 0 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          exit={{ opacity: 0, x: -50, y: 0 }}
          transition={{ duration: 0.5 }}
          // Posición absoluta para evitar movimientos verticales
          className="absolute inset-0"
        >
          <img
            src={versions[current].image}
            alt={versions[current].type}
            className="w-full h-full object-cover rounded-lg"
          />
        </motion.div>
      </AnimatePresence>
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button
          onClick={prevSlide}
          className="bg-black bg-opacity-50 text-white p-2 rounded-full focus:outline-none"
          aria-label="Previous"
        >
          &lt;
        </button>
        <button
          onClick={nextSlide}
          className="bg-black bg-opacity-50 text-white p-2 rounded-full focus:outline-none"
          aria-label="Next"
        >
          &gt;
        </button>
      </div>
    </div>
  );
}
