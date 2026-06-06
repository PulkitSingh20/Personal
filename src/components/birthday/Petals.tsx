const PETALS = Array.from({ length: 22 });

export function Petals() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden
    >
      {PETALS.map((_, i) => {
        const left = (i * 4.7) % 100;
        const delay = (i % 10) * 1.3;
        const duration = 12 + (i % 7) * 2;
        const size = 14 + (i % 5) * 6;
        const drift = (i % 2 === 0 ? 1 : -1) * (40 + (i % 4) * 30);
        return (
          <span
            key={i}
            className="absolute top-0 animate-float-petal"
            style={{
              left: `${left}%`,
              animationDelay: `${delay}s`,
              animationDuration: `${duration}s`,
              ["--drift" as string]: `${drift}px`,
            }}
          >
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
              <path
                d="M12 2c4 4 8 7 8 12 0 4-3.5 8-8 8s-8-4-8-8c0-5 4-8 8-12z"
                fill="#f8c8d8"
                stroke="#e88aab"
                strokeWidth="0.6"
                opacity="0.85"
              />
            </svg>
          </span>
        );
      })}
    </div>
  );
}
