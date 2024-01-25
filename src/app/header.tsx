'use client';
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 w-full h-14 backdrop-blur-lg">
      <div className="container flex items-center justify-center w-full h-full mx-auto">
        <Link href="/">
          <h2 className="text-2xl font-extrabold px-2 bg-primary800 text-primary400">gork.dev</h2>
        </Link>

        {/* <Theme /> */}

      </div>
    </header>
  );
}
