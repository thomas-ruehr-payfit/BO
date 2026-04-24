import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Calendar, Search, TriangleAlert, User, X } from 'lucide-react'
import { TooltipProvider } from '@/components/ui/tooltip'
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from '@/components/ui/select'
import { cn } from '@/lib/utils'
import { ORGANISATIONS } from '@/lib/data'

// January 2015 = 1, April 2026 = 136
const MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
]

function absMonthToLabel(absMonth) {
  const m = absMonth - 1
  const year = String(2015 + Math.floor(m / 12)).slice(-2)
  const month = MONTH_NAMES[m % 12]
  return `${month} ${year} (${absMonth})`
}

const STATUS_DOT = {
  active:   'bg-status-active',
  inactive: 'bg-status-disabled',
}

const STATUS_LABEL = {
  active:   'Active',
  inactive: 'Inactive',
}

function CycleChip({ absMonth, daysLate }) {
  const warn = daysLate !== null
  return (
    <span className={cn(
      'inline-flex items-center gap-1 px-1.5 py-0.5 rounded border text-caption leading-none shrink-0 overflow-hidden',
      warn
        ? 'bg-feedback-warn-subtle border-feedback-warn/20 text-feedback-warn'
        : 'bg-feedback-info-subtle border-feedback-info/20 text-feedback-info',
    )}>
      <Calendar size={11} strokeWidth={2.5} className="shrink-0" />
      <span>{absMonthToLabel(absMonth)}</span>
      {warn && (
        <span className="inline-flex items-center gap-0.5 pl-1 ml-0.5 border-l border-feedback-warn/25">
          <TriangleAlert size={10} strokeWidth={2.5} className="shrink-0" />
          <span>+{daysLate} days</span>
        </span>
      )}
    </span>
  )
}

function Badge({ children, className }) {
  return (
    <span className={cn(
      'inline-flex items-center gap-1 px-1.5 py-0.5 rounded border border-border text-caption leading-none shrink-0',
      className,
    )}>
      {children}
    </span>
  )
}

function Siret({ siret }) {
  const siren = siret.slice(0, 9)
  const nic   = siret.slice(9)
  return (
    <span className="font-mono text-caption text-text-tertiary">
      <span className="font-semibold text-text-secondary">{siren}</span>
      {nic}
    </span>
  )
}

function FilterSelect({ value, onValueChange, placeholder, children }) {
  return (
    <Select value={value} onValueChange={onValueChange}>
      <SelectTrigger className={cn(
        'h-8 px-2.5 gap-1.5 text-caption border-border bg-surface-0 shrink-0 w-auto min-w-[90px]',
        'hover:bg-surface-1 transition-colors duration-fast focus:ring-0 shadow-none',
        value !== 'all' && 'border-text-secondary text-text-primary',
      )}>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent className="text-caption">
        {children}
      </SelectContent>
    </Select>
  )
}

// Size bucket matching
function matchesSize(employees, bucket) {
  if (bucket === 'all')  return true
  if (bucket === '0-3')  return employees <= 3
  if (bucket === '4-10') return employees >= 4 && employees <= 10
  if (bucket === '11-25') return employees >= 11 && employees <= 25
  if (bucket === '25+')  return employees > 25
  return true
}

export default function CompanyList() {
  const navigate = useNavigate()
  const [query,        setQuery]        = useState('')
  const [filterCycle,  setFilterCycle]  = useState('all')
  const [filterStatus, setFilterStatus] = useState('all')
  const [filterSize,   setFilterSize]   = useState('all')

  const hasFilters = query.trim() || filterCycle !== 'all' || filterStatus !== 'all' || filterSize !== 'all'

  function clearFilters() {
    setQuery('')
    setFilterCycle('all')
    setFilterStatus('all')
    setFilterSize('all')
  }

  const total = ORGANISATIONS.reduce((acc, org) => acc + org.companies.length, 0)

  const filteredOrgs = ORGANISATIONS
    .map((org) => ({
      ...org,
      companies: org.companies.filter((company) => {
        if (query.trim()) {
          const q = query.toLowerCase()
          const matches =
            company.name.toLowerCase().includes(q) ||
            org.name.toLowerCase().includes(q) ||
            company.siret.includes(query.trim())
          if (!matches) return false
        }
        if (filterCycle === 'on-time' && company.cycle.daysLate !== null) return false
        if (filterCycle === 'late'    && company.cycle.daysLate === null)  return false
        if (filterStatus !== 'all' && company.status !== filterStatus) return false
        if (!matchesSize(company.employees, filterSize)) return false
        return true
      }),
    }))
    .filter((org) => org.companies.length > 0)

  const totalVisible = filteredOrgs.reduce((acc, org) => acc + org.companies.length, 0)

  return (
    <TooltipProvider delayDuration={0}>
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-3xl mx-auto px-8 py-10">

          {/* Header */}
          <div className="mb-6">
            <h1 className="text-h2 text-text-primary">Companies</h1>
            <p className="text-caption text-text-tertiary mt-1">
              {hasFilters
                ? `${totalVisible} of ${total} companies`
                : `${total} companies · ${ORGANISATIONS.length} organisations`}
            </p>
          </div>

          {/* Search + filters */}
          <div className="flex items-center gap-2 mb-6">
            <div className="relative flex-1">
              <Search size={13} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-text-tertiary pointer-events-none" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by company, organisation or SIRET…"
                className={cn(
                  'w-full h-8 pl-8 pr-3 rounded-md border border-border text-caption',
                  'bg-surface-0 text-text-primary placeholder:text-text-tertiary',
                  'focus:outline-none focus:border-black/20 transition-colors duration-fast',
                )}
              />
            </div>

            <FilterSelect value={filterCycle} onValueChange={setFilterCycle} placeholder="Cycle">
              <SelectItem value="all">All cycles</SelectItem>
              <SelectItem value="on-time">On time</SelectItem>
              <SelectItem value="late">Late</SelectItem>
            </FilterSelect>

            <FilterSelect value={filterStatus} onValueChange={setFilterStatus} placeholder="Status">
              <SelectItem value="all">All statuses</SelectItem>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="inactive">Inactive</SelectItem>
            </FilterSelect>

            <FilterSelect value={filterSize} onValueChange={setFilterSize} placeholder="Size">
              <SelectItem value="all">All sizes</SelectItem>
              <SelectItem value="0-3">0–3 employees</SelectItem>
              <SelectItem value="4-10">4–10 employees</SelectItem>
              <SelectItem value="11-25">10–25 employees</SelectItem>
              <SelectItem value="25+">25+ employees</SelectItem>
            </FilterSelect>

            {hasFilters && (
              <button
                type="button"
                onClick={clearFilters}
                className="flex items-center gap-1 h-8 px-2 text-caption text-text-tertiary hover:text-text-primary transition-colors duration-fast shrink-0"
              >
                <X size={12} />
                Clear
              </button>
            )}
          </div>

          {/* Results */}
          {filteredOrgs.length === 0 ? (
            <p className="text-caption text-text-tertiary text-center py-12">No companies match your search.</p>
          ) : (
            <div className="flex flex-col gap-8">
              {filteredOrgs.map((org) => (
                <div key={org.id}>
                  <p className="text-label uppercase tracking-wide text-text-tertiary mb-2 px-1">
                    {org.name}
                  </p>
                  <div className="rounded-xl border border-border-warm bg-surface-0 divide-y divide-border-warm overflow-hidden">
                    {org.companies.map((company) => (
                      <button
                        key={company.id}
                        type="button"
                        onClick={() => navigate(`/companies/${company.id}`)}
                        className="group flex items-center w-full px-5 py-3.5 hover:bg-surface-1 transition-colors duration-fast text-left"
                      >
                        {/* Left: SIRET + name */}
                        <div className="flex-1 min-w-0 flex flex-col gap-0.5">
                          <Siret siret={company.siret} />
                          <span className="text-h3 text-text-primary leading-snug">{company.name}</span>
                        </div>

                        {/* Right: badges */}
                        <div className="flex items-center gap-1.5 shrink-0 ml-4">
                          <CycleChip absMonth={company.cycle.absMonth} daysLate={company.cycle.daysLate} />
                          <Badge className={cn(
                            company.status === 'active'
                              ? 'bg-status-active/10 border-status-active/20 text-status-active'
                              : 'bg-surface-1 text-text-tertiary',
                          )}>
                            <span className={cn('h-1.5 w-1.5 rounded-full shrink-0', STATUS_DOT[company.status])} />
                            {STATUS_LABEL[company.status]}
                          </Badge>
                          <Badge className="bg-surface-1 text-text-secondary">
                            <User size={10} className="text-text-tertiary shrink-0" />
                            {company.employees}
                          </Badge>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>
      </div>
    </TooltipProvider>
  )
}
