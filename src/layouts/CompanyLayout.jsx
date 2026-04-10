import { useState } from 'react'
import { Outlet, useParams, Navigate, useLocation } from 'react-router-dom'
import { ScrollArea } from '@/components/ui/scroll-area'
import CompanyTopBar from '@/layouts/CompanyTopBar'
import FirstLevelNav from '@/layouts/FirstLevelNav'
import SubTabBar     from '@/layouts/SubTabBar'
import DataDrawer    from '@/layouts/DataDrawer'
import { COMPANIES } from '@/lib/data'
import { PAGES_WITH_SUBS } from '@/lib/constants'

export default function CompanyLayout() {
  const { companyId } = useParams()
  const location = useLocation()
  const [drawerOpen, setDrawerOpen] = useState(true)

  const company = COMPANIES.find((c) => c.id === companyId)
  if (!company) return <Navigate to="/companies" replace />

  // Derive active page from URL: /companies/:id/:page/...
  const currentPage = location.pathname.split('/')[3] ?? 'people'
  const hasSubTabs  = PAGES_WITH_SUBS.has(currentPage)

  return (
    <>
      <CompanyTopBar company={company} />
      <div className="flex flex-1 min-h-0">
        <DataDrawer open={drawerOpen} onToggle={() => setDrawerOpen((v) => !v)} />
        <div className="flex flex-col flex-1 min-w-0">
          <FirstLevelNav currentPage={currentPage} companyId={companyId} />
          {hasSubTabs && (
            <SubTabBar currentPage={currentPage} companyId={companyId} />
          )}
          <ScrollArea className="flex-1">
            <div className="flex flex-col gap-4 p-5">
              <Outlet />
            </div>
          </ScrollArea>
        </div>
      </div>
    </>
  )
}
