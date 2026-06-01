# MrDouglassBrown — Brand Architecture & Site Map

Status: DECISIONS LOCKED · 2026-05-27 · Owner: Douglass Brown
Purpose: how the personal brand, the businesses, and the websites connect — and the structure to bring to the attorney/CPA.

## Thesis

**MrDouglassBrown is the personal brand and the single front door.** `mrdouglassbrown.com` (URL owned, already tied into all socials; the landing page is built in this repo) is the canonical identity. Lead the face with **AI consultant** — higher-margin, in-demand, more differentiated than "a production company." The proof that makes it credible sits right under the headline: a filmmaker who built his own AI operating system and self-litigated 9 years into a legal-tech product.

No separate "DABtek" tech brand (DABtek is tied to an existing weed brand — dropped). **MrDouglassBrown is both the personal brand and the AI-consulting brand.** Image Tale Productions stays its own brand at its own domain; it's a linked node, not absorbed.

## The map (hub-and-spoke)

```
                    mrdouglassbrown.com   ← FRONT DOOR (the person + AI consultant)
                              |
     ┌──────────────┬─────────┼───────────┬──────────────┐
  AI Consulting   Portfolio   Image Tale   ProSe         Archive + Socials
  (on the hub)    (the work)  imagetalepro  (own thing,   Adobe (archive link)
  incl. AI-caller moved off   .com (LIVE,   own site,     + all social handles
  service        webwork.space external link) linked)
```

| Node | Where it lives | What it says | Who it's for |
|---|---|---|---|
| **Front door** | `mrdouglassbrown.com/` | "I build AI systems and tell stories." AI-consultant headline + the proof underneath | Anyone landing on the name |
| **AI Consulting** | `mrdouglassbrown.com/consulting` | AI consulting; productized AI phone systems (VAPI+n8n+GHL); custom AI builds | Businesses hiring the AI expertise |
| **Portfolio** | `mrdouglassbrown.com/portfolio` | The work — moved off webwork.space | Recruiters, clients, school |
| **Image Tale** | `www.imagetalepro.com` (LIVE on Vercel) | Film, photo, video, smartphone-lens work | Production clients |
| **ProSe** | own domain/site, linked | The legal-tech product | Pro se litigants |
| **Archive** | Adobe portfolio (external link) | Deep work samples | Anyone wanting more |
| **webwork.space** | RETIRED post-grad | — | (export → folds into the hub) |

## Positioning / messaging

- **Front-door headline (lead):** Douglass Brown — AI consultant.
- **Subhead (the unfair advantage):** filmmaker · CS grad · built a full AI OS · 9-year pro se litigant turned legal-tech founder. The combination *is* the pitch — most AI consultants can't tell a story; most filmmakers can't build NeuroLinked.
- **Per-node one-liner + CTA:** each spoke gets one clear sentence and an action ("hire the studio" → imagetalepro.com, "see the work" → /portfolio, "try ProSe" → ProSe site).

## Business / entity structure (LOCKED direction — confirm specifics with Greg @ By Design Law)

Decision: **one operating LLC with multiple DBAs (one EIN)** for consulting + production + content; **ProSe becomes its own LLC** eventually (own EIN) for liability isolation. Trust/Foundation tax-shield = later, only when there's real money to shield.

Key fact: a separate EIN is only needed for a separate legal entity — one LLC can run multiple brands/DBAs under a single EIN.

**Questions for Greg (bundle with the ProSe meeting):**
1. One operating LLC with DBAs (MrDouglassBrown consulting + Image Tale Productions) — confirm structure + WA filings.
2. ProSe as its own LLC for liability isolation — when to form, given pre-launch.
3. If Image Tale already has a structure, does it become the umbrella or do we form a new parent?
4. EIN per entity; WA sales-tax/registration implications.
5. When (if ever) a holding structure makes sense.

## Where each venture fits

| Venture | Brand node | Likely entity |
|---|---|---|
| AI consulting | MrDouglassBrown (front door / `/consulting`) | Operating LLC (DBA) |
| AI phone systems (VAPI+n8n+GHL) | MrDouglassBrown (productized service) | Operating LLC |
| Film / photo / video | Image Tale Productions (imagetalepro.com) | Operating LLC (DBA) |
| Content (Ridin' Wit Fresh, Video Dad, The Inheritance, lens series) | Content arm under the umbrella | Operating LLC |
| ProSe | Standalone product | Own LLC (eventual) |
| Products (LEGO app, GoodNotes planner) | Experiments, linked as they mature | TBD |

## SEO / GEO + cross-linking

- **Canonical identity:** `mrdouglassbrown.com` is the one front door. Searching "Douglass Brown" leads here; "Image Tale" leads to imagetalepro.com; the two cross-link.
- Consistent handles across socials (already tied to mrdouglassbrown.com); `Person` + `Organization` schema markup; mutual hub ↔ node links.
- Hub links out to all nodes + Adobe archive + ProSe + socials; each node links back to the hub.

## Build sequence (graduation-aware → captured as ordered Hub tasks "Web 1/6 … 6/6")

1. **Finish the school portfolio** (graduation deliverable, webwork.space): accessibility pass, security pass, edit + add the iPhone reel, create the new resume from the classmate's template → add to the site.
2. **Move it to `mrdouglassbrown.com`** (this Next.js repo → Vercel); retire webwork.space.
3. **Wire the front door** — routing/links: consulting, portfolio, → imagetalepro.com, → ProSe, socials, Adobe archive.
4. **Build the AI-consulting page** (MrDouglassBrown AI consultant; include the AI-caller service offering).
5. **Entity/EIN with Greg** (one LLC + DBAs; ProSe own LLC) — bundle with the ProSe attorney meeting.
6. **SEO/GEO pass** + cross-links + Person/Org schema across the presence.

## Open questions (most are now resolved)

- **ProSe domain:** does it already have its own domain? Confirm, then link from the hub.
- **Entity specifics:** settle with Greg before forming/renaming.
- (Resolved: brand name = MrDouglassBrown, no DABtek · Image Tale = its own site at imagetalepro.com, already live · entity = one LLC + DBAs, ProSe separate.)
