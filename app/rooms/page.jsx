import RoomsList from "@/components/RoomsList";

const paragraph =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius, diam in viverra semper, justo lacus tempor felis, sit amet dapibus massa justo nec magna. Proin tempor velit vel auctor posuere.";

export default function RoomsPage() {
  return (
    <main className="relative z-10 px-6 pt-24 lg:px-16">
      <h1 className="font-display text-5xl text-white lg:text-7xl">ROOMS</h1>
      <p className="mt-4 font-mono text-sm leading-relaxed text-white lg:text-base">
        {paragraph}
      </p>
      <RoomsList />
    </main>
  );
}