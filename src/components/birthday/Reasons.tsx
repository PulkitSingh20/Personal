const REASONS = [
  {
    n: "01",
    t: "your laugh",
    d: "the one you try to hide behind your hand — it's my favourite sound.",
  },
  {
    n: "02",
    t: "the way you care",
    d: "softly, quietly, in a hundred small ways nobody notices but me.",
  },
  {
    n: "03",
    t: "your 2am thoughts",
    d: "the unhinged, the brilliant, the ones only i get to hear.",
  },
  {
    n: "04",
    t: "your kindness",
    d: "you make everyone feel a little more seen, a little more loved.",
  },
  {
    n: "05",
    t: "your eyes",
    d: "they say more than your words do — and your words are already a lot.",
  },
  {
    n: "06",
    t: "just you",
    d: "exactly as you are. nothing to add, nothing to change. just you.",
  },
];

export function Reasons() {
  return (
    <section
      id="reasons"
      className="relative z-10 mx-auto max-w-6xl px-6 py-24"
    >
      <div className="mb-14 text-center">
        <p className="text-sm uppercase tracking-[0.4em] text-accent/80">
          a small list
        </p>
        <h2 className="mt-3 text-4xl sm:text-5xl">
          reasons i adore <span className="italic text-accent">you</span>
        </h2>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {REASONS.map((r, i) => (
          <article
            key={r.n}
            className="group relative overflow-hidden rounded-3xl border border-secondary/60 bg-card/70 p-7 backdrop-blur transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_50px_-20px_rgba(196,92,124,0.35)]"
            style={{ animationDelay: `${i * 80}ms` }}
          >
            <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-secondary/40 blur-2xl transition-opacity group-hover:opacity-80" />
            <span
              className="relative text-xs tracking-[0.3em] text-accent/70"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              {r.n}
            </span>
            <h3 className="relative mt-3 text-2xl text-foreground">{r.t}</h3>
            <p className="relative mt-3 text-sm leading-relaxed text-foreground/70">
              {r.d}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
