import "dotenv/config";
import express from "express";
import cors from "cors";

import { trip } from "./data/mockTrip";
import { chooseBestRecovery } from "./services/recovery";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/api", (_, res) => {
  res.json({
    description: "SkyFlow AI Travel Recovery API",
    endpoints: [
      "GET /",
      "GET /api",
      "GET /trip",
      "POST /approve",
    ],
  });
});

app.get("/", (_, res) => {
  res.json({
    service: "SkyFlow AI Backend",
    status: "healthy",
    version: "1.0.0",
  });
});

app.get("/trip", async (_, res) => {
  try {
    const result = await chooseBestRecovery();

    res.json({
      trip,
      ...result,
      timeline: [
        { time: "14:25", title: "Delay detected" },
        { time: "14:26", title: "Connection marked at risk" },
        { time: "14:27", title: "AI searched alternatives" },
        { time: "14:28", title: "Selected VS20" },
      ],

      activities: [
  { time: "14:25", title: "Delay detected" },
  { time: "14:26", title: "Connection marked at risk" },
  { time: "14:27", title: "AI searched partner airlines" },
  { time: "14:28", title: "Recovery selected" },
  { time: "14:29", title: "Passenger approved" },
  { time: "14:30", title: "Booking confirmed" },
],

      notifications: [
        "Passenger notified",
        "Hotel informed of new arrival",
        "Airport transfer updated",
      ],
      summary: {
        originalFlight: "UA914",
        newFlight: "VS20",
        delay: "200 min",
        additionalCost: 0,
      },
    });
 } catch (err: any) {
  console.error("FULL ERROR:", err);

  res.status(500).json({
    error: err.message || "Unknown error",
  });
}
});

app.post("/approve", async (_, res) => {
  try {
    res.json({
        activities: [
  { time: '14:25', title: 'Delay detected' },
  { time: '14:26', title: 'Connection marked at risk' },
  { time: '14:27', title: 'Searching partner airlines' },
  { time: '14:28', title: 'Virgin Atlantic VS20 selected' },
  { time: '14:29', title: 'Passenger notified' },
  { time: '14:30', title: 'Airport transfer updated' },
  { time: '14:31', title: 'Recovery confirmed' },
],
      success: true,
      message: "Recovery approved successfully.",
      status: "REBOOKED",
      booking: {
        airline: "Virgin Atlantic",
        flight: "VS20",
        confirmation: "SKYFLOW12345",
      },
    });
  } catch (err) {
    console.error(err);

    res.status(500).json({
      error: "Failed to approve recovery.",
    });
  }
});

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});