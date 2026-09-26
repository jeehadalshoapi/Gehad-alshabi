# jeemdev — portfolio & CV site

Interactive single-page developer portfolio. Plain HTML, CSS and JavaScript — no build step,
no dependencies, no npm install. Open it, edit one file, upload it.

---

## 1. The only file you edit

**`data/content.js`** — every word on the site comes from this one object:
name, roles, tagline, stats, about, skills, experience, education, projects, documents, SEO.

Change a value, save, refresh the browser. That's the whole workflow.

### Bilingual (English + Arabic)

Any piece of text can be written in two forms:

```js
title: "SolidWorks"                              // same in both languages
title: { en: "Experience", ar: "الخبرات" }        // one per language
```

If you add a new field and only write `en`, the English text is shown in both
languages — nothing breaks, so you can translate gradually.

The visitor's language is chosen in this order: their saved choice →
`?lang=ar` in the URL → their browser language → English. The toggle in the
navbar switches instantly with no page reload, flips the whole layout to
right-to-left, swaps the font to Cairo, and remembers the choice.

UI chrome (buttons, form labels, nav) lives in the `UI` dictionary near the top
of `assets/js/main.js`.

**All prose in `content.js` is taken verbatim from the two CV PDFs** — the
professional summary, every experience bullet and every project bullet. Keep it
that way when you edit: the site and the CV should never tell different stories.

### Light & dark

The circle button in the navbar cycles **auto → light → dark**. *Auto* follows
the visitor's device setting and is the default. The choice is remembered, and a
small inline script in `<head>` applies it before first paint so there is no
flash of the wrong palette. Light colours live at the bottom of
`assets/css/style.css`; the canvas particles repaint themselves to match.

## 2. Adding your CV and documents

1. Drop the file into **`assets/docs/`** (e.g. `assets/docs/CV.pdf`).
2. Add an entry to the `documents` array in `data/content.js`:

```js
{
  title: "Curriculum Vitae",
  desc:  "Full CV — experience, skills and education.",
  file:  "assets/docs/CV.pdf",
  type:  "pdf",        // "pdf" gets an in-page preview; anything else just downloads
  icon:  "file-text",   // file-text | award | id | folder | globe
  primaryFor: "en",     // highlight this card + wire the navbar CV button when the site is in English
                        // use  primary: true  to always highlight, regardless of language
  // lang: "ar",        // optional: show this card ONLY in Arabic
}
```

PDFs open in a full-screen in-page viewer with Download / New-tab buttons.
Any document listed here whose file is missing on the server is automatically flagged
on the card, so a broken CV link can't go unnoticed.

## 3. Photo & images

- Profile photo → `assets/img/avatar.jpg` (square works best; set `identity.avatar`)
- Project screenshots → `assets/img/` then set `image:` on that project
- Social share image → `assets/img/og.png` (1200×630)

All optional — the site falls back to styled placeholders if a file is absent.

## 4. Contact form

Messages are delivered by **Formspree** (`contact.formEndpoint` in `data/content.js`),
free tier: 50 submissions/month. Each notification gets a `jeemdev.net — <subject>`
subject line, and Reply goes straight back to the sender.

If that endpoint is ever emptied or Formspree fails, the form degrades gracefully:
it attempts the visitor's mail client and then shows a panel offering a pre-filled
Gmail compose link, a WhatsApp link built from `contact.phone`, a copy-to-clipboard
button and the plain address — so a visitor is never left with a dead button.

## 5. Running it locally

Just double-click `index.html` — it works from the file system.
For the document "file not found" check and PDF previews to behave exactly like production,
serve it over HTTP instead:

```bash
python -m http.server 8000
# then open http://localhost:8000
```

## 6. Deploying to gehadalshabi.jeemdev.net

### Netlify (easiest)
1. <https://app.netlify.com/drop> → drag this whole folder in. Live instantly.
2. Site settings → Domain management → Add custom domain → `gehadalshabi.jeemdev.net`.
3. Point your domain's DNS at Netlify (they show the exact records).
   `netlify.toml` here already sets caching and security headers.

### GitHub Pages
```bash
git init && git add . && git commit -m "portfolio"
git branch -M main
git remote add origin https://github.com/<you>/<repo>.git
git push -u origin main
```
Repo → Settings → Pages → Deploy from branch `main` / root.
The included `CNAME` file already contains `gehadalshabi.jeemdev.net`, so Pages picks the domain up
automatically — then add these DNS records at your registrar:

| Type  | Name | Value |
|-------|------|-------|
| A     | @    | 185.199.108.153 |
| A     | @    | 185.199.109.153 |
| A     | @    | 185.199.110.153 |
| A     | @    | 185.199.111.153 |
| CNAME | www  | `<you>.github.io` |

### Vercel / cPanel / any host
Upload the folder as-is. It's static — `index.html` at the root is all that's needed.

## 7. What's in the motion layer

| Effect | Where |
|---|---|
| Boot loader with progress | top of page load |
| Particle constellation reacting to the mouse | `<canvas>` background |
| Animated grid + film grain | CSS layers |
| Typing / deleting job titles | hero |
| Counters that animate on scroll | hero stats |
| Instant EN ⇄ AR switch with RTL flip | navbar |
| Auto / light / dark theme, animated flip | navbar |
| Scroll-reveal for every block | all sections |
| Expandable long project descriptions | project cards |
| Custom neon cursor with hover state | desktop only |
| Magnetic buttons | CTAs |
| 3D tilt on project & document cards | hover |
| Scroll progress bar + active nav highlight | navbar |
| In-page PDF viewer modal | documents |
| Easter egg: type `jeem` anywhere | whole page |

All of it respects `prefers-reduced-motion`, and the whole page has a clean print
stylesheet — so pressing Ctrl+P produces a readable paper CV.

## 8. Structure

```
index.html            markup shell (mostly empty containers)
data/content.js       ← your content lives here
assets/css/style.css  design system + all animation
assets/js/main.js     renders content.js into the DOM + motion layer
assets/docs/          CV and any certificates
assets/img/           photo, project shots, favicon, og image
CNAME netlify.toml robots.txt sitemap.xml   deployment
```
