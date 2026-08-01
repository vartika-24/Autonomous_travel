'use client'

import { Menu, Search, Bell, Plus } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export function Topbar({ onMenu }: { onMenu?: () => void }) {
  return (
    <header className="sticky top-0 z-30 border-b border-border glass">
      <div className="flex h-16 items-center gap-3 px-4 sm:px-6">
        <button
          type="button"
          onClick={onMenu}
          className="inline-flex size-9 items-center justify-center rounded-lg border border-border text-foreground lg:hidden"
          aria-label="Open sidebar"
        >
          <Menu className="size-5" />
        </button>

        <div>
          <h1 className="text-sm font-semibold sm:text-base">Travel Control Center</h1>
          <p className="hidden text-xs text-muted-foreground sm:block">
            Monitoring all active itineraries
          </p>
        </div>

        <div className="relative ml-auto hidden md:block">
          <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="search"
            placeholder="Search trips, flights, hotels..."
            className="h-9 w-56 rounded-lg border border-border bg-card/60 pl-9 pr-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary/50"
          />
        </div>

        <button
  type="button"
  className="relative inline-flex size-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:text-foreground md:ml-0"
  aria-label="Notifications"
>
  <Bell className="size-4" />

  <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-primary px-1 text-[10px] font-semibold text-primary-foreground">
    3
  </span>
</button>

        <button type="button" className={cn(buttonVariants({ size: 'lg' }), 'h-9 gap-2 px-3 text-sm')}>
          <Plus className="size-4" />
          <span className="hidden sm:inline">Import itinerary</span>
        </button>
      </div>
    </header>
  )
}
