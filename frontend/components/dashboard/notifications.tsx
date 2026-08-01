import { AlertTriangle, CheckCircle2, Info, BellRing } from 'lucide-react'
import { cn } from '@/lib/utils'

const items = [
  {
    icon: AlertTriangle,
    tone: 'text-destructive',
    ring: 'bg-destructive/15',
    title: 'Disruption detected',
    time: '2m ago',
    desc: 'UA914 delayed by 3h 20m',
  },
  {
    icon: CheckCircle2,
    tone: 'text-[color:var(--success)]',
    ring: 'bg-[color:var(--success)]/15',
    title: 'Recovery confirmed',
    time: '1m ago',
    desc: 'New itinerary sent to your inbox',
  },
  {
    icon: Info,
    tone: 'text-primary',
    ring: 'bg-primary/15',
    title: 'Hotel updated',
    time: 'just now',
    desc: 'Late check-in confirmed',
  },
]

export function Notifications() {
  return (
    <div className="glass rounded-2xl border border-border p-5 sm:p-6">
      <div className="flex items-center gap-2">
        <BellRing className="size-4 text-primary" />
        <h2 className="text-sm font-semibold">Notifications</h2>
        <span className="ml-auto rounded-full bg-primary/15 px-2 py-0.5 text-xs font-medium text-primary">
          3 updates
        </span>
      </div>

      <div className="mt-4 space-y-2">
        {items.map((n) => (
          <div
            key={n.title}
            className="flex gap-3 rounded-xl border border-border bg-card/50 p-3 transition-colors hover:bg-card"
          >
            <span className={cn('flex size-8 shrink-0 items-center justify-center rounded-lg', n.ring)}>
              <n.icon className={cn('size-4', n.tone)} />
            </span>
            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between gap-2">
                <p className="truncate text-sm font-medium">{n.title}</p>
                <span className="shrink-0 text-xs text-muted-foreground">{n.time}</span>
              </div>
              <p className="mt-0.5 truncate text-xs text-muted-foreground">{n.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
