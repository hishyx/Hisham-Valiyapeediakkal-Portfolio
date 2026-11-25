import { motion, useReducedMotion } from 'motion/react'
import { ArrowRight, ArrowUpRight, Download, Github, MapPin, Network } from 'lucide-react'
import { Navigation } from './components/Navigation'
import { TechIcon } from './components/TechIcon'
import { Projects } from './sections/Projects'
import { Engineering } from './sections/Engineering'
import { Contact } from './sections/Contact'

const heroTechOrbit = [
  { name: 'JavaScript', side: 'left', slot: 1 },
  { name: 'TypeScript', side: 'left', slot: 2 },
  { name: 'Node.js', side: 'left', slot: 3 },
  { name: 'Express.js', side: 'left', slot: 4 },
  { name: 'React', side: 'left', slot: 5 },
  { name: 'Git', side: 'left', slot: 6 },
  { name: 'MongoDB', side: 'right', slot: 1 },
  { name: 'PostgreSQL', side: 'right', slot: 2 },
  { name: 'Prisma', side: 'right', slot: 3 },
  { name: 'Redis', side: 'right', slot: 4 },
  { name: 'BullMQ', side: 'right', slot: 5 },
  { name: 'AWS', side: 'right', slot: 6 },
]

const typingContainer = {
  hidden: {},
  visible: { transition: { delayChildren: 0.18, staggerChildren: 0.024 } },
}
const typingCharacter = {
  hidden: { opacity: 0, y: '0.24em' },
  visible: { opacity: 1, y: '0em', transition: { duration: 0.16 } },
}

function TypingText({ text }: { text: string }) {
  const reducedMotion = useReducedMotion()
  if (reducedMotion) return <span>{text}</span>

  return <motion.span aria-hidden="true" variants={typingContainer} initial="hidden" animate="visible">
    {Array.from(text, (character, index) => <motion.span className="hero-typed-character" variants={typingCharacter} key={`${character}-${index}`}>{character === ' ' ? '\u00a0' : character}</motion.span>)}
  </motion.span>
}

function Hero() {
  return <section className="hero cinematic-hero" id="top" aria-labelledby="hero-title">
    <div className="hero-glow" aria-hidden="true" />
    <motion.p className="hero-kicker" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .45 }}>
      <span className="live-mark" /> SOFTWARE ENGINEER <span className="kicker-slash">/</span> PRODUCT BUILDER
    </motion.p>
    <div className="hero-stage">
      <div className="hero-orbit" aria-hidden="true">
        {heroTechOrbit.map((tech) => (
          <span key={tech.name} className={`hero-orbit-chip hero-orbit-${tech.side}-${tech.slot}`}>
            <TechIcon name={tech.name} size={14} />
            <span>{tech.name}</span>
          </span>
        ))}
      </div>
      <motion.h1 id="hero-title" className="hero-backdrop-title" aria-label="I build software that solves real problems." initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .65, delay: .04 }}>
        <span className="backdrop-row backdrop-row-1"><TypingText text="I BUILD SOFTWARE" /></span>
        <span className="backdrop-row backdrop-row-2"><span><TypingText text="THAT SOLVES" /></span><span className="accent-word"><TypingText text="REAL PROBLEMS." /></span></span>
      </motion.h1>
      <motion.figure className="hero-portrait-silhouette" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .65, delay: .08 }}>
        <picture>
          <source type="image/webp" srcSet="/images/portrait-cutout-500.webp 500w, /images/portrait-cutout-800.webp 800w, /images/portrait-cutout.webp 1086w" sizes="(max-width: 700px) 85vw, (max-width: 1200px) 560px, 640px" />
          <img src="/images/portrait-cutout.png" width="1086" height="1102" alt="Hisham Valiyapeediakkal, software engineer and product builder" fetchPriority="high" decoding="async" />
        </picture>
      </motion.figure>
      <motion.a className="portrait-now" href="#work" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .4, delay: .22 }}>
        <span className="portrait-now-icon"><Network size={15} /></span><span><small>CURRENT THREAD</small><b>Assignaura <i>·</i> systems planning</b></span><ArrowUpRight size={13} />
      </motion.a>
    </div>
    <div className="hero-orbit-strip" aria-label="Core technologies">
      {heroTechOrbit.map((tech) => (
        <span key={tech.name} className="hero-orbit-strip-item">
          <TechIcon name={tech.name} size={13} />
          <span>{tech.name}</span>
        </span>
      ))}
    </div>
    <div className="hero-details">
      <motion.div className="hero-details-left" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .4, delay: .14 }}>
        <p className="hero-lead">Backend-focused software engineer building full-stack applications, backend systems and products.</p>
      </motion.div>
      <motion.div className="hero-details-right" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .4, delay: .2 }}>
        <div className="hero-actions">
          <a className="button button-primary" href="#work">Explore Projects <ArrowRight size={15} /></a>
          <a className="button button-quiet" href="/Hisham_Valiyapeediakkal_Resume.pdf?v=2" download="Hisham_Valiyapeediakkal_Resume.pdf"><Download size={14} /> Resume</a>
          <a className="button button-quiet" href="#contact">Contact <ArrowUpRight size={14} /></a>
          <a className="hero-github" href="https://github.com/hishyx" target="_blank" rel="noreferrer" aria-label="GitHub profile"><Github size={17} /></a>
        </div>
        <div className="hero-meta"><span><MapPin size={13} /> KERALA, INDIA</span><span className="availability"><i /> OPEN TO SOFTWARE ENGINEERING OPPORTUNITIES</span></div>
      </motion.div>
    </div>
  </section>
}

export default function App() {
  return <div className="site-shell"><Navigation /><main><Hero /><Engineering /><Projects /><Contact /></main></div>
}
