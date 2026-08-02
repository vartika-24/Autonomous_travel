export async function generateReasoning(
  trip: any,
  recommendation: any,
  alternatives: any[]
) {
  const prompt = `
You are an AI travel recovery assistant.

Original flight:
${JSON.stringify(trip.flight)}

Connection:
${JSON.stringify(trip.connection)}

Chosen recovery:
${JSON.stringify(recommendation)}

Alternatives:
${JSON.stringify(alternatives)}

Explain in exactly six short bullet points.

Mention:
- why disruption happened
- why connection is missed
- why chosen flight is best
- why other flights lost
- cost impact
- hotel impact

Return ONLY bullet points.
`;

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: prompt,
                },
              ],
            },
          ],
        }),
      }
    );

    if (!response.ok) {
      throw new Error(await response.text());
    }

    const data: any = await response.json();

    return (
  data.candidates?.[0]?.content?.parts?.[0]?.text ??
  fallbackReasoning(recommendation).join("\n")
);
  } catch (err) {
    console.log("Gemini unavailable. Using fallback reasoning.");

    return fallbackReasoning(recommendation).join("\n");
  }
}

function fallbackReasoning(recommendation: any) {
  return [
    "Original flight experienced a significant delay.",
    "The connection became unsafe because of the delay.",
    `AI selected ${recommendation.airline} ${recommendation.flight} as the highest scoring recovery option.`,
    "Alternative flights either arrived later or had additional costs.",
    recommendation.cost === 0
      ? "No additional rebooking cost."
      : `Additional cost: $${recommendation.cost}.`,
    recommendation.hotelImpact === 0
      ? "No hotel disruption expected."
      : "Hotel schedule requires adjustment.",
  ];
}