import { useRef, useEffect, useState } from 'react'

const channels = [
  { name: 'Email',      roi: 5.00, ctr: 14.05, revenue: 2.10, color: '#6366f1', icon: '📧' },
  { name: 'Google Ads', roi: 5.00, ctr: 13.92, revenue: 2.10, color: '#06b6d4', icon: '🔍' },
  { name: 'Website',    roi: 5.01, ctr: 14.10, revenue: 2.09, color: '#8b5cf6', icon: '🌐' },
  { name: 'YouTube',    roi: 4.99, ctr: 14.12, revenue: 2.08, color: '#ef4444', icon: '▶️' },
  { name: 'Instagram',  roi: 4.99, ctr: 14.00, revenue: 2.08, color: '#ec4899', icon: '📸' },
  { name: 'Facebook',   roi: 5.02, ctr: 14.05, revenue: 2.06, color: '#3b82f6', icon: '👤' },
]

const goals = [
  { name: 'Display',      roi: 5.01, revenue: 2.50, campaigns: 40034, color: '#6366f1' },
  { name: 'Influencer',   roi: 5.01, revenue: 2.52, campaigns: 40169, color: '#8b5cf6' },
  { name: 'Search',       roi: 5.01, revenue: 2.51, campaigns: 40157, color: '#06b6d4' },
  { name: 'Email',        roi: 4.99, revenue: 2.49, campaigns: 39972, color: '#10b981' },
  { name: 'Social Media', roi: 4.99, revenue: 2.49, campaigns: 39668, color: '#f59e0b' },
]

const segments = [
  { name: 'Tech Enthusiasts',   pct: 20.3, campaigns: 40596 },
  { name: 'Foodies',            pct: 20.1, campaigns: 40278 },
  { name: 'Health & Wellness',  pct: 20.0, campaigns: 39963 },
  { name: 'Outdoor Adventurers',pct: 19.9, campaigns: 39829 },
  { name: 'Fashionistas',       pct: 19.7, campaigns: 39334 },
]

function useFadeIn(threshold = 0.1) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setVisible(true); observer.disconnect() }
    }, { threshold })
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])
  return [ref, visible]
}

function BarRow({ label, value, max, color, prefix = '', suffix = '', extra, icon, delay, visible }) {
  const pct = (value / max) * 100
  return (
    <div className="flex items-center gap-4 group" style={{ transitionDelay: `${delay}ms` }}>
      <div className="w-32 text-sm text-gray-400 shrink-0 flex items-center gap-2">
        {icon && <span>{icon}</span>}
        <span className="truncate">{label}</span>
      </div>
      <div className="flex-1 h-2 bg-white/5 rounded-full overflow-hidden">
        <div className="bar-fill h-full rounded-full" style={{ background: color, width: visible ? `${pct}%` : '0%' }} />
      </div>
      <div className="w-24 text-right text-sm font-semibold text-white tabular-nums">{prefix}{value.toFixed(2)}{suffix}</div>
      {extra && <div className="hidden md:block w-24 text-right text-xs text-gray-600">{extra}</div>}
    </div>
  )
}

export default function PlatformSection() {
  const [headRef, headVis] = useFadeIn()
  const [ref1, vis1] = useFadeIn()
  const [ref2, vis2] = useFadeIn()
  const [ref3, vis3] = useFadeIn()

  const maxRevenue = Math.max(...channels.map(c => c.revenue))
  const maxGoalRev = Math.max(...goals.map(g => g.revenue))

  return (
    <section id="platforms" className="py-20 px-6 bg-navy-900/30">
      <div className="max-w-7xl mx-auto">
        <div ref={headRef} className={`text-center mb-14 transition-all duration-700 ${headVis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <span className="tag mb-4 inline-flex">Platform Intelligence</span>
          <h2 className="text-3xl md:text-4xl font-black">Cross-Platform Performance</h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">Revenue, ROI, and CTR breakdown across all 6 ad channels and 5 campaign goals.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Channel Revenue */}
          <div ref={ref1} className={`glass rounded-2xl p-6 col-span-1 transition-all duration-700 ${vis1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-6">Channel Revenue ($B)</h3>
            <div className="flex flex-col gap-4">
              {channels.map((c, i) => (
                <BarRow key={c.name} label={c.name} value={c.revenue} max={maxRevenue} color={c.color}
                  prefix="$" suffix="B" icon={c.icon} delay={i * 80} visible={vis1} />
              ))}
            </div>
          </div>

          {/* Campaign Goal ROI */}
          <div ref={ref2} className={`glass rounded-2xl p-6 col-span-1 transition-all duration-700 delay-100 ${vis2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-6">Campaign Goal Revenue ($B)</h3>
            <div className="flex flex-col gap-4">
              {goals.map((g, i) => (
                <BarRow key={g.name} label={g.name} value={g.revenue} max={maxGoalRev} color={g.color}
                  prefix="$" suffix="B" extra={`${g.campaigns.toLocaleString()} camps`} delay={i * 80} visible={vis2} />
              ))}
            </div>
            <div className="mt-6 pt-5 border-t border-white/5 grid grid-cols-2 gap-4">
              {[{ label: 'Avg ROI', value: '5.0x' }, { label: 'Profitable', value: '100%' }].map(s => (
                <div key={s.label} className="text-center glass rounded-xl py-3">
                  <div className="text-xl font-black gradient-text">{s.value}</div>
                  <div className="text-xs text-gray-500 mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Audience Segments */}
          <div ref={ref3} className={`glass rounded-2xl p-6 col-span-1 transition-all duration-700 delay-200 ${vis3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-6">Audience Segments</h3>
            <div className="flex flex-col gap-5">
              {segments.map((s, i) => (
                <div key={s.name}>
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="text-sm text-gray-300">{s.name}</span>
                    <span className="text-xs text-gray-500 tabular-nums">{s.campaigns.toLocaleString()}</span>
                  </div>
                  <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <div className="bar-fill h-full" style={{ background: 'linear-gradient(90deg,#6366f1,#8b5cf6)', width: vis3 ? `${s.pct}%` : '0%', transitionDelay: `${i * 100}ms` }} />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-5 border-t border-white/5 space-y-3">
              {[
                { label: 'Best Location', value: 'Miami', sub: 'ROI 5.01x' },
                { label: 'Best Duration', value: '30 Days', sub: '$3.14B revenue' },
                { label: 'Top Language', value: 'Mandarin', sub: '5.01x ROI' },
              ].map(item => (
                <div key={item.label} className="flex justify-between items-center">
                  <span className="text-xs text-gray-500">{item.label}</span>
                  <div className="text-right">
                    <span className="text-sm font-semibold text-white">{item.value}</span>
                    <span className="text-xs text-gray-600 ml-2">{item.sub}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
