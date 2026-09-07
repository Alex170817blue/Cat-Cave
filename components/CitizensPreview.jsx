import Link from "next/link";
import Image from "next/image";

const citizens = [
    { name: "CITIZEN 1", slug:"cit1", img: "/cit1.png"},
    { name: "CITIZEN 2", slug: "cit2", img:"/cit2.png"},
    { name: "CITIZEN 3", slug: "cit3", img:"/cit3.png"},
    { name: "CITIZEN 4", slug: "cit4", img: "/cit4.png"},
    { name: "CITIZEN 5", slug: "cit5", img:"/cit5.png"},
    { name: "CITIZEN 6", slug: "cit6", img: "/cit6.png"},
];

function CitizenCard({ name, slug, img}) {
    return(
        <Link
      href={`/citizens#${slug}`}
      className="flex flex-col items-center gap-2"
    >
      <div className="relative h-28 w-28">
        <Image src={img} alt={name} fill className="object-contain" />
      </div>
      <span className="font-display text-sm text-white">{name}</span>
    </Link>
  );
}

export default function CitizensPreview() {
  return (
    <section className="mt-16 px-6 text-center lg:px-16">
      <h2 className="font-display text-2xl text-white lg:text-4xl">MEET THE CITIZENS</h2>
      <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-8 lg:grid-cols-6 lg:gap-x-6">
        {citizens.map((citizen) => (
          <CitizenCard key={citizen.slug} {...citizen} />
        ))}
      </div>
    </section>
  );
}
