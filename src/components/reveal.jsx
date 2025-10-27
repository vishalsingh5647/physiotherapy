import React, { useEffect, useRef, useState } from 'react'

export default function Reveal({ children, delay = 0, y = 16, x = 0, scale = 1, duration = 600, ease = 'ease' }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setVisible(true)
        })
      },
      { threshold: 0.12 }
    )
    obs.observe(node)
    return () => obs.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      style={{
        transition: `opacity ${duration}ms ${ease}, transform ${duration}ms ${ease}`,
        transitionDelay: `${delay}ms`,
        opacity: visible ? 1 : 0,
        transform: visible ? 'translate(0, 0) scale(1)' : `translate(${x}px, ${y}px) scale(${scale})`
      }}
    >
      {children}
    </div>
  )
}


