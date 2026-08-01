import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { Logo } from '@/components/logo'
import { cn } from '@/lib/utils'

const columns = [
  {
    title: "Platform",
    links: ["Features", "How It Works", "Dashboard", "Demo"],
  },
  {
    title: "Technology",
    links: ["Next.js", "FastAPI", "Gemini AI", "Tailwind CSS"],
  },
  {
    title: "Capabilities",
    links: ["Flight Monitoring", "Smart Rebooking", "Hotel Coordination", "AI Planning"],
  },
  {
    title: "Project",
    links: ["Architecture", "GitHub", "Documentation"],
  },
]

export function Footer() {
  return (
    <footer className="border-t border-border/60">
      {/* CTA */}
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card/60 px-6 py-14 text-center sm:px-12">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-24 left-1/2 h-80 w-[640px] -translate-x-1/2 rounded-full opacity-40 blur-3xl"
            style={{
              background:
                'radial-gradient(closest-side, oklch(0.62 0.17 256 / 0.5), transparent)',
            }}
          />
          <div className="relative">
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Never manage a disruption again
            </h2>
            <p className="mx-auto mt-4 max-w-md text-pretty leading-relaxed text-muted-foreground">
              Let SkyFlow AI handle the chaos while you focus on the journey.
            </p>
            <div className="mt-8 flex justify-center">
              <Link
                href="/dashboard"
                className={cn(buttonVariants({ size: 'lg' }), 'h-11 gap-2 px-5 text-sm')}
              >
                Launch Demo
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* links */}
      <div className="border-t border-border/60">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
          <div className="grid gap-10 md:grid-cols-[1.5fr_repeat(4,1fr)]">
            <div>
              <Logo />
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
                An AI-powered travel recovery platform that monitors disruptions and rebuilds itineraries automatically.
              </p>
            </div>
            {columns.map((col) => (
              <div key={col.title}>
                <h3 className="text-sm font-semibold">{col.title}</h3>
                <ul className="mt-4 space-y-3">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border/60 pt-6 sm:flex-row">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} SkyFlow AI. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground">Built with Next.js, FastAPI and Gemini AI.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
