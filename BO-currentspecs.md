# Backoffice Interface — Spec

## 1. File Structure

```
root/
└── Version.jsx                        ← root layout, routing, top-level state

modules/
├── dashboard/Dashboard.jsx
├── dsn/Dsn.jsx
├── admins/Admins.jsx
├── employees/Employees.jsx
├── files/FilesArchive.jsx
├── timeline/Timeline.jsx
├── onboarding/Onboarding.jsx          ← placeholder
├── registration/Registration.jsx      ← placeholder
├── churned/Churned.jsx                ← placeholder
├── delete/Delete.jsx                  ← placeholder
├── environment-migration/EnvironmentMigration.jsx  ← placeholder
├── operations-import/OperationsImport.jsx          ← placeholder
└── declaration-settings/DeclarationSettings.jsx

shared/
├── Section.jsx                        ← generic placeholder block
└── styles/base.css                    ← design tokens
```

Placeholder modules use `shared/Section.jsx` — a dashed box with a title and a note. They hold space for features not yet built.

---

## 2. Routing & Navigation Logic

Routing is **state-based** — no URL library. All routing is driven by two state variables in the root component:

| Variable | Default | Controls |
|---|---|---|
| `currentPage` | `'people'` | Active primary nav section |
| `activeSub` | `'dashboard'` | Active sub-tab within a page |

### Primary pages

```
people           → People
declaration      → Declaration
files            → Files
timeline         → Timeline
advanced-actions → Advanced Actions
```

`people`, `declaration`, and `files` are grouped visually as the main section. `timeline` and `advanced-actions` are secondary — right-aligned in the nav bar, separated by a divider.

### Sub-pages

Only two primary pages have sub-tabs:

```
declaration:
  dashboard    → Dashboard
  dsn          → DSN
  settings     → Declaration settings

advanced-actions:
  operations   → Operations
  migration    → Environment Migration
  import       → Bulk Import
```

### Default subs

When navigating to a page with sub-tabs, a default sub is set automatically:

```
declaration        → dashboard
advanced-actions   → operations
```

### Content mapping

| Page / Sub | Module rendered |
|---|---|
| `people` | `<Admins />` + `<Employees />` stacked |
| `declaration / dashboard` | `<Dashboard />` |
| `declaration / dsn` | `<Dsn />` |
| `declaration / settings` | `<DeclarationSettings />` |
| `files` | `<FilesArchive />` |
| `timeline` | `<Timeline />` |
| `advanced-actions / operations` | `<Onboarding />` + `<Registration />` + `<Churned />` + `<Delete />` stacked |
| `advanced-actions / migration` | `<EnvironmentMigration />` |
| `advanced-actions / import` | `<OperationsImport />` |

When a page has no sub-tabs, the content key is the page ID. When it does, the key is the active sub ID.

---

## 3. Layout Skeleton

### Region hierarchy

```
Root (horizontal flex)
├── GlobalNav
│     Left strip, fixed width, collapsible
└── Main (vertical flex, fills remaining width)
      ├── CompanyTopBar
      │     Horizontal bar, full width, fixed height
      └── Body (horizontal flex, fills remaining height)
            ├── Content (vertical flex, fills remaining width)
            │     ├── FirstLevelNav
            │     │     Horizontal nav bar, full width
            │     ├── SubTabBar (conditional)
            │     │     Only shown if current page has sub-tabs
            │     └── ScrollArea
            │           Fills remaining height, scrolls vertically
            │           └── ContentArea
            │                 Padded, vertical flex, renders modules
            └── DataDrawer
                  Right panel, collapsible
```

### Layout rules

- GlobalNav and DataDrawer collapse/expand by toggling width. At minimum width, only a toggle control is visible.
- SubTabBar is only rendered when the current page has sub-tabs. Not shown for `people`, `files`, or `timeline`.
- The ScrollArea is the only scrolling region. Everything above it (nav bars, top bar) stays fixed.
- ContentArea has consistent padding (20px) and vertical gap (16px) between modules.
- When multiple modules stack (people, advanced-actions/operations), they are siblings inside ContentArea — not nested.

### Dimensions

| Region | Collapsed | Expanded |
|---|---|---|
| GlobalNav width | 48px | 160px |
| DataDrawer width | 32px | 240px |
| CompanyTopBar height | — | 56px min |
| FirstLevelNav height | — | 40px |

---

## 4. Component Inventory

### Root component

Owns all top-level layout and routing state. Passes `currentPage`, `activeSub`, and callbacks down to nav components. Passes `currentCompany` and `onCompanyChange` to CompanyTopBar.

**State:**
- `currentPage` — active primary page
- `activeSub` — active sub-tab
- `currentCompany` — selected company name
- `drawerOpen` — DataDrawer visibility

---

### GlobalNav

Left vertical strip. Always visible. Independent of page state.

**Behavior:**
- Collapses to icon-only width. Expands to show labels.
- Toggle button at bottom of the strip.
- Three sections: top (avatar/org), middle (primary nav), bottom (utilities).
- "Companies" is always shown as active — the user is always operating within the Companies context.

**Items:**

Primary: Companies (active), Declarations, Billing

Bottom: History, Settings, Account

---

### CompanyTopBar

Full-width horizontal bar. Establishes company context for all content below it.

**Regions (left to right):**

1. **Identity** — org name + company name + company count + dropdown trigger
2. **Status chips** — a row of labeled metadata chips
3. **Connect button** — "Log In" action

**Behavior:**
- Clicking the identity section opens a dropdown listing all companies with their SIRET. Clicking a company switches context.
- Some chips are copyable. Hovering reveals copy affordance; clicking copies the full value and shows a "Copied" tooltip for 900ms.
- Two visual dividers in the chip row separate groups.

---

### TopBarChip

A single chip in the CompanyTopBar status row.

**Props:**
- `label` — uppercase small label
- `value` — display value
- `fullValue` — if present, chip is copyable and this is what gets copied
- `accent` — blue text treatment
- `dim` — de-emphasized text treatment
- `mono` — monospace font

---

### FirstLevelNav

Primary navigation bar. Spans full width of the content area.

**Behavior:**
- Left side: primary items (People, Declaration, Files)
- Right side: secondary items (Timeline, Advanced Actions), pushed right with a spacer/divider
- Active item: bold text with a bottom border indicator
- Navigating to a page with a default sub sets `activeSub` automatically

---

### SubTabBar

Secondary navigation. Only rendered when the current page has sub-tabs.

**Behavior:**
- Same visual language as FirstLevelNav but at a secondary level
- Clicking a tab updates `activeSub`

---

### DataDrawer

Collapsible right panel with static company metadata.

**Behavior:**
- Collapsed: toggle control only (32px)
- Expanded: metadata sections (240px)
- Sections are independently collapsible
- "Identity" section is open by default; others closed

**Sections:** Identity, Urssaf (badge: Enabled), Agirc-Arrco, Prévoyance, Mutuelle, Banking, Lifecycle

---

### MetaSection

A collapsible section within the DataDrawer.

**Props:** title, optional badge, defaultOpen, rows

---

### MetaRow

A single key/value row inside a MetaSection.

**Props:**
- `label`
- `value`
- `faded` — de-emphasized color
- `encrypted` — shows `[Encrypted]` instead of value, non-copyable

Copyable unless encrypted. Same hover/click/tooltip pattern as TopBarChip.

---

### ContentArea

Renders the correct module(s) based on `currentPage` and `activeSub`. No visual chrome — layout container and routing logic only.

---

### useCopyable (custom hook)

Shared across TopBarChip and MetaRow. Manages hover state, copied state, and clipboard write. Tooltip disappears after 900ms.

```
useCopyable(fullValue) → { hovered, setHovered, copied, handleClick }
```

---

## 5. Content — Labels & Data

### Organisation & companies

```
Org name:  Faces org
Country:   FR

Companies:
  Smiles.Inc            45785745673245
  Smiles Operations     45785745600012
  Smiles Technologies   45785745600089
```

Default selected: `Smiles.Inc`

### Status chips (CompanyTopBar)

| Label | Display value | Full value (copied) | Treatment |
|---|---|---|---|
| Cycle | Mar 26 (125) | — | accent |
| Status | Active | — | accent |
| Plan | RH+ | — | normal |
| Employees | 7 | — | normal |
| Usage | Client | — | dim |
| Origin | Migration | — | dim |
| CL ID | af35b7de-4f1c… | af35b7de-4f1c-51ef-bc88-1282797490bd | mono, copyable |
| JL ID | 56c72b558d… | 56c72b558dc34f0100ba8707 | mono, copyable |

Dividers after index 3 (after Employees) and index 5 (after Origin).

### DataDrawer metadata

**Identity:**
SIRET: 45785745673245 / Code NAF: 6312Z (faded) / IDCC: 1486 / Country: France / Created: 26/04/23 / Address: 10 rue de Paradis, 75010

**Urssaf** (badge: Enabled):
Method: SEPA direct debit / Limit date: 15th of month / Periodicity: Monthly / Taux AT: 0.700% / Taux VT: 3%

**Agirc-Arrco:**
Gestionnaire: Humanis / Method: SEPA direct debit / Periodicity: Quarterly

**Prévoyance:**
Provider: Alan / Method: SEPA direct debit / Periodicity: Monthly

**Mutuelle:**
Provider: Alan / Method: SEPA direct debit / Periodicity: Monthly

**Banking:**
BIC: [Encrypted] / IBAN: [Encrypted]

**Lifecycle:**
State: Active

---

## 6. Module Content & Data

### Dashboard

A single task card.

```
Company:   SMILES.INC
Period:    April 2026
Tags:      DSN, Mensuelle
Container: READY TO BE SENT
Type:      01 Initiale
Numero:    1774951935889
Status:    VALIDATION SUCCESSFUL
Generated: 31/03/2026 12:12

Alerts:
  - "Payment date limit 15th" / "Date d'échéance réelle : 15/05/2026"
  - "Régularisation - Module de correction" / "Régularisation via le nouveau module de régularisation"
```

UI: header with status chips, action buttons, generation timestamp, alert cards.

---

### DSN

Tabular view of DSN records by type. Six sections:

| Section | Count |
|---|---|
| Mensuelles | 10 |
| Néants | 0 |
| FCTU | 10 |
| Arrêts | 10 |
| Reprises | 0 |
| Amorçage | 8 |

Feedback codes: OK (green), URSSAF120 / OC51 / SNGGO (amber).

UI: month filter, "Sent & accepted" toggle, action buttons per row.

---

### Admins

Table of 5 admin users.

| Name | Role | Status | Permissions |
|---|---|---|---|
| Claire Fontaine | HR Manager | active | — (primary contact) |
| Nicolas Aubert | CEO | active | — |
| Isabelle Renaud | Finance Director | active | Accountant |
| Marc Tissier | Office Manager | invited | — |
| Lucie Garnier | Payroll Administrator | disabled | Accountant |

Status: active (green dot), invited (orange dot), disabled (grey dot).
Permission badges: Administrator (orange), Accountant (purple).
Row action: "Sign in as" button.

---

### Employees

Headcount chart (24 months, Apr 2024 – Mar 2026) + collaborator table.

| Name | Contract | Role | Status | Start |
|---|---|---|---|---|
| Alice Martin | CDI | Admin | active | 2022-03-14 |
| Thomas Bernard | CDI | Admin | active | 2021-11-02 |
| Sophie Leclerc | CDD | Employee | active | 2023-06-01 |
| Julien Morel | CDI | Employee | active | 2020-08-15 |
| Emma Petit | CDD | Employee | inactive | 2023-09-01 |
| Romain Dubois | CDI | Employee | active | 2019-04-22 |
| Camille Rousseau | CDI | Employee | off | 2022-01-10 |

Contract: CDI (grey), CDD (blue).
Row action: login button, overflow menu.

---

### FilesArchive

12 files across 5 categories with search and filter controls.

Categories: Payslips, Exports, FSN, Feedback, Other — each with a distinct color treatment.

Filter controls: text search, category select, employee select, month select.

---

### Timeline

8 events grouped by month (Feb and Mar 2026). Event types: non-regression, sign-in, correction.

Controls: text search, type filter.

---

### DeclarationSettings

Read-only display rows + editable fields.

Fields:
- Net-Entreprises permissions (read-only)
- Submission status toggle (Enabled / Disabled, inline)
- Declaration start date: month, year, day selects with Save / Discard actions

---

### Placeholder modules

Use `shared/Section.jsx` — a titled dashed block with a note. No behavior.

Sections: Onboarding, Registration, Churned, Delete, Environment Migration, Operations Import

---

## 7. Design Decisions

**Horizontal top bar for entity context.** Company identity and status live in a horizontal bar across the top, not a vertical sidebar. This keeps the information immediately visible without consuming horizontal space.

**Status chips as the primary entity summary.** The top bar condenses the most actionable attributes (cycle, status, plan, headcount) into a scannable chip row rather than a card or table. The two-divider grouping (operating info / provenance / IDs) is intentional.

**Copy interaction on IDs and metadata.** IDs and identifiers are copyable via click. Hover reveals the affordance; click confirms with a brief tooltip. No copy icon at rest — the affordance is discovered on hover.

**DataDrawer as a secondary reference panel.** The right drawer holds metadata that is useful for context but not the primary task. Starts open, can be dismissed. Sections collapse individually so users can focus on what they need.

**GlobalNav always shows the current context as active.** The user is always inside one space (Companies). GlobalNav reflects this, while still providing access to cross-entity areas (Declarations, Billing).

**State-based routing.** No URL structure. Navigation is entirely state-driven.

**People page stacks Admins and Employees.** Two distinct entity types under one conceptual section. Displayed as a vertical stack rather than tabs — both are always relevant at once.

**Operations stacks four sections.** Onboarding, Registration, Churned, and Delete are related lifecycle operations surfaced together under one sub-tab.

**Files and Timeline are intentionally flat.** No sub-tabs.
