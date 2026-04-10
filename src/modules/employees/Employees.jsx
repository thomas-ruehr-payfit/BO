import { LogIn, MoreHorizontal } from 'lucide-react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { cn } from '@/lib/utils'
import { EMPLOYEES, HEADCOUNT } from '@/lib/data'

// ── Status ──────────────────────────────────────────────────────────────────

const STATUS_DOT = {
  active:   'bg-status-active',
  inactive: 'bg-status-disabled',
  off:      'bg-status-invited',
}

const STATUS_LABEL = {
  active:   'Active',
  inactive: 'Inactive',
  off:      'Off',
}

// ── Contract badge ───────────────────────────────────────────────────────────

function ContractBadge({ type }) {
  return (
    <span
      className={cn(
        'text-label px-1.5 py-0.5 rounded',
        type === 'CDD'
          ? 'bg-accent-subtle text-accent'
          : 'bg-surface-3 text-text-secondary',
      )}
    >
      {type}
    </span>
  )
}

// ── Headcount chart ──────────────────────────────────────────────────────────

const CHART_HEIGHT = 56     // px, bar area
const LABEL_EVERY = 6       // show x-axis label every N bars

function HeadcountChart({ data }) {
  const max = Math.max(...data.map((d) => d.count))
  const barW = 8
  const barGap = 3
  const totalW = data.length * (barW + barGap) - barGap

  return (
    <div className="flex flex-col gap-1">
      <svg
        width={totalW}
        height={CHART_HEIGHT}
        viewBox={`0 0 ${totalW} ${CHART_HEIGHT}`}
        className="overflow-visible"
      >
        {data.map((d, i) => {
          const barH = Math.round((d.count / max) * CHART_HEIGHT)
          const x = i * (barW + barGap)
          const y = CHART_HEIGHT - barH
          const isLast = i === data.length - 1

          return (
            <rect
              key={d.month}
              x={x}
              y={y}
              width={barW}
              height={barH}
              rx={2}
              className={cn(
                isLast ? 'fill-accent' : 'fill-surface-3',
              )}
            />
          )
        })}
      </svg>

      {/* X-axis labels */}
      <div
        className="flex"
        style={{ width: totalW, gap: barGap }}
      >
        {data.map((d, i) => (
          <div
            key={d.month}
            style={{ width: barW, flexShrink: 0 }}
            className="relative"
          >
            {i % LABEL_EVERY === 0 && (
              <span
                className="absolute left-0 text-label text-text-tertiary whitespace-nowrap"
                style={{ fontSize: 9 }}
              >
                {d.month}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

// ── Employees module ─────────────────────────────────────────────────────────

export default function Employees() {
  const active = EMPLOYEES.filter((e) => e.status === 'active').length

  return (
    <section>
      {/* Header */}
      <div className="flex items-baseline justify-between mb-3">
        <h2 className="text-h4 text-text-primary">Employees</h2>
        <span className="text-caption text-text-tertiary">
          {EMPLOYEES.length} total · {active} active
        </span>
      </div>

      {/* Headcount chart */}
      <div className="rounded-md border border-border bg-surface-1 px-4 pt-4 pb-5 mb-4 overflow-x-auto">
        <p className="text-label text-text-tertiary uppercase mb-3">Headcount · Apr 2024 – Mar 2026</p>
        <HeadcountChart data={HEADCOUNT} />
      </div>

      {/* Table */}
      <div className="rounded-md border border-border overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-surface-1 hover:bg-surface-1">
              <TableHead className="text-label uppercase text-text-tertiary font-medium h-8 py-0 pl-4">Name</TableHead>
              <TableHead className="text-label uppercase text-text-tertiary font-medium h-8 py-0">Contract</TableHead>
              <TableHead className="text-label uppercase text-text-tertiary font-medium h-8 py-0">Role</TableHead>
              <TableHead className="text-label uppercase text-text-tertiary font-medium h-8 py-0">Status</TableHead>
              <TableHead className="text-label uppercase text-text-tertiary font-medium h-8 py-0">Start date</TableHead>
              <TableHead className="h-8 py-0 pr-3 w-px" />
            </TableRow>
          </TableHeader>
          <TableBody>
            {EMPLOYEES.map((emp) => (
              <TableRow
                key={emp.id}
                className="group hover:bg-surface-1 transition-colors duration-fast"
              >
                {/* Name */}
                <TableCell className="py-2.5 pl-4">
                  <span className="text-body-sm font-medium text-text-primary">
                    {emp.name}
                  </span>
                </TableCell>

                {/* Contract */}
                <TableCell className="py-2.5">
                  <ContractBadge type={emp.contract} />
                </TableCell>

                {/* Role */}
                <TableCell className="py-2.5 text-body-sm text-text-secondary">
                  {emp.role}
                </TableCell>

                {/* Status */}
                <TableCell className="py-2.5">
                  <div className="flex items-center gap-1.5">
                    <span
                      className={cn(
                        'h-1.5 w-1.5 rounded-full shrink-0',
                        STATUS_DOT[emp.status],
                      )}
                    />
                    <span className="text-body-sm text-text-secondary">
                      {STATUS_LABEL[emp.status]}
                    </span>
                  </div>
                </TableCell>

                {/* Start date */}
                <TableCell className="py-2.5 text-body-sm text-text-secondary font-mono">
                  {emp.start}
                </TableCell>

                {/* Actions */}
                <TableCell className="py-2.5 pr-3">
                  <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-fast">
                    <Button
                      size="sm"
                      variant="ghost"
                      className="gap-1.5 text-caption text-text-tertiary h-7 px-2"
                    >
                      <LogIn size={12} />
                      Login
                    </Button>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          size="sm"
                          variant="ghost"
                          className="h-7 w-7 p-0 text-text-tertiary"
                          aria-label="More actions"
                        >
                          <MoreHorizontal size={14} />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="text-body-sm">
                        <DropdownMenuItem>View profile</DropdownMenuItem>
                        <DropdownMenuItem>Edit</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-destructive">
                          {emp.status === 'inactive' ? 'Reactivate' : 'Disable'}
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </section>
  )
}
