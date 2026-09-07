"use client";

import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-4 left-4 z-50">
      <button
        onClick={() => setIsMenuOpen((prev) => !prev)}
        aria-label="Apri il menu"
        aria-expanded={isMenuOpen}
        className="flex h-11 w-14 items-center justify-center rounded-md border-2 border-black bg-[#7ED957] transition-transform active:scale-95"
      >
        <Image
            src="/menu_line.png"
            alt="Fish"
            width={50}
            height={50}
        />
      </button>

      {isMenuOpen && (
        <nav className="mt-2 flex w-48 flex-col gap-1 rounded-md border-2 border-white bg-[#EC31F7] p-3 font-mono text-sm font-bold text-white">
          <a href="/" className="py-1">HOME</a>
          <a href="/rooms" className="py-1">ROOMS</a>
          <a href="/citizens" className="py-1">CITIZENS</a>
        </nav>
      )}
    </header>
  );
}