import { useState } from 'react'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible'
import { Badge } from '@/components/ui/badge'
import { ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import MetaRow from '@/components/MetaRow'

/**
 * Collapsible section within the DataDrawer.
 *
 * Props:
 *   title       — section heading
 *   badge       — optional { label, variant } for status badge
 *   defaultOpen — open by default?
 *   rows        — array of MetaRow props
 */
export default function MetaSection({ title, badge, defaultOpen = false, rows = [] }) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <Collapsible open={open} onOpenChange={setOpen}>
      <CollapsibleTrigger className="flex w-full items-center justify-between py-3 px-4 hover:bg-canvas rounded transition-colors duration-fast group">
        <div className="flex items-center gap-2">
          <span className="text-label uppercase text-text-secondary font-medium tracking-wide">
            {title}
          </span>
          {badge && (
            <span
              className={cn(
                'text-label px-1.5 py-0.5 rounded',
                badge.variant === 'active' && 'bg-status-active/10 text-status-active',
              )}
            >
              {badge.label}
            </span>
          )}
        </div>
        <ChevronRight
          size={12}
          className={cn(
            'text-text-tertiary transition-transform duration-fast',
            open && 'rotate-90',
          )}
        />
      </CollapsibleTrigger>
      <CollapsibleContent>
        <div className="px-4 pb-3 flex flex-col">
          {rows.map((row) => (
            <MetaRow key={row.label} {...row} />
          ))}
        </div>
      </CollapsibleContent>
    </Collapsible>
  )
}
