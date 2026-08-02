export async function getTrip() {
  const res = await fetch(
    "https://autonomous-travel.onrender.com/trip"
  );

  if (!res.ok) {
    throw new Error("Failed to fetch trip");
  }

  return res.json();
}