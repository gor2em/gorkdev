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
        <div className="max-w-xl mx-auto w-full p-8">
          <div className="flex flex-col space-y-8">
            {children}

            <div className="text-[10px] pointer-events-none select-none tracking-widest text-main500 font-thin">
              <div>gork.dev 2024</div>
              <div>glory was here</div>
              <div>created with next.js & powered by vercel</div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
