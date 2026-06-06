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
          width="280"
          height="300"
          viewBox="0 0 280 300"
          className="drop-shadow-[0_24px_50px_rgba(196,92,124,0.3)] transition-transform group-hover:scale-105"
        >
          <defs>
            <linearGradient id="cakeBody" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#fff0f5" />
              <stop offset="100%" stopColor="#f6c9d8" />
            </linearGradient>
            <linearGradient id="cakeBodyMid" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#fff5f8" />
              <stop offset="100%" stopColor="#f0b6cb" />
            </linearGradient>
            <linearGradient id="cakeBodyTop" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#fff8fb" />
              <stop offset="100%" stopColor="#e88aab" />
            </linearGradient>
            <linearGradient id="frosting" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="100%" stopColor="#fce5ee" />
            </linearGradient>
            <radialGradient id="cherry" cx="0.35" cy="0.35" r="0.7">
              <stop offset="0%" stopColor="#ff8aa1" />
              <stop offset="60%" stopColor="#d63a5d" />
              <stop offset="100%" stopColor="#8e1a36" />
            </radialGradient>
            <radialGradient id="flame" cx="0.5" cy="0.7" r="0.6">
              <stop offset="0%" stopColor="#fff6c2" />
              <stop offset="60%" stopColor="#ffb347" />
              <stop offset="100%" stopColor="#ff6b3d" />
            </radialGradient>
          </defs>

          {/* Plate */}
          <ellipse cx="140" cy="252" rx="118" ry="12" fill="#c45c7c" opacity="0.25" />
          <ellipse cx="140" cy="248" rx="115" ry="10" fill="#fff" opacity="0.9" />
          <ellipse cx="140" cy="246" rx="115" ry="8" fill="#fce5ee" />

          {/* ---------- Bottom tier ---------- */}
          <rect x="38" y="178" width="204" height="70" rx="10" fill="url(#cakeBody)" />
          {/* horizontal cream stripe */}
          <rect x="38" y="212" width="204" height="6" fill="#fff" opacity="0.55" />
          {/* shading */}
          <rect x="38" y="178" width="204" height="70" rx="10" fill="#000" opacity="0.04" />
          {/* drippy frosting top */}
          <path
            d="M38 182
               Q55 205 72 188
               Q90 215 110 190
               Q130 218 150 188
               Q170 215 188 190
               Q206 215 224 188
               Q236 200 242 184
               L242 178 L38 178 Z"
            fill="url(#frosting)"
          />
          {/* drip blobs */}
          {[[72, 207], [110, 210], [150, 212], [188, 210], [224, 207]].map(([x, y], i) => (
            <circle key={i} cx={x} cy={y} r="4" fill="#fff" opacity="0.85" />
          ))}
          {/* sprinkles on bottom tier */}
          {[[60,225,0],[80,232,40],[105,222,-20],[135,230,15],[165,222,-35],[195,232,25],[220,225,-10]].map(([x,y,r],i) => (
            <rect key={i} x={x as number} y={y as number} width="6" height="2.4" rx="1.2"
              fill={["#c45c7c","#e88aab","#a78bfa","#f0d78c","#6ec1c1"][i % 5]}
              transform={`rotate(${r} ${x} ${y})`} />
          ))}

          {/* ---------- Middle tier ---------- */}
          <rect x="68" y="128" width="144" height="56" rx="8" fill="url(#cakeBodyMid)" />
          <rect x="68" y="156" width="144" height="5" fill="#fff" opacity="0.55" />
          <path
            d="M68 132
               Q85 152 102 138
               Q120 158 140 138
               Q160 158 178 138
               Q195 152 212 132
               L212 128 L68 128 Z"
            fill="url(#frosting)"
          />
          {/* piped rosettes around top edge */}
          {[78, 102, 126, 154, 178, 202].map((x, i) => (
            <g key={i}>
              <circle cx={x} cy="132" r="5" fill="#fff" />
              <circle cx={x} cy="132" r="2.4" fill="#f8c8d8" />
            </g>
          ))}
          {/* sprinkles on middle tier */}
          {[[85,170,20],[115,164,-25],[150,172,10],[180,164,-15]].map(([x,y,r],i) => (
            <rect key={i} x={x as number} y={y as number} width="5" height="2" rx="1"
              fill={["#c45c7c","#a78bfa","#6ec1c1","#f0d78c"][i % 4]}
              transform={`rotate(${r} ${x} ${y})`} />
          ))}

          {/* ---------- Top tier ---------- */}
          <rect x="95" y="82" width="90" height="48" rx="6" fill="url(#cakeBodyTop)" />
          <rect x="95" y="106" width="90" height="4" fill="#fff" opacity="0.5" />
          <path
            d="M95 86
               Q108 102 122 90
               Q140 108 158 90
               Q172 102 185 86
               L185 82 L95 82 Z"
            fill="url(#frosting)"
          />
          {/* rosettes on top tier */}
          {[105, 125, 145, 165].map((x, i) => (
            <g key={i}>
              <circle cx={x} cy="86" r="4" fill="#fff" />
              <circle cx={x} cy="86" r="1.8" fill="#e88aab" />
            </g>
          ))}
          {/* cherries on top edge */}
          {[110, 140, 170].map((x, i) => (
            <g key={i}>
              <circle cx={x} cy="84" r="4.5" fill="url(#cherry)" />
              <path d={`M${x} 80 q2 -6 6 -8`} stroke="#5a8a3a" strokeWidth="1.4" fill="none" strokeLinecap="round" />
              <ellipse cx={x - 1.5} cy="83" rx="1" ry="0.6" fill="#fff" opacity="0.7" />
            </g>
          ))}

          {/* ---------- Candles ---------- */}
          {[115, 140, 165].map((x) => (
            <g key={x}>
              {/* candle body with stripes */}
              <rect x={x - 3.5} y="50" width="7" height="32" rx="1.5" fill="#fff" stroke="#e88aab" strokeWidth="1" />
              <rect x={x - 3.5} y="54" width="7" height="3" fill="#e88aab" opacity="0.85" />
              <rect x={x - 3.5} y="62" width="7" height="3" fill="#c45c7c" opacity="0.8" />
              <rect x={x - 3.5} y="70" width="7" height="3" fill="#e88aab" opacity="0.85" />
              {/* drip down candle */}
              <path d={`M${x - 3.5} 80 q3.5 4 7 0 L${x + 3.5} 82 L${x - 3.5} 82 Z`} fill="#fff" />
              {/* wick */}
              <line x1={x} y1="50" x2={x} y2="44" stroke="#3a2a2a" strokeWidth="1.4" strokeLinecap="round" />
              {/* flame */}
              {!blown && (
                <g className="animate-flicker" style={{ transformOrigin: `${x}px 44px` }}>
                  <ellipse cx={x} cy="36" rx="5" ry="9" fill="url(#flame)" />
                  <ellipse cx={x} cy="38" rx="2.4" ry="5" fill="#fff6c2" opacity="0.95" />
                  <circle cx={x} cy="34" r="1.6" fill="#fff" opacity="0.9" />
                </g>
              )}
              {/* smoke */}
              {blown && (
                <path
                  d={`M${x} 44 q4 -8 -2 -14 q-6 -6 2 -14`}
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
