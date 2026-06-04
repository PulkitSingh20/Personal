import floral from "@/assets/hero-floral.jpg.asset.json";

const SPARKLES = Array.from({ length: 28 });

export function Hero() {
  return (
    <section className="relative z-10 flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center">
      {/* Floral background */}
      <div className="absolute inset-0 -z-10">
        <img
          src={floral.url}
          alt=""
          aria-hidden
          className="h-full w-full object-cover"
        />
        {/* soft wash so text stays readable */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/30 to-background/80" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_rgba(255,240,245,0.45)_70%)]" />
      </div>

      {/* Sparkles & glowing particles */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden>
        {SPARKLES.map((_, i) => {
          const left = (i * 53) % 100;
          const top = (i * 37) % 100;
          const size = 4 + (i % 5) * 2;
          const delay = (i % 8) * 0.6;
          const duration = 3 + (i % 5);
          const isGlow = i % 3 === 0;
          return (
            <span
              key={i}
              className={`absolute rounded-full ${isGlow ? "animate-flicker bg-accent/40 blur-md" : "animate-flicker bg-white"}`}
              style={{
                left: `${left}%`,
                top: `${top}%`,
                width: `${isGlow ? size * 3 : size}px`,
                height: `${isGlow ? size * 3 : size}px`,
                animationDelay: `${delay}s`,
                animationDuration: `${duration}s`,
                boxShadow: isGlow
                  ? "0 0 24px 8px rgba(232,138,171,0.45)"
                  : "0 0 10px 2px rgba(255,255,255,0.9)",
              }}
            />
          );
        })}
      </div>

      <p className="animate-fade-up text-xs uppercase tracking-[0.5em] text-accent/80 sm:text-sm">
        a little something, just for you
      </p>

      <h1
        className="mt-6 animate-fade-up text-5xl leading-[1.05] sm:text-7xl md:text-8xl"
        style={{ animationDelay: "0.15s" }}
      >
        <span className="shimmer-text font-medium">Happy Birthday,</span>
        <br />
        <span
          className="text-accent"
          style={{ fontFamily: "var(--font-script)" }}
        >
          Shrishti
        </span>
        <span className="ml-2 inline-block animate-heartbeat">🎂</span>
      </h1>

      <p
        className="mt-8 max-w-xl animate-fade-up text-base text-foreground/75 sm:text-lg"
        style={{ animationDelay: "0.35s", fontFamily: "var(--font-serif)" }}
      >
        A special day for a truly special person.
      </p>

      <a
        href="#cake"
        className="group mt-12 inline-flex animate-fade-up items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-medium tracking-wide text-primary-foreground shadow-[0_15px_40px_-10px_rgba(196,92,124,0.65)] transition-all hover:scale-105 hover:shadow-[0_20px_50px_-10px_rgba(196,92,124,0.8)] sm:text-base"
        style={{ animationDelay: "0.55s" }}
      >
        Open My Wishes
        <span className="transition-transform group-hover:translate-x-1">→</span>
      </a>
    </section>
  );
}
