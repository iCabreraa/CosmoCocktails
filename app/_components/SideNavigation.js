"use client";

import {
  CalendarDaysIcon,
  HomeIcon,
  UserIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/solid";
import SignOutButton from "@/app/_components/SignOutButton";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  {
    name: "Home",
    href: "/cocktails",
    icon: <HomeIcon className="h-5 w-5 text-primary-600" />,
  },
  // {
  //   name: "Cocktails",
  //   href: "/cocktails",
  //   icon: <CalendarDaysIcon className="h-5 w-5 text-primary-600" />,
  // },
  // {
  //   name: "Mocktails",
  //   href: "/cocktails",
  //   icon: <UserIcon className="h-5 w-5 text-primary-600" />,
  // },
];

const cocktails = [
  { name: "Margherita", key: "margherita" },
  { name: "Pornstar Martini", key: "pornstar" },
  { name: "Piña Colada", key: "pinacolada" },
  { name: "Sex on the Beach", key: "sexOnTheBeach" },
  { name: "Paloma", key: "paloma" },
  { name: "Gin Tonic", key: "ginTonic" },
];

function SideNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="border-r border-primary-900">
      <ul className="flex flex-col gap-2 h-full text-lg">
        {navLinks.map((link) => (
          <li key={link.name}>
            <Link
              className={`py-3 px-5 hover:bg-primary-900 hover:text-primary-100 transition-colors flex items-center gap-4 font-semibold text-primary-200`}
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
    </nav>
  );
}

export default SideNavigation;
