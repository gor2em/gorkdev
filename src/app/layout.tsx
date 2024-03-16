import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
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
        <div className="max-w-xl mx-auto w-full">
          <div className="p-8 flex flex-col space-y-8">{children}</div>
        </div>

        {/* <Navbar /> */}
      </body>
    </html>
  );
}
