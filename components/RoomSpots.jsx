"use client";

import Image from "next/image";

function SpotItem({ name, img, text, reverse, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`flex w-full items-center gap-6 lg:w-auto lg:flex-1 lg:flex-col lg:items-center lg:gap-4 transition-opacity hover:opacity-80 ${
        reverse ? "max-lg:flex-row-reverse" : "flex-row"
      }`}
    >
      <div className="relative h-60 w-60 shrink-0 overflow-hidden lg:h-80 lg:w-80">
        <Image src={img} alt={name} fill className="object-cover" />
      </div>
      <div className={`flex flex-col lg:items-center lg:text-center ${reverse ? "max-lg:items-end text-right" : "items-start text-left"}`}>
        <span className="font-display text-lg text-white lg:text-2xl">{name}</span>
        {text && (
          <p className="mt-1 font-mono text-xs text-white/70 lg:text-sm">
            {text}
          </p>
        )}
      </div>
    </button>
  );
}

export default function RoomSpots({ label, spots, onSpotClick }) {
  return (
    <section className="mt-12 px-6 lg:px-16">
      <h2 className="text-center font-display text-2xl text-white lg:text-4xl">
        {label}
      </h2>
      <div className="mt-8 flex flex-col gap-10 lg:flex-row lg:justify-center lg:gap-12">
        {spots.map((spot, i) => (
          <SpotItem
            key={spot.name}
            {...spot}
            reverse={i % 2 === 1}
            onClick={() => onSpotClick?.(spot)}
          />
        ))}
      </div>
    </section>
  );
}