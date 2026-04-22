# Backoffice — Claude project context

## Stack
- **Vite** + **React 19** (JSX, no TypeScript)
- **Tailwind CSS v3** — only source of styling
- **shadcn/ui** (New York style, CSS vars, neutral base) — all UI primitives; install via `npx shadcn@latest add <component>`; never hand-edit `src/components/ui/`
- **Lucide React** — icons only
- **Vercel** via GitHub for deployment

---

## Routing model

State-based — no URL library. `currentPage` and `activeSub` live in `App.jsx`.
Content mapping: `App.jsx` → `ContentArea.jsx` (page → route) → route file (sub → module).

---

## Design tokens

All tokens live in `tailwind.config.js`. Never hardcode values.

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

Arbitrary values (`[value]`) are a last resort.

---

## Conventions
- `cn()` for conditional classes — import from `@/lib/utils`
- Tailwind only — no `style={{}}`, no `.css` files
