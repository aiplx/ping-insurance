import { Link } from 'react-router-dom'
import useDocumentTitle from '../hooks/useDocumentTitle'

export default function NotFound() {
  useDocumentTitle('页面未找到')

  return (
    <div className="pt-32 pb-24 min-h-screen flex items-center justify-center">
      <div className="text-center max-w-lg mx-auto px-6">
        <p className="text-8xl font-extrabold text-blue-500 mb-4">404</p>
        <h1 className="text-3xl font-bold text-white mb-4">页面未找到</h1>
        <p className="text-slate-400 mb-10 leading-relaxed">
          您访问的页面不存在或已被移除，请返回首页继续浏览。
        </p>
        <Link
          to="/"
          className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-700 transition shadow-2xl"
        >
          返回首页
        </Link>
      </div>
    </div>
  )
}
