import { useReducedMotion } from 'motion/react'

export function useRevealProps(delay = 0) {
  const reducedMotion = useReducedMotion()

  return {
    initial: reducedMotion ? false : { opacity: 0, y: 18 },
    whileInView: reducedMotion ? undefined : { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.16 },
    transition: {
      duration: reducedMotion ? 0 : 0.55,
      delay: reducedMotion ? 0 : delay,
      ease: [0.22, 0.8, 0.25, 1] as const,
    },
  }
}
