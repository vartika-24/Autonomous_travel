'use client'

import { X, Plane, CheckCircle2 } from 'lucide-react'

type Flight = {
  airline: string
  flight: string
  departure: string
  arrival: string
  cost: number
  hotelImpact: number
  score: number
}

type Props = {
  open: boolean
  onClose: () => void
  flights: Flight[]
  selectedFlight: string
}

export function AlternativesModal({
  open,
  onClose,
  flights,
  selectedFlight,
}: Props) {
  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
      <div className="w-full max-w-2xl rounded-2xl border border-border bg-background p-6 shadow-2xl">

        <div className="mb-6 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold">
              Recovery Alternatives
            </h2>

            <p className="text-sm text-muted-foreground">
              AI evaluated these flight options.
            </p>
          </div>

          <button onClick={onClose}>
            <X className="size-5" />
          </button>
        </div>

        <div className="space-y-4">

          {flights.map((flight) => {

            const recommended =
              flight.flight === selectedFlight

            return (

              <div
                key={flight.flight}
                className={`rounded-xl border p-4 ${
                  recommended
                    ? 'border-primary bg-primary/5'
                    : 'border-border'
                }`}
              >

                <div className="flex items-start justify-between">

                  <div>

                    <div className="flex items-center gap-2">

                      <Plane className="size-4 text-primary" />

                      <h3 className="font-semibold">
                        {flight.airline} {flight.flight}
                      </h3>

                      {recommended && (
                        <span className="flex items-center gap-1 rounded-full bg-green-500/15 px-2 py-1 text-xs text-green-600">
                          <CheckCircle2 className="size-3" />
                          Recommended
                        </span>
                      )}

                    </div>

                    <div className="mt-3 grid grid-cols-2 gap-3 text-sm">

                      <div>
                        <p className="text-muted-foreground">
                          Departure
                        </p>

                        <p>{flight.departure}</p>
                      </div>

                      <div>
                        <p className="text-muted-foreground">
                          Arrival
                        </p>

                        <p>{flight.arrival}</p>
                      </div>

                      <div>
                        <p className="text-muted-foreground">
                          Extra Cost
                        </p>

                        <p>
                          {flight.cost === 0
                            ? 'None'
                            : `$${flight.cost}`}
                        </p>
                      </div>

                      <div>
                        <p className="text-muted-foreground">
                          Hotel
                        </p>

                        <p>
                          {flight.hotelImpact === 0
                            ? 'No impact'
                            : '1 Night'}
                        </p>
                      </div>

                    </div>

                  </div>

                  <div className="text-right">

                    <p className="text-xs text-muted-foreground">
                      AI Score
                    </p>

                    <p className="text-2xl font-bold text-primary">
                      {flight.score}
                    </p>

                  </div>

                </div>

              </div>

            )

          })}

        </div>

      </div>
    </div>
  )
}