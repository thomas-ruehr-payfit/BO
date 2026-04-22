import { useState } from 'react'
import { Search, Zap, LogIn, Pencil } from 'lucide-react'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { cn } from '@/lib/utils'
import ModuleHeader from '@/components/ModuleHeader'
import { TIMELINE_EVENTS, TIMELINE_TYPES } from '@/lib/data'

const TYPE_CONFIG = {
  'non-regression': { icon: Zap,    dot: 'bg-feedback-ok',   label: 'Non-regression' },
  'sign-in':        { icon: LogIn,  dot: 'bg-accent',        label: 'Sign-in' },
  'correction':     { icon: Pencil, dot: 'bg-feedback-warn', label: 'Correction' },
}

export default function Timeline() {
  const [search, setSearch] = useState('')
  const [type,   setType]   = useState('All types')

  const filtered = TIMELINE_EVENTS.filter((e) => {
    if (type !== 'All types' && e.type !== type) return false
    if (search) {
      const q = search.toLowerCase()
      if (!e.title.toLowerCase().includes(q) && !e.description.toLowerCase().includes(q)) return false
    }
    return true
  })

  // Group by month, preserving order
  const groups = filtered.reduce((acc, e) => {
    if (!acc[e.month]) acc[e.month] = []
    acc[e.month].push(e)
    return acc
  }, {})

  return (
    <section>
      <ModuleHeader title="Timeline">
        <div className="flex items-center gap-2">
          <div className="relative">
            <Search size={13} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-text-tertiary" />
            <Input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search events…"
              className="pl-8 h-8 text-caption w-48"
            />
          </div>
          <Select value={type} onValueChange={setType}>
            <SelectTrigger className="h-8 text-caption w-40"><SelectValue /></SelectTrigger>
            <SelectContent>
              {TIMELINE_TYPES.map((t) => (
                <SelectItem key={t} value={t} className="text-caption capitalize">
                  {t === 'All types' ? t : TYPE_CONFIG[t]?.label ?? t}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </ModuleHeader>

      {Object.keys(groups).length === 0 ? (
        <p className="text-caption text-text-tertiary py-8 text-center">
          No events match the current filters.
        </p>
      ) : (
        <div className="flex flex-col gap-6">
          {Object.entries(groups).map(([month, events]) => (
            <div key={month}>
              <p className="text-label uppercase text-text-tertiary font-medium mb-3">{month}</p>

              <div className="flex flex-col gap-px">
                {events.map((event, i) => {
                  const config = TYPE_CONFIG[event.type]
                  const Icon   = config.icon
                  const isLast = i === events.length - 1

                  return (
                    <div key={event.id} className="flex gap-3">
                      {/* Timeline track */}
                      <div className="flex flex-col items-center">
                        <div className={cn('h-2 w-2 rounded-full shrink-0 mt-2.5', config.dot)} />
                        {!isLast && <div className="w-px flex-1 bg-border mt-1" />}
                      </div>

                      {/* Content */}
                      <div className="flex-1 pb-4">
                        <div className="flex items-baseline gap-2 mb-0.5">
                          <span className="text-body-sm font-medium text-text-primary">{event.title}</span>
                          <span className="text-caption text-text-tertiary">{event.date} · {event.time}</span>
                        </div>
                        <p className="text-caption text-text-secondary">{event.description}</p>
                        <p className="text-caption text-text-tertiary mt-0.5">{event.actor}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}
