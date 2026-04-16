const steps = [
  {
    title: '課前自學 M01–M04',
    description: '透過線上教材預習暴力曲線、急性處置、環境察覺、言語降階等核心知識。',
    color: '#2980B9',
    colorLight: '#D6EAF8',
  },
  {
    title: '前測（4/7 或 4/9）',
    description: '完成課前知識評量，讓講師掌握學員起始能力。',
    color: '#8E44AD',
    colorLight: '#E8DAEF',
  },
  {
    title: '4/20 課堂講授與情境演練',
    description: '08:00–12:00 西址第七講堂，包含講授、小組討論與情境模擬。',
    color: '#C0392B',
    colorLight: '#FADBD8',
  },
  {
    title: '課後情境練習 + 決策樹',
    description: '利用互動情境與暴力升級通報決策樹進行自主練習。',
    color: '#1E8449',
    colorLight: '#D5F5E3',
  },
  {
    title: '後測（6/4 或 6/11）',
    description: '完成課後評量，評估學習成效與行為改變意向。',
    color: '#E67E22',
    colorLight: '#FDEBD0',
  },
]

export default function RoadmapPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-[#1B2A4A] mb-8">學習路線</h1>

      <div className="relative pl-8">
        {/* Vertical line */}
        <div className="absolute left-3.5 top-2 bottom-2 w-0.5 bg-gray-200" />

        <div className="space-y-8">
          {steps.map((step, i) => (
            <div key={i} className="relative">
              {/* Node */}
              <div
                className="absolute -left-8 top-1 w-7 h-7 rounded-full border-4 border-white flex items-center justify-center text-white text-xs font-bold"
                style={{ backgroundColor: step.color }}
              >
                {i + 1}
              </div>

              {/* Content card */}
              <div
                className="rounded-lg border p-4"
                style={{ borderColor: step.color + '40', backgroundColor: step.colorLight + '60' }}
              >
                <h3 className="font-semibold text-[#1B2A4A] mb-1">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
