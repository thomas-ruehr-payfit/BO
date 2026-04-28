import { useState } from 'react'
import { Outlet, useParams, Navigate, useLocation } from 'react-router-dom'
import CompanyTopBar from '@/layouts/CompanyTopBar'
import CompanyTopBarV2 from '@/layouts/CompanyTopBarV2'
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
    <div className="flex flex-col flex-1 min-h-0">
      <div className="pb-3">
        {company.id === 'smiles-inc' ? (
          <CompanyTopBar company={company} />
        ) : (
          <CompanyTopBarV2 company={company} />
        )}
      </div>
      <div className="flex flex-1 rounded-xl border border-border-warm shadow-sm bg-surface-1 overflow-hidden">
        <div className="flex flex-col flex-1 min-w-0 rounded-xl bg-surface-0 border border-border-warm -ml-px -mt-px -mb-px min-h-0 overflow-hidden">
          <div className="pt-2 shrink-0" />
          <FirstLevelNav currentPage={currentPage} companyId={companyId} />
          {hasSubTabs && (
            <SubTabBar currentPage={currentPage} companyId={companyId} />
          )}
          <div className="flex flex-col gap-4 p-10">
            <Outlet />
          </div>
        </div>
        <DataDrawer open={drawerOpen} onToggle={() => setDrawerOpen((v) => !v)} />
      </div>
    </div>
  )
}
