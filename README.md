# Shubham Bari – résumé website (React + Vite)

A single-page, responsive résumé site built with React 18 and Vite.

## Project layout

- `src/data.js` – all résumé content (edit this to update the site)
- `src/App.jsx` – page sections as React components
- `src/styles.css` – dark theme (colours are variables at the top), responsive layout, print layout
- `index.html` – page title, description and font links
- `vite.config.js` – build settings (`base: './'` so it works on any host or sub-folder)

## Run locally

Requires Node.js 18 or newer (https://nodejs.org).

```bash
npm install
npm run dev        # opens http://localhost:5173
```

## Before you deploy

1. In `src/data.js`, replace `YOUR-LINKEDIN-HANDLE` in the `linkedin` link.
2. Optionally edit the title and description in `index.html`.

## Build

```bash
npm run build      # creates the dist/ folder
npm run preview    # test the production build locally
```

`dist/` is the folder you upload to any static host.

## Deploy

### Netlify (fastest)
1. Run `npm run build`.
2. Go to https://app.netlify.com/drop and drag the `dist` folder onto the page.

Or connect a GitHub repo: build command `npm run build`, publish directory `dist`.

### Vercel
1. Push this project to GitHub and import it at https://vercel.com/new.
2. Framework preset: **Vite**. Build command `npm run build`, output directory `dist`. Deploy.

### Cloudflare Pages
1. Connect your GitHub repo.
2. Framework preset: **Vite** (build command `npm run build`, output directory `dist`).

### GitHub Pages
1. Push the project to a GitHub repository.
2. Run `npm run build`, then publish the contents of `dist/` to the `gh-pages` branch
   (for example with `npx gh-pages -d dist`), or use a GitHub Actions workflow.
3. In **Settings → Pages**, select the `gh-pages` branch and `/ (root)`.

### Your own hosting (cPanel, FTP, S3)
1. Run `npm run build`.
2. Upload the **contents** of `dist/` to `public_html` (or your S3 bucket root).

## Custom domain
Add the domain in your host's dashboard, then create the DNS records it shows you
(a CNAME for `www`, an A or ALIAS record for the root). HTTPS is issued automatically.

## Notes
- Theme: dark navy with a yellow accent and a profile sidebar. Change colours in the `:root` block of `src/styles.css`.
- **Save résumé as PDF** opens the print dialog with a clean layout; choose *Save as PDF*.
