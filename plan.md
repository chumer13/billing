# BillingAlign — Project Plan

## Brand Identity
- **Company**: BillingAlign | BillingAlign.com
- **Tagline**: "Aligned Billing. Accelerated Revenue."
- **Industry**: Healthcare Revenue Cycle Management (RCM) & Medical Billing
- **Contact**: hello@billingalign.com | 1-800-BILALIGN

## Tech Stack
| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router, TypeScript, Server Components) |
| Styling | Tailwind CSS v3 + CSS custom properties |
| Animation | Framer Motion v11 |
| Icons | lucide-react |
| Forms | react-hook-form + zod + @hookform/resolvers |
| Fonts | next/font/google (Bricolage Grotesque + DM Sans) |
| Utilities | clsx + tailwind-merge → cn() helper |
| Components | class-variance-authority (CVA) |
| Primitives | @radix-ui/react-accordion, dialog, tabs, select |
| Images | next/image |
| SEO | generateMetadata() + JSON-LD |

## Design System
### Colors
| Token | Value | Usage |
|---|---|---|
| --navy | #0B1628 | Primary background |
| --navy-mid | #132040 | Card backgrounds |
| --navy-light | #1A2D52 | Subtle sections |
| --teal | #00C9B1 | Primary accent, CTAs, icons |
| --teal-dark | #00A896 | Hover states |
| --teal-muted | rgba(0,201,177,0.12) | Tinted backgrounds |
| --white | #FFFFFF | Primary text |
| --gray-400 | #94A3B8 | Secondary text |
| --gold | #F59E0B | Trust badges, star ratings |

### Typography
- **Headings**: Bricolage Grotesque (400–800)
- **Body**: DM Sans (300–700)

### Design Details
- Dot grid background on hero (radial-gradient, teal, 5% opacity)
- Glassmorphism cards: semi-transparent bg + 1px border rgba(255,255,255,0.06) + backdrop-blur
- Card hover: -4px translateY + teal border glow
- CTA buttons: teal bg with glow shadow, pulse animation
- Teal left-border accent on feature items
- Generous whitespace

## Project Structure
```
src/
├── app/
│   ├── layout.tsx           (root layout + metadata + fonts + JSON-LD)
│   ├── page.tsx             (home)
│   ├── globals.css          (design tokens, base styles)
│   ├── sitemap.ts
│   ├── robots.ts
│   ├── services/page.tsx
│   ├── pricing/page.tsx
│   ├── who-we-serve/page.tsx
│   ├── about/page.tsx
│   ├── resources/page.tsx
│   └── contact/page.tsx
├── components/
│   ├── layout/   (Navbar, Footer)
│   ├── home/     (Hero, TrustBar, Services, WhyUs, Specialties, Testimonials, CTABanner)
│   ├── sections/ (PageHero, ServiceCard, ContactForm)
│   └── ui/       (Button, Badge, Card, AnimatedSection)
└── lib/
    ├── utils.ts
    ├── services-data.ts
    └── specialties-data.ts
```

## Pages (7 total)
| # | Path | Description |
|---|---|---|
| 1 | `/` | Home — hero, trust bar, services, why us, specialties, testimonials, CTA |
| 2 | `/services` | 21 services in 5 tabbed categories (Radix Tabs) |
| 3 | `/pricing` | 3 pricing tiers + FAQ accordion |
| 4 | `/who-we-serve` | By organization (5) + by specialty (24) |
| 5 | `/about` | Mission, values, credentials, compliance |
| 6 | `/resources` | Blog, case studies, webinars, code lookup |
| 7 | `/contact` | Contact form (react-hook-form + zod) + info |

## SEO Strategy
- `generateMetadata()` on every page with unique title/description/OG
- JSON-LD: Organization, WebSite, Service, FAQPage schemas
- `sitemap.ts` + `robots.ts`
- Semantic HTML, single `<h1>` per page
- next/font for zero layout shift
- next/image for optimized images

## Accessibility
- Skip-to-main-content link
- ARIA labels on all icon buttons
- Keyboard navigation
- Color contrast ≥ 4.5:1
- Visible focus rings (teal)

## Responsive Breakpoints
- Mobile: 375px — single column, hamburger nav
- Tablet: 768px — 2-column grids
- Desktop: 1280px — full layout
- Wide: 1536px — max-w-[1280px] centered

## Development Checklist
- [ ] plan.md
- [ ] Project init + dependencies
- [ ] Design system (globals.css + tailwind.config.ts)
- [ ] UI components (Button, Badge, Card, AnimatedSection)
- [ ] Layout (Navbar + Footer + root layout)
- [ ] Data files (services-data, specialties-data)
- [ ] Home page (all 9 sections)
- [ ] Services page (21 services, 5 tabs)
- [ ] Pricing page (3 tiers + FAQ)
- [ ] Who We Serve page
- [ ] About page
- [ ] Resources page
- [ ] Contact page (validated form)
- [ ] SEO (metadata, JSON-LD, sitemap, robots)
- [ ] Assets (favicon, robots.txt)
- [ ] Build verification (zero TS errors)
 make sure all mentioned below is completed as well You are a senior full-stack developer and UI/UX designer. Build a complete, 
production-ready Next.js 14 website for a healthcare medical billing company 
called "BillingAlign" at BillingAlign.com.

Before writing any code, create a plan.md file that outlines the full 
project structure, all pages, components, SEO strategy, tech stack, 
design system, and a development checklist. Then build everything.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🏢 BRAND IDENTITY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Company Name: BillingAlign
Domain: BillingAlign.com
Tagline: "Aligned Billing. Accelerated Revenue."
Industry: Healthcare Revenue Cycle Management (RCM) & Medical Billing
Email: hello@billingalign.com
Phone: 1-800-BILALIGN

Brand Personality: Trustworthy, expert, modern, precise — like a 
Fortune 500 healthcare company meets a sleek SaaS startup.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🎨 DESIGN SYSTEM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Theme: Dark premium SaaS — deep navy backgrounds, teal accents, 
crisp white typography. Think Stripe meets a healthcare enterprise platform.

Color Palette:
  --navy:        #0B1628   (primary background)
  --navy-mid:    #132040   (card backgrounds)
  --navy-light:  #1A2D52   (subtle sections)
  --teal:        #00C9B1   (primary accent, CTAs, icons)
  --teal-dark:   #00A896   (hover states)
  --teal-muted:  rgba(0,201,177,0.12)  (tinted backgrounds)
  --white:       #FFFFFF   (primary text)
  --gray-400:    #94A3B8   (secondary text)
  --gold:        #F59E0B   (trust badges, star ratings)

Typography:
  Display/Headings: Bricolage Grotesque (Google Font) — weights 400–800
  Body: DM Sans (Google Font) — weights 300–700
  Load via next/font/google for zero layout shift

Design Details:
  - Dot grid background pattern on hero (radial-gradient dots, teal, 5% opacity)
  - Subtle noise texture overlay on dark sections
  - Gradient text on key headlines: teal → white
  - Cards with glass-morphism effect: semi-transparent background + 
    1px border rgba(255,255,255,0.06) + backdrop-blur
  - Card hover: lift (-4px translateY) + teal border glow
  - CTA buttons: teal background with soft glow shadow, pulse animation
  - Section dividers: thin horizontal lines with teal gradient fade
  - Generous whitespace — sections breathe
  - Teal left-border accent on feature list items

Icons: Use lucide-react for ALL icons throughout the site — 
  they are premium, consistent stroke icons.

Animations (Framer Motion):
  - Page load: staggered fade-up reveals (each element 0.08s delay)
  - Scroll-triggered: AnimatePresence + useInView on every section
  - Hero stats: animated number counters on scroll
  - Navbar: shrinks + adds backdrop-blur after 80px scroll
  - CTA button: subtle breathing/pulse animation
  - Service cards: staggered entrance, scale + fade on hover
  - Mobile menu: slide-in from right with overlay

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🛠️ TECH STACK
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Framework:     Next.js 14 — App Router, TypeScript, Server Components
Styling:       Tailwind CSS v3 with custom design tokens
Animation:     Framer Motion v11
Icons:         lucide-react (use throughout — never use emoji as icons)
Forms:         react-hook-form + zod validation + @hookform/resolvers
Fonts:         next/font/google (Bricolage Grotesque + DM Sans)
Utilities:     clsx + tailwind-merge (cn() helper)
Components:    class-variance-authority (CVA) for variant components
Radix UI:      @radix-ui/react-accordion, @radix-ui/react-dialog, 
               @radix-ui/react-tabs, @radix-ui/react-select
Images:        next/image (WebP, lazy load, size hints)
SEO:           Next.js generateMetadata() API (no external SEO lib needed)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📁 PROJECT STRUCTURE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

billingalign/
├── plan.md                      ← Write this FIRST
├── package.json
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
├── postcss.config.mjs
├── public/
│   ├── favicon.svg              ← "B" logomark in teal
│   ├── og-image.png             ← 1200x630 OG image
│   └── robots.txt
└── src/
    ├── app/
    │   ├── layout.tsx           ← Root layout + metadata + fonts
    │   ├── page.tsx             ← Home
    │   ├── globals.css          ← Design tokens, base styles
    │   ├── sitemap.ts           ← Dynamic sitemap
    │   ├── robots.ts            ← Robots config
    │   ├── services/
    │   │   └── page.tsx
    │   ├── pricing/
    │   │   └── page.tsx
    │   ├── who-we-serve/
    │   │   └── page.tsx
    │   ├── about/
    │   │   └── page.tsx
    │   ├── resources/
    │   │   └── page.tsx
    │   └── contact/
    │       └── page.tsx
    ├── components/
    │   ├── layout/
    │   │   ├── Navbar.tsx       ← Sticky, animated, mega dropdown menu
    │   │   └── Footer.tsx       ← Rich multi-column footer
    │   ├── home/
    │   │   ├── Hero.tsx
    │   │   ├── TrustBar.tsx
    │   │   ├── Services.tsx
    │   │   ├── WhyUs.tsx
    │   │   ├── Specialties.tsx
    │   │   ├── Testimonials.tsx
    │   │   └── CTABanner.tsx
    │   ├── sections/
    │   │   ├── PageHero.tsx     ← Reusable inner-page hero
    │   │   ├── ServiceCard.tsx
    │   │   └── ContactForm.tsx
    │   └── ui/
    │       ├── Button.tsx       ← primary, outline, ghost variants
    │       ├── Badge.tsx
    │       ├── Card.tsx
    │       └── AnimatedSection.tsx  ← scroll-triggered wrapper
    └── lib/
        ├── utils.ts             ← cn() utility
        ├── services-data.ts     ← All 21 service definitions
        └── specialties-data.ts ← All specialty definitions

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📄 PAGES — FULL CONTENT SPEC
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

──────────────────────────────────────
PAGE 1: HOME  /
──────────────────────────────────────

SECTION 1 — NAVBAR (sticky on all pages)
  Logo: "BillingAlign" wordmark with small teal "B" icon to the left
  Nav links: Solutions ▾  |  Who We Serve ▾  |  Resources  |  Pricing  |  About
  Right side: "Sign In" (ghost) + "Get a Free Demo" (teal filled button)
  On scroll > 80px: add backdrop-blur, reduce height, add border-bottom
  Mobile: hamburger → full-screen slide-in menu with all links + CTA
  Solutions dropdown (mega menu) includes:
    Core RCM, Medical Billing, Medical Coding, Practice Management,
    EHR, Patient Experience, Telehealth, Credentialing, FrontDesk Assist

SECTION 2 — HERO
  Layout: Two column — left text, right animated visual
  Left:
    - Small badge above headline: "✦ HIPAA Compliant & Trusted by 500+ Practices"
    - H1: "Aligned Billing." (white) + newline + "Accelerated Revenue." (gradient teal)
    - Subheadline: "BillingAlign handles your entire revenue cycle — from clean 
      claim submission to AR follow-up — so your practice gets paid faster, 
      with fewer denials and zero billing headaches."
    - CTA Row: [Get a Free Demo →] (teal, large) + [See How It Works] (outline)
    - Trust micro-line below CTAs: 
      "No contracts • HIPAA compliant • Setup in 48 hours"
  Right:
    - Abstract animated dashboard card mockup — floating card with:
      - Top: "Revenue Dashboard" label
      - Big stat: "$2.4M" collected this month
      - Small stats row: Claims submitted 1,284 | Denial rate 2.8% | First-pass 94%
      - Mini bar chart (CSS only, animated on load)
    - Floating badge cards around it:
      - "✓ Claim Approved" green pulse badge
      - "↑ 33% faster payments" teal badge
    - Subtle teal glow behind the card
  Background: dot grid pattern + teal radial glow from top right

SECTION 3 — TRUST BAR (full-width dark bar)
  4 animated counter stats:
    94%+ — First-Pass Claim Rate
    <3%  — Denial Rate
    50+  — Medical Specialties Served
    500+ — Healthcare Practices Nationwide
  Each with teal icon above, gold/teal number, white label
  Subtle top and bottom border lines

SECTION 4 — SERVICES OVERVIEW
  Top: small badge "What We Do" + H2: "Everything Your Revenue Cycle Needs"
  Subtext: "From claim submission to collections, we handle every step 
  with certified experts and proven processes."
  6 feature cards in a 3-column grid (2 on mobile):
    1. Revenue Cycle Management — icon: TrendingUp
    2. Medical Billing Services — icon: FileText
    3. Medical Coding — icon: Code2
    4. Denial Management — icon: ShieldCheck
    5. Physician Credentialing — icon: BadgeCheck
    6. Practice Management — icon: LayoutDashboard
  Each card has: teal icon in dark circle, bold title, 2-line description, 
  teal "Learn more →" link
  Bottom: "View all 21 services →" centered link

SECTION 5 — WHY BILLINGALIGN (alternating or 4-col grid)
  H2: "The BillingAlign Difference"
  4 differentiators with large teal icon, bold title, body text:
    1. Full Transparency — "Real-time dashboard access to every queue, 
       every claim, every dollar. No black boxes."
    2. AAPC-Certified Coders — "Every code submitted by credentialed 
       professionals with AAPC and AHIMA certifications."
    3. 94%+ First-Pass Rate — "Our billing rule engine scrubs every claim 
       against payer-specific rules before submission."
    4. White-Glove Onboarding — "Dedicated implementation team gets you 
       live in 48 hours with zero disruption to your practice."
  Below: 3 compliance/cert badges in a row: HIPAA | AAPC | AHIMA

SECTION 6 — HOW IT WORKS (3-step process)
  H2: "Get Started in 3 Simple Steps"
  Step 1: "Schedule Your Free Consultation" — we learn your practice needs
  Step 2: "We Handle the Setup" — credentialing, onboarding, system integration  
  Step 3: "Watch Revenue Grow" — real-time reporting, faster payments
  Each step: large step number in teal, icon, title, body
  Connected with dotted line between steps

SECTION 7 — SPECIALTIES
  H2: "Built for Your Specialty"
  Subtext: "Serving 50+ medical specialties with tailored billing expertise."
  Grid of specialty pills/cards (3 rows × 5 cols on desktop):
    Internal Medicine, Family Practice, Cardiology, Orthopedics, Dermatology,
    Neurology, Psychiatry/Therapy, Urology, Radiology, General Surgery,
    Urgent Care, Pediatrics, OB/GYN, Gastroenterology, Ophthalmology,
    Oncology, Rheumatology, Pulmonology, ENT, Pain Management
  Each pill: small relevant lucide-react icon + specialty name
  "And 30+ more specialties →" link at bottom

SECTION 8 — TESTIMONIALS
  H2: "Practices That Trust BillingAlign"
  3 testimonial cards:
    1. "Switching to BillingAlign cut our denial rate from 12% to under 3% 
       in the first 90 days. Their team is incredibly responsive."
       — Dr. Sarah Mitchell, Family Practice, Austin TX — 8 providers
    2. "We were losing $40K/month to billing errors before BillingAlign. 
       They fixed our revenue cycle completely within 60 days."
       — Dr. James Okafor, Internal Medicine, Chicago IL — 4 providers
    3. "The real-time dashboard is a game changer. I can see exactly where 
       every claim is at any point. Absolute transparency."
       — Maria Chen, Practice Manager, Pacific Orthopedics, Seattle WA
  Each card: 5 gold stars, quote, avatar initials circle, name, practice, location

SECTION 9 — CTA BANNER (full-width teal-to-navy gradient)
  H2: "Ready to Stop Leaving Money on the Table?"
  Subtext: "Join 500+ practices that trust BillingAlign to manage their revenue cycle."
  Inline mini form: [Name] [Email] [Practice Specialty ▾] [Get My Free Demo →]
  Below form: "No commitment required • HIPAA-safe • Response within 24 hours"

FOOTER:
  Logo + tagline + 1-line description
  4-column links:
    Solutions: RCM, Medical Billing, Medical Coding, Credentialing, 
               Practice Mgmt, EHR, Telehealth, FrontDesk Assist
    Who We Serve: Small Practices, Large Groups, Health Systems, 
                  Billing Companies, Academic Institutions
    Resources: Blog, Case Studies, Webinars, E-Books, CPT Codes, ICD-10 Codes
    Company: About Us, Pricing, Careers, Contact, Privacy Policy, Terms
  Bottom bar: "© 2025 BillingAlign. All rights reserved." + 
              HIPAA badge + LinkedIn/Twitter/Facebook icons
  Newsletter signup: "Get RCM best practices in your inbox" + email input

──────────────────────────────────────
PAGE 2: SERVICES  /services
──────────────────────────────────────

Hero: "Complete RCM & Medical Billing Services" + subtext
Intro paragraph about end-to-end revenue cycle coverage.

Organize all 21 services into 5 tabbed categories 
(use Radix UI Tabs — sticky tab bar):

TAB 1 — Core RCM
  1. Revenue Cycle Management
     Full end-to-end RCM. Claim submission → remittance → AR → reporting.
     Stats: 94% first-pass | <3% denial rate | 33% faster payments
     
  2. Medical Billing Services
     Transparent billing with real-time claim tracking. Clearinghouse 
     connections: Change Healthcare, TriZetto, Availity. 1M+ payer network.
     
  3. Denial Management
     Root-cause analysis, automated appeals, resubmissions. Identify and 
     fix denial patterns permanently. Average denial reduction: 78%.
     
  4. AR Management
     Aging report analysis, payer follow-up, collections strategy. 
     Out-of-network negotiations and patient balance management.

TAB 2 — Clinical Services
  5. Medical Coding Services
     AAPC/AHIMA certified coders. CPT, ICD-10, HCPCS for 50+ specialties.
     Real-time coding compliance updates.
     
  6. Medical Transcription
     Fast, accurate clinical documentation transcription. HIPAA-compliant 
     workflow. 24-48hr turnaround.
     
  7. Electronic Health Records (EHR)
     Cloud-based EHR for desktop, tablet, mobile. Point-of-care documentation. 
     Drug interaction alerts. 100+ customizable templates.
     
  8. Remote Patient Monitoring (RPM)
     End-to-end RPM program management. Device setup, patient outreach, 
     billing for all RPM CPT codes (99453, 99454, 99457, 99458).
     
  9. Chronic Care Management (CCM)
     Monthly care coordination for chronic condition patients. 
     CCM billing and documentation. CPT 99490, 99491, 99487 coverage.

TAB 3 — Practice Operations
  10. Practice Management
      Appointment scheduling, staff management, resource planning.
      Integrated with billing and EHR. Real-time analytics dashboards.
      
  11. Patient Experience Management
      Patient portal, secure messaging, digital intake, appointment reminders.
      Payment options: credit card, payment plans, ACH.
      
  12. Telehealth
      HIPAA-compliant video visits. Integrated scheduling. 
      Seamless telehealth billing included.
      
  13. FrontDesk Assist
      Virtual front desk for scheduling, insurance verification, 
      patient intake. Live and remote staffing options.
      
  14. Staff Augmentation
      Trained billing and admin staff on demand. 
      Full-time or part-time. No hiring burden.

TAB 4 — Compliance & Admin
  15. Physician Credentialing
      Full credentialing with all major payers. 
      Prevents payment delays. Startup practice specialists.
      
  16. Medical Document Indexing
      Organize, classify, and index medical records.
      Fast retrieval. Compliance-ready storage.
      
  17. Revenue Cycle Benchmarking
      Compare your KPIs against 500+ practices in your specialty.
      Actionable recommendations to close gaps.
      
  18. Hospital RCM Consulting
      Strategic RCM assessment for hospitals and health systems.
      Process redesign and implementation support.

TAB 5 — Technology
  19. Managed IT Services
      Healthcare IT support, network monitoring, remote workstations.
      HIPAA-compliant IT infrastructure.
      
  20. Interoperability / Data Connectivity
      Connect disparate EHRs and systems. Seamless data exchange.
      HL7 FHIR-compliant data pipelines.
      
  21. Robotic Process Automation (RPA)
      Automate repetitive billing tasks. Reduce manual errors.
      Custom bots for eligibility checks, claim status, payment posting.

Each service card has:
  - Lucide-react icon (choose best match)
  - Title + category badge
  - Full 3-4 sentence description
  - 3 key bullet points with teal checkmarks
  - "Talk to an Expert →" CTA

Bottom of page: Full-width CTA banner

──────────────────────────────────────
PAGE 3: PRICING  /pricing
──────────────────────────────────────

Hero: "Transparent Pricing for Every Practice Size"
Subtext: "No hidden fees. No long-term contracts. Just results."
Toggle: Monthly / Annual (annual = "Save 15%" badge)

3 pricing tiers in cards:

TIER 1 — Essentials  (Most popular for small practices)
  Price: "Starting at 4% of collections"
  Badge: "For solo and small practices"
  Includes:
    ✓ Medical billing & claim submission
    ✓ Payment posting & reconciliation
    ✓ ERA/EOB processing
    ✓ Basic denial management
    ✓ Monthly financial reporting
    ✓ Email & chat support
  CTA: "Get Started"

TIER 2 — Professional  (MOST POPULAR badge in teal)
  Price: "Starting at 6% of collections"  
  Badge: "For growing multi-provider practices"
  Everything in Essentials, plus:
    ✓ AAPC-certified medical coding
    ✓ Advanced denial management & appeals
    ✓ AR follow-up & collections
    ✓ Physician credentialing (2 providers)
    ✓ Real-time analytics dashboard
    ✓ Dedicated account manager
    ✓ Priority phone support
  CTA: "Start Free Trial"
  Style: Teal card with glow — visually highlighted

TIER 3 — Concierge  (Full outsourcing)
  Price: "Custom — based on practice size"
  Badge: "For large groups & health systems"
  Everything in Professional, plus:
    ✓ Complete RCM outsourcing
    ✓ FrontDesk Assist (virtual staff)
    ✓ Chronic Care Management (CCM)
    ✓ Remote Patient Monitoring (RPM)
    ✓ Staff augmentation (billing team)
    ✓ Hospital RCM consulting
    ✓ Robotic Process Automation
    ✓ Managed IT services
    ✓ Dedicated VP of Revenue Cycle
  CTA: "Book a Consultation"

Below tiers: 
  FAQ section (Radix Accordion) — 8 questions:
  - How does billing percentage pricing work?
  - Do you require long-term contracts?
  - How long does onboarding take?
  - What EHR systems do you integrate with?
  - Is my patient data HIPAA compliant?
  - What specialties do you cover?
  - What is your denial rate?
  - Can I switch plans later?

──────────────────────────────────────
PAGE 4: WHO WE SERVE  /who-we-serve
──────────────────────────────────────

Hero: "Healthcare Billing Solutions Built for You"

By Organization (5 large cards with icon + description):
  1. Small Medical Practices — Solo to 5 providers. Affordable, flexible billing.
  2. Large Medical Groups — 6-100+ providers. Scalable RCM infrastructure.
  3. Academic Institutions — Teaching hospitals. Complex payer mix expertise.
  4. Health Systems — Multi-site enterprise RCM. Consulting + tech.
  5. Medical Billing Companies — White-label billing support and tech.

By Specialty (grid of 20+ specialty cards, each with lucide icon + name + 
brief 1-line note about specialty-specific coding complexity):
  Internal Medicine, Family Practice, Cardiology, Orthopedics, Dermatology,
  Neurology, Psychiatry & Therapy, Urology, Radiology, General Surgery,
  Urgent Care, Pediatrics, OB/GYN, Gastroenterology, Ophthalmology,
  Oncology, Rheumatology, Pulmonology, ENT, Pain Management,
  Podiatry, Anesthesiology, Physical Therapy, Chiropractic

──────────────────────────────────────
PAGE 5: ABOUT  /about
──────────────────────────────────────

Hero: "The BillingAlign Story"
Mission statement section
Values: Transparency | Accuracy | Compliance | Partnership | Excellence
Team credentials section (AAPC, AHIMA certified)
Compliance & certifications: HIPAA, SOC 2, AAPC, AHIMA badges
"Our Promise" section — 94% first-pass, <3% denial, 24hr response

──────────────────────────────────────
PAGE 6: RESOURCES  /resources
──────────────────────────────────────

Categories tabs: Blog | Case Studies | Webinars | E-Books | Code Lookup
6 sample blog card placeholders with dates and categories
2 featured case study cards with results stats
CPT/ICD-10 lookup tool (text input → links to external lookup)

──────────────────────────────────────
PAGE 7: CONTACT  /contact
──────────────────────────────────────

Hero: "Let's Align Your Revenue Cycle"
Left column: Contact info (phone, email, address, hours)
Right column: Full contact/demo request form:
  Fields: First Name, Last Name, Email, Phone, Practice Name, 
          Specialty (select), Number of Providers (select), 
          Services Interested In (multi-select checkboxes),
          Message, [Request My Free Demo] button
Below form: "Response within 24 hours • No commitment required • HIPAA-safe"
Bottom: Google Maps placeholder card (styled)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🔍 SEO — IMPLEMENT FULLY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Every page must have generateMetadata() with:
  - Unique title: "Service Name | BillingAlign — Medical Billing Services"
  - Unique meta description (150-160 chars, includes target keyword)
  - openGraph: title, description, image (og-image.png), url, type
  - twitter: card "summary_large_image", title, description, image
  - canonical URL
  - keywords array

Root layout.tsx metadata:
  title template: "%s | BillingAlign"
  default title: "BillingAlign — Aligned Billing. Accelerated Revenue."
  description: "BillingAlign provides full-service medical billing, 
    revenue cycle management, and practice management solutions 
    for 50+ healthcare specialties. HIPAA compliant. AAPC certified."

JSON-LD Structured Data (add to root layout):
  Organization schema:
    name, url, logo, contactPoint, sameAs (social links)
  Add WebSite schema with SearchAction
  Add Service schema on /services page
  Add FAQPage schema on /pricing page

sitemap.ts — Dynamic sitemap returning all page URLs
robots.ts — Allow all, disallow /api, sitemap URL

Performance:
  - All images use next/image with width/height and priority on LCP images
  - Fonts loaded via next/font (no external CSS requests)
  - Dynamic imports for heavy components (Framer Motion sections)
  - loading="lazy" on below-fold images

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
♿ ACCESSIBILITY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

- All images have descriptive alt text
- Keyboard navigation on all interactive elements
- Skip to main content link at top
- ARIA labels on icon-only buttons
- Color contrast ratio minimum 4.5:1
- Focus ring visible (teal outline)
- Radix UI components handle ARIA automatically

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📱 RESPONSIVE BREAKPOINTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Mobile: 375px — Single column, full-width CTAs, hamburger nav
Tablet: 768px — 2-column grids, condensed nav
Desktop: 1280px — Full layout
Wide: 1536px — Max container width 1280px, centered

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🚫 DO NOT INCLUDE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

- Any AI branding, AI tools, or AI-powered feature mentions
- Purple gradients or generic AI-startup aesthetics
- Placeholder "Lorem ipsum" text anywhere
- External CSS CDN links (use next/font for fonts)
- Any mentions of competitor brand names
- Emoji used as icons (use lucide-react only)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✅ FINAL DELIVERABLE CHECKLIST
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

□ plan.md written first with full architecture
□ All 7 pages fully built (/, /services, /pricing, /who-we-serve, 
  /about, /resources, /contact)
□ Navbar with mega dropdown + mobile menu
□ Rich footer with all columns
□ All reusable UI components (Button, Badge, Card, AnimatedSection)
□ Framer Motion animations on all sections
□ generateMetadata() on every page
□ JSON-LD structured data in root layout
□ sitemap.ts + robots.ts
□ Zod-validated contact form with react-hook-form
□ Radix UI Tabs on services page
□ Radix UI Accordion FAQ on pricing page
□ Fully responsive at all breakpoints
□ Zero TypeScript errors
□ All lucide-react icons (no emoji)
□ next/font for both fonts
□ next/image for all images
□ cn() utility with clsx + tailwind-merge
□ Design tokens in globals.css as CSS variables
□ Lighthouse score target: 90+ across all categories