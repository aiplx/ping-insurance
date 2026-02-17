import { useState, useMemo } from 'react';
import faqs from '../data/faqs.json';
import useDocumentTitle from '../hooks/useDocumentTitle';

export default function QA() {
  useDocumentTitle('知识库 & FAQ', '加拿大保险常见问题：税务优势、重疾险、分红险、理赔流程等专业解答。');
  const [search, setSearch] = useState('');

  const filteredFaqs = useMemo(() => {
    return faqs.filter(faq => 
      faq.question.toLowerCase().includes(search.toLowerCase()) ||
      faq.answer.toLowerCase().includes(search.toLowerCase()) ||
      faq.category.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-5xl font-bold mb-8 tracking-tighter text-white">知识库 & FAQ</h1>
        
        {/* Search Bar */}
        <div className="relative mb-12">
          <input
            type="text"
            placeholder="搜索税务、重疾、分红等关键词..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-8 py-5 rounded-2xl bg-white/5 border border-white/10 text-white focus:ring-2 focus:ring-blue-500 outline-none transition text-lg"
          />
          <div className="absolute right-6 top-5 text-slate-500 text-xl">
            <i className="fas fa-search"></i>
          </div>
        </div>

        <div className="space-y-6">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, index) => (
              <div key={index} className="p-8 rounded-3xl bg-white/5 border border-white/5 hover:border-blue-500/30 transition group">
                <span className="inline-block px-3 py-1 rounded-lg bg-blue-500/10 text-blue-400 text-xs font-bold mb-4 uppercase tracking-widest">
                  {faq.category}
                </span>
                <h3 className="text-xl font-bold mb-4 text-white group-hover:text-blue-400 transition">
                  {faq.question}
                </h3>
                <p className="text-slate-400 leading-relaxed font-light">
                  {faq.answer}
                </p>
              </div>
            ))
          ) : (
            <div className="text-center py-20 text-slate-500">
              未找到相关内容，请尝试换个关键词，或者直接联系我。
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
