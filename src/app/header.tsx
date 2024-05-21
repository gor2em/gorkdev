"use client";
// import Link from "next/link";

// import {
//   RiTwitterXLine,
//   RiGithubLine,
//   RiYoutubeLine,
//   RiSpotifyLine,
// } from "react-icons/ri";

export default function Header() {
  return (
    <header className="flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <div className="w-12 h-12 relative">
          <img
            src="https://pbs.twimg.com/profile_images/1779497280153739264/B9PqPjai_400x400.jpg"
            className="w-full h-full rounded-full absolute"
            alt="Profile"
          />
          <div className=" mix-blend-multiply absolute bg-gradient-to-r from-green-400 to-emerald-950 w-full h-full rounded-full"></div>
        </div>
        <div className="flex flex-col text-sm space-y-2">
          <div className="text-main100 font-bold ">görkem acar</div>
          <div className="text-main600 text-xs italic tracking-widest">
            developer, dreamer.
          </div>
        </div>
      </div>

      {/* <div className="sm:flex items-center space-x-2 text-xl text-main600 hidden">
        <RiGithubLine className="hover:cursor-pointer hover:text-main200 transition-all ease-linear duration-300" />
        <RiYoutubeLine className="hover:cursor-pointer hover:text-main200 transition-all ease-linear duration-300" />
        <RiSpotifyLine className="hover:cursor-pointer hover:text-main200 transition-all ease-linear duration-300" />
        <RiTwitterXLine className="hover:cursor-pointer hover:text-main200 transition-all ease-linear duration-300" />
      </div> */}
    </header>
  );
}
