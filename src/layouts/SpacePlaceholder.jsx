const LABELS = {
  declarations: 'Declarations',
  documents:    'Documents',
  billing:      'Billing',
  timeline:     'Timeline',
  settings:     'Settings',
  account:      'Account',
}

export default function SpacePlaceholder({ space }) {
  return (
    <div className="flex-1 flex items-center justify-center bg-surface-1">
      <div className="text-center">
        <p className="text-h3 text-text-primary mb-1">{LABELS[space]}</p>
        <p className="text-caption text-text-tertiary">This section is not yet built.</p>
      </div>
    </div>
  )
}
