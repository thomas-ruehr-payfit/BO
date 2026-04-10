import { useNavigate } from 'react-router-dom'
import { Separator } from '@/components/ui/separator'
import { cn } from '@/lib/utils'
import { PRIMARY_NAV, DEFAULT_SUBS, PAGES_WITH_SUBS } from '@/lib/constants'

export default function FirstLevelNav({ currentPage, companyId }) {
  const navigate  = useNavigate()
  const primary   = PRIMARY_NAV.filter((n) => n.group === 'primary')
  const secondary = PRIMARY_NAV.filter((n) => n.group === 'secondary')

  function handleNavigate(pageId) {
    const base = `/companies/${companyId}/${pageId}`
    navigate(PAGES_WITH_SUBS.has(pageId) ? `${base}/${DEFAULT_SUBS[pageId]}` : base)
  }

  return (
    <div
      className="flex items-stretch border-b border-border bg-surface-0 shrink-0 px-4"
      style={{ height: 40 }}
    >
      <div className="flex items-stretch gap-1">
        {primary.map((item) => (
          <NavTab key={item.id} item={item} active={currentPage === item.id} onNavigate={handleNavigate} />
        ))}
      </div>
      <div className="flex-1" />
      <div className="flex items-stretch gap-1">
        <Separator orientation="vertical" className="my-2 mr-2" />
        {secondary.map((item) => (
          <NavTab key={item.id} item={item} active={currentPage === item.id} onNavigate={handleNavigate} />
        ))}
      </div>
    </div>
  )
}

function NavTab({ item, active, onNavigate }) {
  return (
    <button
      type="button"
      onClick={() => onNavigate(item.id)}
      className={cn(
        'relative flex items-center px-3 text-body-sm transition-colors duration-fast',
        'border-b-2 -mb-px',
        active
          ? 'text-text-primary font-semibold border-accent'
          : 'text-text-secondary font-normal border-transparent hover:text-text-primary',
      )}
    >
      {item.label}
    </button>
  )
}
