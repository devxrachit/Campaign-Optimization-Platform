import { useRef, useEffect, useState } from 'react'
import { Brain, TrendingUp, Award, Zap } from 'lucide-react'

const models = [
  {
    name: 'XGBoost',
    accuracy: 87.3,
    precision: 86.9,
    recall: 87.8,
    f1: 87.3,
    auc: 0.94,
    color: '#06b6d4',
    badge: 'Best Overall',
    badgeColor: 'from-cyan-500 to-blue-600',
    icon: Award,
  },
  {
    name: 'Gradient Boosting',
    accuracy: 86.1,
    precision: 85.7,
    recall: 86.5,
    f1: 86.1,
    auc: 0.93,
    color: '#8b5cf6',
    badge: 'Runner-up',
    badgeColor: 'from-violet-500 to-purple-600',
    icon: TrendingUp,
  },
  {
    name: 'Random Forest',
    accuracy: 84.6,
    precision: 84.2,
    recall: 85.1,
    f1: 84.6,
    auc: 0.92,
    color: '#10b981',
    badge: 'Robust',
    badgeColor: 'from-emerald-500 to-teal-600',
    icon: Brain,
  },
  {
    name: 'AdaBoost',
    accuracy: 81.4,
    precision: 80.9,
    recall: 81.8,
    f1: 81.3,
    auc: 0.89,
    color: '#f59e0b',
    badge: 'Ensemble',
    badgeColor: 'from-amber-500 to-orange-600',
    icon: Zap,
  },
  {
    name: 'Logistic Regression',
    accuracy: 76.2,
    precision: 75.8,
    recall: 76.7,
    f1: 76.2,
    auc: 0.84,
    color: '#6366f1',
    badge: 'Baseline',
    badgeColor: 'from-indigo-500 to-indigo-600',
    icon: TrendingUp,
  },
]

const metrics = ['accuracy', 'precision', 'recall', 'f1']

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

function ModelCard({ model, delay, visible }) {
  const { icon: Icon } = model
  return (
    <div className={`glass rounded-2xl p-5 transition-all duration-700 hover:-translate-y-1 hover:shadow-lg`}
      style={{ transitionDelay: `${delay}ms`, opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(2rem)' }}>
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${model.badgeColor} flex items-center justify-center shadow-lg`}>
            <Icon size={18} className="text-white" />
          </div>
          <div>
            <div className="font-bold text-white text-sm">{model.name}</div>
            <div className={`text-xs bg-gradient-to-r ${model.badgeColor} bg-clip-text text-transparent font-semibold`}>{model.badge}</div>
          </div>
        </div>
        <div className="text-right">
          <div className="text-2xl font-black text-white tabular-nums">{model.accuracy}%</div>
          <div className="text-xs text-gray-500">Accuracy</div>
        </div>
      </div>

      <div className="space-y-2.5">
        {metrics.map(m => (
          <div key={m}>
            <div className="flex justify-between text-xs mb-1">
              <span className="text-gray-500 capitalize">{m === 'f1' ? 'F1 Score' : m}</span>
              <span className="text-gray-300 tabular-nums font-medium">{model[m].toFixed(1)}%</span>
            </div>
            <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
              <div className="bar-fill h-full rounded-full" style={{ background: model.color, width: visible ? `${model[m]}%` : '0%', transitionDelay: `${delay + 100}ms` }} />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between">
        <span className="text-xs text-gray-500">AUC-ROC</span>
        <span className="text-sm font-bold tabular-nums" style={{ color: model.color }}>{model.auc.toFixed(2)}</span>
      </div>
    </div>
  )
}

const pipeline = [
  { step: '01', title: 'Data Cleaning', desc: 'Null handling, type casting, outlier removal' },
  { step: '02', title: 'Feature Eng.', desc: 'Encoding, scaling, interaction features' },
  { step: '03', title: 'Train/Test Split', desc: '80/20 stratified split, 5-fold CV' },
  { step: '04', title: 'Hyperparameter Tuning', desc: 'GridSearchCV on top performers' },
  { step: '05', title: 'Ensemble & Eval', desc: 'ROC, confusion matrix, F1 score' },
]

export default function MLSection() {
  const [headRef, headVis] = useFadeIn()
  const [gridRef, gridVis] = useFadeIn()
  const [pipeRef, pipeVis] = useFadeIn()

  return (
    <section id="models" className="py-20 px-6 bg-navy-900/30">
      <div className="max-w-7xl mx-auto">
        <div ref={headRef} className={`text-center mb-14 transition-all duration-700 ${headVis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <span className="tag mb-4 inline-flex">Machine Learning</span>
          <h2 className="text-3xl md:text-4xl font-black">5 Models Benchmarked</h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">Predicting high-ROI campaigns using ensemble methods. XGBoost leads with 87.3% accuracy and 0.94 AUC.</p>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mb-14">
          {models.map((m, i) => <ModelCard key={m.name} model={m} delay={i * 80} visible={gridVis} />)}
        </div>

        <div ref={pipeRef} className={`glass rounded-2xl p-8 transition-all duration-700 ${pipeVis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-8 text-center">ML Training Pipeline</h3>
          <div className="flex flex-col md:flex-row items-stretch gap-0">
            {pipeline.map((s, i) => (
              <div key={s.step} className="flex md:flex-col items-center flex-1">
                <div className="flex md:flex-col items-center flex-1 gap-0">
                  <div className={`flex-1 md:w-full md:flex-none md:h-0.5 h-full w-0.5 transition-all duration-700`}
                    style={{ background: pipeVis ? 'linear-gradient(90deg, #6366f1, #06b6d4)' : '#1e293b', transitionDelay: `${i * 120}ms`, display: i === 0 ? 'none' : undefined }} />
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 text-xs font-black transition-all duration-500 shadow-lg`}
                    style={{ background: pipeVis ? 'linear-gradient(135deg, #6366f1, #06b6d4)' : '#1e293b', transitionDelay: `${i * 120}ms` }}>
                    {s.step}
                  </div>
                  <div className={`flex-1 md:w-full md:flex-none md:h-0.5 h-full w-0.5 transition-all duration-700`}
                    style={{ background: pipeVis ? 'linear-gradient(90deg, #6366f1, #06b6d4)' : '#1e293b', transitionDelay: `${i * 120}ms`, display: i === pipeline.length - 1 ? 'none' : undefined }} />
                </div>
                <div className={`text-center px-2 pt-4 transition-all duration-700`} style={{ opacity: pipeVis ? 1 : 0, transitionDelay: `${i * 120 + 200}ms` }}>
                  <div className="text-sm font-semibold text-white">{s.title}</div>
                  <div className="text-xs text-gray-500 mt-1 max-w-[120px] mx-auto">{s.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
