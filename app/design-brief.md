# IMPAKTA Creative — Design Brief

## 0. Animation mode

Animation mode: animated-website

Journey shape: single-shot. One continuous ~15s film, no cuts. Chapters read
as semantic sections layered over the film via the scroll-scrub engine.

## 1. Design read

Reference: Ivy.pt (cinematic, editorial, confident, oversized type, restrained
chrome). IMPAKTA is a Portuguese creative/digital agency (strategy, creative
direction, social media, photography, video production, drone, branding, paid
media, web & digital, AI). Brand line: "POSICIONAMENTO QUE GERA RESULTADOS."
The founder's own brief frames the studio through a photography/DP lens
(exact product/light fidelity, cinematic control) — that becomes this site's
narrative spine.

Delivery tier: cinema (default). The scroll-scrub film IS the Tier-1 carrier;
no competing hero-loop mechanic is built alongside it.

Primary market/language: Portuguese (PT-PT). This build ships the PT
experience end-to-end, full quality, on the Higgsfield platform. An EN
toggle is a documented fast-follow (see §9) rather than shipped half-depth
in both languages in v1 — the brief the client wrote is itself PT-first
(Ivy.pt, the direct reference, is PT-only), and the scroll-scrub engine is a
single-journey template, not a routed i18n system.

## 2. Concept spine (narrative spine: tool/precision instrument)

IMPAKTA's motif is the camera aperture: precision instrument, calibrated
light, deliberate focus. Every signature moment threads this: the journey
film opens on a shaft of light opening like an iris in the dark, sharpening
into full clarity; a recurring fine registration-mark / crosshair motif marks
section transitions at small scale; the "one oversized numeral or punctuation"
second-read moment is a giant fluorescent-green full stop ("."), planted once,
literalizing "positioning that drives RESULTS." as a full stop, not a
question mark.

## 3. Palette (locked — client-mandated, overrides default bans)

- White `#FFFFFF` — dominant base, editorial paper-white ground.
- Electric Pink `#FF3EA5` — primary accent: CTAs, links, primary emphasis.
- Fluorescent Green `#B8FF00` — impact accent, rationed to singular flashes
  (the journey's light-gel moment, the oversized full-stop, the numbers
  strip's leading digit) — never a competing co-equal accent.
- Black `#0A0A0A` — editorial contrast: dark sections, display type on white.

This is the client's own explicit brand system (hex values supplied
directly), so it stands regardless of the standard palette-family bans; it
also does not collide with any banned family (white-dominant twin-accent
system, not graphite+ember, not near-black+neon-on-dark, not beige+brass,
not AI-purple). First build in this chat/session — no prior-build palette to
diverge from.

## 4. Typography (locked)

- Display: Cabinet Grotesk — expressive, compressed at large sizes, carries
  the "oversized/experimental" brief requirement without reaching for a
  serif. Serif is explicitly not used: IMPAKTA is a working creative agency,
  not a heritage/editorial institution, so a serif default would be the
  documented AI tell, not a brand-true choice.
- Body / UI: Inter Tight — clean, quiet counterpart for paragraphs, nav,
  form chrome.
- Mono accent: JetBrains Mono — eyebrows, kickers, numbers-strip labels,
  case-study meta rows.

## 5. Journey block (the scroll-scrub film)

Single continuous ~15s film, no cuts, one camera move. Concept: a single
shaft of light opens like a camera iris in a dark studio full of fine
suspended dust, pushing in slowly; light shifts from cool white through a
brief pink and fluorescent-green gel flare; the space resolves into a clean,
sharp, bright white studio at full focus. Start state (dark, unresolved) ≠
end state (bright, resolved) — the payoff scroll earns. No on-screen text or
logos in the film itself; copy is the HTML chapter overlay.

Chapters (read over the film as scroll advances):
1. `0–25%` — Manifesto: "POSICIONAMENTO QUE GERA RESULTADOS." (kicker: SHOWREEL IMPAKTA)
2. `25–50%` — Who we are: "NÃO SOMOS APENAS MAIS UMA AGÊNCIA." / "A IMPAKTA junta criatividade, estratégia, tecnologia e execução numa só equipa — da ideia ao resultado, sem intermediários e sem desculpas."
3. `50–75%` — What we do: "ESTRATÉGIA. CRIATIVIDADE. TECNOLOGIA. EXECUÇÃO." (tags: nine disciplines, e.g. Social Media, Direção Criativa, Foto & Vídeo, Drone, Branding, Paid Media, Web & Digital, IA, Estratégia)
4. `75–100%` — Resolve: "CRIATIVIDADE SEM ESTRATÉGIA É SÓ BARULHO." / CTA into the rest of the page: "VAMOS CRIAR IMPAKTO"

## 6. Section plan (post-journey; each a distinct layout family)

1. **Journey** (scroll-scrub film + 4 chapters above) — full-bleed film background.
2. **Numbers strip** — oversized metrics, centered stacked digit grid, solid black ground, leading digit in fluorescent green. Eyebrow: NÚMEROS.
3. **Selected work** — asymmetric editorial gallery, off-grid composition anchor, each of the 4 projects gets a distinct crop/scale (never equal 3-col cards); duotone image treatment. Eyebrow: TRABALHO SELECIONADO.
4. **Services** — interactive stacked list (no cards), alternating lead position per row, hover reveals a preview plate; flat white ground with inline generated crop per row. Eyebrow: O QUE FAZEMOS.
5. **Testimonials** — full-bleed rotating quote wall, bottom-left text over a graded photographic background, dot navigation. No eyebrow (ration spent).
6. **Clients** — full-width marquee band, solid pink ground, pause-on-hover. No eyebrow.
7. **Creative statement** — centered massive typographic canvas, solid black ground, the oversized fluorescent-green full-stop as the second-read moment. No eyebrow.
8. **Contact** — inverted-classic centered panel, solid white ground, framed-block CTA button, editorial footer beneath.

Eyebrow count: 3 (Numbers, Work, Services) across 8 sections — within the
ceil(8/3) = 3 budget.

## 7. CTA inventory (one label per intent, distinct garments)

- **Start a project / talk to us** (primary intent): label "FALA CONNOSCO" —
  garment: framed block button. Appears in nav, journey resolve chapter
  (as a magnetic underlined inline link, not the block — journey chrome is
  bespoke per §ninth rule below), and the contact section (framed block).
- **View full portfolio** (secondary intent): label "VER TRABALHO" — garment:
  oversized headline + tiny inline CTA hint, in the Selected Work section.
- **Open a project** (tertiary, per-item): no text label — custom cursor
  state "VER" on hover, the whole work item is the target (cursor-driven,
  per design-recipe bespoke-chrome guidance).

Note: the journey's own resolve-chapter CTA and the nav/contact CTA share the
same label ("FALA CONNOSCO") to satisfy the one-label-per-intent rule, but
render as different components (magnetic text link over film vs. framed
block on white) — that is the permitted "distinct garment per section"
variety, not a second label.

## 8. Asset plan

- Hero/journey film: 1 clip (see §5), ~15s, 16:9, no audio needed for scrub.
- Reference boards: 6 (Journey/hero, Numbers, Work, Services, Testimonials,
  Contact) — 16:9 landscape, `gpt_image_2` or `nano_banana_pro`.
- Section plates: Work section duotone plate treatment (pink/black duotone
  recipe applied via generation or post), Testimonials background photo,
  Contact ambient texture.
- Content imagery: 4 work-project cover images (Aurora Rooftop, Nortemar,
  Voltra, Casa Fontes — styled per each project's own creative direction
  notes), 1 testimonial background photo (studio/agency mood).
- Custom icon set: one sheet, 9 glyphs (one per discipline), 2px stroke,
  black on white, sliced + background-removed.
- Logo/monogram: client has no delivered logo file yet — generate a simple
  wordmark-adjacent monogram ("i.") using the oversized-full-stop motif for
  nav + favicon + head kit.
- OG image + head kit: full set per asset-system.md §7, generated from the
  monogram.

## 9. Anti-convergence ledger

First IMPAKTA build in this chat/session — no prior build's six identity
axes to diverge from. Palette, type pairing, hero architecture (full-bleed
scroll-scrub film, not split hero), Tier-1 technique (the scroll-scrub
itself), CTA garments (framed block + magnetic link + cursor-driven, not a
repeated pill), and corner language (sharp, no rounding — editorial, matches
Ivy.pt reference) are all locked above.

## 10. Fast-follow (not in this build)

- English (`/en`) route mirror once the PT journey and sections are proven.
- Full case-study detail pages per project (this build's Work section links
  out to placeholders / anchors; deep case-study routes are a v2 addition).
- Client-supplied real photography/logo swap-in once provided (see the
  existing static-site media-slot convention for precedent).
