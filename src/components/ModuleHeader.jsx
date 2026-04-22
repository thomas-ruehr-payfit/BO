import { cn } from '@/lib/utils'

/**
 * Standard section heading used by every module.
 * `children` renders on the right side — counts, controls, action buttons, etc.
 */
export default function ModuleHeader({ title, className, children }) {
  return (
    <div className={cn('flex items-center justify-between mb-4', className)}>
      <h2 className="text-h4 text-text-primary">{title}</h2>
      {children}
    </div>
  )
}
