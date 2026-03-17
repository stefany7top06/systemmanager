import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { id: 'services', label: 'Servicos' },
  { id: 'skills', label: 'Skills' },
  { id: 'cases', label: 'Cases' },
  { id: 'contato', label: 'Contato' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${isScrolled ? 'py-3' : 'py-5'}`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className={`rounded-2xl border transition-all duration-300 ${isScrolled ? 'bg-black/70 border-white/15 backdrop-blur-xl' : 'bg-black/35 border-white/10 backdrop-blur-md'} px-4 sm:px-6 h-14 flex items-center justify-between`}>
          <a href="#top" className="font-heading text-white tracking-[0.2em] text-sm sm:text-base">SYSTEM MANAGER</a>

          <div className="hidden md:flex items-center gap-7">
            {links.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className="text-white/75 hover:text-white transition-colors text-sm"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contato"
              className="rounded-full px-5 py-2 bg-violet-500/90 hover:bg-violet-400 text-white text-sm font-semibold transition-colors"
            >
              Solicitar proposta
            </a>
          </div>

          <button
            type="button"
            className="md:hidden w-10 h-10 inline-flex items-center justify-center rounded-lg border border-white/15 text-white"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="Abrir menu"
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden mt-2 rounded-xl border border-white/10 bg-black/80 backdrop-blur-xl p-4 space-y-3">
            {links.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className="block text-white/80 hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contato"
              className="inline-flex rounded-full px-4 py-2 bg-violet-500 text-white text-sm font-semibold"
              onClick={() => setIsOpen(false)}
            >
              Solicitar proposta
            </a>
          </div>
        )}
      </nav>
    </header>
  )
}
