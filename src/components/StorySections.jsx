import { Quote, MoveUpRight, Heart, ScanLine, ShieldCheck, Gauge } from 'lucide-react'
import { Reveal, SectionHeading, Eyebrow } from './ui'

export function InsideStudio() {
  return <section id="la-maison" className="section bg-sage/25"><div className="container">
    <div className="grid gap-10 lg:grid-cols-[.7fr_1.3fr] lg:items-end"><SectionHeading eyebrow="Our Space" title="Un lieu qui ne ressemble à aucun autre studio" text="À Riviera–Cocody, La Villa accueille le mouvement dans une maison lumineuse, intime et profondément vivante." /><Reveal className="lg:pb-2"><p className="display max-w-xl text-2xl leading-snug text-cocoa sm:text-3xl">Ici, l’art et le bien-être se rencontrent. Objets design, couleurs vibrantes et touches artistiques invitent à la contemplation avant même que la séance commence.</p></Reveal></div>
    <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-12 sm:gap-4">
      <Reveal className="col-span-2 overflow-hidden rounded-[1.5rem] bg-white sm:col-span-5 sm:row-span-2"><img src="/images/studio-interior-premium.jpg" alt="Salle Reformer de La Villa Pilates, reconstruction haute définition" loading="lazy" decoding="async" className="h-full min-h-[430px] w-full object-cover" /><p className="p-4 text-[10px] uppercase tracking-[.18em] text-muted">La salle Reformer</p></Reveal>
      <Reveal delay={.05} className="col-span-1 overflow-hidden rounded-[1.5rem] bg-white sm:col-span-4"><img src="/images/studio-lounge-premium.jpg" alt="Salon d’accueil de La Villa Pilates, reconstruction haute définition" loading="lazy" decoding="async" className="aspect-[4/5] w-full object-cover sm:aspect-[4/3]" /><p className="p-4 text-[10px] uppercase tracking-[.18em] text-muted">Le salon</p></Reveal>
      <Reveal delay={.1} className="col-span-1 overflow-hidden rounded-[1.5rem] bg-white sm:col-span-3"><img src="/images/studio-equipment-premium.jpg" alt="Accessoires Pilates, reconstruction haute définition" loading="lazy" decoding="async" className="aspect-[4/5] w-full object-cover sm:aspect-[4/3]" /><p className="p-4 text-[10px] uppercase tracking-[.18em] text-muted">Les détails</p></Reveal>
      <Reveal delay={.1} className="col-span-1 overflow-hidden rounded-[1.5rem] bg-white sm:col-span-3"><img src="/images/studio-reception-premium.jpg" alt="Réception de La Villa Pilates, reconstruction haute définition" loading="lazy" decoding="async" className="aspect-[4/5] w-full object-cover sm:aspect-[4/3]" /><p className="p-4 text-[10px] uppercase tracking-[.18em] text-muted">L’accueil</p></Reveal>
      <Reveal delay={.15} className="col-span-1 overflow-hidden rounded-[1.5rem] bg-white sm:col-span-4"><img src="/images/studio-aerial-premium.jpg" alt="Vue aérienne de La Villa Pilates, reconstruction haute définition" loading="lazy" decoding="async" className="aspect-[4/5] w-full object-cover sm:aspect-[4/3]" /><p className="p-4 text-[10px] uppercase tracking-[.18em] text-muted">La Villa · Cocody</p></Reveal>
    </div>
    <p className="mt-5 text-xs italic text-muted">Reconstitutions haute définition inspirées des photographies publiques du lieu. À valider avec La Villa avant publication officielle.</p>
  </div></section>
}

export function Instructors() {
  return <section className="section bg-cream"><div className="container grid gap-12 lg:grid-cols-[1fr_1.05fr] lg:items-center">
    <Reveal className="relative"><div className="image-arch mx-auto max-w-[520px]"><img src="/images/instructor-placeholder.jpg" alt="Portrait d’une coach Pilates — visuel de démonstration" loading="lazy" decoding="async" className="h-[620px] w-full object-cover object-top" /></div><span className="absolute -bottom-5 right-0 rounded-full bg-rose px-5 py-3 text-[10px] uppercase tracking-[.18em] sm:right-5">Profil de démonstration</span></Reveal>
    <div><SectionHeading eyebrow="Instructeurs certifiés" title="Guidée avec expertise. Accueillie avec attention." text="Une présence précise et bienveillante pour que chaque mouvement soit compris, ressenti et adapté." />
      <div className="mt-10 space-y-4"><Reveal className="rounded-2xl border border-ink/10 bg-ivory p-6"><div className="flex items-start justify-between gap-4"><div><span className="text-[10px] uppercase tracking-[.2em] text-cocoa">Instructrice STOTT Pilates</span><h3 className="display mt-2 text-3xl">Fatoumata</h3></div><MoveUpRight strokeWidth={1.3}/></div><p className="mt-4 text-sm leading-6 text-muted"><b className="font-medium text-ink">Approche :</b> précision, posture, respiration et renforcement profond.</p></Reveal>
      <Reveal delay={.1} className="rounded-2xl border border-ink/10 bg-ivory p-6"><div className="flex items-start justify-between gap-4"><div><span className="text-[10px] uppercase tracking-[.2em] text-cocoa">Coach Lagree</span><h3 className="display mt-2 text-2xl">Nom à confirmer</h3></div><MoveUpRight strokeWidth={1.3}/></div><p className="mt-4 text-sm leading-6 text-muted"><b className="font-medium text-ink">Spécialité :</b> full body, endurance musculaire et progression.</p></Reveal></div>
    </div>
  </div></section>
}

const details = [['Un cadre élégant et intimiste',Heart],['Des séances adaptées à chaque niveau',Gauge],['Une approche technique et bienveillante',ShieldCheck],['Un accompagnement vers des résultats visibles',ScanLine]]
export function Experience() {
  return <section id="studio" className="relative min-h-[840px] overflow-hidden bg-ink"><img src="/images/pilates-class-placeholder.jpg" alt="Atmosphère d’un cours La Villa Pilates" loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-cover object-center opacity-45" /><div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-ink/20" /><div className="container relative flex min-h-[840px] items-center py-24"><div className="max-w-2xl"><SectionHeading light eyebrow="L’expérience La Villa" title="Une expérience pensée dans les moindres détails" /><div className="mt-12 grid gap-3 sm:grid-cols-2">{details.map(([text,Icon],i)=><Reveal delay={i*.08} key={text} className="rounded-2xl border border-white/15 bg-white/8 p-5 backdrop-blur-sm"><Icon className="text-rose" strokeWidth={1.3}/><p className="mt-8 text-sm leading-6 text-cream/85">{text}</p></Reveal>)}</div></div></div></section>
}

const progress = [['01','Posture','Se tenir avec plus de conscience, d’aisance et de stabilité.'],['02','Force','Renforcer en profondeur, progressivement et sans impact excessif.'],['03','Souplesse','Retrouver une mobilité plus fluide au fil de la pratique.']]
export function Progress() {
  return <section className="section bg-ink text-cream"><div className="container"><SectionHeading light eyebrow="Ce qui change" title="Des résultats qui se ressentent avant de se voir" text="La progression ne se résume pas à une silhouette. Elle se lit dans la posture, l’énergie et la façon d’habiter chaque mouvement." />
    <div className="mt-16 border-t border-white/15">{progress.map((p,i)=><Reveal delay={i*.08} key={p[1]} className="group grid gap-5 border-b border-white/15 py-8 sm:grid-cols-[.3fr_1fr_1.2fr] sm:items-center"><span className="display text-6xl text-rose/70">{p[0]}</span><h3 className="display text-4xl sm:text-5xl">{p[1]}</h3><p className="max-w-md leading-7 text-cream/60">{p[2]}</p></Reveal>)}</div>
    <p className="mt-8 max-w-2xl text-xs italic leading-5 text-cream/45">Les résultats varient selon chaque personne. La régularité, le niveau initial et l’accompagnement influencent la progression.</p>
  </div></section>
}

const testimonials = [
  ['Une expérience douce, intense et motivante. On ressort avec l’impression d’avoir travaillé en profondeur tout en prenant soin de soi.','Cliente La Villa'],
  ['Un cadre magnifique, une approche rassurante et des explications précises. Une vraie parenthèse dans la semaine.','Membre découverte'],
  ['Le suivi individuel permet de comprendre chaque mouvement et de progresser avec beaucoup plus de confiance.','Séance privée']
]
export function Testimonials() {
  return <section className="section"><div className="container"><SectionHeading center eyebrow="Paroles de membres" title="Ce que l’on vient chercher à La Villa" /><div className="mt-14 grid gap-5 lg:grid-cols-3">{testimonials.map((t,i)=><Reveal delay={i*.08} key={t[1]} className="flex min-h-[330px] flex-col rounded-[1.75rem] bg-white p-7 shadow-soft"><Quote className="text-rose" size={34} fill="currentColor" strokeWidth={0}/><blockquote className="display mt-10 text-2xl leading-snug">“{t[0]}”</blockquote><p className="mt-auto pt-8 text-[10px] uppercase tracking-[.2em] text-muted">{t[1]} · Témoignage démo</p></Reveal>)}</div><p className="mt-6 text-center text-xs italic text-muted">Contenus fictifs présentés uniquement pour illustrer le futur design.</p></div></section>
}
