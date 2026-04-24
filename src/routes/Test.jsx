function LayoutPreview() {
  return (
    <div className="flex flex-col gap-8">

      {/* ── Realistic layout ─────────────────────────────────── */}
      <div>
        <p className="text-label text-text-tertiary uppercase tracking-widest mb-3">Real layout</p>
        {/* Outer shell — canvas */}
        <div className="bg-canvas p-2 flex gap-2" style={{ width: 420, height: 270 }}>
          {/* Global nav — surface-0 */}
          <div className="bg-surface-0 shrink-0" style={{ width: 30 }} />
          {/* Main area */}
          <div className="flex flex-col flex-1 gap-2 min-w-0">
            {/* Top bar — surface-0 */}
            <div className="bg-surface-0 shrink-0" style={{ height: 30 }} />
            {/* Content row */}
            <div className="flex flex-1 gap-2 min-h-0">
              {/* Page content — surface-1 */}
              <div className="bg-surface-1 flex-1 flex flex-col gap-1.5 p-2">
                {/* Sub-nav strip — surface-2 */}
                <div className="bg-surface-2 shrink-0" style={{ height: 15 }} />
                {/* Content area — surface-1 (already set), with cards */}
                <div className="flex-1 flex gap-1.5">
                  <div className="flex-1 flex flex-col gap-1.5">
                    <div className="bg-surface-0 flex-1" />
                    <div className="bg-surface-0 flex-1" />
                  </div>
                  <div className="flex-1 flex flex-col gap-1.5">
                    <div className="bg-surface-0 flex-1" />
                    <div className="bg-surface-0 flex-1" />
                  </div>
                </div>
              </div>
              {/* Drawer — surface-0 */}
              <div className="bg-surface-0 shrink-0" style={{ width: 54 }} />
            </div>
          </div>
        </div>
      </div>

      {/* ── Abstract layers ───────────────────────────────────── */}
      <div>
        <p className="text-label text-text-tertiary uppercase tracking-widest mb-3">Surface layers</p>
        <div className="flex flex-col" style={{ width: 420 }}>
          {[
            ['canvas',         'bg-canvas',         'Canvas'],
            ['surface-topbar', 'bg-surface-topbar', 'surface-topbar — Top bar'],
            ['surface-1',      'bg-surface-1',      'surface-1 — Page'],
            ['surface-2',      'bg-surface-2',      'surface-2 — Sub-nav'],
            ['surface-0',      'bg-surface-0',      'surface-0 — Nav / Cards'],
            ['surface-3',      'bg-surface-3',      'surface-3 — Dividers'],
          ].map(([key, cls, label], i) => (
            <div
              key={key}
              className={`${cls} flex items-center px-3`}
              style={{ height: 36, marginLeft: i * 12 }}
            >
              <span className="text-label text-text-tertiary">{label}</span>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}

export default function Test() {
  return (
    <div className="flex-1 overflow-y-auto bg-canvas">
      <div className="flex min-h-full">

        {/* ── Left: token documentation ─────────────────────────────── */}
        <div className="flex-1 p-8 space-y-12 min-w-0">

          {/* Type scale */}
          <section className="space-y-3">
            <h2 className="text-h4 text-text-tertiary uppercase tracking-widest pb-2 border-b border-border">Type scale</h2>
            <div className="space-y-2">
              <p className="text-h1 text-text-primary">h1 — Heading 1 (1.5rem / 600)</p>
              <p className="text-h2 text-text-primary">h2 — Heading 2 (1.25rem / 600)</p>
              <p className="text-h3 text-text-primary">h3 — Heading 3 (1rem / 600)</p>
              <p className="text-h4 text-text-primary">h4 — Heading 4 (0.875rem / 600)</p>
              <p className="text-body text-text-primary">body — Body text (0.875rem / 400)</p>
              <p className="text-body-sm text-text-primary">body-sm — Body small (0.8125rem / 400)</p>
              <p className="text-caption text-text-primary">caption — Caption (0.75rem / 400)</p>
              <p className="text-label text-text-primary">LABEL — Label (0.6875rem / 500 / tracked)</p>
            </div>
          </section>

          {/* Text colors */}
          <section className="space-y-3">
            <h2 className="text-h4 text-text-tertiary uppercase tracking-widest pb-2 border-b border-border">Text</h2>
            <div className="flex gap-6 flex-wrap">
              {[
                ['text-primary',   'text-text-primary',   '#1D1D1D'],
                ['text-secondary', 'text-text-secondary', '#686663'],
                ['text-tertiary',  'text-text-tertiary',  '#A2A2A2'],
              ].map(([name, cls, hex]) => (
                <div key={name} className="flex items-center gap-2">
                  <span className={`text-body font-medium ${cls}`}>Aa</span>
                  <div>
                    <p className="text-caption text-text-primary">{name}</p>
                    <p className="text-label text-text-tertiary">{hex}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Surfaces */}
          <section className="space-y-3">
            <h2 className="text-h4 text-text-tertiary uppercase tracking-widest pb-2 border-b border-border">Surfaces</h2>
            <div className="flex gap-3 flex-wrap">
              {[
                ['surface-0',      'bg-surface-0',      '#ffffff'],
                ['surface-1',      'bg-surface-1',      '#F6F6F6'],
                ['surface-2',      'bg-surface-2',      '#EBEBEB'],
                ['surface-3',      'bg-surface-3',      '#E3E3E3'],
                ['surface-topbar', 'bg-surface-topbar', '#EFEFEF'],
                ['canvas',         'bg-canvas',         '#FAFAFA'],
              ].map(([name, cls, hex]) => (
                <div key={name} className="flex flex-col items-center gap-1">
                  <div className={`w-16 h-16 rounded border border-border ${cls}`} />
                  <p className="text-caption text-text-primary text-center">{name}</p>
                  <p className="text-label text-text-tertiary">{hex}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Borders */}
          <section className="space-y-3">
            <h2 className="text-h4 text-text-tertiary uppercase tracking-widest pb-2 border-b border-border">Borders</h2>
            <div className="flex gap-6 flex-wrap">
              <div className="flex flex-col gap-1">
                <div className="w-32 h-8 rounded border border-border bg-surface-0" />
                <p className="text-caption text-text-primary">border</p>
                <p className="text-label text-text-tertiary">#e2e2e5 — content</p>
              </div>
              <div className="flex flex-col gap-1">
                <div className="w-32 h-8 rounded border border-border-strong bg-surface-0" />
                <p className="text-caption text-text-primary">border-strong</p>
                <p className="text-label text-text-tertiary">#c8c8cc</p>
              </div>
              <div className="flex flex-col gap-1">
                <div className="w-32 h-8 rounded border border-border-warm bg-surface-topbar" />
                <p className="text-caption text-text-primary">border-warm</p>
                <p className="text-label text-text-tertiary">#d8d2c7 — panels on canvas</p>
              </div>
            </div>
          </section>

          {/* Accent */}
          <section className="space-y-3">
            <h2 className="text-h4 text-text-tertiary uppercase tracking-widest pb-2 border-b border-border">Accent</h2>
            <div className="flex gap-3 flex-wrap">
              {[
                ['accent',        'bg-accent',        '#ea580c'],
                ['accent-subtle', 'bg-accent-subtle', '#fff7ed'],
              ].map(([name, cls, hex]) => (
                <div key={name} className="flex flex-col items-center gap-1">
                  <div className={`w-16 h-16 rounded ${cls}`} />
                  <p className="text-caption text-text-primary text-center">{name}</p>
                  <p className="text-label text-text-tertiary">{hex}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Status */}
          <section className="space-y-3">
            <h2 className="text-h4 text-text-tertiary uppercase tracking-widest pb-2 border-b border-border">Status</h2>
            <div className="flex gap-4 flex-wrap">
              {[
                ['active',   'bg-status-active',   '#16a34a'],
                ['invited',  'bg-status-invited',  '#d97706'],
                ['disabled', 'bg-status-disabled', '#9ca3af'],
              ].map(([name, cls, hex]) => (
                <div key={name} className="flex flex-col items-center gap-1">
                  <div className={`w-12 h-12 rounded-full ${cls}`} />
                  <p className="text-caption text-text-primary text-center">{name}</p>
                  <p className="text-label text-text-tertiary">{hex}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Badges */}
          <section className="space-y-3">
            <h2 className="text-h4 text-text-tertiary uppercase tracking-widest pb-2 border-b border-border">Badges</h2>
            <div className="flex gap-3 flex-wrap">
              <span className="text-label px-2 py-1 rounded bg-badge-admin text-white">Admin</span>
              <span className="text-label px-2 py-1 rounded bg-badge-admin-subtle text-badge-admin">Admin subtle</span>
              <span className="text-label px-2 py-1 rounded bg-badge-accountant text-white">Accountant</span>
              <span className="text-label px-2 py-1 rounded bg-badge-accountant-subtle text-badge-accountant">Accountant subtle</span>
            </div>
          </section>

          {/* Feedback */}
          <section className="space-y-3">
            <h2 className="text-h4 text-text-tertiary uppercase tracking-widest pb-2 border-b border-border">Feedback</h2>
            <div className="flex gap-3 flex-wrap">
              {[
                ['feedback-ok',          'bg-feedback-ok',          '#16a34a'],
                ['feedback-ok-subtle',   'bg-feedback-ok-subtle',   '#f0fdf4'],
                ['feedback-warn',        'bg-feedback-warn',        '#d97706'],
                ['feedback-warn-subtle', 'bg-feedback-warn-subtle', '#fffbeb'],
              ].map(([name, cls, hex]) => (
                <div key={name} className="flex flex-col items-center gap-1">
                  <div className={`w-14 h-14 rounded ${cls}`} />
                  <p className="text-caption text-text-primary text-center leading-tight">{name}</p>
                  <p className="text-label text-text-tertiary">{hex}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Category */}
          <section className="space-y-3">
            <h2 className="text-h4 text-text-tertiary uppercase tracking-widest pb-2 border-b border-border">Category</h2>
            <div className="flex gap-3 flex-wrap">
              {[
                ['payslips', 'bg-category-payslips', '#2563eb'],
                ['exports',  'bg-category-exports',  '#7c3aed'],
                ['fsn',      'bg-category-fsn',      '#ea580c'],
                ['feedback', 'bg-category-feedback', '#16a34a'],
                ['other',    'bg-category-other',    '#9898a0'],
              ].map(([name, cls, hex]) => (
                <div key={name} className="flex flex-col items-center gap-1">
                  <div className={`w-12 h-12 rounded ${cls}`} />
                  <p className="text-caption text-text-primary text-center">{name}</p>
                  <p className="text-label text-text-tertiary">{hex}</p>
                </div>
              ))}
            </div>
          </section>

        </div>

        {/* ── Right: surface previews ──────────────────────────────── */}
        <div className="shrink-0 p-8 border-l border-border">
          <LayoutPreview />
        </div>

      </div>
    </div>
  )
}
