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
  "850 Sawmill Lane in Davis, WV",
  "Rooms from $99 on select dates",
  "Pet-friendly rooms available",
  "Wi-Fi, refrigerator, private bath",
  "About 5 minutes from Blackwater Falls"
];

export const rateSignal = {
  eyebrow: "Rooms from $99",
  headline: "Rooms from $99 on select dates, with live rates before you reserve.",
  body:
    "Rates can shift by season and availability. The direct booking page shows the current room options, dates, and price before you commit.",
  cta: "Check Live Rates",
  headerNote: "Book direct"
};

export const guestQuotes = [];

export const rooms = [
  {
    title: "Rooms For Mountain Trips",
    image: "/images/alpine-lodge-room.jpg",
    alt: "A guest room at Alpine Lodge in Davis, West Virginia",
    caption: "Where you crash after Dolly Sods, ski laps, waterfall walks, and late dinner in Davis.",
    description:
      "A place to shower, recharge, keep drinks cold, and sleep before the next Davis-area plan. Rooms include private bathroom, refrigerator, flat-screen TV, Wi-Fi, and DirecTV."
  },
  {
    title: "Designated Pet-Friendly Rooms",
    image: "/images/alpine-lodge-exterior.jpg",
    alt: "Alpine Lodge exterior in Davis, West Virginia",
    caption: "A Davis landing spot when the dog is part of the road trip.",
    description:
      "Designated pet-friendly rooms help travelers bring the dog to Davis, Blackwater Falls, Canaan Valley, and Thomas. Confirm availability and current policy when booking."
  },
  {
    title: "Close To The Whole Weekend",
    image: "/images/alpine-lodge-property.jpeg",
    alt: "Alpine Lodge property near Davis attractions",
    caption: "Park here, sleep here, then point the day toward waterfalls, snow, trails, food, or music.",
    description:
      "Stay in Davis and keep the weekend flexible: Blackwater Falls, Canaan Valley, Timberline Mountain, White Grass, Thomas, and downtown Davis are all within the trip plan."
  }
];

export const amenities = [
  "Private bathroom",
  "Refrigerator",
  "Flat-screen TV",
  "Free Wi-Fi",
  "DirecTV",
  "Irons and ironing boards",
  "Ice machine",
  "Laundry machines",
  "Coffee makers available at the front desk",
  "Designated pet-friendly rooms",
  "Easy access to Davis and nearby attractions",
  "Direct Cloudbeds reservations"
];

export const amenityHighlights = [
  {
    title: "Free Wi-Fi",
    detail: "Stay connected after the day outside.",
    icon: "wifi"
  },
  {
    title: "Private bath",
    detail: "Every room has its own bathroom.",
    icon: "bath"
  },
  {
    title: "In-room refrigerator",
    detail: "Keep drinks, leftovers, and trail snacks cold.",
    icon: "refrigerator"
  },
  {
    title: "Flat-screen TV",
    detail: "Easy reset time after waterfalls, trails, or ski laps.",
    icon: "tv"
  },
  {
    title: "Pet-friendly rooms",
    detail: "Designated rooms are available; confirm current policy when booking.",
    icon: "paw"
  },
  {
    title: "Direct reservations",
    detail: "Current rates and room options through Alpine Lodge booking.",
    icon: "booking"
  }
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
      "Stay about 5 minutes from Blackwater Falls State Park at Alpine Lodge in Davis, WV, with rooms from $99 on select dates.",
    image: "/images/blackwater-falls.jpg",
    alt: "Blackwater Falls near Davis, West Virginia",
    distance: "about 5 minutes from Alpine Lodge",
    budget: "Free to low-cost park day",
    bestFor: ["waterfalls", "families", "photos", "short hikes", "scenic drives"],
    season: "All year, with strong fall and winter scenery",
    officialLink: "https://wvstateparks.com/parks/blackwater-falls-state-park/",
    body: [
      "Blackwater Falls is the fast win from Alpine Lodge: check in on Sawmill Lane, drop the bags, and be at the park in about 5 minutes for the falls boardwalk, overlooks, trails, and classic West Virginia views.",
      "Use Alpine Lodge for the room, then put the rest of the trip spend toward food, fuel, gear, and one more stop before heading home."
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
      "Use Alpine Lodge in Davis as a fair-priced base about 15 minutes from Canaan Valley hiking, skiing, tubing, wildlife viewing, and scenic drives.",
    image: "/images/fly-fishing-blackwater-river.jpg",
    alt: "Fly fishing and mountain scenery near Davis and Canaan Valley",
    distance: "about 15 minutes from Alpine Lodge",
    budget: "Mix of free, low-cost, and paid activities",
    bestFor: ["skiing", "families", "wildlife", "hiking", "scenic drives"],
    season: "Winter, summer, and fall are especially popular",
    officialLink: "https://www.canaanresort.com/",
    body: [
      "Canaan Valley gives visitors a wide menu of mountain days: winter recreation, summer hiking, wildlife viewing, tubing, and scenic drives. Alpine Lodge keeps you close without making resort lodging the main expense.",
      "Stay in Davis and use more of the trip budget for lift tickets, meals, rentals, gas, and one more night in the mountains."
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
      "Stay at Alpine Lodge in Davis, about 20 minutes from Timberline Mountain skiing, snowboarding, lift-served mountain days, and winter weekends.",
    image: "/images/alpine-lodge-local-view.jpg",
    alt: "Mountain view near Alpine Lodge in Davis, West Virginia",
    distance: "about 20 minutes from Alpine Lodge",
    budget: "Save on lodging, spend on the mountain",
    bestFor: ["skiing", "snowboarding", "groups", "winter weekends"],
    season: "Winter, with scenic mountain visits in warmer months",
    officialLink: "https://www.timberlinemountain.com/",
    body: [
      "Timberline Mountain is one of the big winter reasons people come to Davis and Canaan Valley. Alpine Lodge gives skiers and snowboarders a Davis room about 20 minutes from the mountain.",
      "It works especially well for groups and value-minded visitors who plan to ski all day, eat nearby, and come back to a straightforward room at night."
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
      "Plan a cross-country ski or snowshoe weekend with Alpine Lodge in Davis, about 20 minutes from White Grass Ski Touring Center.",
    image: "/images/alpine-lodge-local-view.jpg",
    alt: "Mountain scenery near White Grass and Canaan Valley, West Virginia",
    distance: "about 20 minutes from Alpine Lodge",
    budget: "Fair-priced winter adventure",
    bestFor: ["cross-country skiing", "snowshoeing", "couples", "quiet weekends"],
    season: "Winter snow conditions",
    officialLink: "https://whitegrass.com/",
    body: [
      "White Grass is part of what makes the Canaan Valley area feel different from ordinary ski destinations: Nordic trails, snowshoe routes, lessons, rentals, and cafe culture.",
      "Alpine Lodge keeps the trip grounded in Davis, with White Grass about 20 minutes away and food, music, and a warm room waiting after a day in the snow."
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
      "Make Alpine Lodge your Davis base for a Dolly Sods weekend with hiking, scenic drives, big views, and a room in town before and after the trail day.",
    image: "/images/fly-fishing-blackwater-river.jpg",
    alt: "Outdoor mountain scenery near Dolly Sods and Davis, West Virginia",
    distance: "drive times vary by trailhead and road conditions",
    budget: "Free outdoor adventure with planning required",
    bestFor: ["hiking", "photography", "scenic drives", "experienced outdoors visitors"],
    season: "Late spring through fall, depending on road and weather conditions",
    officialLink:
      "https://www.fs.usda.gov/recarea/mnf/recarea/?recid=12366",
    body: [
      "Dolly Sods is one of the region's signature wild landscapes, but it rewards planning. Weather, road access, maps, and trail choices matter more here than they do for a quick overlook stop.",
      "Alpine Lodge gives hikers a Davis room before and after a bigger outdoor day, with meals, supplies, and a reset close by in town."
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
      "Stay in Davis at Alpine Lodge, about 10 minutes from Thomas, WV music, galleries, restaurants, shops, and The Purple Fiddle.",
    image: "/images/downtown-davis-wv.jpeg",
    alt: "Historic downtown Davis near Thomas, West Virginia",
    distance: "about 10 minutes from Alpine Lodge",
    budget: "Low-cost exploring, food, drinks, and ticketed shows",
    bestFor: ["music", "food", "couples", "friends", "rainy days"],
    season: "All year",
    officialLink: "https://purplefiddle.com/",
    body: [
      "A Davis weekend is not only trails and waterfalls. Thomas adds music, food, galleries, shops, and a small-town evening scene about 10 minutes from Alpine Lodge.",
      "Book the Davis room, then spend the evening on dinner, drinks, music, and local shops."
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
      "Find Davis, WV lodging near Blackwater Falls trails, Canaan Valley paths, Dolly Sods, and Monongahela National Forest outings.",
    image: "/images/fly-fishing-blackwater-river.jpg",
    alt: "Outdoor recreation near Davis, West Virginia",
    distance: "trail options from minutes away to longer scenic drives",
    budget: "Mostly free outdoor days",
    bestFor: ["hiking", "families", "couples", "solo travelers", "fall color"],
    season: "Spring through fall, with winter options depending on conditions",
    officialLink: "https://wvstateparks.com/parks/blackwater-falls-state-park/",
    body: [
      "Davis makes sense for hikers because trail options sit in several directions. Choose the day based on weather, energy, and the least experienced person in the group.",
      "Alpine Lodge is useful for travelers who want options: short waterfall walks, state park trails, valley views, and bigger Monongahela National Forest outings."
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
      "Alpine Lodge offers designated pet-friendly rooms in Davis for travelers visiting Blackwater Falls, Canaan Valley, Thomas, and nearby trails.",
    image: "/images/alpine-lodge-exterior.jpg",
    alt: "Exterior of Alpine Lodge, a Davis WV lodging option with pet-friendly rooms",
    distance: "central Davis location",
    budget: "Practical lodging for pet travelers",
    bestFor: ["dogs", "road trips", "hikers", "weekend getaways"],
    season: "All year",
    officialLink: site.bookingUrl,
    body: [
      "Traveling with a pet can make lodging harder than the trail plan. Alpine Lodge has designated pet-friendly rooms for trips built around Davis, Blackwater Falls, Canaan Valley, and Thomas.",
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
      "Plan a Davis, WV weekend around Alpine Lodge, Blackwater Falls, local food, scenic drives, Thomas, and free or low-cost outdoor time.",
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
      "Use Alpine Lodge for a Davis, WV ski weekend near Timberline Mountain, Canaan Valley, and White Grass without making lodging the biggest line item.",
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
      "A rainy-day guide for Davis and Thomas visitors staying at Alpine Lodge, with food, music, shops, galleries, scenic drives, and indoor resets.",
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
      "Plan a pet-friendly Davis, WV mountain weekend with designated Alpine Lodge pet rooms, outdoor stops, scenic drives, and travel tips.",
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
          "Give the dog downtime in the room between drives, walks, and meals."
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
    question: "What are the Sawmill Restaurant hours of operation?",
    answer: "The Sawmill Restaurant is currently closed."
  },
  {
    question: "What are the Alpine Lodge office hours?",
    answer: "The Alpine Lodge office is open from 3pm to 8pm."
  },
  {
    question: "What is the Alpine Lodge address?",
    answer: "Alpine Lodge is located at 850 Sawmill Lane, Davis, WV 26260."
  },
  {
    question: "Is Alpine Lodge close to Blackwater Falls?",
    answer:
      "Yes. Alpine Lodge is in Davis, about 5 minutes from Blackwater Falls State Park."
  },
  {
    question: "How far is Alpine Lodge from the local ski areas?",
    answer:
      "The local ski areas are about 10 miles from Alpine Lodge. Drive times can vary with weather, traffic, and winter road conditions."
  },
  {
    question: "Is the hotel pet friendly?",
    answer:
      "Yes. Alpine Lodge has designated pet-friendly rooms. Please book the right room type or call ahead to confirm availability."
  },
  {
    question: "Do the rooms have refrigerators?",
    answer: "Yes. Rooms include a refrigerator, private bathroom, flat-screen TV, Wi-Fi, and DirecTV."
  },
  {
    question: "Do you have irons and ironing boards in the rooms?",
    answer: "Yes. Irons and ironing boards are available."
  },
  {
    question: "Is there an ice machine in the hotel?",
    answer: "Yes. Alpine Lodge has an ice machine."
  },
  {
    question: "Do you have laundry machines?",
    answer: "Yes. Laundry machines are available."
  },
  {
    question: "Do the rooms have coffee makers?",
    answer: "Coffee makers are available at the front desk."
  },
  {
    question: "Does the hotel have Wi-Fi?",
    answer: "Yes. Alpine Lodge offers free Wi-Fi for guests."
  },
  {
    question: "What type of activities are available on site and in the area?",
    answer:
      "Area activities include skiing, hiking, biking, golf, fishing, rafting, canoeing, and hunting."
  },
  {
    question: "Do you offer rental bikes?",
    answer:
      "No. Blackwater Bikes is directly across the street and offers a broad variety of bikes for rent."
  },
  {
    question: "Do you offer rental ski equipment?",
    answer:
      "No. Driftland Ski Shop is about 1/8 mile from the hotel, and both Canaan Valley and Timberline Mountain have rentals available."
  },
  {
    question: "Is breakfast included?",
    answer: "Breakfast is not included at this time."
  },
  {
    question: "Do you have tour guides that you recommend?",
    answer: "The front desk has a variety of local guides they can recommend."
  },
  {
    question: "What restaurants in the area do you recommend?",
    answer:
      "The front desk keeps current local restaurant recommendations and can help point you toward nearby options."
  },
  {
    question: "Can I get an early check-in?",
    answer:
      "Alpine Lodge tries to accommodate early check-in requests when possible. Availability depends on the day of the week and current occupancy."
  },
  {
    question: "What are check-in and check-out times?",
    answer: "Check-in is at 3pm and check-out is at 11am."
  },
  {
    question: "Do you provide maps for hiking in the area?",
    answer:
      "Maps are available at the office. Alpine Lodge also recommends using hiking apps and checking current conditions before you go."
  },
  {
    question: "Do you allow smoking in the rooms?",
    answer: "No. Smoking is not allowed in the rooms."
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "The cancellation policy is 24 hours, except for holiday weekends. Please confirm the current policy when booking."
  },
  {
    question: "Do you offer discounts for group bookings?",
    answer: "Yes. Please call Alpine Lodge to discuss group booking options."
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
  const addressText = `${site.address.street}, ${site.address.city}, ${site.address.state} ${site.address.postalCode}`;

  return {
    "@context": "https://schema.org",
    "@type": ["Hotel", "LodgingBusiness", "LocalBusiness"],
    "@id": `${site.url}/#hotel`,
    name: site.name,
    description:
      "Rooms from $99 on select dates in Davis, West Virginia near Blackwater Falls, Canaan Valley, Timberline Mountain, White Grass, Thomas, trails, skiing, food, and music.",
    url: site.url,
    image: absoluteUrl("/images/alpine-lodge-exterior.jpg"),
    telephone: site.phone,
    email: site.email,
    priceRange: "Rooms from $99 on select dates",
    checkinTime: "15:00",
    checkoutTime: "11:00",
    sameAs: site.socials.map((social) => social.href),
    hasMap: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(addressText)}`,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.state,
      postalCode: site.address.postalCode,
      addressCountry: "US"
    },
    makesOffer: {
      "@type": "Offer",
      name: "Rooms from $99 on select dates",
      price: "99",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url: site.bookingUrl
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
