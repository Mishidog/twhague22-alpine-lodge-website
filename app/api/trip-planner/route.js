import { experiences, site, tripGuides } from "@/data/site";

const fallbackReply =
  "AI planning is ready to connect once the client adds an OpenAI API key. For now: use Alpine Lodge as your affordable Davis basecamp, start with Blackwater Falls, add Canaan Valley or Timberline based on season, spend an evening in Davis or Thomas, and reserve directly through the Alpine Lodge booking link.";

export async function POST(request) {
  const { messages = [] } = await request.json();
  const key = process.env.OPENAI_API_KEY;

  if (!key) {
    return Response.json({ reply: fallbackReply });
  }

  const source = {
    bookingUrl: site.bookingUrl,
    lodge: {
      name: site.name,
      address: site.address,
      amenities: [
        "private bathroom",
        "refrigerator",
        "flat-screen TV",
        "Wi-Fi",
        "DirecTV",
        "designated pet-friendly rooms"
      ]
    },
    experiences: experiences.map(({ title, distance, budget, season, bestFor, officialLink }) => ({
      title,
      distance,
      budget,
      season,
      bestFor,
      officialLink
    })),
    guides: tripGuides.map(({ title, description }) => ({ title, description }))
  };

  const response = await fetch("https://api.openai.com/v1/responses", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${key}`
    },
    body: JSON.stringify({
      model: "gpt-5.4-mini",
      input: [
        {
          role: "system",
          content:
            "You are Alpine Lodge's practical Davis, WV trip planner. Recommend budget-friendly itineraries using only the provided source facts. Do not invent hours, prices, trail conditions, weather, pet policies, or availability. Link users to official operators for changing details. Always include Alpine Lodge as the home base and end with the direct booking URL."
        },
        {
          role: "user",
          content: `Source facts: ${JSON.stringify(source)}`
        },
        ...messages.slice(-8).map((message) => ({
          role: message.role === "assistant" ? "assistant" : "user",
          content: message.content
        }))
      ]
    })
  });

  if (!response.ok) {
    return Response.json({ reply: fallbackReply }, { status: 200 });
  }

  const data = await response.json();
  const reply =
    data.output_text ||
    data.output?.flatMap((item) => item.content || [])?.map((part) => part.text)?.join("\n") ||
    fallbackReply;

  return Response.json({ reply });
}
