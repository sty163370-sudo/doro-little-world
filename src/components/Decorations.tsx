import { cn } from '../lib/cn.ts'

type StampProps = {
  className?: string
}

export function HeartStamp({ className }: StampProps) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden className={className}>
      <path
        fill="currentColor"
        d="M16 27s-9.2-5.7-12.4-10.4C1.2 12.8 2.2 8 6.4 6.4 9.2 5.2 12 6.3 13.6 8.6c.9 1.2 1.6 2 2.4 3.2.8-1.2 1.5-2 2.4-3.2C20 6.3 22.8 5.2 25.6 6.4c4.2 1.6 5.2 6.4 2.8 10.2C25.2 21.3 16 27 16 27z"
      />
    </svg>
  )
}

export function StarStamp({ className }: StampProps) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden className={className}>
      <path
        fill="currentColor"
        d="M16 2.5 18.8 12 28.5 14.2 18.8 16.8 16 26.5 13.2 16.8 3.5 14.2 13.2 12 16 2.5z"
      />
    </svg>
  )
}

export function SparkleStamp({ className }: StampProps) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden className={className}>
      <path
        fill="currentColor"
        d="M16 1c.8 6.2 2.8 8.4 9 10-6.2.8-8.2 3.2-9 10-.8-6.8-2.8-9.2-9-10 6.2-1.6 8.2-3.8 9-10z"
      />
    </svg>
  )
}

export function BowStamp({ className }: StampProps) {
  return (
    <svg viewBox="0 0 72 40" aria-hidden className={className}>
      <path
        fill="#DCCCFB"
        d="M36 17C28 4 10 6 8 16c7 1 12 5 14 9-2 4-7 8-14 9 2 11 20 12 28-6"
      />
      <path
        fill="#F6B8D0"
        d="M36 17c8-13 26-11 28-1-7 1-12 5-14 9 2 4 7 8 14 9-2 11-20 12-28-6"
      />
      <path fill="#B34E74" d="M32 18h8l-1.6 16h-4.8L32 18z" />
    </svg>
  )
}

export function WashiTape({ className }: StampProps) {
  return (
    <div
      aria-hidden
      className={cn(
        'pointer-events-none h-7 w-24 rounded-[3px] bg-lilac shadow-sm',
        className,
      )}
      style={{
        backgroundImage:
          'repeating-linear-gradient(-18deg, transparent, transparent 7px, rgb(255 255 255 / 0.5) 7px, rgb(255 255 255 / 0.5) 9px)',
      }}
    />
  )
}
