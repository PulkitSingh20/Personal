import { createFileRoute } from "@tanstack/react-router";
import { Petals } from "@/components/birthday/Petals";
import { Hero } from "@/components/birthday/Hero";
import { Cake } from "@/components/birthday/Cake";
import { Reasons } from "@/components/birthday/Reasons";
import { Memories } from "@/components/birthday/Memories";
import { Wishes } from "@/components/birthday/Wishes";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Happy Birthday, Shrishti 🌸" },
      {
        name: "description",
        content:
          "A little something — a sweet, playful birthday letter made just for Shrishti, with petals, candles, and a wish or two.",
      },
      { property: "og:title", content: "Happy Birthday, Shrishti 🌸" },
      {
        property: "og:description",
        content: "A little something, made just for you — with petals, candles, and a wish or two.",
      },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400&family=Dancing+Script:wght@500;600;700&family=Plus+Jakarta+Sans:wght@300;400;500;600&display=swap",
      },
    ],
  }),
  component: BirthdayPage,
});

function BirthdayPage() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <Petals />
      <Hero />
      <Cake />
      <Reasons />
      <Memories />
      <Wishes />
      <footer className="relative z-10 py-10 text-center text-xs tracking-[0.3em] text-accent/70 uppercase">
        made with <span className="text-accent">♡</span> just for you
      </footer>
    </main>
  );
}
