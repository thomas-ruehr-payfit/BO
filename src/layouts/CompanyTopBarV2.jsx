import { useState, useRef, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { useNavigate } from 'react-router-dom'
import { ChevronDown, LogIn, ExternalLink, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import TopBarChip from '@/components/TopBarChip'
import CountryFlag from '@/components/CountryFlag'
import { cn } from '@/lib/utils'
import { useCopyable } from '@/hooks/useCopyable'
import { COMPANIES, ORG_NAME, STATUS_CHIPS } from '@/lib/data'

const badgeChips     = STATUS_CHIPS.filter((c) => c.badge)
const metaChips      = STATUS_CHIPS.filter((c) => !c.badge && !c.technical)
const technicalChips = STATUS_CHIPS.filter((c) => c.technical)

function formatMetaValue(chip) {
  if (chip.label === 'Employees') return `${chip.value} Collaborators`
  return chip.value
}

function TechnicalBlock({ label, fullValue }) {
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
        className="inline-flex items-center gap-0.5 cursor-pointer"
      >
        <span className="text-caption text-text-secondary">{label}</span>
        <span className="text-caption text-text-tertiary">·</span>
        <TooltipTrigger asChild>
          <span className={cn(
            'text-caption font-mono text-text-primary',
            hovered && 'underline decoration-dashed underline-offset-2',
          )}>
            {fullValue}
          </span>
        </TooltipTrigger>
      </div>
      {copied && (
        <TooltipContent side="bottom" className="bg-black !text-white border-0 text-caption px-2 py-1">
          Copied !
        </TooltipContent>
      )}
    </Tooltip>
  )
}

export default function CompanyTopBarV2({ company }) {
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
      <div className="flex flex-col shrink-0 px-1">

        {/* Row 1: Org switcher */}
        <button
          ref={triggerRef}
          type="button"
          onClick={() => setDropdownOpen((v) => !v)}
          className="flex items-center gap-1.5 px-1.5 py-0.5 -mx-1.5 w-fit rounded-md hover:bg-surface-1 transition-colors duration-fast"
        >
          <span className="text-body-sm font-medium text-text-secondary">{ORG_NAME}</span>
          <span className="text-label font-semibold text-text-secondary bg-surface-3 rounded px-1.5 pt-0.5 pb-[3px] leading-none">
            {COMPANIES.length}
          </span>
          <ChevronDown
            size={12}
            className={cn('text-text-tertiary transition-transform duration-fast', dropdownOpen && 'rotate-180')}
          />
        </button>

        {/* Row 2: Company name + badges + Login */}
        <div className="flex items-center gap-3 mt-2">
          <CountryFlag code={company.country} size="md" />
          <span className="text-h2 text-text-primary">{company.name}</span>
          <div className="flex items-center gap-2 shrink-0">
            {badgeChips.map((chip) => (
              <TopBarChip key={chip.label ?? chip.value} {...chip} />
            ))}
          </div>
          <div className="ml-auto shrink-0">
            <Button size="sm" variant="outline" className="gap-1.5 text-body-sm text-text-primary hover:bg-surface-1 hover:text-text-primary">
              <LogIn size={13} />
              Log In
            </Button>
          </div>
        </div>

        {/* Row 3: Inline meta */}
        <div className="flex items-center text-body-sm text-text-secondary mt-1">
          {metaChips.map((chip, i) => (
            <span key={chip.label ?? chip.value} className="flex items-center">
              {i > 0 && <span className="mx-2 text-text-tertiary select-none">|</span>}
              <span>{formatMetaValue(chip)}</span>
            </span>
          ))}
        </div>

        {/* Row 4: Technical strip */}
        <div className="inline-flex self-start items-center gap-4 -mx-1 px-2 py-1 mt-5 mb-6 bg-surface-topbar rounded text-caption">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-caption text-text-secondary hover:text-text-primary transition-colors duration-fast shrink-0"
          >
            Billing Account
            <ExternalLink size={10} />
          </a>
          {technicalChips.map((chip) => (
            <TechnicalBlock key={chip.label} label={chip.label} fullValue={chip.fullValue} />
          ))}
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
                  <CountryFlag code={c.country} size="sm" />
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
    </TooltipProvider>
  )
}
