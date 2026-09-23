# Nathaniel Blaiklock — Portfolio

A responsive Next.js and TypeScript portfolio, statically exported for GitHub Pages. Content is based on Nathaniel's resume; focus areas describe professional experience rather than claiming public project releases.

The Playground includes Pattern Match, a six-pair memory game with shuffled cards, move tracking, restart, and a completion state. It supports touch and keyboard controls, announces progress to screen readers, and runs entirely in the browser. Edit `app/pattern-game.tsx` to customize it.

## Local development

Requires Node.js 20.9 or newer.

```sh
npm ci
npm run dev
```

Visit http://localhost:3000. Edit `app/page.tsx` for content and `app/globals.css` for styling. The downloadable resume is in `public/`.

## Validation

```sh
npm run typecheck
npm run build
```

The production site is generated in `out/`. No backend or runtime secrets are required. Contact uses an email link. Fonts are loaded from Google Fonts with local fallback fonts.

## Publish to GitHub

Target repository: `nathanielai/nathanielai.github.io`.

1. Authenticate with `gh auth login`.
2. Create the public repository and push this project to its `main` branch.
3. In repository **Settings → Pages → Build and deployment**, select **GitHub Actions**.
4. Run the **Deploy portfolio to GitHub Pages** workflow, or push to `main`.

The workflow installs locked dependencies, checks TypeScript, builds the static site, and deploys it to https://nathanielai.github.io. The repository must have Pages enabled before the workflow succeeds.
