import { Plane, ArrowRight, Clock, MapPin } from 'lucide-react'

type Trip = {
  origin: string
  destination: string
  departureTime: string
  arrivalTime: string
  flight: string
  duration: string
  delay: string
}

export function LiveTrip({ trip }: { trip: Trip }) {
  return (
    <div className="glass rounded-2xl border border-border p-5 sm:p-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-2 animate-ping rounded-full bg-[color:var(--success)] opacity-75" />
            <span className="relative inline-flex size-2 rounded-full bg-[color:var(--success)]" />
          </span>
          Active trip · Live monitoring
        </div>

        <span className="rounded-full bg-destructive/15 px-2.5 py-1 text-xs font-medium text-destructive">
          Disruption detected
        </span>
      </div>

      <div className="mt-6 flex items-center gap-4">
        <div className="flex-1">
          <p className="text-xs text-muted-foreground">Departure</p>
          <p className="mt-1 text-2xl font-semibold tracking-tight">
            {trip.origin}
          </p>
          <p className="text-xs text-muted-foreground">
            {trip.departureTime}
          </p>
        </div>

        <div className="flex flex-1 flex-col items-center">
          <div className="flex w-full items-center gap-2">
            <span className="h-px flex-1 bg-border" />
            <Plane className="size-4 rotate-90 text-primary" />
            <span className="h-px flex-1 bg-border" />
          </div>

          <p className="mt-2 text-xs text-muted-foreground">
            {trip.flight} · {trip.duration}
          </p>
        </div>

        <div className="flex-1 text-right">
          <p className="text-xs text-muted-foreground">Arrival</p>
          <p className="mt-1 text-2xl font-semibold tracking-tight">
            {trip.destination}
          </p>
          <p className="text-xs text-muted-foreground">
            {trip.arrivalTime}
          </p>
        </div>
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        <div className="rounded-xl border border-border bg-card/50 p-3">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Clock className="size-3.5" />
            Disruption
          </div>

          <p className="mt-1 text-lg font-semibold text-destructive">
            {trip.delay}
          </p>
        </div>

        <div className="rounded-xl border border-border bg-card/50 p-3">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <MapPin className="size-3.5" />
            Impact
          </div>

          <p className="mt-1 text-lg font-semibold">
            Connection at risk
          </p>
        </div>

        <div className="rounded-xl border border-border bg-card/50 p-3">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <ArrowRight className="size-3.5" />
            Recovery Status
          </div>

          <p className="mt-1 text-lg font-semibold text-[color:var(--success)]">
            Recovery Active
          </p>
        </div>
      </div>
    </div>
  )
}