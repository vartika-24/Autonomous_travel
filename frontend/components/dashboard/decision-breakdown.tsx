'use client'

import {
  Brain,
  Shield,
  Clock3,
  DollarSign,
  Hotel,
  User,
} from 'lucide-react'

type DecisionMetric = {
  label: string
  score: number
}

type DecisionBreakdownProps = {
  score: number
  metrics: DecisionMetric[]
}

export function DecisionBreakdown({
  score,
  metrics,
}: DecisionBreakdownProps) {
  const iconMap = {
    'Connection Safety': Shield,
    'Arrival Time': Clock3,
    Cost: DollarSign,
    'Hotel Impact': Hotel,
    'Traveler Preference': User,
  }

  return (
    <div className="rounded-2xl border border-border bg-card p-5">
      <div className="mb-5 flex items-center gap-2">
        <Brain className="size-5 text-primary" />

        <h2 className="text-lg font-semibold">
          AI Decision Breakdown
        </h2>
      </div>

      <div className="space-y-3">
        {metrics.map((metric) => {
          const Icon =
            iconMap[
              metric.label as keyof typeof iconMap
            ] ?? Brain

          return (
            <div
              key={metric.label}
              className="flex items-center justify-between rounded-xl border border-border p-3"
            >
              <div className="flex items-center gap-3">
                <Icon className="size-4 text-primary" />

                <span className="text-sm">
                  {metric.label}
                </span>
              </div>

              <span className="font-semibold text-green-600">
                +{metric.score}
              </span>
            </div>
          )
        })}
      </div>

      <div className="mt-5 rounded-xl bg-primary/10 p-4">
        <div className="flex items-center justify-between">
          <span className="font-medium">
            Final AI Score
          </span>

          <span className="text-xl font-bold text-primary">
            {score}
          </span>
        </div>
      </div>
    </div>
  )
}