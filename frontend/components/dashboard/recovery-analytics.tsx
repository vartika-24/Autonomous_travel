'use client'

import {
  TrendingUp,
  Clock3,
  DollarSign,
  ShieldCheck,
} from 'lucide-react'

export function RecoveryAnalytics() {
  const stats = [
    {
      icon: Clock3,
      label: 'Delay Saved',
      value: '2h 48m',
    },
    {
      icon: DollarSign,
      label: 'Money Saved',
      value: '$320',
    },
    {
      icon: ShieldCheck,
      label: 'Success Rate',
      value: '98.6%',
    },
    {
      icon: TrendingUp,
      label: 'AI Decisions',
      value: '1,284',
    },
  ]

  return (
    <div className="rounded-2xl border border-border bg-card p-5">
      <h2 className="text-lg font-semibold">
        Recovery Analytics
      </h2>

      <div className="mt-5 grid grid-cols-2 gap-4">
        {stats.map((item) => {
          const Icon = item.icon

          return (
            <div
              key={item.label}
              className="rounded-xl border border-border p-4"
            >
              <Icon className="mb-2 size-5 text-primary" />

              <p className="text-2xl font-bold">
                {item.value}
              </p>

              <p className="text-sm text-muted-foreground">
                {item.label}
              </p>
            </div>
          )
        })}
      </div>
    </div>
  )
}