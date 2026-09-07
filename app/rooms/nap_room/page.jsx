"use client";

import RoomHero from "@/components/RoomHero";
import RoomSpots from "@/components/RoomSpots";

const paragraph =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius, diam in viverra semper, justo lacus tempor felis, sit amet dapibus massa justo nec magna. Proin tempor velit vel auctor posuere.";

const spots = [
  { name: "BOX", img: "/nap_box.png", text:"a juicy milk", audioSrc:"/napboxsound.mp3" },
  { name: "VASE", img: "/nap_vase.png", text:"a juicy milk", audioSrc:"/napvasesound.mp3" },
  { name: "GARDEN", img: "/nap_garden.png", text:"a juicy milk", audioSrc:"/napgardensound.mp3" },
  { name: "RADIATOR", img: "/nap_radiator.png", text:"a juicy milk", audioSrc:"/napradiatorsound.mp3"},
];

function playSound(spot) {
  const audio = new Audio(spot.audioSrc);
  audio.play().catch((err) => console.warn("Audio non disponibile:", err));
}

export default function NapRoomPage() {
  return (
    <main className="relative z-10 pt-24">
      <RoomHero
        titleLines={["NAP", "ROOM"]}
        heroImg="/nap_room.png"
        paragraph={paragraph}
      />
      <RoomSpots label="nap spots" spots={spots} onSpotClick={playSound} />
    </main>
  );
}