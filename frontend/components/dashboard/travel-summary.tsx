import { Plane, Hotel, Car, Clock } from 'lucide-react'

const stats = [
  { icon: Plane, label: 'Active trips', value: '2' },
  { icon: Clock, label: 'Disruptions resolved', value: '18' },
  { icon: Hotel, label: 'Hotels coordinated', value: '5' },
  { icon: Car, label: 'Transfers updated', value: '9' },
]

export function TravelSummary() {
  return (
    <div className="glass rounded-2xl border border-border p-5 sm:p-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-sm font-semibold">Travel summary</h2>
          <p className="text-xs text-muted-foreground">Your recent travel activity</p>
        </div>
        <span className="rounded-full bg-[color:var(--success)]/15 px-2.5 py-1 text-xs font-medium text-[color:var(--success)]">
          All disruptions recovered
        </span>
      </div>

      <div className="mt-5 grid grid-cols-2 gap-3">
        {stats.map((s) => (
          <div key={s.label} className="rounded-xl border border-border bg-card/50 p-4">
            <div className="flex size-9 items-center justify-center rounded-lg bg-background text-primary">
              <s.icon className="size-4" />
            </div>
            <p className="mt-3 text-2xl font-semibold tracking-tight">{s.value}</p>
            <p className="mt-0.5 text-xs text-muted-foreground">{s.label}</p>
          </div>
        ))}
      </div>

      <div className="mt-4 rounded-xl border border-border bg-card/50 p-4">
        <div className="flex items-center justify-between text-xs">
          <span className="text-muted-foreground">Estimated time saved</span>
          <span className="font-medium">14h 30m</span>
        </div>
        <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-muted">
          <div className="h-full w-[78%] rounded-full bg-primary" />
        </div>
      </div>
    </div>
  )
}
