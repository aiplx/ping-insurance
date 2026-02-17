import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import useDocumentTitle from '../hooks/useDocumentTitle'

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID'
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID'
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY'

export default function Contact() {
  useDocumentTitle('联系我')

  const formRef = useRef(null)
  const [form, setForm] = useState({ from_name: '', contact_info: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!form.from_name.trim() || !form.contact_info.trim() || !form.message.trim()) {
      return
    }

    setStatus('sending')

    try {
      // 1. Send via EmailJS (Primary)
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, { publicKey: PUBLIC_KEY })
      
      // 2. Attempt Local Backup (Silent Fail)
      // Note: This may be blocked by browsers as Mixed Content (HTTPS -> HTTP)
      fetch('http://72.61.12.121:3001/api/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.from_name,
          contact: form.contact_info,
          message: form.message
        })
      }).catch(err => console.log('Local backup skipped (Mixed Content or Offline)'))

      setStatus('success')
      setForm({ from_name: '', contact_info: '', message: '' })
    } catch (err) {
      console.error('EmailJS error:', err)
      setStatus('error')
    }
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
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-slate-400 uppercase tracking-widest mb-2">
                  您的称呼
                </label>
                <input
                  type="text"
                  name="from_name"
                  value={form.from_name}
                  onChange={handleChange}
                  placeholder="如何称呼您"
                  required
                  className="w-full px-6 py-4 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-400 uppercase tracking-widest mb-2">
                  联系方式 (邮箱/手机)
                </label>
                <input
                  type="text"
                  name="contact_info"
                  value={form.contact_info}
                  onChange={handleChange}
                  placeholder="您的邮箱或手机号"
                  required
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
                  required
                  className="w-full px-6 py-4 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full bg-blue-600 text-white font-bold py-5 rounded-xl hover:bg-blue-700 transition shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'sending' ? '发送中...' : '提交留言'}
              </button>

              {status === 'success' && (
                <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm text-center font-medium">
                  留言已发送成功！我会尽快与您联系。
                </div>
              )}
              {status === 'error' && (
                <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm text-center font-medium">
                  发送失败，请稍后重试，或直接通过微信/WhatsApp联系我。
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
