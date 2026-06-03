import { useState } from "react";

export function Cake() {
  const [blown, setBlown] = useState(false);

  const confetti = Array.from({ length: 28 });

  return (
    <section
      id="cake"
      className="relative z-10 mx-auto flex max-w-3xl flex-col items-center px-6 py-24 text-center"
    >
      <h2 className="text-4xl sm:text-5xl">
        <span className="shimmer-text">make a wish</span>
      </h2>
      <p className="mt-3 text-sm text-foreground/60">
        tap the cake to blow out the candles ✨
      </p>

      <button
        type="button"
        onClick={() => setBlown(true)}
        aria-label="Blow out the candles"
        className="group relative mt-12 cursor-pointer outline-none"
      >
        {/* Confetti */}
        {blown && (
          <div className="pointer-events-none absolute inset-0 z-20">
            {confetti.map((_, i) => {
              const angle = (i / confetti.length) * Math.PI * 2;
              const dist = 120 + (i % 5) * 30;
              const tx = Math.cos(angle) * dist;
              const ty = Math.sin(angle) * dist - 60;
              const colors = ["#e88aab", "#f8c8d8", "#c45c7c", "#fce5ee", "#ffd1dc"];
              const c = colors[i % colors.length];
              return (
                <span
                  key={i}
                  className="animate-confetti absolute left-1/2 top-1/2 block h-2 w-2 rounded-full"
                  style={{
                    background: c,
                    ["--tx" as string]: `${tx}px`,
                    ["--ty" as string]: `${ty}px`,
                  }}
                />
              );
            })}
          </div>
        )}

        {/* Cake SVG */}
        <svg
          width="260"
          height="260"
          viewBox="0 0 260 260"
          className="drop-shadow-[0_20px_40px_rgba(196,92,124,0.25)] transition-transform group-hover:scale-105"
        >
          {/* Plate */}
          <ellipse cx="130" cy="225" rx="105" ry="12" fill="#f8c8d8" opacity="0.7" />

          {/* Bottom tier */}
          <rect x="40" y="160" width="180" height="60" rx="8" fill="#fff5f8" stroke="#e88aab" strokeWidth="1.5" />
          {/* drips */}
          <path d="M40 168 Q60 185 80 168 Q100 188 120 168 Q140 185 160 168 Q180 188 200 168 Q210 180 220 168 L220 160 L40 160 Z" fill="#e88aab" />

          {/* Middle tier */}
          <rect x="65" y="115" width="130" height="50" rx="6" fill="#fff5f8" stroke="#e88aab" strokeWidth="1.5" />
          <path d="M65 122 Q85 138 105 122 Q125 140 145 122 Q165 138 185 122 Q190 130 195 122 L195 115 L65 115 Z" fill="#f8c8d8" />

          {/* Top tier */}
          <rect x="90" y="78" width="80" height="40" rx="5" fill="#fff5f8" stroke="#e88aab" strokeWidth="1.5" />
          <path d="M90 84 Q105 95 120 84 Q135 96 150 84 Q160 92 170 84 L170 78 L90 78 Z" fill="#c45c7c" />

          {/* Sprinkles */}
          {[[55,180],[90,200],[150,190],[195,180],[80,140],[155,135],[105,95],[145,100]].map(([x,y],i) => (
            <circle key={i} cx={x} cy={y} r="2" fill={["#c45c7c","#e88aab","#fff","#f8c8d8"][i % 4]} />
          ))}

          {/* Candles */}
          {[110, 130, 150].map((x) => (
            <g key={x}>
              <rect x={x - 3} y="50" width="6" height="28" rx="1" fill="#fff" stroke="#e88aab" strokeWidth="1" />
              <rect x={x - 3} y="55" width="6" height="2" fill="#e88aab" />
              <rect x={x - 3} y="62" width="6" height="2" fill="#e88aab" />
              <rect x={x - 3} y="69" width="6" height="2" fill="#e88aab" />
              {/* wick */}
              <line x1={x} y1="50" x2={x} y2="46" stroke="#3a2a2a" strokeWidth="1" />
              {/* flame */}
              {!blown && (
                <g className="animate-flicker" style={{ transformOrigin: `${x}px 46px` }}>
                  <ellipse cx={x} cy="40" rx="4" ry="7" fill="#ffb347" />
                  <ellipse cx={x} cy="42" rx="2.2" ry="4" fill="#fff3a8" />
                </g>
              )}
              {/* smoke */}
              {blown && (
                <path
                  d={`M${x} 46 q4 -8 -2 -14 q-6 -6 2 -14`}
                  stroke="#c9b9be"
                  strokeWidth="1.4"
                  fill="none"
                  opacity="0.7"
                />
              )}
            </g>
          ))}
        </svg>
      </button>

      <div
        className={`mt-10 transition-all duration-700 ${
          blown ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
        }`}
      >
        <p
          className="text-2xl text-accent sm:text-3xl"
          style={{ fontFamily: "var(--font-script)" }}
        >
          wish made.
        </p>
        <p className="mt-2 text-sm text-foreground/70">
          (i kinda hope it was me 💌)
        </p>
      </div>
    </section>
  );
}
