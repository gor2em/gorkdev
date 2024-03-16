"use client";
import Link from "next/link";

import { usePathname } from "next/navigation";

import Logo from "./Logo";
import Theme from "@/components/Theme";

import sideList from "./SideList";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className="fixed w-full bottom-4">
      <div className="flex items-center justify-center">
        <div className="flex items-center space-x-4 backdrop-blur-sm text-main600 ">
          <Logo path={pathname} />
          <Theme />

          {/* <div className="flex items-center space-x-4 ">
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
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
