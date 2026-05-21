import { useState, useEffect } from 'react'
import { BarChart3, Menu, X } from 'lucide-react'

const links = [
  { label: 'Overview', href: '#stats' },
  { label: 'Platforms', href: '#platforms' },
  { label: 'Charts', href: '#charts' },
  { label: 'Models', href: '#models' },
  { label: 'Dashboards', href: '#dashboards' },
  { label: 'Pipeline', href: '#pipeline' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-navy-950/90 backdrop-blur-md border-b border-white/5 shadow-xl' : ''}`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-lg bg-brand flex items-center justify-center shadow-lg shadow-brand/30">
            <BarChart3 size={16} className="text-white" />
          </div>
          <span className="font-bold text-lg tracking-tight">MetricFlow</span>
        </a>

        <div className="hidden md:flex items-center gap-1">
          {links.map(l => (
            <a key={l.href} href={l.href}
              className="px-4 py-2 text-sm text-gray-400 hover:text-white rounded-lg hover:bg-white/5 transition-all duration-200">
              {l.label}
            </a>
          ))}
        </div>

        <a href="https://github.com/devxrachit/Campaign-Optimization-Platform" target="_blank" rel="noreferrer"
          className="hidden md:flex items-center gap-2 px-4 py-2 rounded-lg bg-brand hover:bg-brand-dark text-white text-sm font-medium transition-all duration-200 shadow-lg shadow-brand/25 hover:shadow-brand/40">
          View on GitHub
        </a>

        <button onClick={() => setOpen(o => !o)} className="md:hidden p-2 rounded-lg hover:bg-white/5">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-navy-900/95 backdrop-blur-md border-t border-white/5 px-6 py-4 flex flex-col gap-2">
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}
              className="py-2.5 text-sm text-gray-300 hover:text-white transition-colors">
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
