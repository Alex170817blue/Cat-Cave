"use client";

import { useState } from "react";
import RoomHero from "@/components/RoomHero";
import RoomSpots from "@/components/RoomSpots";
import RecipeModal from "@/components/RecipeModal";

const paragraph =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius, diam in viverra semper, justo lacus tempor felis, sit amet dapibus massa justo nec magna. Proin tempor velit vel auctor posuere.";

const spots = [
  { name: "SPACE MILK", img: "/space_milk.png", text: "a juicy milk" },
  { name: "SALMON", img: "/salmon.png", text: "a juicy milk" },
  { name: "CATNIP", img: "/catnip.png", text: "a juicy milk" },
];

export default function FoodRoomPage() {
  const [activeRecipe, setActiveRecipe] = useState(null);

  return (
    <main className="relative z-10 pt-24">
      <RoomHero
        titleLines={["FOOD", "ROOM"]}
        heroImg="/food_room.png"
        paragraph={paragraph}
      />
      <RoomSpots label="recipes" spots={spots} onSpotClick={setActiveRecipe} />
      <RecipeModal recipe={activeRecipe} onClose={() => setActiveRecipe(null)} />
    </main>
  );
}