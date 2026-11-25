import { motion } from 'motion/react'
import { SectionHeading } from '../components/SectionHeading'
import { TechIcon } from '../components/TechIcon'
import { useRevealProps } from '../hooks/useRevealProps'

const groups = [
  {
    label: 'Languages',
    items: ['JavaScript', 'TypeScript', 'SQL'],
  },
  {
    label: 'Backend',
    items: ['Node.js', 'Express.js'],
  },
  {
    label: 'Frontend',
    items: ['React', 'HTML', 'CSS', 'Tailwind CSS'],
  },
  {
    label: 'Databases',
    items: ['MongoDB', 'Mongoose', 'PostgreSQL', 'Prisma'],
  },
  {
    label: 'Infrastructure & Processing',
    items: ['Redis', 'BullMQ', 'AWS EC2', 'Nginx'],
  },
  {
    label: 'Engineering',
    items: ['REST API Design', 'Software Architecture', 'System Design', 'Asynchronous Processing'],
  },
]

export function Engineering() {
  const reveal = useRevealProps(0.06)
  return (
    <section className="section stack-section" id="stack">
      <SectionHeading index="01" eyebrow="Tech stack" title="Technologies I work with." />
      <motion.div className="stack-grid" {...reveal}>
        {groups.map((group) => (
          <div className="stack-group" key={group.label}>
            <h3>{group.label}</h3>
            <div className="stack-pills">
              {group.items.map((item) => (
                <span className="stack-pill" key={item}>
                  <TechIcon name={item} size={13} />
                  <span>{item}</span>
                </span>
              ))}
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  )
}
