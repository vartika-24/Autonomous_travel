'use client'

import Link from 'next/link'
import { useState } from 'react'
import {
  LayoutDashboard,
  Plane,
  BrainCircuit,
  Bell,
  Route,
  Settings,
  LifeBuoy,
  X,
} from 'lucide-react'
import { Logo } from '@/components/logo'
import { cn } from '@/lib/utils'

const nav = [
 { label: 'Overview', icon: LayoutDashboard, active: true },
{ label: 'Trips', icon: Plane },
{ label: 'Recovery', icon: Route },
{ label: 'Notifications', icon: Bell, badge: 3 },
{ label: 'Insights', icon: BrainCircuit },
]

const secondary = [
  { label: 'Settings', icon: Settings },
  { label: 'Support', icon: LifeBuoy },
]

export function Sidebar({
  open,
  onClose,
}: {
  open?: boolean
  onClose?: () => void
}) {
  return (
    <>
      {open && (
        <div
          className="fixed inset-0 z-40 bg-background/70 backdrop-blur-sm lg:hidden"
          onClick={onClose}
          aria-hidden="true"
        />
      )}
      <aside
        className={cn(
          'fixed inset-y-0 left-0 z-50 flex w-64 flex-col border-r border-border bg-sidebar transition-transform lg:translate-x-0',
          open ? 'translate-x-0' : '-translate-x-full',
        )}
      >
        <div className="flex h-16 items-center justify-between border-b border-border px-5">
          <Link href="/">
            <Logo />
          </Link>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex size-8 items-center justify-center rounded-lg border border-border text-muted-foreground lg:hidden"
            aria-label="Close sidebar"
          >
            <X className="size-4" />
          </button>
        </div>

        <nav className="flex-1 space-y-1 px-3 py-5">
          <p className="px-3 pb-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
            Navigation
          </p>
          {nav.map((item) => (
            <a
              key={item.label}
              href="#"
              className={cn(
                'flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors',
                item.active
                  ? 'bg-sidebar-accent text-foreground'
                  : 'text-muted-foreground hover:bg-sidebar-accent/60 hover:text-foreground',
              )}
            >
              <item.icon className="size-4 shrink-0" />
              <span className="flex-1">{item.label}</span>
              {item.badge && (
                <span className="flex size-5 items-center justify-center rounded-full bg-primary text-[11px] font-medium text-primary-foreground">
                  {item.badge}
                </span>
              )}
            </a>
          ))}

          <p className="px-3 pb-2 pt-5 text-xs font-medium uppercase tracking-wider text-muted-foreground">
            Account
          </p>
          {secondary.map((item) => (
            <a
              key={item.label}
              href="#"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-sidebar-accent/60 hover:text-foreground"
            >
              <item.icon className="size-4 shrink-0" />
              {item.label}
            </a>
          ))}
        </nav>

        <div className="border-t border-border p-3">
          <div className="flex items-center gap-3 rounded-lg px-3 py-2">
            <div className="flex size-9 items-center justify-center rounded-full bg-primary/15 text-sm font-semibold text-primary">
            SJ
            </div>
            <div className="min-w-0">
              <p className="truncate text-sm font-medium">Emily Carter</p>
              <p className="truncate text-xs text-muted-foreground">emily.carter@gmail.com</p>
            </div>
          </div>
        </div>
      </aside>
    </>
  )
}
