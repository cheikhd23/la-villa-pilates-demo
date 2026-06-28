import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown, MapPin } from 'lucide-react'

export default function Hero() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 900], [0, 130])
  return (
    <section id="accueil" className="relative min-h-[780px] overflow-hidden bg-ink sm:min-h-[860px]">
      <motion.img style={{ y }} src="/images/studio-hero-placeholder.png" alt="Séance de Pilates Reformer dans un studio lumineux" className="absolute inset-0 h-[115%] w-full object-cover object-[64%_center]" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(31,25,21,.82)_0%,rgba(31,25,21,.56)_42%,rgba(31,25,21,.08)_80%),linear-gradient(0deg,rgba(31,25,21,.55),transparent_45%)]" />
      <div className="relative mx-auto flex min-h-[780px] max-w-7xl items-end px-5 pb-10 pt-32 sm:min-h-[860px] sm:items-center sm:pb-0 lg:px-8">
        <div className="max-w-3xl text-white">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .2, duration: .8 }} className="mb-6 text-[11px] uppercase tracking-[.3em] text-white/70">Pilates · Lagree · Abidjan</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 35 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: [.22,1,.36,1] }} className="display text-[3.35rem] leading-[.96] sm:text-7xl lg:text-[6.1rem]">Révélez votre force,<br /><em className="font-normal text-rose">retrouvez votre équilibre</em></motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .22, duration: .8 }} className="mt-7 max-w-xl text-base font-light leading-7 text-white/80 sm:text-lg">Un studio Pilates & Lagree à Abidjan pensé pour sculpter le corps, apaiser l’esprit et transformer chaque séance en expérience premium.</motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .35, duration: .8 }} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#booking" className="btn-light">Réserver une séance d’essai</a>
            <a href="#concept" className="btn-outline">Découvrir le studio</a>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .6, duration: 1 }} className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-[10px] uppercase tracking-[.18em] text-white/65">
            {['Pilates & Lagree', 'Séances privées', 'Coaching personnalisé'].map(x => <span key={x}>· &nbsp;{x}</span>)}
          </motion.div>
        </div>
      </div>
      <div className="absolute bottom-7 right-5 hidden items-center gap-5 text-white/65 md:flex lg:right-8"><MapPin size={16} /><span className="text-[10px] uppercase tracking-[.22em]">Abidjan, Côte d’Ivoire</span><ArrowDown size={15} /></div>
    </section>
  )
}
