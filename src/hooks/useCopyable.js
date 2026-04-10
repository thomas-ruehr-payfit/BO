import { useState, useCallback, useRef } from 'react'

/**
 * Manages hover state, clipboard copy, and 900ms "Copied" tooltip.
 * @param {string | null} fullValue — value to copy; if null, copy is disabled
 * @returns {{ hovered, setHovered, copied, handleClick }}
 */
export function useCopyable(fullValue) {
  const [hovered, setHovered] = useState(false)
  const [copied, setCopied] = useState(false)
  const timerRef = useRef(null)

  const handleClick = useCallback(() => {
    if (!fullValue) return
    navigator.clipboard.writeText(fullValue).then(() => {
      setCopied(true)
      clearTimeout(timerRef.current)
      timerRef.current = setTimeout(() => setCopied(false), 900)
    })
  }, [fullValue])

  return { hovered, setHovered, copied, handleClick }
}
