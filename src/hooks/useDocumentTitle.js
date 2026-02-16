import { useEffect } from 'react'

const BASE_TITLE = 'Ping Liang | 技术型风险管理专家'

export default function useDocumentTitle(page) {
  useEffect(() => {
    document.title = page ? `${page} | Ping Liang` : BASE_TITLE
    return () => { document.title = BASE_TITLE }
  }, [page])
}
