import { PanelRight } from 'lucide-react'
import { TooltipProvider } from '@/components/ui/tooltip'
import MetaSection from '@/components/MetaSection'
import { cn } from '@/lib/utils'
import { DRAWER_SECTIONS } from '@/lib/data'

export default function DataDrawer({ open, onToggle }) {
  return (
    <aside
      className={cn(
        'flex flex-col shrink-0 bg-surface-warm border-r border-[#d8d2c7]',
        'transition-[width] duration-base overflow-hidden',
        open ? 'w-60' : 'w-10',
      )}
    >
      {/* Toggle button */}
      <div className="flex items-center h-10 shrink-0">
        {open && (
          <span className="flex-1 text-left px-3 text-label uppercase tracking-wide text-text-tertiary">Company info</span>
        )}
        <button
          type="button"
          onClick={onToggle}
          className="flex items-center justify-center m-1.5 p-1.5 rounded text-text-tertiary hover:text-text-primary hover:bg-canvas transition-colors duration-fast"
          aria-label={open ? 'Collapse drawer' : 'Expand drawer'}
        >
          <PanelRight size={14} />
        </button>
      </div>

      {/* Sections — only visible when expanded */}
      {open && (
        <TooltipProvider delayDuration={0}>
          <div className="flex-1 overflow-y-auto py-2">
            {DRAWER_SECTIONS.map((section) => (
              <MetaSection key={section.id} {...section} />
            ))}
          </div>
        </TooltipProvider>
      )}
    </aside>
  )
}
