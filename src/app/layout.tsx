import type { Metadata } from "next";
import { Montserrat, Orbitron } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "gork.dev",
  description: "welcome to gork.dev",
};

import Navbar from "@/components/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>

        <div className="container w-full px-8 pt-0 pt-4 pb-24 mx-auto md:px-0">
          {children}
        </div>

        <Navbar />

      </body>
    </html>
  );
}
