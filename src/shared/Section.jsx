/**
 * Generic placeholder block. Used by modules not yet built.
 */
export default function Section({ title, note = 'Not yet built' }) {
  return (
    <section className="rounded-md border border-dashed border-border-strong bg-surface-1 px-6 py-8">
      <p className="text-h4 text-text-primary mb-1">{title}</p>
      <p className="text-caption text-text-tertiary">{note}</p>
    </section>
  )
}
