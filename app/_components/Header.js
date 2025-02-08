"use client";
import { useState } from "react";
import Navigation from "@/app/_components/Navigation";
import Logo from "@/app/_components/Logo";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="border-b border-primary-900 px-4 py-3">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <Logo />
        {/* Menú completo para pantallas sm y mayores */}
        <nav className="hidden sm:flex">
          <Navigation />
        </nav>
        {/* Botón de menú para móviles */}
        <button
          className="sm:hidden text-primary-100"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </button>
      </div>
      {/* Menú móvil desplegable */}
      {mobileMenuOpen && (
        <nav className="sm:hidden mt-2">
          <Navigation />
        </nav>
      )}
    </header>
  );
}

export default Header;
