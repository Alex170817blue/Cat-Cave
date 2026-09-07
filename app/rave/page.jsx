import Script from "next/script";

const videoUrls = [
  "https://vm.tiktok.com/ZN81GuYpn/",
  "https://vm.tiktok.com/ZN81GChGU/",
  "https://vm.tiktok.com/ZN81GCUnC/",
];

async function getEmbed(url) {
  const res = await fetch(
    `https://www.tiktok.com/oembed?url=${encodeURIComponent(url)}`,
    { next: { revalidate: 3600 } } 
  );
  if (!res.ok) return null;
  return res.json();
}

export default async function RavePage() {
  const embeds = await Promise.all(videoUrls.map(getEmbed));

  return (
    <main className="relative z-10 px-6 pt-24 lg:px-16">
      <h1 className="font-display text-4xl text-white lg:text-6xl">RAVE</h1>
      <p className="mt-2 font-mono text-sm text-white">
        credit {" "}
        
          <a href="https://www.tiktok.com/@cleoemo"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
          >
          @cleoemo
        </a>
      </p>

      <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {embeds.map((embed, i) =>
          embed ? (
            <div key={i} dangerouslySetInnerHTML={{ __html: embed.html }} />
          ) : (
            <p key={i} className="font-mono text-sm text-red-400">
              Rave non disponibile. Momento delle nanne
            </p>
          )
        )}
      </div>

      {/* script ufficiale TikTok  */}
      <Script src="https://www.tiktok.com/embed.js" strategy="lazyOnload" />
    </main>
  );
}