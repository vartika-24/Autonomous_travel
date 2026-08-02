'use client'

import {
  User,
  CheckCircle2,
  DollarSign,
  Plane,
  Hotel,
} from 'lucide-react'

type PassengerPreferencesProps = {
  traveler: {
    preferNonStop: boolean
    maxExtraCost: number
  }
}

export function PassengerPreferences({
  traveler,
}: PassengerPreferencesProps) {
  const preferences = [
    {
      icon: Plane,
      title: 'Non-stop flights',
      value: traveler.preferNonStop
        ? 'Preferred'
        : 'No preference',
    },
    {
      icon: DollarSign,
      title: 'Maximum extra cost',
      value: `$${traveler.maxExtraCost}`,
    },
    {
      icon: Hotel,
      title: 'Hotel stay',
      value: 'Avoid if possible',
    },
    {
      icon: CheckCircle2,
      title: 'Priority',
      value: 'Earliest arrival',
    },
  ]

  return (
    <div className="rounded-2xl border border-border bg-card p-5">
      <div className="flex items-center gap-2">
        <User className="size-5 text-primary" />
        <h2 className="text-lg font-semibold">
          Passenger Preferences
        </h2>
      </div>

      <div className="mt-5 space-y-3">
        {preferences.map((item) => {
          const Icon = item.icon

          return (
            <div
              key={item.title}
              className="flex items-center justify-between rounded-xl border border-border p-3"
            >
              <div className="flex items-center gap-2">
                <Icon className="size-4 text-primary" />
                <span className="text-sm">
                  {item.title}
                </span>
              </div>

              <span className="font-medium text-sm">
                {item.value}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}