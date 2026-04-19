import { X, Home } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import { modules, tools, scenarioMetas, slideOrder, slideMeta } from '@/data/siteMeta'

interface SidebarProps {
  isOpen: boolean
  onClose: () => void
}

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `block px-3 py-1.5 rounded-md text-sm transition-colors ${
    isActive
      ? 'bg-[#1B2A4A] text-white font-medium'
      : 'text-gray-700 hover:bg-gray-100'
  }`

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/30 lg:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`fixed top-0 left-0 z-50 h-full w-64 bg-white border-r border-gray-200 overflow-y-auto transition-transform duration-200
          lg:sticky lg:top-0 lg:z-10 lg:translate-x-0 lg:h-screen
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        {/* Mobile close button */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100 lg:hidden">
          <span className="font-semibold text-sm text-[#1B2A4A]">選單</span>
          <button onClick={onClose} className="p-1 rounded hover:bg-gray-100">
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="p-4 space-y-5 text-sm">
          {/* 學習模組 */}
          <section>
            <h3 className="font-semibold text-xs uppercase tracking-wider text-gray-400 mb-2">
              學習模組
            </h3>
            <ul className="space-y-0.5">
              {modules.map((m) => (
                <li key={m.id}>
                  <NavLink to={`/content/${m.id}`} className={navLinkClass} onClick={onClose}>
                    <span className="inline-block w-2 h-2 rounded-full mr-2" style={{ backgroundColor: m.color }} />
                    {m.id} {m.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </section>

          {/* 課堂簡報 */}
          <section>
            <h3 className="font-semibold text-xs uppercase tracking-wider text-gray-400 mb-2">
              課堂簡報
            </h3>
            <ul className="space-y-0.5">
              {slideOrder.map((id) => {
                const s = slideMeta[id]
                return (
                  <li key={id}>
                    <NavLink to={`/slides/${id}`} className={navLinkClass} onClick={onClose}>
                      <span className="inline-block w-2 h-2 rounded-full mr-2" style={{ backgroundColor: s.color }} />
                      {id.replace('S-', '')} {s.title}
                    </NavLink>
                  </li>
                )
              })}
            </ul>
          </section>

          {/* 情境模擬 */}
          <section>
            <h3 className="font-semibold text-xs uppercase tracking-wider text-gray-400 mb-2">
              情境模擬
            </h3>
            <ul className="space-y-0.5">
              {scenarioMetas.map((s) => (
                <li key={s.id}>
                  <NavLink to={`/scenario/${s.id}`} className={navLinkClass} onClick={onClose}>
                    <span className="inline-block w-2 h-2 rounded-full mr-2" style={{ backgroundColor: s.color }} />
                    {s.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </section>

          {/* 互動工具 */}
          <section>
            <h3 className="font-semibold text-xs uppercase tracking-wider text-gray-400 mb-2">
              互動工具
            </h3>
            <ul className="space-y-0.5">
              {tools.map((t) => (
                <li key={t.id}>
                  <NavLink to={`/tools/${t.id}`} className={navLinkClass} onClick={onClose}>
                    <span className="inline-block w-2 h-2 rounded-full mr-2" style={{ backgroundColor: t.color }} />
                    {t.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </section>

          {/* 評量測驗 */}
          <section>
            <h3 className="font-semibold text-xs uppercase tracking-wider text-gray-400 mb-2">
              評量測驗
            </h3>
            <ul className="space-y-0.5">
              <li>
                <NavLink to="/quiz" end className={navLinkClass} onClick={onClose}>
                  測驗總覽
                </NavLink>
              </li>
            </ul>
          </section>

          {/* 其他 */}
          <section>
            <h3 className="font-semibold text-xs uppercase tracking-wider text-gray-400 mb-2">
              其他
            </h3>
            <ul className="space-y-0.5">
              <li>
                <NavLink to="/handout" className={navLinkClass} onClick={onClose}>
                  學員手冊
                </NavLink>
              </li>
              <li>
                <NavLink to="/glossary" className={navLinkClass} onClick={onClose}>
                  名詞對照表
                </NavLink>
              </li>
              <li>
                <NavLink to="/messages" className={navLinkClass} onClick={onClose}>
                  留言板
                </NavLink>
              </li>
              <li>
                <NavLink to="/roadmap" className={navLinkClass} onClick={onClose}>
                  學習路線
                </NavLink>
              </li>
            </ul>
          </section>

          <div className="pt-4 mt-4 border-t border-gray-100">
            <NavLink 
              to="/" 
              end
              className={({ isActive }) => 
                `flex items-center gap-2 px-3 py-2 rounded-md text-sm transition-colors ${
                  isActive 
                    ? 'bg-[#1B2A4A] text-white font-medium' 
                    : 'text-[#2980B9] font-medium hover:bg-blue-50'
                }`
              }
              onClick={onClose}
            >
              <Home className="w-4 h-4" />
              回到首頁
            </NavLink>
          </div>
        </nav>
      </aside>
    </>
  )
}
