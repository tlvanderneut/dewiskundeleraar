# De Wiskundeleraar

Eigen statische website voor De Wiskundeleraar, opgebouwd voor Cloudflare Pages.

## Pagina's

- Home
- Over mij
- Plannen maar
- Prijzen
- Contact

## Lokaal draaien

```bash
npm install
npm run dev
```

## Hosting

De site staat in `public/` en kan direct naar Cloudflare Pages. Gebruik:

- Build command: leeg laten, of `npm run build`.
- Output directory: `public`.

## Plannen

De site is volledig statisch. Plannen loopt via WhatsApp, LinkedIn of mail in plaats van WordPress-afspraakplugins.

## SEO

Elke pagina heeft een eigen title, description, canonical URL, Open Graph/Twitter metadata en JSON-LD voor De Wiskundeleraar. De sitemap staat op `public/sitemap.xml`.

## Contact

De contactpagina bevat directe WhatsApp-, mail- en LinkedIn-links plus een eenvoudig mailformulier. Het formulier gebruikt `mailto:info@dewiskundeleraar.nl`, zodat er geen extern formulieraccount nodig is.
