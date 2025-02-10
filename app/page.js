import Link from "next/link";
import Image from "next/image";

import bg from "@/public/bg.png";

export default function Page() {
  return (
    <main className="mt-24">
      <Image
        src={bg}
        fill
        className="object-cover object-top absolute inset-0 -z-10"
        alt="Mountains and forests with two cabins"
      />

      <div className="relative z-10 text-center">
        <h1 className="text-4xl sm:text-6xl lg:text-8xl text-primary-50 mb-8 font-semibold tracking-tight">
          Welcome to <br /> Cosmococktails.
        </h1>
        <Link
          href="/cocktails"
          className="bg-accent-500 px-6 py-4 text-primary-900 text-lg font-semibold rounded-lg shadow-md hover:bg-accent-600 transition-all"
        >
          Explore Cocktails
        </Link>
      </div>
    </main>
  );
}
