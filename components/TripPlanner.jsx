"use client";

import { useMemo, useState } from "react";
import { Send, Sparkles } from "lucide-react";

const starters = [
  "Plan a two-night Davis weekend with waterfalls and good food.",
  "We are coming for skiing and want to keep lodging costs down.",
  "What can we do with a dog near Davis, WV?",
  "Give me a rainy-day plan around Davis and Thomas."
];

export function TripPlanner() {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Tell me your dates, group size, interests, and budget. I will suggest a Davis-area plan with Alpine Lodge as the room for the trip."
    }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const canSend = useMemo(() => input.trim().length > 2 && !loading, [input, loading]);

  async function sendMessage(text = input) {
    const prompt = text.trim();
    if (!prompt || loading) return;
    const next = [...messages, { role: "user", content: prompt }];
    setMessages(next);
    setInput("");
    setLoading(true);
    try {
      const response = await fetch("/api/trip-planner", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next })
      });
      const data = await response.json();
      setMessages([...next, { role: "assistant", content: data.reply }]);
    } catch {
      setMessages([
        ...next,
        {
          role: "assistant",
          content:
            "I could not reach the trip planner right now. Start with Blackwater Falls, downtown Davis, Thomas, and Canaan Valley, then reserve Alpine Lodge as the Davis room for the trip."
        }
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="planner-shell">
      <div className="planner-sidebar">
        <p className="eyebrow">Try a prompt</p>
        <h2>Build the day around your priorities.</h2>
        <div className="starter-stack">
          {starters.map((starter) => (
            <button key={starter} type="button" onClick={() => sendMessage(starter)}>
              <Sparkles aria-hidden="true" size={16} />
              {starter}
            </button>
          ))}
        </div>
      </div>
      <div className="planner-chat" aria-live="polite">
        <div className="message-list">
          {messages.map((message, index) => (
            <div key={`${message.role}-${index}`} className={`message message-${message.role}`}>
              {message.content}
            </div>
          ))}
          {loading && <div className="message message-assistant">Planning your trip...</div>}
        </div>
        <form
          className="planner-form"
          onSubmit={(event) => {
            event.preventDefault();
            if (canSend) sendMessage();
          }}
        >
          <label htmlFor="planner-input" className="sr-only">
            Ask the Alpine Lodge trip planner
          </label>
          <input
            id="planner-input"
            value={input}
            onChange={(event) => setInput(event.target.value)}
            placeholder="Ask for a weekend plan, ski trip, dog-friendly route, or rainy-day ideas"
          />
          <button type="submit" disabled={!canSend} aria-label="Send message">
            <Send aria-hidden="true" size={18} />
          </button>
        </form>
      </div>
    </div>
  );
}
