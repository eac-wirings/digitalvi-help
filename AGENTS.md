## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)

## This project

Public help site for DigitalVI Studio (https://help.digitalvi.app). See README.md.

- One page per Studio screen area under `src/content/docs/<menu section>/`. Each page starts with a
  `**Where:** Menu → Item (`/studio/path`)` line, then field tables (Field | Required | Description).
- New pages must be added to the sidebar in `astro.config.mjs`, and new Studio routes to `vercel.json` redirects.
- Screenshots come only from `npm run capture` (list in `scripts/capture/shots.config.mjs`) against the Help demo tenant.
- `npm run build` validates all internal links and anchors; keep it passing.
