import { motion } from 'motion/react'
import { SectionHeading } from '../components/SectionHeading'
import { useRevealProps } from '../hooks/useRevealProps'

const groups = [
  ['Languages', ['JavaScript', 'TypeScript']],
  ['Backend', ['Node.js', 'Express.js', 'REST API design']],
  ['Frontend', ['React']],
  ['Databases', ['MongoDB', 'Mongoose', 'PostgreSQL', 'Prisma']],
  ['Authentication', ['JWT authentication', 'Session authentication', 'Role-based authorization']],
  ['Architecture', ['SOLID principles', 'Repository pattern', 'Dependency injection', 'System design']],
  ['Infrastructure', ['AWS EC2', 'Nginx']],
  ['Foundations', ['Data structures & algorithms']],
]

export function Engineering() {
  const reveal = useRevealProps(0.08)
  return <section className="section skills-section" id="skills">
    <SectionHeading index="02" eyebrow="Engineering skills" title="A practical toolkit, still growing." intro="Technologies and engineering concepts I’ve worked with through projects and independent study." />
    <motion.div className="skills-list" {...reveal}>{groups.map(([label, items]) => <div className="skills-row" key={label as string}><h3>{label}</h3><ul>{(items as string[]).map((item) => <li key={item}>{item}</li>)}</ul></div>)}</motion.div>
  </section>
}
