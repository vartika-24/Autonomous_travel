import { Radar, BrainCircuit, Zap, BellRing, RefreshCw, Lock } from 'lucide-react'

const features = [
  {
    icon: Radar,
    title: 'Real-time monitoring',
    desc: 'We track flights, weather, gate changes, and traffic across every leg of your journey, 24/7.',
  },
  {
    icon: BrainCircuit,
    title: 'Autonomous reasoning',
    desc: 'The concierge weighs cost, timing, and preferences to choose the optimal recovery path.',
  },
  {
    icon: Zap,
    title: 'Smart rebooking',
    desc: 'Automatically selects the best alternative flight based on timing, cost, and availability.',
  },
  {
    icon: BellRing,
    title: 'Proactive alerts',
    desc: 'Clear, calm notifications tell you what happened and what was done on your behalf.',
  },
  {
    icon: RefreshCw,
    title: 'Continuous recovery',
    desc: 'If a plan changes again, SkyFlow adapts the itinerary automatically without missing a beat.',
  },
  {
    icon: Lock,
    title: "Hotel coordination",
    desc: "Automatically updates hotel check-ins and travel schedules whenever your itinerary changes.",
  },
]

export function Features() {
  return (
    <section id="features" className="scroll-mt-20 border-t border-border/60 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-primary">Features</p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Travel disruption, handled autonomously.
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            From delay detection to itinerary recovery, SkyFlow AI continuously monitors your journey and acts before disruptions become problems.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="group rounded-2xl border border-border bg-card/50 p-6 transition-colors hover:border-primary/40 hover:bg-card"
            >
              <div className="flex size-11 items-center justify-center rounded-xl border border-border bg-background text-primary transition-colors group-hover:border-primary/40">
                <f.icon className="size-5" />
              </div>
              <h3 className="mt-5 text-base font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
