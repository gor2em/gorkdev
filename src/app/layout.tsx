import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "gork.dev",
  description: "welcome to gork.dev",
};

import Header from "./header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className={inter.className}>
        <Header />

        <div className="container w-full p-8 mx-auto rounded">
          {children}
        </div>
      </body>
    </html>
  );
}
