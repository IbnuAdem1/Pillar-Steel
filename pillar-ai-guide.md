# Pillar Steel — Frontend Implementation Guide (for Antigravity)

## 0. How to use this document
This is a build spec for an AI coding agent (Antigravity) working in an existing React project.
Treat it as the source of truth for structure, animation behavior, and responsiveness rules.
Where this doc says "extract from existing code," open the current Home/About page components
first and reuse the values found there — **do not invent new colors, fonts, or spacing scales.**

---

## 1. Project Snapshot

- **Client:** Pillar Steel Factory (Ethiopia) — steel manufacturer/supplier
- **Type:** Promotional / marketing frontend only (no backend, no CMS)
- **Stack:** React + TypeScript, Tailwind CSS, Framer Motion
- **Status:**
  - ✅ Home page — built, needs responsiveness + animation + polish pass
  - ✅ About Us page — built, needs responsiveness + animation + polish pass
  - 🔲 Services page — not built
  - 🔲 Gallery page — not built
  - 🔲 Contact page — not built
- **Design principle:** Mobile-first. Every section must be designed for a ~375px viewport first,
  then scaled up with `sm:` / `md:` / `lg:` / `xl:` breakpoints. Never ship a section that only
  looks right on desktop.
- **Color code:** ⚠️ DO NOT CHANGE. Before writing any new component, extract the existing Tailwind
  theme tokens / CSS variables from the Home and About page files (primary orange, dark navy/black,
  white, light gray backgrounds) and reuse those exact tokens in every new page. If tokens aren't
  centralized yet, centralize them into `tailwind.config` or a `:root` CSS variable block as part of
  this pass — but the **values themselves must not change**.

---

## 2. Design System (extract & centralize, don't redesign)

### 2.1 Tokens to centralize
Pull these from the existing Home/About code into one place (`tailwind.config.js` theme.extend or
`src/styles/tokens.css`):

| Token | Likely current usage | Source of truth |
|---|---|---|
| `--color-primary` | Orange (buttons, headings, icon circles, hero overlay) | existing Home hero button |
| `--color-dark` | Footer background, dark text | existing footer |
| `--color-light-bg` | Section alt background (light gray, e.g. Services/Why sections) | existing About cards section |
| `--color-white` | Card backgrounds, nav | — |
| `--radius-card` | Card corner radius (cards + circular icon badges) | existing card components |
| `--shadow-card` | Card drop shadow | existing card components |

### 2.2 Typography
- Headings: bold, large, tight tracking, uppercase for hero headline (e.g. "BUILDING STRENGTH,
  SHAPING THE FUTURE") — extract exact font-family/weight from current Home hero.
- Body: standard sans, gray-600-ish, comfortable line-height for paragraph blocks.
- Keep heading scale consistent across pages: hero H1 > section H2 > card title H3.

### 2.3 Recurring visual components (build once, reuse everywhere)
These patterns repeat across all 4 screenshots — build each as a standalone component in
`src/components/ui/`:

1. **`<PageHero>`** — full-width image bg + orange gradient/overlay, centered or left-aligned title +
   subtitle, rounded bottom corners (seen on every interior page: About, Services, Contact).
2. **`<IconCard>`** — white rounded card, circular orange icon badge on top, title, description.
   Used in Services (3-col), About Core Values (5-col wrap), Competitive Advantage (5-col wrap).
3. **`<AlternatingSection>`** — image + text side by side, alternating left/right per section.
   Used repeatedly in About and Services.
4. **`<AccordionFeatureList>`** — the "Why Choose Us" block on Home: one open/expanded item
   (white bg, minus icon) + collapsed items (light gray bg, plus icon). Must become a real
   interactive accordion on mobile (tap to expand), not just a static stacked list.
5. **`<CTAButton>`** — orange pill/rounded button, used dozens of times with different labels
   ("Get In Touch", "Read More", "Discover More", "Buy Now", "Contact Us Now", "Let's Work
   Together", "Reach Out Now").
6. **`<InfoCard>`** — the 4-up Contact page cards (Address / Phone / Email / Opening Hour) — icon
   circle + label + value, white rounded card.
7. **`<ContactForm>`** — name / email / message fields + submit button. Frontend-only: on submit,
   either open a `mailto:` link or show a success state — no backend, so don't build a fetch call
   to a nonexistent API. Confirm with the team which behavior they want before wiring it.
8. **`<Footer>`** — already built presumably; confirm it's a shared component imported on every
   page, not duplicated per page.
9. **`<GalleryGrid>`** — masonry/mixed-size image grid (seen in "Visit Our Works" on Home and
   "Our Products & Services" strip on Services) — reusable for the new Gallery page.

Building these once and composing pages from them will also make the animation pass in Section 4
much easier, since motion wraps at the component level.

---

## 3. Page-by-Page Spec

### 3.1 Home (polish pass only)
Sections top to bottom: Nav → Hero → About preview + image → Services (3 `<IconCard>`) → Visit Our
Works gallery → Why Choose Us (`<AlternatingSection>` image + `<AccordionFeatureList>`) → Map +
`<ContactForm>` → Footer.
**Fix list:**
- Confirm hero text wraps cleanly at 375px width without overflowing the card.
- Nav must collapse into a mobile menu (hamburger) below `md`.
- Gallery grid (RHS/SHS/Round Pipe/other) must reflow to 1–2 columns on mobile without cropping labels.
- Why Choose Us accordion must be tap-to-expand on mobile, not a fixed stack.
- Map embed should not force horizontal scroll on small screens — cap width to container.

### 3.2 About Us (polish pass only)
Sections: Nav → `<PageHero>` "About US" → Mission/Vision/Goal (3 `<IconCard>`) → Our Story
(`<AlternatingSection>`) → Modern Steel Factory (`<AlternatingSection>`, reversed) → Our Commitment
(`<AlternatingSection>`) → Core Values (5 `<IconCard>`, wraps to 2+3 on tablet, 1-col on mobile) →
Footer.
**Fix list:**
- The 5-card Core Values grid needs an intentional mobile layout (single column, consistent card
  height) rather than an awkward wrap.
- Check image aspect ratios are locked (`aspect-[4/3]` or similar) so images don't distort at
  different breakpoints.

### 3.3 Services (new build)
Sections: Nav → `<PageHero>` "Our Services" → Customized Solutions (`<AlternatingSection>`) →
Technical Support (`<AlternatingSection>`, reversed) → Timely Delivery (`<AlternatingSection>`) →
Our Competitive Advantage (5 `<IconCard>`, same pattern as About Core Values — reuse it) → Our
Products & Services (`<GalleryGrid>`, mixed-width strip with one labeled tile e.g. "RHS
(Rectangular Hollow Sections)") → Footer.
Copy already visible in the screenshot (headings + paragraph text) should be reused verbatim from
the design — don't rewrite it.

### 3.4 Contact (new build)
Sections: Nav → `<PageHero>` "Contact Us" (title + subtitle + intro line) → 4-up `<InfoCard>` row
(Address / Phone / Email / Opening Hour) → "Send Us A Message" (`<ContactForm>` + logo tile image
side by side on desktop, stacked on mobile) → "Visit Our Factory" text + embedded Google Map →
Footer.
Use the real values shown in the design:
- Address: Chafe Tumma, Tullu Dimtu, Shaggar City
- Phone: +251930303831 / +251973032277
- Email: steelpillar92@gmail.com
- Hours: 8:30 AM – 5:30 PM
Embed the Google Map via an `<iframe>` (no API key needed for basic embed) rather than a static
image, so it stays interactive — pull the actual coordinates by searching the address if not
already available in the project.

### 3.5 Gallery (new build — not shown in screenshots, infer from site pattern)
Not visible in the provided screenshots, but nav includes it. Recommend:
- `<PageHero>` "Gallery"
- Full `<GalleryGrid>` of all factory/product images used sitewide (RHS, SHS, Round Pipe, sheet
  stacks, factory floor shots, machinery) with lightbox-on-click (click to enlarge).
- Confirm final content/copy with the client before finalizing — flag this as an open item rather
  than inventing new marketing copy.

---

## 4. Animation System (Framer Motion)

Centralize these as reusable variants in `src/lib/motion.ts` so every page imports the same
behavior instead of redefining transitions inline.

```ts
// src/lib/motion.ts
export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export const staggerContainer = (staggerChildren = 0.12, delayChildren = 0) => ({
  hidden: {},
  show: {
    transition: { staggerChildren, delayChildren },
  },
});

export const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.94 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: "easeOut" } },
};
```

### 4.1 Scroll-triggered reveals
- Wrap section headings and card grids in `motion.div` using `whileInView="show"` +
  `viewport={{ once: true, amount: 0.2 }}` with `initial="hidden"`.
- Card grids (`<IconCard>` rows, gallery grids): wrap the grid container with `staggerContainer`
  and each card with `fadeUp` as a child — gives the "cards pop in one after another" effect.
- Use `once: true` everywhere on marketing pages so animations don't re-trigger annoyingly on
  scroll-back-up.

### 4.2 Hover interactions
- `<IconCard>`: `whileHover={{ y: -6 }}` + shadow transition via Tailwind `hover:shadow-lg
  transition-shadow`.
- `<CTAButton>`: `whileHover={{ scale: 1.03 }}` `whileTap={{ scale: 0.97 }}`.
- Gallery/product images: `whileHover={{ scale: 1.05 }}` on the image itself, `overflow-hidden` on
  the wrapping container so the zoom doesn't break card edges.
- Nav links: underline-grow-on-hover via a `::after` pseudo-element or a `motion.span` width
  animation — keep this subtle.

### 4.3 Hero / page-load animations
- Hero headline: `fadeUp` on mount (not scroll-triggered, since it's above the fold) with a
  slight stagger between headline, subtitle, and CTA button (~0.1s apart).
- Hero background image: optional slow `scale` (1 → 1.05 over 8–10s, `repeat: Infinity,
  repeatType: "mirror"`) for subtle parallax-like life — keep GPU-cheap, transform-only, no
  layout-affecting properties.

### 4.4 Route/page transitions
- Wrap route outlet in `AnimatePresence mode="wait"` with a simple `fadeIn`/fade-out on route
  change (150–250ms). Keep it fast — this is a marketing site, not an app; slow transitions feel
  sluggish on mobile.

### 4.5 Accessibility
- Respect `prefers-reduced-motion`: wrap the motion config so users with that OS setting get
  reduced/instant transitions instead of the full animation set (Framer Motion's `useReducedMotion`
  hook).
- Never animate in a way that delays content becoming readable — animations should enhance, not
  gate, the content.

---

## 5. Responsiveness Rules (mobile-first, non-negotiable)

- Build every new component starting at the smallest breakpoint (no `sm:`/`md:` prefix = mobile
  styles). Add complexity upward.
- Standard breakpoint targets to test at: 375px (mobile), 768px (tablet), 1024px (small desktop),
  1440px (desktop).
- Grids: use `grid-cols-1` as the base, then `sm:grid-cols-2 lg:grid-cols-3` (or similar) —
  never ship a fixed multi-column grid without a mobile fallback.
- Images: always set explicit `aspect-ratio` or width/height to prevent layout shift (this also
  helps Core Web Vitals / SEO — see Section 6).
- Nav: hamburger menu below `md`, confirm it's keyboard-accessible and closes on route change.
- Long headings (hero especially) must be tested for word-wrap at narrow widths — don't let bold
  display type overflow its container.
- Forms and map embeds must never force horizontal scroll on the page — cap with `max-w-full` /
  `overflow-hidden` on wrappers.

---

## 6. SEO Checklist

### 6.1 Per-page meta (use `react-helmet-async` or equivalent, or framework-native head management)
For each page (Home, About, Services, Gallery, Contact), set a **unique**:
- `<title>` — e.g. "Steel Supplier in Addis Ababa | Pillar Steel Ethiopia" for Home, "About Pillar
  Steel — Steel Manufacturer in Ethiopia" for About, etc. (the design already suggests good
  keyword phrasing — reuse the on-page copy patterns like "steel manufacturer in Ethiopia,"
  "construction steel supplier," "steel factory in Addis Ababa").
- `<meta name="description">` — 150–160 chars, unique per page.
- Open Graph tags (`og:title`, `og:description`, `og:image`, `og:url`) for social sharing.
- Canonical URL tag.

### 6.2 Structured data
Add `LocalBusiness` (or more specifically `Organization` + `LocalBusiness`) JSON-LD schema on the
Contact page (and optionally sitewide in a layout component), using the real business data:

```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Pillar Steel Factory",
  "image": "<logo/hero image URL>",
  "telephone": ["+251930303831", "+251973032277"],
  "email": "steelpillar92@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Chafe Tumma, Tullu Dimtu",
    "addressLocality": "Shaggar City",
    "addressCountry": "ET"
  },
  "openingHours": "Mo-Fr 08:30-17:30"
}
```

### 6.3 Semantic HTML & accessibility
- One `<h1>` per page (hero headline), proper `<h2>`/`<h3>` nesting for sections/cards — don't skip
  levels just for font size (use CSS for sizing, not heading level).
- All images need descriptive `alt` text (not just "image1.jpg") — e.g. alt="RHS rectangular
  hollow steel sections stacked in factory" rather than generic text.
- Use `<nav>`, `<main>`, `<footer>`, `<section>` landmarks properly.
- Form inputs need associated `<label>`s (can be visually hidden if the design uses placeholder-only
  styling, but they must exist for screen readers).

### 6.4 Technical SEO
- Generate `sitemap.xml` listing all 5 pages.
- Add `robots.txt` allowing crawl of all public pages.
- Since this is a plain React SPA (no SSR mentioned), confirm whether the hosting setup pre-renders
  or serves plain `index.html` — if it's client-rendered only, flag to the team that this limits SEO
  effectiveness for a marketing site and consider React Router + a static prerender step (e.g.
  `vite-plugin-ssr`, `react-snap`, or migrating to a framework with SSR/SSG) as a follow-up
  recommendation, not a blocker for this pass.
- Compress/optimize all images (WebP where possible) and lazy-load below-the-fold images
  (`loading="lazy"`) to protect load speed, which affects both SEO and mobile UX.

---

## 7. Suggested File Structure

```
src/
  components/
    ui/
      PageHero.tsx
      IconCard.tsx
      AlternatingSection.tsx
      AccordionFeatureList.tsx
      CTAButton.tsx
      InfoCard.tsx
      ContactForm.tsx
      GalleryGrid.tsx
    layout/
      Navbar.tsx
      Footer.tsx
      SEO.tsx          // wraps react-helmet-async per-page meta
  lib/
    motion.ts           // shared Framer Motion variants
    tokens.ts            // (optional) exported color/spacing constants if not fully in Tailwind config
  pages/
    Home.tsx
    About.tsx
    Services.tsx
    Gallery.tsx
    Contact.tsx
  App.tsx                // routes + AnimatePresence wrapper
```

---

## 8. Implementation Order (recommended, for Antigravity to follow step by step)

1. Extract and centralize color/spacing tokens from existing Home/About code (no visual change yet).
2. Build the shared `ui/` components listed in Section 2.3, using those tokens.
3. Refactor Home and About pages to consume the new shared components (should look visually
   identical to today, just DRY).
4. Add `src/lib/motion.ts` and wire scroll/hover animations into the shared components (this
   automatically animates Home + About since they now use the shared components).
5. Build Services page from shared components + spec in 3.3.
6. Build Contact page from shared components + spec in 3.4, including the `LocalBusiness` schema.
7. Build Gallery page (flag copy/content as pending client confirmation).
8. Add mobile nav (hamburger) and do a full responsiveness pass at 375/768/1024/1440px on all 5 pages.
9. Add per-page SEO meta + sitemap.xml + robots.txt.
10. Final polish: `prefers-reduced-motion` support, image alt text audit, lazy-loading pass,
    Lighthouse check (aim for 90+ on Performance/SEO/Accessibility on mobile).

---

## 9. Open Questions to Confirm Before/During Build
- Contact form: does it need to actually send email (needs a form backend like Formspree/EmailJS
  since there's no backend), or is a front-end-only success message acceptable for now?
- Gallery page content: which images/categories should populate it — confirm with client.
- Any brand guideline doc for exact hex codes, or should they be extracted from existing compiled
  CSS/Tailwind config?