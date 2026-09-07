import Image from "next/image";
import RoomsPreview from "@/components/RoomsPreview";
import CitizensPreview from "@/components/CitizensPreview";
import RaveButton from "@/components/RaveButton";

export default function Home() {
  return (
    
    <main className="relative z-10 px-8 pt-24 lg:px-16 lg:pt-32">
      <section className="relative -mx-5 mt-8 lg:mx-0 lg:mt-0">

        <div className="relative h-[420px] w-full lg:h-[600px]">
          <Image
            src="/home_page_img.png"
            alt="immagine graffiti"
            fill
            className="object-cover"
            priority
          />
          {/* gradiente */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black" />
        </div>

      <h1 className="absolute top-10 right-6 z-20 text-right font-display leading-none lg:top-16 lg:right-12">
        <span className="block text-5xl text-white sm:text-4xl lg:text-7x1">
          WHAT IS
        </span>
        <span className="block text-8xl text-white sm:text-8xl lg:text-[10rem]">
          CAVE?
        </span>
      </h1>

        {/* testo sovrapposto placeholder */}
        <p className="relative z-10 -mt-32 px-6 font-mono text-sm leading-relaxed text-white lg:mt-20 lg:max-w-xl lg:px-12 lg:text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius,
          diam in viverra semper, justo lacus tempor felis, sit amet dapibus
          massa justo nec magna. Proin tempor velit vel auctor posuere. Aenean
          suscipit cursus erat, eget mollis nunc posuere at. Maecenas interdum
          sit amet purus et convallis. Etiam posuere tempor dictum. Quisque
          non tellus molestie, bibendum elit sit amet, condimentum elit.
          Morbi finibus ac dolor at faucibus. Nulla quam lectus, bibendum a
          ante dapibus, ornare accumsan sapien.
        </p>
      </section>
    <RoomsPreview/>
    <CitizensPreview/>
    <RaveButton/>

    </main>
  );
}