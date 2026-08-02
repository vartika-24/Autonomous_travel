import {
  AlertTriangle,
  CheckCircle2,
  Info,
  BellRing,
} from 'lucide-react'
import { cn } from '@/lib/utils'

type NotificationsProps = {
  notifications: string[]
}

export function Notifications({
  notifications,
}: NotificationsProps) {
  return (
    <div className="glass rounded-2xl border border-border p-5 sm:p-6">
      <div className="flex items-center gap-2">
        <BellRing className="size-4 text-primary" />

        <h2 className="text-sm font-semibold">
          Notifications
        </h2>

        <span className="ml-auto rounded-full bg-primary/15 px-2 py-0.5 text-xs font-medium text-primary">
          {notifications.length} updates
        </span>
      </div>

      <div className="mt-4 space-y-2">
        {notifications.map((text, index) => {
          const Icon =
            index === 0
              ? AlertTriangle
              : index === 1
              ? CheckCircle2
              : Info

          const tone =
            index === 0
              ? 'text-destructive'
              : index === 1
              ? 'text-[color:var(--success)]'
              : 'text-primary'

          const ring =
            index === 0
              ? 'bg-destructive/15'
              : index === 1
              ? 'bg-[color:var(--success)]/15'
              : 'bg-primary/15'

          return (
            <div
              key={text}
              className="flex gap-3 rounded-xl border border-border bg-card/50 p-3 transition-colors hover:bg-card"
            >
              <span
                className={cn(
                  'flex size-8 shrink-0 items-center justify-center rounded-lg',
                  ring
                )}
              >
                <Icon className={cn('size-4', tone)} />
              </span>

              <div className="flex-1">
                <p className="text-sm font-medium">
                  {text}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}