import { useEffect, useState } from 'react'
const links = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#achievements', label: 'Achievements' },
  { href: '#contact', label: 'Contact' }
]
export default function Navbar({ name }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <header className={`fixed top-0 w-full z-50 transition-all ${scrolled ? 'bg-zinc-950/80 backdrop-blur border-b border-zinc-800' : 'bg-transparent'}`}>
      <nav className="max-w-5xl mx-auto px-5 h-16 flex items-center justify-between">
        <a href="#top" className="font-bold text-lg tracking-tight">{name}</a>
        <button className="md:hidden text-2xl" onClick={() => setOpen(!open)} aria-label="Toggle menu">{open ? '×' : '☰'}</button>
        <ul className="hidden md:flex gap-6 text-sm text-zinc-400">
          {links.map(l => (<li key={l.href}><a href={l.href} className="hover:text-white transition-colors">{l.label}</a></li>))}
        </ul>
      </nav>
      {open && (<ul className="md:hidden bg-zinc-950 border-t border-zinc-800 px-5 py-4 space-y-3 text-sm">{links.map(l => (<li key={l.href}><a href={l.href} onClick={() => setOpen(false)} className="block text-zinc-300 hover:text-white">{l.label}</a></li>))}</ul>)}
    </header>
  )
}
