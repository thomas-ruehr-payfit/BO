import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Switch } from '@/components/ui/switch'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { cn } from '@/lib/utils'

// ── Layout primitives ─────────────────────────────────────────────────────────

function SettingsGroup({ title, children }) {
  return (
    <div>
      <p className="text-label uppercase text-text-tertiary font-medium mb-2">{title}</p>
      <div className="rounded-md border border-border divide-y divide-border overflow-hidden">
        {children}
      </div>
    </div>
  )
}

function SettingsRow({ label, children, description }) {
  return (
    <div className="flex items-center justify-between gap-4 px-4 py-3 bg-surface-0">
      <div>
        <p className="text-body-sm text-text-primary">{label}</p>
        {description && (
          <p className="text-caption text-text-tertiary mt-0.5">{description}</p>
        )}
      </div>
      <div className="shrink-0">{children}</div>
    </div>
  )
}

// ── DeclarationSettings module ────────────────────────────────────────────────

const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
]

const YEARS  = ['2023', '2024', '2025', '2026']
const DAYS   = Array.from({ length: 31 }, (_, i) => String(i + 1))

export default function DeclarationSettings() {
  const [submissionEnabled, setSubmissionEnabled] = useState(true)
  const [startMonth, setStartMonth] = useState('January')
  const [startYear,  setStartYear]  = useState('2023')
  const [startDay,   setStartDay]   = useState('1')
  const [dirty, setDirty]           = useState(false)

  const [savedMonth, setSavedMonth] = useState('January')
  const [savedYear,  setSavedYear]  = useState('2023')
  const [savedDay,   setSavedDay]   = useState('1')

  function handleChange(field, value) {
    if (field === 'month') setStartMonth(value)
    if (field === 'year')  setStartYear(value)
    if (field === 'day')   setStartDay(value)
    setDirty(true)
  }

  function handleSave() {
    setSavedMonth(startMonth)
    setSavedYear(startYear)
    setSavedDay(startDay)
    setDirty(false)
  }

  function handleDiscard() {
    setStartMonth(savedMonth)
    setStartYear(savedYear)
    setStartDay(savedDay)
    setDirty(false)
  }

  return (
    <section>
      <div className="flex items-baseline justify-between mb-3">
        <h2 className="text-h4 text-text-primary">Declaration settings</h2>
      </div>

      <div className="flex flex-col gap-5">
        {/* Net-Entreprises */}
        <SettingsGroup title="Net-Entreprises">
          <SettingsRow
            label="Permissions"
            description="Managed by Net-Entreprises. Contact support to change."
          >
            <span className="text-body-sm text-text-secondary">DSN · Mensuelle · FCTU</span>
          </SettingsRow>
        </SettingsGroup>

        {/* Submission */}
        <SettingsGroup title="Submission">
          <SettingsRow
            label="Automatic submission"
            description="When enabled, DSNs are submitted automatically on their due date."
          >
            <div className="flex items-center gap-2">
              <span className={cn('text-caption', submissionEnabled ? 'text-status-active' : 'text-text-tertiary')}>
                {submissionEnabled ? 'Enabled' : 'Disabled'}
              </span>
              <Switch
                checked={submissionEnabled}
                onCheckedChange={setSubmissionEnabled}
                className="scale-90"
              />
            </div>
          </SettingsRow>
        </SettingsGroup>

        {/* Declaration start date */}
        <SettingsGroup title="Declaration start date">
          <SettingsRow label="Start date" description="First period covered by declarations for this company.">
            <div className="flex items-center gap-2">
              <Select value={startMonth} onValueChange={(v) => handleChange('month', v)}>
                <SelectTrigger className="h-8 text-caption w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {MONTHS.map((m) => (
                    <SelectItem key={m} value={m} className="text-caption">{m}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={startYear} onValueChange={(v) => handleChange('year', v)}>
                <SelectTrigger className="h-8 text-caption w-24">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {YEARS.map((y) => (
                    <SelectItem key={y} value={y} className="text-caption">{y}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={startDay} onValueChange={(v) => handleChange('day', v)}>
                <SelectTrigger className="h-8 text-caption w-20">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {DAYS.map((d) => (
                    <SelectItem key={d} value={d} className="text-caption">{d}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </SettingsRow>

          {/* Save / Discard — only shown when dirty */}
          {dirty && (
            <div className="flex items-center justify-end gap-2 px-4 py-2.5 bg-surface-1 border-t border-border">
              <Button
                size="sm"
                variant="ghost"
                onClick={handleDiscard}
                className="h-7 px-3 text-caption text-text-secondary"
              >
                Discard
              </Button>
              <Button
                size="sm"
                onClick={handleSave}
                className="h-7 px-3 text-caption"
              >
                Save
              </Button>
            </div>
          )}
        </SettingsGroup>
      </div>
    </section>
  )
}
