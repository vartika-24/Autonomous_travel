import { Plane, ArrowRight, Clock, MapPin } from 'lucide-react'

export function LiveTrip() {
  return (
    <div className="glass rounded-2xl border border-border p-5 sm:p-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-2 animate-ping rounded-full bg-[color:var(--success)] opacity-75" />
            <span className="relative inline-flex size-2 rounded-full bg-[color:var(--success)]" />
          </span>
          Live trip · Monitoring
        </div>
        <span className="rounded-full bg-destructive/15 px-2.5 py-1 text-xs font-medium text-destructive">
          Delay detected
        </span>
      </div>

      <div className="mt-6 flex items-center gap-4">
        <div className="flex-1">
          <p className="text-xs text-muted-foreground">Departure</p>
          <p className="mt-1 text-2xl font-semibold tracking-tight">SFO</p>
          <p className="text-xs text-muted-foreground">San Francisco · 14:20</p>
        </div>

        <div className="flex flex-1 flex-col items-center">
          <div className="flex w-full items-center gap-2">
            <span className="h-px flex-1 bg-border" />
            <Plane className="size-4 rotate-90 text-primary" />
            <span className="h-px flex-1 bg-border" />
          </div>
          <p className="mt-2 text-xs text-muted-foreground">UA914 · 10h 45m</p>
        </div>

        <div className="flex-1 text-right">
          <p className="text-xs text-muted-foreground">Arrival</p>
          <p className="mt-1 text-2xl font-semibold tracking-tight">LHR</p>
          <p className="text-xs text-muted-foreground">London · 08:05 +1</p>
        </div>
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        <div className="rounded-xl border border-border bg-card/50 p-3">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Clock className="size-3.5" /> Original delay
          </div>
          <p className="mt-1 text-lg font-semibold text-destructive">3h 20m</p>
        </div>
        <div className="rounded-xl border border-border bg-card/50 p-3">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <MapPin className="size-3.5" /> Connection
          </div>
          <p className="mt-1 text-lg font-semibold">At risk</p>
        </div>
        <div className="rounded-xl border border-border bg-card/50 p-3">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <ArrowRight className="size-3.5" /> Recovery
          </div>
          <p className="mt-1 text-lg font-semibold text-[color:var(--success)]">In progress</p>
        </div>
      </div>
    </div>
  )
}
