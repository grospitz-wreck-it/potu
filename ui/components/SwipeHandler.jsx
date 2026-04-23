import { useRef } from "react"

export const SwipeHandler = ({ onSwipe, children }) => {
  const startX = useRef(0)

  const handleStart = (e) => {
    startX.current = e.touches ? e.touches[0].clientX : e.clientX
  }

  const handleEnd = (e) => {
    const endX = e.changedTouches ? e.changedTouches[0].clientX : e.clientX
    const diff = endX - startX.current

    if (diff > 50) onSwipe("right")
    if (diff < -50) onSwipe("left")
  }

  return (
    <div
      onMouseDown={handleStart}
      onMouseUp={handleEnd}
      onTouchStart={handleStart}
      onTouchEnd={handleEnd}
    >
      {children}
    </div>
  )
}
