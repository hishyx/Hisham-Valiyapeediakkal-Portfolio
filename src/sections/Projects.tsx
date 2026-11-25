import { ArrowUpRight, Github } from 'lucide-react'
import { motion } from 'motion/react'
import { projects } from '../data/projects'
import type { Project } from '../data/projects'
import { SectionHeading } from '../components/SectionHeading'
import { TechIcon } from '../components/TechIcon'
import { useRevealProps } from '../hooks/useRevealProps'

const featured = projects.filter((project) => project.featured)
const supporting = projects.filter((project) => !project.featured)

type CleanProject = Omit<Project, 'visual' | 'repo'> & { visual: string; repo?: string }

function ProjectLinks({ live, repo }: { live?: string; repo?: string }) {
  return (
    <div className="card-links">
      {live && <a href={live} target="_blank" rel="noreferrer">Live demo <ArrowUpRight size={14} /></a>}
      {repo && <a href={repo} target="_blank" rel="noreferrer"><Github size={14} /> GitHub <ArrowUpRight size={13} /></a>}
    </div>
  )
}

function InventoryVisual() {
  return (
    <div className="inventory-flow-compact" aria-label="Inventory item synchronization: MongoDB Change Stream to BullMQ, worker, and PostgreSQL">
      <div className="flow-clean-label"><span>INVENTORY ITEM SYNC</span><span>ASYNC PIPELINE</span></div>
      <div className="flow-compact-steps">
        <span><b>MongoDB</b><small>Change Stream</small></span>
        <i aria-hidden="true">→</i>
        <span><b>BullMQ</b><small>Redis queue</small></span>
        <i aria-hidden="true">→</i>
        <span><b>Worker</b><small>Retries · backfill</small></span>
        <i aria-hidden="true">→</i>
        <span><b>PostgreSQL</b><small>Inventory items</small></span>
      </div>
      <p>Synchronizes inventory items specifically (not every database entity) with retry &amp; backfill handling.</p>
    </div>
  )
}

function AssignauraVisual() {
  return (
    <div className="assignaura-visual-compact" aria-label="Assignaura academic operations platform preview">
      <div className="assignaura-visual-head"><span>ASSIGNAURA</span><span>ARCHITECTURE &amp; SCHEMA</span></div>
      <div className="assignaura-compact-title">Academic operations,<br /><em>thoughtfully connected.</em></div>
      <div className="assignaura-compact-pillars">
        <span>ER Modelling</span>
        <span>Relational Schema</span>
        <span>Constraints</span>
        <span>Data Integrity</span>
      </div>
      <small>IN DEVELOPMENT · PLANNED ACADEMIC WORKFLOWS NOT YET IMPLEMENTED</small>
    </div>
  )
}

function FeaturedProject({ project, index }: { project: CleanProject; index: number }) {
  const reveal = useRevealProps(index * 0.05)
  const isAssignaura = project.visual === 'assignaura'
  const media = project.visual === 'commerce'
    ? <img src="/images/logiafun.webp" srcSet="/images/logiafun-960.webp 960w, /images/logiafun.webp 1920w" sizes="(max-width: 860px) calc(100vw - 40px), 540px" width="1920" height="1080" alt="LogiaFun e-commerce application screenshot" loading="lazy" decoding="async" />
    : project.visual === 'production'
      ? <picture><source media="(max-width: 700px)" srcSet="/images/pillarthree_mobile.webp" type="image/webp" /><img src="/images/pillarthree_desktop.webp" srcSet="/images/pillarthree-desktop-960.webp 960w, /images/pillarthree_desktop.webp 1920w" sizes="(max-width: 860px) calc(100vw - 40px), 540px" width="1920" height="933" alt="Pillarthree Productions website screenshot" loading="lazy" decoding="async" /></picture>
      : project.visual === 'inventory'
        ? <InventoryVisual />
        : <AssignauraVisual />

  return (
    <motion.article className={`project-card ${isAssignaura ? 'project-card-building' : ''}`} {...reveal}>
      <div className="project-card-visual">{media}</div>
      <div className="project-card-body">
        <div className="project-card-meta">
          <span>{project.number} · {project.category}</span>
          <span className={isAssignaura ? 'status-building' : ''}>{project.status}</span>
        </div>
        <h3>{project.title}</h3>
        <p className="project-card-desc">{project.description}</p>
        {project.highlights.length > 0 && (
          <ul className="project-card-highlights">
            {project.highlights.map((item) => <li key={item}>{item}</li>)}
          </ul>
        )}
        <div className="project-card-footer">
          <div className="clean-tags">
            {project.stack.map((item) => (
              <span key={item}><TechIcon name={item} size={11} />{item}</span>
            ))}
          </div>
          <ProjectLinks live={project.live} repo={project.repo} />
        </div>
      </div>
    </motion.article>
  )
}

export function Projects() {
  const supportingReveal = useRevealProps(0.05)
  const assignaura: CleanProject = {
    number: '04',
    title: 'Assignaura',
    category: 'Product Development',
    status: 'Currently in Development',
    description: 'A school-focused academic operations platform currently undergoing product planning, requirements analysis and relational database architecture design.',
    stack: ['TypeScript', 'React', 'Node.js', 'Express.js', 'PostgreSQL', 'Prisma'],
    highlights: ['Product and requirements planning', 'ER modelling and relational schema design', 'Data integrity and database constraints'],
    story: '',
    visual: 'assignaura',
    featured: true,
  }
  const projectsToShow: CleanProject[] = [...featured, assignaura]

  return (
    <section className="section work-section compact-work" id="work">
      <SectionHeading index="02" eyebrow="Selected projects" title="Software built around real problems." />
      <div className="projects-grid">
        {projectsToShow.map((project, index) => (
          <FeaturedProject project={project} index={index} key={project.number} />
        ))}
      </div>
      <motion.div className="supporting-clean" {...supportingReveal}>
        <div className="supporting-clean-heading">
          <span className="detail-label">03 · SUPPORTING PROJECTS</span>
          <h3>More engineering practice</h3>
        </div>
        <div className="supporting-clean-grid">
          {supporting.map((project) => (
            <article className="supporting-clean-item" key={project.number}>
              <div className="supporting-top">
                <span>{project.category} · {project.status}</span>
                <a href={project.repo} target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={13} /></a>
              </div>
              <h4>{project.title}</h4>
              <p>{project.description}</p>
              <div className="clean-tags">
                {project.stack.map((item) => <span key={item}><TechIcon name={item} size={11} />{item}</span>)}
              </div>
            </article>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
