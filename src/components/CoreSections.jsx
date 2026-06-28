import { motion } from 'framer-motion'
import { ArrowRight, Leaf, Sparkles, Users, UserRound, Waves, Timer, Check } from 'lucide-react'
import { Reveal, SectionHeading, Eyebrow, ArrowLink } from './ui'

export function Intro() {
  return <section id="concept" className="section bg-cream"><div className="container grid items-end gap-10 lg:grid-cols-[.65fr_1.35fr]">
    <Reveal><Eyebrow>Le concept</Eyebrow><div className="mt-16 hidden size-24 rounded-full border border-cocoa/25 lg:grid place-items-center"><Leaf className="text-cocoa" strokeWidth={1.2} /></div></Reveal>
    <Reveal delay={.1}><p className="display text-3xl leading-[1.25] sm:text-5xl lg:text-[3.5rem]">La Villa Pilates est un espace dédié au <em>mouvement</em>, à la posture et au bien-être.</p><div className="mt-8 grid gap-6 border-t border-ink/15 pt-7 md:grid-cols-2"><p className="leading-7 text-muted">Dans une atmosphère élégante et intimiste, chaque séance accompagne les clients vers plus de force, de souplesse et de confiance.</p><p className="leading-7 text-muted">Une pratique exigeante et bienveillante, pensée pour s’inscrire naturellement dans le rythme de vie urbain d’Abidjan.</p></div></Reveal>
  </div></section>
}

export function Methods() {
  const methods = [
    { n:'01', title:'Pilates', icon:Waves, image:'/images/instagram-reference/villa-pilates-01.jpeg', pos:'object-center', text:'Une méthode douce et précise pour renforcer les muscles profonds, améliorer la posture, développer la souplesse et reconnecter le corps à la respiration.', tags:['Contrôle', 'Posture', 'Respiration'] },
    { n:'02', title:'Lagree', icon:Sparkles, image:'/images/pilates-class-placeholder.png', pos:'object-center', text:'Une méthode plus intense et dynamique, idéale pour sculpter le corps, développer l’endurance musculaire et obtenir une séance complète à faible impact.', tags:['Intensité', 'Endurance', 'Full body'] }
  ]
  return <section id="methodes" className="section"><div className="container"><SectionHeading eyebrow="Deux méthodes, une intention" title="Bouger avec précision. Progresser avec intention." text="Débutante ou pratiquante confirmée, choisissez l’approche qui répond à votre énergie et à vos objectifs du moment." />
    <div className="mt-14 grid gap-5 lg:grid-cols-2">{methods.map((m,i)=><Reveal delay={i*.1} key={m.title} className="group overflow-hidden rounded-[2rem] bg-white shadow-soft">
      <div className="relative h-64 overflow-hidden sm:h-80"><img src={m.image} alt={`Méthode ${m.title}`} className={`h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04] ${m.pos}`} /><span className="absolute left-6 top-6 rounded-full bg-ivory/90 px-4 py-2 text-xs tracking-widest backdrop-blur">{m.n}</span></div>
      <div className="p-7 sm:p-10"><div className="flex items-center justify-between"><h3 className="display text-4xl">{m.title}</h3><m.icon className="text-cocoa" strokeWidth={1.2} /></div><p className="mt-5 leading-7 text-muted">{m.text}</p><div className="mt-7 flex flex-wrap gap-2">{m.tags.map(t=><span key={t} className="pill">{t}</span>)}</div></div>
    </Reveal>)}</div>
    <Reveal className="mt-10 text-center"><a href="#booking" className="btn-dark">Quelle méthode est faite pour moi ? <ArrowRight size={16}/></a></Reveal>
  </div></section>
}

const services = [
  ['Cours collectifs','L’énergie du groupe, un rythme guidé et une attention précise dans un format intimiste.',Users,'01','object-[48%_50%]'],
  ['Séances privées','Un accompagnement entièrement personnalisé pour corriger, progresser et gagner en confiance.',UserRound,'02','object-[67%_45%]'],
  ['Coaching débutant','Une entrée en matière rassurante pour comprendre la machine, les gestes et votre respiration.',Leaf,'03','object-[35%_50%]'],
  ['Programmes transformation','Un parcours régulier sur plusieurs semaines, structuré autour de vos objectifs réels.',Timer,'04','object-[82%_50%]']
]

export function Services() {
  return <section id="services" className="section bg-ink text-cream"><div className="container"><SectionHeading light eyebrow="Nos accompagnements" title="Votre pratique, à votre rythme" text="Des formats pensés pour transformer chaque rendez-vous avec vous-même en une expérience claire, motivante et durable." />
    <div className="mt-14 grid gap-px overflow-hidden rounded-[2rem] bg-white/10 md:grid-cols-2">{services.map(([title,text,Icon,n,pos],i)=><motion.article {...{initial:{opacity:0},whileInView:{opacity:1},viewport:{once:true},transition:{delay:i*.08}}} key={title} className="group relative min-h-[390px] overflow-hidden bg-ink p-7 sm:p-9">
      <img src={i===0?'/images/pilates-class-placeholder.png':'/images/studio-hero-placeholder.png'} alt="" className={`absolute inset-0 h-full w-full object-cover opacity-0 transition duration-700 group-hover:scale-105 group-hover:opacity-35 ${pos}`} />
      <div className="relative flex h-full flex-col"><div className="flex items-center justify-between"><span className="text-xs text-cream/40">{n}</span><Icon strokeWidth={1.2} className="text-rose" /></div><div className="mt-auto"><h3 className="display max-w-xs text-4xl">{title}</h3><p className="mt-4 max-w-sm leading-7 text-cream/60">{text}</p><div className="mt-6"><ArrowLink light>En savoir plus</ArrowLink></div></div></div>
    </motion.article>)}</div>
  </div></section>
}

const slots = [['Lundi','08:00','Pilates Flow','Tous niveaux'],['Mardi','18:30','Lagree Sculpt','Intermédiaire'],['Mercredi','12:30','Core & Posture','Débutant'],['Jeudi','19:00','Full Body Lagree','Tous niveaux'],['Samedi','10:00','Morning Pilates','Tous niveaux']]
export function Schedule() {
  return <section id="planning" className="section bg-rose/35"><div className="container"><SectionHeading center eyebrow="Planning de la semaine" title="Un moment pour vous" text="Choisissez votre séance et laissez le mouvement remettre l’essentiel au centre." />
    <Reveal className="mt-14 overflow-hidden rounded-[2rem] bg-white shadow-soft"><div className="hidden grid-cols-[1fr_.7fr_1.5fr_1fr] gap-4 border-b border-ink/10 px-8 py-5 text-[10px] uppercase tracking-[.2em] text-muted md:grid"><span>Jour</span><span>Heure</span><span>Cours</span><span>Niveau</span></div>
      {slots.map((s,i)=><div key={s[0]} className="group grid gap-3 border-b border-ink/8 px-6 py-6 last:border-0 md:grid-cols-[1fr_.7fr_1.5fr_1fr] md:items-center md:px-8"><div className="flex items-center gap-3"><span className="grid size-7 place-items-center rounded-full bg-cream text-[10px]">0{i+1}</span><b className="font-medium">{s[0]}</b></div><span className="display text-2xl">{s[1]}</span><span>{s[2]}</span><span className="text-sm text-muted">{s[3]}</span></div>)}
    </Reveal><div className="mt-7 flex flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left"><p className="text-xs italic text-muted">Planning donné à titre d’exemple pour la démonstration.</p><a href="#booking" className="btn-dark">Réserver un créneau</a></div>
  </div></section>
}

const packs = [['Séance découverte','Pour découvrir la méthode et prendre vos premiers repères.','Réserver ma première séance'],['Pack 5 séances','Pour installer une pratique régulière à votre rythme.','Demander le pack'],['Pack mensuel','Pour soutenir une progression visible et durable.','Voir les options'],['Séance privée','Pour un coaching, des corrections et un suivi personnalisés.','Demander une séance privée']]
export function Packages() {
  return <section className="section"><div className="container"><SectionHeading eyebrow="Formules" title="La régularité devient un rituel" text="Des options lisibles, à adapter avec les tarifs et conditions officiels du studio." /><div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{packs.map((p,i)=><Reveal delay={i*.07} key={p[0]} className={`flex min-h-[390px] flex-col rounded-[1.75rem] border p-7 ${i===2?'border-cocoa bg-cocoa text-white':'border-ink/10 bg-white'}`}><span className={`text-xs ${i===2?'text-white/55':'text-muted'}`}>0{i+1}</span><h3 className="display mt-12 text-3xl">{p[0]}</h3><p className={`mt-4 text-sm leading-6 ${i===2?'text-white/70':'text-muted'}`}>{p[1]}</p><div className="mt-auto pt-10"><p className="mb-6 text-sm font-medium">Tarif sur demande</p><a href="#booking" className={`inline-flex items-center gap-2 text-xs font-medium ${i===2?'text-white':'text-ink'}`}>{p[2]} <ArrowRight size={14}/></a></div></Reveal>)}</div></div></section>
}
