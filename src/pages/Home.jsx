import { Link } from 'react-router-dom'
import CompoundCalculator from '../components/CompoundCalculator'
import useDocumentTitle from '../hooks/useDocumentTitle'

export default function Home() {
  useDocumentTitle(null)

  return (
    <>
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="hero-blob top-20 -right-20"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span>ONTARIO LICENSED ADVISOR</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold leading-none mb-8 tracking-tighter text-white">
              以精算逻辑<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                量化您的保障
              </span>
            </h1>
            <p className="text-lg text-slate-400 mb-10 max-w-lg leading-relaxed font-light italic">
              "From Toulouse to Toronto — Leveraging data science to navigate Ontario's insurance landscape."
            </p>
            <div className="flex items-center space-x-6">
              <Link
                to="/about"
                className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-700 transition shadow-2xl"
              >
                了解背景与服务
              </Link>
            </div>
          </div>

          <CompoundCalculator />
        </div>
      </section>

      <section className="py-24 bg-slate-900/30 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center text-white">快速导航</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <Link
              to="/about"
              className="portal-card p-8 rounded-3xl bg-white/5 transition group"
            >
              <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6">
                <i className="fas fa-user-graduate text-blue-400 text-xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">背景与服务</h3>
              <p className="text-slate-500 text-sm mb-6">
                了解TSE硕士背景、精算经验及安省专业保障方案。
              </p>
              <span className="text-blue-400 text-sm font-bold">进入页面 →</span>
            </Link>
            <Link
              to="/qa"
              className="portal-card p-8 rounded-3xl bg-white/5 transition group"
            >
              <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center mb-6">
                <i className="fas fa-book-open text-amber-400 text-xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">知识库 & FAQ</h3>
              <p className="text-slate-500 text-sm mb-6">
                税务优势、重疾险、分红险等常见问题专业解答。
              </p>
              <span className="text-amber-400 text-sm font-bold">查看知识库 →</span>
            </Link>
            <Link
              to="/license"
              className="portal-card p-8 rounded-3xl bg-white/5 transition group"
            >
              <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-6">
                <i className="fas fa-id-card text-emerald-400 text-xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">合规资质</h3>
              <p className="text-slate-500 text-sm mb-6">
                查看安省FSRA官方执照与iA Financial Group合作认证。
              </p>
              <span className="text-blue-400 text-sm font-bold">查看详情 →</span>
            </Link>
            <Link
              to="/contact"
              className="portal-card p-8 rounded-3xl bg-white/5 transition group"
            >
              <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center mb-6">
                <i className="fas fa-comment-dots text-green-400 text-xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">联系我</h3>
              <p className="text-slate-500 text-sm mb-6">
                获取WeChat二维码、联系方式并提交您的咨询需求。
              </p>
              <span className="text-green-400 text-sm font-bold">立即联系 →</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
