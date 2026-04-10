import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import { cn } from '@/lib/utils'
import { useCopyable } from '@/hooks/useCopyable'

/**
 * Single chip in the CompanyTopBar status row.
 *
 * Props:
 *   label      — uppercase small label
 *   value      — display value
 *   fullValue  — if present, chip is copyable; this is what gets copied
 *   accent     — blue text treatment
 *   dim        — de-emphasized text treatment
 *   mono       — monospace font
 */
export default function TopBarChip({ label, value, fullValue, accent, dim, mono }) {
  const copyable = Boolean(fullValue)
  const { hovered, setHovered, copied, handleClick } = useCopyable(fullValue)

  return (
    <Tooltip open={copied ? true : undefined}>
      <TooltipTrigger asChild>
        <button
          type="button"
          onClick={handleClick}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className={cn(
            'flex flex-col items-start gap-0.5 px-2 py-1 rounded',
            'transition-colors duration-fast',
            copyable && 'cursor-pointer',
            !copyable && 'cursor-default',
            hovered && copyable && 'bg-surface-2',
          )}
          disabled={!copyable}
        >
          <span className="text-label uppercase text-text-tertiary leading-none">{label}</span>
          <span
            className={cn(
              'text-body-sm leading-none',
              accent && 'text-accent font-medium',
              dim && 'text-text-tertiary',
              !accent && !dim && 'text-text-primary',
              mono && 'font-mono',
              hovered && copyable && 'underline decoration-dotted underline-offset-2',
            )}
          >
            {value}
          </span>
        </button>
      </TooltipTrigger>
      {copied && (
        <TooltipContent side="bottom" className="text-caption">
          Copied
        </TooltipContent>
      )}
    </Tooltip>
  )
}
