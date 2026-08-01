'use client'

import { useState } from 'react'
import { Sidebar } from '@/components/dashboard/sidebar'
import { Topbar } from '@/components/dashboard/topbar'
import { LiveTrip } from '@/components/dashboard/live-trip'
import { AiReasoning } from '@/components/dashboard/ai-reasoning'
import { Timeline } from '@/components/dashboard/timeline'
import { Recommendation } from '@/components/dashboard/recommendation'
import { Notifications } from '@/components/dashboard/notifications'
import { TravelSummary } from '@/components/dashboard/travel-summary'

export default function DashboardPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="lg:pl-64">
        <Topbar onMenu={() => setSidebarOpen(true)} />

        <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-8">
          <div className="grid gap-5 lg:grid-cols-3">
            {/* Left / main column */}
            <div className="space-y-5 lg:col-span-2">
              <LiveTrip />
              <div className="grid gap-5 md:grid-cols-2">
                <AiReasoning />
                <Timeline />
              </div>
              <TravelSummary />
            </div>

            {/* Right column */}
            <div className="space-y-5">
              <Recommendation />
              <Notifications />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
