import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ChevronDown, LogIn, LayoutGrid } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { TooltipProvider } from '@/components/ui/tooltip'
import TopBarChip from '@/components/TopBarChip'
import { cn } from '@/lib/utils'
import { COMPANIES, ORG_NAME, STATUS_CHIPS } from '@/lib/data'

export default function CompanyTopBar({ company }) {
  const navigate = useNavigate()
  const [dropdownOpen, setDropdownOpen] = useState(false)

  return (
    <TooltipProvider delayDuration={0}>
      <div
        className="relative flex items-center gap-0 border-b border-border bg-surface-0 shrink-0"
        style={{ minHeight: 56 }}
      >
        {/* Identity — opens switcher */}
        <button
          type="button"
          onClick={() => setDropdownOpen((v) => !v)}
          className="flex items-center gap-2 px-4 h-full hover:bg-surface-1 transition-colors duration-fast border-r border-border shrink-0"
        >
          <div className="flex flex-col items-start">
            <span className="text-label text-text-tertiary uppercase">{ORG_NAME}</span>
            <div className="flex items-center gap-1.5">
              <span className="text-body font-semibold text-text-primary">{company.name}</span>
              <span className="text-caption text-text-tertiary">{COMPANIES.length} companies</span>
            </div>
          </div>
          <ChevronDown
            size={14}
            className={cn(
              'text-text-tertiary transition-transform duration-fast',
              dropdownOpen && 'rotate-180',
            )}
          />
        </button>

        {/* Chip row */}
        <div className="flex items-center flex-1 overflow-x-auto px-2">
          {STATUS_CHIPS.map((chip) => (
            <div key={chip.label} className="flex items-center">
              <TopBarChip {...chip} />
              {chip.dividerAfter && (
                <Separator orientation="vertical" className="mx-1 h-6" />
              )}
            </div>
          ))}
        </div>

        {/* Connect button */}
        <div className="px-3 shrink-0">
          <Button size="sm" variant="outline" className="gap-1.5 text-body-sm">
            <LogIn size={13} />
            Log In
          </Button>
        </div>

        {/* Dropdown */}
        {dropdownOpen && (
          <>
            <div className="fixed inset-0 z-10" onClick={() => setDropdownOpen(false)} />
            <div className="absolute top-full left-0 z-20 mt-1 w-80 bg-surface-0 border border-border rounded-md shadow-md overflow-hidden">
              {/* All companies */}
              <button
                type="button"
                onClick={() => { navigate('/companies'); setDropdownOpen(false) }}
                className="flex items-center gap-2 w-full px-4 py-2.5 border-b border-border hover:bg-surface-1 transition-colors duration-fast text-left"
              >
                <LayoutGrid size={13} className="text-text-tertiary shrink-0" />
                <span className="text-caption text-text-secondary">All companies</span>
              </button>

              {/* Company list */}
              {COMPANIES.map((c) => (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => { navigate(`/companies/${c.id}`); setDropdownOpen(false) }}
                  className={cn(
                    'flex items-center justify-between w-full px-4 py-2.5',
                    'hover:bg-surface-1 transition-colors duration-fast text-left',
                    company.id === c.id && 'bg-accent-subtle',
                  )}
                >
                  <span className={cn('text-body-sm font-medium', company.id === c.id ? 'text-accent' : 'text-text-primary')}>
                    {c.name}
                  </span>
                  <span className="text-caption text-text-tertiary font-mono">{c.siret}</span>
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </TooltipProvider>
  )
}
