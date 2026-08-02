'use client'

import { useEffect, useState } from 'react'
import { Activity, Clock3 } from 'lucide-react'

type Activity = {
  time: string
  title: string
}

type ActivityFeedProps = {
  activities?: Activity[]
}

export function ActivityFeed({
  activities = [],
}: ActivityFeedProps) {
  const [visibleCount, setVisibleCount] = useState(1)

  useEffect(() => {
    if (activities.length === 0) return

    setVisibleCount(1)

    const interval = setInterval(() => {
      setVisibleCount((prev) => {
        if (prev >= activities.length) {
          clearInterval(interval)
          return prev
        }

        return prev + 1
      })
    }, 900)

    return () => clearInterval(interval)
  }, [activities])

  const visibleActivities = activities.slice(0, visibleCount)

  return (
    <div className="rounded-2xl border border-border bg-card p-5">
      <div className="flex items-center gap-2">
        <Activity className="size-5 text-primary" />

        <h2 className="text-lg font-semibold">
          Live Activity Feed
        </h2>

        <span className="ml-auto rounded-full bg-primary/15 px-2 py-1 text-xs font-medium text-primary">
          {visibleActivities.length}/{activities.length}
        </span>
      </div>

      {activities.length === 0 ? (
        <div className="mt-6 text-center text-sm text-muted-foreground">
          No activity available.
        </div>
      ) : (
        <div className="mt-6 space-y-4">
          {visibleActivities.map((activity, index) => (
            <div
              key={`${activity.time}-${index}`}
              className="flex gap-4 animate-in fade-in slide-in-from-bottom-2 duration-500"
            >
              <div className="flex flex-col items-center">
                <div className="rounded-full bg-primary/15 p-2">
                  <Clock3 className="size-4 text-primary" />
                </div>

                {index !== visibleActivities.length - 1 && (
                  <div className="mt-1 h-10 w-px bg-border" />
                )}
              </div>

              <div className="pb-3">
                <p className="text-xs text-muted-foreground">
                  {activity.time}
                </p>

                <p className="font-medium">
                  {activity.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}