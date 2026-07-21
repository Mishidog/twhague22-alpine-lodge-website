import { amenities, distances, experiences, faqs, partnerLinks, rateSignal, rooms, site, tripGuides } from "./site.js";

export const catalogUpdated = "2026-07-10";

export const lodgingServices = [
  {
    id: "davis-wv-lodging",
    name: "Davis, WV lodging",
    url: "/rooms",
    summary:
      "Practical Alpine Lodge rooms in Davis, West Virginia for travelers visiting Blackwater Falls, Canaan Valley, Timberline Mountain, White Grass, Thomas, Dolly Sods, and Tucker County.",
    whoItHelps: [
      "Waterfall and state park visitors",
      "Ski and snowboard travelers",
      "Hikers and outdoor travelers",
      "Families and couples planning a mountain weekend",
      "Value-minded travelers who want a central Davis basecamp"
    ],
    includes: [
      "Private bathroom",
      "Refrigerator",
      "Flat-screen TV",
      "Free Wi-Fi",
      "DirecTV",
      "Direct Cloudbeds reservations"
    ],
    bookingFactors: [
      "Travel dates",
      "Room availability",
      "Season and local events",
      "Pet-friendly room availability",
      "Group size",
      "Current Cloudbeds rate and room options"
    ],
    commonQuestions: [
      "How do I book a room at Alpine Lodge?",
      "Are rooms available from $99?",
      "Is Alpine Lodge close to Blackwater Falls?",
      "Is the hotel pet friendly?"
    ]
  },
  {
    id: "crew-lodging-davis-wv",
    name: "Crew and longer work-stay lodging",
    url: "/crew-lodging-davis-wv",
    summary:
      "Practical Davis, West Virginia rooms for contractors, crews, project teams, and traveling workers who need lodging between workdays in the Davis and Tucker County area.",
    whoItHelps: [
      "Contractors",
      "Construction and utility crews",
      "Traveling workers",
      "Project managers booking several rooms",
      "Employers arranging longer work stays"
    ],
    includes: [
      "Private bathroom",
      "In-room refrigerator",
      "Free Wi-Fi",
      "Laundry machines",
      "Ice machine",
      "Irons and ironing boards",
      "Group booking options by phone"
    ],
    bookingFactors: [
      "Work dates",
      "Number of rooms",
      "Expected length of stay",
      "Current room availability",
      "Current Cloudbeds rate or group booking options"
    ],
    commonQuestions: [
      "Does Alpine Lodge accommodate contractors and work crews?",
      "What amenities are useful for a longer work stay?",
      "Are group booking options available?",
      "How do I check current rates and availability?"
    ]
  },
  {
    id: "pet-friendly-lodging",
    name: "Pet-friendly lodging",
    url: "/experiences/pet-friendly-lodging-davis-wv",
    summary:
      "Designated pet-friendly rooms are available for Davis, WV travelers bringing a dog to Blackwater Falls, Canaan Valley, Thomas, or nearby trails.",
    whoItHelps: ["Dog owners", "Road-trippers", "Outdoor travelers", "Weekend visitors"],
    includes: [
      "Designated pet-friendly room options when available",
      "Direct booking confirmation",
      "Easy Davis base for pet-friendly trip planning"
    ],
    bookingFactors: [
      "Limited pet-friendly room availability",
      "Current pet policy",
      "Travel dates",
      "Room type",
      "Nearby activity pet rules"
    ],
    commonQuestions: [
      "Is Alpine Lodge pet friendly?",
      "Do I need to book a specific pet-friendly room?",
      "Which nearby activities allow pets?"
    ]
  },
  {
    id: "activity-basecamp",
    name: "Outdoor and local experience basecamp",
    url: "/experiences",
    summary:
      "Alpine Lodge positions Davis as the center point for Blackwater Falls, Canaan Valley, Timberline Mountain, White Grass, Thomas, hiking, skiing, food, music, and scenic drives.",
    whoItHelps: ["Trip planners", "Outdoor visitors", "Ski groups", "Families", "Couples", "Friends"],
    includes: [
      "Experience pages for nearby attractions",
      "Trip guide pages",
      "Official local planning links",
      "AI trip planner grounded in site facts"
    ],
    bookingFactors: [
      "Season",
      "Weather",
      "Road conditions",
      "Activity operator hours",
      "Tickets, rentals, and availability from official operators"
    ],
    commonQuestions: [
      "How close is Alpine Lodge to Blackwater Falls?",
      "How far is Alpine Lodge from ski areas?",
      "What can I do around Davis, WV?",
      "Can I plan a budget weekend from Alpine Lodge?"
    ]
  }
];

export const rateKnowledge = [
  {
    id: "rooms-from-99",
    name: "Rooms from $99 on select dates",
    url: site.bookingUrl,
    answer:
      "Alpine Lodge advertises rooms from $99 on select dates. Current rates, room types, and availability should always be confirmed through the direct Cloudbeds booking link before the guest commits.",
    priceModel: "Live lodging rates vary by date, availability, season, and room type.",
    drivers: [
      "Travel dates",
      "Season",
      "Room availability",
      "Room type",
      "Length of stay",
      "Local event or ski weekend demand",
      "Pet-friendly room availability"
    ]
  },
  {
    id: "direct-booking",
    name: "Direct booking",
    url: site.bookingUrl,
    answer:
      "The fastest way to check Alpine Lodge rates and availability is the direct Cloudbeds reservation page. Guests should use the booking page for current rates instead of relying on older screenshots, old search snippets, or third-party summaries.",
    priceModel: "Direct Cloudbeds reservation flow.",
    drivers: ["Current room inventory", "Selected dates", "Room selection", "Booking policies shown during checkout"]
  }
];

export const policyKnowledge = [
  {
    id: "check-in-check-out",
    name: "Check-in and check-out",
    url: "/faq",
    summary: "Check-in is at 4:00pm and check-out is at 11am.",
    publicNotes: [
      "Early check-in may be accommodated when possible.",
      "Early check-in depends on the day of week and current occupancy.",
      "Guests should contact the lodge for arrival questions."
    ]
  },
  {
    id: "office-hours",
    name: "Office hours",
    url: "/faq",
    summary: "The Alpine Lodge office is open from 3pm to 8pm.",
    publicNotes: [
      "Guests with arrival questions should contact the lodge.",
      "The office can help with local recommendations and maps."
    ]
  },
  {
    id: "pet-friendly-rooms",
    name: "Pet-friendly rooms",
    url: "/experiences/pet-friendly-lodging-davis-wv",
    summary: "Designated pet-friendly rooms are available, but guests should book the right room type or call ahead.",
    publicNotes: [
      "Pet-friendly rooms can be limited.",
      "Guests should confirm current pet policy when booking.",
      "Nearby parks, restaurants, and venues may have separate pet rules."
    ]
  },
  {
    id: "cancellation",
    name: "Cancellation policy",
    url: "/faq",
    summary: "The cancellation policy is 24 hours, except for holiday weekends. Guests should confirm the current policy when booking.",
    publicNotes: [
      "Holiday weekend rules may differ.",
      "The booking flow or lodge team should be treated as the current source for policy details."
    ]
  },
  {
    id: "breakfast",
    name: "Breakfast",
    url: "/faq",
    summary: "Breakfast is not included at this time.",
    publicNotes: ["Guests can ask the front desk for nearby restaurant recommendations."]
  },
  {
    id: "smoking",
    name: "Smoking policy",
    url: "/faq",
    summary: "Smoking is not allowed in the rooms.",
    publicNotes: ["Guests should contact the lodge for any current property-specific questions."]
  }
];

export const knowledgeCatalog = {
  version: "1.0.0",
  lastUpdated: catalogUpdated,
  organization: {
    name: site.name,
    url: site.url,
    bookingUrl: site.bookingUrl,
    phone: site.phone,
    email: site.email,
    address: `${site.address.street}, ${site.address.city}, ${site.address.state} ${site.address.postalCode}`,
    positioning:
      "A practical, fair-priced Davis, WV basecamp for Blackwater Falls, Canaan Valley, Timberline Mountain, White Grass, Thomas, Dolly Sods, hiking, skiing, food, music, and low-cost mountain weekends.",
    priceSignal: rateSignal.headline,
    proofPoints: [
      "Located at 850 Sawmill Lane in Davis, WV",
      "Rooms from $99 on select dates",
      "Direct Cloudbeds reservations",
      "About 5 minutes from Blackwater Falls",
      "About 15 minutes from Canaan Valley",
      "About 20 minutes from Timberline Mountain and White Grass",
      "Designated pet-friendly rooms available",
      "Rooms include private bathroom, refrigerator, flat-screen TV, Wi-Fi, and DirecTV"
    ]
  },
  lodgingServices,
  rateKnowledge,
  amenities,
  rooms,
  distances,
  experiences: experiences.map(({ slug, title, description, distance, budget, bestFor, season, officialLink }) => ({
    slug,
    title,
    description,
    distance,
    budget,
    bestFor,
    season,
    officialLink,
    url: `/experiences/${slug}`
  })),
  tripGuides: tripGuides.map(({ slug, title, description, audience }) => ({
    slug,
    title,
    description,
    audience,
    url: `/trip-guides/${slug}`
  })),
  faqs,
  policies: policyKnowledge,
  partnerLinks,
  aiUsageNotes: [
    "Do not invent rates, availability, guest reviews, pet fees, breakfast details, weather, trail conditions, road access, activity hours, or ticket prices.",
    "Use the direct Cloudbeds booking link for current rates and availability.",
    "Use official operator links for current hours, tickets, rentals, trail status, weather-sensitive access, and activity-specific rules.",
    "Position Alpine Lodge as a practical Davis basecamp, not a luxury resort."
  ]
};

export function lodgingCatalogJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Dataset",
        name: "Alpine Lodge Knowledge Catalog",
        url: `${site.url}/knowledge-catalog`,
        dateModified: catalogUpdated,
        about: lodgingServices.map((service) => service.name)
      },
      {
        "@type": "LodgingBusiness",
        "@id": `${site.url}/#hotel`,
        name: site.name,
        url: site.url,
        telephone: site.phone,
        email: site.email,
        address: {
          "@type": "PostalAddress",
          streetAddress: site.address.street,
          addressLocality: site.address.city,
          addressRegion: site.address.state,
          postalCode: site.address.postalCode,
          addressCountry: "US"
        }
      }
    ]
  };
}
