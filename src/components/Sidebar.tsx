"use client";
import Link from "next/link";

import { usePathname } from "next/navigation";

import Logo from "./Logo";
import Theme from "@/components/Theme";

import sideList from "./SideList";

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className="absolute top-0 z-20 md:-left-10 md:top-2">
      <div className="fixed flex flex-row items-center justify-between w-full p-2 space-x-4 md:flex-col md:w-auto md:space-x-0 md:space-y-4 md:backdrop-blur-none backdrop-blur-sm">
        <Logo path={pathname} />

        <div className="flex flex-row items-center space-x-4 md:space-y-4 md:space-x-0 md:flex-col">
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
                        ? "!text-main50"
                        : "text-main400 opacity-70"
                    }
                   hover:opacity-100 transition-all duration-300 text-xl`}
                  >
                    <CurrentIcon />
                  </Link>
                );
              }
            }
          })}
          {/* <Theme /> */}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
