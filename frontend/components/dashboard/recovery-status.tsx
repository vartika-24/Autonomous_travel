'use client'

import {
  Loader2,
  CheckCircle2,
  Clock3,
  Plane,
  Hotel,
  Bell,
} from 'lucide-react'

type Props = {
  approved: boolean
}

export function RecoveryStatus({
  approved,
}: Props) {
  const pendingSteps = [
    'Delay detected',
    'AI evaluated recovery options',
    'Hotel impact checked',
    'Waiting for passenger approval',
  ]

  const completedSteps = [
    'Flight successfully rebooked',
    'Passenger notified',
    'Hotel reservation updated',
    'Airport transfer updated',
  ]

  return (
    <div
      className={`rounded-2xl border p-5 ${
        approved
          ? 'border-green-500/40 bg-green-500/5'
          : 'border-yellow-500/40 bg-yellow-500/5'
      }`}
    >
      <div className="flex items-center gap-3">

        {approved ? (
          <CheckCircle2 className="size-6 text-green-600" />
        ) : (
          <Loader2 className="size-6 animate-spin text-yellow-600" />
        )}

        <div>

          <h2 className="font-semibold">

            {approved
              ? 'Recovery Complete'
              : 'Recovery In Progress'}

          </h2>

          <p className="text-sm text-muted-foreground">

            {approved
              ? 'Passenger itinerary has been updated.'
              : 'AI is coordinating your recovery plan.'}

          </p>

        </div>

      </div>

      <div className="mt-5 space-y-3">

        {(approved ? completedSteps : pendingSteps).map(
          (step, index) => {

            const Icon =
              index === 0
                ? Plane
                : index === 1
                ? Bell
                : index === 2
                ? Hotel
                : Clock3

            return (
              <div
                key={step}
                className="flex items-center gap-3"
              >
                <Icon
                  className={`size-4 ${
                    approved
                      ? 'text-green-600'
                      : 'text-yellow-600'
                  }`}
                />

                <span className="text-sm">
                  {step}
                </span>
              </div>
            )
          }
        )}
      </div>
    </div>
  )
}