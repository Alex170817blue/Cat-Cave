import Link from "next/link";
import Image from "next/image";

const rooms = [
  { name: "FOOD ROOM", slug: "food_room", img: "/food_room.png" },
  { name: "NAP ROOM", slug: "nap_room", img: "/nap_room.png" },
  { name: "WORSHIP ROOM", slug: "worship_room", img: "/worship_room.png" },
];

function RoomCard({ name, slug, img, reverse }) {
  return (
    <Link
      href={`/rooms/${slug}`}
      className={`flex h-60 w-full lg:h-[480px] lg:w-1/3 ${reverse ? "max-lg:flex-row-reverse" : "flex-row"}`}
    >
      <div className="relative h-full w-2/3">
        <Image src={img} alt={name} fill className="object-cover" />
      </div>
      <div className="flex h-full w-1/3 items-center justify-center bg-black">
        <span className="font-display rotate-180 text-lg text-white [writing-mode:vertical-rl] lg:text-2xl">
          {name}
        </span>
      </div>
    </Link>
  );
}

export default function RoomsPreview() {
  return (
    <section className="mt-16 px-6 lg:px-16">
      <h2 className="font-display text-2xl text-white lg:text-4xl">ENTER THE ROOMS</h2>
      <div className="mt-6 flex flex-col gap-4 lg:flex-row lg:gap-6">
        <RoomCard {...rooms[0]} reverse={false} />
        <RoomCard {...rooms[1]} reverse={true} />
        <RoomCard {...rooms[2]} reverse={false} />
      </div>
    </section>
  );
}