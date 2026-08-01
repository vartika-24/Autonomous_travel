import Link from 'next/link'
import { ArrowRight, Plane, ShieldCheck, Sparkles, CheckCircle2 } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      {/* ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full opacity-40 blur-3xl"
        style={{
          background:
            'radial-gradient(closest-side, oklch(0.62 0.17 256 / 0.55), transparent)',
        }}
      />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs text-muted-foreground">
            <Sparkles className="size-3.5 text-primary" />
            Autonomous Travel Disruption Concierge
          </div>
          <h1 className="text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
            Never let a travel disruption ruin your journey.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            SkyFlow AI continuously monitors flights, predicts disruptions, evaluates alternative routes, and coordinates rebooking with airlines and hotels—so your itinerary stays on track with minimal effort from you.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/dashboard"
              className={cn(buttonVariants({ size: 'lg' }), 'h-11 gap-2 px-5 text-sm')}
            >
              Launch Demo
              <ArrowRight className="size-4" />
            </Link>
            <a
              href="#how-it-works"
              className={cn(buttonVariants({ variant: 'outline', size: 'lg' }), 'h-11 px-5 text-sm')}
            >
              See how it works
            </a>
          </div>
          <div className="mt-6 flex items-center justify-center gap-2 text-xs text-muted-foreground">
            <ShieldCheck className="size-4 text-[color:var(--success)]" />
           AI-powered • Autonomous • Real-time Monitoring
          </div>
        </div>

        {/* product preview */}
        <div className="relative mx-auto mt-16 max-w-4xl">
          <div className="rounded-3xl border border-border bg-card/60 p-2 shadow-2xl shadow-black/40 backdrop-blur">
            <div className="rounded-[1.25rem] border border-border/70 bg-background/80 p-5 sm:p-7">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="flex size-2 items-center justify-center">
                    <span className="size-2 animate-ping rounded-full bg-[color:var(--success)] opacity-75" />
                    <span className="absolute size-2 rounded-full bg-[color:var(--success)]" />
                  </span>
                  Monitoring trip · DEL → LHR
                </div>
                <span className="rounded-full bg-destructive/15 px-2.5 py-1 text-xs font-medium text-destructive">
                  Delay detected
                </span>
              </div>

              <div className="mt-5 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-border bg-card/60 p-4 sm:col-span-2">
                  <div className="flex items-center gap-2 text-xs font-medium text-primary">
                    <Sparkles className="size-3.5" />
                    AI reasoning
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/90">
                    AI detected a 3h 20m delay on AI111. Your London connection would be missed. An alternative route with available seats was found, your hotel was notified of the revised arrival, and your itinerary has been updated automatically.
                  </p>
                  <div className="mt-4 space-y-2">
                    {[
                      'Cancelled original connection',
                      'Secured Virgin Atlantic VS20 · seat 14C',
                      'Notified hotel of late arrival',
                    ].map((step) => (
                      <div key={step} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <CheckCircle2 className="size-4 text-[color:var(--success)]" />
                        {step}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col justify-between rounded-2xl border border-border bg-card/60 p-4">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Plane className="size-4 text-primary" />
                    New itinerary
                  </div>
                  <div>
                    <div className="text-2xl font-semibold tracking-tight">On track</div>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Arrival preserved · +12 min vs. plan
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
