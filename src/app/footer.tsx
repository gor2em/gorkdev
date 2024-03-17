"use client";

import { useEffect, useState } from "react";

export default function Footer() {
  const colors = [
    "text-emerald-400",
    "text-pink-400",
    "text-cyan-400",
    "text-rose-600",
    "text-main200",
    "text-fuchsia-400",
    "text-orange-400",
  ];

  const greetings = [
    "merhaba",
    "hello",
    "hola",
    "bonjour",
    "hallo",
    "namaste",
    "selamun aleyküm",
    "ciao",
    "privet",
    "konnichiwa",
    "nǐ hǎo",
    "annyeonghaseyo",
    "sawatdi",
    "xin chào",
    "salam",
    "γεια σας",
    "szia",
    "helo",
    "aloha",
    "sawubona",
    "salve",
  ];

  const [currentGreetingIndex, setCurrentGreetingIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGreetingIndex(
        (prevIndex) => (prevIndex + 1) % greetings.length
      );
    }, 200);

    return () => clearInterval(interval);
  }, [currentGreetingIndex]);

  const randomTextColor = colors[Math.floor(Math.random() * colors.length)];

  return (
    <footer className="text-[10px] pointer-events-none select-none tracking-widest text-main900 font-mono">
      <h4
        className={`font-semibold ${randomTextColor} transition-opacity duration-500 ease-in-out`}
      >
        {greetings[currentGreetingIndex]}.
      </h4>
      <div>gork.dev 2024</div>
      <div>glory was here</div>
      <div>created with next.js & powered by vercel</div>
    </footer>
  );
}
