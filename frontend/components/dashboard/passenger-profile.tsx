'use client'

import { User, Briefcase, CreditCard, Heart } from 'lucide-react'
type PassengerProfileProps = {
  traveler: {
    name: string
    type: string
    preference: string
    budget: string
    priority: string
  }
}

export function PassengerProfile({
  traveler,
}: PassengerProfileProps) {
  const profile = [
  {
    icon: User,
    label: 'Traveler',
    value: traveler.type,
  },
  {
    icon: Briefcase,
    label: 'Preference',
    value: traveler.preference,
  },
  {
    icon: CreditCard,
    label: 'Budget Limit',
    value: traveler.budget,
  },
  {
    icon: Heart,
    label: 'Priority',
    value: traveler.priority,
  },
]

  return (
    <div className="rounded-2xl border border-border bg-card p-5">
      <h2 className="text-lg font-semibold">
        Passenger Profile
      </h2>

      <div className="mt-5 space-y-4">
        {profile.map((item) => {
          const Icon = item.icon

          return (
            <div
              key={item.label}
              className="flex items-center justify-between rounded-xl border border-border p-3"
            >
              <div className="flex items-center gap-3">
                <Icon className="size-5 text-primary" />
                <span>{item.label}</span>
              </div>

              <span className="font-medium">
                {item.value}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}