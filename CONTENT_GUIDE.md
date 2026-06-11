# Content Guide

## Positioning

Alpine Lodge should sound practical, local, helpful, and confident.

Core message:

> Alpine Lodge is the affordable Davis, WV home base for exploring Blackwater Falls, Canaan Valley, Timberline Mountain, White Grass, Thomas, and the wider Tucker County area.

Avoid making it sound like a luxury resort. The promise is location, value, simplicity, and access to experiences.

## Adding An Experience Page

Add a new object to `experiences` in `data/site.js`.

Required fields:

- `slug`
- `title`
- `eyebrow`
- `seoTitle`
- `description`
- `image`
- `alt`
- `distance`
- `budget`
- `bestFor`
- `season`
- `officialLink`
- `body`
- `tips`

Use real traveler search language, such as:

- lodging near Blackwater Falls
- lodging near Timberline Mountain
- budget hotel in Davis WV
- pet-friendly lodging Davis WV
- things to do near Davis WV

The page must be useful on its own. Do not create thin keyword-only pages.

## Adding A Trip Guide

Add a new object to `tripGuides` in `data/site.js`.

Good guide topics:

- Free and low-cost things to do near Davis, WV
- Family weekend near Blackwater Falls
- Fall color weekend in Tucker County
- Mountain biking weekend in Davis
- White Grass cross-country ski weekend
- One-night Davis getaway

Every guide should end with Alpine Lodge as the practical home base.

## Images

Put images in:

```txt
public/images
```

Use descriptive filenames:

```txt
blackwater-falls-near-alpine-lodge-davis-wv.jpg
timberline-mountain-lodging-davis-wv.jpg
pet-friendly-lodging-davis-wv.jpg
```

Alt text should describe the actual image and include the place when useful.

Do not use competitor photos or social media photos without permission.

Priority replacements before launch:

- White Grass: use an owner-approved photo, a White Grass-provided image with permission, or a properly licensed snowy Nordic trail photo.
- Dolly Sods: use a properly licensed wilderness/view photo. Wikimedia Commons has licensed options, but any image used must keep the required attribution in `IMAGE_CREDITS.md`.
- Alpine Lodge rooms: add more honest room photos before paid traffic or heavy SEO promotion.

## Room Photo Shot List

Budget and value-minded lodging visitors inspect room photos closely. Before
launch, prioritize honest, well-lit photos over decorative scenery:

- exterior arrival view
- bed from the doorway
- bed from the opposite corner
- bathroom sink/shower/toilet
- refrigerator / TV / storage corner
- pet-friendly room example, if different
- parking or check-in/office view

Avoid over-editing. The goal is “tidy, cared-for, and accurate,” not luxury.

## Trust Proof

Add verified proof as soon as ownership can provide it:

- Google rating and review count
- two or three short guest quotes
- current direct-booking or cancellation reassurance
- “Rooms from $99” placement near the top of the page and near room CTAs

Do not invent reviews. When adding quotes to `guestQuotes` in `data/site.js`,
use short verified snippets from Google, TripAdvisor, Booking.com, or another
approved source. Keep the exact quote short, note the source internally, and
avoid publishing a guest's full name unless the source clearly displays it.

## Pet-Friendly Copy

The homepage now gives pet-friendly rooms their own callout. If ownership has a
confirmed pet fee, add it directly to the pet callout, FAQ, and pet-friendly
experience page. If the fee can change, keep the wording qualified and point
visitors to direct booking or a phone call.

## Technical SEO

The site includes Hotel / LodgingBusiness / LocalBusiness structured data in
`data/site.js`. Keep the address, phone, booking link, amenities, check-in, and
check-out details owner-approved because search engines can read that data
directly.

## FAQ

The vendor FAQ document supplied the question list. Before final launch, confirm owner-approved answers for:

- Sawmill Restaurant hours
- office hours
- irons and ironing boards
- ice machine
- laundry
- coffee makers
- breakfast
- bike rentals
- ski rentals
- tour guides
- restaurant recommendations
- rainy-day recommendations
- maps
- cancellation policy
- smoking policy
- group discounts

## Price Anchor

The homepage includes a rate-clarity panel currently using:

```txt
Rooms from $99
```

Keep the wording qualified because rates can shift by season and availability.
Do not invent rate comparisons like “half the cost of resort lodging” unless
ownership can substantiate the claim.
