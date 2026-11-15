import { motion } from 'motion/react'
import { useRevealProps } from '../hooks/useRevealProps'

type Props = { index: string; eyebrow: string; title: string; intro?: string }

export function SectionHeading({ index, eyebrow, title, intro }: Props) {
  const reveal = useRevealProps()
  return (
    <motion.div className="section-heading" {...reveal}>
      <div className="heading-meta"><span>{index}</span><span>{eyebrow}</span></div>
      <div className="heading-copy"><h2>{title}</h2>{intro && <p>{intro}</p>}</div>
    </motion.div>
  )
}
