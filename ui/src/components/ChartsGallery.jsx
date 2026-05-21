import { useRef, useEffect, useState } from 'react'

const charts = [
  { file: 'p8_01_kpi_summary.png',      title: 'KPI Summary',           tag: 'Overview' },
  { file: 'p8_02_channel.png',           title: 'Channel Performance',   tag: 'Channels' },
  { file: 'p8_03_pinterest.png',         title: 'Platform Breakdown',    tag: 'Channels' },
  { file: 'p8_04_monthly.png',           title: 'Monthly Trends',        tag: 'Time Series' },
  { file: 'p8_05_audience.png',          title: 'Audience Segments',     tag: 'Segments' },
  { file: 'p8_06_campaign_goal.png',     title: 'Campaign Goals',        tag: 'Goals' },
  { file: 'p8_07_segment.png',           title: 'Segment Deep-Dive',     tag: 'Segments' },
  { file: 'p8_08_correlation.png',       title: 'Feature Correlation',   tag: 'EDA' },
  { file: 'p8_09_roc_curves.png',        title: 'ROC Curves',            tag: 'ML' },
  { file: 'p8_10_model_comparison.png',  title: 'Model Comparison',      tag: 'ML' },
  { file: 'p8_11_feature_importance.png',title: 'Feature Importance',    tag: 'ML' },
  { file: 'p8_12_confusion.png',         title: 'Confusion Matrix',      tag: 'ML' },
  { file: 'p8_13_duration.png',          title: 'Duration Analysis',     tag: 'EDA' },
  { file: 'p8_14_location.png',          title: 'Location Performance',  tag: 'EDA' },
]

const tagColors = {
  Overview:    'from-indigo-500/20 to-indigo-500/5 text-indigo-400',
  Channels:    'from-cyan-500/20 to-cyan-500/5 text-cyan-400',
  'Time Series':'from-violet-500/20 to-violet-500/5 text-violet-400',
  Segments:    'from-emerald-500/20 to-emerald-500/5 text-emerald-400',
  Goals:       'from-amber-500/20 to-amber-500/5 text-amber-400',
  EDA:         'from-pink-500/20 to-pink-500/5 text-pink-400',
  ML:          'from-blue-500/20 to-blue-500/5 text-blue-400',
}

const tags = ['All', ...Object.keys(tagColors)]

function useFadeIn(threshold = 0.08) {
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

function ChartCard({ chart, delay }) {
  const [ref, visible] = useFadeIn()
  const [open, setOpen] = useState(false)
  const color = tagColors[chart.tag]

  return (
    <>
      <div
        ref={ref}
        onClick={() => setOpen(true)}
        className={`glass rounded-2xl overflow-hidden cursor-pointer group transition-all duration-700 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand/10 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        style={{ transitionDelay: `${delay}ms` }}
      >
        <div className="relative overflow-hidden bg-navy-900/60 aspect-video">
          <img
            src={`/charts/${chart.file}`}
            alt={chart.title}
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
            <span className="text-xs text-gray-300">Click to expand</span>
          </div>
        </div>
        <div className="p-4 flex items-center justify-between">
          <span className="text-sm font-semibold text-white">{chart.title}</span>
          <span className={`text-xs px-2 py-0.5 rounded-full bg-gradient-to-r ${color} border border-white/5`}>{chart.tag}</span>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={() => setOpen(false)}>
          <div className="max-w-5xl w-full glass rounded-2xl overflow-hidden shadow-2xl" onClick={e => e.stopPropagation()}>
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/5">
              <div>
                <span className="font-bold text-white">{chart.title}</span>
                <span className={`ml-3 text-xs px-2 py-0.5 rounded-full bg-gradient-to-r ${color}`}>{chart.tag}</span>
              </div>
              <button onClick={() => setOpen(false)} className="text-gray-400 hover:text-white text-xl leading-none">&times;</button>
            </div>
            <img src={`/charts/${chart.file}`} alt={chart.title} className="w-full object-contain max-h-[75vh]" />
          </div>
        </div>
      )}
    </>
  )
}

export default function ChartsGallery() {
  const [headRef, headVis] = useFadeIn()
  const [active, setActive] = useState('All')
  const filtered = active === 'All' ? charts : charts.filter(c => c.tag === active)

  return (
    <section id="charts" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div ref={headRef} className={`text-center mb-14 transition-all duration-700 ${headVis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <span className="tag mb-4 inline-flex">Data Visualization</span>
          <h2 className="text-3xl md:text-4xl font-black">14 Analytical Charts</h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">From EDA to ML model evaluation — every insight visualized with Matplotlib & Seaborn.</p>
        </div>

        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {tags.map(t => (
            <button key={t} onClick={() => setActive(t)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${active === t ? 'bg-brand text-white shadow-lg shadow-brand/30' : 'glass text-gray-400 hover:text-white'}`}>
              {t}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filtered.map((c, i) => <ChartCard key={c.file} chart={c} delay={i * 60} />)}
        </div>
      </div>
    </section>
  )
}
