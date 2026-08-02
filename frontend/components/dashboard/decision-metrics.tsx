'use client'

import {
  Brain,
  Clock3,
  DollarSign,
  Hotel,
  ShieldCheck,
} from 'lucide-react'

type DecisionMetricsProps = {
  recommendation: {
    score: number
    cost: number
    hotelImpact: number
  }
}

export function DecisionMetrics({
  recommendation,
}: DecisionMetricsProps) {

  const metrics = [
    {
      label: 'Arrival Time',
      value: 98,
      icon: Clock3,
    },
    {
      label: 'Cost',
      value: recommendation.cost === 0 ? 100 : 75,
      icon: DollarSign,
    },
    {
      label: 'Hotel Impact',
      value:
        recommendation.hotelImpact === 0
          ? 100
          : 60,
      icon: Hotel,
    },
    {
      label: 'Connection Safety',
      value: 92,
      icon: ShieldCheck,
    },
    {
      label: 'Passenger Preference',
      value: 95,
      icon: Brain,
    },
  ]

  return (
    <div className="rounded-2xl border border-border bg-card p-5">

      <div className="flex items-center gap-2">
        <Brain className="size-5 text-primary" />

        <h2 className="text-lg font-semibold">
          AI Decision Metrics
        </h2>
      </div>

      <p className="mt-1 text-sm text-muted-foreground">
        Factors considered while selecting the recovery flight.
      </p>

      <div className="mt-6 space-y-4">

        {metrics.map((metric) => {

          const Icon = metric.icon

          return (

            <div key={metric.label}>

              <div className="mb-1 flex items-center justify-between">

                <div className="flex items-center gap-2">

                  <Icon className="size-4 text-primary"/>

                  <span className="text-sm">
                    {metric.label}
                  </span>

                </div>

                <span className="font-semibold">
                  {metric.value}
                </span>

              </div>

              <div className="h-2 overflow-hidden rounded-full bg-muted">

                <div
                  className="h-full rounded-full bg-primary transition-all duration-700"
                  style={{
                    width: `${metric.value}%`,
                  }}
                />

              </div>

            </div>

          )

        })}

      </div>

    </div>
  )
}