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
    <>
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
      </nav>

      {/* Mobile fullscreen overlay - renders outside nav to avoid z-index conflict */}
      <div
        className={`md:hidden fixed inset-0 z-[200] bg-slate-900 transition-all duration-300 ease-in-out ${
          mobileOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Close button in top-right corner */}
        <div className="flex items-center justify-between px-6 h-20 border-b border-white/5">
          <Link
            to="/"
            className="text-2xl font-bold tracking-tighter text-white flex items-center"
            onClick={() => setMobileOpen(false)}
          >
            <span className="text-blue-500 mr-2">●</span> Ping Liang
          </Link>
          <button
            className="text-white p-2 focus:outline-none"
            onClick={() => setMobileOpen(false)}
            aria-label="关闭菜单"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Menu items */}
        <div className="flex flex-col items-center justify-center h-[calc(100%-5rem)] space-y-6 px-6">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-3xl font-bold tracking-wide transition-colors py-3 px-8 rounded-2xl ${
                pathname === link.to
                  ? 'text-blue-400 bg-blue-500/10'
                  : 'text-white hover:text-blue-400 hover:bg-white/5'
              }`}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}
