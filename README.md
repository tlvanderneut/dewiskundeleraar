# De Wiskundeleraar

Statische herbouw van de bestaande WordPress-site op https://www.dewiskundeleraar.nl.

## Lokaal draaien

```bash
npm install
npm run dev
```

## Hosting

De site staat in `public/` en kan direct naar Cloudflare Pages. Gebruik:

- Build command: leeg laten, of `npm run build` als Cloudflare Vite gebruikt.
- Output directory: `public` voor directe static hosting, of `dist` bij Vite build.

## Formulieren

De oorspronkelijke site gebruikt Contact Form 7. In deze statische versie moeten formulieren nog aan een externe formulierdienst of mail-endpoint gekoppeld worden voordat berichten echt binnenkomen.
