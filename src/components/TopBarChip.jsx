import { Calendar } from 'lucide-react'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import { cn } from '@/lib/utils'
import { useCopyable } from '@/hooks/useCopyable'

export default function TopBarChip({ label, value, fullValue, warn, dim, mono, statusDot, calendarIcon, suffix }) {
  const copyable = Boolean(fullValue)
  const { hovered, setHovered, copied, handleClick } = useCopyable(fullValue ?? null)

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
          'inline-flex items-center gap-1.5 px-1.5 py-0.5 rounded border',
          'transition-colors duration-fast shrink-0',
          copyable ? 'cursor-pointer' : 'cursor-default',
          statusDot && 'bg-status-active/10 border-transparent',
          warn      && 'bg-feedback-warn-subtle border-feedback-warn/20',
          !statusDot && !warn && 'bg-surface-1 border-border',
          hovered && copyable && 'brightness-95',
        )}
      >
        {calendarIcon && (
          <Calendar
            size={14}
            strokeWidth={2.5}
            className={cn('shrink-0', warn ? 'text-feedback-warn' : 'text-text-tertiary')}
          />
        )}
        {label && !statusDot && !calendarIcon && (
          <span className={cn(
            'text-label font-normal uppercase tracking-wide',
            warn ? 'text-feedback-warn/60' : 'text-text-tertiary',
          )}>
            {label}
          </span>
        )}
        {statusDot && (
          <span className="h-1.5 w-1.5 rounded-full bg-status-active shrink-0" />
        )}
        <TooltipTrigger asChild>
          <span
            className={cn(
              'text-label font-semibold',
              statusDot && 'text-status-active',
              warn      && 'text-feedback-warn',
              dim       && !statusDot && !warn && 'text-text-secondary',
              !statusDot && !warn && !dim && 'text-text-primary',
              mono && 'font-mono',
              hovered && copyable && 'underline decoration-dashed underline-offset-2',
            )}
          >
            {value}
          </span>
        </TooltipTrigger>
        {suffix && (
          <span className="text-label font-semibold text-white bg-feedback-warn rounded px-1 py-0.5 pb-[3px] leading-none">
            {suffix}
          </span>
        )}
      </div>
      {copied && (
        <TooltipContent side="bottom" className="bg-surface-2 text-text-primary border border-border shadow-sm text-caption px-2 py-1">
          Copied
        </TooltipContent>
      )}
    </Tooltip>
  )
}
