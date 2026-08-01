import { BrainCircuit, ChevronRight } from 'lucide-react'

const thoughts = [
  {
    label: 'Assessing disruption',
    detail: 'UA914 delayed 3h 20m. Connection to LHR (BA284) departs before revised arrival — miss probability 98%.',
  },
  {
    label: 'Searching alternatives',
    detail: 'Scanned 12 routings across 4 carriers. VS20 departs in 90 min with 2 available seats in economy.',
  },
  {
    label: 'Weighing tradeoffs',
    detail: 'VS20 preserves arrival window (+12 min vs. plan) at no fare difference. Lowest disruption to hotel & transfer.',
  },
  {
    label: 'Decision',
    detail: 'Rebooked onto VS20. Original connection cancelled. Hotel notified automatically.',
  },
]

export function AiReasoning() {
  return (
    <div className="glass flex h-full flex-col rounded-2xl border border-border p-5 sm:p-6">
      <div className="flex items-center gap-2">
        <div className="flex size-8 items-center justify-center rounded-lg bg-primary/15 text-primary">
          <BrainCircuit className="size-4" />
        </div>
        <div>
          <h2 className="text-sm font-semibold">AI Reasoning</h2>
          <p className="text-xs text-muted-foreground">Live decision trace</p>
        </div>
        <span className="ml-auto rounded-full border border-primary/40 bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">
          Finding best route
        </span>
      </div>

      <div className="mt-5 space-y-3">
        {thoughts.map((t, i) => (
          <div key={t.label} className="relative pl-6">
            {i !== thoughts.length - 1 && (
              <span className="absolute left-[9px] top-5 h-full w-px bg-border" aria-hidden="true" />
            )}
            <span className="absolute left-0 top-1 flex size-[18px] items-center justify-center rounded-full border border-primary/50 bg-primary/10">
              <ChevronRight className="size-3 text-primary" />
            </span>
            <p className="text-sm font-medium">{t.label}</p>
            <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{t.detail}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
