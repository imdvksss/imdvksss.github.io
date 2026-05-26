# Portfolio — Vadim Yankovsky

Personal portfolio. Static site, no build step required.

## Deploy to GitHub Pages

1. Create a new public repo, e.g. `imdvksss.github.io` (then the site lives at `https://imdvksss.github.io/`)
   or any name like `portfolio` (then the site lives at `https://imdvksss.github.io/portfolio/`).
2. Upload all files from this folder to the repo root, keeping the folder structure (`assets/photo.jpeg` must stay inside `assets/`).
3. Go to **Settings → Pages**.
4. Source: **Deploy from a branch**. Branch: **main**, folder: **/ (root)**. Save.
5. Wait 1–2 minutes — your site is live.

## Files

- `index.html` — entry point (GitHub Pages serves this automatically)
- `portfolio.html` — same content, kept as a backup name
- `styles.css` — all styles
- `content.jsx` — bilingual RU/EN copy
- `components.jsx` — cursor, nav, side indicator, reveal helpers
- `sections.jsx` — Hero / About / Achievements / Projects / Skills / Contact
- `app.jsx` — main React app, language state, scroll-spy
- `assets/photo.jpeg` — avatar

## Local preview

Just open `index.html` in a browser. Or run any static server in the folder:

```bash
python3 -m http.server 8080
# then open http://localhost:8080
```

## Tech

React 18 + Babel standalone (no bundler). All animations are vanilla CSS + IntersectionObserver + rAF.
