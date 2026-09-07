"use client";

import Image from "next/image";

export default function RecipeModal({ recipe, onClose }) {
  if (!recipe) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-6"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-md rounded-md border-2 border-black bg-black p-6"
      >
        <button
          onClick={onClose}
          aria-label="Chiudi"
          className="absolute top-3 right-3 font-display text-xl text-white"
        >
          ✕
        </button>

        <div className="relative mx-auto h-32 w-32 overflow-hidden rounded-full">
          <Image src={recipe.img} alt={recipe.name} fill className="object-cover" />
        </div>

        <h3 className="mt-4 text-center font-display text-2xl text-white">
          {recipe.name}
        </h3>
        <p className="mt-2 text-center font-mono text-sm text-white/80">
          prova ricetta vediamo
        </p>
      </div>
    </div>
  );
}