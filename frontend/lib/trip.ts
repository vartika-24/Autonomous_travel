export async function getTrip() {
  const res = await fetch("http://localhost:4000/trip");

  if (!res.ok) {
    throw new Error("Failed to fetch trip data");
  }

  return res.json();
}