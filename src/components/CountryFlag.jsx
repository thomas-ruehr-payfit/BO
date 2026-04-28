import * as Flags from 'country-flag-icons/react/3x2'
import { cn } from '@/lib/utils'

const SIZES = {
  sm: 'h-[18px] w-[18px]',
  md: 'h-6 w-6',
}

export default function CountryFlag({ code, size = 'md', className }) {
  const Flag = Flags[code]
  if (!Flag) return null
  return (
    <span className={cn(
      'relative inline-block rounded-full overflow-hidden shrink-0 ring-1 ring-black/10',
      SIZES[size],
      className,
    )}>
      <Flag
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="xMidYMid slice"
      />
    </span>
  )
}
