export function Hero() {
  return (
    <section className="relative z-10 flex min-h-[92vh] flex-col items-center justify-center px-6 text-center">
      <p className="animate-fade-up text-sm uppercase tracking-[0.4em] text-accent/80">
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
        <span className="ml-2 inline-block animate-heartbeat">🌸</span>
      </h1>

      <p
        className="mt-8 max-w-xl animate-fade-up text-base text-foreground/70 sm:text-lg"
        style={{ animationDelay: "0.35s" }}
      >
        to my favourite person — my almost-something, my always.
        today the world gets a little softer, a little prettier,
        because <em>you</em> arrived in it.
      </p>

      <a
        href="#cake"
        className="mt-12 inline-flex animate-fade-up items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-medium tracking-wide text-primary-foreground shadow-[0_10px_30px_-10px_rgba(196,92,124,0.6)] transition-transform hover:scale-105"
        style={{ animationDelay: "0.55s" }}
      >
        make a wish ↓
      </a>
    </section>
  );
}
