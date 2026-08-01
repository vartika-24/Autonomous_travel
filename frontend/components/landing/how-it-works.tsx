import { Link2, Radar, Sparkles, CheckCircle2 } from 'lucide-react'

const steps = [
  {
    icon: Link2,
    step: '01',
    title: 'Connect your itinerary',
    desc: "Import your travel details or booking confirmations so SkyFlow can monitor every part of your journey.",
  },
  {
    icon: Radar,
    step: '02',
    title: 'Monitor & Detect',
    desc: "Flights, weather, airports, and schedules are continuously monitored to detect disruptions in real time.",
  },
  {
    icon: Sparkles,
    step: '03',
    title: 'It recovers for you',
    desc: "SkyFlow evaluates alternate flights, hotel coordination, travel time, and cost to select the best recovery plan.",
  },
  {
  icon: CheckCircle2,
  step: "04",
  title: "Recover & Notify",
  desc: "Your itinerary is updated, hotels are notified, and you receive the revised travel plan automatically."
  },
]

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="scroll-mt-20 border-t border-border/60 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium text-primary">How it works</p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Autonomous recovery in four simple steps
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            From monitoring to recovery, SkyFlow AI continuously keeps your journey on track.
          </p>
        </div>

        <div className="relative mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-[34px] hidden h-px bg-border md:block"
          />
          {steps.map((s) => (
            <div key={s.step} className="relative flex flex-col items-center text-center">
              <div className="flex size-[68px] items-center justify-center rounded-2xl border border-border bg-card text-primary shadow-lg shadow-black/20">
                <s.icon className="size-6" />
              </div>
              <span className="mt-5 font-mono text-xs tracking-widest text-muted-foreground">
                STEP {s.step}
              </span>
              <h3 className="mt-2 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted-foreground">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
