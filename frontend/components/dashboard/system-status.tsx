'use client'

import {
  CheckCircle2,
  Cpu,
  Activity,
  Bell,
  ShieldCheck,
} from 'lucide-react'

const services = [
  {
    icon: Cpu,
    name: 'AI Engine',
    status: 'Online',
  },
  {
    icon: ShieldCheck,
    name: 'Recovery API',
    status: 'Healthy',
  },
  {
    icon: Activity,
    name: 'Flight Monitor',
    status: 'Active',
  },
  {
    icon: Bell,
    name: 'Notifications',
    status: 'Running',
  },
]

export function SystemStatus() {
  return (
    <div className="rounded-2xl border border-border bg-card p-5">
      <h2 className="text-lg font-semibold">
        System Status
      </h2>

      <div className="mt-5 space-y-4">
        {services.map((service) => {
          const Icon = service.icon

          return (
            <div
              key={service.name}
              className="flex items-center justify-between rounded-xl border border-border p-3"
            >
              <div className="flex items-center gap-3">
                <Icon className="size-5 text-primary" />

                <span className="font-medium">
                  {service.name}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-green-500" />

                <span className="text-sm font-medium text-green-600">
                  {service.status}
                </span>
              </div>
            </div>
          )
        })}
      </div>

      <div className="mt-5 border-t pt-4">
        <p className="text-xs text-muted-foreground">
          Last checked: Just now
        </p>
      </div>
    </div>
  )
}