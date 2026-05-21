import { useEffect, useRef } from 'react'
import { TrendingUp, Target, Users, Zap } from 'lucide-react'

const badges = [
  { icon: TrendingUp, label: '200K Campaigns Analyzed' },
  { icon: Target, label: '5 Platforms Tracked' },
  { icon: Users, label: '5 ML Models Deployed' },
  { icon: Zap, label: '$12.5B Revenue Mapped' },
]

function useCounter(target, duration = 2000, prefix = '', suffix = '') {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      observer.disconnect()
      let start = null
      const step = (timestamp) => {
        if (!start) start = timestamp
        const progress = Math.min((timestamp - start) / duration, 1)
        const ease = 1 - Math.pow(1 - progress, 4)
        const value = Math.floor(ease * target)
        el.textContent = prefix + value.toLocaleString() + suffix
        if (progress < 1) requestAnimationFrame(step)
        else el.textContent = prefix + target.toLocaleString() + suffix
      }
      requestAnimationFrame(step)
    }, { threshold: 0.3 })
    observer.observe(el)
    return () => observer.disconnect()
  }, [target, duration, prefix, suffix])
  return ref
}

const stats = [
  { label: 'Total Campaigns', target: 200000, prefix: '', suffix: '' },
  { label: 'Total Revenue', target: 12.5, prefix: '$', suffix: 'B' },
  { label: 'Avg ROI', target: 5.0, prefix: '', suffix: 'x' },
  { label: 'Avg CTR', target: 14.04, prefix: '', suffix: '%' },
]

function StatCounter({ label, target, prefix, suffix }) {
  const ref = useCounter(target, 2000, prefix, suffix)
  return (
    <div className="text-center">
      <div ref={ref} className="text-3xl md:text-4xl font-black gradient-text tabular-nums">
        {prefix}0{suffix}
      </div>
      <div className="text-xs text-gray-500 mt-1 font-medium uppercase tracking-wider">{label}</div>
    </div>
  )
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 pb-16 overflow-hidden hero-grid">
      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-violet/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Badge row */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {badges.map(({ icon: Icon, label }) => (
            <span key={label} className="tag float-none">
              <Icon size={12} /> {label}
            </span>
          ))}
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-black leading-[1.05] tracking-tight mb-6">
          Social Media<br />
          <span className="gradient-text">Campaign Analytics</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed mb-12">
          End-to-end ML pipeline analyzing <strong className="text-white">200,000 ad campaigns</strong> across
          Facebook, Instagram, Google, YouTube, Email & Website — from raw data to predictive models.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a href="#charts" className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-brand hover:bg-brand-dark text-white font-semibold transition-all duration-200 shadow-xl shadow-brand/30 hover:shadow-brand/50 hover:-translate-y-0.5">
            Explore Charts
          </a>
          <a href="#dashboards" className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl glass glass-hover text-gray-300 hover:text-white font-semibold">
            Live Dashboards
          </a>
        </div>

        {/* Counter strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto glass rounded-2xl px-8 py-6">
          {stats.map(s => <StatCounter key={s.label} {...s} />)}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-600 animate-bounce">
        <div className="w-px h-10 bg-gradient-to-b from-transparent to-brand/60" />
      </div>
    </section>
  )
}
