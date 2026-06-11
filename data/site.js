export const site = {
  name: "Alpine Lodge",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://alpinelodgewva.com",
  bookingUrl:
    process.env.NEXT_PUBLIC_BOOKING_URL ||
    "https://hotels.cloudbeds.com/reservation/6qyVUk",
  phone: "+1 304-259-5245",
  email: "office@alpinelodgewva.com",
  address: {
    street: "850 Sawmill Lane",
    city: "Davis",
    state: "WV",
    postalCode: "26260"
  },
  socials: [
    { label: "Instagram", href: "https://www.instagram.com/alpinelodgewva/" },
    {
      label: "Facebook",
      href: "https://www.facebook.com/profile.php?id=100054325968937"
    },
    { label: "TikTok", href: "https://www.tiktok.com/@alpine.lodge" },
    { label: "YouTube", href: "https://www.youtube.com/@alpinelodgewv" }
  ]
};

export const nav = [
  { label: "Rooms", href: "/rooms" },
  { label: "Location", href: "/location" },
  { label: "Experiences", href: "/experiences" },
  { label: "Trip Guides", href: "/trip-guides" },
  { label: "Planner", href: "/trip-planner" },
  { label: "FAQ", href: "/faq" }
];

export const highlights = [
  "Davis, WV location",
  "Fair-priced rooms",
  "Pet-friendly rooms available",
  "Wi-Fi, refrigerator, private bath",
  "Minutes from waterfalls, ski areas, trails, food, and music"
];

export const rateSignal = {
  eyebrow: "Rate clarity",
  headline: "Live room rates are shown before you reserve.",
  body:
    "Rates can shift by season and availability, so the direct booking page shows current room options before you commit. If ownership confirms a starting rate, this panel can become a stronger “rooms from $X” proof point.",
  cta: "Check Live Rates"
};

export const rooms = [
  {
    title: "Simple Rooms For Mountain Trips",
    image: "/images/alpine-lodge-room.jpg",
    alt: "A guest room at Alpine Lodge in Davis, West Virginia",
    caption: "Where you crash after Dolly Sods, ski laps, waterfall walks, and late dinner in Davis.",
    description:
      "A practical place to land after a day outside, with the basics travelers actually use: private bathroom, refrigerator, flat-screen TV, Wi-Fi, and easy access to Davis."
  },
  {
    title: "Pet-Friendly Options",
    image: "/images/alpine-lodge-exterior.jpg",
    alt: "Alpine Lodge exterior in Davis, West Virginia",
    caption: "A simple Davis landing spot when the dog is part of the road trip.",
    description:
      "Designated pet-friendly rooms help make Alpine Lodge a useful home base for visitors traveling with dogs. Confirm availability when booking."
  },
  {
    title: "Close To The Whole Weekend",
    image: "/images/alpine-lodge-property.jpeg",
    alt: "Alpine Lodge property near Davis attractions",
    caption: "Park here, sleep here, then point the day toward waterfalls, snow, trails, food, or music.",
    description:
      "Spend less time driving across the region and more time enjoying Blackwater Falls, Canaan Valley, Timberline Mountain, White Grass, Thomas, and downtown Davis."
  }
];

export const amenities = [
  "Private bathroom",
  "Refrigerator",
  "Flat-screen TV",
  "Free Wi-Fi",
  "DirecTV",
  "Designated pet-friendly rooms",
  "Easy access to Davis and nearby attractions",
  "Direct Cloudbeds reservations"
];

export const distances = [
  {
    place: "Downtown Davis",
    time: "about 2 minutes",
    note: "Food, shops, coffee, breweries, and small-town mountain character."
  },
  {
    place: "Blackwater Falls State Park",
    time: "about 5 minutes",
    note: "Waterfalls, overlooks, trails, sled run, cabins, and scenic drives."
  },
  {
    place: "Thomas, WV",
    time: "about 10 minutes",
    note: "Music, galleries, shops, restaurants, and The Purple Fiddle."
  },
  {
    place: "Canaan Valley",
    time: "about 15 minutes",
    note: "Hiking, wildlife, resort activities, skiing, tubing, and scenic views."
  },
  {
    place: "Timberline Mountain",
    time: "about 20 minutes",
    note: "Downhill skiing, snowboarding, mountain views, and winter weekends."
  },
  {
    place: "White Grass Ski Touring Center",
    time: "about 20 minutes",
    note: "Cross-country skiing, snowshoeing, lessons, rentals, and cafe culture."
  }
];

export const experiences = [
  {
    slug: "blackwater-falls-lodging",
    title: "Blackwater Falls Lodging",
    eyebrow: "Waterfalls & state park days",
    seoTitle: "Lodging Near Blackwater Falls State Park | Alpine Lodge Davis WV",
    description:
      "Stay minutes from Blackwater Falls State Park at Alpine Lodge, a practical Davis, WV basecamp for waterfalls, overlooks, trails, and scenic drives.",
    image: "/images/blackwater-falls.jpg",
    alt: "Blackwater Falls near Davis, West Virginia",
    distance: "about 5 minutes from Alpine Lodge",
    budget: "Free to low-cost park day",
    bestFor: ["waterfalls", "families", "photos", "short hikes", "scenic drives"],
    season: "All year, with strong fall and winter scenery",
    officialLink: "https://wvstateparks.com/parks/blackwater-falls-state-park/",
    body: [
      "Blackwater Falls is one of the easiest big wins from Alpine Lodge. You can check in, drop your bags, and be at the park quickly for the falls boardwalk, overlooks, trails, and classic West Virginia views.",
      "It is a strong choice for travelers who want a memorable outdoor day without turning the whole trip into a high-cost resort stay. Use Alpine Lodge as the simple room and put the rest of the trip spend toward food, fuel, gear, and extra exploring."
    ],
    tips: [
      "Go early or late for easier parking and softer light.",
      "Bring layers; the park can feel cooler than town.",
      "Pair the falls with dinner or music in Davis or Thomas."
    ]
  },
  {
    slug: "canaan-valley-lodging",
    title: "Canaan Valley Lodging",
    eyebrow: "Four-season recreation",
    seoTitle: "Affordable Lodging Near Canaan Valley WV | Alpine Lodge",
    description:
      "Use Alpine Lodge in Davis as a fair-priced base for Canaan Valley hiking, skiing, tubing, wildlife viewing, scenic drives, and resort activities.",
    image: "/images/fly-fishing-blackwater-river.jpg",
    alt: "Fly fishing and mountain scenery near Davis and Canaan Valley",
    distance: "about 15 minutes from Alpine Lodge",
    budget: "Mix of free, low-cost, and paid activities",
    bestFor: ["skiing", "families", "wildlife", "hiking", "scenic drives"],
    season: "Winter, summer, and fall are especially popular",
    officialLink: "https://www.canaanresort.com/",
    body: [
      "Canaan Valley gives visitors a wide menu of mountain activities, from winter recreation to summer hiking and scenic exploration. Alpine Lodge works well for travelers who want to enjoy the valley without paying resort-style lodging prices.",
      "Stay in Davis, keep the room simple, and use the savings for lift tickets, meals, rentals, gas, and an extra night in the mountains."
    ],
    tips: [
      "Check resort and park pages for current hours before driving over.",
      "Build extra time into winter travel plans.",
      "Combine Canaan Valley with a Blackwater Falls stop for a full outdoor day."
    ]
  },
  {
    slug: "timberline-mountain-lodging",
    title: "Timberline Mountain Lodging",
    eyebrow: "Downhill ski weekends",
    seoTitle: "Lodging Near Timberline Mountain | Budget Hotel in Davis WV",
    description:
      "Stay at Alpine Lodge in Davis for practical lodging near Timberline Mountain skiing, snowboarding, lift-served mountain days, and winter weekends.",
    image: "/images/alpine-lodge-local-view.jpg",
    alt: "Mountain view near Alpine Lodge in Davis, West Virginia",
    distance: "about 20 minutes from Alpine Lodge",
    budget: "Save on lodging, spend on the mountain",
    bestFor: ["skiing", "snowboarding", "groups", "winter weekends"],
    season: "Winter, with scenic mountain visits in warmer months",
    officialLink: "https://www.timberlinemountain.com/",
    body: [
      "Timberline Mountain is a major reason people come to the Davis and Canaan Valley area in winter. Alpine Lodge gives skiers and snowboarders a practical place to sleep without making the lodging the expensive part of the trip.",
      "It is especially useful for groups and value-minded visitors who plan to be out on the mountain all day and want a simple room nearby at night."
    ],
    tips: [
      "Reserve early for winter weekends and holiday periods.",
      "Confirm lift ticket, rental, and lesson details directly with Timberline.",
      "Pack boot mats, layers, and dry socks for the room."
    ]
  },
  {
    slug: "white-grass-ski-lodging",
    title: "White Grass Ski Lodging",
    eyebrow: "Nordic skiing & snowshoeing",
    seoTitle: "Lodging Near White Grass Ski Touring Center | Alpine Lodge",
    description:
      "Plan a cross-country ski or snowshoe weekend near White Grass with Alpine Lodge as your Davis, WV home base.",
    image: "/images/blackwater-falls.jpg",
    alt: "Snow and waterfall scenery near Davis, West Virginia",
    distance: "about 20 minutes from Alpine Lodge",
    budget: "Fair-priced winter adventure",
    bestFor: ["cross-country skiing", "snowshoeing", "couples", "quiet weekends"],
    season: "Winter snow conditions",
    officialLink: "https://whitegrass.com/",
    body: [
      "White Grass is part of what makes the Canaan Valley area feel different from ordinary ski destinations. It is a beloved Nordic ski and snowshoe stop with a strong local culture.",
      "Alpine Lodge keeps the trip grounded: simple lodging in Davis, easy access to White Grass, and plenty of nearby food and music after a day in the snow."
    ],
    tips: [
      "Check snow conditions before you go.",
      "Ask White Grass directly about lessons, rentals, and trail status.",
      "Leave room in the plan for a slow meal after skiing."
    ]
  },
  {
    slug: "dolly-sods-weekend",
    title: "Dolly Sods Weekend",
    eyebrow: "Big views & wild terrain",
    seoTitle: "Dolly Sods Weekend Lodging Near Davis WV | Alpine Lodge",
    description:
      "Make Alpine Lodge your Davis base for a Dolly Sods weekend with hiking, scenic drives, big views, and practical lodging nearby.",
    image: "/images/downtown-davis-wv.jpeg",
    alt: "Downtown Davis, West Virginia near Alpine Lodge",
    distance: "drive times vary by trailhead and road conditions",
    budget: "Free outdoor adventure with planning required",
    bestFor: ["hiking", "photography", "scenic drives", "experienced outdoors visitors"],
    season: "Late spring through fall, depending on road and weather conditions",
    officialLink:
      "https://www.fs.usda.gov/recarea/mnf/recarea/?recid=12366",
    body: [
      "Dolly Sods is one of the region's signature wild landscapes, but it rewards planning. Weather, road access, maps, and trail choices matter more here than they do for a quick overlook stop.",
      "Alpine Lodge gives hikers a simple place to sleep before and after a bigger outdoor day, with Davis close by for meals, supplies, and a reset."
    ],
    tips: [
      "Carry offline maps and do not rely only on cell service.",
      "Check road access and weather before choosing a trailhead.",
      "Bring extra layers; conditions can change quickly."
    ]
  },
  {
    slug: "thomas-wv-music-food",
    title: "Thomas, WV Music & Food",
    eyebrow: "Small-town nights out",
    seoTitle: "Stay Near Thomas WV Music, Food & The Purple Fiddle | Alpine Lodge",
    description:
      "Stay in nearby Davis at Alpine Lodge for a fair-priced weekend close to Thomas, WV music, galleries, restaurants, shops, and nightlife.",
    image: "/images/downtown-davis-wv.jpeg",
    alt: "Historic downtown Davis near Thomas, West Virginia",
    distance: "about 10 minutes from Alpine Lodge",
    budget: "Low-cost exploring, food, drinks, and ticketed shows",
    bestFor: ["music", "food", "couples", "friends", "rainy days"],
    season: "All year",
    officialLink: "https://purplefiddle.com/",
    body: [
      "A Davis weekend is not only about trails and waterfalls. Thomas adds music, food, galleries, and a small-town evening scene that turns a simple overnight stay into a real getaway.",
      "Book Alpine Lodge as the simple room, then spend the evening on dinner, drinks, music, and local shops."
    ],
    tips: [
      "Check show calendars before booking your dates.",
      "Plan transportation if your night includes drinks.",
      "Use rainy weather as a reason to explore galleries, shops, and restaurants."
    ]
  },
  {
    slug: "hiking-near-davis-wv",
    title: "Hiking Near Davis, WV",
    eyebrow: "Trails close to town",
    seoTitle: "Hiking Near Davis WV | Budget Lodging at Alpine Lodge",
    description:
      "Find practical lodging near Davis, WV hiking, Blackwater Falls trails, Canaan Valley paths, Dolly Sods, and Monongahela National Forest.",
    image: "/images/fly-fishing-blackwater-river.jpg",
    alt: "Outdoor recreation near Davis, West Virginia",
    distance: "trail options from minutes away to longer scenic drives",
    budget: "Mostly free outdoor days",
    bestFor: ["hiking", "families", "couples", "solo travelers", "fall color"],
    season: "Spring through fall, with winter options depending on conditions",
    officialLink: "https://wvstateparks.com/parks/blackwater-falls-state-park/",
    body: [
      "Davis makes sense for hikers because so many trail options sit in every direction. You can keep the room practical, then choose the trail day that fits your group, weather, and energy level.",
      "Alpine Lodge is especially useful for travelers who want options: short waterfall walks, state park trails, valley views, and bigger Monongahela National Forest outings."
    ],
    tips: [
      "Match the trail to the least experienced person in the group.",
      "Carry water, layers, and offline directions.",
      "Ask local shops or official park offices for current trail advice."
    ]
  },
  {
    slug: "pet-friendly-lodging-davis-wv",
    title: "Pet-Friendly Davis, WV",
    eyebrow: "Bring the dog",
    seoTitle: "Pet-Friendly Lodging in Davis WV | Alpine Lodge",
    description:
      "Alpine Lodge offers designated pet-friendly rooms for travelers looking for practical lodging near Davis, Blackwater Falls, Canaan Valley, and Thomas.",
    image: "/images/alpine-lodge-exterior.jpg",
    alt: "Exterior of Alpine Lodge, a Davis WV lodging option with pet-friendly rooms",
    distance: "central Davis location",
    budget: "Practical lodging for pet travelers",
    bestFor: ["dogs", "road trips", "hikers", "weekend getaways"],
    season: "All year",
    officialLink: site.bookingUrl,
    body: [
      "Traveling with a pet can make lodging harder than the trip itself. Alpine Lodge has designated pet-friendly rooms, making it easier to plan a mountain weekend around Davis, Blackwater Falls, Canaan Valley, and Thomas.",
      "Because pet-friendly rooms are limited, confirm availability and policies before you finalize the trip."
    ],
    tips: [
      "Book directly and confirm the pet-friendly room type.",
      "Bring towels, bags, leash, and a familiar bed or blanket.",
      "Check pet rules for parks, trails, restaurants, and venues before you go."
    ]
  }
];

export const tripGuides = [
  {
    slug: "budget-weekend-davis-wv",
    title: "A Budget Weekend in Davis, WV",
    seoTitle: "Budget Weekend in Davis WV | Affordable Alpine Lodge Trip Guide",
    description:
      "Plan an affordable Davis, WV weekend with Alpine Lodge, Blackwater Falls, local food, scenic drives, Thomas, and free or low-cost outdoor time.",
    image: "/images/alpine-lodge-exterior.jpg",
    audience: "Couples, friends, and families who want a real mountain weekend without resort pricing.",
    days: [
      {
        label: "Friday",
        items: [
          "Check in at Alpine Lodge and keep the first night easy.",
          "Walk or drive into Davis for dinner.",
          "Look at the next day's weather and pick a waterfall, hike, or Thomas plan."
        ]
      },
      {
        label: "Saturday",
        items: [
          "Start with Blackwater Falls State Park.",
          "Pack snacks or a simple lunch to keep costs down.",
          "Spend the afternoon in Davis or Thomas, then catch food, music, or shops."
        ]
      },
      {
        label: "Sunday",
        items: [
          "Take a scenic drive toward Canaan Valley.",
          "Choose one short trail or overlook before heading home.",
          "Save favorite stops for a longer return trip."
        ]
      }
    ]
  },
  {
    slug: "ski-weekend-without-resort-prices",
    title: "Ski Weekend Without Resort Prices",
    seoTitle: "Affordable Ski Weekend Near Timberline Mountain | Alpine Lodge",
    description:
      "Use Alpine Lodge as budget-friendly lodging for a Davis, WV ski weekend near Timberline Mountain, Canaan Valley, and White Grass.",
    image: "/images/alpine-lodge-local-view.jpg",
    audience: "Skiers, snowboarders, Nordic skiers, and groups trying to keep the trip affordable.",
    days: [
      {
        label: "Before You Go",
        items: [
          "Reserve the room early for winter weekends.",
          "Check ski area conditions, rental details, and ticket availability.",
          "Pack layers, boot bags, dry socks, snacks, and extra phone chargers."
        ]
      },
      {
        label: "Ski Day",
        items: [
          "Head to Timberline Mountain, Canaan Valley, or White Grass based on your style.",
          "Keep lunch simple if the trip budget is tight.",
          "Return to Davis for dinner and a lower-key evening."
        ]
      },
      {
        label: "Recovery Morning",
        items: [
          "Sleep in or take a short scenic drive.",
          "If conditions are good, add a half-day ski or snowshoe session.",
          "Book the next winter weekend before peak dates fill."
        ]
      }
    ]
  },
  {
    slug: "rainy-day-davis-wv",
    title: "Rainy Day Ideas Around Davis",
    seoTitle: "Rainy Day Things To Do Near Davis WV | Alpine Lodge Guide",
    description:
      "A practical rainy-day guide for Davis and Thomas visitors staying at Alpine Lodge, with food, music, shops, galleries, scenic drives, and cozy indoor options.",
    image: "/images/alpine-lodge-office.jpg",
    audience: "Visitors who still want a good trip when the weather changes.",
    days: [
      {
        label: "Stay Flexible",
        items: [
          "Use rainy weather for restaurants, coffee, shops, galleries, and live music.",
          "Choose short overlooks instead of committing to a long exposed hike.",
          "Keep dry clothes and shoes in the room so the evening is comfortable."
        ]
      },
      {
        label: "Davis & Thomas Loop",
        items: [
          "Start with a slow meal in Davis.",
          "Drive to Thomas for shops, galleries, or a show calendar check.",
          "Return to Alpine Lodge and reset for better weather the next morning."
        ]
      }
    ]
  },
  {
    slug: "pet-friendly-weekend",
    title: "Pet-Friendly Mountain Weekend",
    seoTitle: "Pet-Friendly Weekend in Davis WV | Alpine Lodge Trip Guide",
    description:
      "Plan a pet-friendly Davis, WV mountain weekend with designated Alpine Lodge pet rooms, outdoor stops, scenic drives, and practical travel tips.",
    image: "/images/alpine-lodge-property.jpeg",
    audience: "Travelers bringing a dog to Davis, Blackwater Falls, Canaan Valley, or Thomas.",
    days: [
      {
        label: "Book Smart",
        items: [
          "Reserve a designated pet-friendly room and confirm current pet policies.",
          "Pack leash, bags, towels, water bowl, and a familiar blanket.",
          "Check pet rules for parks, restaurants, venues, and trails before arrival."
        ]
      },
      {
        label: "Easy Weekend",
        items: [
          "Choose short scenic stops and outdoor meals when available.",
          "Build in rest time between longer walks.",
          "Keep the room simple, clean, and comfortable for everyone."
        ]
      }
    ]
  }
];

export const faqs = [
  {
    question: "How do I book a room at Alpine Lodge?",
    answer:
      "Use the Reserve Now button on this site to book directly through the current Cloudbeds reservation system."
  },
  {
    question: "What is the Alpine Lodge address?",
    answer: "Alpine Lodge is located at 850 Sawmill Lane, Davis, WV 26260."
  },
  {
    question: "Is Alpine Lodge close to Blackwater Falls?",
    answer:
      "Yes. Alpine Lodge is in Davis and is a short drive from Blackwater Falls State Park, making it a practical base for waterfall visits, scenic overlooks, and state park trails."
  },
  {
    question: "How far is Alpine Lodge from the local ski areas?",
    answer:
      "Alpine Lodge is convenient to Canaan Valley, Timberline Mountain, and White Grass Ski Touring Center. Drive times vary with weather and traffic, so check conditions before winter travel."
  },
  {
    question: "Are rooms pet friendly?",
    answer:
      "Designated pet-friendly rooms are available. Pet-friendly availability and current policies should be confirmed when booking."
  },
  {
    question: "Do rooms have refrigerators?",
    answer: "Yes. Rooms include a refrigerator, private bathroom, flat-screen TV, Wi-Fi, and DirecTV."
  },
  {
    question: "Does the hotel have Wi-Fi?",
    answer: "Yes. Alpine Lodge offers free Wi-Fi for guests."
  },
  {
    question: "Is breakfast included?",
    answer:
      "Breakfast details should be confirmed directly with Alpine Lodge before arrival. The site also includes nearby food and coffee ideas for planning your stay."
  },
  {
    question: "Can I get an early check-in?",
    answer:
      "Early check-in may depend on room availability and the day's turnover schedule. Contact Alpine Lodge directly before arrival."
  },
  {
    question: "What are check-in and check-out times?",
    answer:
      "The current site lists check-in after 4pm and check-out before 11am. Confirm current details before arrival."
  },
  {
    question: "Do you allow smoking in the rooms?",
    answer:
      "Smoking policy should be confirmed directly with Alpine Lodge. The website should be updated with the final owner-approved policy before launch."
  },
  {
    question: "Do you offer discounts for group bookings?",
    answer:
      "Groups should contact Alpine Lodge directly to ask about availability, room blocks, and any current group options."
  }
];

export const partnerLinks = [
  {
    name: "Blackwater Falls State Park",
    href: "https://wvstateparks.com/parks/blackwater-falls-state-park/",
    type: "Official state park"
  },
  {
    name: "Canaan Valley Resort",
    href: "https://www.canaanresort.com/",
    type: "Resort activities"
  },
  {
    name: "Timberline Mountain",
    href: "https://www.timberlinemountain.com/",
    type: "Skiing and snowboarding"
  },
  {
    name: "White Grass",
    href: "https://whitegrass.com/",
    type: "Nordic skiing and cafe"
  },
  {
    name: "The Purple Fiddle",
    href: "https://purplefiddle.com/",
    type: "Music venue"
  },
  {
    name: "Tucker County CVB",
    href: "https://gettuckered.com/",
    type: "Visitor information"
  }
];

export function absoluteUrl(path = "") {
  return `${site.url}${path}`;
}

export function lodgingJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Hotel",
    name: site.name,
    url: site.url,
    image: absoluteUrl("/images/alpine-lodge-exterior.jpg"),
    telephone: site.phone,
    email: site.email,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.state,
      postalCode: site.address.postalCode,
      addressCountry: "US"
    },
    amenityFeature: amenities.map((name) => ({
      "@type": "LocationFeatureSpecification",
      name,
      value: true
    })),
    potentialAction: {
      "@type": "ReserveAction",
      target: site.bookingUrl
    }
  };
}
