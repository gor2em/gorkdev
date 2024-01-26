"use client";
import Link from "next/link";

import { usePathname } from "next/navigation";

import Logo from "./Logo";
import Theme from "@/components/Theme";

import sideList from "./SideList";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className="fixed bottom-0 w-full bg-primary500 md:left-0 md:top-0 md:w-auto">
      <div className="flex items-center justify-center md:justify-start">
        <div className="flex items-center justify-between w-full p-4 space-x-6 backdrop-blur-lg md:space-y-6 md:space-x-0 md:flex-col bg-gradient-to-b to-main950 text-main600">
          <Logo path={pathname} />

          <div className="flex items-center space-x-4 md:space-y-8 md:space-x-0 md:flex-col">
            {sideList.map(({ icon, path, isActive }, index) => {
              {
                const CurrentIcon = icon;

                if (isActive) {
                  return (
                    <Link
                      key={index}
                      href={path}
                      className={`
                                ${
                                  !isActive && "opacity-40 pointer-events-none"
                                }                                ${
                        pathname === path
                          ? "!text-primary950"
                          : "text-primary700 opacity-70"
                      }
                   hover:opacity-100 transition-all duration-300 text-xl`}
                    >
                      <CurrentIcon />
                    </Link>
                  );
                }
              }
            })}
            <Theme />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
