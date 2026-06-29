import { motion } from 'framer-motion'
import { ArrowRight, Leaf, Sparkles, Users, UserRound, Waves, Timer } from 'lucide-react'
import { Reveal, SectionHeading, Eyebrow, ArrowLink } from './ui'

export function Intro() {
  return <section id="concept" className="section bg-cream"><div className="container grid items-start gap-12 lg:grid-cols-[.5fr_1.5fr]">
    <Reveal><Eyebrow>Movement · Wellbeing · Lifestyle</Eyebrow><span className="display mt-12 block text-8xl leading-none text-sage/70 lg:text-9xl">01</span></Reveal>
    <Reveal delay={.1}><p className="display text-4xl leading-[1.08] sm:text-6xl lg:text-[4.6rem]">La force n’a pas besoin de bruit. <em className="text-cocoa">Elle se construit avec précision.</em></p><div className="mt-10 grid gap-8 border-t border-ink/15 pt-8 md:grid-cols-[1.2fr_.8fr]"><p className="text-lg leading-8 text-muted">La Villa Pilates est une maison dédiée au mouvement, à la posture et au bien-être. Chaque séance est pensée comme un rendez-vous avec soi : exigeant, élégant et profondément personnel.</p><div className="grid grid-cols-3 gap-3 md:grid-cols-1">{[['01','Précision'],['02','Présence'],['03','Progression']].map(([n,v])=><div key={v} className="border-b border-ink/10 pb-3"><span className="text-[9px] text-muted">{n}</span><strong className="ml-3 text-[10px] uppercase tracking-[.18em]">{v}</strong></div>)}</div></div></Reveal>
  </div></section>
}

export function Methods() {
  const methods = [
    { n:'01', title:'Pilates', icon:Waves, image:'/images/studio-interior-premium.jpg', pos:'object-center', text:'Une méthode douce et précise pour renforcer les muscles profonds, améliorer la posture, développer la souplesse et reconnecter le corps à la respiration.', tags:['Contrôle', 'Posture', 'Respiration'] },
    { n:'02', title:'Lagree', icon:Sparkles, image:'/images/transformation-premium.jpg', pos:'object-center', text:'Une méthode plus intense et dynamique, idéale pour sculpter le corps, développer l’endurance musculaire et obtenir une séance complète à faible impact.', tags:['Intensité', 'Endurance', 'Full body'] }
  ]
  return <section id="methodes" className="section"><div className="container"><SectionHeading eyebrow="Deux méthodes, une intention" title="Trouvez l’intensité qui vous ressemble." text="Débutante ou pratiquante confirmée, choisissez l’approche qui répond à votre énergie et à vos objectifs du moment." />
    <div className="mt-16 space-y-8 lg:space-y-14">{methods.map((m,i)=><Reveal delay={i*.08} key={m.title} className={`group grid overflow-hidden rounded-[2rem] bg-white shadow-soft lg:grid-cols-12 ${i%2?'lg:[&>div:first-child]:order-2':''}`}>
      <div className="relative min-h-[390px] overflow-hidden lg:col-span-7 lg:min-h-[570px]"><img src={m.image} alt={`Méthode ${m.title}`} loading="lazy" decoding="async" className={`absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-[1.025] ${m.pos}`} /><span className="absolute left-6 top-6 rounded-full bg-ivory/90 px-4 py-2 text-xs tracking-widest backdrop-blur">{m.n}</span></div>
      <div className="flex flex-col justify-between p-8 sm:p-12 lg:col-span-5"><div className="flex items-start justify-between"><span className="text-[10px] uppercase tracking-[.24em] text-muted">La méthode</span><m.icon className="text-cocoa" strokeWidth={1.2} /></div><div className="py-14"><h3 className="display text-6xl sm:text-7xl">{m.title}</h3><p className="mt-6 max-w-md text-base leading-7 text-muted">{m.text}</p></div><div className="flex flex-wrap gap-2 border-t border-ink/10 pt-6">{m.tags.map(t=><span key={t} className="pill">{t}</span>)}</div></div>
    </Reveal>)}</div>
    <Reveal className="mt-10 text-center"><a href="#booking" className="btn-dark">Quelle méthode est faite pour moi ? <ArrowRight size={16}/></a></Reveal>
  </div></section>
}

const services = [
  ['Cours collectifs','L’énergie du groupe, un rythme guidé et une attention précise dans un format intimiste.',Users,'01','/images/collective-diverse-premium.jpg','object-center'],
  ['Séances privées','Un accompagnement entièrement personnalisé pour corriger, progresser et gagner en confiance.',UserRound,'02','/images/private-session-premium.jpg','object-center'],
  ['Coaching débutant','Une entrée en matière rassurante pour comprendre la machine, les gestes et votre respiration.',Leaf,'03','/images/beginner-coaching-premium.jpg','object-center'],
  ['Programmes transformation','Un parcours régulier sur plusieurs semaines, structuré autour de vos objectifs réels.',Timer,'04','/images/transformation-premium.jpg','object-center']
]

export function Services() {
  return <section id="services" className="section bg-[#ded7cc]"><div className="container"><div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end"><SectionHeading eyebrow="Nos accompagnements" title="Votre pratique, à votre rythme" text="Des formats pensés pour transformer chaque rendez-vous avec vous-même en une expérience claire, motivante et durable." /><Reveal className="max-w-xs border-l border-ink/20 pl-5 text-sm leading-6 text-muted">Quatre chemins. Une même exigence : vous faire progresser sans jamais perdre le plaisir du mouvement.</Reveal></div>
    <div className="mt-14 grid gap-5 md:grid-cols-2">{services.map(([title,text,Icon,n,image,pos],i)=><motion.article {...{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:true},transition:{delay:i*.08}}} key={title} className={`group overflow-hidden rounded-[1.75rem] bg-ivory shadow-soft ${i===1||i===2?'md:translate-y-12':''}`}>
      <div className="relative h-[330px] overflow-hidden sm:h-[410px]"><img src={image} alt={title} loading="lazy" decoding="async" className={`h-full w-full object-cover transition duration-700 group-hover:scale-[1.035] ${pos}`} /><div className="absolute inset-x-0 top-0 flex items-center justify-between p-5"><span className="rounded-full bg-ivory/90 px-4 py-2 text-xs backdrop-blur">{n}</span><span className="grid size-11 place-items-center rounded-full bg-ivory/90 text-cocoa backdrop-blur"><Icon strokeWidth={1.2} /></span></div></div>
      <div className="p-7 sm:p-9"><h3 className="display max-w-sm text-4xl sm:text-5xl">{title}</h3><p className="mt-4 max-w-md leading-7 text-muted">{text}</p><div className="mt-7 border-t border-ink/10 pt-5"><ArrowLink>En savoir plus</ArrowLink></div></div>
    </motion.article>)}</div>
  </div></section>
}

const slots = [['Lundi','08:00','Pilates Flow','Tous niveaux'],['Mardi','18:30','Lagree Sculpt','Intermédiaire'],['Mercredi','12:30','Reformer Abdos & Fessiers','Tous niveaux'],['Jeudi','19:00','Full Body Lagree','Tous niveaux'],['Samedi','10:00','Morning Pilates','Tous niveaux']]
export function Schedule() {
  return <section id="planning" className="section bg-rose/35"><div className="container"><SectionHeading center eyebrow="Planning de la semaine" title="Un moment pour vous" text="Choisissez votre séance et laissez le mouvement remettre l’essentiel au centre." />
    <Reveal className="mt-14 overflow-hidden rounded-[2rem] bg-white shadow-soft"><div className="hidden grid-cols-[1fr_.7fr_1.5fr_1fr] gap-4 border-b border-ink/10 px-8 py-5 text-[10px] uppercase tracking-[.2em] text-muted md:grid"><span>Jour</span><span>Heure</span><span>Cours</span><span>Niveau</span></div>
      {slots.map((s,i)=><div key={s[0]} className="group grid gap-3 border-b border-ink/8 px-6 py-6 last:border-0 md:grid-cols-[1fr_.7fr_1.5fr_1fr] md:items-center md:px-8"><div className="flex items-center gap-3"><span className="grid size-7 place-items-center rounded-full bg-cream text-[10px]">0{i+1}</span><b className="font-medium">{s[0]}</b></div><span className="display text-2xl">{s[1]}</span><span>{s[2]}</span><span className="text-sm text-muted">{s[3]}</span></div>)}
    </Reveal><Reveal className="mt-5 grid gap-px overflow-hidden rounded-xl border border-ink/10 bg-ink/10 sm:grid-cols-4">{['Arrivée 5–10 min avant','Chaussettes antidérapantes','Serviettes disponibles','Annulation jusqu’à 3h avant'].map(x=><div key={x} className="bg-rose/15 px-4 py-4 text-center text-[10px] uppercase tracking-[.12em]">{x}</div>)}</Reveal><div className="mt-7 flex flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left"><p className="text-xs italic text-muted">Horaires de démonstration. « Reformer Abdos & Fessiers » et informations pratiques observés sur le compte officiel.</p><a href="#booking" className="btn-dark">Réserver un créneau</a></div>
  </div></section>
}

const packs = [['Séance découverte','Pour découvrir la méthode et prendre vos premiers repères.','Réserver ma première séance'],['Pack 5 séances','Pour installer une pratique régulière à votre rythme.','Demander le pack'],['Pack mensuel','Pour soutenir une progression visible et durable.','Voir les options'],['Séance privée','Pour un coaching, des corrections et un suivi personnalisés.','Demander une séance privée']]
export function Packages() {
  return <section className="section bg-ivory"><div className="container"><div className="grid gap-8 lg:grid-cols-[.85fr_1.15fr] lg:items-end"><SectionHeading eyebrow="Les formules" title="La régularité devient un rituel" text="Commencez par une séance. Continuez parce que vous sentez la différence." /><p className="max-w-sm border-l border-ink/15 pl-5 text-sm leading-6 text-muted">Tarifs présentés sur demande dans cette démonstration. Les formules finales seront adaptées à l’offre réelle du studio.</p></div><div className="mt-14 border-t border-ink/15">{packs.map((p,i)=><Reveal delay={i*.05} key={p[0]} className={`group grid gap-5 border-b border-ink/15 py-7 transition-colors sm:grid-cols-[.25fr_1fr_1.25fr_.7fr] sm:items-center ${i===2?'bg-sage/15 px-5':''}`}><span className="text-[10px] tracking-[.18em] text-muted">0{i+1}</span><h3 className="display text-3xl sm:text-4xl">{p[0]}</h3><p className="max-w-md text-sm leading-6 text-muted">{p[1]}</p><div className="sm:text-right"><p className="mb-3 text-xs font-medium">Tarif sur demande</p><a href="#booking" className="inline-flex items-center gap-2 text-xs font-medium">{p[2]} <ArrowRight size={14} className="transition-transform group-hover:translate-x-1"/></a></div></Reveal>)}</div></div></section>
}
