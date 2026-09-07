import Link from "next/link";
import Image from "next/image";

const rooms = [
  { name: "FOOD ROOM", slug: "food_room", img: "/food_room.png" },
  { name: "NAP ROOM", slug: "nap_room", img: "/nap_room.png" },
  { name: "WORSHIP ROOM", slug: "worship_room", img: "/worship_room.png" },
];

function RoomBlock({ name, slug, img, z, reverse }) {
  return (
    <Link
      href={`/rooms/${slug}`}
      className={`group relative flex h-64 w-full lg:h-96 lg:w-96 ${
        reverse ? "max-lg:justify-start" : "max-lg:justify-end"
      }`}
      style={{ zIndex: z }}
    >
      <div className="relative h-72 w-2/3 lg:w-80 lg:h-80">
        <Image src={img} alt={name} fill className="object-cover" />
        <div className="absolute inset-0 bg-black/60 transition-colors duration-300 group-hover:bg-black/10" />
      </div>

      <span
        className={`absolute bottom-3 font-display text-2xl text-white lg:bottom-2 lg:left-8 lg:text-4xl ${
          reverse ? "max-lg:right-6" : "max-lg:left-6"
        }`}
      >
        {name}
      </span>
    </Link>
  );
}

export default function RoomsList() {
  return (
    <div className="mt-13 flex flex-col lg:flex-row lg:justify-center">
      {rooms.map((room, i) => (
        <div key={room.slug} className={i > 0 ? "-mt-8 lg:mt-0 lg:-ml-12" : ""}>
          <RoomBlock {...room} z={rooms.length - i} reverse={i % 2 === 1} />
        </div>
      ))}
    </div>
  );
}