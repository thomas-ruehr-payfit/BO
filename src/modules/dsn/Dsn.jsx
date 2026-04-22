import { useState } from 'react'
import { Eye, Download } from 'lucide-react'
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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Switch } from '@/components/ui/switch'
import { cn } from '@/lib/utils'
import { TH_CLS, TR_CLS } from '@/lib/constants'
import ModuleHeader from '@/components/ModuleHeader'
import Pill from '@/components/Pill'
import { DSN_SECTIONS, DSN_MONTHS } from '@/lib/data'

const FEEDBACK_STYLES = {
  OK:        'bg-feedback-ok-subtle text-feedback-ok',
  URSSAF120: 'bg-feedback-warn-subtle text-feedback-warn',
  OC51:      'bg-feedback-warn-subtle text-feedback-warn',
  SNGGO:     'bg-feedback-warn-subtle text-feedback-warn',
}

export default function Dsn() {
  const [month,    setMonth]    = useState('All months')
  const [sentOnly, setSentOnly] = useState(false)

  const filterRecords = (records) => {
    let r = records
    if (month !== 'All months') r = r.filter((rec) => rec.period === month)
    if (sentOnly)               r = r.filter((rec) => rec.feedback === 'OK')
    return r
  }

  const totalVisible = DSN_SECTIONS.reduce(
    (sum, s) => sum + filterRecords(s.records).length, 0,
  )

  return (
    <section>
      <ModuleHeader title="DSN">
        <div className="flex items-center gap-4">
          <label className="flex items-center gap-2 cursor-pointer">
            <Switch checked={sentOnly} onCheckedChange={setSentOnly} className="scale-90" />
            <span className="text-caption text-text-secondary">Sent &amp; accepted</span>
          </label>
          <Select value={month} onValueChange={setMonth}>
            <SelectTrigger className="h-8 text-caption w-36">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {DSN_MONTHS.map((m) => (
                <SelectItem key={m} value={m} className="text-caption">{m}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </ModuleHeader>

      <div className="rounded-md border border-border overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-surface-1 hover:bg-surface-1">
              <TableHead className={cn(TH_CLS, 'pl-4 w-28')}>Section</TableHead>
              <TableHead className={TH_CLS}>Period</TableHead>
              <TableHead className={TH_CLS}>Reference</TableHead>
              <TableHead className={TH_CLS}>Sent</TableHead>
              <TableHead className={TH_CLS}>Feedback</TableHead>
              <TableHead className="h-8 py-0 pr-4 w-px" />
            </TableRow>
          </TableHeader>
          <TableBody>
            {DSN_SECTIONS.map((section) => {
              const records = filterRecords(section.records)
              return (
                <>
                  {/* Section group header */}
                  <TableRow
                    key={`${section.id}-header`}
                    className="bg-surface-1 hover:bg-surface-1 border-t border-border"
                  >
                    <TableCell colSpan={6} className="py-1.5 pl-4 pr-4">
                      <div className="flex items-center gap-2">
                        <span className="text-label font-semibold text-text-secondary uppercase tracking-wide">
                          {section.label}
                        </span>
                        <span className="text-label text-text-tertiary">
                          {records.length} / {section.records.length}
                        </span>
                      </div>
                    </TableCell>
                  </TableRow>

                  {/* Records */}
                  {records.length === 0 ? (
                    <TableRow key={`${section.id}-empty`} className="hover:bg-surface-0">
                      <TableCell colSpan={6} className="py-2 pl-4 text-caption text-text-tertiary italic">
                        No records
                      </TableCell>
                    </TableRow>
                  ) : (
                    records.map((rec) => (
                      <TableRow key={rec.id} className={TR_CLS}>
                        <TableCell className="py-2 pl-4" />
                        <TableCell className="py-2 text-body-sm text-text-primary">{rec.period}</TableCell>
                        <TableCell className="py-2 text-caption font-mono text-text-secondary">{rec.ref}</TableCell>
                        <TableCell className="py-2 text-caption text-text-secondary">{rec.sent}</TableCell>
                        <TableCell className="py-2">
                          {rec.feedback
                            ? <Pill className={cn('font-mono', FEEDBACK_STYLES[rec.feedback])}>{rec.feedback}</Pill>
                            : <span className="text-caption text-text-tertiary">—</span>
                          }
                        </TableCell>
                        <TableCell className="py-2 pr-4">
                          <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-fast">
                            <Button size="sm" variant="ghost" className="h-7 w-7 p-0 text-text-tertiary hover:text-text-primary" aria-label="View">
                              <Eye size={13} />
                            </Button>
                            <Button size="sm" variant="ghost" className="h-7 w-7 p-0 text-text-tertiary hover:text-text-primary" aria-label="Download">
                              <Download size={13} />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))
                  )}
                </>
              )
            })}
          </TableBody>
        </Table>
      </div>

      <p className="text-caption text-text-tertiary mt-2">{totalVisible} records shown</p>
    </section>
  )
}
