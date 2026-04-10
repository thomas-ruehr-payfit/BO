import { ScrollArea } from '@/components/ui/scroll-area'
import { PAGES_WITH_SUBS } from '@/lib/constants'

// Route components
import People from '@/routes/People'
import Declaration from '@/routes/Declaration'
import Files from '@/routes/Files'
import Timeline from '@/routes/Timeline'
import AdvancedActions from '@/routes/AdvancedActions'

const ROUTE_MAP = {
  people:            People,
  declaration:       Declaration,
  files:             Files,
  timeline:          Timeline,
  'advanced-actions': AdvancedActions,
}

/**
 * Maps (currentPage, activeSub) → correct route component.
 * No visual chrome — pure routing container.
 */
export default function ContentArea({ currentPage, activeSub }) {
  const Route = ROUTE_MAP[currentPage] ?? null

  return (
    <ScrollArea className="flex-1">
      <div className="flex flex-col gap-4 p-5">
        {Route && <Route activeSub={activeSub} />}
      </div>
    </ScrollArea>
  )
}
