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
              <Link to="/qa" className="text-slate-500 hover:text-blue-400 transition text-sm">知识库 & FAQ</Link>
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

      <div className="border-t border-white/5 py-12 px-6">
        <div className="max-w-4xl mx-auto p-8 rounded-2xl bg-slate-900/30 border border-white/5">
          <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Compliance & Legal Disclaimer</h4>
          <p className="text-[11px] text-slate-500 leading-relaxed text-left">
            <strong>Professional Advice:</strong> The content provided on this website, including calculators and knowledge base entries, is for informational and educational purposes only and does not constitute financial, investment, tax, or legal advice. Insurance products and strategies should be tailored to individual needs through a formal Needs Analysis. 
            <br/><br/>
            <strong>Tax Information:</strong> While we discuss tax-advantaged financial instruments, we are not tax professionals. Tax laws in Canada (Income Tax Act) are subject to change. Please consult with a qualified tax accountant or legal professional regarding your specific tax situation.
            <br/><br/>
            <strong>License & Regulation:</strong> Ping Liang is a life insurance agent licensed by the Financial Services Regulatory Authority of Ontario (FSRA). All recommendations are subject to the underwriting requirements of the respective insurance carriers.
          </p>
        </div>
      </div>

      <div className="border-t border-white/5 py-6 text-center text-slate-600 text-xs">
        © {new Date().getFullYear()} Ping Liang | Ontario Licensed Advisor | FSRA Licence #26244390
      </div>
    </footer>
  )
}
