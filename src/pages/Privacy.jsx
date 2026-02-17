import { Link } from 'react-router-dom'
import useDocumentTitle from '../hooks/useDocumentTitle'

export default function Privacy() {
  useDocumentTitle('隐私政策')

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-bold mb-4 text-center text-white">隐私政策</h1>
        <p className="text-center text-slate-500 text-sm mb-16">最后更新: 2026 年 2 月</p>

        <div className="space-y-12 text-slate-400 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-white mb-4">1. 概述</h2>
            <p>
              Ping Liang（以下简称"我"或"本站"）尊重并保护您的个人隐私。本隐私政策说明了我在通过本网站
              （ping-insurance.vercel.app）收集、使用和保护您的个人信息时的做法，符合加拿大
              <strong className="text-slate-300"> 《个人信息保护和电子文件法》(PIPEDA) </strong>
              的相关要求。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">2. 收集的信息</h2>
            <p className="mb-4">当您通过本站的"在线留言"表单提交信息时，我会收集以下内容：</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>您的称呼（姓名或昵称）</li>
              <li>联系方式（邮箱地址或手机号码）</li>
              <li>留言内容（您的咨询需求描述）</li>
            </ul>
            <p className="mt-4">
              本站不会自动收集 Cookie 或使用第三方追踪分析工具。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">3. 信息用途</h2>
            <p>您提交的信息仅用于以下目的：</p>
            <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
              <li>回复您的咨询请求并提供保险相关信息</li>
              <li>在您同意的情况下，就您感兴趣的产品与您进一步沟通</li>
            </ul>
            <p className="mt-4">我不会将您的个人信息出售、出租或分享给任何第三方用于营销目的。</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">4. 第三方服务</h2>
            <p>本站使用以下第三方服务处理表单数据：</p>
            <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
              <li>
                <strong className="text-slate-300">EmailJS</strong> — 用于将表单内容以邮件形式发送给我。
                EmailJS 的隐私政策请参阅其官方网站。
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">5. 信息存储与安全</h2>
            <p>
              您的留言信息通过加密传输（HTTPS）发送，并存储在安全的邮件系统中。
              我会采取合理的技术和管理措施保护您的个人信息免遭未经授权的访问、披露或丢失。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">6. 您的权利</h2>
            <p>根据 PIPEDA，您有权：</p>
            <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
              <li>请求访问我所持有的关于您的个人信息</li>
              <li>请求更正不准确的个人信息</li>
              <li>请求删除您的个人信息</li>
              <li>撤回您对信息收集的同意</li>
            </ul>
            <p className="mt-4">
              如需行使上述权利，请通过以下方式联系我。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">7. 联系方式</h2>
            <p>
              如您对本隐私政策有任何疑问或需要行使您的隐私权利，请联系：
            </p>
            <div className="mt-4 p-6 bg-white/5 rounded-2xl border border-white/10 space-y-2">
              <p><strong className="text-white">Ping Liang</strong></p>
              <p>微信号: aiplxy</p>
              <p>WhatsApp: +1 514-402-5575</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">8. 政策更新</h2>
            <p>
              本隐私政策可能会不时更新，更新后的版本将在本页面发布，并标注最新更新日期。
              建议您定期查阅本页面以了解最新内容。
            </p>
          </section>
        </div>

        <div className="mt-16 text-center">
          <Link
            to="/"
            className="text-blue-400 hover:text-blue-300 transition text-sm font-medium"
          >
            ← 返回首页
          </Link>
        </div>
      </div>
    </div>
  )
}
