import { Component } from 'react'

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-slate-900 flex items-center justify-center px-6">
          <div className="text-center max-w-lg">
            <p className="text-6xl font-extrabold text-blue-500 mb-4">Oops</p>
            <h1 className="text-2xl font-bold text-white mb-4">页面出现了问题</h1>
            <p className="text-slate-400 mb-8 leading-relaxed">
              很抱歉，页面遇到了意外错误。请刷新页面重试，或直接通过微信/WhatsApp联系我。
            </p>
            <button
              onClick={() => {
                this.setState({ hasError: false })
                window.location.href = '/'
              }}
              className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-700 transition shadow-2xl"
            >
              返回首页
            </button>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}
