import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <nav className="fixed w-full top-0 left-0 z-[100] glass border-b border-white/5 h-20">
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        <div className="text-2xl font-bold tracking-tighter flex items-center text-white">
          <Link to="/" className="flex items-center hover:text-blue-400 transition">
            <span className="text-blue-500 mr-2">●</span> Ping Liang
          </Link>
        </div>
        <div className="hidden md:flex space-x-10 text-sm font-semibold uppercase tracking-widest text-slate-300">
          <Link to="/about" className="hover:text-blue-400 transition">背景与服务</Link>
          <Link to="/license" className="hover:text-blue-400 transition">资质</Link>
          <Link to="/contact" className="hover:text-blue-400 transition">联系我</Link>
        </div>
      </div>
    </nav>
  )
}
