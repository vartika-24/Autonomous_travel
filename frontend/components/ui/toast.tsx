'use client'

type ToastProps = {
  message: string
  type?: 'success' | 'error'
}

export function Toast({
  message,
  type = 'success',
}: ToastProps) {
  return (
    <div
      className={`fixed right-5 top-5 z-50 rounded-xl border px-4 py-3 text-sm shadow-lg ${
        type === 'success'
          ? 'border-green-500/30 bg-green-500/10 text-green-500'
          : 'border-red-500/30 bg-red-500/10 text-red-500'
      }`}
    >
      {message}
    </div>
  )
}