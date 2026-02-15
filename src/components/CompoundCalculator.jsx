import { useState, useMemo } from 'react'

const YEARS = 25
const RATE = 0.05

export default function CompoundCalculator() {
  const [deposit, setDeposit] = useState(10000)

  const futureValue = useMemo(() => {
    const fv = deposit * ((Math.pow(1 + RATE, YEARS) - 1) / RATE)
    return Math.round(fv)
  }, [deposit])

  return (
    <div id="calc" className="calculator-card p-10 rounded-3xl shadow-2xl border border-white/10">
      <h3 className="text-2xl font-bold mb-6 text-white flex items-center">
        <i className="fas fa-chart-line text-emerald-400 mr-3"></i>
        资产复利演算
      </h3>
      <div className="space-y-8">
        <div>
          <div className="flex justify-between mb-4 text-xs font-bold text-slate-400 uppercase tracking-widest">
            <span>初始年存入 (CAD)</span>
            <span className="text-blue-400 text-lg">${deposit.toLocaleString()}</span>
          </div>
          <input
            type="range"
            min="2000"
            max="50000"
            value={deposit}
            step="1000"
            onChange={(e) => setDeposit(Number(e.target.value))}
            className="w-full h-1.5 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
          />
        </div>
        <div className="pt-6 border-t border-white/5">
          <p className="text-sm text-slate-500 mb-2 font-medium">25年后预估累计资产:</p>
          <div className="text-5xl font-extrabold text-emerald-400 tracking-tighter">
            ${futureValue.toLocaleString()}
          </div>
        </div>
      </div>
    </div>
  )
}
