import Logo from "./_components/Logo";
import Navigation from "./_components/Navigation";
import Navbar from "./_components/Navbar.js";
import "@/app/_styles/globals.css";
import Header from "./_components/Header";

import { Josefin_Sans } from "next/font/google";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: {
    template: "%s / Cosmococktails",
    default: "Welcome / Cosmococktails",
  },
  description: "Discover the best cosmococktails from around the world.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${josefin.className} bg-primary-950 text-primary-100 min-h-screen  flex flex-col`}
      >
        <Header />
        <div className="flex-1 px-8 py-12 grid">
          <main className="max-w-7xl mx-auto w-full">{children}</main>
        </div>
      </body>
    </html>
  );
}
