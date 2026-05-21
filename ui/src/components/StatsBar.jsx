import { DollarSign, TrendingUp, MousePointerClick, Users, Activity, Target, Percent, BarChart2 } from 'lucide-react'
import { useRef, useEffect } from 'react'

const kpis = [
  { icon: Users,          label: 'Total Campaigns',  value: '200,000',       sub: 'Multi-platform',      color: 'from-indigo-500 to-violet-500' },
  { icon: DollarSign,     label: 'Total Revenue',    value: '$12.5B',        sub: 'All channels',        color: 'from-emerald-500 to-teal-500' },
  { icon: TrendingUp,     label: 'Total Profit',     value: '$10.0B',        sub: '76.9% margin',        color: 'from-violet-500 to-purple-600' },
  { icon: Activity,       label: 'Ad Spend',         value: '$2.5B',         sub: 'Total invested',      color: 'from-orange-500 to-red-500' },
  { icon: BarChart2,      label: 'Avg ROI',          value: '5.0x',          sub: '100% profitable',     color: 'from-cyan-500 to-blue-500' },
  { icon: MousePointerClick, label: 'Avg CTR',       value: '14.04%',        sub: '549 avg clicks',      color: 'from-pink-500 to-rose-500' },
  { icon: DollarSign,     label: 'Avg CPC',          value: '$32.01',        sub: 'Cost per click',      color: 'from-amber-500 to-yellow-500' },
  { icon: Target,         label: 'Avg CPM',          value: '$3,194',        sub: 'Per 1K impressions',  color: 'from-lime-500 to-green-500' },
]

function useFadeIn() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { el.classList.add('visible'); observer.disconnect() }
    }, { threshold: 0.1 })
    observer.observe(el)
    return () => observer.disconnect()
  }, [])
  return ref
}

function KPICard({ icon: Icon, label, value, sub, color, delay }) {
  const ref = useFadeIn()
  return (
    <div ref={ref} className="section-fade glass glass-hover rounded-2xl p-5 flex flex-col gap-3" style={{ transitionDelay: `${delay}ms` }}>
      <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center shadow-lg`}>
        <Icon size={18} className="text-white" />
      </div>
      <div>
        <div className="text-2xl font-black text-white tabular-nums">{value}</div>
        <div className="text-xs text-gray-500 mt-0.5">{label}</div>
      </div>
      <div className="text-xs text-gray-600 font-medium">{sub}</div>
    </div>
  )
}

export default function StatsBar() {
  const ref = useFadeIn()
  return (
    <section id="stats" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div ref={ref} className="section-fade text-center mb-12">
          <span className="tag mb-4 inline-flex">Key Performance Indicators</span>
          <h2 className="text-3xl md:text-4xl font-black">Campaign Metrics at a Glance</h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">Aggregated KPIs from 200,000 campaigns across 6 ad channels and 5 campaign types.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {kpis.map((k, i) => <KPICard key={k.label} {...k} delay={i * 60} />)}
        </div>
      </div>
    </section>
  )
}
