export function Wishes() {
  return (
    <section className="relative z-10 mx-auto max-w-3xl px-6 py-24">
      <div className="relative rounded-[2rem] border border-secondary/60 bg-card/80 p-10 shadow-[0_30px_80px_-40px_rgba(196,92,124,0.4)] backdrop-blur sm:p-14">
        <div className="absolute -left-3 -top-3 h-8 w-8 rounded-full bg-primary/80" />
        <div className="absolute -right-3 -bottom-3 h-8 w-8 rounded-full bg-accent/70" />

        <p className="text-sm uppercase tracking-[0.4em] text-accent/80">
          a little letter
        </p>
        <h2 className="mt-4 text-4xl sm:text-5xl">
          for your <span className="italic text-accent">year ahead</span>
        </h2>

        <div className="mt-8 space-y-5 text-base leading-relaxed text-foreground/80 sm:text-lg">
          <p>
            Shrishti — i hope this year is gentle with you. i hope it brings you
            slow mornings, songs you'll loop a hundred times, books that change
            you a little, and at least one ridiculous, uncontrollable belly
            laugh per week.
          </p>
          <p>
            i hope you get everything you've been quietly wishing for. and the
            things you haven't dared to wish for yet — i hope those find you
            too.
          </p>
          <p>
            and through all of it, however near or far i happen to be, i hope
            you always know there's someone, somewhere, who thinks the world is
            just a bit more beautiful because you're in it.
          </p>
        </div>

        <p
          className="mt-10 text-right text-3xl text-accent sm:text-4xl"
          style={{ fontFamily: "var(--font-script)" }}
        >
          always, me 💌
        </p>
      </div>
    </section>
  );
}
