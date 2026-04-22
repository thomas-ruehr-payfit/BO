import GlobalNav from '@/layouts/GlobalNav'
import CompanyTopBar from '@/layouts/CompanyTopBar'
import FirstLevelNav from '@/layouts/FirstLevelNav'
import SubTabBar from '@/layouts/SubTabBar'
import DataDrawer from '@/layouts/DataDrawer'
import ContentArea from '@/layouts/ContentArea'
import CompanyList from '@/routes/CompanyList'
import { PAGES_WITH_SUBS } from '@/lib/constants'

// Placeholder for non-Companies spaces
const SPACE_LABELS = {
  declarations: 'Declarations',
  billing:      'Billing',
  history:      'History',
  settings:     'Settings',
  account:      'Account',
}

function SpacePlaceholder({ space }) {
  return (
    <div className="flex-1 flex items-center justify-center bg-surface-1">
      <div className="text-center">
        <p className="text-h3 text-text-primary mb-1">{SPACE_LABELS[space]}</p>
        <p className="text-caption text-text-tertiary">This section is not yet built.</p>
      </div>
    </div>
  )
}

export default function AppShell({
  currentSpace,
  onSpaceChange,
  currentPage,
  activeSub,
  currentCompany,
  drawerOpen,
  onNavigate,
  onSubChange,
  onCompanyChange,
  onViewAllCompanies,
  onDrawerToggle,
}) {
  const hasSubTabs = PAGES_WITH_SUBS.has(currentPage)

  function renderMain() {
    if (currentSpace !== 'companies') {
      return <SpacePlaceholder space={currentSpace} />
    }
    // Companies space — list or detail
    if (!currentCompany) {
      return <CompanyList onSelect={onCompanyChange} />
    }
    return (
      <>
        <div className="rounded-lg overflow-hidden shrink-0 border border-[#d8d2c7] shadow-sm">
          <CompanyTopBar
            currentCompany={currentCompany}
            onCompanyChange={onCompanyChange}
            onViewAll={onViewAllCompanies}
          />
        </div>
        <div className="flex flex-1 min-h-0 rounded-[6px] overflow-hidden border border-[#d8d2c7] shadow-sm">
          <div className="flex flex-col flex-1 min-w-0">
            <FirstLevelNav currentPage={currentPage} onNavigate={onNavigate} />
            {hasSubTabs && (
              <SubTabBar
                currentPage={currentPage}
                activeSub={activeSub}
                onSubChange={onSubChange}
              />
            )}
            <ContentArea currentPage={currentPage} activeSub={activeSub} />
          </div>
          <DataDrawer open={drawerOpen} onToggle={onDrawerToggle} />
        </div>
      </>
    )
  }

  return (
    <div className="flex h-screen overflow-hidden bg-canvas">
      <GlobalNav currentSpace={currentSpace} onSpaceChange={onSpaceChange} />
      <div className="flex flex-col flex-1 min-w-0 p-2 gap-2">
        {renderMain()}
      </div>
    </div>
  )
}
