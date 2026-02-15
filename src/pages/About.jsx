import { Link } from 'react-router-dom'

export default function About() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-5xl font-bold mb-12 tracking-tighter text-white">专业背景</h1>
        <div className="grid md:grid-cols-2 gap-8 mb-24">
          <div className="p-8 bg-white/5 rounded-3xl border border-white/5">
            <h3 className="text-blue-400 font-bold text-xl mb-4">图卢兹经济学院 (TSE) 硕士</h3>
            <p className="text-slate-400 leading-relaxed">
              专注于统计与计量经济学，掌握机器学习、统计建模与数据分析的底层逻辑。这种学术背景让我能从海量数据中洞察保险产品的精算逻辑。
            </p>
          </div>
          <div className="p-8 bg-white/5 rounded-3xl border border-white/5">
            <h3 className="text-emerald-400 font-bold text-xl mb-4">北京人寿 定价建模经验</h3>
            <p className="text-slate-400 leading-relaxed">
              曾主导50多款保险产品的定价与风险模型评估。深刻理解保险公司如何衡量风险，从而帮客户找到性价比的最优解。
            </p>
          </div>
        </div>

        <h2 className="text-5xl font-bold mb-12 tracking-tighter text-white">核心保障方案</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-10 bg-white/5 rounded-3xl border border-white/10 hover:bg-white/[0.08] transition">
            <div className="w-14 h-14 bg-red-500/20 rounded-2xl flex items-center justify-center mb-8">
              <i className="fas fa-shield-virus text-red-400 text-2xl"></i>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-white">深度健康保障 (CI & Health)</h3>
            <p className="text-slate-400 mb-6 leading-relaxed">
              针对安省高发的重大疾病，通过概率模型计算最合理的保额与保费配比。涵盖重大疾病、伤残补偿及高端医疗。
            </p>
          </div>
          <div className="p-10 bg-white/5 rounded-3xl border border-white/10 hover:bg-white/[0.08] transition">
            <div className="w-14 h-14 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-8">
              <i className="fas fa-piggy-bank text-blue-400 text-2xl"></i>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-white">资产避税增值 (Participating Life)</h3>
            <p className="text-slate-400 mb-6 leading-relaxed">
              利用计量经济学模型，模拟分红险表现。通过 iA Financial Group 的优质产品，为您构建长线的避税增值通道。
            </p>
          </div>
        </div>

        <div className="mt-20 text-center">
          <Link
            to="/contact"
            className="bg-blue-600 text-white px-10 py-4 rounded-xl font-bold hover:bg-blue-700 transition shadow-xl"
          >
            预约量化分析咨询
          </Link>
        </div>
      </div>
    </div>
  )
}
