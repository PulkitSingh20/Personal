import { useState } from "react";
import { Music, X } from "lucide-react";

const TRACK_ID = "6c4Po8zyQjB4cR5XgLhcGb";

export function MusicPlayer() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-2">
      {open && (
        <div className="animate-fade-up overflow-hidden rounded-2xl border border-primary/30 bg-background/80 shadow-[0_15px_40px_-10px_rgba(196,92,124,0.55)] backdrop-blur">
          <iframe
            title="Birthday song"
            src={`https://open.spotify.com/embed/track/${TRACK_ID}?utm_source=generator&theme=0`}
            width="320"
            height="152"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            className="block"
          />
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Hide music player" : "Show music player"}
        className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-[0_15px_30px_-10px_rgba(196,92,124,0.7)] transition-transform hover:scale-110"
      >
        {open ? <X className="h-5 w-5" /> : <Music className="h-5 w-5" />}
      </button>
    </div>
  );
}
