import Link from "next/link";

export default function RaveButton() {
  return (
    <section className="relative mt-16 px-6 pb-12 text-center lg:px-16 lg:pb-20">
      <p className="font-mono text-sm text-white lg:text-base">or simply</p>

      <div className="relative mt-4 flex justify-center">
        <Link
          href="/rave"
          className="flex h-20 w-3/4 items-center justify-center rounded-md border-2 border-black bg-[#7ED957] transition-transform hover:scale-105 lg:h-28 lg:w-1/2"
        >
          <span className="font-display text-4xl text-white lg:text-6xl">
            RAVE
          </span>
        </Link>
      </div>
    </section>
  );
}