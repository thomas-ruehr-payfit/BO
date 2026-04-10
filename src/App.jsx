import { useState } from 'react'
import AppShell from '@/layouts/AppShell'
import { COMPANIES } from '@/lib/data'
import { DEFAULT_SUBS, PAGES_WITH_SUBS } from '@/lib/constants'

export default function App() {
  const [currentSpace, setCurrentSpace]     = useState('companies')
  const [currentPage, setCurrentPage]       = useState('people')
  const [activeSub, setActiveSub]           = useState('dashboard')
  const [currentCompany, setCurrentCompany] = useState(null) // null = company list
  const [drawerOpen, setDrawerOpen]         = useState(true)

  function handleSpaceChange(space) {
    setCurrentSpace(space)
    // Entering Companies always lands on the list first
    if (space === 'companies') setCurrentCompany(null)
  }

  function handleNavigate(page) {
    setCurrentPage(page)
    if (PAGES_WITH_SUBS.has(page)) {
      setActiveSub(DEFAULT_SUBS[page])
    }
  }

  return (
    <AppShell
      currentSpace={currentSpace}
      onSpaceChange={handleSpaceChange}
      currentPage={currentPage}
      activeSub={activeSub}
      currentCompany={currentCompany}
      drawerOpen={drawerOpen}
      onNavigate={handleNavigate}
      onSubChange={setActiveSub}
      onCompanyChange={setCurrentCompany}
      onViewAllCompanies={() => setCurrentCompany(null)}
      onDrawerToggle={() => setDrawerOpen((v) => !v)}
    />
  )
}
