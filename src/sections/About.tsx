import { motion } from 'motion/react'
import { SectionHeading } from '../components/SectionHeading'
import { useRevealProps } from '../hooks/useRevealProps'

export function About() {
  const photoReveal = useRevealProps(0.04)
  const copyReveal = useRevealProps(0.12)
  return <section className="section about-section about-simple" id="about">
    <SectionHeading index="03" eyebrow="About" title="Curiosity became a way of working." />
    <div className="about-simple-layout">
      <motion.div className="about-simple-photo" {...photoReveal}><picture>
        <source type="image/webp" srcSet="/images/portrait-cutout-500.webp 500w, /images/portrait-cutout-800.webp 800w, /images/portrait-cutout-1200.webp 1200w, /images/portrait-cutout.webp 1512w" sizes="(max-width: 760px) 100vw, 420px" />
        <img src="/images/portrait-cutout.png" width="1512" height="1512" alt="Hisham Valiyapeediakkal in a studio portrait" loading="lazy" decoding="async" />
      </picture></motion.div>
      <motion.div className="about-simple-copy" {...copyReveal}>
        <p>I was curious about technology from childhood—troubleshooting computers, reinstalling operating systems, and figuring out what had gone wrong. I began with full-stack development because I wanted to make things I could see and use.</p>
        <p>Backend engineering became the work I return to most: logical problem-solving, application structure, and understanding how the pieces behave together. When a problem gets difficult, I try it independently and often trace the code by hand in a notebook.</p>
        <p>I also enjoy helping other developers understand concepts and sharing what I learn. I want to keep growing into an engineer who contributes to products used at a much larger scale.</p>
      </motion.div>
    </div>
  </section>
}
