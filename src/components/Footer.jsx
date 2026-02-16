import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <Link to="/" className="text-2xl font-bold tracking-tighter text-white flex items-center mb-4">
              <span className="text-blue-500 mr-2">●</span> Ping Liang
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed">
              技术型风险管理专家<br />
              Ontario Licensed Insurance Advisor
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">导航</h4>
            <nav className="flex flex-col space-y-3">
              <Link to="/" className="text-slate-500 hover:text-blue-400 transition text-sm">首页</Link>
              <Link to="/about" className="text-slate-500 hover:text-blue-400 transition text-sm">背景与服务</Link>
              <Link to="/license" className="text-slate-500 hover:text-blue-400 transition text-sm">资质认证</Link>
              <Link to="/contact" className="text-slate-500 hover:text-blue-400 transition text-sm">联系我</Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">联系方式</h4>
            <div className="space-y-3">
              <a
                href="https://wa.me/15144025575"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-slate-500 hover:text-green-400 transition text-sm"
              >
                <i className="fab fa-whatsapp text-lg"></i>
                <span>+1 514-402-5575</span>
              </a>
              <div className="flex items-center space-x-3 text-slate-500 text-sm">
                <i className="fab fa-weixin text-lg"></i>
                <span>微信号: aiplxy</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/5 py-6 text-center text-slate-600 text-xs">
        © {new Date().getFullYear()} Ping Liang | Ontario Licensed Advisor | FSRA Licence #26244390
      </div>
    </footer>
  )
}
