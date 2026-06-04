import { useEffect, useState } from "react";
import m1 from "@/assets/shushh1.jpeg.asset.json";
import m2 from "@/assets/shushh6.jpeg.asset.json";
import m3 from "@/assets/shushh5.jpeg.asset.json";
import m4 from "@/assets/shushh3.jpeg.asset.json";
import m5 from "@/assets/shushh7.jpeg.asset.json";
import m6 from "@/assets/shushh10.jpeg.asset.json";
import m7 from "@/assets/shushh8.jpeg.asset.json";
import m8 from "@/assets/shushh9.jpeg.asset.json";



const ITEMS = [
  { src: m1.url, caption: "sunlit & smiling", rot: -4 },
  { src: m6.url, caption: "flower-in-your-hair kind of day", rot: 2 },
  { src: m2.url, caption: "petals & you", rot: 3 },
  { src: m7.url, caption: "soft, just you", rot: -3 },
  { src: m3.url, caption: "golden hour, you", rot: -2 },
  { src: m8.url, caption: "hearts everywhere ♡", rot: 4 },
  { src: m4.url, caption: "that little smile", rot: 4 },
  { src: m5.url, caption: "warm light, warmer you", rot: -3 },
];

export function Memories() {
  const [playing, setPlaying] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!playing) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % ITEMS.length), 3500);
    return () => clearInterval(id);
  }, [playing]);

  useEffect(() => {
    if (!playing) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setPlaying(false);
      if (e.key === "ArrowRight") setIndex((i) => (i + 1) % ITEMS.length);
      if (e.key === "ArrowLeft") setIndex((i) => (i - 1 + ITEMS.length) % ITEMS.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [playing]);

  return (
    <section className="relative z-10 mx-auto max-w-6xl px-6 py-24">
      <div className="mb-10 text-center">
        <p className="text-sm uppercase tracking-[0.4em] text-accent/80">moments</p>
        <h2 className="mt-3 text-4xl sm:text-5xl">a tiny gallery of you</h2>
        <p className="mx-auto mt-4 max-w-md text-sm text-foreground/60">
          a few of my favourites ✨
        </p>
        <button
          type="button"
          onClick={() => { setIndex(0); setPlaying(true); }}
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground shadow-[0_10px_25px_-10px_rgba(196,92,124,0.6)] transition-transform hover:scale-105"
        >
          ▶ play slideshow
        </button>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {ITEMS.map((it, i) => (
          <figure
            key={i}
            className="mx-auto w-full max-w-[280px] cursor-pointer rounded-sm bg-white p-3 pb-12 shadow-[0_15px_30px_-15px_rgba(196,92,124,0.4)] transition-all duration-500 hover:rotate-0 hover:scale-105 hover:shadow-[0_25px_50px_-20px_rgba(196,92,124,0.5)]"
            style={{ transform: `rotate(${it.rot}deg)` }}
            onClick={() => { setIndex(i); setPlaying(true); }}
          >
            <div className="relative overflow-hidden bg-secondary/30">
              <img
                src={it.src}
                alt={it.caption}
                loading="lazy"
                className="aspect-square w-full object-cover"
              />
            </div>
            <figcaption
              className="mt-3 text-center text-xl text-accent"
              style={{ fontFamily: "var(--font-script)" }}
            >
              {it.caption}
            </figcaption>
          </figure>
        ))}
      </div>

      {playing && (
        <Slideshow
          index={index}
          setIndex={setIndex}
          onClose={() => setPlaying(false)}
        />
      )}
    </section>
  );
}

function Slideshow({
  index,
  setIndex,
  onClose,
}: {
  index: number;
  setIndex: (updater: (i: number) => number) => void;
  onClose: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(40,15,25,0.85)] backdrop-blur-xl animate-fade-up"
      onClick={onClose}
      role="dialog"
      aria-label="Photo slideshow"
    >
      {/* close */}
      <button
        type="button"
        onClick={(e) => { e.stopPropagation(); onClose(); }}
        className="absolute right-6 top-6 z-10 rounded-full bg-white/10 px-4 py-2 text-sm text-white backdrop-blur transition hover:bg-white/20"
      >
        close ✕
      </button>

      {/* prev */}
      <button
        type="button"
        onClick={(e) => { e.stopPropagation(); setIndex((i) => (i - 1 + ITEMS.length) % ITEMS.length); }}
        className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white backdrop-blur transition hover:scale-110 hover:bg-white/20 sm:left-8"
        aria-label="Previous"
      >
        ←
      </button>

      {/* next */}
      <button
        type="button"
        onClick={(e) => { e.stopPropagation(); setIndex((i) => (i + 1) % ITEMS.length); }}
        className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white backdrop-blur transition hover:scale-110 hover:bg-white/20 sm:right-8"
        aria-label="Next"
      >
        →
      </button>

      {/* slides */}
      <div
        className="relative h-[78vh] w-[min(90vw,720px)]"
        onClick={(e) => e.stopPropagation()}
      >
        {ITEMS.map((it, i) => (
          <figure
            key={i}
            className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-1000 ease-out ${
              i === index ? "opacity-100 scale-100" : "pointer-events-none opacity-0 scale-95"
            }`}
          >
            <div className="relative max-h-[65vh] overflow-hidden rounded-sm bg-white p-3 shadow-[0_30px_80px_-20px_rgba(196,92,124,0.5)]">
              <img
                src={it.src}
                alt={it.caption}
                className="max-h-[60vh] w-auto object-contain"
              />
            </div>
            <figcaption
              className="mt-6 text-3xl text-white sm:text-4xl"
              style={{ fontFamily: "var(--font-script)" }}
            >
              {it.caption}
            </figcaption>
          </figure>
        ))}
      </div>

      {/* dots */}
      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 gap-2">
        {ITEMS.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={(e) => { e.stopPropagation(); setIndex(() => i); }}
            className={`h-2 rounded-full transition-all ${
              i === index ? "w-8 bg-white" : "w-2 bg-white/40 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
