import { CheckCircle2, Loader2, Circle } from 'lucide-react'
import { cn } from '@/lib/utils'

type Status = 'done' | 'active' | 'pending'

const actions: { time: string; title: string; desc: string; status: Status }[] = [
  {
    time: '14:22',
    title: 'Disruption detected',
    desc: 'UA914 delayed 3h 20m via airline feed',
    status: 'done',
  },
  {
    time: '14:22',
   title: 'Original connection cancelled',
   desc: 'Previous connection released automatically',
    status: 'done',
  },
  {
    time: '14:23',
    title: 'Secured Virgin Atlantic VS20',
    desc: 'Booking confirmed · Departs 15:50',
    status: 'done',
  },
  {
    time: '14:23',
    title: 'Rebooking airport transfer',
    desc: 'Updating pickup to new arrival terminal',
    status: 'active',
  },
  {
    time: '—',
    title: 'Hotel notification pending',
    desc: 'Hold reservation past 22:00 check-in',
    status: 'pending',
  },
]

const iconFor = {
  done: <CheckCircle2 className="size-4 text-[color:var(--success)]" />,
  active: <Loader2 className="size-4 animate-spin text-primary" />,
  pending: <Circle className="size-4 text-muted-foreground" />,
}

export function Timeline() {
  return (
    <div className="glass rounded-2xl border border-border p-5 sm:p-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-sm font-semibold">Recovery timeline</h2>
          <p className="text-xs text-muted-foreground">Actions taken on your behalf</p>
        </div>
        <span className="text-xs text-muted-foreground">Today</span>
      </div>

      <div className="mt-5 space-y-1">
        {actions.map((a, i) => (
          <div key={a.title} className="relative flex gap-3 pb-4 last:pb-0">
            {i !== actions.length - 1 && (
              <span className="absolute left-2 top-6 h-full w-px bg-border" aria-hidden="true" />
            )}
            <span className="relative mt-0.5 shrink-0">{iconFor[a.status]}</span>
            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between gap-2">
                <p
                  className={cn(
                    'text-sm font-medium',
                    a.status === 'pending' && 'text-muted-foreground',
                  )}
                >
                  {a.title}
                </p>
                <span className="shrink-0 font-mono text-xs text-muted-foreground">{a.time}</span>
              </div>
              <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">{a.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
