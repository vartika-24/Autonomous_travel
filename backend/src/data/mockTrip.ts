export const trip = {
  flight: {
    airline: "United",
    number: "UA914",
    from: "SFO",
    to: "LHR",
    departure: "14:20",
    arrival: "08:05",
    delayMinutes: 200,
  },

  connection: {
    flight: "BA284",
    status: "at-risk",
  },

  traveler: {
    preferNonStop: true,
    maxExtraCost: 0,
  },
}

export const alternatives = [
  {
    airline: "Virgin Atlantic",
    flight: "VS20",
    departure: "15:50",
    arrival: "08:17",
    cost: 0,
    hotelImpact: 0,
  },
  {
    airline: "British Airways",
    flight: "BA286",
    departure: "18:30",
    arrival: "10:05",
    cost: 150,
    hotelImpact: 1,
  },
  {
    airline: "Lufthansa",
    flight: "LH901",
    departure: "16:40",
    arrival: "09:10",
    cost: 40,
    hotelImpact: 0,
  },
]