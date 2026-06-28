import { Quote, MoveUpRight, Heart, ScanLine, ShieldCheck, Gauge, Activity } from 'lucide-react'
import { Reveal, SectionHeading, Eyebrow } from './ui'

export function InsideStudio() {
  const real = '/images/instagram-reference/'
  return <section className="section bg-sage/25"><div className="container">
    <div className="grid gap-10 lg:grid-cols-[.7fr_1.3fr] lg:items-end"><SectionHeading eyebrow="La maison" title="Un lieu qui ne ressemble à aucun autre studio" text="À Riviera–Cocody, La Villa accueille le mouvement dans une maison lumineuse, intime et profondément vivante." /><Reveal className="lg:pb-2"><p className="display max-w-xl text-2xl leading-snug text-cocoa sm:text-3xl">Des arches, de la lumière naturelle, un jardin tropical et des espaces conçus pour ralentir avant même que la séance commence.</p></Reveal></div>
    <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-12 sm:gap-4">
      <Reveal className="col-span-2 overflow-hidden rounded-[1.5rem] bg-white sm:col-span-5 sm:row-span-2"><img src={`${real}villa-pilates-01.jpeg`} alt="Salle Reformer réelle de La Villa Pilates" className="h-full min-h-[430px] w-full object-cover" /><p className="p-4 text-[10px] uppercase tracking-[.18em] text-muted">La salle Reformer · Le studio réel</p></Reveal>
      <Reveal delay={.05} className="col-span-1 overflow-hidden rounded-[1.5rem] bg-white sm:col-span-4"><img src={`${real}villa-pilates-03.jpeg`} alt="Salon d’accueil réel de La Villa Pilates" className="aspect-[4/5] w-full object-cover sm:aspect-[4/3]" /><p className="p-4 text-[10px] uppercase tracking-[.18em] text-muted">Le salon</p></Reveal>
      <Reveal delay={.1} className="col-span-1 overflow-hidden rounded-[1.5rem] bg-white sm:col-span-3"><img src={`${real}villa-pilates-05.jpeg`} alt="Accessoires Pilates au studio" className="aspect-[4/5] w-full object-cover sm:aspect-[4/3]" /><p className="p-4 text-[10px] uppercase tracking-[.18em] text-muted">Les détails</p></Reveal>
      <Reveal delay={.1} className="col-span-1 overflow-hidden rounded-[1.5rem] bg-white sm:col-span-3"><img src={`${real}villa-pilates-04.jpeg`} alt="Réception réelle de La Villa Pilates" className="aspect-[4/5] w-full object-cover sm:aspect-[4/3]" /><p className="p-4 text-[10px] uppercase tracking-[.18em] text-muted">L’accueil</p></Reveal>
      <Reveal delay={.15} className="col-span-1 overflow-hidden rounded-[1.5rem] bg-white sm:col-span-4"><img src={`${real}villa-pilates-02.jpeg`} alt="Vue aérienne de La Villa Pilates" className="aspect-[4/5] w-full object-cover sm:aspect-[4/3]" /><p className="p-4 text-[10px] uppercase tracking-[.18em] text-muted">La Villa · Cocody</p></Reveal>
    </div>
    <p className="mt-5 text-xs italic text-muted">Photographies du lieu issues du listing public BAAB, présentées à taille éditoriale. Autorisation à confirmer avant publication officielle.</p>
  </div></section>
}

export function Instructors() {
  return <section className="section bg-cream"><div className="container grid gap-12 lg:grid-cols-[1fr_1.05fr] lg:items-center">
    <Reveal className="relative"><div className="image-arch mx-auto max-w-[520px]"><img src="/images/instructor-placeholder.png" alt="Portrait d’une coach Pilates — visuel de démonstration" className="h-[620px] w-full object-cover object-top" /></div><span className="absolute -bottom-5 right-0 rounded-full bg-rose px-5 py-3 text-[10px] uppercase tracking-[.18em] sm:right-5">Profil de démonstration</span></Reveal>
    <div><SectionHeading eyebrow="L’équipe" title="Guidée avec expertise. Accueillie avec attention." text="Une présence précise et bienveillante pour que chaque mouvement soit compris, ressenti et adapté." />
      <div className="mt-10 space-y-4"><Reveal className="rounded-2xl border border-ink/10 bg-ivory p-6"><div className="flex items-start justify-between gap-4"><div><span className="text-[10px] uppercase tracking-[.2em] text-cocoa">Coach Pilates</span><h3 className="display mt-2 text-2xl">Nom à confirmer</h3></div><MoveUpRight strokeWidth={1.3}/></div><p className="mt-4 text-sm leading-6 text-muted"><b className="font-medium text-ink">Spécialité :</b> posture, respiration et renforcement profond.</p></Reveal>
      <Reveal delay={.1} className="rounded-2xl border border-ink/10 bg-ivory p-6"><div className="flex items-start justify-between gap-4"><div><span className="text-[10px] uppercase tracking-[.2em] text-cocoa">Coach Lagree</span><h3 className="display mt-2 text-2xl">Nom à confirmer</h3></div><MoveUpRight strokeWidth={1.3}/></div><p className="mt-4 text-sm leading-6 text-muted"><b className="font-medium text-ink">Spécialité :</b> full body, endurance musculaire et progression.</p></Reveal></div>
    </div>
  </div></section>
}

const details = [['Un cadre élégant et intimiste',Heart],['Des séances adaptées à chaque niveau',Gauge],['Une approche technique et bienveillante',ShieldCheck],['Un accompagnement vers des résultats visibles',ScanLine]]
export function Experience() {
  return <section id="studio" className="relative min-h-[840px] overflow-hidden bg-ink"><img src="/images/pilates-class-placeholder.png" alt="Atmosphère d’un cours La Villa Pilates" className="absolute inset-0 h-full w-full object-cover object-center opacity-45" /><div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-ink/20" /><div className="container relative flex min-h-[840px] items-center py-24"><div className="max-w-2xl"><SectionHeading light eyebrow="L’expérience La Villa" title="Une expérience pensée dans les moindres détails" /><div className="mt-12 grid gap-3 sm:grid-cols-2">{details.map(([text,Icon],i)=><Reveal delay={i*.08} key={text} className="rounded-2xl border border-white/15 bg-white/8 p-5 backdrop-blur-sm"><Icon className="text-rose" strokeWidth={1.3}/><p className="mt-8 text-sm leading-6 text-cream/85">{text}</p></Reveal>)}</div></div></div></section>
}

const progress = [['01','Posture','Se tenir avec plus de conscience, d’aisance et de stabilité.'],['02','Force','Renforcer en profondeur, progressivement et sans impact excessif.'],['03','Souplesse','Retrouver une mobilité plus fluide au fil de la pratique.']]
export function Progress() {
  return <section className="section bg-cream"><div className="container"><SectionHeading center eyebrow="Votre progression" title="Des résultats qui se construisent avec régularité" text="Amélioration de la posture, renforcement musculaire, meilleure mobilité, silhouette plus tonique et sensation de bien-être durable. Chaque parcours évolue selon le niveau, les objectifs et la régularité de chacun." />
    <div className="mt-14 grid gap-5 md:grid-cols-3">{progress.map((p,i)=><Reveal delay={i*.1} key={p[1]} className="rounded-[50%_50%_1.75rem_1.75rem] border border-ink/10 bg-ivory px-7 pb-9 pt-16 text-center"><div className="mx-auto grid size-14 place-items-center rounded-full bg-rose/70"><Activity strokeWidth={1.2}/></div><span className="mt-9 block text-[10px] tracking-[.2em] text-muted">{p[0]}</span><h3 className="display mt-3 text-3xl">{p[1]}</h3><p className="mt-4 text-sm leading-6 text-muted">{p[2]}</p></Reveal>)}</div>
    <p className="mx-auto mt-9 max-w-2xl text-center text-xs italic leading-5 text-muted">Les résultats varient selon chaque personne. La régularité, le niveau initial et l’accompagnement influencent la progression.</p>
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
