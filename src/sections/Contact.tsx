import { ArrowUpRight, Github, Linkedin, Mail, MapPin } from 'lucide-react'
import { motion } from 'motion/react'
import { useRevealProps } from '../hooks/useRevealProps'

const resumeUrl = '/Hisham_Valiyapeediakkal_Resume.pdf?v=2'

export function Contact() {
  const headingReveal = useRevealProps()
  const linksReveal = useRevealProps(0.08)
  return <section className="section contact-section contact-simple" id="contact">
    <motion.div className="contact-simple-heading" {...headingReveal}><span className="detail-label">04 · CONTACT</span><h2>Let’s build<br /><em>something.</em></h2></motion.div>
    <motion.div className="contact-simple-links" {...linksReveal}>
      <a href="mailto:hishyx.dev@gmail.com"><Mail /><span><small>EMAIL</small><b>hishyx.dev@gmail.com</b></span><ArrowUpRight /></a>
      <a href="https://github.com/hishyx" target="_blank" rel="noreferrer"><Github /><span><small>GITHUB</small><b>github.com/hishyx</b></span><ArrowUpRight /></a>
      <a href="https://in.linkedin.com/in/hishamvaliyapeediakkal" target="_blank" rel="noreferrer"><Linkedin /><span><small>LINKEDIN</small><b>Hisham Valiyapeediakkal</b></span><ArrowUpRight /></a>
      <a className="contact-resume-card" href={resumeUrl} download="Hisham_Valiyapeediakkal_Resume.pdf"><span className="resume-icon">CV</span><span><small>RESUME</small><b>Download Resume (PDF)</b></span><ArrowUpRight /></a>
      <div className="contact-location"><MapPin /><span><small>LOCATION</small><b>Kerala, India · Open to software engineering opportunities</b></span></div>
    </motion.div>
    <footer className="site-footer"><span>Hisham Valiyapeediakkal</span><span>Software Engineer &amp; Product Builder</span><span>© 2026</span></footer>
  </section>
}
