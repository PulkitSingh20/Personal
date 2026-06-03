## Happy Birthday, Shrishti — site plan

A single-page, scroll-through birthday site with a sweet & playful tone (a little "more than a friend" sparkle), built on the existing TanStack Start + Tailwind v4 stack.

### Visual direction
- Palette (Cherry Blossom): `#fef0f5` background, `#f8c8d8` soft pink, `#e88aab` primary, `#c45c7c` accent.
- Typography: a romantic display serif for headings (Cormorant Garamond / Instrument Serif) + soft sans (Plus Jakarta Sans) for body.
- Texture: subtle floating sakura petals, soft gradients, gentle blur halos, hand-drawn heart accents.
- Motion: tasteful fade-in / float / sparkle. No heavy libraries — pure CSS keyframes + a small petal component.

### Sections (top → bottom)

1. **Hero**
   - Big script heading: "Happy Birthday, Shrishti 🌸"
   - Playful subline hinting at "more than a friend" (e.g. "to my favourite person, my almost-something, my always").
   - Floating animated sakura petals in the background.
   - Soft CTA pill: "Make a wish ↓".

2. **Interactive Cake**
   - SVG/CSS cake with 3 flickering candles.
   - Click (or "blow" button) → candles go out, confetti bursts, and a hidden message appears: "Wish made. I hope it's me 💌".

3. **Reasons I adore you**
   - Grid of 6 soft pastel cards, each one short reason ("the way you laugh at your own jokes", "your 2am voice notes", etc.). Placeholder copy I'll write — easy for you to edit later.

4. **Memories gallery**
   - Polaroid-style grid (4–6 slots) with gentle tilt + hover lift.
   - Uses placeholder images now; you can swap in real photos later by dropping files into `src/assets/`.

5. **Wishes for your year ahead**
   - Soft "letter" card with a heartfelt-but-playful paragraph and a sign-off.

6. **Footer**
   - Tiny line: "made with 🌸 just for you" + small heart.

### Technical details
- New route file: `src/routes/index.tsx` (replace placeholder).
- Components under `src/components/birthday/`: `Hero.tsx`, `Petals.tsx`, `Cake.tsx`, `Reasons.tsx`, `Memories.tsx`, `Wishes.tsx`, `Confetti.tsx`.
- Design tokens added to `src/styles.css` under `:root` (blossom palette in oklch) + `@theme inline` mappings so `bg-primary`, `text-accent`, etc. resolve to the new colors.
- Petals + confetti = pure CSS keyframes (no extra deps).
- Google Fonts loaded via `<link>` in `__root.tsx` head.
- 4–6 placeholder gallery images generated with `imagegen` (soft floral / abstract pink) saved to `src/assets/`.
- SEO: route `head()` with title "Happy Birthday, Shrishti", matching description + og tags.
- Fully responsive; mobile first.

### What I'll need from you (later, optional)
- Real photos to swap into the gallery.
- If you want to personalize any of the 6 "reasons" or the wishes letter, send the lines and I'll drop them in.

Ready to build when you approve.