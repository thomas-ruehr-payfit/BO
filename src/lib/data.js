// Mock data from BO-currentspecs.md

// --- Employees ---
// contract: 'CDI' | 'CDD'
// role: 'Admin' | 'Employee'
// status: 'active' | 'inactive' | 'off'
export const EMPLOYEES = [
  { id: 1, name: 'Alice Martin',     contract: 'CDI', role: 'Admin',    status: 'active',   start: '2022-03-14' },
  { id: 2, name: 'Thomas Bernard',   contract: 'CDI', role: 'Admin',    status: 'active',   start: '2021-11-02' },
  { id: 3, name: 'Sophie Leclerc',   contract: 'CDD', role: 'Employee', status: 'active',   start: '2023-06-01' },
  { id: 4, name: 'Julien Morel',     contract: 'CDI', role: 'Employee', status: 'active',   start: '2020-08-15' },
  { id: 5, name: 'Emma Petit',       contract: 'CDD', role: 'Employee', status: 'inactive', start: '2023-09-01' },
  { id: 6, name: 'Romain Dubois',    contract: 'CDI', role: 'Employee', status: 'active',   start: '2019-04-22' },
  { id: 7, name: 'Camille Rousseau', contract: 'CDI', role: 'Employee', status: 'off',      start: '2022-01-10' },
]

// Headcount chart — 24 months, Apr 2024 → Mar 2026
export const HEADCOUNT = [
  { month: 'Apr 24', count: 5 },
  { month: 'May 24', count: 5 },
  { month: 'Jun 24', count: 5 },
  { month: 'Jul 24', count: 5 },
  { month: 'Aug 24', count: 5 },
  { month: 'Sep 24', count: 5 },
  { month: 'Oct 24', count: 6 },
  { month: 'Nov 24', count: 6 },
  { month: 'Dec 24', count: 6 },
  { month: 'Jan 25', count: 6 },
  { month: 'Feb 25', count: 6 },
  { month: 'Mar 25', count: 6 },
  { month: 'Apr 25', count: 6 },
  { month: 'May 25', count: 7 },
  { month: 'Jun 25', count: 7 },
  { month: 'Jul 25', count: 7 },
  { month: 'Aug 25', count: 7 },
  { month: 'Sep 25', count: 7 },
  { month: 'Oct 25', count: 7 },
  { month: 'Nov 25', count: 7 },
  { month: 'Dec 25', count: 7 },
  { month: 'Jan 26', count: 7 },
  { month: 'Feb 26', count: 7 },
  { month: 'Mar 26', count: 7 },
]

// --- Dashboard ---
export const DASHBOARD_TASK = {
  company:   'SMILES.INC',
  period:    'April 2026',
  tags:      ['DSN', 'Mensuelle'],
  container: 'READY TO BE SENT',
  type:      '01 Initiale',
  numero:    '1774951935889',
  status:    'VALIDATION SUCCESSFUL',
  generated: '31/03/2026 12:12',
  alerts: [
    {
      id: 1,
      title:       'Payment date limit 15th',
      description: "Date d'échéance réelle : 15/05/2026",
    },
    {
      id: 2,
      title:       'Régularisation - Module de correction',
      description: 'Régularisation via le nouveau module de régularisation',
    },
  ],
}

// --- DSN ---
// feedback: 'OK' | 'URSSAF120' | 'OC51' | 'SNGGO' | null (pending)
export const DSN_SECTIONS = [
  {
    id: 'mensuelles',
    label: 'Mensuelles',
    records: [
      { id: 'd1',  period: 'Jun 2025', ref: 'DSN-2506-001', sent: '05/07/2025', feedback: 'OK' },
      { id: 'd2',  period: 'Jul 2025', ref: 'DSN-2507-001', sent: '05/08/2025', feedback: 'OK' },
      { id: 'd3',  period: 'Aug 2025', ref: 'DSN-2508-001', sent: '05/09/2025', feedback: 'OK' },
      { id: 'd4',  period: 'Sep 2025', ref: 'DSN-2509-001', sent: '05/10/2025', feedback: 'URSSAF120' },
      { id: 'd5',  period: 'Oct 2025', ref: 'DSN-2510-001', sent: '05/11/2025', feedback: 'OK' },
      { id: 'd6',  period: 'Nov 2025', ref: 'DSN-2511-001', sent: '05/12/2025', feedback: 'OK' },
      { id: 'd7',  period: 'Dec 2025', ref: 'DSN-2512-001', sent: '05/01/2026', feedback: 'OC51' },
      { id: 'd8',  period: 'Jan 2026', ref: 'DSN-2601-001', sent: '05/02/2026', feedback: 'OK' },
      { id: 'd9',  period: 'Feb 2026', ref: 'DSN-2602-001', sent: '05/03/2026', feedback: 'OK' },
      { id: 'd10', period: 'Mar 2026', ref: 'DSN-2603-001', sent: '05/04/2026', feedback: 'OK' },
    ],
  },
  {
    id: 'neants',
    label: 'Néants',
    records: [],
  },
  {
    id: 'fctu',
    label: 'FCTU',
    records: [
      { id: 'f1',  period: 'Jun 2025', ref: 'FCTU-2506-001', sent: '12/07/2025', feedback: 'OK' },
      { id: 'f2',  period: 'Jul 2025', ref: 'FCTU-2507-001', sent: '08/08/2025', feedback: 'OK' },
      { id: 'f3',  period: 'Aug 2025', ref: 'FCTU-2508-001', sent: '14/09/2025', feedback: 'SNGGO' },
      { id: 'f4',  period: 'Sep 2025', ref: 'FCTU-2509-001', sent: '10/10/2025', feedback: 'OK' },
      { id: 'f5',  period: 'Oct 2025', ref: 'FCTU-2510-001', sent: '06/11/2025', feedback: 'OK' },
      { id: 'f6',  period: 'Nov 2025', ref: 'FCTU-2511-001', sent: '09/12/2025', feedback: 'OK' },
      { id: 'f7',  period: 'Dec 2025', ref: 'FCTU-2512-001', sent: '08/01/2026', feedback: 'URSSAF120' },
      { id: 'f8',  period: 'Jan 2026', ref: 'FCTU-2601-001', sent: '11/02/2026', feedback: 'OK' },
      { id: 'f9',  period: 'Feb 2026', ref: 'FCTU-2602-001', sent: '07/03/2026', feedback: 'OK' },
      { id: 'f10', period: 'Mar 2026', ref: 'FCTU-2603-001', sent: '04/04/2026', feedback: 'OK' },
    ],
  },
  {
    id: 'arrets',
    label: 'Arrêts',
    records: [
      { id: 'a1',  period: 'Jun 2025', ref: 'ARR-2506-001', sent: '18/06/2025', feedback: 'OK' },
      { id: 'a2',  period: 'Jul 2025', ref: 'ARR-2507-001', sent: '22/07/2025', feedback: 'OK' },
      { id: 'a3',  period: 'Aug 2025', ref: 'ARR-2508-001', sent: '04/08/2025', feedback: 'OC51' },
      { id: 'a4',  period: 'Sep 2025', ref: 'ARR-2509-001', sent: '17/09/2025', feedback: 'OK' },
      { id: 'a5',  period: 'Oct 2025', ref: 'ARR-2510-001', sent: '03/10/2025', feedback: 'OK' },
      { id: 'a6',  period: 'Nov 2025', ref: 'ARR-2511-001', sent: '28/11/2025', feedback: 'OK' },
      { id: 'a7',  period: 'Dec 2025', ref: 'ARR-2512-001', sent: '12/12/2025', feedback: 'SNGGO' },
      { id: 'a8',  period: 'Jan 2026', ref: 'ARR-2601-001', sent: '20/01/2026', feedback: 'OK' },
      { id: 'a9',  period: 'Feb 2026', ref: 'ARR-2602-001', sent: '14/02/2026', feedback: 'OK' },
      { id: 'a10', period: 'Mar 2026', ref: 'ARR-2603-001', sent: '25/03/2026', feedback: 'OK' },
    ],
  },
  {
    id: 'reprises',
    label: 'Reprises',
    records: [],
  },
  {
    id: 'amorcage',
    label: 'Amorçage',
    records: [
      { id: 'am1', period: 'Jun 2025', ref: 'AMO-2506-001', sent: '01/06/2025', feedback: 'OK' },
      { id: 'am2', period: 'Jul 2025', ref: 'AMO-2507-001', sent: '01/07/2025', feedback: 'OK' },
      { id: 'am3', period: 'Aug 2025', ref: 'AMO-2508-001', sent: '01/08/2025', feedback: 'OK' },
      { id: 'am4', period: 'Sep 2025', ref: 'AMO-2509-001', sent: '01/09/2025', feedback: 'URSSAF120' },
      { id: 'am5', period: 'Oct 2025', ref: 'AMO-2510-001', sent: '01/10/2025', feedback: 'OK' },
      { id: 'am6', period: 'Nov 2025', ref: 'AMO-2511-001', sent: '01/11/2025', feedback: 'OK' },
      { id: 'am7', period: 'Dec 2025', ref: 'AMO-2512-001', sent: '01/12/2025', feedback: 'OK' },
      { id: 'am8', period: 'Jan 2026', ref: 'AMO-2601-001', sent: '01/01/2026', feedback: 'OK' },
    ],
  },
]

export const DSN_MONTHS = [
  'All months',
  'Jun 2025', 'Jul 2025', 'Aug 2025', 'Sep 2025', 'Oct 2025',
  'Nov 2025', 'Dec 2025', 'Jan 2026', 'Feb 2026', 'Mar 2026',
]

// --- Files ---
// category: 'Payslips' | 'Exports' | 'FSN' | 'Feedback' | 'Other'
export const FILES = [
  { id: 1,  name: 'Fiche de paie — Alice Martin',      category: 'Payslips', employee: 'Alice Martin',     month: 'Mar 2026', ext: 'pdf' },
  { id: 2,  name: 'Fiche de paie — Thomas Bernard',    category: 'Payslips', employee: 'Thomas Bernard',   month: 'Mar 2026', ext: 'pdf' },
  { id: 3,  name: 'Fiche de paie — Sophie Leclerc',    category: 'Payslips', employee: 'Sophie Leclerc',   month: 'Mar 2026', ext: 'pdf' },
  { id: 4,  name: 'Bulletin corrigé — Julien Morel',   category: 'Payslips', employee: 'Julien Morel',     month: 'Feb 2026', ext: 'pdf' },
  { id: 5,  name: 'Export ADP',                         category: 'Exports',  employee: null,               month: 'Mar 2026', ext: 'csv' },
  { id: 6,  name: 'Export comptable',                   category: 'Exports',  employee: null,               month: 'Mar 2026', ext: 'xlsx' },
  { id: 7,  name: 'Export ADP',                         category: 'Exports',  employee: null,               month: 'Feb 2026', ext: 'csv' },
  { id: 8,  name: 'DSN Mensuelle',                      category: 'FSN',      employee: null,               month: 'Mar 2026', ext: 'dsn' },
  { id: 9,  name: 'DSN FCTU',                           category: 'FSN',      employee: null,               month: 'Feb 2026', ext: 'dsn' },
  { id: 10, name: 'Retour URSSAF',                      category: 'Feedback', employee: null,               month: 'Mar 2026', ext: 'xml' },
  { id: 11, name: 'Retour Agirc-Arrco',                 category: 'Feedback', employee: null,               month: 'Feb 2026', ext: 'xml' },
  { id: 12, name: 'Avenant — Sophie Leclerc',           category: 'Other',    employee: 'Sophie Leclerc',   month: 'Mar 2026', ext: 'pdf' },
]

export const FILE_CATEGORIES = ['All categories', 'Payslips', 'Exports', 'FSN', 'Feedback', 'Other']
export const FILE_MONTHS = ['All months', 'Feb 2026', 'Mar 2026']

// --- Timeline ---
// type: 'non-regression' | 'sign-in' | 'correction'
export const TIMELINE_EVENTS = [
  {
    id: 1, month: 'Feb 2026', date: '15/02/2026', time: '09:14',
    type: 'non-regression',
    title: 'Non-regression test passed',
    description: 'Automated validation ran against Feb 2026 DSN payload — no regressions detected.',
    actor: 'System',
  },
  {
    id: 2, month: 'Feb 2026', date: '20/02/2026', time: '14:32',
    type: 'sign-in',
    title: 'Sign in as — Romain Dubois',
    description: 'Claire Fontaine signed in as Romain Dubois.',
    actor: 'Claire Fontaine',
  },
  {
    id: 3, month: 'Feb 2026', date: '22/02/2026', time: '10:05',
    type: 'correction',
    title: 'Correction applied',
    description: 'Contract end date corrected for Emma Petit (CDD → 31/03/2026).',
    actor: 'Claire Fontaine',
  },
  {
    id: 4, month: 'Feb 2026', date: '28/02/2026', time: '16:48',
    type: 'sign-in',
    title: 'Sign in as — Alice Martin',
    description: 'Nicolas Aubert signed in as Alice Martin.',
    actor: 'Nicolas Aubert',
  },
  {
    id: 5, month: 'Mar 2026', date: '01/03/2026', time: '08:52',
    type: 'non-regression',
    title: 'Non-regression test passed',
    description: 'Automated validation ran against Mar 2026 DSN payload — no regressions detected.',
    actor: 'System',
  },
  {
    id: 6, month: 'Mar 2026', date: '10/03/2026', time: '11:20',
    type: 'sign-in',
    title: 'Sign in as — Julien Morel',
    description: 'Claire Fontaine signed in as Julien Morel.',
    actor: 'Claire Fontaine',
  },
  {
    id: 7, month: 'Mar 2026', date: '15/03/2026', time: '15:03',
    type: 'correction',
    title: 'Correction applied',
    description: 'IDCC code updated from 1486 to 1518 for Camille Rousseau.',
    actor: 'Isabelle Renaud',
  },
  {
    id: 8, month: 'Mar 2026', date: '28/03/2026', time: '09:37',
    type: 'non-regression',
    title: 'Non-regression test passed',
    description: 'Pre-submission check on Apr 2026 DSN — all validations green.',
    actor: 'System',
  },
]

export const TIMELINE_TYPES = ['All types', 'non-regression', 'sign-in', 'correction']

// --- Admins ---
// status: 'active' | 'invited' | 'disabled'
// permissions: array of 'Administrator' | 'Accountant'
// primaryContact: boolean
export const ADMINS = [
  { id: 1, name: 'Claire Fontaine', role: 'HR Manager',            status: 'active',   permissions: [],               primaryContact: true },
  { id: 2, name: 'Nicolas Aubert',  role: 'CEO',                   status: 'active',   permissions: [],               primaryContact: false },
  { id: 3, name: 'Isabelle Renaud', role: 'Finance Director',       status: 'active',   permissions: ['Accountant'],   primaryContact: false },
  { id: 4, name: 'Marc Tissier',    role: 'Office Manager',         status: 'invited',  permissions: [],               primaryContact: false },
  { id: 5, name: 'Lucie Garnier',   role: 'Payroll Administrator',  status: 'disabled', permissions: ['Accountant'],   primaryContact: false },
]

export const ORG_NAME = 'Faces org'

export const COMPANIES = [
  { id: 'smiles-inc',          name: 'Smiles.Inc',          siret: '45785745673245', status: 'active',   plan: 'RH+', employees: 7  },
  { id: 'smiles-operations',   name: 'Smiles Operations',   siret: '45785745600012', status: 'active',   plan: 'RH',  employees: 12 },
  { id: 'smiles-technologies', name: 'Smiles Technologies', siret: '45785745600089', status: 'inactive', plan: 'RH+', employees: 3  },
]

// Status chips for CompanyTopBar
// dividerAfter: true → render a vertical separator after this chip
export const STATUS_CHIPS = [
  { label: 'Cycle',     value: 'Mar 26 · 125', fullValue: null, warn: true, badge: true, calendarIcon: true, suffix: '+30 days' },
  { label: 'Status',    value: 'Active',        fullValue: null, statusDot: true, badge: true },
  { label: null,        value: 'Operational',   fullValue: null, badge: true },
  { label: 'Plan',      value: 'RH+',           fullValue: null },
  { label: 'Employees', value: '7',             fullValue: null },
  { label: 'Usage',     value: 'Client',        fullValue: null, dim: true },
  { label: 'Origin',    value: 'Migration',     fullValue: null, dim: true },
  { label: 'CL ID',     value: 'af35b7de-4f1c…', fullValue: 'af35b7de-4f1c-51ef-bc88-1282797490bd', mono: true, technical: true },
  { label: 'JL ID',     value: '56c72b558d…',    fullValue: '56c72b558dc34f0100ba8707',               mono: true, technical: true },
]

// DataDrawer sections
// rows: { label, value, faded?, encrypted? }
export const DRAWER_SECTIONS = [
  {
    id: 'identity',
    title: 'Identity',
    defaultOpen: true,
    badge: null,
    rows: [
      { label: 'SIRET',    value: '45785745673245' },
      { label: 'Code NAF', value: '6312Z', faded: true },
      { label: 'IDCC',     value: '1486' },
      { label: 'Country',  value: 'France' },
      { label: 'Created',  value: '26/04/23' },
      { label: 'Address',  value: '10 rue de Paradis, 75010' },
    ],
  },
  {
    id: 'urssaf',
    title: 'Urssaf',
    defaultOpen: false,
    badge: null,
    rows: [
      { label: 'Status',      value: 'Enabled', badgeVariant: 'active' },
      { label: 'Method',      value: 'SEPA direct debit' },
      { label: 'Limit date',  value: '15th of month' },
      { label: 'Periodicity', value: 'Monthly' },
      { label: 'Taux AT',     value: '0.700%' },
      { label: 'Taux VT',     value: '3%' },
    ],
  },
  {
    id: 'agirc-arrco',
    title: 'Agirc-Arrco',
    defaultOpen: false,
    badge: null,
    rows: [
      { label: 'Gestionnaire', value: 'Humanis' },
      { label: 'Method',       value: 'SEPA direct debit' },
      { label: 'Periodicity',  value: 'Quarterly' },
    ],
  },
  {
    id: 'prevoyance',
    title: 'Prévoyance',
    defaultOpen: false,
    badge: null,
    rows: [
      { label: 'Provider',    value: 'Alan' },
      { label: 'Method',      value: 'SEPA direct debit' },
      { label: 'Periodicity', value: 'Monthly' },
    ],
  },
  {
    id: 'mutuelle',
    title: 'Mutuelle',
    defaultOpen: false,
    badge: null,
    rows: [
      { label: 'Provider',    value: 'Alan' },
      { label: 'Method',      value: 'SEPA direct debit' },
      { label: 'Periodicity', value: 'Monthly' },
    ],
  },
  {
    id: 'banking',
    title: 'Banking',
    defaultOpen: false,
    badge: null,
    rows: [
      { label: 'BIC',  value: null, encrypted: true },
      { label: 'IBAN', value: null, encrypted: true },
    ],
  },
  {
    id: 'lifecycle',
    title: 'Lifecycle',
    defaultOpen: false,
    badge: null,
    rows: [
      { label: 'State', value: 'Active' },
    ],
  },
]
