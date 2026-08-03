# SkyFlow AI : Autonomous Travel Recovery System

An AI-powered travel recovery platform that automatically analyzes flight disruptions, ranks alternative itineraries, and recommends the optimal recovery option based on cost, arrival time, hotel impact, and traveler preferences.

The application combines a modern Next.js dashboard with an Express backend and a rule-based recovery engine enhanced with Google Gemini for natural-language reasoning.

---

## Live Demo

Frontend: https://autonomous-travel-g1ss-theta.vercel.app/

Backend: https://autonomous-travel.onrender.com

Repository: https://github.com/vartika-24/Autonomous_travel

---

## Features

- Automatic flight disruption analysis
- AI-assisted recovery recommendations
- Explainable recovery reasoning using Gemini
- Multi-factor recovery scoring engine
- Passenger preference-aware decision making
- Alternative flight comparison
- Recovery approval workflow
- Live activity timeline
- Passenger notifications
- Recovery analytics dashboard
- System health monitoring
- Responsive user interface

---

## Technology Stack

### Frontend

- Next.js
- React
- TypeScript
- Tailwind CSS
- Lucide Icons

### Backend

- Node.js
- Express.js
- TypeScript

### AI

- Google Gemini API

### Deployment

- Vercel
- Render

---

## System Architecture

```
                    Flight Disruption
                            │
                            ▼
                  Express Backend API
                            │
        ┌───────────────────┴───────────────────┐
        ▼                                       ▼
 Recovery Scoring Engine              Gemini Reasoning
        │                                       │
        └───────────────────┬───────────────────┘
                            ▼
                  Recovery Recommendation
                            │
                            ▼
                  Next.js Dashboard
```

---

## Recovery Decision Process

Each recovery option is evaluated using a weighted scoring model.

The current implementation considers:

- Connection reliability
- Arrival time
- Additional travel cost
- Hotel disruption
- Passenger preferences

The highest-scoring option is selected as the recommended recovery, while Gemini generates a human-readable explanation of the decision.

---

## Dashboard Overview

The dashboard includes:

- Flight status overview
- AI recommendation
- Recovery analytics
- Alternative flight comparison
- Passenger profile
- Decision breakdown
- Activity feed
- Timeline
- Notifications
- System status

---

## API Endpoints

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | `/` | Health check |
| GET | `/api` | API information |
| GET | `/trip` | Retrieve trip and recovery data |
| POST | `/approve` | Approve recommended recovery |

---

## Project Structure

```
Autonomous_Travel
│
├── backend
│   ├── src
│   │   ├── data
│   │   ├── services
│   │   └── server.ts
│   └── package.json
│
├── frontend
│   ├── app
│   ├── components
│   ├── lib
│   └── public
│
└── README.md
```

---

## Local Development

### Clone the repository

```bash
git clone https://github.com/vartika-24/Autonomous_travel.git
```

### Backend

```bash
cd backend
npm install
npm run dev
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

## Deployment

Frontend : Vercel
Backend : Render

