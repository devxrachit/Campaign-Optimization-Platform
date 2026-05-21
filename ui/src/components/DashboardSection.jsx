import { useRef, useEffect, useState } from 'react'
import { ExternalLink, DollarSign, Users, BarChart2, Brain } from 'lucide-react'

const dashboards = [
  {
    file: 'p9_01_money_dashboard.html',
    title: 'Revenue & ROI Dashboard',
    desc: 'Interactive breakdown of revenue by channel, campaign goal, duration, and location with full drill-down.',
    icon: DollarSign,
    color: 'from-emerald-500 to-teal-600',
    glow: 'shadow-emerald-500/20',
    stats: [{ label: 'Total Revenue', val: '$12.5B' }, { label: 'Best Channel', val: 'Facebook' }, { label: 'Best Duration', val: '30 Days' }],
  },
  {
    file: 'p9_02_pinterest_dashboard.html',
    title: 'Platform Insights',
    desc: 'Platform-level performance heatmaps, scatter plots, and CTR vs spend analysis across all six channels.',
    icon: BarChart2,
    color: 'from-pink-500 to-rose-600',
    glow: 'shadow-pink-500/20',
    stats: [{ label: 'Channels', val: '6' }, { label: 'Avg CTR', val: '14.04%' }, { label: 'Avg CPC', val: '$32.01' }],
  },
  {
    file: 'p9_03_customers_dashboard.html',
    title: 'Audience & Segments',
    desc: 'Audience segment performance, demographic breakdowns, and location-level ROI heatmaps for strategic targeting.',
    icon: Users,
    color: 'from-violet-500 to-purple-600',
    glow: 'shadow-violet-500/20',
    stats: [{ label: 'Segments', val: '5' }, { label: 'Top Segment', val: 'Tech Enthusiasts' }, { label: 'Top Location', val: 'Miami' }],
  },
  {
    file: 'p9_04_models_dashboard.html',
    title: 'ML Models Dashboard',
    desc: 'Side-by-side model comparison with interactive ROC curves, confusion matrices, and feature importance charts.',
    icon: Brain,
    color: 'from-cyan-500 to-blue-600',
    glow: 'shadow-cyan-500/20',
    stats: [{ label: 'Models', val: '5' }, { label: 'Best AUC', val: '0.94' }, { label: 'Top Model', val: 'XGBoost' }],
  },
]

function useFadeIn(threshold = 0.1) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setVisible(true); obs.disconnect() }
    }, { threshold })
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])
  return [ref, visible]
}

function DashCard({ dash, delay, visible }) {
  const { icon: Icon } = dash
  return (
    <div className={`glass rounded-2xl p-6 flex flex-col gap-5 transition-all duration-700 hover:-translate-y-1 hover:shadow-xl ${dash.glow}`}
      style={{ transitionDelay: `${delay}ms`, opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(2.5rem)' }}>
      <div className="flex items-start gap-4">
        <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${dash.color} flex items-center justify-center shadow-xl shrink-0`}>
          <Icon size={22} className="text-white" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-bold text-white leading-tight">{dash.title}</h3>
          <p className="text-xs text-gray-500 mt-1.5 leading-relaxed">{dash.desc}</p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2">
        {dash.stats.map(s => (
          <div key={s.label} className="text-center glass rounded-xl py-2.5 px-1">
            <div className="text-sm font-black gradient-text leading-none">{s.val}</div>
            <div className="text-[10px] text-gray-600 mt-1 leading-tight">{s.label}</div>
          </div>
        ))}
      </div>

      <a href={`/${dash.file}`} target="_blank" rel="noreferrer"
        className={`mt-auto inline-flex items-center justify-center gap-2 py-2.5 rounded-xl bg-gradient-to-r ${dash.color} text-white text-sm font-semibold transition-all duration-200 hover:opacity-90 hover:shadow-lg shadow-md`}>
        Open Dashboard <ExternalLink size={14} />
      </a>
    </div>
  )
}

export default function DashboardSection() {
  const [headRef, headVis] = useFadeIn()
  const [gridRef, gridVis] = useFadeIn()

  return (
    <section id="dashboards" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div ref={headRef} className={`text-center mb-14 transition-all duration-700 ${headVis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <span className="tag mb-4 inline-flex">Interactive Dashboards</span>
          <h2 className="text-3xl md:text-4xl font-black">4 Live Plotly Dashboards</h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">Fully interactive HTML dashboards — zoom, filter, and explore every dimension of the 200K campaign dataset.</p>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {dashboards.map((d, i) => <DashCard key={d.file} dash={d} delay={i * 100} visible={gridVis} />)}
        </div>

        <div className={`mt-10 glass rounded-2xl px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 transition-all duration-700 delay-500 ${gridVis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div>
            <div className="font-bold text-white">Powered by Plotly Express</div>
            <div className="text-sm text-gray-500 mt-0.5">All dashboards are standalone HTML files — no server required.</div>
          </div>
          <div className="flex gap-3 shrink-0">
            {['Plotly', 'Pandas', 'Python'].map(t => (
              <span key={t} className="text-xs px-3 py-1.5 rounded-full glass text-gray-400 border border-white/5">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
