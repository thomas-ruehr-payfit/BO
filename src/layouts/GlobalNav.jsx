import { useState, useRef, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import {
  Building2, FileText, FolderOpen, CreditCard,
  Clock, Settings, User, Users, FlaskConical,
  PanelLeft, Search,
} from 'lucide-react'
import { Separator } from '@/components/ui/separator'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { cn } from '@/lib/utils'
import { COMPANIES } from '@/lib/data'

const ICON_MAP = { Building2, FileText, FolderOpen, CreditCard, Clock, Settings, User, Users, FlaskConical }

const TOP = [
  { id: 'companies', label: 'Companies', icon: 'Building2', path: '/companies' },
]

const MIDDLE = [
  { id: 'declarations', label: 'Declarations', icon: 'FileText',   path: '/declarations' },
  { id: 'documents',    label: 'Documents',    icon: 'FolderOpen', path: '/documents' },
  { id: 'billing',      label: 'Billing',      icon: 'CreditCard', path: '/billing' },
  { id: 'activity',     label: 'Activity',     icon: 'Clock',      path: '/activity' },
]

const BOTTOM = [
  { id: 'users',    label: 'Users',    icon: 'Users',        path: '/users' },
  { id: 'settings', label: 'Settings', icon: 'Settings',     path: '/settings' },
  { id: 'account',  label: 'Account',  icon: 'User',         path: '/account' },
  { id: 'test',     label: 'TEST',     icon: 'FlaskConical', path: '/test' },
]

function activeSpace(pathname) {
  if (pathname.startsWith('/companies'))    return 'companies'
  if (pathname.startsWith('/declarations')) return 'declarations'
  if (pathname.startsWith('/documents'))    return 'documents'
  if (pathname.startsWith('/billing'))      return 'billing'
  if (pathname.startsWith('/activity'))     return 'activity'
  if (pathname.startsWith('/settings'))     return 'settings'
  if (pathname.startsWith('/users'))        return 'users'
  if (pathname.startsWith('/account'))      return 'account'
  if (pathname.startsWith('/test'))         return 'test'
  return null
}

function NavItem({ item, active, expanded, onClick }) {
  const Icon = ICON_MAP[item.icon]
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <button
          type="button"
          onClick={onClick}
          className={cn(
            'flex items-center gap-3 w-full rounded px-2 py-2',
            'transition-colors duration-fast text-left',
            active
              ? 'bg-black/[0.07] text-text-primary'
              : 'text-text-secondary hover:bg-black/[0.04] hover:text-text-primary',
          )}
        >
          <Icon size={16} className="shrink-0" />
          {expanded && (
            <span className="text-body-sm font-medium truncate">{item.label}</span>
          )}
        </button>
      </TooltipTrigger>
      {!expanded && (
        <TooltipContent side="right" className="bg-black !text-white border-0 text-caption px-2 py-1">
          {item.label}
        </TooltipContent>
      )}
    </Tooltip>
  )
}

// ── Company search ────────────────────────────────────────────────────────────

function CompanySearch({ expanded, onExpand, onNavigate }) {
  const [query,  setQuery]  = useState('')
  const [open,   setOpen]   = useState(false)
  const inputRef = useRef(null)
  const wrapRef  = useRef(null)

  const results = query.trim()
    ? COMPANIES.filter((c) =>
        c.name.toLowerCase().includes(query.toLowerCase()) ||
        c.siret.includes(query)
      )
    : []

  // Close dropdown on outside click
  useEffect(() => {
    function handler(e) {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) {
        setOpen(false)
        setQuery('')
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  function handleIconClick() {
    if (!expanded) {
      onExpand()
      // Focus input after expand animation
      setTimeout(() => inputRef.current?.focus(), 160)
    } else {
      inputRef.current?.focus()
    }
  }

  function handleSelect(company) {
    onNavigate(`/companies/${company.id}`)
    setOpen(false)
    setQuery('')
  }

  return (
    <div ref={wrapRef} className="relative px-2 py-1">
      {expanded ? (
        /* Expanded — text input */
        <div className="relative">
          <Search size={12} className="absolute left-2 top-1/2 -translate-y-1/2 text-text-tertiary pointer-events-none" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => { setQuery(e.target.value); setOpen(true) }}
            onFocus={() => query && setOpen(true)}
            placeholder="Search companies…"
            className={cn(
              'w-full pl-6 pr-2 py-1.5 rounded text-caption bg-black/[0.04]',
              'border border-transparent focus:border-black/20 focus:outline-none',
              'text-text-primary placeholder:text-text-tertiary',
              'transition-colors duration-fast',
            )}
          />
        </div>
      ) : (
        /* Collapsed — icon button */
        <Tooltip>
          <TooltipTrigger asChild>
            <button
              type="button"
              onClick={handleIconClick}
              className="flex items-center justify-center w-8 h-8 rounded text-text-tertiary hover:bg-black/[0.04] hover:text-text-primary transition-colors duration-fast"
              aria-label="Search companies"
            >
              <Search size={15} />
            </button>
          </TooltipTrigger>
          <TooltipContent side="right" className="bg-black !text-white border-0 text-caption px-2 py-1">
            Search
          </TooltipContent>
        </Tooltip>
      )}

      {/* Results dropdown */}
      {open && results.length > 0 && (
        <div className="absolute left-2 right-2 top-full mt-1 z-50 bg-surface-0 border border-black/10 rounded-md shadow-md overflow-hidden">
          {results.map((company) => (
            <button
              key={company.id}
              type="button"
              onMouseDown={(e) => e.preventDefault()} // prevent blur before click
              onClick={() => handleSelect(company)}
              className="flex flex-col w-full px-3 py-2 text-left hover:bg-black/[0.04] transition-colors duration-fast"
            >
              <span className="text-caption font-medium text-text-primary truncate">{company.name}</span>
              <span className="text-label font-mono text-text-tertiary">{company.siret}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

// ── GlobalNav ─────────────────────────────────────────────────────────────────

export default function GlobalNav() {
  const navigate = useNavigate()
  const location = useLocation()
  const [expanded, setExpanded] = useState(false)
  const space = activeSpace(location.pathname)

  return (
    <TooltipProvider delayDuration={300}>
    <nav
      className={cn(
        'flex flex-col shrink-0 bg-surface-0 sticky top-0 h-screen',
        'transition-[width] duration-base overflow-hidden',
        expanded ? 'w-44' : 'w-12',
      )}
    >
      {/* Org avatar + collapse toggle (when expanded) */}
      <div className="flex items-center justify-between px-2 py-3 shrink-0">
        <div className="flex items-center justify-center h-8 w-8 rounded bg-black/[0.07] text-label font-semibold text-text-secondary shrink-0">
          F
        </div>
        {expanded && (
          <button
            type="button"
            onClick={() => setExpanded(false)}
            className="flex items-center justify-center h-8 w-8 rounded text-text-tertiary hover:text-text-primary hover:bg-black/[0.04] transition-colors duration-fast"
            aria-label="Collapse nav"
          >
            <PanelLeft size={14} />
          </button>
        )}
      </div>

      <Separator className="bg-black/[0.08]" />

      {/* Expand toggle — only shown when collapsed */}
      {!expanded && (
        <button
          type="button"
          onClick={() => setExpanded(true)}
          className="flex items-center justify-center h-9 shrink-0 text-text-tertiary hover:text-text-primary hover:bg-black/[0.04] transition-colors duration-fast"
          aria-label="Expand nav"
        >
          <PanelLeft size={14} />
        </button>
      )}

      {/* Search + Companies */}
      <div className="flex flex-col gap-0.5 px-0 py-2 shrink-0">
        <CompanySearch
          expanded={expanded}
          onExpand={() => setExpanded(true)}
          onNavigate={navigate}
        />
        {TOP.map((item) => (
          <div key={item.id} className="px-2">
            <NavItem
              item={item}
              active={space === item.id}
              expanded={expanded}
              onClick={() => navigate(item.path)}
            />
          </div>
        ))}
      </div>

      <Separator className="bg-black/[0.08]" />

      {/* Middle — Global overview */}
      <div className="flex-1 flex flex-col justify-center gap-0.5 px-2 py-2 overflow-hidden">
        {expanded && (
          <span className="px-2 pb-0.5 text-label text-text-tertiary uppercase tracking-wide">
            Global overview
          </span>
        )}
        {MIDDLE.map((item) => (
          <NavItem
            key={item.id}
            item={item}
            active={space === item.id}
            expanded={expanded}
            onClick={() => navigate(item.path)}
          />
        ))}
      </div>

      <Separator className="bg-black/[0.08]" />

      {/* Bottom — Timeline / Settings / Account */}
      <div className="flex flex-col gap-0.5 px-2 py-2 shrink-0">
        {BOTTOM.map((item) => (
          <NavItem
            key={item.id}
            item={item}
            active={space === item.id}
            expanded={expanded}
            onClick={() => navigate(item.path)}
          />
        ))}
      </div>

    </nav>
    </TooltipProvider>
  )
}
