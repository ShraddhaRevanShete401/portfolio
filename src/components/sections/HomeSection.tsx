import React, { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import officialPhoto from '@/imports/Official_Photo.jpeg'

function useCountUp(target: number, duration = 1800, active = false) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!active) return
    const start = Date.now()
    const timer = setInterval(() => {
      const t = Math.min((Date.now() - start) / duration, 1)
      setCount(Math.round(target * (1 - Math.pow(1 - t, 3))))
      if (t >= 1) clearInterval(timer)
    }, 16)
    return () => clearInterval(timer)
  }, [target, duration, active])
  return count
}

function FadeUp({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

function MetricItem({ value, suffix = '', label, active }: { value: number; suffix?: string; label: string; active: boolean }) {
  const count = useCountUp(value, 1800, active)
  return (
    <div className="text-center">
      <div className="text-4xl md:text-5xl font-bold tracking-tight tabular-nums bg-gradient-to-br from-[#2563EB] via-[#7C3AED] to-[#06B6D4] bg-clip-text text-transparent">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="mt-2 text-sm text-[#737373] dark:text-[#A3A3A3] font-medium">{label}</div>
    </div>
  )
}

function PhotoCard() {
  return (
    <div className="relative w-full max-w-[380px] mx-auto">
      <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-[#2563EB] via-[#7C3AED] to-[#06B6D4] opacity-60 blur-lg" />
      <div className="absolute -inset-[3px] rounded-3xl bg-gradient-to-br from-[#2563EB] via-[#7C3AED] to-[#06B6D4]" />
      <div className="relative rounded-3xl overflow-hidden bg-[#E8E8E8]">
        <img
          src={officialPhoto}
          alt="Shraddha Revan Shete — PGDM Big Data Analytics, Goa Institute of Management"
          className="w-full object-cover object-top"
          style={{ aspectRatio: '4/5' }}
        />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0D0D0D]/80 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <p className="text-white text-sm font-semibold">Shraddha Revan Shete</p>
          <p className="text-white/70 text-xs mt-0.5">PGDM – Big Data Analytics · GIM</p>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: -8 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5, type: 'spring' }}
        className="absolute -top-4 -right-4 bg-white dark:bg-[#1A1A1A] border border-[#E5E4E2] dark:border-[#2A2A2A] rounded-2xl px-4 py-3 shadow-xl"
      >
        <p className="text-[9px] uppercase tracking-widest text-[#A3A3A3] mb-1">YTD Sales</p>
        <p className="text-lg font-bold bg-gradient-to-r from-[#2563EB] to-[#7C3AED] bg-clip-text text-transparent">$371.2M</p>
        <p className="text-[9px] text-emerald-500 font-semibold">↑ Analyzed</p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 8 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 1.0, duration: 0.5, type: 'spring' }}
        className="absolute -bottom-4 -left-4 bg-white dark:bg-[#1A1A1A] border border-[#E5E4E2] dark:border-[#2A2A2A] rounded-2xl px-4 py-3 shadow-xl"
      >
        <p className="text-[9px] uppercase tracking-widest text-[#A3A3A3] mb-1">Campaigns</p>
        <p className="text-lg font-bold bg-gradient-to-r from-[#7C3AED] to-[#06B6D4] bg-clip-text text-transparent">1,200+</p>
        <p className="text-[9px] text-[#A3A3A3]">EDA completed</p>
      </motion.div>
    </div>
  )
}

export default function HomeSection() {
  const metricsRef = useRef(null)
  const metricsInView = useInView(metricsRef, { once: true, margin: '-80px' })

  return (
    <>
      {/* HERO */}
      <section
        id="home"
        className="relative pt-24 pb-20 px-6 lg:px-8 overflow-hidden"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 60% 0%, rgba(37,99,235,0.07) 0%, transparent 70%), radial-gradient(ellipse 60% 40% at 0% 100%, rgba(124,58,237,0.05) 0%, transparent 70%)',
        }}
      >
        <div
          className="absolute inset-0 opacity-[0.025] dark:opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle, #141414 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />
        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[1fr_400px] gap-12 lg:gap-16 items-center min-h-[80vh]">

            {/* Left — text */}
            <div className="flex flex-col gap-6 max-w-2xl">
              <FadeUp delay={0} className="flex items-center gap-3">
                <div className="h-px w-8 bg-gradient-to-r from-[#2563EB] to-[#7C3AED]" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.14em] bg-gradient-to-r from-[#2563EB] to-[#7C3AED] bg-clip-text text-transparent">
                  PGDM – BIG DATA ANALYTICS · GOA INSTITUTE OF MANAGEMENT
                </span>
              </FadeUp>

              <FadeUp delay={0.1}>
                <h1 className="text-4xl md:text-5xl lg:text-[3.4rem] font-bold leading-[1.08] tracking-[-0.025em] text-[#141414] dark:text-white">
                  Turning data and{' '}
                  <span className="bg-gradient-to-r from-[#2563EB] via-[#7C3AED] to-[#06B6D4] bg-clip-text text-transparent">
                    mathematical thinking
                  </span>{' '}
                  into better business decisions.
                </h1>
              </FadeUp>

              <FadeUp delay={0.2}>
                <p className="text-base md:text-lg text-[#525252] dark:text-[#A3A3A3] leading-relaxed">
                  Business analytics professional in training with a foundation in Mathematics, Statistics, Data Analytics, Visualization and Strategic Problem Solving.
                </p>
              </FadeUp>

              <FadeUp delay={0.3} className="flex items-center gap-2 flex-wrap">
                {['React', 'Flask', 'Python', 'Power BI', 'SQL'].map((tech, i) => (
                  <span
                    key={tech}
                    className="text-[10px] font-semibold px-3 py-1.5 rounded-full border"
                    style={{
                      background: `linear-gradient(135deg, ${['rgba(37,99,235,0.08)', 'rgba(124,58,237,0.08)', 'rgba(6,182,212,0.08)', 'rgba(5,150,105,0.08)', 'rgba(234,88,12,0.08)'][i]}, transparent)`,
                      borderColor: ['rgba(37,99,235,0.25)', 'rgba(124,58,237,0.25)', 'rgba(6,182,212,0.25)', 'rgba(5,150,105,0.25)', 'rgba(234,88,12,0.25)'][i],
                      color: ['#2563EB', '#7C3AED', '#0891B2', '#059669', '#EA580C'][i],
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </FadeUp>

              <FadeUp delay={0.4} className="flex flex-wrap gap-3 pt-1">
                <a
                  href="#projects"
                  className="group flex items-center gap-2 px-6 py-3.5 text-sm font-semibold rounded-full text-white shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition-shadow"
                  style={{ background: 'linear-gradient(135deg, #2563EB, #7C3AED)' }}
                >
                  Explore My Work
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="transition-transform group-hover:translate-x-0.5">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </a>
                <a
                  href="#"
                  className="group flex items-center gap-2 px-6 py-3.5 border border-[#E5E4E2] dark:border-[#2A2A2A] text-[#141414] dark:text-white text-sm font-semibold rounded-full hover:border-[#2563EB] hover:text-[#2563EB] dark:hover:border-[#7C3AED] dark:hover:text-[#7C3AED] transition-all duration-200 bg-white dark:bg-transparent"
                >
                  Download Resume
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="transition-transform group-hover:translate-x-0.5 -translate-y-px">
                    <path d="M7 17L17 7M17 7H7M17 7v10"/>
                  </svg>
                </a>
              </FadeUp>

              <FadeUp delay={0.5}>
                <a
                  href="https://linkedin.com/in/shraddhashete"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-1.5 text-sm text-[#737373] hover:text-[#2563EB] dark:hover:text-[#3B82F6] transition-colors w-fit"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z M4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/>
                  </svg>
                  LinkedIn ↗
                </a>
              </FadeUp>
            </div>

            {/* Right — photo */}
            <motion.div
              initial={{ opacity: 0, x: 40, scale: 0.96 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
              className="flex justify-center lg:justify-end"
            >
              <PhotoCard />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CREDIBILITY STRIP */}
      <div
        className="border-y border-[#E5E4E2] dark:border-[#1E1E1E]"
        style={{ background: 'linear-gradient(90deg, rgba(37,99,235,0.04) 0%, rgba(124,58,237,0.04) 50%, rgba(6,182,212,0.04) 100%)' }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4">
          <div className="flex flex-wrap items-center justify-center md:justify-between gap-4 md:gap-8">
            {[
              { label: 'MATHEMATICS', color: '#2563EB' },
              { label: 'ANALYTICS', color: '#7C3AED' },
              { label: 'BUSINESS INTELLIGENCE', color: '#06B6D4' },
              { label: 'STRATEGY', color: '#059669' },
              { label: 'DATA VISUALIZATION', color: '#EA580C' },
            ].map((item, i) => (
              <div key={item.label} className="flex items-center gap-4 md:gap-8">
                {i > 0 && <div className="hidden md:block w-px h-4 bg-[#D4D3D1] dark:bg-[#2A2A2A]" />}
                <span className="text-[10px] font-bold uppercase tracking-[0.16em]" style={{ color: item.color }}>
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* METRICS */}
      <section
        ref={metricsRef}
        className="py-20 px-6 lg:px-8"
        style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 100%, rgba(124,58,237,0.05) 0%, transparent 70%)' }}
      >
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {metricsInView && (
              <>
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0 }}>
                  <MetricItem value={1200} suffix="+" label="Campaigns analyzed" active={metricsInView} />
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-br from-[#2563EB] via-[#7C3AED] to-[#06B6D4] bg-clip-text text-transparent">$371.2M</div>
                  <div className="mt-2 text-sm text-[#737373] dark:text-[#A3A3A3] font-medium">YTD sales analyzed</div>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                  <MetricItem value={280} suffix="+" label="Students engaged" active={metricsInView} />
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-br from-[#059669] to-[#06B6D4] bg-clip-text text-transparent">95%</div>
                  <div className="mt-2 text-sm text-[#737373] dark:text-[#A3A3A3] font-medium">Positive feedback</div>
                </motion.div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* POSITIONING */}
      <section
        className="py-20 px-6 lg:px-8"
        style={{ background: 'linear-gradient(135deg, rgba(37,99,235,0.03) 0%, rgba(124,58,237,0.04) 50%, rgba(6,182,212,0.03) 100%)' }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[#141414] dark:text-white">
              Where analytical thinking meets{' '}
              <span className="bg-gradient-to-r from-[#2563EB] to-[#7C3AED] bg-clip-text text-transparent">
                business decisions.
              </span>
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {[
              { num: '01', title: 'ANALYZE', color: '#2563EB', body: 'Turn raw data into meaningful patterns, trends and KPIs. Identify what matters and filter out the noise.' },
              { num: '02', title: 'UNDERSTAND', color: '#7C3AED', body: 'Use mathematics, statistics and structured reasoning to understand the underlying problem and its root causes.' },
              { num: '03', title: 'RECOMMEND', color: '#06B6D4', body: 'Translate analysis into actionable business recommendations that drive better decisions and measurable outcomes.' },
            ].map((item, i) => (
              <motion.div
                key={item.num}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="group"
              >
                <p className="text-[10px] font-mono mb-3 tracking-widest" style={{ color: item.color }}>{item.num}</p>
                <h3 className="text-sm font-bold uppercase tracking-[0.12em] mb-3" style={{ color: item.color }}>{item.title}</h3>
                <div className="h-px w-8 mb-4 transition-all duration-300 group-hover:w-16" style={{ background: `linear-gradient(90deg, ${item.color}, transparent)` }} />
                <p className="text-sm text-[#525252] dark:text-[#A3A3A3] leading-relaxed">{item.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12"
          >
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.14em] bg-gradient-to-r from-[#2563EB] to-[#7C3AED] bg-clip-text text-transparent mb-2">Selected Work</p>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[#141414] dark:text-white">Featured Projects</h2>
            </div>
            <a href="#projects" className="text-sm text-[#525252] dark:text-[#A3A3A3] hover:text-[#2563EB] transition-colors">View all projects →</a>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Marketing Campaign Profitability Analysis',
                problem: 'Identifying where marketing spend creates — and destroys — profit across 1,200 campaigns.',
                metric: '1,200 campaigns', tag: 'Business Analytics',
                gradient: 'from-[#2563EB] to-[#7C3AED]', delay: 0,
              },
              {
                title: 'Automobile Sales Analytics Dashboard',
                problem: 'Turning complex sales data into decision-ready insights across $371.2M in transactions.',
                metric: '$371.2M YTD', tag: 'Business Intelligence',
                gradient: 'from-[#059669] to-[#06B6D4]', delay: 0.1,
              },
              {
                title: 'Game Theory Research for Strategic Decision-Making',
                problem: 'Using mathematical reasoning to improve strategic decisions through evidence-based frameworks.',
                metric: '95% feedback', tag: 'Strategy',
                gradient: 'from-[#7C3AED] to-[#EA580C]', delay: 0.2,
              },
            ].map((project) => (
              <motion.a
                key={project.title}
                href="#projects"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: project.delay }}
                whileHover={{ y: -4 }}
                className="group block bg-white dark:bg-[#111111] border border-[#E5E4E2] dark:border-[#1E1E1E] rounded-2xl p-6 hover:shadow-[0_12px_40px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_12px_40px_rgba(0,0,0,0.5)] transition-shadow duration-300 relative overflow-hidden"
              >
                <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity`} />
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-[#A3A3A3]">{project.tag}</span>
                  <div className={`w-2 h-2 rounded-full bg-gradient-to-br ${project.gradient}`} />
                </div>
                <h3 className="text-base font-semibold text-[#141414] dark:text-white leading-snug mb-3">{project.title}</h3>
                <p className="text-sm text-[#737373] leading-relaxed mb-6">{project.problem}</p>
                <div className="pt-4 border-t border-[#F1F0EE] dark:border-[#1A1A1A] flex items-end justify-between">
                  <p className={`text-lg font-bold bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}>{project.metric}</p>
                  <span className={`text-sm font-medium bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}>View →</span>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section
        className="py-20 px-6 lg:px-8 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #141414 0%, #1E1B4B 50%, #0C2340 100%)' }}
      >
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full opacity-20 blur-3xl" style={{ background: 'radial-gradient(circle, #7C3AED, transparent)' }} />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full opacity-20 blur-3xl" style={{ background: 'radial-gradient(circle, #2563EB, transparent)' }} />
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative max-w-4xl mx-auto text-center"
        >
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-white mb-4">
            Interested in how I solve{' '}
            <span className="bg-gradient-to-r from-[#60A5FA] via-[#A78BFA] to-[#67E8F9] bg-clip-text text-transparent">
              business problems?
            </span>
          </h2>
          <p className="text-[#A3A3A3] mb-8">From exploratory data analysis to strategic recommendations — let's connect.</p>
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold rounded-full text-white shadow-lg"
            style={{ background: 'linear-gradient(135deg, #2563EB, #7C3AED)' }}
          >
            Explore My Projects
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </motion.a>
        </motion.div>
      </section>
    </>
  )
}
