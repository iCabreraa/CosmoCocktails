// app/_components/SideNavigation.js
"use client";

import {
  CalendarDaysIcon,
  HomeIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  {
    name: "Home",
    href: "/cocktails",
    icon: <HomeIcon className="h-5 w-5 text-primary-600" />,
  },
];

const cocktails = [
  { name: "Margherita", key: "margherita" },
  { name: "Pornstar Martini", key: "pornstar" },
  { name: "Piña Colada", key: "pinacolada" },
  { name: "Sex on the Beach", key: "sexOnTheBeach" },
  { name: "Paloma", key: "paloma" },
  { name: "Gin Tonic", key: "ginTonic" },
];

function SideNavigation({ mobile }) {
  // Para la versión móvil, controlamos el despliegue completo del menú.
  const [menuOpen, setMenuOpen] = useState(false);
  // Controla la apertura del submenu "Cocktails".
  const [isOpen, setIsOpen] = useState(false);

  // Definir clases base según la variante:
  // En móvil se usa un borde inferior; en desktop, un borde derecho.
  const containerClasses = mobile
    ? "border-b border-primary-900"
    : "border-r border-primary-900";

  return (
    <nav className={containerClasses}>
      {/* Versión móvil: botón para abrir/cerrar el menú */}
      {mobile && (
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="py-3 px-5 flex items-center justify-between w-full text-left hover:bg-primary-900 transition-colors"
        >
          <span className="font-semibold text-primary-200">Menu</span>
          <ChevronDownIcon
            className={`h-5 w-5 transition-transform ${
              menuOpen ? "rotate-180" : ""
            }`}
          />
        </button>
      )}
      {/* Mostrar el contenido del menú si está abierto (en móvil) o siempre en desktop */}
      {(menuOpen || !mobile) && (
        <ul className="flex flex-col gap-2 h-full text-lg">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                className="py-3 px-5 hover:bg-primary-900 hover:text-primary-100 transition-colors flex items-center gap-4 font-semibold text-primary-200"
                href={link.href}
              >
                {link.icon}
                <span>{link.name}</span>
              </Link>
            </li>
          ))}
          <li>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="py-3 px-5 flex items-center gap-4 w-full text-left hover:bg-primary-900 transition-colors"
            >
              <CalendarDaysIcon className="h-5 w-5 text-primary-600" />
              <span>Cocktails</span>
              <ChevronDownIcon
                className={`h-5 w-5 transition-transform ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {isOpen && (
              <ul className="ml-8 mt-2">
                {cocktails.map((cocktail) => (
                  <li key={cocktail.key}>
                    <Link
                      href={`/cocktails/${cocktail.key}`}
                      className="block py-2 px-4 hover:bg-primary-800 rounded"
                    >
                      {cocktail.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        </ul>
      )}
    </nav>
  );
}

export default SideNavigation;
