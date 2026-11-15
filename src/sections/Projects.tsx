import { ArrowUpRight, Github } from 'lucide-react'
import { motion } from 'motion/react'
import { projects } from '../data/projects'
import type { Project } from '../data/projects'
import { SectionHeading } from '../components/SectionHeading'
import { useRevealProps } from '../hooks/useRevealProps'

const featured = projects.filter((project) => project.featured)
const supporting = projects.filter((project) => !project.featured)

type CleanProject = Omit<Project, 'visual' | 'repo'> & { visual: string; repo?: string }

function ProjectLinks({ live, repo }: { live?: string; repo?: string }) {
  return <div className="clean-project-links">
    {live && <a href={live} target="_blank" rel="noreferrer">Live website <ArrowUpRight size={15} /></a>}
    {repo && <a href={repo} target="_blank" rel="noreferrer"><Github size={15} /> GitHub <ArrowUpRight size={14} /></a>}
  </div>
}

function InventoryVisual() {
  return <div className="inventory-flow-clean" aria-label="Inventory item synchronization: MongoDB Change Stream to BullMQ, worker, and PostgreSQL">
    <div className="flow-clean-label">INVENTORY ITEM SYNCHRONIZATION</div>
    <div className="flow-clean-steps"><span><b>MongoDB</b><small>Change Stream</small></span><i aria-hidden="true">→</i><span><b>BullMQ</b><small>Async queue</small></span><i aria-hidden="true">→</i><span><b>Worker</b><small>Retry · backfill</small></span><i aria-hidden="true">→</i><span><b>PostgreSQL</b><small>Inventory items</small></span></div>
    <p>Change events queue work for a worker, which synchronizes inventory items to PostgreSQL. Retry and backfill paths handle failures and existing records.</p>
  </div>
}

function AssignauraVisual() {
  return <div className="assignaura-visual-clean" aria-label="Assignaura areas of long-term product vision">
    <div className="assignaura-visual-head"><span>ASSIGNAURA</span><span>PRODUCT VISION</span></div>
    <div className="assignaura-visual-title">Academic operations,<br /><em>thoughtfully connected.</em></div>
    <div className="assignaura-vision-list"><span>Classrooms</span><span>Assignments</span><span>Examinations</span><span>Attendance</span><span>Academic records</span><span>Learning resources</span></div>
    <small>LONG-TERM DIRECTION · THESE ARE NOT IMPLEMENTED FEATURES</small>
  </div>
}

function FeaturedProject({ project, index }: { project: CleanProject; index: number }) {
  const reveal = useRevealProps(index * 0.08)
  const image = project.visual === 'commerce' ? <img src="/images/logiafun.webp" srcSet="/images/logiafun-960.webp 960w, /images/logiafun.webp 1920w" sizes="(max-width: 760px) calc(100vw - 40px), 620px" width="1920" height="1080" alt="LogiaFun e-commerce application screenshot" loading="lazy" decoding="async" />
    : project.visual === 'production' ? <picture><source media="(max-width: 700px)" srcSet="/images/pillarthree_mobile.webp" type="image/webp" /><img src="/images/pillarthree_desktop.webp" srcSet="/images/pillarthree-desktop-960.webp 960w, /images/pillarthree_desktop.webp 1920w" sizes="(max-width: 760px) calc(100vw - 40px), 620px" width="1920" height="933" alt="Pillarthree Productions website screenshot" loading="lazy" decoding="async" /></picture>
      : project.visual === 'inventory' ? <InventoryVisual /> : <AssignauraVisual />
  const isAssignaura = project.visual === 'assignaura'
  return <motion.article className={`clean-project clean-project-${index + 1} ${isAssignaura ? 'clean-project-building' : ''}`} {...reveal}>
    <div className="clean-project-visual">{image}</div>
    <div className="clean-project-copy">
      <div className="clean-project-meta"><span>{isAssignaura ? 'CURRENTLY BUILDING' : project.category}</span><span className={isAssignaura ? 'status-building' : ''}>{project.status}</span></div>
      <h3>{project.title}</h3>
      <p className="clean-project-description">{project.description}</p>
      {isAssignaura ? <>
        <p className="clean-project-description">I’ve restarted the project with a focus on architecture, database relationships, constraints, and reducing unnecessary data duplication.</p>
        <div className="clean-list-block"><strong>PLANNED DIRECTION</strong><div className="clean-tags">{['TypeScript', 'React', 'Node.js', 'Express.js'].map((item) => <span key={item}>{item}</span>)}</div></div>
      </> : <>
        <div className="clean-list-block"><strong>PROJECT HIGHLIGHTS</strong><ul>{project.highlights.map((item) => <li key={item}>{item}</li>)}</ul></div>
        {project.visual === 'commerce' && <p className="project-note">An important learning milestone: early implementation choices led to refactoring and taught me to plan data and application flows more carefully. Razorpay integration is a mock payment integration.</p>}
        {project.visual === 'inventory' && <p className="project-note">The synchronization is specifically for inventory items, not every database entity.</p>}
        <div className="clean-list-block"><strong>TECHNOLOGY</strong><div className="clean-tags">{project.stack.map((item) => <span key={item}>{item}</span>)}</div></div>
      </>}
      <ProjectLinks live={project.live} repo={project.repo} />
    </div>
  </motion.article>
}

export function Projects() {
  const supportingReveal = useRevealProps(0.06)
  const assignaura: CleanProject = { number: '04', title: 'Assignaura', category: 'Academic operations platform', status: 'Currently in development', description: 'A school-focused product with a long-term vision to connect academic workflows through one platform.', stack: ['TypeScript', 'React', 'Node.js', 'Express.js'], highlights: [], story: '', visual: 'assignaura', featured: true }
  const projectsToShow: CleanProject[] = [...featured, assignaura]
  return <section className="section work-section clean-work" id="work">
    <SectionHeading index="01" eyebrow="Selected projects" title="Software built around real problems." intro="A few projects that show how I approach products, backend systems, and client needs." />
    <div className="clean-project-list">{projectsToShow.map((project, index) => <FeaturedProject project={project} index={index} key={project.number} />)}</div>
    <motion.div className="supporting-clean" {...supportingReveal}>
      <div className="supporting-clean-heading"><span className="detail-label">SUPPORTING PROJECTS</span><h3>More engineering practice</h3></div>
      <div className="supporting-clean-grid">{supporting.map((project) => <article className="supporting-clean-item" key={project.number}><span>{project.category} · {project.status}</span><h4>{project.title}</h4><p>{project.description}</p><div className="clean-tags">{project.stack.map((item) => <span key={item}>{item}</span>)}</div><a href={project.repo} target="_blank" rel="noreferrer">View source <ArrowUpRight size={14} /></a></article>)}</div>
    </motion.div>
  </section>
}
