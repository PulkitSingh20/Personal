import m1 from "@/assets/memory-1.jpg";
import m2 from "@/assets/memory-2.jpg";
import m3 from "@/assets/memory-3.jpg";
import m4 from "@/assets/memory-4.jpg";
import m5 from "@/assets/memory-5.jpg";
import m6 from "@/assets/memory-6.jpg";

const ITEMS = [
  { src: m1, caption: "soft sundays", rot: -4 },
  { src: m2, caption: "late letters", rot: 3 },
  { src: m3, caption: "pink skies", rot: -2 },
  { src: m4, caption: "sweet things", rot: 4 },
  { src: m5, caption: "for you, always", rot: -3 },
  { src: m6, caption: "floating", rot: 2 },
];

export function Memories() {
  return (
    <section className="relative z-10 mx-auto max-w-6xl px-6 py-24">
      <div className="mb-14 text-center">
        <p className="text-sm uppercase tracking-[0.4em] text-accent/80">moments</p>
        <h2 className="mt-3 text-4xl sm:text-5xl">a tiny gallery of us</h2>
        <p className="mx-auto mt-4 max-w-md text-sm text-foreground/60">
          placeholder polaroids for now — swap them with our real ones whenever you'd like ✨
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {ITEMS.map((it, i) => (
          <figure
            key={i}
            className="mx-auto w-full max-w-[280px] rounded-sm bg-white p-3 pb-12 shadow-[0_15px_30px_-15px_rgba(196,92,124,0.4)] transition-all duration-500 hover:rotate-0 hover:scale-105 hover:shadow-[0_25px_50px_-20px_rgba(196,92,124,0.5)]"
            style={{ transform: `rotate(${it.rot}deg)` }}
          >
            <div className="relative overflow-hidden">
              <img
                src={it.src}
                alt={it.caption}
                loading="lazy"
                width={768}
                height={768}
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
    </section>
  );
}
