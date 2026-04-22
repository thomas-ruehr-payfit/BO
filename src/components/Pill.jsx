import { cn } from '@/lib/utils'

/**
 * Generic colored pill badge.
 * Visual style (bg + text color) is supplied by the caller via `className`.
 * e.g. <Pill className="bg-feedback-ok-subtle text-feedback-ok">OK</Pill>
 */
export default function Pill({ children, className }) {
  return (
    <span className={cn('text-label px-1.5 py-0.5 rounded', className)}>
      {children}
    </span>
  )
}
