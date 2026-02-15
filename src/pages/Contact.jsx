import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', contact: '', message: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    // 可后续接入后端或邮件服务
    console.log('Submit:', form)
  }

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-5xl font-bold mb-16 text-center text-white">开启沟通</h1>

        <div className="grid md:grid-cols-2 gap-16">
          <div className="space-y-10">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-white text-center">WeChat 扫码咨询</h2>
              <div className="p-6 bg-white rounded-3xl max-w-sm mx-auto shadow-2xl">
                <img
                  src="/assets/img/wechat_qr.jpg"
                  alt="WeChat QR Code"
                  className="w-full h-auto rounded-xl"
                />
                <p className="text-slate-900 text-center mt-4 font-bold">
                  微信号: <span className="text-blue-600">aiplxy</span>
                </p>
              </div>
            </div>
            <div className="text-center">
              <p className="text-slate-400">或者通过 WhatsApp 直接对话:</p>
              <a
                href="https://wa.me/15144025575"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-3 text-green-400 font-bold text-xl hover:text-green-300 transition"
              >
                <i className="fab fa-whatsapp text-2xl"></i>
                <span>+1 514-402-5575</span>
              </a>
            </div>
          </div>

          <div className="bg-white/5 p-10 rounded-3xl border border-white/10 contact-form">
            <h2 className="text-3xl font-bold mb-8 text-white">在线留言</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-slate-400 uppercase tracking-widest mb-2">
                  您的称呼
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="如何称呼您"
                  className="w-full px-6 py-4 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-400 uppercase tracking-widest mb-2">
                  Reach Out 方式 (邮箱/手机)
                </label>
                <input
                  type="text"
                  name="contact"
                  value={form.contact}
                  onChange={handleChange}
                  placeholder="您的邮箱或手机号"
                  className="w-full px-6 py-4 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-400 uppercase tracking-widest mb-2">
                  简短留言
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows="4"
                  placeholder="请简述您的需求（如：咨询重疾险、理财规划等）"
                  className="w-full px-6 py-4 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white font-bold py-5 rounded-xl hover:bg-blue-700 transition shadow-xl"
              >
                提交留言
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
