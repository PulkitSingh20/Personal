import { useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import floral from "@/assets/hero-floral.jpg";

const SPARKLES = Array.from({ length: 28 });
const BURST = Array.from({ length: 36 });
const COLORS = [
  "#e88aab",
  "#f8c8d8",
  "#c45c7c",
  "#fce5ee",
  "#ffd1dc",
  "#ffffff",
];

export function Hero() {
  const [burstId, setBurstId] = useState(0);
  const [leaving, setLeaving] = useState(false);
  const navigate = useNavigate();

  const handleOpenWishes = () => {
    setBurstId((n) => n + 1);
    setTimeout(() => setLeaving(true), 350);
    setTimeout(() => {
      navigate({ to: "/wishes" });
    }, 1000);
  };

  return (
    <section
      className={`relative z-10 flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center transition-all duration-700 ease-out ${
        leaving
          ? "-translate-y-6 opacity-0 blur-sm"
          : "translate-y-0 opacity-100"
      }`}
    >
      {/* Floral background */}
      <div className="absolute inset-0 -z-10">
        <img
          src={floral}
          alt=""
          aria-hidden
          className="h-full w-full object-cover"
        />
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

      <h1 className="mt-6 animate-fade-up text-5xl font-semibold leading-tight sm:text-6xl md:text-7xl">
        <span className="shimmer-text">Happy Birthday, Shrishti</span>{" "}
        <span
          className="inline-block animate-bounce select-none text-4xl sm:text-5xl"
          style={{
            fontFamily:
              '"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", sans-serif',
            animationDuration: "2.5s",
          }}
        >
          🎂
        </span>
      </h1>

      <p
        className="mt-8 max-w-xl animate-fade-up text-base text-foreground/75 sm:text-lg"
        style={{ animationDelay: "0.35s", fontFamily: "var(--font-serif)" }}
      >
        A special day for a truly special person.
      </p>

      <div className="relative mt-12 flex flex-col items-center gap-8">
        {/* Confetti + sparkle burst, re-keyed on each click */}
        {burstId > 0 && (
          <div
            key={burstId}
            className="pointer-events-none absolute left-1/2 top-1/2 z-20 h-0 w-0"
            aria-hidden
          >
            {BURST.map((_, i) => {
              const angle = (i / BURST.length) * Math.PI * 2;
              const dist = 90 + (i % 6) * 25;
              const tx = Math.cos(angle) * dist;
              const ty = Math.sin(angle) * dist - 30;
              const c = COLORS[i % COLORS.length];
              const isSparkle = i % 3 === 0;
              return (
                <span
                  key={i}
                  className="animate-confetti absolute block"
                  style={{
                    background: c,
                    width: isSparkle ? "6px" : "8px",
                    height: isSparkle ? "6px" : "10px",
                    borderRadius: isSparkle ? "9999px" : "2px",
                    boxShadow: isSparkle
                      ? `0 0 12px 3px ${c}`
                      : "0 2px 6px rgba(196,92,124,0.35)",
                    ["--tx" as string]: `${tx}px`,
                    ["--ty" as string]: `${ty}px`,
                  }}
                />
              );
            })}
          </div>
        )}

        <button
          type="button"
          onClick={handleOpenWishes}
          className="group inline-flex animate-fade-up items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-medium tracking-wide text-primary-foreground shadow-[0_15px_40px_-10px_rgba(196,92,124,0.65)] transition-all hover:scale-105 hover:shadow-[0_20px_50px_-10px_rgba(196,92,124,0.8)] sm:text-base"
          style={{ animationDelay: "0.55s" }}
        >
          Blow the Candles
          <span className="transition-transform group-hover:translate-x-1">
            →
          </span>
        </button>

        {/* Spotify Embedded Bar */}
        <div
          className="w-full max-w-[320px] animate-fade-up rounded-2xl border border-secondary/60 bg-card/50 p-1.5 shadow-[0_10px_30px_-15px_rgba(196,92,124,0.3)] backdrop-blur transition-all duration-300 hover:shadow-[0_15px_40px_-15px_rgba(196,92,124,0.4)]"
          style={{ animationDelay: "0.75s" }}
        >
          <iframe
            title="Birthday Spotify Track"
            src="https://open.spotify.com/embed/track/6c4Po8zyQjB4cR5XgLhcGb?utm_source=generator&theme=0"
            width="100%"
            height="80"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            className="rounded-xl"
          />
        </div>
      </div>
    </section>
  );
}
