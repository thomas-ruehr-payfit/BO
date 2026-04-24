import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import { cn } from '@/lib/utils'
import { useCopyable } from '@/hooks/useCopyable'

export default function CopyableId({ uid, full = false }) {
  const display = uid ? (full ? uid : uid.slice(0, 8) + '…') : '—'
  const { hovered, setHovered, copied, handleClick } = useCopyable(uid)

  return (
    <Tooltip open={copied ? true : undefined}>
      <TooltipTrigger asChild>
        <span
          role="button"
          tabIndex={0}
          onClick={handleClick}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onKeyDown={(e) => e.key === 'Enter' && handleClick()}
          className={cn(
            full ? 'text-label font-mono text-text-tertiary cursor-pointer leading-none whitespace-nowrap' : 'text-caption font-mono text-text-tertiary cursor-pointer leading-none whitespace-nowrap',
            hovered && 'underline decoration-dashed underline-offset-2 text-text-secondary',
          )}
        >
          {display}
        </span>
      </TooltipTrigger>
      {copied && (
        <TooltipContent side="bottom" className="bg-black !text-white border-0 text-caption px-2 py-1">
          Copied !
        </TooltipContent>
      )}
    </Tooltip>
  )
}
