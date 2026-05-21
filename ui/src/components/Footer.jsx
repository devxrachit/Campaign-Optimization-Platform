import { BarChart3, Github, ExternalLink } from 'lucide-react'

const techBadges = [
  { name: 'Python', color: '#3b82f6' },
  { name: 'Pandas', color: '#10b981' },
  { name: 'Scikit-learn', color: '#f59e0b' },
  { name: 'XGBoost', color: '#ef4444' },
  { name: 'Plotly', color: '#ec4899' },
  { name: 'Matplotlib', color: '#8b5cf6' },
  { name: 'React', color: '#06b6d4' },
  { name: 'Tailwind CSS', color: '#14b8a6' },
  { name: 'Vite', color: '#a78bfa' },
  { name: 'Jupyter', color: '#f97316' },
]

const sections = [
  {
    title: 'Explore',
    links: [
      { label: 'KPI Overview', href: '#stats' },
      { label: 'Platform Analysis', href: '#platforms' },
      { label: 'Charts Gallery', href: '#charts' },
      { label: 'ML Models', href: '#models' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Revenue Dashboard', href: '/p9_01_money_dashboard.html', external: true },
      { label: 'Audience Dashboard', href: '/p9_03_customers_dashboard.html', external: true },
      { label: 'Models Dashboard', href: '/p9_04_models_dashboard.html', external: true },
      { label: 'GitHub Repo', href: 'https://github.com/devxrachit/Campaign-Optimization-Platform', external: true },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-navy-950/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          <div>
            <a href="#" className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-brand flex items-center justify-center shadow-lg shadow-brand/30">
                <BarChart3 size={16} className="text-white" />
              </div>
              <span className="font-bold text-lg tracking-tight">MetricFlow</span>
            </a>
            <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
              End-to-end ML pipeline analyzing 200,000 ad campaigns across 6 channels — from raw data to predictive intelligence.
            </p>
            <a href="https://github.com/devxrachit/Campaign-Optimization-Platform" target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2 mt-5 text-sm text-gray-400 hover:text-white transition-colors">
              <Github size={16} /> devxrachit
            </a>
          </div>

          {sections.map(s => (
            <div key={s.title}>
              <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">{s.title}</h4>
              <ul className="space-y-2.5">
                {s.links.map(l => (
                  <li key={l.label}>
                    <a href={l.href} target={l.external ? '_blank' : undefined} rel={l.external ? 'noreferrer' : undefined}
                      className="text-sm text-gray-500 hover:text-white transition-colors inline-flex items-center gap-1.5">
                      {l.label}
                      {l.external && <ExternalLink size={11} className="opacity-50" />}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/5 pt-8">
          <p className="text-xs text-gray-600 mb-5 uppercase tracking-widest font-semibold">Tech Stack</p>
          <div className="flex flex-wrap gap-2">
            {techBadges.map(t => (
              <span key={t.name} className="text-xs px-3 py-1 rounded-full border font-medium"
                style={{ background: `${t.color}10`, color: `${t.color}bb`, borderColor: `${t.color}25` }}>
                {t.name}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-600">
          <span>Campaign Optimization Platform &copy; {new Date().getFullYear()}</span>
          <span>200,000 campaigns &middot; 6 channels &middot; 5 ML models &middot; $12.5B revenue analyzed</span>
        </div>
      </div>
    </footer>
  )
}
