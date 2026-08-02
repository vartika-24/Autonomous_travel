'use client'

import {
  AlertTriangle,
  ShieldCheck,
  Clock3,
  Brain,
} from 'lucide-react'

type RiskScoreProps = {
  delayMinutes: number
  confidence: number
}

export function RiskScore({
  delayMinutes,
  confidence,
}: RiskScoreProps) {
  const risk =
    delayMinutes >= 180
      ? 'High'
      : delayMinutes >= 60
      ? 'Medium'
      : 'Low'

  const riskColor =
    risk === 'High'
      ? 'bg-red-500'
      : risk === 'Medium'
      ? 'bg-yellow-500'
      : 'bg-green-500'

  const overallRisk =
    delayMinutes >= 180
      ? 92
      : delayMinutes >= 60
      ? 68
      : 24

  return (
    <div className="rounded-2xl border border-border bg-card p-5">
      <div className="flex items-center gap-2">
        <ShieldCheck className="size-5 text-primary" />
        <h2 className="text-lg font-semibold">
          AI Risk Assessment
        </h2>
      </div>

      <div className="mt-5">
        <div className="flex justify-between text-sm">
          <span>Overall Risk</span>
          <span className="font-semibold">
            {overallRisk}%
          </span>
        </div>

        <div className="mt-2 h-3 overflow-hidden rounded-full bg-muted">
          <div
            className={`${riskColor} h-full rounded-full transition-all`}
            style={{ width: `${overallRisk}%` }}
          />
        </div>
      </div>

      <div className="mt-6 space-y-4">

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <AlertTriangle className="size-4 text-yellow-500" />
            <span className="text-sm">
              Connection Risk
            </span>
          </div>

          <span className="font-medium">
            {risk}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Clock3 className="size-4 text-primary" />
            <span className="text-sm">
              Delay Impact
            </span>
          </div>

          <span className="font-medium">
            {delayMinutes} min
          </span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Brain className="size-4 text-primary" />
            <span className="text-sm">
              AI Confidence
            </span>
          </div>

          <span className="font-medium">
            {confidence}%
          </span>
        </div>

      </div>
    </div>
  )
}