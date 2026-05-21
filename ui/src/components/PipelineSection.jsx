import { useRef, useEffect, useState } from 'react'
import { Database, GitBranch, BarChart2, Brain, LineChart, Layout } from 'lucide-react'

const stages = [
  {
    id: 'p1',
    icon: Database,
    title: 'Data Ingestion & Cleaning',
    desc: 'Load 200K rows from CSV. Fix duration format, rename columns, drop nulls.',
    color: '#6366f1',
    tags: ['pandas', 'numpy'],
    outputs: ['cleaned_df'],
  },
  {
    id: 'p2–p4',
    icon: BarChart2,
    title: 'Exploratory Data Analysis',
    desc: 'Channel KPIs, audience segments, A/B tests, t-tests, correlation matrices.',
    color: '#8b5cf6',
    tags: ['scipy', 'seaborn'],
    outputs: ['channel_stats', 'segment_df'],
  },
  {
    id: 'p5',
    icon: GitBranch,
    title: 'Feature Engineering',
    desc: 'Label encode categoricals, scale numerics, construct interaction features.',
    color: '#06b6d4',
    tags: ['scikit-learn', 'LabelEncoder'],
    outputs: ['X_train', 'X_test'],
  },
  {
    id: 'p6',
    icon: Brain,
    title: 'Model Training',
    desc: 'LR, RF, GB, XGBoost, AdaBoost. GridSearchCV tuning with 5-fold CV.',
    color: '#10b981',
    tags: ['xgboost', 'GridSearchCV'],
    outputs: ['trained_models', 'cv_scores'],
  },
  {
    id: 'p7',
    icon: LineChart,
    title: 'Evaluation & Reports',
    desc: 'ROC curves, confusion matrices, F1/AUC scores exported to CSV.',
    color: '#f59e0b',
    tags: ['metrics', 'classification_report'],
    outputs: ['model_report.csv'],
  },
  {
    id: 'p8–p9',
    icon: Layout,
    title: 'Charts & Dashboards',
    desc: '14 static Matplotlib charts + 4 interactive Plotly HTML dashboards.',
    color: '#ef4444',
    tags: ['matplotlib', 'plotly'],
    outputs: ['*.png', '*.html'],
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

function StageCard({ stage, delay, visible }) {
  const { icon: Icon } = stage
  return (
    <div className="flex gap-4 group" style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateX(0)' : 'translateX(-2rem)', transition: 'all 0.6s ease', transitionDelay: `${delay}ms` }}>
      <div className="flex flex-col items-center">
        <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 shadow-lg transition-transform duration-300 group-hover:scale-110"
          style={{ background: `${stage.color}22`, border: `1px solid ${stage.color}44` }}>
          <Icon size={18} style={{ color: stage.color }} />
        </div>
        <div className="w-px flex-1 mt-3" style={{ background: `linear-gradient(to bottom, ${stage.color}40, transparent)` }} />
      </div>

      <div className="pb-8 flex-1">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-xs font-mono font-bold px-2 py-0.5 rounded" style={{ background: `${stage.color}18`, color: stage.color }}>{stage.id}</span>
          <h3 className="font-bold text-white text-sm">{stage.title}</h3>
        </div>
        <p className="text-sm text-gray-500 mb-3 leading-relaxed">{stage.desc}</p>
        <div className="flex flex-wrap gap-2">
          {stage.tags.map(t => (
            <span key={t} className="text-xs px-2 py-0.5 rounded-full glass text-gray-400 border border-white/5 font-mono">{t}</span>
          ))}
          <span className="text-xs text-gray-600 self-center">→</span>
          {stage.outputs.map(o => (
            <span key={o} className="text-xs px-2 py-0.5 rounded-full font-mono" style={{ background: `${stage.color}15`, color: `${stage.color}cc` }}>{o}</span>
          ))}
        </div>
      </div>
    </div>
  )
}

const techStack = [
  { name: 'Python 3.11', color: '#3b82f6' },
  { name: 'Pandas', color: '#10b981' },
  { name: 'NumPy', color: '#6366f1' },
  { name: 'Scikit-learn', color: '#f59e0b' },
  { name: 'XGBoost', color: '#ef4444' },
  { name: 'Matplotlib', color: '#8b5cf6' },
  { name: 'Seaborn', color: '#06b6d4' },
  { name: 'Plotly', color: '#ec4899' },
  { name: 'SciPy', color: '#14b8a6' },
  { name: 'Jupyter', color: '#f97316' },
]

export default function PipelineSection() {
  const [headRef, headVis] = useFadeIn()
  const [stagesRef, stagesVis] = useFadeIn()
  const [techRef, techVis] = useFadeIn()

  return (
    <section id="pipeline" className="py-20 px-6 bg-navy-900/30">
      <div className="max-w-7xl mx-auto">
        <div ref={headRef} className={`text-center mb-14 transition-all duration-700 ${headVis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <span className="tag mb-4 inline-flex">End-to-End Pipeline</span>
          <h2 className="text-3xl md:text-4xl font-black">How It Works</h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">A single Jupyter notebook orchestrates 10 pipeline stages — from raw CSV to interactive dashboards.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div ref={stagesRef} className="glass rounded-2xl p-8">
            {stages.map((s, i) => (
              <StageCard key={s.id} stage={s} delay={i * 100} visible={stagesVis} />
            ))}
          </div>

          <div className="space-y-6">
            <div ref={techRef} className={`glass rounded-2xl p-6 transition-all duration-700 ${techVis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-5">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {techStack.map((t, i) => (
                  <span key={t.name} className="text-sm px-3 py-1.5 rounded-full font-medium transition-all duration-500 border"
                    style={{
                      background: `${t.color}12`,
                      color: t.color,
                      borderColor: `${t.color}30`,
                      opacity: techVis ? 1 : 0,
                      transform: techVis ? 'scale(1)' : 'scale(0.8)',
                      transitionDelay: `${i * 50}ms`,
                    }}>
                    {t.name}
                  </span>
                ))}
              </div>
            </div>

            <div className={`glass rounded-2xl p-6 transition-all duration-700 delay-200 ${techVis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-5">Dataset</h3>
              <div className="space-y-3">
                {[
                  { label: 'Source', val: 'Kaggle — Social Media Advertising' },
                  { label: 'Rows', val: '200,000 campaigns' },
                  { label: 'Features', val: '12 raw → 20+ engineered' },
                  { label: 'Channels', val: 'Email, Facebook, Google Ads, Instagram, Website, YouTube' },
                  { label: 'Target', val: 'High-ROI Campaign (binary)' },
                ].map(r => (
                  <div key={r.label} className="flex justify-between items-start gap-4 py-2 border-b border-white/5 last:border-0">
                    <span className="text-xs text-gray-500 shrink-0">{r.label}</span>
                    <span className="text-xs text-gray-300 text-right">{r.val}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className={`glass rounded-2xl p-6 transition-all duration-700 delay-300 ${techVis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Quick Start</h3>
              <pre className="text-xs text-gray-400 leading-relaxed font-mono overflow-x-auto whitespace-pre-wrap">
{`# 1. Install dependencies
pip install -r requirements.txt

# 2. Place dataset
data/Social_Media_Advertising.csv

# 3. Run full pipeline
jupyter notebook notebook/
# → Social-ads-pipeline-mergefile.ipynb`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
