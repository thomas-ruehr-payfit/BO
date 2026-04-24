import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import { cn } from '@/lib/utils'
import { useCopyable } from '@/hooks/useCopyable'

/**
 * Single key/value row inside a MetaSection.
 *
 * Props:
 *   label      — row label
 *   value      — display value
 *   faded      — de-emphasized color for value
 *   encrypted  — shows "[Encrypted]" instead of value, non-copyable
 */
export default function MetaRow({ label, value, faded, encrypted, badgeVariant }) {
  const copyable = !encrypted && !badgeVariant && Boolean(value)
  const { hovered, setHovered, copied, handleClick } = useCopyable(copyable ? value : null)

  return (
    <Tooltip open={copied ? true : undefined}>
      <div
        role={copyable ? 'button' : undefined}
        tabIndex={copyable ? 0 : undefined}
        onClick={copyable ? handleClick : undefined}
        onMouseEnter={copyable ? () => setHovered(true) : undefined}
        onMouseLeave={copyable ? () => setHovered(false) : undefined}
        onKeyDown={copyable ? (e) => e.key === 'Enter' && handleClick() : undefined}
        className={cn(
          'flex items-baseline justify-between gap-2 py-1 px-2 -mx-2 rounded',
          'transition-colors duration-fast',
          copyable && 'cursor-pointer',
          hovered && copyable && 'bg-canvas',
        )}
      >
        <span className="text-caption text-text-tertiary shrink-0">{label}</span>
        <TooltipTrigger asChild>
          {badgeVariant ? (
            <span
              className={cn(
                'text-label px-1.5 py-0.5 rounded',
                badgeVariant === 'active' && 'bg-status-active/10 text-status-active',
              )}
            >
              {value}
            </span>
          ) : (
            <span
              className={cn(
                'text-caption text-right break-words',
                encrypted && 'italic',
                'text-text-primary',
                hovered && copyable && 'underline decoration-dashed underline-offset-2',
              )}
            >
              {encrypted ? '[Encrypted]' : value}
            </span>
          )}
        </TooltipTrigger>
      </div>
      {copied && (
        <TooltipContent side="top" className="bg-black !text-white border-0 text-caption px-2 py-1">
          Copied !
        </TooltipContent>
      )}
    </Tooltip>
  )
}
