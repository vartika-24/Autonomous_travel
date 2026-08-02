import { alternatives, trip } from "../data/mockTrip";
import { generateReasoning } from "./gemini";

function score(option: any) {
  let score = 1000;

  // Cost penalty
  score -= option.cost * 2;

  // Hotel disruption is expensive
  score -= option.hotelImpact * 250;

  // Prefer earlier arrivals
  const arrivalHour = Number(option.arrival.split(":")[0]);
  score -= arrivalHour;

  // Reward zero-cost recovery
  if (option.cost === 0) score += 100;

  // Reward preserving hotel booking
  if (option.hotelImpact === 0) score += 150;

  return score;
}

export async function chooseBestRecovery() {
  const ranked = [...alternatives]
    .map(option => ({
      ...option,
      score: score(option),
    }))
    .sort((a, b) => b.score - a.score);

  const recommendation = ranked[0];

  const reasoningText = await generateReasoning(
    trip,
    recommendation,
    ranked
  );

  const reasoning = reasoningText
  .split("\n")
  .map((line: string) => line.replace(/^[-•*]\s*/, "").trim())
  .filter(Boolean);

  return {
    recommendation,
    alternatives: ranked,
    reasoning,
  };
}