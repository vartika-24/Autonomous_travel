'use client'
import { ActivityFeed } from '@/components/dashboard/activity-feed'
import { useEffect, useState } from 'react'
import { SystemStatus } from '@/components/dashboard/system-status'
import { getTrip } from '@/lib/trip'
import { RiskScore } from '@/components/dashboard/risk-score'
import { Sidebar } from '@/components/dashboard/sidebar'
import { Topbar } from '@/components/dashboard/topbar'
import { LiveTrip } from '@/components/dashboard/live-trip'
import { AiReasoning } from '@/components/dashboard/ai-reasoning'
import { Timeline } from '@/components/dashboard/timeline'
import { Recommendation } from '@/components/dashboard/recommendation'
import { Notifications } from '@/components/dashboard/notifications'
import { TravelSummary } from '@/components/dashboard/travel-summary'
import { RecoveryStatus } from '@/components/dashboard/recovery-status'
import { PassengerPreferences } from '@/components/dashboard/passenger-preferences'
import { DecisionMetrics } from '@/components/dashboard/decision-metrics'
import { DecisionBreakdown } from '@/components/dashboard/decision-breakdown'
import { Footer } from '@/components/dashboard/footer'
import { RecoveryAnalytics } from '@/components/dashboard/recovery-analytics'
import { AiInsights } from '@/components/dashboard/ai-insights'
import { PassengerProfile } from '@/components/dashboard/passenger-profile'

export default function DashboardPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  type DashboardData = {
  trip: any
  recommendation: any
  alternatives: any[]
  reasoning: string[]
  timeline: {
    time: string
    title: string
  }[]
  activities: {
    time: string
    title: string
  }[]
  notifications: string[]
  summary: {
    originalFlight: string
    newFlight: string
    delay: string
    additionalCost: number
  }
  decisionBreakdown: {
    connectionSafety: number
    arrivalTime: number
    cost: number
    hotelImpact: number
    travelerPreference: number
  }
}

  const [data, setData] = useState<DashboardData | null>(null)
  const [approved, setApproved] = useState(false)

  useEffect(() => {
    getTrip().then(setData)
  }, [])

 if (!data) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="rounded-2xl border border-border bg-card p-10 text-center shadow-sm">
        <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-primary border-t-transparent" />

        <h2 className="mt-6 text-xl font-semibold">
          AI Recovery Engine
        </h2>

        <p className="mt-2 text-sm text-muted-foreground">
          Analyzing disruption and generating the best recovery...
        </p>
      </div>
    </div>
  )
}

  return (
  <div className="min-h-screen bg-background">
    <Sidebar
      open={sidebarOpen}
      onClose={() => setSidebarOpen(false)}
    />

    <div className="lg:pl-64">
      <Topbar onMenu={() => setSidebarOpen(true)} />

      <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-8">
        <div className="grid gap-5 lg:grid-cols-3">

          {/* LEFT COLUMN */}
          <div className="space-y-5 lg:col-span-2">

            <RecoveryStatus approved={approved} />

            <LiveTrip
              trip={{
                origin: data.trip.flight.from,
                destination: data.trip.flight.to,
                departureTime: data.trip.flight.departure,
                arrivalTime: data.trip.flight.arrival,
                flight: `${data.trip.flight.airline} ${data.trip.flight.number}`,
                duration: '10h 45m',
                delay: `${Math.floor(
                  data.trip.flight.delayMinutes / 60
                )}h ${data.trip.flight.delayMinutes % 60}m`,
              }}
            />

            <div className="grid gap-5 md:grid-cols-2">
              <AiReasoning reasoning={data.reasoning} />
              <Timeline timeline={data.timeline} />
            </div>

            <TravelSummary summary={data.summary} />

              <SystemStatus />

              <RecoveryAnalytics />

              <AiInsights />

              <PassengerProfile traveler={data.trip.traveler} />

            <ActivityFeed
              activities={data.activities}
            />

          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-5">

            <Recommendation
              recommendation={data.recommendation}
              alternatives={data.alternatives}
              approved={approved}
              setApproved={setApproved}
            />

              <DecisionBreakdown
  score={data.recommendation.score}
  metrics={data.decisionBreakdown}
/>

              <RiskScore
  delayMinutes={data.trip.flight.delayMinutes}
  confidence={95}
/>

              <PassengerPreferences
    traveler={data.trip.traveler}
  />

               <DecisionMetrics
    recommendation={data.recommendation}
  />

            <Notifications
              notifications={data.notifications}
            />

          </div>

        </div>
        <Footer />
      </main>
    </div>
  </div>
)
}