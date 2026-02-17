import { useEffect } from 'react'

const BASE_TITLE = 'Ping Liang | 技术型风险管理专家'
const BASE_DESC = '安省持牌保险顾问，TSE精算背景，为安省华人提供重疾险、分红险等量化保障方案。'

export default function useDocumentTitle(page, description) {
  useEffect(() => {
    document.title = page ? `${page} | Ping Liang` : BASE_TITLE

    const metaDesc = document.querySelector('meta[name="description"]')
    if (metaDesc) {
      metaDesc.setAttribute('content', description || BASE_DESC)
    }

    return () => {
      document.title = BASE_TITLE
      if (metaDesc) metaDesc.setAttribute('content', BASE_DESC)
    }
  }, [page, description])
}
