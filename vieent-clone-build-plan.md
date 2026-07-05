# Build Plan: Vieent-Style Marketing Site
### For use with a coding agent (Claude Code, Cursor, etc.)

Reference: https://www.vieent.com/
Stack: Next.js + Tailwind CSS + Framer Motion + Recharts + Formspree + Vercel

---

## 0. Global Rules (give these to your agent FIRST, every session)

1. **Stack lock** — Use only: Next.js (App Router), TypeScript, Tailwind CSS, Framer Motion, Recharts, Lucide icons. Do not introduce other UI/animation/chart libraries without asking.
2. **One phase at a time** — Complete and show the current phase before moving to the next. Do not skip ahead.
3. **Component-first** — Every visual section is its own component in `/components/sections/`. No giant single-file pages.
4. **Mobile-first** — Every component must be built and checked at 375px width before desktop.
5. **No placeholder rot** — Use realistic placeholder copy/images (not "Lorem ipsum" or broken image links) so sections look real as you go.
6. **Commit per phase** — After each phase passes its checklist, make one git commit with a clear message.
7. **Ask before assuming** — If copy, brand colors, or content aren't specified, the agent should propose 2-3 options rather than inventing final content silently.
8. **No copyrighted assets** — Do not copy actual text, images, or code from vieent.com. Use it only as a structural/UX reference.

---

## Phase 0 — Project Setup
**Difficulty: 🟢 Easy**

**Goal:** Working empty Next.js app with tooling in place.

- [ ] `npx create-next-app@latest` (TypeScript, Tailwind, App Router, `src/` dir)
- [ ] Install: `framer-motion`, `recharts`, `lucide-react`
- [ ] Set up `/src/components/sections/`, `/src/components/ui/`, `/src/lib/`
- [ ] Configure `tailwind.config.ts` with brand color palette + font
- [ ] Add base layout (`layout.tsx`) with `<html>`, global font, metadata
- [ ] Push to GitHub, connect repo to Vercel for auto-deploy on push

**Done when:** blank Next.js site is live on a Vercel URL.

---

## Phase 1 — Design Foundation
**Difficulty: 🟢 Easy**

**Goal:** Reusable visual language before building real sections.

- [ ] Define design tokens in Tailwind config: primary color, accent color, neutral grays, font family, border-radius scale
- [ ] Build `<Container>`, `<Section>`, `<Button>`, `<Badge>` UI primitives
- [ ] Build a simple typography scale (h1–h4, body, caption) as Tailwind utility classes or components

**Done when:** you have a `/style-guide` page rendering all primitives together.

---

## Phase 2 — Navigation + Hero
**Difficulty: 🟡 Medium**

**Goal:** First-screen impression matches the reference site's clarity.

- [ ] Sticky top nav: logo left, links center/right, CTA button, mobile hamburger menu
- [ ] Hero section: headline, subheadline, primary CTA, supporting visual (image or illustration placeholder)
- [ ] Framer Motion: fade/slide-in on page load for hero text

**Done when:** nav is sticky and functional on mobile + desktop; hero renders responsively.

---

## Phase 3 — Feature / Value Prop Sections
**Difficulty: 🟡 Medium**

**Goal:** The repeating "feature block" sections (icon + heading + text, alternating layout).

- [ ] Build one reusable `<FeatureBlock>` component (image/text side, reversible via prop)
- [ ] Populate 3–4 feature sections with placeholder content matching real structure (not real vieent copy)
- [ ] Scroll-triggered fade/slide animation via Framer Motion's `whileInView`

**Done when:** feature sections stack correctly and animate once per scroll into view.

---

## Phase 4 — Interactive Dashboard Demo
**Difficulty: 🔴 Hard**

**Goal:** Recreate the "product dashboard preview" feel using fake data.

- [ ] Build a mock data object (e.g. monthly streams/royalties)
- [ ] Build chart component with Recharts (bar or line chart) styled to match brand colors
- [ ] Wrap dashboard mockup in a card/browser-frame visual to look like a real product screenshot
- [ ] Optional: simple tab switcher (e.g. "Overview / Royalties / Analytics") using local state — no real backend needed

**Done when:** chart renders with mock data and looks like a plausible product screenshot, not a raw chart.

---

## Phase 5 — Social Proof
**Difficulty: 🟢 Easy**

**Goal:** Testimonials / partner logos section.

- [ ] Build `<TestimonialCard>` component
- [ ] Layout as grid or horizontal scroll/carousel (Framer Motion drag or simple CSS scroll-snap)
- [ ] Add a logo strip (placeholder logos) if applicable

**Done when:** section is responsive and readable with 3+ testimonials.

---

## Phase 6 — Application / Signup Form
**Difficulty: 🟡 Medium**

**Goal:** Functional lead-capture form without building custom backend.

- [ ] Build form UI (name, email, message/artist info, submit button) with validation (required fields, email format)
- [ ] Connect to Formspree (or Resend/serverless function if you want full control)
- [ ] Add success/error states (toast or inline message)
- [ ] Add basic spam protection (honeypot field is enough for v1)

**Done when:** submitting the form actually delivers a message to your inbox.

---

## Phase 7 — Blog / News Section (optional, do last)
**Difficulty: 🔴 Hard** (Medium if you skip a CMS and hardcode posts)

**Goal:** Simple content section that's easy to update.

- [ ] Decide: hardcoded array of posts vs. Markdown files vs. headless CMS (Sanity/Contentful)
- [ ] Build `<BlogCard>` grid + individual post page (`/blog/[slug]`)
- [ ] Add basic SEO metadata per post

**Done when:** you can add a new post by editing one file/CMS entry without touching layout code.

---

## Phase 8 — Polish Pass
**Difficulty: 🟡 Medium**

**Goal:** Make it feel like a finished product, not a prototype.

- [ ] Consistent spacing rhythm across all sections (audit with a real device, not just browser resize)
- [ ] Add footer (links, social icons, copyright)
- [ ] Add page transitions / loading states if needed
- [ ] Run Lighthouse — fix anything under 90 on Performance/Accessibility
- [ ] Add favicon, OG image, page titles/meta descriptions per page

**Done when:** Lighthouse scores are all green-ish and the site feels cohesive scrolling top to bottom.

---

## Phase 9 — Deploy & Wrap-up
**Difficulty: 🟢 Easy**

- [ ] Final Vercel production deploy
- [ ] Custom domain connected (if you have one)
- [ ] Analytics added (Vercel Analytics or Plausible)
- [ ] README written for future you: how to run locally, how to edit content, how to redeploy

---

## How to use this with your agent

Paste **Phase 0's global rules** into your agent's system/project instructions once. Then feed it **one phase at a time** as a task, e.g.:

> "Do Phase 2 from the build plan. Follow the global rules. Show me the result before moving on."

This keeps the agent from sprawling into unrelated files or inventing scope you didn't ask for.
