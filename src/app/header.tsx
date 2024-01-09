'use client';
import Link from "next/link";
import { useState } from "react";

export default function Header() {

  const changeTheme = () => {
    const hasTheme = document.querySelector("html")?.getAttribute("data-theme");

    if (!hasTheme) {
      document.querySelector("html")?.setAttribute("data-theme", "white");
    } else {
      document.querySelector("html")?.setAttribute("data-theme", "");
    }

  };

  return (
    <header className="sticky top-0 w-full h-16 px-8 backdrop-blur-lg">
      <div className="container flex items-center justify-between w-full h-full mx-auto">
        <Link href="/">
          <h2 className="pr-8 text-2xl font-extrabold md:pr-16 bg-primary800 text-primary400">gork.dev</h2>
        </Link>


        <div className="flex items-center">
          <button className="text-xs" onClick={() => changeTheme()}>theme!</button>
        </div>

      </div>
    </header>
  );
}
