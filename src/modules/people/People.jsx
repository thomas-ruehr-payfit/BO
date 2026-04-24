import { LogIn } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { TooltipProvider } from '@/components/ui/tooltip'
import { cn } from '@/lib/utils'
import ModuleHeader from '@/components/ModuleHeader'
import Pill from '@/components/Pill'
import CopyableId from '@/components/CopyableId'
import { PEOPLE, HEADCOUNT } from '@/lib/data'

const PORTAL_RANK = { admin: 1, manager: 2, accountant: 3, collaborator: 4 }

function personRank(person) {
  return Math.min(...person.portals.map((p) => PORTAL_RANK[p] ?? 99))
}

const SORTED_PEOPLE = [...PEOPLE].sort((a, b) => personRank(a) - personRank(b))

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

// ── Headcount chart ──────────────────────────────────────────────────────────

const CHART_HEIGHT = 56
const LABEL_EVERY  = 6

function HeadcountChart({ data }) {
  const max    = Math.max(...data.map((d) => d.count))
  const barW   = 8
  const barGap = 3
  const totalW = data.length * (barW + barGap) - barGap

  return (
    <div className="flex flex-col gap-1 w-full">
      <svg
        width="100%"
        height={CHART_HEIGHT}
        viewBox={`0 0 ${totalW} ${CHART_HEIGHT}`}
        preserveAspectRatio="none"
      >
        {data.map((d, i) => {
          const barH   = Math.round((d.count / max) * CHART_HEIGHT)
          const x      = i * (barW + barGap)
          const y      = CHART_HEIGHT - barH
          const isLast = i === data.length - 1
          return (
            <rect
              key={d.month}
              x={x} y={y}
              width={barW} height={barH}
              rx={2}
              className={cn(isLast ? 'fill-accent' : 'fill-surface-3')}
            />
          )
        })}
      </svg>
      <div className="flex w-full">
        {data.map((d, i) => (
          <div key={d.month} className="flex-1 relative">
            {i % LABEL_EVERY === 0 && (
              <span className="absolute left-0 text-text-tertiary whitespace-nowrap" style={{ fontSize: 9 }}>
                {d.month}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

// ── People module ────────────────────────────────────────────────────────────

export default function PeopleModule() {
  const active = PEOPLE.filter((p) => p.status === 'active').length

  return (
    <TooltipProvider delayDuration={0}>
      <section>
        <ModuleHeader title="People">
          <span className="text-caption text-text-tertiary">
            {PEOPLE.length} total · {active} active
          </span>
        </ModuleHeader>

        {/* Headcount chart */}
        <div className="rounded-md border border-border bg-surface-1 px-4 pt-4 pb-5 mb-4">
          <p className="text-label text-text-tertiary uppercase mb-3">Headcount · Apr 2024 – Mar 2026</p>
          <HeadcountChart data={HEADCOUNT} />
        </div>

        {/* People list */}
        <div className="rounded-xl border border-border-warm bg-surface-0 divide-y divide-border-warm overflow-hidden">
          {SORTED_PEOPLE.map((person) => (
            <div key={person.id} className="flex items-center gap-3 px-4 py-3">

              {/* Identity */}
              <div className="flex flex-col gap-0.5 min-w-0 w-44 shrink-0">
                <span className="text-body-sm font-medium text-text-primary leading-snug">{person.name}</span>
                <span className="text-caption text-text-tertiary truncate">{person.email}</span>
              </div>

              {/* Status */}
              <div className="flex items-center gap-1.5 w-20 shrink-0">
                <span className={cn('h-1.5 w-1.5 rounded-full shrink-0', STATUS_DOT[person.status])} />
                <span className="text-caption text-text-secondary">{STATUS_LABEL[person.status]}</span>
              </div>

              {/* Portal badges */}
              <div className="flex items-center gap-1.5 flex-1">
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

              {/* Copyable ID */}
              <CopyableId uid={person.uid} full />

              {/* Sign in as */}
              <Button
                size="sm"
                variant="ghost"
                className="gap-1.5 text-caption text-text-secondary hover:text-text-primary hover:bg-surface-1 h-7 px-2 shrink-0"
              >
                <LogIn size={12} />
                Sign in as
              </Button>
            </div>
          ))}
        </div>
      </section>
    </TooltipProvider>
  )
}
