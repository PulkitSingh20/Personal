import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Petals } from "@/components/birthday/Petals";
import { Cake } from "@/components/birthday/Cake";
import { Reasons } from "@/components/birthday/Reasons";
import { Memories } from "@/components/birthday/Memories";
import { Wishes } from "@/components/birthday/Wishes";

export const Route = createFileRoute("/wishes")({
  head: () => ({
    meta: [
      { title: "My Wishes for You — Shrishti 🌸" },
      {
        name: "description",
        content:
          "A little letter, a cake to blow out, and all the wishes in the world — just for Shrishti.",
      },
      { property: "og:title", content: "My Wishes for You — Shrishti 🌸" },
      {
        property: "og:description",
        content: "A cake, some memories, and a heartfelt letter, made just for you.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: WishesPage,
});

function WishesPage() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <Petals />

      <div className="relative z-20 px-6 pt-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-full border border-secondary/60 bg-card/70 px-4 py-2 text-xs uppercase tracking-[0.3em] text-accent/80 backdrop-blur transition-all hover:bg-card"
        >
          <span>←</span> back
        </Link>
      </div>

      <Cake />
      <Reasons />
      <Memories />
      <Wishes />

      <footer className="relative z-10 py-10 text-center text-xs uppercase tracking-[0.3em] text-accent/70">
        made with <span className="text-accent">♡</span> just for you
      </footer>
    </main>
  );
}
