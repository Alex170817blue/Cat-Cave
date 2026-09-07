import Image from "next/image";

const citizens = [
  { slug: "cit1", name: "NAME", img: "/cit1.png", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius, diam in viverra semper, justo lacus tempor felis." },
  { slug: "cit2", name: "NAME", img: "/cit2.png", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius, diam in viverra semper, justo lacus tempor felis." },
  { slug: "cit3", name: "NAME", img: "/cit3.png", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius, diam in viverra semper, justo lacus tempor felis." },
  { slug: "cit4", name: "NAME", img: "/cit4.png", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius, diam in viverra semper, justo lacus tempor felis." },
  { slug: "cit5", name: "NAME", img: "/cit5.png", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius, diam in viverra semper, justo lacus tempor felis." },
  { slug: "cit6", name: "NAME", img: "/cit6.png", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius, diam in viverra semper, justo lacus tempor felis." },
];

export default function CitizensPage() {
  return (
    <main className="relative z-10 px-6 pt-24 text-center lg:px-16">
      <h1 className="font-display text-6xl leading-none text-white lg:text-8xl">
        CATIZENS
      </h1>

      <p className="mt-8 font-mono text-lg text-white lg:text-2xl">
        MEET THE CITIZENS
      </p>

      <div className="mt-12 flex flex-col gap-16 lg:gap-24">
        {citizens.map((citizen) => (
          <section
            key={citizen.slug}
            id={citizen.slug}
            className="scroll-mt-28 flex flex-col items-center"
          >
            <div className="relative h-40 w-40 lg:h-56 lg:w-56">
              <Image
                src={citizen.img}
                alt={citizen.name}
                fill
                className="object-contain"
              />
            </div>
            <h2 className="mt-4 font-display text-xl text-white lg:text-2xl">
              {citizen.name}
            </h2>
            <p className="mt-2 max-w-xs font-mono text-sm leading-relaxed text-white lg:max-w-md lg:text-base">
              {citizen.text}
            </p>
          </section>
        ))}
      </div>
    </main>
  );
}