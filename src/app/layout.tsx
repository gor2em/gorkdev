import type { Metadata } from "next";
import { Montserrat, Orbitron } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "gork.dev",
  description: "welcome to gork.dev",
};

import Header from "./header";
import Sidebar from "@/components/Sidebar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        {/* <Header /> */}

        <div className="container w-full px-8 py-8 mx-auto md:px-0">
          {children}
        </div>

        <Sidebar />

      </body>
    </html>
  );
}
