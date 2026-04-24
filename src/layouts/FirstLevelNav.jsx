import { useNavigate } from 'react-router-dom'
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
      className="flex items-end bg-surface-0 shrink-0 px-10 mt-1.5 pb-3"
      style={{ height: 56 }}
    >
      <div className="flex items-center gap-1">
        {primary.map((item) => (
          <NavTab key={item.id} item={item} active={currentPage === item.id} onNavigate={handleNavigate} />
        ))}
      </div>
      <div className="flex-1" />
      <div className="flex items-center gap-1">
{secondary.map((item) => (
          <NavTab key={item.id} item={item} active={currentPage === item.id} onNavigate={handleNavigate} />
        ))}
      </div>
    </div>
  )
}

function NavTab({ item, active, onNavigate }) {
  const Icon = item.icon
  return (
    <button
      type="button"
      onClick={() => onNavigate(item.id)}
      className={cn(
        'flex items-center gap-1.5 rounded-full text-[17px] font-normal transition-colors duration-fast',
        item.label ? 'px-4 py-1.5' : 'p-2',
        active
          ? 'bg-text-primary text-white'
          : 'text-text-primary hover:bg-surface-1',
      )}
    >
      {Icon && <Icon size={14} className="shrink-0" />}
      {item.label}
    </button>
  )
}
