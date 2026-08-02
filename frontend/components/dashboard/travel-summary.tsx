import {
  Plane,
  PlaneTakeoff,
  Clock,
  DollarSign,
} from 'lucide-react'

type TravelSummaryProps = {
  summary: {
    originalFlight: string
    newFlight: string
    delay: string
    additionalCost: number
  }
}

export function TravelSummary({
  summary,
}: TravelSummaryProps) {
  const stats = [
    {
      icon: Plane,
      label: 'Original Flight',
      value: summary.originalFlight,
    },
    {
      icon: PlaneTakeoff,
      label: 'Recovered Flight',
      value: summary.newFlight,
    },
    {
      icon: Clock,
      label: 'Delay',
      value: summary.delay,
    },
    {
      icon: DollarSign,
      label: 'Extra Cost',
      value:
        summary.additionalCost === 0
          ? '$0'
          : `$${summary.additionalCost}`,
    },
  ]

  return (
    <div className="glass rounded-2xl border border-border p-5 sm:p-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-sm font-semibold">
            Travel Summary
          </h2>

          <p className="text-xs text-muted-foreground">
            Final recovery overview
          </p>
        </div>

        <span className="rounded-full bg-[color:var(--success)]/15 px-2.5 py-1 text-xs font-medium text-[color:var(--success)]">
          Recovery Successful
        </span>
      </div>

      <div className="mt-5 grid grid-cols-2 gap-3">
        {stats.map((item) => (
          <div
            key={item.label}
            className="rounded-xl border border-border bg-card/50 p-4"
          >
            <div className="flex size-9 items-center justify-center rounded-lg bg-background text-primary">
              <item.icon className="size-4" />
            </div>

            <p className="mt-3 text-lg font-semibold">
              {item.value}
            </p>

            <p className="mt-1 text-xs text-muted-foreground">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}