# DigitalVI Studio Help

The public help site for DigitalVI Studio, served at **https://help.digitalvi.app**.

Built with [Astro Starlight](https://starlight.astro.build). It's fully static (no database), deployed on Vercel,
and has built-in search.

## Working on the site

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # production build into dist/ (also checks every internal link and anchor)
```

## Where things live

| Path | What |
| --- | --- |
| `src/content/docs/` | One Markdown file per help page. The file path is the URL (`players/layouts.md` → `/players/layouts/`). |
| `astro.config.mjs` | Site title and the **sidebar**. Add new pages to the sidebar here. |
| `public/screenshots/` | Screenshots of Studio, referenced as `/screenshots/<name>.png`. |
| `scripts/capture/` | The automated screenshot tool (see below). |
| `vercel.json` | Build settings, plus the **in-app help redirects** (`/app/<studio path>` → help page). |

## Unique URLs and in-app help

Every page and every heading has its own URL, for example `/players/player-details/#admin-menu`.

Studio can link to context-sensitive help by sending users to `https://help.digitalvi.app/app` + the current
Studio path. `vercel.json` maps those paths to help pages. When Studio gets a new screen, add a redirect rule
there. Rules are checked top to bottom, so put specific paths before general ones. The route table on
`/reference/app-help-links/` is generated from the same file.

## Refreshing screenshots

Screenshots are taken automatically from the **Help** demo tenant on `dev.digitalvi.app`:

```bash
npx playwright install msedge   # first time only, if Edge isn't installed
npm run capture                 # all screens
npm run capture -- players-detail layouts-builder   # just some
```

An Edge window opens. Sign in (the first time and whenever the session has expired), and capturing starts on
its own. The list of screens, and the tenant IDs they use, are in `scripts/capture/shots.config.mjs`.
The browser profile is stored in `.auth/`, which is never committed.

Only capture from a tenant that contains **demo data**. Everything in `public/screenshots/` is published.

## Deploying

Pushing to `main` deploys to production on Vercel. Pull requests get preview URLs.
