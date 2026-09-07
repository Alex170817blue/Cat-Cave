import Image from "next/image";

export default function RoomHero({ titleLines, heroImg, paragraph }) {
  return (
    <section className="relative -mx-6 lg:mx-0">
      <div className="top-10 relative h-[400px] w-full lg:h-[600px]">
        <Image
          src={heroImg}
          alt={titleLines.join(" ")}
          fill
          className="object-cover"
          priority
        />
      </div>

      <h1 className="absolute top-0 right-8 z-20 text-right font-display leading-none lg:top-10 lg:right-12">
        {titleLines.map((line) => (
          <span key={line} className="block text-8xl text-white lg:text-9xl">
            {line}
          </span>
        ))}
      </h1>

      <p className="relative z-10 px-6 py-6 font-mono text-sm leading-relaxed text-white lg:px-16 lg:text-base">
        {paragraph}
      </p>
    </section>
  );
}