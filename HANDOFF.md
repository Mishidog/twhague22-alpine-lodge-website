# Handoff Notes

## GitHub

Recommended repo name:

```txt
alpine-lodge-website
```

Recommended handoff:

1. Push to a private GitHub repository.
2. Invite the client or transfer the repository to the client's GitHub account/organization.
3. The client can clone/open the repo in their own Codex environment.

## Security

The supplied vendor documents included login credentials. Those credentials were not added to this repo.

Before handoff, rotate any shared credentials and store them in a password manager.

Do not commit:

- OpenAI keys
- Cloudbeds credentials
- Google Business credentials
- social media passwords
- Vercel tokens
- DNS credentials

## Client-Owned Keys

The client should provide their own OpenAI API key if they want the AI trip planner enabled.

Set it in Vercel as:

```env
OPENAI_API_KEY=client-owned-key
```

## Vercel

Environment variables:

```env
NEXT_PUBLIC_SITE_URL=https://alpinelodgewva.com
NEXT_PUBLIC_BOOKING_URL=https://hotels.cloudbeds.com/reservation/6qyVUk
OPENAI_API_KEY=
```

## Pre-Launch Checklist

- Confirm all room photos are current.
- Confirm pet policy.
- Confirm cancellation policy.
- Confirm check-in/check-out.
- Confirm Sawmill Restaurant status and hours.
- Confirm office hours.
- Confirm phone and email.
- Confirm Google Business profile access.
- Connect domain.
- Add analytics.
- Submit sitemap to Google Search Console and Bing Webmaster Tools.

