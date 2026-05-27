# Portfolio Design System
## douglass.webwork.space/FINAL/

**Aesthetic direction:** Organic Editorial × Cinematic — the visual language of a director's
press kit. Dark, textured, confident. Earthy greens, warm gold, and a slight blue-steel cool
that keeps it from going fully warm. Film grain on hero sections. No rounded blobs; the
panels have presence, not softness.

---

## Typefaces

| Role | Family | Source | Notes |
|------|--------|--------|-------|
| Display / Headings | **Fraunces** | Google Fonts | Optical-size serif. Heavy weight for h1, 900. Loads at optical range 9–144. |
| Body / UI | **DM Sans** | Google Fonts | Clean geometric grotesque. Replaced Inter (too common). |
| Monospace / Code / Eyebrows | **JetBrains Mono** | Google Fonts | Used for `.eyebrow`, `.project-tag`, and code-accent blocks. |

**Previously used (retired):** Space Grotesk, Inter — both on the "overused" blacklist as
of 2024–2025. Fraunces gives the site a distinct editorial voice they can't.

**Google Fonts link (all pages):**
```html
<link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,700;0,9..144,900;1,9..144,400;1,9..144,700&family=DM+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;700&display=swap" rel="stylesheet">
```

---

## Color Palette

| Token | Value | Use |
|-------|-------|-----|
| `--bg` | `#171a16` | Page background |
| `--bg-deep` | `#10120f` | Footer, section-alt, inset surfaces |
| `--panel` | `#20251f` | Cards, sidebars, detail blocks |
| `--panel-alt` | `#283026` | Accent panels (pull quotes, callouts) |
| `--text` | `#f4f5f0` | Primary text |
| `--muted` | `#c1c8bc` | Body copy, metadata, secondary text |
| `--line` | `rgba(244,245,240,0.12)` | Borders |
| `--accent` | `#2f6f3e` | Forest green (brand anchor) |
| `--accent-soft` | `#8ecf9b` | Green for practice areas, badges |
| `--accent-blue` | `#7DB9D8` | Warm blue-steel (was #8ecae6, now warmer) |
| `--accent-gold` | `#C9A843` | **New.** Eyebrows, dates, CTA primary button |
| `--accent-gold-soft` | `#E8CE84` | Lighter gold for hover states, decorative |

**Gold usage rule:** Sparse. `.eyebrow`, `.project-tag`, `.button-primary` backgrounds,
and highlighted metadata only. If everything is gold, nothing is.

---

## Border Radius

| Token | Value | Change |
|-------|-------|--------|
| `--radius` | `14px` | Reduced from 22px — panels feel less "bubbly," more editorial |

Forms use `var(--radius)`. Gallery items: `var(--radius)`. The old `16px` gallery-item
override is unified under `--radius` now.

---

## Film Grain

Applied to `.hero::before` and `.page-hero::before` via SVG `feTurbulence` data URI.
No external asset required.

```css
.hero::before,
.page-hero::before {
  content: '';
  position: absolute;
  inset: 0;
  z-index: 1;
  pointer-events: none;
  opacity: 0.03;
  background-image: url("data:image/svg+xml,<svg ...feTurbulence...>");
  background-size: 200px 200px;
}
```

`.hero-overlay` and `.page-hero-overlay` are set to `z-index: 2` so content sits above grain.
Parent containers get `position: relative`.

**Opacity:** 0.03 (3%). Visible on close inspection; doesn't compete with imagery.

---

## Component Rules

### Eyebrows / Project Tags
- Font: `var(--font-mono)` — JetBrains Mono
- Color: `var(--accent-gold)` — gold, not green
- Transform: uppercase, letter-spacing: 0.12em
- Weight: 700

### Primary Button
- Background: `var(--accent-gold)` — gold
- Text: `#10120f` — near-black (same as --bg-deep)
- Border: transparent

### Secondary Button
- Background: `rgba(244,245,240,0.04)` — ghost
- Text: `var(--text)`

### Heading Weight
- `h1`: weight 900, letter-spacing -0.035em (reduced from -0.055em — Fraunces is optical, needs less)
- `h2`: weight 800, letter-spacing -0.03em

---

## Site Structure

| File | Page |
|------|------|
| `dougbrown.html` | Homepage |
| `selected-work.html` | Work index |
| `gallery.html` | Photo gallery |
| `about.html` | About |
| `contact.html` | Contact |
| `project-loki.html` | Loki Project (complete) |
| `project-sapt.html` | Seattle Area Pipe Trades |
| `project-robot.html` | Lego Robot |
| `project-podcast.html` | Inheritance Podcast |
| `project-battlecode.html` | Battlecode Bot |

---

## Upload Checklist

When updating the live site via Cyberduck SFTP to `douglass.webwork.space/FINAL/`,
drag these into the `/FINAL/` folder (overwrite).

### 2026-05-27 — résumé + animation + nav round (12 files)
- [ ] `resume.html` — **NEW** résumé page (dual BA/BS, certs, full work history)
- [ ] `styles.css` — CSS animations (hero entrance, nav underline, card hover), résumé layout, bug fixes (stray brace, broken hover)
- [ ] `dougbrown.html` — Résumé nav link
- [ ] `selected-work.html` — Résumé nav link
- [ ] `gallery.html` — Résumé nav link
- [ ] `about.html` — Résumé nav link + "View Résumé" button
- [ ] `contact.html` — Résumé nav link + "View Résumé" button
- [ ] `project-loki.html` — Résumé nav link
- [ ] `project-sapt.html` — Résumé nav link
- [ ] `project-robot.html` — Résumé nav link
- [ ] `project-podcast.html` — Résumé nav link
- [ ] `project-battlecode.html` — Résumé nav link

(`DESIGN.md` itself is a dev doc — no need to upload it.)

---

## Design Principles

1. **Cinematic restraint** — Not everything needs to announce itself. Let white space work.
2. **Gold is earned** — Use `--accent-gold` only where the eye should land first.
3. **Grain is texture, not noise** — 3% opacity. If you have to explain the grain, it's too loud.
4. **Type before decoration** — Fraunces does the work. The design system serves the writing.
5. **No bubble radius** — 14px panels, not 22px. This is a press kit, not an app onboarding screen.
