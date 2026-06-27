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

## Plannen

De oorspronkelijke WordPress-site gebruikte Simply Schedule Appointments via WordPress-iframes. Die iframes werken niet meer zodra het domein niet meer naar WordPress wijst. In deze statische versie staan daarom contactknoppen naar WhatsApp/LinkedIn op de planningskaarten.
