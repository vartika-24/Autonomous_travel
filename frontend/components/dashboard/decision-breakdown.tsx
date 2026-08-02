'use client'

import {
  Shield,
  Clock3,
  DollarSign,
  Hotel,
  User,
  Brain,
} from 'lucide-react'

type DecisionBreakdownProps = {
  score: number
}

export function DecisionBreakdown({
  score,
}: DecisionBreakdownProps) {
  const metrics = [
    {
      icon: Shield,
      label: 'Connection Safety',
      value: '+500',
    },
    {
      icon: Clock3,
      label: 'Arrival Time',
      value: '+320',
    },
    {
      icon: DollarSign,
      label: 'Cost',
      value: '+250',
    },
    {
      icon: Hotel,
      label: 'Hotel Impact',
      value: '+150',
    },
    {
      icon: User,
      label: 'Traveler Preference',
      value: '+100',
    },
  ]

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
          const Icon = metric.icon

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
                {metric.value}
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