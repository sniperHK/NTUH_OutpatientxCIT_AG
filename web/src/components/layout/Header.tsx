import { Menu } from 'lucide-react'
import { courseInfo } from '@/data/siteMeta'

interface HeaderProps {
  onToggleSidebar: () => void
}

export default function Header({ onToggleSidebar }: HeaderProps) {
  return (
    <header className="sticky top-0 z-30 flex items-center gap-3 px-4 py-3 bg-[#F8F9FA] border-b border-gray-200">
      <button
        onClick={onToggleSidebar}
        className="lg:hidden p-2 rounded-md hover:bg-gray-200 transition-colors"
        aria-label="Toggle sidebar"
      >
        <Menu className="w-5 h-5 text-[#1B2A4A]" />
      </button>
      <div className="flex flex-col">
        <h1 className="text-lg font-bold text-[#1B2A4A] leading-tight">
          {courseInfo.title}
        </h1>
        <p className="text-xs text-gray-500">{courseInfo.subtitle}</p>
      </div>
    </header>
  )
}
