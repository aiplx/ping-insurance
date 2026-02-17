import useDocumentTitle from '../hooks/useDocumentTitle'

export default function License() {
  useDocumentTitle('资质认证', '安省FSRA持牌保险顾问，执照号26244390，iA Financial Group授权代理。')

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-bold mb-12 text-center text-white">官方认证与监管信息</h1>
        <div className="bg-white/5 border border-white/10 rounded-3xl p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-5 text-9xl">
            <i className="fas fa-stamp"></i>
          </div>
          <div className="space-y-8 relative z-10">
            <div>
              <h2 className="text-blue-400 text-sm font-bold tracking-widest uppercase mb-2">
                安省金融服务监管局 (FSRA)
              </h2>
              <p className="text-3xl font-extrabold text-white">LICENCE NO: 26244390</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 py-8 border-y border-white/5">
              <div>
                <h3 className="text-slate-500 text-xs font-bold uppercase mb-2">授权类别</h3>
                <p className="text-lg">Accident and Sickness Insurance Agent</p>
              </div>
              <div>
                <h3 className="text-slate-500 text-xs font-bold uppercase mb-2">有效期至</h3>
                <p className="text-lg text-white">2028年1月22日</p>
              </div>
            </div>
            <div>
              <h3 className="text-slate-500 text-xs font-bold uppercase mb-2 text-white">所属机构</h3>
              <p className="text-xl font-bold text-white">
                Industrial Alliance Insurance and Financial Services Inc. (iA)
              </p>
            </div>
            <div className="p-6 bg-blue-500/10 rounded-2xl text-sm leading-relaxed italic">
              "Authorized to act as an accident and sickness insurance agent unless this licence is
              lawfully suspended or revoked."
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
