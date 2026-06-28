import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

const links = [['Concept', '#concept'], ['Méthodes', '#methodes'], ['Cours', '#services'], ['Planning', '#planning'], ['Studio', '#studio']]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll(); window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled || open ? 'bg-ivory/95 text-ink shadow-[0_1px_0_rgba(48,39,33,.08)] backdrop-blur-xl' : 'text-white'}`}>
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
        <a href="#accueil" aria-label="La Villa Pilates — accueil" className="relative z-10 flex items-center gap-3">
          <img src="/images/instagram-reference/villa-pilates-06.jpg" alt="" className="size-10 rounded-full object-cover" />
          <span><strong className="display block text-xl font-normal leading-none tracking-wide">La Villa</strong><small className="mt-1 block text-[8px] uppercase tracking-[.34em]">Pilates · Abidjan</small></span>
        </a>
        <nav className="hidden items-center gap-7 lg:flex">
          {links.map(([label, href]) => <a key={href} href={href} className="text-xs uppercase tracking-[.16em] transition-opacity hover:opacity-60">{label}</a>)}
        </nav>
        <div className="hidden items-center gap-5 lg:flex">
          <span className="text-[11px] tracking-[.12em]"><b>FR</b><span className="mx-2 opacity-40">|</span>EN</span>
          <a href="#booking" className={`rounded-full px-5 py-3 text-xs font-medium transition ${scrolled ? 'bg-ink text-white hover:bg-cocoa' : 'bg-white text-ink hover:bg-cream'}`}>Réserver</a>
        </div>
        <button onClick={() => setOpen(!open)} className="relative z-10 rounded-full p-2 lg:hidden" aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}>{open ? <X /> : <Menu />}</button>
      </div>
      {open && <div className="border-t border-ink/10 bg-ivory px-5 pb-8 pt-5 lg:hidden">{links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)} className="display block border-b border-ink/10 py-4 text-2xl">{label}</a>)}<a href="#booking" onClick={() => setOpen(false)} className="btn-dark mt-6 w-full">Réserver une séance</a></div>}
    </header>
  )
}
