# Alpine Lodge Website

Next.js website for Alpine Lodge in Davis, West Virginia.

The site positions Alpine Lodge as a budget-friendly basecamp for Blackwater Falls, Canaan Valley, Timberline Mountain, White Grass, Thomas, hiking, skiing, food, music, and low-cost mountain weekends.

## Run Locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Build

```bash
npm run build
npm run start
```

## Static Export Preview

If a localhost server is not available, a static export can be generated:

```bash
npm run build:static
```

The export is written to:

```txt
out/
```

The AI trip planner API requires a server or deployment, so the static export is for visual/content review only.

## Booking Link

The live reservation CTA uses Cloudbeds:

```txt
https://hotels.cloudbeds.com/reservation/6qyVUk
```

It is set in `.env.example` as:

```env
NEXT_PUBLIC_BOOKING_URL=https://hotels.cloudbeds.com/reservation/6qyVUk
```

## Environment Variables

Create `.env.local` for local development:

```env
NEXT_PUBLIC_SITE_URL=https://alpinelodgewva.com
NEXT_PUBLIC_BOOKING_URL=https://hotels.cloudbeds.com/reservation/6qyVUk
OPENAI_API_KEY=
```

Do not commit real API keys, passwords, Cloudbeds credentials, Google credentials, or social media logins.

## Main Content Files

Most editable content lives in:

```txt
data/site.js
```

That file controls:

- navigation
- booking URL
- phone, email, address
- social links
- room content
- amenities
- drive-time/distance blurbs
- experience pages
- trip guides
- FAQs
- local partner links
- lodging structured data

## Pages

Important routes:

- `/`
- `/rooms`
- `/location`
- `/experiences`
- `/experiences/[slug]`
- `/trip-guides`
- `/trip-guides/[slug]`
- `/trip-planner`
- `/faq`
- `/contact`

## AI Trip Planner

The trip planner works without a key by returning a safe fallback message. To enable real AI responses, add the client's own `OPENAI_API_KEY` in Vercel or `.env.local`.

The planner is intentionally grounded in local Alpine Lodge content and should not invent hours, prices, weather, trail conditions, pet policies, or availability.

## AI Search Visibility

The site includes `/llms.txt`, Hotel/Lodging schema, FAQ schema, a sitemap, and an AI-friendly robots configuration. These files help search engines and AI answer engines understand Alpine Lodge as a Davis, WV basecamp near Blackwater Falls, Canaan Valley, Timberline Mountain, White Grass, Thomas, and nearby trip experiences.

## Deployment

Recommended deployment target: Vercel.

1. Push this repo to GitHub.
2. Import the repo into Vercel.
3. Add environment variables.
4. Deploy.
5. Connect the Alpine Lodge domain when ready.
