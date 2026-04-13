# NOVEK — Complete Website Blueprint (Start to Finish)

> Custom software development company + product studio.
> Builds bespoke software on demand + ships own tech products.
> Style: Linear.app-inspired dark luxury. No team page. No pricing page (custom quotes).

---

## TABLE OF CONTENTS
1. [Design System](#1-design-system)
2. [Animation & Motion System](#2-animation--motion-system)
3. [Content Strategy & Distribution](#3-content-strategy--distribution)
4. [Site Architecture — All Pages](#4-site-architecture--all-pages)
5. [Homepage — 15 Sections In Detail](#5-homepage--15-sections)
6. [Inner Pages — Every Section Detailed](#6-inner-pages--every-section)
7. [Unique / Signature Features](#7-unique--signature-features)
8. [Mobile Responsiveness Strategy](#8-mobile-responsiveness)
9. [Accessibility (WCAG 2.1 AA)](#9-accessibility)
10. [SEO & Google Indexing](#10-seo--google-indexing)
11. [Marketing, Branding & Lead Gen](#11-marketing-branding--lead-gen)
12. [Technical Architecture & Packages](#12-technical-architecture)
13. [Folder Structure](#13-folder-structure)
14. [Data Models & Content Schema](#14-data-models)
15. [Implementation — Step by Step](#15-implementation-steps)

---

## 1. DESIGN SYSTEM

### 1.1 Color Palette (Dark-Only Luxury)
No light mode. Forced dark. Luxury = controlled, consistent, cinematic.

**Backgrounds (layered elevation)**
| Token | Hex | Usage |
|-------|-----|-------|
| `--bg-base` | `#09090B` | Page background, lowest layer |
| `--bg-surface` | `#111113` | Cards, elevated panels |
| `--bg-elevated` | `#18181B` | Modals, dropdowns, nav |
| `--bg-inset` | `#0A0A0C` | Input fields, code blocks, recessed areas |
| `--bg-overlay` | `rgba(0,0,0,0.60)` | Modal/menu backdrop |

**Borders (opacity-based, not solid colors)**
| Token | Value | Usage |
|-------|-------|-------|
| `--border-default` | `rgba(255,255,255,0.06)` | Default card/section borders |
| `--border-hover` | `rgba(255,255,255,0.12)` | Hover state borders |
| `--border-active` | `rgba(255,255,255,0.20)` | Focus/active state borders |
| `--border-gradient` | `linear-gradient(135deg, #7C3AED, #3B82F6)` | Premium highlight borders |

**Brand Accent (Gradient-First)**
| Token | Value | Usage |
|-------|-------|-------|
| `--accent-primary` | `#7C3AED` | Purple anchor |
| `--accent-secondary` | `#3B82F6` | Blue anchor |
| `--accent-gradient` | `linear-gradient(135deg, #7C3AED, #3B82F6)` | Buttons, highlights, CTAs |
| `--accent-glow` | `rgba(124,58,237,0.12)` | Hover glow behind cards |
| `--accent-subtle` | `rgba(124,58,237,0.06)` | Tinted backgrounds |
| `--accent-cyan` | `#06B6D4` | Secondary accent (tech/data visuals) |

**Text**
| Token | Hex | Usage |
|-------|-----|-------|
| `--text-primary` | `#FAFAFA` | Headlines, important text |
| `--text-secondary` | `#A1A1AA` | Body paragraphs, descriptions |
| `--text-tertiary` | `#71717A` | Captions, timestamps, labels |
| `--text-muted` | `#52525B` | Disabled, placeholder text |
| `--text-link` | `#818CF8` | Inline links |
| `--text-link-hover` | `#A78BFA` | Link hover state |
| `--text-on-accent` | `#FFFFFF` | Text on gradient/accent backgrounds |

**Semantic Colors**
| Token | Hex | Usage |
|-------|-----|-------|
| `--success` | `#22C55E` | Success messages, positive metrics |
| `--warning` | `#EAB308` | Warnings, caution states |
| `--error` | `#EF4444` | Errors, destructive actions |
| `--info` | `#3B82F6` | Informational states |

### 1.2 Typography System

**Font Stack**
- **Headings**: `JetBrains Mono` — techy, monospaced, distinctive
- **Body**: `DM Sans` — clean, modern, highly legible
- **Code/Mono**: `JetBrains Mono` — same as headings, but lighter weight

**Responsive Type Scale**
| Level | Desktop | Tablet | Mobile | Font | Weight | Tracking | Line-Height |
|-------|---------|--------|--------|------|--------|----------|-------------|
| Display | 80px | 56px | 38px | JetBrains Mono | 600 | -0.04em | 1.0 |
| H1 | 52px | 42px | 34px | JetBrains Mono | 600 | -0.03em | 1.1 |
| H2 | 38px | 32px | 27px | JetBrains Mono | 500 | -0.02em | 1.2 |
| H3 | 26px | 23px | 21px | JetBrains Mono | 500 | -0.02em | 1.3 |
| H4 | 21px | 19px | 17px | JetBrains Mono | 500 | -0.01em | 1.3 |
| Body LG | 19px | 17px | 16px | DM Sans | 400 | 0 | 1.7 |
| Body | 16px | 15px | 15px | DM Sans | 400 | 0 | 1.7 |
| Body SM | 14px | 13px | 13px | DM Sans | 400 | 0.01em | 1.6 |
| Caption | 12px | 12px | 11px | DM Sans | 400 | 0.02em | 1.5 |
| Overline | 11px | 11px | 10px | JetBrains Mono | 500 | 0.12em | 1.4 |

**Overline Style**: Uppercase, letter-spaced, muted color — used above section headings as category labels (e.g., "OUR SERVICES", "FEATURED WORK").

### 1.3 Spacing System
4px base grid. Every spacing value is a multiple of 4.

| Token | Value | Usage |
|-------|-------|-------|
| `--space-1` | 4px | Tight gaps (icon to text) |
| `--space-2` | 8px | Small gaps (between pills/tags) |
| `--space-3` | 12px | Compact component padding |
| `--space-4` | 16px | Default component padding, mobile page margin |
| `--space-5` | 20px | Between related elements |
| `--space-6` | 24px | Tablet page margin, card padding |
| `--space-8` | 32px | Desktop page margin, section sub-gaps |
| `--space-10` | 40px | Between section content blocks |
| `--space-12` | 48px | Desktop page margin (wide) |
| `--space-16` | 64px | Between sections (mobile) |
| `--space-20` | 80px | Between sections (tablet) |
| `--space-24` | 96px | Between sections (desktop) |
| `--space-32` | 128px | Large section gaps, hero padding |
| `--space-40` | 160px | Hero top/bottom padding on desktop |

### 1.4 Border Radius System
| Token | Value | Usage |
|-------|-------|-------|
| `--radius-sm` | 6px | Input fields, small pills |
| `--radius-md` | 8px | Buttons, tags |
| `--radius-lg` | 12px | Cards, panels |
| `--radius-xl` | 16px | Large cards, images |
| `--radius-2xl` | 20px | Modals, feature showcases |
| `--radius-full` | 9999px | Avatars, circular badges, pills |

### 1.5 Component Design Patterns

**Glass Card** (primary card style)
```
background: rgba(255, 255, 255, 0.03)
border: 1px solid rgba(255, 255, 255, 0.06)
backdrop-filter: blur(20px)
border-radius: 12px
```
On hover: border → `rgba(255,255,255,0.12)`, subtle glow shadow

**Gradient Border Card** (premium highlight)
```
Outer wrapper with gradient background, inner card with bg-surface
Creates a 1px gradient border effect via padding trick
```

**Buttons**
- **Primary**: Accent gradient background, white text, 8px radius, glow on hover
- **Secondary**: Glass background, white text, border, slight brighten on hover
- **Ghost**: Transparent, text-link color, underline on hover
- **Icon Button**: 40x40px square, glass background, centered icon

**Input Fields**
- `bg-inset` background, `border-default` border, `border-active` on focus
- 8px radius, 12px horizontal padding, 44px height
- Label above (DM Sans 14px medium), error below in `--error` color

**Badges / Pills / Tags**
- Small: 6px radius, `bg-elevated` background, caption text
- Accent: gradient background, white text
- Outlined: border only, text-secondary

**Dividers**
- Horizontal: 1px `border-default`, full-width or inset
- Section divider: subtle gradient line (transparent → border → transparent)

### 1.6 Imagery & Visual Style
- **No generic stock photos** — use abstract 3D renders, gradient meshes, geometric patterns
- **Product screenshots**: In device mockups (laptop/phone frames), with subtle shadow/glow
- **Icons**: Lucide icons throughout, 20–24px, stroke-width 1.5, `text-secondary` default, `text-primary` on hover
- **Illustrations**: Abstract line-art or gradient meshes, techy/geometric feel
- **Client logos**: Grayscale by default (opacity 0.5), full opacity on hover

---

## 2. ANIMATION & MOTION SYSTEM

### 2.1 Libraries
- **Framer Motion** — all UI animations, page transitions, scroll-triggered reveals
- **Lenis** — smooth scroll engine (buttery smooth feel across entire site)

### 2.2 Global Motion Config

**Lenis Settings**
```
lerp: 0.1
duration: 1.2
smoothWheel: true
touchMultiplier: 2
```

**Framer Motion Default Variants**
```typescript
// Fade up (most common — used on every section entry)
fadeUp: {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } }
}

// Stagger container (wrap children that should animate sequentially)
staggerContainer: {
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } }
}

// Scale in (for cards, images)
scaleIn: {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
}

// Slide in from left/right
slideInLeft: {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
}

// Blur in (for subtitles, descriptions)
blurIn: {
  hidden: { opacity: 0, filter: "blur(10px)" },
  visible: { opacity: 1, filter: "blur(0px)", transition: { duration: 0.8 } }
}
```

### 2.3 Animation Catalog (Where Each Is Used)

| Animation | Sections / Components | Details |
|-----------|----------------------|---------|
| **Fade-up on scroll** | Every section's content | `whileInView`, threshold 0.2, staggered 80ms |
| **Stagger grid** | Service cards, project cards, tech grid, FAQ items | Children animate in with incremental delay |
| **Parallax scroll** | Hero bg blobs, project images, about page images | `useScroll` + `useTransform`, 10-30% offset |
| **Text character decode** | Hero headline only (page load) | Letters scramble through random chars → resolve |
| **Word-by-word reveal** | Section headings on scroll | Each word fades + translates up sequentially |
| **Blur-in** | Section subtitles / descriptions | `filter: blur(10px)` → clear |
| **Counter tick-up** | Stats sections (about snapshot, project results) | 0 → target number over ~2s on view |
| **Aurora gradient** | Hero background | 3 large blurred circles with slow CSS animation (`@keyframes`) |
| **Magnetic pull** | All buttons, nav links (desktop only) | Cursor proximity → element shifts 4–8px toward cursor |
| **3D tilt** | Service cards, product cards (desktop only) | `perspective(1000px) rotateX/Y` following mouse, max 6deg |
| **Glow follow** | Feature cards, product cards on hover | Radial gradient centered on cursor position, `pointer-events: none` overlay |
| **Infinite marquee** | Trust bar logos, tech stack ticker | CSS `@keyframes translateX(-50%)`, duplicated children |
| **SVG line draw** | Process timeline connecting line | `stroke-dasharray` + `stroke-dashoffset` animated on scroll progress |
| **Image clip reveal** | Project hero images, about gallery | `clip-path: inset()` animating from full-clip to zero |
| **Accordion expand** | FAQ items, service features | Framer Motion `AnimatePresence` + auto-height |
| **Page crossfade** | Route transitions | `AnimatePresence` wrapping `children`, opacity + slight y-shift |
| **Scroll progress bar** | All pages, top of viewport | Thin gradient bar, width = scroll percentage |
| **Floating decoration** | Hero, CTA banner | Slow `translateY` oscillation, 3–5s cycle, subtle |
| **Hover border glow** | Glass cards on hover | Border transitions from `border-default` → gradient border |
| **Button shine** | Primary CTA buttons on hover | Moving highlight streak across button (CSS `background-position`) |
| **Nav reveal/hide** | Navbar | Show on scroll up, hide on scroll down, glass bg on scroll |

### 2.4 Motion Accessibility
- **`prefers-reduced-motion: reduce`** → disable: parallax, aurora, floating, decode, marquee, tilt, magnetic
- **`prefers-reduced-motion: reduce`** → keep but simplify: fade-in (instant, no translate), page transitions (crossfade only)
- All carousels: manual controls always visible, auto-play pauses on hover AND focus
- No animation flashes more than 3 times/second

### 2.5 Mobile Motion Adjustments
- Magnetic cursor: **disabled** (no hover on touch)
- 3D tilt: **disabled** (replaced with simple scale-up on tap)
- Aurora hero: **simplified** to static gradient (saves GPU)
- Parallax intensity: **halved** (15% offset max)
- Stagger delays: **shortened** (50ms instead of 80ms)
- Floating decorations: **disabled** (saves battery)
- Marquee: **kept** but slower speed

---

## 3. CONTENT STRATEGY & DISTRIBUTION

### 3.1 Content Types & Where They Live

| Content Type | Primary Location | Also Appears In |
|-------------|-----------------|-----------------|
| **Company narrative** | /about hero + mission section | Homepage S3 (snapshot) |
| **Service descriptions** | /services/[slug] (full detail) | Homepage S4 (bento cards), /about |
| **Product showcases** | /products/[slug] (full detail) | Homepage S5 (showcase cards) |
| **Case studies** | /projects/[slug] (full detail) | Homepage S6 (featured 3), /services/[slug] related |
| **Client logos** | Homepage S2 (trust bar) | /about, /projects |
| **Testimonials** | Homepage S10 (carousel) | /services/[slug], /projects/[slug], /about |
| **Process/methodology** | Homepage S7 (timeline) | /services/[slug] (mini version), /about |
| **Tech stack** | Homepage S8 (grid) | /services/[slug], /projects/[slug] |
| **FAQs** | /faq (full categorized) | Homepage S13 (top 5), /services/[slug], /products/[slug], /contact |
| **Blog articles** | /blog/[slug] (full post) | Homepage S12 (latest 3), related posts on each blog |
| **Team/leadership** | /about (leadership section) | Homepage S3 (briefly) |
| **Company stats** | Homepage S3 (counters) | /about (full stats section) |
| **Contact info** | /contact (full page) | Footer (all pages), homepage S14 CTA |
| **Career openings** | /careers (listing) | Footer link, /about CTA |
| **Partner logos** | /partners (full page) | /products/[slug] integrations |
| **Legal docs** | /privacy, /terms, /cookie-policy | Footer links |

### 3.2 Content Hierarchy Per Page

**Every page follows this content rhythm:**
1. **Hook** — Hero section grabs attention (headline + visual + CTA)
2. **Context** — What is this page about, why should they care
3. **Evidence** — Show proof (features, case studies, metrics, testimonials)
4. **Detail** — Deep dive into specifics
5. **Trust** — Social proof, logos, quotes
6. **Action** — Clear CTA (what to do next)

### 3.3 Content Tone & Voice
- **Headlines**: Bold, confident, concise. Tech-forward but human. No jargon overload.
  - Good: "Software that scales with your ambition"
  - Bad: "Leveraging synergistic paradigms for digital transformation"
- **Body text**: Clear, warm, professional. Short paragraphs (2–3 sentences max).
- **CTAs**: Action-oriented, specific. "Start a Project", "See Our Work", "Book a Discovery Call"
- **Overlines**: Uppercase, short category labels. "OUR SERVICES", "SELECTED WORK", "HOW WE BUILD"

### 3.4 Content Distribution Strategy (External)
- **Blog**: 2–4 posts/month targeting search intent keywords
  - Types: Technical tutorials, industry insights, case study breakdowns, company news
  - Each post links to relevant services/products (internal linking for SEO)
- **Social sharing**: Every blog post and case study has OG images for social preview
- **Newsletter**: Monthly digest of latest articles + company updates
- **Case studies**: Published as both /projects/[slug] pages AND condensed blog posts for wider reach

### 3.5 Content Reuse Map
Content is written once and surfaces in multiple places at different detail levels:

```
SERVICE "AI Development":
├── Full detail    → /services/ai-development (10 sections, 1500+ words)
├── Summary card   → Homepage S4 bento grid (icon + title + 1-line, ~20 words)
├── Mention        → Related case studies on /projects/[slug]
├── Blog tie-in    → /blog posts tagged "AI" link back to service page
└── FAQ context    → /faq "AI & ML" category references service
```

```
PROJECT "ClientX Platform":
├── Full case study → /projects/clientx-platform (8 sections, 1000+ words)
├── Featured card   → Homepage S6 (image + title + metric + tags)
├── Related work    → /services/[slug] "Related Projects" section
├── Blog post       → /blog/how-we-built-clientx (detailed technical breakdown)
└── Testimonial     → Client quote appears in Homepage S10 + /services/[slug]
```

---

## 4. SITE ARCHITECTURE — ALL PAGES

### 4.1 Complete Page Map (20 routes)

```
MAIN PAGES
/                                → Homepage (15 sections)
/about                           → Company story, mission, values, leadership (8 sections)
/services                        → All services overview (6 sections)
/services/[slug]                 → Service detail (10 sections each) — e.g., /services/ai-development
/products                        → All products overview (6 sections)
/products/[slug]                 → Product detail (12 sections each) — e.g., /products/novek-analytics
/projects                        → Portfolio / case studies (5 sections)
/projects/[slug]                 → Case study detail (8 sections each)

CONTENT PAGES
/blog                            → Blog listing with search + category filters (3 sections)
/blog/[slug]                     → Blog article (reading layout + sidebar)
/blog/category/[slug]            → Blog filtered by category

ENGAGEMENT PAGES
/contact                         → Contact form + company info + map (4 sections)
/faq                             → Categorized FAQs with search (3 sections)
/careers                         → Open positions + culture (6 sections)
/careers/[slug]                  → Job posting detail + apply form
/partners                        → Partners, integrations, ecosystem (5 sections)

LEGAL & UTILITY
/privacy                         → Privacy policy (reading layout)
/terms                           → Terms of service (reading layout)
/cookie-policy                   → Cookie policy (reading layout)
not-found                        → Custom branded 404 page
```

### 4.2 Navigation Structure

**Desktop Navbar**
```
[Logo]  Services ▾  Products ▾  Work  Insights  About  [Get in Touch →]

Services dropdown:
  - Service 1 (with icon + 1-liner)
  - Service 2
  - Service 3
  - Service 4
  - Service 5
  - View All Services →

Products dropdown:
  - Product 1 (with icon + tagline)
  - Product 2
  - Product 3
  - View All Products →
```

**Mobile Navigation**
```
[Logo]                    [☰ Hamburger]

Full-screen glass overlay:
  Services (expandable)
    - Service 1
    - Service 2
    - ...
  Products (expandable)
    - Product 1
    - Product 2
    - ...
  Work
  Insights
  About
  Careers
  Contact

  [Get in Touch →]  (bottom CTA)
```

**Footer Navigation**
```
Col 1: Logo + tagline + social icons (LinkedIn, Twitter/X, GitHub)
Col 2: Company — About, Careers, Partners, Contact
Col 3: Services — [each service linked]
Col 4: Resources — Blog, FAQ, Privacy, Terms, Cookie Policy
Bottom: Newsletter input | Copyright © 2026 Novek | Back to top ↑
```

---

## 5. HOMEPAGE — 15 SECTIONS (Full Detail)

### S1: HERO (100vh)
**Layout**: Full viewport, centered content over animated background
**Background**:
- Base: `--bg-base`
- 3 large gradient blobs (purple, blue, cyan) slowly animating position + scale
- Subtle noise texture overlay at 3% opacity
- Floating glassmorphic shapes (rectangles, circles) at low opacity, drifting slowly
**Content**:
- Overline: `JetBrains Mono 11px uppercase tracking-widest text-accent` — "CUSTOM SOFTWARE & PRODUCTS"
- Headline: `Display size` — character decode animation on load — e.g., "We Build Software That Moves Industries Forward"
- Subtitle: `Body LG text-secondary max-w-[600px]` — "From bespoke enterprise platforms to innovative SaaS products — we turn complex challenges into elegant, scalable solutions."
- CTAs (row, gap-4):
  - "Explore Our Work" → gradient filled button → links to /projects
  - "Start a Project" → glass outline button → links to /contact
- Scroll indicator: animated mouse icon or chevron at bottom, pulsing opacity
**Mobile**: Smaller heading (38px), stacked full-width CTAs, static gradient bg (no blobs), no floating shapes
**Animation**: Character decode on headline (1.2s), fade-up subtitle (0.4s delay), fade-up CTAs (0.6s delay), continuous bg animation

### S2: TRUST BAR
**Layout**: Full-width, slim section (~100px height), centered
**Content**:
- Text above: `Overline style` — "TRUSTED BY INNOVATORS WORLDWIDE"
- Single row of 8–12 client logos in infinite marquee
- Logos: grayscale at 40% opacity → full opacity on hover
- Duplicate logo set for seamless infinite scroll
**Mobile**: Same, slightly smaller logos, same marquee
**Animation**: Continuous CSS `translateX` marquee, fade-in section on scroll

### S3: ABOUT SNAPSHOT
**Layout**: Container max-width, 2-column (60/40 split)
**Left Column**:
- Overline: "WHO WE ARE"
- Heading (H2): "Crafting Digital Experiences Since [Year]"
- Body text (2 short paragraphs): Company intro, what you do, your approach
- Text link: "Learn our story →" → /about
**Right Column**:
- Abstract visual: gradient mesh image or 3D render
**Below (full-width row)**: 4 stat counters
- "150+" Projects Delivered
- "8+" Years of Experience
- "50+" Team Members
- "12+" Countries Served
- Each: large number (H2 size, accent gradient text) + label (Caption, muted)
**Mobile**: Stacked (text above, image below), stats in 2x2 grid
**Animation**: Text fade-up staggered, image scale-in, counters tick-up from 0 on view

### S4: SERVICES BENTO GRID
**Layout**: Container, bento grid (asymmetric)
**Content**:
- Overline: "WHAT WE DO"
- Heading (H2): "End-to-End Software Solutions"
- Subtitle: 1 line about full-cycle capabilities
- Bento grid: 6 cards in layout like:
  ```
  [  Large Card 1  ] [  Card 2  ]
  [ Card 3 ][ Card 4 ][ Card 5 ]
  [      Large Card 6           ]
  ```
- Each card: glass background, gradient icon (32px), H4 title, 1-line description, arrow icon top-right, glow on hover
- Click → /services/[slug]
**Mobile**: Single column, equal-sized cards
**Animation**: Stagger in (80ms), 3D tilt on hover (desktop), glow follow cursor (desktop)

### S5: PRODUCTS SHOWCASE
**Layout**: Container, alternating rows (product left/right)
**Content**:
- Overline: "OUR PRODUCTS"
- Heading (H2): "Products We've Built & Ship"
- Subtitle: 1 line
- 2–3 product blocks, alternating layout:
  **Odd rows**: Image/mockup LEFT, text RIGHT
  **Even rows**: Text LEFT, image/mockup RIGHT
  Each product block:
  - Product screenshot in device mockup (laptop or browser frame)
  - Product name (H3) + tagline (Body, muted)
  - 3 key feature pills/badges
  - "Learn more →" link → /products/[slug]
**Mobile**: Stacked (image above text for all), full-width
**Animation**: Image parallax (slight), text fade-up, pills stagger in

### S6: FEATURED PROJECTS
**Layout**: Container, then 3 large cards
**Content**:
- Overline: "SELECTED WORK"
- Heading (H2): "Projects That Speak For Themselves"
- Subtitle: 1 line
- 3 project cards (full container width, stacked vertically):
  Each card:
  - Large thumbnail image (16:9, rounded-xl) with dark overlay gradient
  - Over image: project name (H3), client name (Caption), 2–3 tech tags (pills)
  - Below image: 1-line description + key metric highlight ("300% performance increase")
  - Click → /projects/[slug]
- Bottom CTA: "View all projects →" link
**Mobile**: Cards stack, smaller images, same content
**Animation**: Image reveal (clip-path), text fade-up, parallax on image

### S7: PROCESS TIMELINE
**Layout**: Container, vertical timeline
**Content**:
- Overline: "HOW WE BUILD"
- Heading (H2): "Our Proven Process"
- Subtitle: "From first conversation to ongoing partnership"
- 6 steps in vertical timeline:
  1. **Discovery** — Understanding your vision, users, and business goals
  2. **Strategy** — Defining scope, architecture, and technical roadmap
  3. **Design** — Crafting interfaces that delight users and drive results
  4. **Development** — Building robust, scalable software with modern tech
  5. **Testing & QA** — Ensuring quality across every device and scenario
  6. **Launch & Support** — Deploying with confidence, evolving with your needs
  Each step: numbered badge (gradient circle) + icon + H4 title + Body description
  Steps connected by vertical SVG line
**Desktop**: Alternating left/right timeline nodes
**Mobile**: Left-aligned single column timeline
**Animation**: SVG line draws on scroll, nodes fade-up sequentially

### S8: TECHNOLOGY STACK
**Layout**: Container, categorized grid
**Content**:
- Overline: "OUR TOOLKIT"
- Heading (H2): "Technologies We Master"
- Subtitle: 1 line
- Categories (each a row with label + icon grid):
  - **Frontend**: React, Next.js, TypeScript, Vue, Tailwind, etc.
  - **Backend**: Node.js, Python, Go, Rust, etc.
  - **Cloud & DevOps**: AWS, GCP, Azure, Docker, Kubernetes, etc.
  - **AI & Data**: TensorFlow, PyTorch, OpenAI, LangChain, etc.
  - **Mobile**: React Native, Flutter, Swift, Kotlin
  - **Database**: PostgreSQL, MongoDB, Redis, etc.
- Each tech: icon (24px) + label below, glass card background on hover
**Alternative layout**: Dual-row infinite marquee (different speeds, opposite directions)
**Mobile**: Horizontal scroll per category row, or condensed grid (4 per row)
**Animation**: Stagger fade-in per category group

### S9: WHY CHOOSE US
**Layout**: Container, 2x2 card grid (or 4 in a row on wide)
**Content**:
- Overline: "WHY NOVEK"
- Heading (H2): "What Sets Us Apart"
- 4 differentiator cards:
  1. **Dedicated Teams** — "Your project gets a focused, senior team — not juniors rotating between clients."
  2. **Full Ownership** — "You own 100% of the code, IP, and everything we build. No lock-in, ever."
  3. **Transparent Process** — "Weekly demos, open communication, and real-time project visibility."
  4. **Long-Term Partnership** — "We don't disappear after launch. Ongoing support, iteration, and growth."
- Each card: large icon (gradient), H4 title, Body description, glass card style with gradient border on hover
**Mobile**: 1-column stack
**Animation**: Stagger fade-up, glow on hover

### S10: TESTIMONIALS
**Layout**: Container, single testimonial card centered (carousel)
**Content**:
- Overline: "CLIENT STORIES"
- Heading (H2): "What Our Partners Say"
- Testimonial card (glass, max-w-[700px], centered):
  - Large quote mark icon (gradient, decorative)
  - Quote text (Body LG, italic style or slightly larger)
  - Divider line
  - Client avatar (48px circle) + name (Body, medium) + role & company (Caption, muted)
  - Star rating (optional)
- Navigation: dot indicators + prev/next arrows
- 5+ testimonials rotating
- Auto-rotate every 6s, pause on hover
**Mobile**: Same layout, swipe to navigate, smaller card padding
**Animation**: Crossfade between testimonials, card fade-in on scroll

### S11: CASE STUDY METRICS (NEW — replaces pricing preview)
**Layout**: Full-bleed dark section with gradient accent background tint
**Content**:
- Overline: "REAL RESULTS"
- Heading (H2): "Impact That Matters"
- 4 large metric cards in row:
  - "10x" — Faster deployment pipelines
  - "$2M+" — Revenue generated for clients
  - "99.9%" — Uptime across our platforms
  - "4.9/5" — Average client satisfaction
- Each: huge number (Display size, gradient text) + description below (Body SM, muted)
**Mobile**: 2x2 grid
**Animation**: Numbers count up from 0, background gradient slowly shifts

### S12: BLOG PREVIEW
**Layout**: Container, 3-card grid
**Content**:
- Overline: "INSIGHTS"
- Heading (H2): "Latest From Our Blog"
- Subtitle: 1 line
- 3 latest blog posts as cards:
  - Thumbnail image (16:9, rounded-lg)
  - Category pill (above title)
  - Title (H4)
  - Meta: date + reading time (Caption, muted)
  - Excerpt (Body SM, 2 lines max, truncated)
- Bottom CTA: "View all articles →" link
**Mobile**: Horizontal scroll carousel (snap), or single column stack
**Animation**: Cards stagger in

### S13: FAQ PREVIEW
**Layout**: Container, max-w-[800px] centered
**Content**:
- Overline: "QUESTIONS"
- Heading (H2): "Frequently Asked Questions"
- 5 most common FAQs as accordions:
  - Question (H4 weight, clickable row with + / - icon)
  - Answer (Body, muted, revealed on expand)
  - Example questions:
    1. "What types of software do you build?"
    2. "How long does a typical project take?"
    3. "What is your development process?"
    4. "Do you offer ongoing support after launch?"
    5. "How do we get started?"
- Bottom CTA: "See all FAQs →" link to /faq
**Mobile**: Full-width, same accordion style
**Animation**: Smooth height expand (Framer Motion), items fade-in on scroll

### S14: CTA BANNER
**Layout**: Full-bleed, gradient background (accent-primary → accent-secondary)
**Content**:
- Heading (H2, white): "Ready to Build Something Exceptional?"
- Subtitle (Body LG, white/80%): "Let's discuss your project and find the perfect solution."
- Two CTAs (row):
  - "Start a Project" → solid white button → /contact
  - "Book a Discovery Call" → glass outline button (white border) → calendly link
- Subtle background: floating particle dots or slowly shifting gradient
**Mobile**: Centered text, stacked full-width buttons
**Animation**: Fade-in on scroll, continuous subtle bg animation

### S15: FOOTER
(Detailed in Section 4.2 Navigation Structure above)
- 4-column layout on desktop, stacked on mobile
- Newsletter email input + "Subscribe" button
- Social icons
- Legal links
- "Back to top" button
- Bottom: © 2026 Novek. All rights reserved.

---

## 6. INNER PAGES — EVERY SECTION DETAILED

### 6.1 /about — Company Story (8 sections)

**A1: Hero**
- Full-width header with gradient background tint
- Overline: "ABOUT NOVEK"
- Heading (H1): "We Build Technology That Matters"
- Subtitle: 2 sentences about the company founding story
- Optional: abstract hero image or 3D render

**A2: Our Story**
- 2-column: Text LEFT (3–4 paragraphs of company narrative), Image RIGHT (office/team photo or abstract)
- Founding story, evolution, what drives you

**A3: Mission & Vision**
- 2 glass cards side by side:
  - Mission card: icon + "Our Mission" + mission statement
  - Vision card: icon + "Our Vision" + vision statement

**A4: Company Timeline**
- Interactive horizontal or vertical timeline
- Key milestones: founding, first client, product launches, team growth, awards
- Each: year + title + short description

**A5: Core Values**
- 4–6 value cards in grid (2x3 or 3x2)
- Each: icon + value name (H4) + description (Body SM)
- Values: Innovation, Integrity, Quality, Collaboration, Impact, Growth (example)

**A6: Leadership**
- 3–4 key leaders (no separate team page, just highlights here)
- Each: photo (rounded-xl) + name + role + short bio (2 sentences) + LinkedIn icon
- Glass card style

**A7: Stats / Impact**
- Full-width accent-tinted background
- 6 stat counters in row (more than homepage):
  - Projects, clients, countries, team size, years, technologies

**A8: CTA**
- Split: Left = "Want to work with us?" → /contact | Right = "Want to join us?" → /careers

---

### 6.2 /services — Services Listing (6 sections)

**SL1: Hero**
- Overline: "OUR SERVICES"
- Heading (H1): "End-to-End Software Solutions"
- Subtitle: Full-cycle development from concept to scale

**SL2: Services Grid**
- All services as large cards (2 per row desktop, 1 mobile)
- Each: icon + name (H3) + description (Body, 3–4 lines) + "Learn more →" + key capabilities as pills
- Glass cards with glow hover

**SL3: Industries We Serve**
- Grid of industry badges/cards:
  - FinTech, HealthTech, E-Commerce, SaaS, EdTech, Logistics, Real Estate, Media, etc.
- Each: icon + industry name

**SL4: Our Approach (compact)**
- 3-step summary: Discover → Build → Scale
- Condensed version of homepage process timeline

**SL5: Testimonial**
- Single featured testimonial relevant to services
- Glass card, centered

**SL6: CTA**
- "Have a project in mind? Let's talk." + CTA button → /contact

---

### 6.3 /services/[slug] — Service Detail (10 sections)

**SD1: Hero**
- Breadcrumb: Services > [Service Name]
- Overline: service category
- Heading (H1): Service name
- Subtitle: 1-sentence tagline
- Hero visual: abstract illustration or gradient mesh related to service
- CTA: "Discuss This Service" → /contact?service=[slug]

**SD2: Overview**
- 2–3 paragraphs explaining what this service is, who it's for, and why it matters
- Split layout optional: text left, supporting visual right

**SD3: Key Capabilities**
- Bento grid of 6–8 capability cards
- Each: icon + capability name + 1-line description
- Glass cards

**SD4: How It Works**
- 4-step mini process specific to this service
- Horizontal steps on desktop, vertical on mobile
- Each: step number + title + description

**SD5: Technologies Used**
- Grid of relevant technology icons + labels
- Only technologies relevant to THIS service

**SD6: Case Study Highlight**
- 1–2 related projects
- Large card: project image + name + metric result + "Read case study →"

**SD7: Benefits**
- 4 benefit cards (2x2 grid)
- Each: icon + benefit title + description
- Why this service specifically helps the client

**SD8: Related Services**
- 2–3 other services that complement this one
- Small cards: icon + name + 1-liner + link

**SD9: FAQ**
- 5 questions specific to this service, accordion style

**SD10: CTA**
- "Ready to get started with [Service]?" + contact form shortcut or button

---

### 6.4 /products — Products Listing (6 sections)

**PL1: Hero**
- Overline: "OUR PRODUCTS"
- Heading (H1): "Products We've Built & Ship"
- Subtitle: From internal tools to market-ready platforms

**PL2: Product Cards**
- Each product as a large feature card:
  - Product screenshot/mockup
  - Name (H3) + tagline
  - 4–5 key features as bullet points or pills
  - "Explore [Product] →" CTA
- Alternating left/right layout

**PL3: What Makes Our Products Different**
- 3 differentiator points:
  - Built by the same team that ships custom software
  - Battle-tested architecture
  - Continuous updates and support

**PL4: Integration Ecosystem**
- "Works with tools you already use" + grid of integration logos

**PL5: Testimonial**
- Product-specific client testimonial

**PL6: CTA**
- "Want a custom product? We build those too." + "Request a Demo" + "Contact Us"

---

### 6.5 /products/[slug] — Product Detail (12 sections)

**PD1: Hero**
- Breadcrumb: Products > [Product Name]
- Product name (H1) + tagline (subtitle)
- Hero screenshot (in browser/device mockup)
- Two CTAs: "Request a Demo" + "Contact Sales"
- Trust badges: "Used by X+ teams" or similar

**PD2: Problem Statement**
- "The Challenge" — what pain point does this product solve
- Relatable scenario description (2–3 sentences)

**PD3: Features Deep-Dive**
- Tabbed interface or scrolling sections
- 4–6 major features, each with:
  - Feature name (H3) + description
  - Screenshot showing that feature in action
  - 2–3 bullet point sub-capabilities
- Tabs switch content with layout animation

**PD4: How It Works**
- 3–4 step user journey
- Each: step number + title + description + illustration/screenshot
- Shows the product in action from user's perspective

**PD5: Technical Architecture** (for technical audiences)
- High-level architecture diagram or infographic
- Tech stack used
- Performance stats (uptime, response times, etc.)
- Security & compliance notes

**PD6: Integrations**
- Grid of integration logos this product works with
- Each: logo + name + "Connect with [tool]" label
- Link to /partners if relevant

**PD7: Use Cases**
- 3–4 use case cards showing different ways the product is used
- Each: use case title + 1–2 sentence scenario + relevant icon

**PD8: Case Study**
- 1 customer success story
- Challenge → Solution → Results format
- Key metric highlight cards
- "Read full case study →" link

**PD9: Demo / Video**
- Embedded product demo video (or interactive walkthrough)
- "See [Product] in action" heading
- Play button overlay on thumbnail

**PD10: FAQ**
- 6–8 product-specific questions (accordion)
- Questions about features, pricing model, support, data handling

**PD11: What's New / Changelog** (optional, if product has regular updates)
- Last 3–5 updates with dates
- Brief description of what changed
- "View full changelog →" (if applicable)

**PD12: CTA**
- Full-width gradient section
- "Ready to try [Product]?"
- "Request a Demo" + "Contact Sales" + "Schedule a Walkthrough"

---

### 6.6 /projects — Portfolio (5 sections)

**W1: Hero**
- Overline: "OUR WORK"
- Heading (H1): "Projects That Speak For Themselves"
- Filter bar: All | By Industry ▾ | By Service ▾ | By Technology ▾

**W2: Project Grid**
- Filterable grid of project cards (3 columns desktop, 2 tablet, 1 mobile)
- Each card: thumbnail + project name + client + tags + 1 key metric
- Click → /projects/[slug]
- Featured project at top (larger card spanning 2 columns)

**W3: Stats Bar**
- Horizontal bar: "X+ projects | Y+ industries | Z+ technologies"

**W4: Testimonial**
- Single client testimonial related to project work

**W5: CTA**
- "Have a project in mind? Let's build it." + button

---

### 6.7 /projects/[slug] — Case Study (8 sections)

**CS1: Hero**
- Breadcrumb: Work > [Project Name]
- Full-width hero image (project screenshot)
- Project name (H1), client name, industry, year
- Quick facts row: timeline, team size, services used

**CS2: The Challenge**
- What problem the client faced
- Business context, pain points
- 2–3 paragraphs

**CS3: Our Approach**
- How Novek approached the problem
- Strategy decisions, architecture choices
- Technical and design methodology

**CS4: The Solution**
- What was built — features, functionality
- Multiple screenshots with captions
- Key technical decisions explained

**CS5: Process Breakdown**
- Mini-timeline specific to this project
- Phases with descriptions

**CS6: Results & Impact**
- 3–4 metric cards (gradient text numbers):
  - Performance improvement, user growth, revenue impact, time saved, etc.
- Before/after comparison if applicable
- Client quote about results

**CS7: Tech Stack Used**
- Grid of technology icons used in this project

**CS8: Related Projects**
- 2–3 similar projects
- "View more work →" link
- CTA: "Want similar results? Let's talk."

---

### 6.8 /blog — Blog Listing (3 sections)

**B1: Hero**
- Heading (H1): "Insights & Articles"
- Search bar (glass input)
- Category filter pills: All, Engineering, Design, AI/ML, Case Studies, Company News

**B2: Articles Grid**
- Featured post at top (full-width card: large image + title + excerpt + meta)
- Below: 3-column grid of remaining posts (2 on tablet, 1 on mobile)
- Pagination at bottom (or infinite scroll)
- Each card: thumbnail + category pill + title + date + reading time + excerpt (2 lines)

**B3: Newsletter CTA**
- Between article rows: "Get insights delivered to your inbox" + email input + subscribe

---

### 6.9 /blog/[slug] — Blog Article

**Layout**: Max-width 720px centered content, optional sticky TOC sidebar on desktop

**Header**:
- Breadcrumb: Blog > [Category] > [Title]
- Category pill
- Title (H1)
- Meta: Author name + avatar + date + reading time
- Share buttons: Twitter/X, LinkedIn, Copy link

**Body**:
- MDX rendered content with:
  - Proper heading hierarchy (H2, H3 within article)
  - Code blocks with syntax highlighting (shiki)
  - Blockquotes (glass styled)
  - Images with captions (rounded, max-width)
  - Callout boxes (tip, warning, info)
  - Embedded videos if needed

**Sidebar** (desktop only, sticky):
- Table of contents (scrollspy — highlights current heading)

**After article**:
- Tags: related topic pills
- Author bio card: avatar + name + role + bio + social links
- Related articles: 3 posts in row
- CTA: "Enjoyed this? Subscribe for more."

---

### 6.10 /blog/category/[slug] — Category Filter
- Same as /blog but filtered by category
- Heading (H1): "[Category Name]" with description
- Breadcrumb: Blog > [Category]

---

### 6.11 /contact (4 sections)

**C1: Hero**
- Heading (H1): "Let's Build Something Together"
- Subtitle: "Whether you have a detailed spec or just a rough idea — we'd love to hear it."

**C2: Split Layout**
Left (60%): Contact form
- Fields: Name*, Email*, Company, Phone, Service Interest (dropdown: Custom Development, AI/ML, Product Design, etc.), Budget Range (dropdown: <$25K, $25K–$50K, $50K–$100K, $100K+, Not Sure), Project Description* (textarea)
- Submit button: "Send Message"
- Note: "We typically respond within 24 hours"

Right (40%): Company info
- Email (tappable mailto: link)
- Phone (tappable tel: link)
- Address (linked to Google Maps)
- Social media links
- "Prefer to schedule?" + Calendly/Cal.com embed or link

**C3: Office Location**
- Map embed (if applicable) or office photo
- Address details

**C4: FAQ Preview**
- "Before you reach out" — 3 relevant FAQs as accordions

---

### 6.12 /faq (3 sections)

**F1: Hero**
- Heading (H1): "Frequently Asked Questions"
- Search input: "Search questions..." (filters FAQ items client-side)

**F2: Categorized FAQs**
- Tab buttons or section headers for categories:
  **General** (5–8 Qs)
  - What does Novek do?
  - Where is Novek located?
  - What industries do you serve?
  - How large is your team?

  **Services & Process** (6–10 Qs)
  - What services do you offer?
  - How long does a typical project take?
  - What is your development process?
  - Do you work with existing codebases?
  - Can you help with just design, or just development?
  - Do you provide ongoing maintenance?

  **Products** (4–6 Qs)
  - What products do you offer?
  - Can I request a demo?
  - Do your products integrate with X?
  - What support is included?

  **Technical** (4–6 Qs)
  - What technologies do you use?
  - How do you handle security?
  - Do you follow any specific methodology (Agile, etc.)?
  - Can you work with our existing tech stack?

  **Engagement & Billing** (4–6 Qs)
  - How does pricing work? → "Every project is unique. We provide custom quotes based on scope, complexity, and timeline."
  - What are your payment terms?
  - Do you offer fixed-price or time-and-materials?
  - What is your typical team composition?

  **Support & Post-Launch** (3–5 Qs)
  - What happens after launch?
  - What is your SLA?
  - How do we request changes or new features?

- All items: accordion style with smooth expand animation

**F3: CTA**
- "Still have questions?" + "Contact us →" button

---

### 6.13 /careers (6 sections)

**CR1: Hero**
- Heading (H1): "Join Novek"
- Subtitle: "Build the future of software with a team that cares."

**CR2: Why Work Here**
- 4–6 perk cards:
  - Remote-friendly / flexible work
  - Cutting-edge projects
  - Growth & learning budget
  - Competitive compensation
  - Health & wellness
  - Team retreats & events

**CR3: Open Positions**
- Filterable list by department (Engineering, Design, Product, Operations)
- Each: Job title + department + location + type (Full-time/Contract/Remote)
- Click → /careers/[slug]

**CR4: Culture Gallery**
- Photo grid or carousel of team/workspace photos

**CR5: Employee Quotes**
- 2–3 team member quotes about working at Novek
- Glass cards with photo + quote + name + role

**CR6: Open Application CTA**
- "Don't see your role?"
- "We're always looking for talented people. Send us your resume."
- Link to /contact or embedded mini-form

---

### 6.14 /careers/[slug] — Job Posting

**Layout**: Reading layout (max-width 800px)
- Breadcrumb: Careers > [Job Title]
- Job title (H1) + department + location + type
- Posted date
- **About the Role**: 2–3 paragraphs
- **Responsibilities**: Bullet list
- **Requirements**: Must-haves bullet list
- **Nice-to-Haves**: Bullet list
- **What We Offer**: Benefits bullet list
- **Application Form**: Name, Email, LinkedIn URL, Resume upload (file input), Cover letter (textarea), "Submit Application" button
- Related openings: 2–3 other positions

---

### 6.15 /partners (5 sections)

**P1: Hero**
- Heading (H1): "Our Partner Ecosystem"
- Subtitle: "We collaborate with the best to deliver exceptional results."

**P2: Partner Grid**
- Categorized: Technology Partners, Cloud Partners, Design Partners, etc.
- Each: logo + partner name + short description + "Learn more" external link
- Glass cards

**P3: Integration Showcase**
- "Our products integrate with" + grid of integration logos
- Brief description of how integrations work

**P4: Become a Partner**
- "Interested in partnering with Novek?"
- Brief description + CTA → contact form or dedicated partner inquiry form

**P5: CTA**
- Standard CTA banner

---

### 6.16 Legal Pages (/privacy, /terms, /cookie-policy)

**Layout**: Max-width 800px, centered reading layout
- Title (H1) + "Last updated: [date]"
- Table of contents sidebar (desktop) or collapsible top (mobile)
- Clean typography, proper heading hierarchy
- Scroll-linked TOC highlighting

---

### 6.17 Custom 404 Page

- Dark background with subtle gradient
- Large "404" display text (gradient, semi-transparent)
- Heading: "Page Not Found"
- Subtitle: "The page you're looking for doesn't exist or has been moved."
- Search bar: "Try searching..."
- Quick links: Homepage, Services, Projects, Contact
- Full navbar and footer remain

---

## 7. UNIQUE / SIGNATURE FEATURES

1. **Character decode hero** — headline letters scramble through random chars then resolve (like a cipher being cracked)
2. **Dynamic aurora background** — 3 gradient blobs with slow CSS animation, mouse-reactive on desktop
3. **Glassmorphism everywhere** — every card, modal, nav uses frosted glass (blur + low-opacity white bg + subtle border)
4. **Bento grid layouts** — asymmetric, editorial grids instead of boring equal columns (homepage services, product features)
5. **Magnetic cursor** — buttons and links pull toward cursor within proximity range (desktop only)
6. **Custom cursor** — small dot + larger ring, ring scales up on interactive elements (desktop only)
7. **3D card tilt** — cards physically rotate toward cursor on hover with depth shadow
8. **Cursor glow follow** — radial gradient follows cursor over cards (reveals a subtle light effect)
9. **Gradient border animation** — premium cards have animated gradient flowing around their border
10. **Scroll progress bar** — thin accent gradient bar at very top of viewport showing page scroll %
11. **Noise/grain overlay** — subtle film grain texture over entire page for tactile premium feel
12. **Page transitions** — smooth crossfade + slight y-shift between routes
13. **SVG path drawing** — timeline connector lines and decorative elements draw themselves on scroll
14. **Smooth scroll (Lenis)** — buttery smooth scroll feel across entire site
15. **Smart navbar** — glass background appears on scroll, hides on scroll down, shows on scroll up
16. **Command palette** — Cmd/Ctrl+K opens quick search/navigation (Linear-style)
17. **Blog TOC scrollspy** — table of contents highlights current section as you read
18. **Animated stat counters** — numbers tick up from 0 when scrolled into view
19. **Button shine effect** — moving highlight streak across primary buttons on hover
20. **Dark mode only** — forced dark, no toggle, consistent luxury feel

---

## 8. MOBILE RESPONSIVENESS

### 8.1 Philosophy
**Mobile-first CSS → enhance upward.** Every component starts with the mobile layout in Tailwind (no prefix), then adds `md:`, `lg:`, `xl:` enhancements.

### 8.2 Breakpoints
| Name | Range | Target |
|------|-------|--------|
| Default (mobile) | 0–639px | Phones |
| `sm` | 640–767px | Large phones |
| `md` | 768–1023px | Tablets |
| `lg` | 1024–1279px | Small laptops |
| `xl` | 1280–1535px | Desktops |
| `2xl` | 1536px+ | Large displays |

### 8.3 Layout Behavior Per Breakpoint

| Component | Mobile | Tablet (md) | Desktop (xl+) |
|-----------|--------|-------------|----------------|
| Navbar | Logo + hamburger | Logo + hamburger | Logo + full nav + CTA |
| Hero heading | 38px, stacked CTAs | 56px, row CTAs | 80px, row CTAs |
| Service cards | 1-col stack | 2-col grid | Bento (2+4 asymmetric) |
| Product showcase | Stack (img above text) | Stack (img above text) | Alternating L/R |
| Project cards | 1-col | 2-col | 3-col or large cards |
| Process timeline | Left-aligned vertical | Left-aligned vertical | Alternating L/R |
| Tech stack | 3-per-row grid | 5-per-row grid | 6+ per row or marquee |
| Differentiators | 1-col | 2-col | 2x2 grid |
| Testimonials | 1 card, swipe | 1 card, arrows | 1 card, arrows |
| Blog grid | 1-col stack | 2-col | 3-col (featured=full) |
| FAQ accordions | Full-width | Full-width | Centered max-w-800 |
| CTA banner | Stacked, full-width btns | Row btns | Row btns |
| Footer | Stacked cols | 2x2 grid | 4-col row |
| Stats counters | 2x2 grid | 4 in row | 4 in row |
| Contact form | Full-width | Full-width | 60/40 split |
| Blog article | Full-width, no sidebar | Full-width, no sidebar | 720px + sticky TOC |

### 8.4 Mobile Navigation
- **Hamburger icon** top-right (3 lines → X on open)
- **Full-screen overlay** with glass background (`bg-base/95 backdrop-blur-xl`)
- Large touch targets (each nav item 56px height minimum)
- Services and Products have expandable sub-menus (chevron indicator)
- CTA button ("Get in Touch") pinned at bottom of overlay
- Animated open/close (slide-in-from-right or fade)
- Focus trap when open (a11y)
- Escape key or back button closes

### 8.5 Mobile-Specific UX
- **Sticky mobile CTA bar**: After scrolling past hero, a slim bar appears at bottom with "Get in Touch" button
- **Tappable contact info**: Phone → `tel:`, email → `mailto:`, address → Google Maps link
- **Form input modes**: `inputmode="email"` on email fields, `inputmode="tel"` on phone, `inputmode="numeric"` where needed
- **Swipe gestures**: Testimonials carousel, product gallery (via Framer Motion drag)
- **No hover-dependent content**: Everything accessible via tap (no tooltip-only info)
- **Bottom sheet menus**: Filters on /projects and /blog open as bottom sheets on mobile instead of dropdowns

### 8.6 Mobile Performance
- Images: `next/image` with responsive `sizes` attribute, WebP/AVIF
- Animations: reduced (see Section 2.5)
- Fonts: `font-display: swap`, preload critical fonts
- Lazy load: all below-fold images and heavy components
- Bundle: automatic code-splitting per route

---

## 9. ACCESSIBILITY (WCAG 2.1 AA)

### 9.1 Semantic Structure
- [ ] Every page: `<header>`, `<nav>`, `<main>`, `<footer>` landmarks
- [ ] Sections use `<section>` with `aria-labelledby` pointing to their heading
- [ ] Articles use `<article>` (blog posts, case studies)
- [ ] Sidebar content uses `<aside>`
- [ ] One `<h1>` per page, strict H2→H3→H4 hierarchy (no skips)

### 9.2 Keyboard Navigation
- [ ] **Skip-to-content** link as first focusable element
- [ ] Tab order follows visual order on all pages
- [ ] **Focus indicators**: `ring-2 ring-purple-500/50 ring-offset-2 ring-offset-[#09090B]` — clearly visible on dark bg
- [ ] Enter/Space activates buttons and links
- [ ] Escape closes: modals, mobile nav, command palette, dropdowns
- [ ] Arrow keys: navigate dropdowns, tabs, carousel items
- [ ] Focus trap in: mobile nav overlay, modals, command palette
- [ ] Return focus to trigger element when modal/overlay closes

### 9.3 Screen Readers
- [ ] `aria-label` on icon-only buttons (hamburger, close, arrows, social icons)
- [ ] `aria-expanded="true/false"` on accordions, dropdowns, mobile nav toggle
- [ ] `aria-current="page"` on active navigation link
- [ ] `aria-live="polite"` on: form success/error messages, carousel current indicator, search results count
- [ ] Decorative images: `alt=""` + `aria-hidden="true"`
- [ ] Meaningful images: descriptive `alt` text
- [ ] SVG icons: `role="img"` + `aria-label` OR `aria-hidden="true"` if decorative
- [ ] Form inputs: `<label htmlFor>` on every field, `aria-describedby` for error messages
- [ ] Required fields: text "(Required)" in label, `aria-required="true"`
- [ ] Loading states announced: `aria-busy="true"` on loading containers
- [ ] `role="status"` on toast/notification components

### 9.4 Color & Contrast
- [ ] Text-primary (#FAFAFA) on bg-base (#09090B) = ratio ~19:1 (passes AAA)
- [ ] Text-secondary (#A1A1AA) on bg-base = ratio ~7:1 (passes AA)
- [ ] Text-tertiary (#71717A) on bg-base = verify ≥ 4.5:1, adjust if needed
- [ ] Accent gradient text: verify both endpoints meet 4.5:1 on dark bg
- [ ] UI components (borders, icons): ≥ 3:1 against adjacent colors
- [ ] Never use color alone — always pair with icon, text label, or pattern
- [ ] Links: distinguishable from body text (color + underline on hover)

### 9.5 Motion & Animation
- [ ] Global `prefers-reduced-motion` check wrapping all animations
- [ ] Reduced motion → parallax OFF, aurora OFF, floating OFF, decode → instant, tilt OFF, magnetic OFF
- [ ] Reduced motion → keep: simple fade-in (no translate), page transition (crossfade only)
- [ ] Carousels: pause on hover AND focus, visible prev/next controls, dot indicators
- [ ] No content flashes > 3 times/second
- [ ] Auto-rotating carousels: pause button visible

### 9.6 Forms
- [ ] Every input has a visible `<label>` (not placeholder-only)
- [ ] Error messages: below field, red color + error icon, linked via `aria-describedby`
- [ ] Success message: above form, green confirmation, `role="status"`
- [ ] `autocomplete` attributes: `name`, `email`, `tel`, `organization`, `street-address`
- [ ] Fieldset + legend for radio/checkbox groups
- [ ] Submit button: clear label ("Send Message" not "Submit")
- [ ] Tab through form in logical order

### 9.7 Responsive Accessibility
- [ ] Content reflows at 400% zoom without horizontal scroll
- [ ] Touch targets: ≥ 44x44px (prefer 48x48px)
- [ ] Text resizable to 200% without content loss
- [ ] No content gated behind hover-only interaction
- [ ] Orientation: works in both portrait and landscape

### 9.8 Testing Checklist (Post-Build)
- [ ] Lighthouse accessibility: score ≥ 95
- [ ] axe DevTools: 0 critical/serious violations
- [ ] Keyboard-only walkthrough: every page fully navigable
- [ ] Screen reader test (NVDA or VoiceOver): all content announced correctly
- [ ] Color contrast analyzer: all text passes
- [ ] Reduced motion: toggle on, verify experience is still usable

---

## 10. SEO & GOOGLE INDEXING

### 10.1 Technical SEO

**Metadata (every page)**
- [ ] `generateMetadata()` in each page.tsx
- [ ] Unique `title` per page (format: "Page Title | Novek")
- [ ] Unique `description` per page (150–160 chars, keyword-rich)
- [ ] `openGraph`: title, description, image (1200x630), url, siteName, type
- [ ] `twitter`: card ("summary_large_image"), title, description, image
- [ ] `canonical` URL on every page
- [ ] `alternates` for blog categories (avoid duplicate content)

**Structured Data (JSON-LD per page type)**
- [ ] Homepage: `Organization` + `WebSite` + `SearchAction`
- [ ] About: `Organization` (detailed)
- [ ] Services listing: `ItemList` of services
- [ ] Service detail: `Service` schema
- [ ] Products listing: `ItemList` of products
- [ ] Product detail: `SoftwareApplication` or `Product` schema
- [ ] Projects: `ItemList` of case studies
- [ ] Project detail: `CreativeWork` or `Article`
- [ ] Blog listing: `Blog` + `ItemList`
- [ ] Blog post: `BlogPosting` + `Article` + `BreadcrumbList`
- [ ] FAQ: `FAQPage` (enables rich results in Google — big win)
- [ ] Careers listing: `ItemList`
- [ ] Job posting: `JobPosting` (enables rich results in Google — big win)
- [ ] Contact: `ContactPoint` + `Organization`
- [ ] All inner pages: `BreadcrumbList`

**Sitemap & Crawling**
- [ ] `app/sitemap.ts` — auto-generates XML sitemap for all pages
- [ ] Include: all static pages, all blog posts, all service/product/project slugs
- [ ] `app/robots.ts` — allow all, link to sitemap
- [ ] `<link rel="canonical">` on every page
- [ ] No orphan pages (every page reachable from nav/footer/internal links)

**Performance (Core Web Vitals)**
- [ ] **LCP < 2.5s**: preload hero fonts + above-fold image, avoid render-blocking JS
- [ ] **CLS < 0.1**: fixed `width`/`height` on images, `font-display: swap`, skeleton placeholders
- [ ] **INP < 200ms**: no heavy JS on main thread, use `startTransition` for state updates
- [ ] `next/image` on all images (auto WebP/AVIF, responsive, lazy)
- [ ] Preconnect: `<link rel="preconnect">` for Google Fonts, analytics domains
- [ ] Code splitting: automatic per route (App Router)
- [ ] Bundle size monitoring: `@next/bundle-analyzer`

### 10.2 On-Page SEO
- [ ] Single H1 per page
- [ ] Keyword-rich H2s for sections
- [ ] Descriptive alt text on all images
- [ ] Internal linking: services ↔ projects ↔ blog ↔ FAQ (cross-reference everywhere)
- [ ] Breadcrumbs on all inner pages (with `BreadcrumbList` schema)
- [ ] Clean URL slugs: `/services/ai-development` not `/services/1`
- [ ] Blog: tags/categories for topic clustering
- [ ] 301 redirects for any future URL changes

### 10.3 Indexing & Monitoring
- [ ] Google Search Console: verify domain, submit sitemap
- [ ] Request indexing for top 10 pages manually
- [ ] Google Analytics 4: track page views, events, conversions
- [ ] Set up GA4 conversion events: form_submit, schedule_call, newsletter_signup
- [ ] Bing Webmaster Tools: submit sitemap (free extra traffic)
- [ ] Rich Results Test: verify FAQ, JobPosting, Article schemas
- [ ] Monitor Core Web Vitals weekly in Search Console

---

## 11. MARKETING, BRANDING & LEAD GENERATION

### 11.1 Brand Identity Checklist
- [ ] **Logo**: SVG format, used in navbar + footer + OG images + favicon
- [ ] **Favicon set**: favicon.ico, 16x16, 32x32, apple-touch-icon (180x180), android-chrome (192, 512)
- [ ] **site.webmanifest**: name, icons, theme_color, background_color
- [ ] **OG default image**: branded 1200x630 image used when page-specific OG not set
- [ ] **Auto-generated OG images**: `next/og` (ImageResponse) for blog posts (title + author overlaid on brand template)
- [ ] **Consistent voice**: all copy follows tone guidelines (Section 3.3)

### 11.2 Lead Generation Funnels

**Funnel 1: Service Inquiry**
```
Homepage/Service page → "Start a Project" CTA → /contact form → form submission → email to team + auto-reply to user
```

**Funnel 2: Product Demo**
```
Product page → "Request a Demo" CTA → /contact?type=demo form OR Calendly booking → follow-up email
```

**Funnel 3: Content → Lead**
```
Google search → /blog article → newsletter signup CTA → email list → nurture sequence
```

**Funnel 4: Direct Booking**
```
Any page CTA → "Book a Discovery Call" → Calendly/Cal.com embed → booked meeting
```

### 11.3 Analytics Events to Track
- [ ] `page_view` (automatic with GA4)
- [ ] `cta_click` — which CTA, on which page
- [ ] `form_start` — user begins filling a form
- [ ] `form_submit` — successful form submission (contact, newsletter, application)
- [ ] `demo_request` — product demo requested
- [ ] `call_scheduled` — Calendly booking completed
- [ ] `project_filter` — portfolio filter used
- [ ] `faq_expand` — which FAQ question was opened
- [ ] `blog_read_complete` — scrolled to end of article
- [ ] `outbound_link` — clicks to external links

### 11.4 Email Integration
- [ ] Contact form → email notification to team (via API route + Resend/SendGrid)
- [ ] Contact form → auto-reply to user confirming receipt
- [ ] Newsletter form → add to email list (Resend Audience / Mailchimp / ConvertKit)
- [ ] Job application → email notification to HR + auto-reply to applicant

### 11.5 Social Proof Optimization
- [ ] Client logos: minimum 8 recognizable brands
- [ ] Testimonials: real names, real companies, real photos (with permission)
- [ ] Case study metrics: quantified results (%, $, time saved)
- [ ] Trust badges: any certifications, partnerships, awards
- [ ] Blog publishing frequency: signals active, thriving company

---

## 12. TECHNICAL ARCHITECTURE

### 12.1 Packages to Install

```bash
# Core (already installed)
# next, react, react-dom, tailwindcss, shadcn, lucide-react, etc.

# Animation & Scroll
pnpm add framer-motion lenis

# Form Handling
pnpm add react-hook-form zod @hookform/resolvers

# Analytics & Performance (add when deploying)
pnpm add @vercel/analytics @vercel/speed-insights

# Email sending (API routes)
pnpm add resend

# Blog (MDX approach)
pnpm add @next/mdx @mdx-js/react gray-matter reading-time
pnpm add rehype-pretty-code shiki  # syntax highlighting

# Date formatting
pnpm add date-fns
```

### 12.2 API Routes

```
app/api/
  contact/route.ts        → Receives contact form, validates with Zod, sends email via Resend, returns success/error
  newsletter/route.ts     → Receives email, adds to Resend Audience or email list, returns success
  application/route.ts    → Receives job application with resume, sends to HR email, returns success
```

### 12.3 Content Management
- **Services, Products, Projects, Team, FAQ, Testimonials, Tech Stack**: stored as TypeScript data files in `lib/data/` — type-safe, no CMS needed initially
- **Blog posts**: MDX files in `content/blog/` directory — each post is a `.mdx` file with frontmatter (title, date, category, author, excerpt, image)
- **Job postings**: TypeScript data files in `lib/data/careers.ts`
- **Future CMS migration**: data layer is abstracted enough to swap to Sanity/Contentful later without page rewrites

---

## 13. FOLDER STRUCTURE

```
novek-site/
├── app/
│   ├── layout.tsx                      # Root layout: fonts, theme, metadata, Lenis, cursor
│   ├── page.tsx                        # Homepage (15 sections)
│   ├── globals.css                     # All design tokens, glass utilities, animations
│   ├── sitemap.ts                      # Auto XML sitemap
│   ├── robots.ts                       # Robots.txt config
│   ├── not-found.tsx                   # Custom 404
│   ├── loading.tsx                     # Global loading skeleton
│   ├── error.tsx                       # Global error boundary
│   │
│   ├── about/
│   │   └── page.tsx                    # About page (8 sections)
│   │
│   ├── services/
│   │   ├── page.tsx                    # Services listing (6 sections)
│   │   └── [slug]/
│   │       └── page.tsx                # Service detail (10 sections)
│   │
│   ├── products/
│   │   ├── page.tsx                    # Products listing (6 sections)
│   │   └── [slug]/
│   │       └── page.tsx                # Product detail (12 sections)
│   │
│   ├── projects/
│   │   ├── page.tsx                    # Portfolio grid (5 sections)
│   │   └── [slug]/
│   │       └── page.tsx                # Case study detail (8 sections)
│   │
│   ├── blog/
│   │   ├── page.tsx                    # Blog listing (3 sections)
│   │   ├── [slug]/
│   │   │   └── page.tsx                # Blog article
│   │   └── category/
│   │       └── [slug]/
│   │           └── page.tsx            # Category filtered listing
│   │
│   ├── careers/
│   │   ├── page.tsx                    # Careers listing (6 sections)
│   │   └── [slug]/
│   │       └── page.tsx                # Job posting detail
│   │
│   ├── contact/
│   │   └── page.tsx                    # Contact page (4 sections)
│   │
│   ├── faq/
│   │   └── page.tsx                    # FAQ page (3 sections)
│   │
│   ├── partners/
│   │   └── page.tsx                    # Partners page (5 sections)
│   │
│   ├── privacy/
│   │   └── page.tsx                    # Privacy policy
│   │
│   ├── terms/
│   │   └── page.tsx                    # Terms of service
│   │
│   ├── cookie-policy/
│   │   └── page.tsx                    # Cookie policy
│   │
│   └── api/
│       ├── contact/route.ts            # Contact form handler
│       ├── newsletter/route.ts         # Newsletter signup handler
│       └── application/route.ts        # Job application handler
│
├── components/
│   ├── ui/                             # shadcn components
│   │   ├── button.tsx                  # (exists)
│   │   ├── input.tsx
│   │   ├── textarea.tsx
│   │   ├── select.tsx
│   │   ├── dialog.tsx
│   │   ├── accordion.tsx
│   │   ├── tabs.tsx
│   │   ├── badge.tsx
│   │   ├── separator.tsx
│   │   ├── dropdown-menu.tsx
│   │   ├── tooltip.tsx
│   │   └── ... (add as needed)
│   │
│   ├── layout/                         # Site-wide layout components
│   │   ├── navbar.tsx                  # Sticky glass navbar + mobile menu
│   │   ├── footer.tsx                  # Multi-column footer
│   │   ├── page-wrapper.tsx            # Lenis smooth scroll + Framer page transitions
│   │   ├── breadcrumb.tsx              # Dynamic breadcrumbs
│   │   ├── skip-to-content.tsx         # A11y skip link
│   │   ├── scroll-progress.tsx         # Top gradient scroll bar
│   │   ├── mobile-cta-bar.tsx          # Sticky bottom CTA on mobile
│   │   ├── cookie-banner.tsx           # GDPR cookie consent
│   │   ├── custom-cursor.tsx           # Dot + ring cursor (desktop)
│   │   └── noise-overlay.tsx           # Grain texture overlay
│   │
│   ├── sections/                       # Homepage sections (used in app/page.tsx)
│   │   ├── hero.tsx                    # S1
│   │   ├── trust-bar.tsx               # S2
│   │   ├── about-snapshot.tsx          # S3
│   │   ├── services-grid.tsx           # S4
│   │   ├── products-showcase.tsx       # S5
│   │   ├── featured-projects.tsx       # S6
│   │   ├── process-timeline.tsx        # S7
│   │   ├── tech-stack.tsx              # S8
│   │   ├── why-choose-us.tsx           # S9
│   │   ├── testimonials.tsx            # S10
│   │   ├── impact-metrics.tsx          # S11
│   │   ├── blog-preview.tsx            # S12
│   │   ├── faq-preview.tsx             # S13
│   │   └── cta-banner.tsx              # S14
│   │
│   └── shared/                         # Reusable across all pages
│       ├── section-wrapper.tsx         # Container + padding + scroll-reveal
│       ├── section-heading.tsx         # Overline + H2 + subtitle
│       ├── glass-card.tsx              # Glassmorphic card primitive
│       ├── gradient-border-card.tsx    # Card with gradient border
│       ├── bento-grid.tsx              # Asymmetric grid layout
│       ├── animated-counter.tsx        # Number count-up
│       ├── magnetic-button.tsx         # Magnetic hover button
│       ├── text-reveal.tsx             # Word-by-word scroll reveal
│       ├── text-decode.tsx             # Character scramble effect
│       ├── blur-in.tsx                 # Blur-in text animation
│       ├── gradient-blob.tsx           # Animated bg blob
│       ├── floating-element.tsx        # Slow oscillating decoration
│       ├── marquee.tsx                 # Infinite horizontal scroll
│       ├── image-reveal.tsx            # Clip-path reveal
│       ├── back-to-top.tsx             # Scroll to top button
│       ├── tag-pill.tsx                # Category/tech tag
│       ├── metric-card.tsx             # Stat number + label
│       ├── feature-card.tsx            # Icon + title + desc
│       ├── testimonial-card.tsx        # Quote + avatar + info
│       ├── project-card.tsx            # Image + title + tags
│       ├── blog-card.tsx               # Thumbnail + title + meta
│       ├── product-card.tsx            # Screenshot + name + features
│       ├── service-card.tsx            # Icon + name + desc + arrow
│       ├── job-card.tsx                # Title + dept + location + type
│       ├── partner-card.tsx            # Logo + name + desc
│       ├── faq-accordion.tsx           # Q&A expandable item
│       ├── timeline-item.tsx           # Step in process timeline
│       ├── contact-form.tsx            # Full contact form
│       ├── newsletter-form.tsx         # Email input + subscribe
│       ├── application-form.tsx        # Job application form
│       ├── json-ld.tsx                 # Structured data renderer
│       └── command-palette.tsx         # Cmd+K quick nav
│
├── lib/
│   ├── utils.ts                        # cn() helper (exists)
│   ├── animations.ts                   # Framer Motion variant presets
│   ├── seo.ts                          # Metadata helper functions
│   ├── schemas.ts                      # Zod validation schemas (contact, newsletter, application)
│   ├── types.ts                        # TypeScript interfaces
│   ├── blog.ts                         # MDX blog utilities (get posts, parse frontmatter)
│   └── data/
│       ├── site.ts                     # Site-wide config (name, url, description, social links)
│       ├── nav.ts                      # Navigation structure
│       ├── services.ts                 # All services data
│       ├── products.ts                 # All products data
│       ├── projects.ts                 # All projects/case studies data
│       ├── testimonials.ts             # All testimonials
│       ├── faq.ts                      # All FAQ items by category
│       ├── tech-stack.ts               # Technologies grouped by category
│       ├── team.ts                     # Leadership/team data (for about page)
│       ├── careers.ts                  # Job openings
│       ├── partners.ts                 # Partner logos and info
│       └── stats.ts                    # Company stats/metrics
│
├── content/
│   └── blog/                           # MDX blog posts
│       ├── my-first-post.mdx
│       └── ...
│
├── hooks/
│   ├── use-smooth-scroll.ts            # Lenis setup
│   ├── use-mouse-position.ts           # Cursor position tracking
│   ├── use-media-query.ts              # Responsive breakpoint hook
│   ├── use-reduced-motion.ts           # prefers-reduced-motion check
│   ├── use-scroll-direction.ts         # Up/down for smart navbar
│   ├── use-active-section.ts           # Scrollspy for TOC
│   └── use-counter.ts                  # Animated number counter
│
├── public/
│   ├── images/
│   │   ├── hero/
│   │   ├── projects/
│   │   ├── products/
│   │   ├── blog/
│   │   ├── partners/
│   │   └── about/
│   ├── icons/
│   │   ├── favicon.ico
│   │   ├── favicon-16x16.png
│   │   ├── favicon-32x32.png
│   │   ├── apple-touch-icon.png
│   │   ├── android-chrome-192x192.png
│   │   └── android-chrome-512x512.png
│   ├── og/
│   │   └── default-og.png              # Default OG image (1200x630)
│   └── site.webmanifest
│
├── .claude/
│   └── plan.md                         # This file
│
├���─ components.json                     # shadcn config
├── next.config.mjs
├── tailwind.config.ts                  # (if needed for Tailwind 4 customization)
├── tsconfig.json
├── package.json
└── pnpm-lock.yaml
```

---

## 14. DATA MODELS (TypeScript Types)

```typescript
// lib/types.ts

interface Service {
  slug: string
  name: string
  tagline: string
  description: string          // Full description (multiple paragraphs)
  shortDescription: string     // 1-line for cards
  icon: string                 // Lucide icon name
  capabilities: Capability[]
  technologies: string[]
  relatedProjects: string[]    // project slugs
  relatedServices: string[]    // service slugs
  faq: FAQItem[]
  benefits: Benefit[]
  process: ProcessStep[]       // service-specific mini process
}

interface Product {
  slug: string
  name: string
  tagline: string
  description: string
  shortDescription: string
  icon: string
  heroImage: string
  features: ProductFeature[]
  howItWorks: ProcessStep[]
  techStack: string[]
  integrations: Integration[]
  useCases: UseCase[]
  caseStudy?: string           // project slug
  faq: FAQItem[]
  changelog?: ChangelogEntry[]
}

interface Project {
  slug: string
  name: string
  client: string
  industry: string
  year: string
  thumbnail: string
  heroImage: string
  tags: string[]               // tech tags
  services: string[]           // service slugs
  shortDescription: string
  challenge: string
  approach: string
  solution: string
  results: Metric[]
  techStack: string[]
  testimonial?: Testimonial
  relatedProjects: string[]
  featured: boolean
}

interface BlogPost {
  slug: string
  title: string
  date: string
  author: TeamMember
  category: string
  tags: string[]
  excerpt: string
  readingTime: string
  image: string
  content: string             // MDX content
}

interface FAQItem {
  question: string
  answer: string
  category: 'general' | 'services' | 'products' | 'technical' | 'billing' | 'support'
}

interface Testimonial {
  quote: string
  name: string
  role: string
  company: string
  avatar?: string
  rating?: number
}

interface TeamMember {
  name: string
  role: string
  bio: string
  image: string
  linkedin?: string
  twitter?: string
}

interface JobPosting {
  slug: string
  title: string
  department: string
  location: string
  type: 'full-time' | 'part-time' | 'contract' | 'remote'
  description: string
  responsibilities: string[]
  requirements: string[]
  niceToHaves: string[]
  benefits: string[]
  postedDate: string
}

interface Metric {
  value: string
  label: string
}

interface ProcessStep {
  number: number
  title: string
  description: string
  icon: string
}

// ... additional types for Capability, Benefit, ProductFeature, Integration, UseCase, ChangelogEntry, Partner, Technology
```

---

## 15. IMPLEMENTATION — STEP BY STEP (70 Steps, 5 Phases)

### PHASE 1: Foundation (Steps 1–14)
Build the design system, install packages, create core layout components, set up SEO infrastructure.

1. Update `globals.css` — full dark luxury design tokens, glass utility classes, noise overlay CSS, gradient utilities, custom scrollbar
2. `pnpm add framer-motion lenis react-hook-form zod @hookform/resolvers date-fns`
3. Create `lib/types.ts` — all TypeScript interfaces
4. Create `lib/data/site.ts` — site config (name, URL, description, social links)
5. Create `lib/data/nav.ts` — navigation structure
6. Create `lib/animations.ts` — all Framer Motion variant presets
7. Create `lib/seo.ts` — metadata generation helpers
8. Create `lib/schemas.ts` — Zod validation schemas
9. Build `hooks/use-smooth-scroll.ts`, `use-mouse-position.ts`, `use-media-query.ts`, `use-reduced-motion.ts`, `use-scroll-direction.ts`
10. Build `components/layout/skip-to-content.tsx`
11. Build `components/layout/noise-overlay.tsx`
12. Build `components/layout/scroll-progress.tsx`
13. Build `components/layout/navbar.tsx` — full desktop nav + mobile hamburger overlay
14. Build `components/layout/footer.tsx` — 4-column + newsletter form

Update `app/layout.tsx` — integrate: fonts, metadata, Lenis wrapper, skip-to-content, navbar, footer, noise overlay, scroll progress

### PHASE 2: Shared Components (Steps 15–35)
Build all reusable components before assembling pages.

15. `shared/section-wrapper.tsx` — container + responsive padding + `whileInView` reveal
16. `shared/section-heading.tsx` — overline + heading + subtitle (animated)
17. `shared/glass-card.tsx` — base glass card with hover glow
18. `shared/gradient-border-card.tsx` — gradient border variant
19. `shared/bento-grid.tsx` — asymmetric grid layout system
20. `shared/animated-counter.tsx` — number tick-up on view
21. `shared/text-reveal.tsx` — word-by-word scroll reveal
22. `shared/text-decode.tsx` — character scramble effect
23. `shared/blur-in.tsx` — blur-in text animation
24. `shared/magnetic-button.tsx` — magnetic hover effect
25. `shared/gradient-blob.tsx` — animated background blob
26. `shared/floating-element.tsx` — slow oscillation
27. `shared/marquee.tsx` — infinite horizontal scroll
28. `shared/image-reveal.tsx` — clip-path reveal
29. `shared/tag-pill.tsx`, `shared/metric-card.tsx`, `shared/feature-card.tsx`
30. `shared/testimonial-card.tsx`, `shared/project-card.tsx`, `shared/blog-card.tsx`
31. `shared/product-card.tsx`, `shared/service-card.tsx`, `shared/job-card.tsx`
32. `shared/partner-card.tsx`, `shared/timeline-item.tsx`
33. `shared/faq-accordion.tsx` — smooth expand animation
34. `shared/contact-form.tsx`, `shared/newsletter-form.tsx`, `shared/application-form.tsx`
35. `shared/json-ld.tsx`, `shared/back-to-top.tsx`, `shared/command-palette.tsx`
36. `layout/breadcrumb.tsx`, `layout/mobile-cta-bar.tsx`, `layout/cookie-banner.tsx`
37. `layout/custom-cursor.tsx` — dot + ring (desktop only)
38. `layout/page-wrapper.tsx` — Framer Motion AnimatePresence for route transitions
39. Install additional shadcn components: `pnpm dlx shadcn@latest add input textarea select accordion tabs badge dialog dropdown-menu tooltip separator`

### PHASE 3: Homepage (Steps 40–54)
Assemble all 15 homepage sections.

40. Create `lib/data/` files: `services.ts`, `products.ts`, `projects.ts`, `testimonials.ts`, `faq.ts`, `tech-stack.ts`, `stats.ts`
41. Build `sections/hero.tsx` — aurora bg, decode headline, CTAs, scroll indicator
42. Build `sections/trust-bar.tsx` — logo marquee
43. Build `sections/about-snapshot.tsx` — split layout + stat counters
44. Build `sections/services-grid.tsx` — bento grid of service cards
45. Build `sections/products-showcase.tsx` — alternating product blocks
46. Build `sections/featured-projects.tsx` — 3 large project cards
47. Build `sections/process-timeline.tsx` — 6-step SVG timeline
48. Build `sections/tech-stack.tsx` — categorized tech grid
49. Build `sections/why-choose-us.tsx` — 4 differentiator cards
50. Build `sections/testimonials.tsx` — carousel
51. Build `sections/impact-metrics.tsx` — 4 large stat cards
52. Build `sections/blog-preview.tsx` — 3 latest posts
53. Build `sections/faq-preview.tsx` — 5 accordions
54. Build `sections/cta-banner.tsx` — gradient banner

Assemble in `app/page.tsx`: all 15 sections in order

### PHASE 4: Inner Pages (Steps 55–70)
Build all 20 page routes.

55. `/about/page.tsx` — 8 sections (+ `lib/data/team.ts`)
56. `/services/page.tsx` — services listing (6 sections)
57. `/services/[slug]/page.tsx` — service detail (10 sections) + `generateStaticParams` + `generateMetadata`
58. `/products/page.tsx` — products listing (6 sections)
59. `/products/[slug]/page.tsx` — product detail (12 sections) + `generateStaticParams` + `generateMetadata`
60. `/projects/page.tsx` — portfolio grid (5 sections) with client-side filtering
61. `/projects/[slug]/page.tsx` — case study detail (8 sections) + `generateStaticParams` + `generateMetadata`
62. Set up MDX blog infrastructure: `lib/blog.ts`, `content/blog/` directory, MDX config
63. `/blog/page.tsx` — blog listing with search + category filters
64. `/blog/[slug]/page.tsx` — article reading layout + TOC scrollspy
65. `/blog/category/[slug]/page.tsx` — category filtered listing
66. `/contact/page.tsx` — form + company info (4 sections)
67. `/faq/page.tsx` — categorized FAQs with search (3 sections) + FAQPage schema
68. `/careers/page.tsx` — career listing (6 sections) + `lib/data/careers.ts`
69. `/careers/[slug]/page.tsx` — job posting detail + application form + JobPosting schema
70. `/partners/page.tsx` — partners & integrations (5 sections) + `lib/data/partners.ts`
71. Legal pages: `/privacy/page.tsx`, `/terms/page.tsx`, `/cookie-policy/page.tsx`
72. `app/not-found.tsx` — custom 404 page
73. API routes: `api/contact/route.ts`, `api/newsletter/route.ts`, `api/application/route.ts`
74. `app/sitemap.ts` — auto-generate from all data files + blog posts
75. `app/robots.ts`

### PHASE 5: Polish, Testing & Launch (Steps 76–85)

76. Accessibility audit: keyboard navigation walkthrough on every page
77. Screen reader testing (NVDA/VoiceOver) on key pages
78. `prefers-reduced-motion` toggle testing
79. Mobile responsiveness QA: test at 375px, 768px, 1024px, 1440px
80. Cross-browser testing: Chrome, Firefox, Safari, Edge
81. Performance: Lighthouse audit all pages (target ≥ 90 on all scores)
82. Bundle analysis: identify and eliminate large dependencies
83. OG image generation: set up `next/og` for blog posts + default for other pages
84. Analytics: integrate GA4 + Vercel Analytics + Vercel Speed Insights
85. Deploy to Vercel + custom domain + SSL + Search Console setup + sitemap submission

---

**TOTAL SCOPE:**
- **20 page routes** (no team page, no pricing page)
- **15 homepage sections**
- **100+ component files**
- **70+ individual sections across all pages**
- **Full SEO with structured data on every page type**
- **Full WCAG 2.1 AA accessibility**
- **Full mobile responsiveness**
- **20 signature animations/effects**
- **3 lead generation funnels**
- **85 implementation steps across 5 phases**
