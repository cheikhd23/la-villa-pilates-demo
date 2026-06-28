import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

export const fade = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: .16 },
  transition: { duration: .72, ease: [.22, 1, .36, 1] },
}

export function Reveal({ children, className = '', delay = 0 }) {
  return <motion.div {...fade} transition={{ ...fade.transition, delay }} className={className}>{children}</motion.div>
}

export function Eyebrow({ children, light = false }) {
  return <div className={`eyebrow ${light ? 'text-cream/75' : 'text-cocoa'}`}><span />{children}</div>
}

export function SectionHeading({ eyebrow, title, text, center = false, light = false }) {
  return (
    <Reveal className={center ? 'mx-auto max-w-3xl text-center' : 'max-w-2xl'}>
      <div className={center ? 'flex justify-center' : ''}><Eyebrow light={light}>{eyebrow}</Eyebrow></div>
      <h2 className={`display mt-5 text-4xl leading-[1.05] sm:text-5xl lg:text-6xl ${light ? 'text-cream' : 'text-ink'}`}>{title}</h2>
      {text && <p className={`mt-6 text-base leading-7 sm:text-lg ${light ? 'text-cream/70' : 'text-muted'}`}>{text}</p>}
    </Reveal>
  )
}

export function ArrowLink({ children, href = '#booking', light = false }) {
  return <a href={href} className={`group inline-flex items-center gap-2 text-sm font-medium ${light ? 'text-cream' : 'text-ink'}`}>{children}<ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></a>
}
