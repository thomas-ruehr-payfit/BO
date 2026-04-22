import { useState, useRef, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { useNavigate } from 'react-router-dom'
import { ChevronDown, LogIn, ExternalLink, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import TopBarChip from '@/components/TopBarChip'
import { cn } from '@/lib/utils'
import { useCopyable } from '@/hooks/useCopyable'
import { COMPANIES, ORG_NAME, STATUS_CHIPS } from '@/lib/data'

const badgeChips    = STATUS_CHIPS.filter((c) => c.badge)
const metaChips     = STATUS_CHIPS.filter((c) => !c.badge && !c.technical)
const technicalChips = STATUS_CHIPS.filter((c) => c.technical)

function TechnicalChip({ label, fullValue }) {
  const { hovered, setHovered, copied, handleClick } = useCopyable(fullValue)
  return (
    <Tooltip open={copied ? true : undefined}>
      <div
        role="button"
        tabIndex={0}
        onClick={handleClick}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onKeyDown={(e) => e.key === 'Enter' && handleClick()}
        className="inline-flex items-center gap-1.5 text-caption font-mono shrink-0 whitespace-nowrap cursor-pointer"
      >
        <span className="text-text-secondary">{label}</span>
        <span className="text-text-secondary">·</span>
        <TooltipTrigger asChild>
          <span className={cn('text-text-primary', hovered && 'underline decoration-dashed underline-offset-2')}>
            {fullValue}
          </span>
        </TooltipTrigger>
      </div>
      {copied && (
        <TooltipContent side="bottom" className="bg-surface-2 text-text-primary border border-border shadow-sm text-caption px-2 py-1">
          Copied
        </TooltipContent>
      )}
    </Tooltip>
  )
}

function MetaCol({ label, value }) {
  return (
    <div className="flex flex-col items-start gap-1.5 px-5">
      <span className="text-label uppercase tracking-wide text-text-tertiary font-normal leading-none">
        {label}
      </span>
      <span className="text-body-sm font-semibold leading-none text-text-primary">
        {value}
      </span>
    </div>
  )
}

export default function CompanyTopBar({ company }) {
  const navigate = useNavigate()
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const triggerRef  = useRef(null)
  const [dropdownPos, setDropdownPos] = useState({ top: 0, left: 0 })

  useEffect(() => {
    if (dropdownOpen && triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect()
      setDropdownPos({ top: rect.bottom + 4, left: rect.left })
    }
  }, [dropdownOpen])

  useEffect(() => {
    if (!dropdownOpen) return
    function onKey(e) { if (e.key === 'Escape') setDropdownOpen(false) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [dropdownOpen])

  return (
    <TooltipProvider delayDuration={0}>
      <div className="bg-[#e8e2d7] border border-[#d8d2c7] rounded-xl shrink-0">

        {/* Technical strip */}
        <div className="flex items-center gap-4 px-4 py-1.5 overflow-hidden">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-caption text-text-secondary hover:text-text-primary transition-colors duration-fast shrink-0 mr-auto"
          >
            Billing Account
            <ExternalLink size={10} />
          </a>
          {technicalChips.map((chip) => (
            <TechnicalChip key={chip.label} label={chip.label} fullValue={chip.fullValue} />
          ))}
        </div>

        {/* White card */}
        <div
          className="relative flex items-center bg-surface-0 border border-[#d8d2c7] rounded-xl shadow-sm mx-[-1px] mb-[-1px]"
          style={{ minHeight: 68 }}
        >
          {/* Identity area */}
          <div className="flex flex-col items-start pl-5 pr-2 py-3 shrink-0 min-w-[250px]">
            {/* Org switcher trigger */}
            <button
              ref={triggerRef}
              type="button"
              onClick={() => setDropdownOpen((v) => !v)}
              className="flex items-center gap-1.5 px-1.5 py-0.5 -mx-1.5 rounded-md hover:bg-surface-1 transition-colors duration-fast"
            >
              <span className="text-body-sm font-medium text-text-secondary">{ORG_NAME}</span>
              <span className="text-label font-semibold text-text-secondary bg-surface-3 rounded px-1.5 pt-0.5 pb-[3px] leading-none">
                {COMPANIES.length}
              </span>
              <ChevronDown
                size={12}
                className={cn(
                  'text-text-tertiary transition-transform duration-fast',
                  dropdownOpen && 'rotate-180',
                )}
              />
            </button>

            {/* Company name — static */}
            <span className="text-h2 text-text-primary">{company.name}</span>
          </div>

          {/* Spacer */}
          <div className="flex-1" />

          {/* Right badges: Cycle + Status */}
          <div className="flex items-center gap-2 pr-4 shrink-0">
            {badgeChips.map((chip) => (
              <TopBarChip key={chip.label} {...chip} />
            ))}
          </div>

          {/* Right meta columns */}
          <div className="flex items-center border-l border-[#d8d2c7] shrink-0">
            {metaChips.map((chip, i) => (
              <div key={chip.label} className={cn('flex items-center', i < metaChips.length - 1 && 'border-r border-[#d8d2c7]')}>
                <MetaCol label={chip.label} value={chip.value} />
              </div>
            ))}
          </div>

          {/* Log In button */}
          <div className="pl-5 pr-4 flex items-center shrink-0">
            <Button size="sm" variant="outline" className="gap-1.5 text-body-sm">
              <LogIn size={13} />
              Log In
            </Button>
          </div>

          {/* Dropdown — portalled */}
          {dropdownOpen && createPortal(
            <>
              <div className="fixed inset-0 z-10" onClick={() => setDropdownOpen(false)} />
              <div
                className="fixed z-20 w-64 bg-surface-0 border border-border rounded-md shadow-md overflow-hidden"
                style={{ top: dropdownPos.top, left: dropdownPos.left }}
              >
                <div className="px-4 pt-3 pb-1.5">
                  <span className="text-label uppercase tracking-wide text-text-tertiary">{ORG_NAME}</span>
                </div>
                {COMPANIES.map((c) => (
                  <button
                    key={c.id}
                    type="button"
                    onClick={() => { navigate(`/companies/${c.id}`); setDropdownOpen(false) }}
                    className={cn(
                      'flex items-center gap-2 w-full px-4 py-2.5',
                      'hover:bg-surface-1 transition-colors duration-fast text-left',
                    )}
                  >
                    <div className="flex flex-col flex-1 min-w-0">
                      <span className={cn(
                        'text-body-sm',
                        company.id === c.id ? 'font-semibold text-text-primary' : 'font-medium text-text-primary',
                      )}>
                        {c.name}
                      </span>
                      <span className="text-caption font-semibold text-text-tertiary font-mono">{c.siret}</span>
                    </div>
                    {company.id === c.id && (
                      <Check size={13} className="text-text-secondary shrink-0" />
                    )}
                  </button>
                ))}
              </div>
            </>,
            document.body,
          )}
        </div>

      </div>
    </TooltipProvider>
  )
}
