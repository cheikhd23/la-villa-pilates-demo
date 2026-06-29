import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowUpRight, Sparkles } from 'lucide-react'

export default function Hero() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 900], [0, 130])
  return <>
    <section id="accueil" className="relative min-h-[800px] overflow-hidden bg-ink sm:min-h-[880px]">
      <motion.img style={{ y }} src="/images/studio-hero-placeholder.jpg" alt="Séance de Pilates Reformer dans un studio lumineux" fetchPriority="high" className="absolute inset-0 h-[115%] w-full object-cover object-[64%_center]" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(31,25,21,.86)_0%,rgba(31,25,21,.58)_44%,rgba(31,25,21,.08)_82%),linear-gradient(0deg,rgba(31,25,21,.68),transparent_48%)]" />
      <div className="grain absolute inset-0 opacity-30" />
      <div className="relative mx-auto flex min-h-[800px] max-w-7xl items-end px-5 pb-12 pt-32 sm:min-h-[880px] sm:items-center sm:pb-0 lg:px-8">
        <div className="max-w-3xl text-white">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .2, duration: .8 }} className="mb-7 flex items-center gap-3 text-[10px] uppercase tracking-[.32em] text-white/70"><span className="h-px w-8 bg-rose"/>Maison de mouvement · Abidjan</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 35 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: [.22,1,.36,1] }} className="display text-[3.55rem] leading-[.9] sm:text-7xl lg:text-[6.6rem]">Révélez votre force.<br /><em className="font-normal text-rose">Habitez votre corps.</em></motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .22, duration: .8 }} className="mt-7 max-w-xl text-base font-light leading-7 text-white/80 sm:text-lg">Un studio Pilates & Lagree à Abidjan pensé pour sculpter le corps, apaiser l’esprit et transformer chaque séance en expérience premium.</motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .35, duration: .8 }} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#booking" className="btn-light">Réserver une séance d’essai</a>
            <a href="#concept" className="btn-outline">Découvrir le studio</a>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .6, duration: 1 }} className="mt-10 flex flex-wrap gap-x-7 gap-y-2 text-[10px] uppercase tracking-[.18em] text-white/65">{['Précision', 'Présence', 'Progression'].map((x,i) => <span key={x}>0{i+1} &nbsp;{x}</span>)}</motion.div>
        </div>
      </div>
      <motion.a href="#la-maison" initial={{opacity:0,x:20}} animate={{opacity:1,x:0}} transition={{delay:.75,duration:.8}} className="absolute bottom-8 right-8 hidden w-64 rounded-[1.5rem] border border-white/20 bg-white/10 p-5 text-white backdrop-blur-md lg:block"><div className="flex items-start justify-between"><Sparkles className="text-rose" strokeWidth={1.2}/><ArrowUpRight size={17}/></div><p className="display mt-10 text-2xl leading-tight">Découvrez la maison derrière le mouvement.</p><span className="mt-4 block text-[9px] uppercase tracking-[.2em] text-white/55">Riviera · Cocody</span></motion.a>
    </section>
    <div className="brand-strip overflow-hidden border-y border-ink/10 bg-sage text-ink"><div className="brand-strip-track flex w-max items-center gap-8 py-4 text-[10px] uppercase tracking-[.28em]">{Array.from({length:2}).map((_,j)=><div key={j} className="flex items-center gap-8">{['Pilates Reformer','Lagree','Séances privées','Force douce','Abidjan'].map(x=><span key={`${j}-${x}`} className="flex items-center gap-8 whitespace-nowrap">{x}<i className="size-1.5 rounded-full bg-rose"/></span>)}</div>)}</div></div>
  </>
}
