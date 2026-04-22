// Primary navigation items
// group: 'primary' = left cluster | group: 'secondary' = right cluster (divider + right-aligned)
export const PRIMARY_NAV = [
  { id: 'people',           label: 'People',           group: 'primary' },
  { id: 'declaration',      label: 'Declaration',      group: 'primary' },
  { id: 'files',            label: 'Files',            group: 'primary' },
  { id: 'timeline',         label: 'Timeline',         group: 'secondary' },
  { id: 'advanced-actions', label: 'Advanced Actions', group: 'secondary' },
]

// Sub-tab definitions per primary page
export const SUB_TABS = {
  declaration: [
    { id: 'dashboard', label: 'Dashboard' },
    { id: 'dsn',       label: 'DSN' },
    { id: 'settings',  label: 'Declaration settings' },
  ],
  'advanced-actions': [
    { id: 'operations', label: 'Operations' },
    { id: 'migration',  label: 'Environment Migration' },
    { id: 'import',     label: 'Bulk Import' },
  ],
}

// Default sub-tab when navigating to a page with sub-tabs
export const DEFAULT_SUBS = {
  declaration:      'dashboard',
  'advanced-actions': 'operations',
}

// Pages that have sub-tabs
export const PAGES_WITH_SUBS = new Set(Object.keys(SUB_TABS))

// Global nav items (left strip)
export const GLOBAL_NAV_PRIMARY = [
  { id: 'companies',    label: 'Companies',    icon: 'Building2' },
  { id: 'declarations', label: 'Declarations', icon: 'FileText' },
  { id: 'billing',      label: 'Billing',      icon: 'CreditCard' },
]

export const GLOBAL_NAV_BOTTOM = [
  { id: 'history',  label: 'History',  icon: 'History' },
  { id: 'settings', label: 'Settings', icon: 'Settings' },
  { id: 'account',  label: 'Account',  icon: 'User' },
]

// Shared table class strings — apply to every data table in the app
export const TH_CLS = 'text-[10px] uppercase text-text-tertiary font-medium h-8 py-0'
export const TR_CLS = 'group hover:bg-surface-1 transition-colors duration-fast'

// Layout dimensions
export const DIMENSIONS = {
  globalNav: { collapsed: 48, expanded: 160 },
  dataDrawer: { collapsed: 32, expanded: 240 },
  companyTopBar: 56,
  firstLevelNav: 40,
}
