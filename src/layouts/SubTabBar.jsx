import { useNavigate, useParams } from 'react-router-dom'
import { cn } from '@/lib/utils'
import { SUB_TABS } from '@/lib/constants'

export default function SubTabBar({ currentPage, companyId }) {
  const navigate    = useNavigate()
  const { sub }     = useParams()
  const tabs        = SUB_TABS[currentPage]

  if (!tabs) return null

  return (
    <div
      className="flex items-stretch gap-1 border-b border-border bg-surface-0 px-4 shrink-0"
      style={{ height: 36 }}
    >
      {tabs.map((tab) => (
        <button
          key={tab.id}
          type="button"
          onClick={() => navigate(`/companies/${companyId}/${currentPage}/${tab.id}`)}
          className={cn(
            'relative flex items-center px-3 text-caption transition-colors duration-fast',
            'border-b-2 -mb-px',
            sub === tab.id
              ? 'text-text-primary font-medium border-accent'
              : 'text-text-tertiary font-normal border-transparent hover:text-text-secondary',
          )}
        >
          {tab.label}
        </button>
      ))}
    </div>
  )
}
