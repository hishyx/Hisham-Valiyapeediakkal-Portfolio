import { BookOpenCheck, GraduationCap } from 'lucide-react'
import { motion } from 'motion/react'
import { SectionHeading } from '../components/SectionHeading'
import { useRevealProps } from '../hooks/useRevealProps'

export function Education() {
  const reveal = useRevealProps(0.08)
  return <section className="section education-section" id="education">
    <SectionHeading index="04" eyebrow="Education" title="Learning by doing, reviewing, and repeating." />
    <motion.div className="education-simple-list" {...reveal}>
      <article><BookOpenCheck /><div><span>ONGOING · FULL-STACK DEVELOPMENT</span><h3>Brototype</h3><p>Intensive program focused on MERN development and independent technical learning. The work includes weekly topics, research, practical implementation, projects, code reviews, and technical discussions with experienced reviewers.</p><small>Currently enrolled · Not yet completed</small></div></article>
      <article><GraduationCap /><div><span>HIGHER SECONDARY</span><h3>Commerce</h3><p>Higher secondary education.</p></div></article>
    </motion.div>
  </section>
}
