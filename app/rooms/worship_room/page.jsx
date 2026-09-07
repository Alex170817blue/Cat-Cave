"use client";

import RoomHero from "@/components/RoomHero";
import RoomSpots from "@/components/RoomSpots";

const paragraph =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius, diam in viverra semper, justo lacus tempor felis, sit amet dapibus massa justo nec magna. Proin tempor velit vel auctor posuere.";

const spots = [
  { name: "MEOW", img: "/entity2.png", text:"a juicy milk", audioSrc:"/entitysound1.mp3" },
  { name: "MEOW1", img: "/entity1.png", text:"a juicy milk", audioSrc:"/entitysound2.mp3" },
];

function playSound(spot) {
  const audio = new Audio(spot.audioSrc);
  audio.play().catch((err) => console.warn("Audio non disponibile:", err));
}

export default function NapRoomPage() {
  return (
    <main className="relative z-10 pt-24">
      <RoomHero
        titleLines={["WORSHIP", "ROOM"]}
        heroImg="/worship_room.png"
        paragraph={paragraph}
      />
      <RoomSpots label="entity" spots={spots} onSpotClick={playSound} />
    </main>
  );
}