import { CheckCircle2 } from 'lucide-react'

type TimelineItem = {
  time: string
  title: string
}

type TimelineProps = {
  timeline: TimelineItem[]
}

export function Timeline({ timeline }: TimelineProps) {
  return (
    <div className="glass rounded-2xl border border-border p-5 sm:p-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-sm font-semibold">Recovery timeline</h2>
          <p className="text-xs text-muted-foreground">
            AI recovery events
          </p>
        </div>

        <span className="text-xs text-muted-foreground">
          Live
        </span>
      </div>

      <div className="mt-5 space-y-1">
        {timeline.map((item, i) => (
          <div
            key={i}
            className="relative flex gap-3 pb-4 last:pb-0"
          >
            {i !== timeline.length - 1 && (
              <span
                className="absolute left-2 top-6 h-full w-px bg-border"
                aria-hidden="true"
              />
            )}

            <span className="mt-0.5">
              <CheckCircle2 className="size-4 text-[color:var(--success)]" />
            </span>

            <div className="flex-1">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium">
                  {item.title}
                </p>

                <span className="font-mono text-xs text-muted-foreground">
                  {item.time}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}