import { useEffect, useRef } from 'react'
import { HeartStamp, StarStamp } from './Decorations.tsx'

const followers = [
  { kind: 'heart' as const, ease: 0.2, dx: 16, dy: -14, size: 'h-3.5 w-3.5', color: 'text-glow-petal' },
  { kind: 'star' as const, ease: 0.12, dx: -18, dy: 12, size: 'h-3 w-3', color: 'text-glow-lilac' },
  { kind: 'heart' as const, ease: 0.07, dx: 10, dy: 20, size: 'h-2.5 w-2.5', color: 'text-glow-sakura' },
]

export function CursorFollow() {
  const rootRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const root = rootRef.current
    if (!root) return

    const fine = window.matchMedia('(hover: hover) and (pointer: fine)')
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (!fine.matches || reduce.matches) return

    const nodes = Array.from(root.querySelectorAll<HTMLElement>('[data-follow]'))
    const points = followers.map(() => ({ x: 0, y: 0 }))
    const target = { x: 0, y: 0, active: false }
    let frame = 0

    const paint = () => {
      nodes.forEach((node, index) => {
        const spec = followers[index]
        const point = points[index]
        if (!spec || !point) return
        point.x += (target.x + spec.dx - point.x) * spec.ease
        point.y += (target.y + spec.dy - point.y) * spec.ease
        node.style.transform = `translate3d(${point.x}px, ${point.y}px, 0) translate(-50%, -50%)`
      })
    }

    const tick = () => {
      if (target.active) paint()
      frame = requestAnimationFrame(tick)
    }

    const onMove = (event: PointerEvent) => {
      if (!target.active) {
        points.forEach((point) => {
          point.x = event.clientX
          point.y = event.clientY
        })
      }
      target.x = event.clientX
      target.y = event.clientY
      target.active = true
      root.hidden = false
    }

    const onOut = (event: PointerEvent) => {
      if (event.relatedTarget) return
      target.active = false
      root.hidden = true
    }

    root.hidden = true
    window.addEventListener('pointermove', onMove)
    window.addEventListener('pointerout', onOut)
    frame = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('pointerout', onOut)
    }
  }, [])

  return (
    <div ref={rootRef} aria-hidden hidden className="pointer-events-none fixed inset-0 z-30">
      {followers.map((item, index) => (
        <span key={index} data-follow className={`absolute top-0 left-0 ${item.color}`}>
          {item.kind === 'heart' ? (
            <HeartStamp className={item.size} />
          ) : (
            <StarStamp className={item.size} />
          )}
        </span>
      ))}
    </div>
  )
}
