import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const navLinks = [
  { to: '/about', label: '背景与服务' },
  { to: '/qa', label: '知识库' },
  { to: '/license', label: '资质' },
  { to: '/contact', label: '联系我' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <nav className="fixed w-full top-0 left-0 z-[100] glass border-b border-white/5 h-20">
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        <div className="text-2xl font-bold tracking-tighter flex items-center text-white">
          <Link to="/" className="flex items-center hover:text-blue-400 transition">
            <span className="text-blue-500 mr-2">●</span> Ping Liang
          </Link>
        </div>

        {/* Desktop nav */}
        <div className="hidden md:flex space-x-10 text-sm font-semibold uppercase tracking-widest text-slate-300">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`hover:text-blue-400 transition ${pathname === link.to ? 'text-blue-400' : ''}`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile hamburger button */}
        <button
          className="md:hidden text-white p-2 focus:outline-none"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? '关闭菜单' : '打开菜单'}
        >
          {mobileOpen ? (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile fullscreen menu */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 top-20 z-[99] bg-slate-900/98 backdrop-blur-xl flex flex-col items-center justify-center space-y-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-2xl font-bold tracking-wider transition ${
                pathname === link.to ? 'text-blue-400' : 'text-white hover:text-blue-400'
              }`}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}
