import { useState } from 'react'
import { Camera as InstagramIcon, MapPin, MessageCircle, Mail, ArrowUpRight, CheckCircle2 } from 'lucide-react'
import { Reveal, SectionHeading, Eyebrow } from './ui'

const fields = [
  ['Nom complet','text','Votre nom'],['Email','email','vous@exemple.com'],['Téléphone / WhatsApp','tel','+225 ...'],['Date souhaitée','date','']
]

export function Booking() {
  const [sent, setSent] = useState(false)
  const submit = e => { e.preventDefault(); setSent(true) }
  return <section id="booking" className="section bg-cocoa text-white"><div className="container grid gap-14 lg:grid-cols-[.8fr_1.2fr]">
    <div><SectionHeading light eyebrow="Votre première séance" title="Commençons par votre intention" text="Quelques informations suffisent. L’équipe pourra ensuite vous orienter vers le format le plus adapté." /><Reveal className="mt-10 rounded-2xl border border-white/15 p-6"><p className="text-xs uppercase tracking-[.18em] text-white/50">Vous préférez échanger ?</p><a href="https://wa.me/2250797252325" target="_blank" rel="noreferrer" className="mt-5 flex items-center justify-between"><span className="flex items-center gap-3"><MessageCircle className="text-rose"/>Réserver via WhatsApp</span><ArrowUpRight /></a><p className="mt-4 text-xs text-white/45">Numéro issu du listing public BAAB — à confirmer avec le studio.</p></Reveal></div>
    <Reveal className="rounded-[2rem] bg-ivory p-6 text-ink sm:p-10">{sent ? <div className="grid min-h-[520px] place-items-center text-center"><div><CheckCircle2 className="mx-auto text-cocoa" size={48} strokeWidth={1.2}/><h3 className="display mt-6 text-4xl">Demande préparée</h3><p className="mx-auto mt-4 max-w-sm leading-7 text-muted">Merci. Dans la version finale, cette demande sera transmise automatiquement au studio.</p><button onClick={()=>setSent(false)} className="btn-dark mt-7">Nouvelle demande</button></div></div> : <form onSubmit={submit} className="grid gap-5 sm:grid-cols-2">
      {fields.map(([label,type,placeholder])=><label key={label} className="field"><span>{label}</span><input required={label==='Nom complet'||label==='Téléphone / WhatsApp'} type={type} placeholder={placeholder} /></label>)}
      <label className="field"><span>Type de séance</span><select required defaultValue=""><option value="" disabled>Choisir une option</option><option>Pilates</option><option>Lagree</option><option>Séance privée</option><option>Je souhaite être conseillée</option></select></label>
      <label className="field"><span>Niveau actuel</span><select defaultValue="Débutant"><option>Débutant</option><option>Intermédiaire</option><option>Confirmé</option></select></label>
      <label className="field sm:col-span-2"><span>Objectif principal</span><input type="text" placeholder="Posture, force, mobilité, bien-être…" /></label>
      <label className="field sm:col-span-2"><span>Message</span><textarea rows="4" placeholder="Parlez-nous de vos attentes ou disponibilités…" /></label>
      <button className="btn-dark sm:col-span-2" type="submit">Envoyer ma demande</button><p className="text-center text-[11px] leading-5 text-muted sm:col-span-2">Formulaire de démonstration — aucun message n’est transmis actuellement.</p>
    </form>}</Reveal>
  </div></section>
}

const crops = ['object-[25%_45%]','object-[52%_46%]','object-[76%_48%]','object-[67%_40%]','object-[48%_46%]','object-[15%_48%]']
export function Instagram() {
  return <section className="section bg-cream"><div className="container"><div className="flex flex-col justify-between gap-7 sm:flex-row sm:items-end"><SectionHeading eyebrow="@lavillapilates" title="L’univers La Villa Pilates" /><a href="https://www.instagram.com/lavillapilates/" target="_blank" rel="noreferrer" className="btn-outline-dark"><InstagramIcon size={17}/> Voir Instagram</a></div>
    <div className="mt-12 grid grid-cols-2 gap-2 md:grid-cols-3">{crops.map((crop,i)=><Reveal delay={(i%3)*.06} key={crop} className={`group overflow-hidden ${i===0||i===5?'aspect-[4/5]':'aspect-square'}`}><img src={`/images/instagram-reference/villa-pilates-0${i+1}.${i===5?'jpg':'jpeg'}`} alt="La Villa Pilates — visuel temporaire issu du listing public BAAB" className={`h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 ${crop}`} /></Reveal>)}</div><p className="mt-5 text-xs italic text-muted">Visuels temporaires issus du listing public BAAB du studio — droits et autorisation d’usage à confirmer avant publication.</p>
  </div></section>
}

export function Location() {
  return <section className="section"><div className="container grid gap-12 lg:grid-cols-2 lg:items-center"><div><SectionHeading eyebrow="Nous trouver" title="Votre respiration au cœur d’Abidjan" text="Un studio pensé pour intégrer le bien-être dans le rythme de vie urbain d’Abidjan." /><Reveal className="mt-9 divide-y divide-ink/10 border-y border-ink/10">{[[MapPin,'Adresse','Beverly Hills, Villa N°207 · Riviera, Cocody'],[MessageCircle,'WhatsApp','07 97 25 23 25'],[InstagramIcon,'Instagram','@lavillapilates']].map(([Icon,l,v])=><div key={l} className="flex items-center gap-5 py-5"><Icon strokeWidth={1.3}/><div><span className="block text-[10px] uppercase tracking-[.2em] text-muted">{l}</span><b className="mt-1 block text-sm font-medium">{v}</b></div></div>)}</Reveal><p className="mt-3 text-xs italic text-muted">Coordonnées issues d’un listing public — à confirmer avant mise en ligne.</p></div>
    <Reveal className="relative min-h-[480px] overflow-hidden rounded-[2rem] bg-[#d8d0c4]"><div className="map-grid absolute inset-0 opacity-40"/><div className="absolute left-[22%] top-[18%] h-[75%] w-2 rotate-[32deg] bg-ivory/80"/><div className="absolute left-[58%] top-[-10%] h-[120%] w-3 -rotate-[18deg] bg-ivory/75"/><div className="absolute left-[18%] top-[57%] h-2 w-[90%] -rotate-[9deg] bg-ivory/75"/><div className="absolute inset-0 grid place-items-center"><div className="grid size-28 place-items-center rounded-full bg-cocoa text-center text-white shadow-2xl"><div><MapPin className="mx-auto"/><span className="mt-2 block text-[9px] uppercase tracking-widest">La Villa</span></div></div></div><span className="absolute bottom-5 left-5 rounded-full bg-ivory/90 px-4 py-2 text-[10px] uppercase tracking-[.15em]">Google Maps · intégration à venir</span></Reveal>
  </div></section>
}

export function FinalCTA() {
  return <section className="relative overflow-hidden bg-ink py-28 text-white sm:py-36"><img src="/images/studio-hero-placeholder.png" alt="" className="absolute inset-0 h-full w-full object-cover object-[60%_48%] opacity-25"/><div className="absolute inset-0 bg-ink/45"/><Reveal className="container relative text-center"><div className="flex justify-center"><Eyebrow light>Votre moment commence ici</Eyebrow></div><h2 className="display mx-auto mt-6 max-w-4xl text-5xl leading-none sm:text-7xl lg:text-8xl">Commencez votre première séance</h2><p className="mx-auto mt-7 max-w-2xl leading-7 text-white/70">Que vous soyez débutant ou déjà pratiquant, La Villa Pilates vous accompagne dans une approche élégante, progressive et personnalisée du mouvement.</p><div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row"><a className="btn-light" href="#booking">Réserver une séance d’essai</a><a className="btn-outline" href="https://wa.me/2250797252325">Contacter le studio</a></div></Reveal></section>
}

export function Footer() {
  return <footer className="bg-[#211b17] px-5 py-14 text-cream/70 lg:px-8"><div className="mx-auto max-w-7xl"><div className="grid gap-10 border-b border-white/10 pb-12 md:grid-cols-[1.4fr_1fr_1fr]"><div><h2 className="display text-4xl text-cream">La Villa</h2><p className="mt-2 text-[9px] uppercase tracking-[.3em]">Pilates · Lagree · Abidjan</p></div><div><p className="footer-title">Navigation</p><div className="mt-5 grid gap-3 text-sm"><a href="#concept">Le concept</a><a href="#methodes">Les méthodes</a><a href="#planning">Le planning</a><a href="#booking">Réserver</a></div></div><div><p className="footer-title">Contact</p><div className="mt-5 grid gap-3 text-sm"><a href="https://instagram.com/lavillapilates">Instagram</a><a href="https://wa.me/2250797252325">WhatsApp</a><span><Mail className="mr-2 inline" size={14}/>Email à confirmer</span></div></div></div><div className="flex flex-col gap-3 pt-7 text-[10px] uppercase tracking-[.15em] sm:flex-row sm:justify-between"><p>© 2026 La Villa Pilates · Abidjan, Côte d’Ivoire</p><p>Site conceptuel réalisé à titre de démonstration.</p></div></div></footer>
}
