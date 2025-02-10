// app/layout.js
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
        // Se agrega un fondo galáctico; ajusta la ruta según corresponda
        className={`${josefin.className} bg-[url('/galaxy.webp')] bg-cover bg-fixed text-primary-100 min-h-screen flex flex-col overflow-x-hidden`}
      >
        {/* Opcionalmente, puedes agregar un overlay oscuro para mejorar la legibilidad */}
        <Header />
        <div className="flex-1 px-4 sm:px-6 lg:px-8 py-12 grid">
          <main className="max-w-5xl mx-auto w-full">{children}</main>
        </div>
      </body>
    </html>
  );
}
