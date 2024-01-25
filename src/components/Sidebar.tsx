"use client";
import Link from "next/link";

import { usePathname } from "next/navigation";

import Logo from "./Logo";
import Theme from "@/components/Theme";

import sideList from "./SideList";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className="fixed md:left-14 bottom-4 md:top-2.5 w-full">
      <div className="flex items-center justify-center md:justify-start">
        <div className="flex items-center justify-center px-6 py-4 space-x-6 rounded-lg backdrop-blur-lg md:space-y-6 md:space-x-0 md:flex-col bg-gradient-to-b to-main950 text-main600">
          <Logo path={pathname} />

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
                      pathname === path ? "!text-main100" : "text-main600"
                    }
                   hover:text-primary400 transition-all duration-300 text-xl`}
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
  );
};

export default Navbar;
