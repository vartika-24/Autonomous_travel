import { Sparkles, Plane, Check } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const details = [
  { label: 'Reason', value: 'Earliest arrival with no hotel disruption' },
  { label: 'Departs', value: '15:50 · Gate A12' },
  { label: 'Arrival impact', value: '+12 min vs. plan' },
  { label: 'Additional cost', value: 'None' },
]

export function Recommendation() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-primary/40 bg-card/60 p-5 sm:p-6">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 -top-16 size-52 rounded-full opacity-40 blur-3xl"
        style={{ background: 'radial-gradient(closest-side, oklch(0.62 0.17 256 / 0.5), transparent)' }}
      />
      <div className="relative">
        <div className="flex items-center gap-2 text-xs font-medium text-primary">
          <Sparkles className="size-3.5" />
          Recommended recovery
        </div>
       <div className="mt-3 flex items-start gap-2">
  <Plane className="mt-0.5 size-5 text-primary" />

  <div>
    <p className="text-xs uppercase tracking-wide text-muted-foreground">
      Recommended flight
    </p>

    <h2 className="text-xl font-semibold tracking-tight">
      Virgin Atlantic VS20
    </h2>
  </div>
</div>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          Selected after evaluating timing, cost, disruption impact, and traveler preferences.
        </p>

        <dl className="mt-5 space-y-2.5 rounded-xl border border-border bg-background/50 p-4">
          {details.map((d) => (
            <div key={d.label} className="flex items-center justify-between gap-3 text-sm">
              <dt className="text-muted-foreground">{d.label}</dt>
              <dd className="font-medium">{d.value}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-5 flex flex-col gap-2 sm:flex-row">
          <button
            type="button"
            className={cn(buttonVariants({ size: 'lg' }), 'h-10 flex-1 gap-2 text-sm')}
          >
            <Check className="size-4" />
            Approve &amp; rebook
          </button>
          <button
            type="button"
            className={cn(buttonVariants({ variant: 'outline', size: 'lg' }), 'h-10 flex-1 text-sm')}
          >
            View alternatives
          </button>
        </div>
        <p className="mt-3 text-center text-xs text-muted-foreground">
          Will auto-approve in 4:32 unless you intervene.
        </p>
      </div>
    </div>
  )
}
