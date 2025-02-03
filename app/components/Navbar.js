"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-gradient-to-r from-black via-gray-900 to-black bg-opacity-95 shadow-lg z-50 border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-16">
        <Link
          href="/"
          className="text-white text-2xl font-bold tracking-widest uppercase"
        >
          CosmoCocktails
        </Link>

        <div className="hidden md:flex space-x-6">
          <NavLink href="/" text="Inicio" active={pathname === ""} />
          <div
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <NavLink
              href="/cocktails"
              text="Cócteles"
              active={pathname.startsWith("/cocktails")}
            />
            {dropdownOpen && (
              <div className="absolute left-0 mt-2 bg-gray-800 text-white rounded-md shadow-lg py-2 w-48">
                <DropdownLink
                  href="/cocktails/pornstar"
                  text="Pornstar Martini"
                />
                <DropdownLink href="/cocktails/margarita" text="Margarita" />
                <DropdownLink href="/cocktails/pinacolada" text="Pina Colada" />
                <DropdownLink href="/cocktails/paloma" text="Paloma" />
                <DropdownLink href="/cocktails/ginTonic" text="Gin Tonic" />
                <DropdownLink
                  href="/cocktails/sexOnTheBeach"
                  text="Sex On The Beach"
                />
              </div>
            )}
          </div>
        </div>

        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Menu size={28} />
        </button>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-black bg-opacity-95 flex flex-col items-center space-y-4 py-4 border-t border-gray-700"
        >
          <NavLink
            href="/"
            text="Inicio"
            active={pathname === "/"}
            onClick={() => setIsOpen(false)}
          />
          <NavLink
            href="/cocktails"
            text="Cócteles"
            active={pathname.startsWith("/cocktails")}
            onClick={() => setIsOpen(false)}
          />
        </motion.div>
      )}
    </nav>
  );
}

function NavLink({ href, text, active, onClick }) {
  return (
    <Link href={href} onClick={onClick}>
      <span
        className={`text-white px-4 py-2 rounded-md transition duration-300 ${
          active ? "bg-purple-600 shadow-md" : "hover:bg-purple-700"
        }`}
      >
        {text}
      </span>
    </Link>
  );
}

function DropdownLink({ href, text }) {
  return (
    <Link href={href}>
      <span className="block px-4 py-2 hover:bg-purple-600 cursor-pointer">
        {text}
      </span>
    </Link>
  );
}
