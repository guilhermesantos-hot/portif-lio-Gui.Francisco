import { useEffect, useState } from 'react'
import { motion, useSpring } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'

export function CustomCursor() {
  const { theme } = useTheme()
  const [cursorType, setCursorType] = useState<'default' | 'pointer' | 'view' | 'text'>('default')
  const [cursorText, setCursorText] = useState('')
  const [isVisible, setIsVisible] = useState(false)

  // Spring physics for buttery-smooth follower
  const springConfig = { damping: 28, stiffness: 350, mass: 0.5 }
  const mouseX = useSpring(0, springConfig)
  const mouseY = useSpring(0, springConfig)

  // Dot position directly tracks cursor for instant response
  const [dotPos, setDotPos] = useState({ x: -100, y: -100 })

  useEffect(() => {
    // Only enable on non-touch devices
    const isTouchDevice = window.matchMedia('(pointer: coarse)').matches
    if (isTouchDevice) return

    document.body.classList.add('custom-cursor-active')

    const onMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
      setDotPos({ x: e.clientX, y: e.clientY })
      if (!isVisible) setIsVisible(true)

      // Detect cursor targets
      const target = e.target as HTMLElement | null
      if (!target) return

      const viewElement = target.closest('[data-cursor="view"]')
      const pointerElement = target.closest('a, button, [data-cursor="pointer"], input, textarea')
      const customTextElement = target.closest('[data-cursor-text]')

      if (viewElement) {
        setCursorType('view')
        setCursorText(customTextElement?.getAttribute('data-cursor-text') || 'VER')
      } else if (pointerElement) {
        setCursorType('pointer')
        setCursorText('')
      } else {
        setCursorType('default')
        setCursorText('')
      }
    }

    const onMouseLeave = () => setIsVisible(false)
    const onMouseEnter = () => setIsVisible(true)

    window.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mouseleave', onMouseLeave)
    document.addEventListener('mouseenter', onMouseEnter)

    return () => {
      document.body.classList.remove('custom-cursor-active')
      window.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mouseleave', onMouseLeave)
      document.removeEventListener('mouseenter', onMouseEnter)
    }
  }, [isVisible, mouseX, mouseY])

  if (!isVisible) return null

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* Precision inner center dot (instant) */}
      <div
        className={`fixed top-0 left-0 w-2 h-2 -ml-1 -mt-1 rounded-full pointer-events-none transition-transform duration-75 ${
          theme === 'dark' ? 'bg-[#ccff00]' : 'bg-black'
        }`}
        style={{
          transform: `translate3d(${dotPos.x}px, ${dotPos.y}px, 0)`,
          opacity: cursorType === 'view' ? 0 : 1,
        }}
      />

      {/* Smooth outer follower / magnetic bubble */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none rounded-full flex items-center justify-center font-display font-bold text-xs uppercase"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: cursorType === 'view' ? 84 : cursorType === 'pointer' ? 48 : 28,
          height: cursorType === 'view' ? 84 : cursorType === 'pointer' ? 48 : 28,
          backgroundColor:
            cursorType === 'view'
              ? theme === 'dark'
                ? 'rgba(204, 255, 0, 0.95)'
                : 'rgba(0, 0, 0, 0.95)'
              : cursorType === 'pointer'
              ? theme === 'dark'
                ? 'rgba(255, 255, 255, 0.15)'
                : 'rgba(0, 0, 0, 0.08)'
              : 'transparent',
          borderColor:
            cursorType === 'view'
              ? 'transparent'
              : cursorType === 'pointer'
              ? theme === 'dark'
                ? 'rgba(204, 255, 0, 0.6)'
                : 'rgba(0, 0, 0, 0.4)'
              : theme === 'dark'
              ? 'rgba(255, 255, 255, 0.3)'
              : 'rgba(0, 0, 0, 0.25)',
          borderWidth: cursorType === 'view' ? 0 : 1.5,
          color:
            cursorType === 'view'
              ? theme === 'dark'
                ? '#0b0b0d'
                : '#ffffff'
              : theme === 'dark'
              ? '#ffffff'
              : '#0e0e11',
          backdropFilter: cursorType === 'pointer' ? 'blur(4px)' : 'none',
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        {cursorType === 'view' && (
          <span className="tracking-widest font-black text-[11px]">
            {cursorText}
          </span>
        )}
      </motion.div>
    </div>
  )
}
