import { Send, RotateCcw, FileText, AlertTriangle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import ModuleHeader from '@/components/ModuleHeader'
import { DASHBOARD_TASK } from '@/lib/data'

function StatusChip({ label, value, variant }) {
  return (
    <div className="flex flex-col gap-0.5">
      <span className="text-label uppercase text-text-tertiary">{label}</span>
      <span
        className={cn(
          'text-body-sm font-medium',
          variant === 'success' && 'text-status-active',
          variant === 'accent'  && 'text-accent',
          !variant              && 'text-text-primary',
        )}
      >
        {value}
      </span>
    </div>
  )
}

export default function Dashboard() {
  const t = DASHBOARD_TASK

  return (
    <section>
      <ModuleHeader title="Dashboard" />

      <div className="rounded-md border border-border overflow-hidden">
        {/* Card header */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-border bg-surface-1">
          <div className="flex items-center gap-3">
            <span className="text-label font-semibold text-text-primary uppercase tracking-wide">
              {t.company}
            </span>
            <span className="text-caption text-text-tertiary">{t.period}</span>
            {t.tags.map((tag) => (
              <span key={tag} className="text-label px-1.5 py-0.5 rounded bg-surface-3 text-text-secondary">
                {tag}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <Button size="sm" variant="ghost" className="gap-1.5 text-caption text-text-secondary hover:text-text-primary h-7 px-2">
              <RotateCcw size={12} />
              Regenerate
            </Button>
            <Button size="sm" variant="ghost" className="gap-1.5 text-caption text-text-secondary hover:text-text-primary h-7 px-2">
              <FileText size={12} />
              Preview
            </Button>
            <Button size="sm" className="gap-1.5 text-caption h-7 px-3">
              <Send size={12} />
              Send
            </Button>
          </div>
        </div>

        {/* Card body — metadata grid */}
        <div className="px-5 py-4 grid grid-cols-3 gap-x-8 gap-y-4 border-b border-border">
          <StatusChip label="Container" value={t.container} variant="accent" />
          <StatusChip label="Type"      value={t.type} />
          <StatusChip label="Numéro"    value={t.numero} />
          <StatusChip label="Status"    value={t.status} variant="success" />
          <StatusChip label="Generated" value={t.generated} />
        </div>

        {/* Alerts */}
        {t.alerts.length > 0 && (
          <div className="px-5 py-3 flex flex-col gap-2">
            {t.alerts.map((alert) => (
              <div
                key={alert.id}
                className="flex items-start gap-3 rounded-md bg-feedback-warn-subtle border border-feedback-warn/20 px-3 py-2.5"
              >
                <AlertTriangle size={13} className="text-feedback-warn mt-0.5 shrink-0" />
                <div>
                  <p className="text-body-sm font-medium text-text-primary">{alert.title}</p>
                  <p className="text-caption text-text-secondary">{alert.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
