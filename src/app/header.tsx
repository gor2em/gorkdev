'use client';
import Link from "next/link";

import Theme from "@/components/Theme";

export default function Header() {
  return (
    <header className="sticky top-0 w-full h-16 px-8 backdrop-blur-lg">
      <div className="container flex items-center justify-between w-full h-full mx-auto">
        <Link href="/">
          <h2 className="pr-8 text-2xl font-extrabold md:pr-16 bg-primary800 text-primary400">gork.dev</h2>
        </Link>

        <Theme />

      </div>
    </header>
  );
}
