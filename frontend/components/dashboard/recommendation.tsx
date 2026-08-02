'use client'

import { useState } from 'react'
import {
  Sparkles,
  Plane,
  Check,
  ShieldCheck,
  Clock,
  DollarSign,
  Hotel,
} from 'lucide-react'

import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { approveRecovery } from '@/lib/approve'
import { AlternativesModal } from './alternatives-modal'

type RecommendationProps = {
  recommendation: {
    airline: string
    flight: string
    departure: string
    arrival: string
    cost: number
    hotelImpact: number
    score: number
  }

  alternatives: {
    airline: string
    flight: string
    departure: string
    arrival: string
    cost: number
    hotelImpact: number
    score: number
  }[]

  approved: boolean
  setApproved: (value: boolean) => void
}

export function Recommendation({
  recommendation,
  alternatives,
  approved,
  setApproved,
}: RecommendationProps) {
  const [loading, setLoading] = useState(false)
  const [showAlternatives, setShowAlternatives] = useState(false)

  async function handleApprove() {
    try {
      setLoading(true)

      await approveRecovery()

      setApproved(true)
    } catch (err) {
      console.error(err)
      alert('Failed to approve recovery.')
    } finally {
      setLoading(false)
    }
  }

  const confidence = recommendation.score
    ? Math.min(99, Math.round(recommendation.score / 13))
    : 92

  const details = [
    {
      icon: Clock,
      label: 'Departure',
      value: recommendation.departure,
    },
    {
      icon: Plane,
      label: 'Arrival',
      value: recommendation.arrival,
    },
    {
      icon: DollarSign,
      label: 'Extra cost',
      value:
        recommendation.cost === 0
          ? 'No additional cost'
          : `$${recommendation.cost}`,
    },
    {
      icon: Hotel,
      label: 'Hotel impact',
      value:
        recommendation.hotelImpact === 0
          ? 'No hotel required'
          : 'Overnight stay needed',
    },
  ]

  return (
    <>
      <div className="relative overflow-hidden rounded-2xl border border-primary/40 bg-card/70 p-5 sm:p-6">
        <div
          className="absolute -right-20 -top-20 size-60 rounded-full opacity-30 blur-3xl"
          style={{
            background:
              'radial-gradient(circle, oklch(0.62 0.17 256), transparent)',
          }}
        />

        <div className="relative">
          <div className="flex items-center gap-2 text-xs font-semibold text-primary">
            <Sparkles className="size-4" />
            AI Recommended Recovery
          </div>

          <div className="mt-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-primary/15 p-3">
                <Plane className="size-6 text-primary" />
              </div>

              <div>
                <p className="text-xs uppercase text-muted-foreground">
                  New flight
                </p>

                <h2 className="text-xl font-bold">
                  {recommendation.airline}
                </h2>

                <p className="text-sm text-muted-foreground">
                  {recommendation.flight}
                </p>
              </div>
            </div>

            <div className="rounded-xl bg-green-500/10 px-3 py-2 text-center">
              <p className="text-xs text-muted-foreground">
                Confidence
              </p>

              <p className="text-lg font-bold text-green-600">
                {confidence}%
              </p>
            </div>
          </div>

          <div className="mt-5 rounded-xl border border-border bg-background/50 p-4">
            <p className="text-sm font-medium">
              Why AI selected this
            </p>

            <p className="mt-1 text-sm text-muted-foreground">
              Best combination of arrival time, cost, connection safety, and
              traveler preferences.
            </p>
          </div>

          <div className="mt-4 space-y-2">
            {details.map((item) => {
              const Icon = item.icon

              return (
                <div
                  key={item.label}
                  className="flex items-center justify-between rounded-xl border border-border p-3"
                >
                  <div className="flex items-center gap-2">
                    <Icon className="size-4 text-primary" />

                    <span className="text-sm text-muted-foreground">
                      {item.label}
                    </span>
                  </div>

                  <span className="text-sm font-medium">
                    {item.value}
                  </span>
                </div>
              )
            })}
          </div>

          <button
            disabled={loading || approved}
            onClick={handleApprove}
            className={cn(
              buttonVariants({ size: 'lg' }),
              'mt-5 w-full gap-2'
            )}
          >
            {approved ? (
              <>
                <ShieldCheck className="size-4" />
                Recovery Confirmed
              </>
            ) : loading ? (
              'Processing...'
            ) : (
              <>
                <Check className="size-4" />
                Approve & Rebook
              </>
            )}
          </button>

          <button
            type="button"
            onClick={() => setShowAlternatives(true)}
            className={cn(
              buttonVariants({
                variant: 'outline',
                size: 'lg',
              }),
              'mt-3 w-full'
            )}
          >
            View Alternatives
          </button>

          <p className="mt-3 text-center text-xs text-muted-foreground">
            {approved
              ? 'Passenger itinerary updated successfully.'
              : 'AI will continue monitoring disruptions.'}
          </p>
        </div>
      </div>

      <AlternativesModal
        open={showAlternatives}
        onClose={() => setShowAlternatives(false)}
        flights={alternatives}
        selectedFlight={recommendation.flight}
      />
    </>
  )
}