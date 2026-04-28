import { useState } from 'react'
import { X, FileDown, Eye } from 'lucide-react'
import { TooltipProvider } from '@/components/ui/tooltip'
import { Button } from '@/components/ui/button'
import MetaSection from '@/components/MetaSection'
import Pill from '@/components/Pill'
import { cn } from '@/lib/utils'
import { CURRENT_PAYROLL_CYCLE } from '@/lib/data'

const STATUS_DOT = {
  active:   'bg-status-active',
  invited:  'bg-status-invited',
  disabled: 'bg-status-disabled',
}

const STATUS_LABEL = {
  active:   'Active',
  invited:  'Invited',
  disabled: 'Disabled',
}

const PORTAL_STYLES = {
  admin:        'bg-badge-admin-subtle text-badge-admin',
  manager:      'bg-feedback-info-subtle text-feedback-info',
  accountant:   'bg-badge-accountant-subtle text-badge-accountant',
  collaborator: 'bg-surface-3 text-text-secondary',
}

const PORTAL_LABEL = {
  admin:        'Admin',
  manager:      'Manager',
  accountant:   'Accountant',
  collaborator: 'Collaborator',
}

const CONTRACT_STYLES = {
  CDI: 'bg-surface-3 text-text-secondary',
  CDD: 'bg-accent-subtle text-text-primary',
}

// Mocked payslip rows — each has a type and label width
const MOCK_ROWS = [
  { type: 'section' },
  { type: 'row', w: 'w-3/5' },
  { type: 'row', w: 'w-1/2' },
  { type: 'row', w: 'w-2/3' },
  { type: 'gap' },
  { type: 'section' },
  { type: 'row', w: 'w-3/4' },
  { type: 'row', w: 'w-2/5' },
  { type: 'row', w: 'w-3/5' },
  { type: 'row', w: 'w-1/2' },
  { type: 'row', w: 'w-2/3' },
  { type: 'gap' },
  { type: 'section' },
  { type: 'row', w: 'w-2/5' },
  { type: 'row', w: 'w-1/2' },
  { type: 'row', w: 'w-3/5' },
  { type: 'gap' },
  { type: 'total' },
]

export default function PersonDrawer({ person, onClose }) {
  const [viewerOpen, setViewerOpen] = useState(false)

  if (!person) return null

  const personalRows = [
    { label: 'Gender',              value: person.gender },
    { label: 'Date of birth',       value: person.dob },
    { label: 'Nationality',         value: person.nationality },
    { label: 'Social security no.', value: person.ssn ?? '—' },
    { label: 'Address',             value: person.address },
  ]

  const contractRows = [
    { label: 'Job title',   value: person.jobTitle },
    { label: 'Department',  value: person.department },
    { label: 'Start date',  value: person.startDate ?? '—' },
    ...(person.contract === 'CDD' ? [{ label: 'End date', value: person.endDate ?? '—' }] : []),
    { label: 'Base salary', value: person.salary },
  ]

  const impactors = person.payrollImpactors
  const payrollRows = impactors
    ? [
        ...impactors.absences,
        ...impactors.bonuses,
      ]
    : []

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-40 bg-black/20"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Panel */}
      <aside className={cn(
        'fixed top-0 right-0 z-50 h-full bg-surface-1 border-l border-border flex flex-row shadow-xl transition-[width] duration-base overflow-hidden',
        viewerOpen ? 'w-[1008px]' : 'w-[360px]',
      )}>

        {/* Left column — person details */}
        <div className="w-[360px] shrink-0 flex flex-col h-full border-r border-border">

          {/* Header */}
          <div className="flex items-start justify-between px-4 pt-4 pb-3 border-b border-border shrink-0">
            <div className="flex flex-col gap-0.5 min-w-0 pr-3">
              <span className="text-h3 text-text-primary leading-snug">{person.name}</span>
              <span className="text-caption text-text-tertiary">{person.email}</span>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="flex items-center justify-center p-1.5 rounded text-text-tertiary hover:text-text-primary hover:bg-surface-2 transition-colors duration-fast shrink-0 mt-0.5"
              aria-label="Close panel"
            >
              <X size={14} />
            </button>
          </div>

          {/* Indicators */}
          <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-border shrink-0 flex-wrap">
            <div className="flex items-center gap-1.5 mr-1">
              <span className={cn('h-1.5 w-1.5 rounded-full shrink-0', STATUS_DOT[person.status])} />
              <span className="text-caption text-text-secondary">{STATUS_LABEL[person.status]}</span>
            </div>
            {person.portals.map((portal) => (
              <Pill key={portal} className={PORTAL_STYLES[portal]}>
                {PORTAL_LABEL[portal]}
              </Pill>
            ))}
            {person.contract && (
              <Pill className={CONTRACT_STYLES[person.contract]}>
                {person.contract}
              </Pill>
            )}
          </div>

          {/* Payslip button */}
          <div className="px-3 py-2.5 border-b border-border shrink-0">
            <Button
              variant="outline"
              size="sm"
              className="w-full gap-1.5 text-caption text-text-secondary hover:text-white justify-center"
              onClick={() => setViewerOpen(v => !v)}
            >
              <Eye size={13} />
              {viewerOpen
                ? `Hide ${CURRENT_PAYROLL_CYCLE.split(' ')[0]} payslip`
                : `Show ${CURRENT_PAYROLL_CYCLE.split(' ')[0]} payslip`}
            </Button>
          </div>

          {/* Sections */}
          <TooltipProvider delayDuration={0}>
            <div className="flex-1 overflow-y-auto py-2">
              <MetaSection title="Personal information" defaultOpen rows={personalRows} />
              <MetaSection title="Contract information" defaultOpen rows={contractRows} />
              {payrollRows.length > 0 && (
                <MetaSection
                  title="Payroll impactors"
                  badge={{ label: CURRENT_PAYROLL_CYCLE, variant: 'neutral' }}
                  defaultOpen
                  rows={payrollRows}
                />
              )}
            </div>
          </TooltipProvider>
        </div>

        {/* Right column — payslip viewer */}
        {viewerOpen && (
          <div className="flex-1 flex flex-col h-full bg-black overflow-hidden">
            {/* Viewer header */}
            <div className="flex items-center justify-between px-5 py-3 border-b border-white/10 shrink-0">
              <span className="text-label uppercase text-white/40 font-medium tracking-wide">
                {CURRENT_PAYROLL_CYCLE} · Payslip
              </span>
              <button
                type="button"
                className="flex items-center gap-1.5 text-label text-white/50 hover:text-white transition-colors duration-fast"
              >
                <FileDown size={12} />
                Download
              </button>
            </div>

            {/* A4 document */}
            <div className="flex-1 overflow-y-auto p-6">
              <div className="bg-white w-full aspect-[210/297] shadow-2xl p-8 flex flex-col">

                {/* Doc header */}
                <div className="flex justify-between items-start pb-5 mb-5 border-b border-[#e2e2e5]">
                  <div className="flex flex-col gap-1.5">
                    <div className="h-2.5 w-28 bg-[#E3E3E3] rounded" />
                    <div className="h-2 w-20 bg-[#EBEBEB] rounded" />
                  </div>
                  <div className="text-right">
                    <p className="text-xs font-semibold text-[#1D1D1D] leading-snug">{CURRENT_PAYROLL_CYCLE} — Payslip</p>
                    <p className="text-xs text-[#686663] mt-0.5">{person.name}</p>
                  </div>
                </div>

                {/* Line items */}
                <div className="flex flex-col gap-2 flex-1">
                  {MOCK_ROWS.map((row, i) => {
                    if (row.type === 'gap') return <div key={i} className="h-2" />
                    if (row.type === 'section') return (
                      <div key={i} className="h-2.5 w-2/5 bg-[#E3E3E3] rounded mt-1 mb-0.5" />
                    )
                    if (row.type === 'total') return (
                      <div key={i} className="flex justify-between items-center pt-3 mt-1 border-t border-[#e2e2e5]">
                        <div className="h-3 w-1/3 bg-[#1D1D1D]/15 rounded" />
                        <div className="h-3 w-14 bg-[#1D1D1D]/20 rounded" />
                      </div>
                    )
                    return (
                      <div key={i} className="flex justify-between items-center">
                        <div className={cn('h-2 bg-[#EBEBEB] rounded', row.w)} />
                        <div className="h-2 w-10 bg-[#EBEBEB] rounded shrink-0" />
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        )}
      </aside>
    </>
  )
}
