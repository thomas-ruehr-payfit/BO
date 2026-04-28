// Mock data from BO-currentspecs.md

export const CURRENT_PAYROLL_CYCLE = 'April 2026'

// --- People ---
// portals: ('admin' | 'manager' | 'accountant' | 'collaborator')[]
// contract: 'CDI' | 'CDD' | null
// status: 'active' | 'invited' | 'disabled'
export const PEOPLE = [
  {
    id: 'p1', name: 'Claire Fontaine', email: 'claire.fontaine@smiles.inc',
    uid: 'cf100001-ab2d-4e30-8765-100010001001', portals: ['admin', 'collaborator'], contract: 'CDI', status: 'active',
    gender: 'Female', dob: '14/03/1985', nationality: 'French', ssn: '285037512345678', address: '12 Rue de la Paix, 75001 Paris',
    jobTitle: 'Head of Operations', department: 'Operations', startDate: '01/09/2018', endDate: null, salary: '5 800 €',
    payrollImpactors: {
      absences: [{ label: 'Congés payés', value: '2.5 jours' }, { label: 'RTT', value: '1 jour' }, { label: 'Maladie', value: '—' }],
      bonuses:  [{ label: 'Prime performance', value: '800 €' }],
    },
  },
  {
    id: 'p2', name: 'Nicolas Aubert', email: 'nicolas.aubert@smiles.inc',
    uid: 'ab200002-bc3e-4f41-8766-200020002002', portals: ['admin'], contract: null, status: 'active',
    gender: 'Male', dob: '22/07/1979', nationality: 'French', ssn: '179075598765432', address: '8 Avenue Montaigne, 75008 Paris',
    jobTitle: 'CEO', department: 'Executive', startDate: '15/01/2015', endDate: null, salary: '9 200 €',
    payrollImpactors: {
      absences: [{ label: 'Congés payés', value: '—' }, { label: 'RTT', value: '—' }],
      bonuses:  [],
    },
  },
  {
    id: 'p3', name: 'Isabelle Renaud', email: 'isabelle.renaud@smiles.inc',
    uid: 'cd300003-def0-4e52-8767-300030003003', portals: ['admin', 'accountant', 'collaborator'], contract: 'CDI', status: 'active',
    gender: 'Female', dob: '05/11/1988', nationality: 'French', ssn: '288115534561234', address: '3 Rue du Faubourg Saint-Antoine, 75011 Paris',
    jobTitle: 'Finance Director', department: 'Finance', startDate: '03/03/2020', endDate: null, salary: '6 400 €',
    payrollImpactors: {
      absences: [{ label: 'Congés payés', value: '1 jour' }, { label: 'RTT', value: '0.5 jour' }, { label: 'Maladie', value: '—' }],
      bonuses:  [],
    },
  },
  {
    id: 'p4', name: 'Marc Tissier', email: 'marc.tissier@smiles.inc',
    uid: 'ef400004-fa01-4b63-8768-400040004004', portals: ['admin', 'manager'], contract: null, status: 'invited',
    gender: 'Male', dob: '30/06/1983', nationality: 'Belgian', ssn: null, address: '17 Boulevard Haussmann, 75009 Paris',
    jobTitle: 'VP Engineering', department: 'Engineering', startDate: null, endDate: null, salary: '7 500 €',
    payrollImpactors: {
      absences: [{ label: 'Congés payés', value: '—' }, { label: 'RTT', value: '—' }],
      bonuses:  [],
    },
  },
  {
    id: 'p5', name: 'Lucie Garnier', email: 'lucie.garnier@smiles.inc',
    uid: 'be500005-ec12-4974-8769-500050005005', portals: ['accountant', 'collaborator'], contract: 'CDI', status: 'disabled',
    gender: 'Female', dob: '18/02/1991', nationality: 'French', ssn: '291025587654321', address: '25 Rue Oberkampf, 75011 Paris',
    jobTitle: 'Accountant', department: 'Finance', startDate: '10/06/2019', endDate: null, salary: '3 900 €',
    payrollImpactors: {
      absences: [{ label: 'Congés payés', value: '3 jours' }, { label: 'RTT', value: '—' }],
      bonuses:  [],
    },
  },
  {
    id: 'p6', name: 'Alice Martin', email: 'alice.martin@smiles.inc',
    uid: 'a1b2c3d4-e5f6-4890-ab12-ef1234567890', portals: ['manager', 'collaborator'], contract: 'CDI', status: 'active',
    gender: 'Female', dob: '09/09/1990', nationality: 'French', ssn: '290095521098765', address: '6 Rue de Rivoli, 75004 Paris',
    jobTitle: 'Product Manager', department: 'Product', startDate: '02/01/2021', endDate: null, salary: '4 700 €',
    payrollImpactors: {
      absences: [{ label: 'Congés payés', value: '1.5 jours' }, { label: 'RTT', value: '1 jour' }, { label: 'Maladie', value: '—' }],
      bonuses:  [{ label: 'Prime objectifs', value: '600 €' }],
    },
  },
  {
    id: 'p7', name: 'Thomas Bernard', email: 'thomas.bernard@smiles.inc',
    uid: 'b2c3d4e5-f670-4012-bc23-f12345678901', portals: ['collaborator'], contract: 'CDI', status: 'active',
    gender: 'Male', dob: '14/12/1993', nationality: 'French', ssn: '193125567890123', address: '42 Rue de la Roquette, 75011 Paris',
    jobTitle: 'Software Engineer', department: 'Engineering', startDate: '15/09/2022', endDate: null, salary: '4 200 €',
    payrollImpactors: {
      absences: [{ label: 'Congés payés', value: '2 jours' }, { label: 'RTT', value: '—' }],
      bonuses:  [],
    },
  },
  {
    id: 'p8', name: 'Sophie Leclerc', email: 'sophie.leclerc@smiles.inc',
    uid: 'c3d4e5f6-7890-4234-cd34-123456789012', portals: ['collaborator'], contract: 'CDD', status: 'active',
    gender: 'Female', dob: '27/04/1996', nationality: 'French', ssn: '296045512345098', address: '11 Rue Beaubourg, 75003 Paris',
    jobTitle: 'Marketing Intern', department: 'Marketing', startDate: '01/01/2026', endDate: '30/06/2026', salary: '2 200 €',
    payrollImpactors: {
      absences: [{ label: 'Congés payés', value: '1 jour' }],
      bonuses:  [],
    },
  },
  {
    id: 'p9', name: 'Julien Morel', email: 'julien.morel@smiles.inc',
    uid: 'd4e5f678-9012-4456-de45-234567890123', portals: ['collaborator'], contract: 'CDI', status: 'active',
    gender: 'Male', dob: '03/08/1987', nationality: 'French', ssn: '187085523456789', address: '19 Rue des Martyrs, 75009 Paris',
    jobTitle: 'Customer Success', department: 'Operations', startDate: '14/04/2020', endDate: null, salary: '3 600 €',
    payrollImpactors: {
      absences: [{ label: 'Congés payés', value: '—' }, { label: 'RTT', value: '2 jours' }],
      bonuses:  [{ label: 'Astreinte', value: '200 €' }],
    },
  },
  {
    id: 'p10', name: 'Emma Petit', email: 'emma.petit@smiles.inc',
    uid: 'e5f67890-1234-4678-ef56-345678901234', portals: ['collaborator'], contract: 'CDD', status: 'disabled',
    gender: 'Female', dob: '11/01/1998', nationality: 'French', ssn: '298015534512345', address: '7 Rue Lepic, 75018 Paris',
    jobTitle: 'Design Intern', department: 'Product', startDate: '01/06/2025', endDate: '30/11/2025', salary: '2 000 €',
    payrollImpactors: {
      absences: [{ label: 'Congés payés', value: '2 jours' }],
      bonuses:  [],
    },
  },
  {
    id: 'p11', name: 'Romain Dubois', email: 'romain.dubois@smiles.inc',
    uid: 'f6789012-3456-4890-fa67-456789012345', portals: ['collaborator'], contract: 'CDI', status: 'active',
    gender: 'Male', dob: '25/05/1989', nationality: 'French', ssn: '189055598765012', address: '33 Avenue de la République, 75011 Paris',
    jobTitle: 'Sales Manager', department: 'Sales', startDate: '07/02/2023', endDate: null, salary: '4 100 €',
    payrollImpactors: {
      absences: [{ label: 'Congés payés', value: '1 jour' }, { label: 'RTT', value: '—' }],
      bonuses:  [{ label: 'Commission', value: '1 200 €' }],
    },
  },
  {
    id: 'p12', name: 'Camille Rousseau', email: 'camille.rousseau@smiles.inc',
    uid: '78901234-5678-4012-ab78-567890123456', portals: ['collaborator'], contract: 'CDI', status: 'disabled',
    gender: 'Female', dob: '16/10/1992', nationality: 'French', ssn: '292105587651234', address: '2 Rue de la Fontaine au Roi, 75011 Paris',
    jobTitle: 'HR Generalist', department: 'HR', startDate: '20/11/2021', endDate: null, salary: '3 800 €',
    payrollImpactors: {
      absences: [{ label: 'Congés payés', value: '2 jours' }, { label: 'RTT', value: '1 jour' }],
      bonuses:  [],
    },
  },
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


export const ORG_NAME = 'Faces org'

export const COMPANIES = [
  { id: 'smiles-inc',          name: 'Smiles.Inc',          siret: '45785745673245', status: 'active',   plan: 'RH+', employees: 7,  country: 'FR' },
  { id: 'smiles-operations',   name: 'Smiles Operations',   siret: '45785745600012', status: 'active',   plan: 'RH',  employees: 12, country: 'FR' },
  { id: 'smiles-technologies', name: 'Smiles Technologies', siret: '45785745600089', status: 'inactive', plan: 'RH+', employees: 3,  country: 'FR' },
]

// cycle: { absMonth, daysLate }
// absMonth: absolute month counter — January 2015 = 1, April 2026 = 136
// daysLate: null if on current cycle (April 2026 = 136), otherwise days overdue
export const ORGANISATIONS = [
  {
    id: 'faces-group',
    name: 'Faces Group',
    companies: [
      { id: 'smiles-inc',          name: 'Smiles.Inc',          siret: '45785745673245', status: 'active',   employees: 7,  cycle: { absMonth: 135, daysLate: 30  }, country: 'FR' },
      { id: 'smiles-operations',   name: 'Smiles Operations',   siret: '45785745600012', status: 'active',   employees: 12, cycle: { absMonth: 136, daysLate: null }, country: 'FR' },
      { id: 'smiles-technologies', name: 'Smiles Technologies', siret: '45785745600089', status: 'inactive', employees: 3,  cycle: { absMonth: 136, daysLate: null }, country: 'FR' },
      { id: 'smiles-studios',      name: 'Smiles Studios',      siret: '45785745600156', status: 'active',   employees: 5,  cycle: { absMonth: 136, daysLate: null }, country: 'FR' },
    ],
  },
  {
    id: 'vertigo',
    name: 'Vertigo',
    companies: [
      { id: 'vertigo-paris', name: 'Vertigo Paris', siret: '72394856100021', status: 'active', employees: 24, cycle: { absMonth: 136, daysLate: null }, country: 'FR' },
      { id: 'vertigo-lyon',  name: 'Vertigo Lyon',  siret: '72394856100048', status: 'active', employees: 8,  cycle: { absMonth: 135, daysLate: 15   }, country: 'FR' },
    ],
  },
  {
    id: 'northstar',
    name: 'Northstar',
    companies: [
      { id: 'northstar-sas',        name: 'Northstar SAS',        siret: '89123456700041', status: 'active',   employees: 31, cycle: { absMonth: 136, daysLate: null }, country: 'FR' },
      { id: 'northstar-holding',    name: 'Northstar Holding',    siret: '89123456700058', status: 'inactive', employees: 1,  cycle: { absMonth: 133, daysLate: 75   }, country: 'GB' },
      { id: 'northstar-digital',    name: 'Northstar Digital',    siret: '89123456700065', status: 'active',   employees: 15, cycle: { absMonth: 136, daysLate: null }, country: 'FR' },
      { id: 'northstar-events',     name: 'Northstar Events',     siret: '89123456700072', status: 'active',   employees: 6,  cycle: { absMonth: 136, daysLate: null }, country: 'DE' },
      { id: 'northstar-consulting', name: 'Northstar Consulting', siret: '89123456700089', status: 'active',   employees: 9,  cycle: { absMonth: 134, daysLate: 20   }, country: 'FR' },
    ],
  },
]

// Status chips for CompanyTopBar
// dividerAfter: true → render a vertical separator after this chip
export const STATUS_CHIPS = [
  { label: 'Cycle',     value: 'March 26 (135)', fullValue: null, warn: true, badge: true, calendarIcon: true, suffix: '+30 days' },
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
