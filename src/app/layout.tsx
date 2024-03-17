import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "gork.dev",
  description: "welcome to gork.dev",
};

import Sidebar from "@/components/Sidebar";
import Footer from "./footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <div className="w-full max-w-xl mx-auto">
          <div className="relative">
            <Sidebar />

            <div className="flex flex-col px-8 pt-12 space-y-8 md:pt-8">
              {children}

              <Footer />
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
