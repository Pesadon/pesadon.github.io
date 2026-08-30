# Mesejó világ — Astro rebuild (Step 1 of the migration)

This is a working Astro version of the site — same look, same behaviour,
just no longer copy-pasted across 8 separate HTML files. See the chat
explanation for the full walkthrough of what changed and why.

## Before you can see it looking right

1. **Copy your images.** They weren't part of the upload — see
   `public/img/COPY_YOUR_IMAGES_HERE.txt` for the exact list of files this
   project expects, then delete that txt file.

## Running it locally

```
npm install
npm run dev
```

Then open the URL it prints (usually http://localhost:4321). Every page,
click-through, and modal should behave exactly like the live site.

## Building for deployment

```
npm run build
```

Outputs static files to `dist/`. The included `wrangler.jsonc` points a
Cloudflare Worker's static-assets serving at that folder — see the chat
for the full walkthrough of connecting this repo to Cloudflare.
