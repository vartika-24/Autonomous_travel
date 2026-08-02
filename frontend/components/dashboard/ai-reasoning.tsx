import { BrainCircuit, ChevronRight } from 'lucide-react'

type AiReasoningProps = {
  reasoning: string[]
}

export function AiReasoning({
  reasoning,
}: AiReasoningProps) {
  return (
    <div className="glass flex h-full flex-col rounded-2xl border border-border p-5 sm:p-6">
      <div className="flex items-center gap-2">
        <div className="flex size-8 items-center justify-center rounded-lg bg-primary/15 text-primary">
          <BrainCircuit className="size-4" />
        </div>

        <div>
          <h2 className="text-sm font-semibold">AI Reasoning</h2>
          <p className="text-xs text-muted-foreground">
            Live decision trace
          </p>
        </div>

        <span className="ml-auto rounded-full border border-primary/40 bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">
          Gemini AI
        </span>
      </div>

      <div className="mt-5 space-y-3">
        {reasoning.map((text, i) => (
          <div key={i} className="relative pl-6">
            {i !== reasoning.length - 1 && (
              <span
                className="absolute left-[9px] top-5 h-full w-px bg-border"
                aria-hidden="true"
              />
            )}

            <span className="absolute left-0 top-1 flex size-[18px] items-center justify-center rounded-full border border-primary/50 bg-primary/10">
              <ChevronRight className="size-3 text-primary" />
            </span>

            <p className="text-sm font-medium">
              Step {i + 1}
            </p>

            <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
              {text}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}