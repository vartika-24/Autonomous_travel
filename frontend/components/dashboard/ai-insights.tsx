'use client'

import { Brain, Lightbulb } from 'lucide-react'

const insights = [
  'AI avoided an overnight hotel stay by selecting an earlier connection.',
  'The selected recovery reduced passenger delay by approximately 2 hours.',
  'No additional fare was required based on traveler preferences.',
]

export function AiInsights() {
  return (
    <div className="rounded-2xl border border-border bg-card p-5">
      <div className="flex items-center gap-2">
        <Brain className="size-5 text-primary" />
        <h2 className="text-lg font-semibold">AI Insights</h2>
      </div>

      <div className="mt-5 space-y-3">
        {insights.map((insight, index) => (
          <div
            key={index}
            className="flex gap-3 rounded-xl border border-border p-3"
          >
            <Lightbulb className="mt-0.5 size-4 text-yellow-500" />
            <p className="text-sm">{insight}</p>
          </div>
        ))}
      </div>
    </div>
  )
}