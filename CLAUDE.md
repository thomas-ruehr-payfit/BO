# Backoffice — Claude project context

## Stack
- **Vite** + **React 19** (JSX, no TypeScript)
- **Tailwind CSS v3** — only source of styling
- **shadcn/ui** (New York style, CSS vars, neutral base) — all UI primitives
- **Lucide React** — icons only
- **Vercel** via GitHub for deployment

---

## Folder structure

```
src/
├── App.jsx                  ← root state owner (currentPage, activeSub, currentCompany, drawerOpen)
├── main.jsx
├── index.css                ← Tailwind directives + shadcn CSS variable definitions
│
├── routes/                  ← one file per primary nav page; composes modules
│   ├── People.jsx
│   ├── Declaration.jsx
│   ├── Files.jsx
│   ├── Timeline.jsx
│   └── AdvancedActions.jsx
│
├── layouts/                 ← structural shell components; no business logic
│   ├── AppShell.jsx         ← root flex container, threads all state down
│   ├── GlobalNav.jsx        ← left strip (48px collapsed / 160px expanded)
│   ├── CompanyTopBar.jsx    ← full-width top bar (56px), company context
│   ├── FirstLevelNav.jsx    ← primary nav bar (40px), left + right groups
│   ├── SubTabBar.jsx        ← secondary nav (36px), conditional on page
│   ├── DataDrawer.jsx       ← right panel (32px collapsed / 240px expanded)
│   └── ContentArea.jsx      ← maps (currentPage, activeSub) → route component
│
├── components/              ← shared presentational components
│   ├── ui/                  ← shadcn/ui generated — DO NOT hand-edit
│   ├── TopBarChip.jsx       ← chip in CompanyTopBar (copyable via useCopyable)
│   ├── MetaSection.jsx      ← collapsible section in DataDrawer
│   └── MetaRow.jsx          ← key/value row (copyable unless encrypted)
│
├── modules/                 ← feature modules; one folder per module
│   ├── dashboard/Dashboard.jsx
│   ├── dsn/Dsn.jsx
│   ├── admins/Admins.jsx
│   ├── employees/Employees.jsx
│   ├── files/FilesArchive.jsx
│   ├── timeline/Timeline.jsx
│   ├── onboarding/Onboarding.jsx           ← placeholder
│   ├── registration/Registration.jsx       ← placeholder
│   ├── churned/Churned.jsx                 ← placeholder
│   ├── delete/Delete.jsx                   ← placeholder
│   ├── environment-migration/EnvironmentMigration.jsx  ← placeholder
│   ├── operations-import/OperationsImport.jsx          ← placeholder
│   └── declaration-settings/DeclarationSettings.jsx
│
├── hooks/
│   └── useCopyable.js       ← shared hover/clipboard/tooltip state (900ms reset)
│
├── lib/
│   ├── constants.js         ← PRIMARY_NAV, SUB_TABS, DEFAULT_SUBS, PAGES_WITH_SUBS, DIMENSIONS
│   ├── data.js              ← COMPANIES, STATUS_CHIPS, DRAWER_SECTIONS (mock data)
│   └── utils.js             ← cn() helper (clsx + tailwind-merge)
│
└── shared/
    └── Section.jsx          ← dashed placeholder block for unbuilt modules
```

---

## Routing model

State-based — **no URL library**. All routing lives in `App.jsx`.

| State variable | Default | Controls |
|---|---|---|
| `currentPage` | `'people'` | Active primary nav section |
| `activeSub` | `'dashboard'` | Active sub-tab within a page |

- `handleNavigate(page)` — sets `currentPage`; auto-applies `DEFAULT_SUBS` if page has sub-tabs
- `PAGES_WITH_SUBS` (Set) — `'declaration'` and `'advanced-actions'`
- Sub-tabs are only rendered when `PAGES_WITH_SUBS.has(currentPage)`

Content mapping lives in `src/layouts/ContentArea.jsx` (page → route) and each route file (sub → module).

---

## Design tokens

**All tokens live in `tailwind.config.js`.** Never hardcode values in components.

| Category | Token prefix | Example |
|---|---|---|
| Surfaces | `surface-{0–3}` | `bg-surface-1` |
| Borders | `border`, `border-strong` | `border-border` |
| Text | `text-{primary,secondary,tertiary}` | `text-text-secondary` |
| Accent | `accent`, `accent-subtle` | `text-accent`, `bg-accent-subtle` |
| Status | `status-{active,invited,disabled,off}` | `text-status-active` |
| Badges | `badge-{admin,accountant}` | `bg-badge-admin-subtle` |
| Feedback | `feedback-{ok,warn}` | `text-feedback-ok` |
| Type scale | `text-{h1–h4,body,body-sm,caption,label}` | `text-h3`, `text-caption` |
| Duration | `duration-{fast,base,slow}` | `duration-fast` (100ms) |

**Arbitrary values (`[value]`) are a last resort.** If you find yourself using them, consider adding a token.

---

## Coding conventions

- **One responsibility per file.** No logic sprawl.
- **Tailwind only.** No inline `style={{}}`, no `.css` files, no CSS modules.
- **shadcn/ui for all UI primitives.** Install via `npx shadcn@latest add <component>`. Never hand-edit `src/components/ui/`.
- **`cn()` for conditional classes.** Import from `@/lib/utils`.
- **No prop drilling past two levels.** If a value needs to go deeper, reconsider the architecture.
- **No comments on obvious code.** Only comment non-obvious decisions.
- **No unsolicited abstractions.** Don't build a helper for one use.

---

## Component patterns

### Copy interaction
Used by `TopBarChip` and `MetaRow`. Implemented via `useCopyable(fullValue)`:
- No copy icon at rest
- Hover reveals affordance (underline + background tint)
- Click copies `fullValue` to clipboard, shows "Copied" tooltip for 900ms

### Collapsible sections
Used by `MetaSection` (DataDrawer). Uses shadcn `Collapsible`. ChevronRight rotates 90° when open.

### Nav active state
`border-b-2 border-accent` on active tab. `-mb-px` to overlap the container border.

---

## Layout dimensions (from spec)

| Region | Collapsed | Expanded |
|---|---|---|
| GlobalNav | 48px | 160px |
| DataDrawer | 32px | 240px |
| CompanyTopBar | — | 56px min |
| FirstLevelNav | — | 40px |
| SubTabBar | — | 36px |

Collapse/expand is implemented by toggling `width` with Tailwind transition classes (`transition-[width] duration-base`).

---

## Module status

| Module | Status |
|---|---|
| Dashboard | Stub |
| DSN | Stub |
| Admins | Stub |
| Employees | Stub |
| FilesArchive | Stub |
| Timeline | Stub |
| DeclarationSettings | Stub |
| Onboarding | Placeholder (Section) |
| Registration | Placeholder (Section) |
| Churned | Placeholder (Section) |
| Delete | Placeholder (Section) |
| EnvironmentMigration | Placeholder (Section) |
| OperationsImport | Placeholder (Section) |

---

## Mock data location

`src/lib/data.js` — companies, status chips, drawer sections. All spec data lives here.

When building real modules, replace mock data with actual API calls. Keep data out of component files.
