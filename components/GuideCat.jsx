"use client";

import { useState } from "react";
import Image from "next/image";

const messages = [
  "Ciao! Sono la tua guida nella Cave",
  "Prova a esplorare le Rooms dal menu in alto!",
  "Nella Food Room trovi ricette spaziali.",
  "Clicca RAVE per unirti ad un party pazzesco",
  "Ogni citizen ha una storia da scoprire.",
  "Nella nap room, ascolta, ma non parlare!"
];

export default function GuideCat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messageIndex, setMessageIndex] = useState(0);

    function getRandomIndex(current) {
    if (messages.length <= 1) return 0;
    let next;
    do {
        next = Math.floor(Math.random() * messages.length);
    } while (next === current);
    return next;
    }

    function handleClick() {
    if (isOpen) {
        setMessageIndex((prev) => getRandomIndex(prev));
    } else {
        setIsOpen(true);
        setMessageIndex((prev) => getRandomIndex(prev));
    }
    }

  return (
    <div className="fixed bottom-4 right-4 z-40 flex flex-col items-end gap-2">
      {isOpen && (
        <div className="relative max-w-[220px] rounded-md border-2 border-white bg-[#EC31F7] p-6 font-mono text-sm text-white">
          {messages[messageIndex]}
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Chiudi"
            className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full border-2 border-white bg-[#EC31F7] text-xs"
          >
            ✕
          </button>
        </div>
      )}

      <button
        onClick={handleClick}
        aria-label="Apri la guida"
        className="relative h-30 w-30 transition-transform hover:scale-105 active:scale-95"
      >
        <Image
          src="/guide_cat.png"
          alt="Gatto guida"
          fill
          className="object-contain"
        />
      </button>
    </div>
  );
}