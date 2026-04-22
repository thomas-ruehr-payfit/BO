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
      className="flex items-center gap-1 bg-surface-0 px-10 shrink-0 mt-3"
      style={{ height: 36 }}
    >
      {tabs.map((tab) => (
        <button
          key={tab.id}
          type="button"
          onClick={() => navigate(`/companies/${companyId}/${currentPage}/${tab.id}`)}
          className={cn(
            'flex items-center px-3 py-1 rounded-md text-body-sm transition-colors duration-fast',
            sub === tab.id
              ? 'bg-surface-2 text-text-primary font-medium'
              : 'text-text-primary font-normal hover:bg-surface-1',
          )}
        >
          {tab.label}
        </button>
      ))}
    </div>
  )
}
