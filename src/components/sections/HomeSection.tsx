import React, { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import officialPhoto from '@/imports/Official_Photo.jpeg'
import resumeImage from '../../../Resume.jpeg'

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
    <div className="text-center min-w-0">
      <div className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight tabular-nums break-all">
        <span className="bg-gradient-to-br from-[#F59E0B] via-[#EC4899] to-[#A855F7] bg-clip-text text-transparent">
          {count.toLocaleString()}{suffix}
        </span>
      </div>
      <div className="mt-2 text-sm text-[#737373] dark:text-[#A3A3A3] font-medium break-words">{label}</div>
    </div>
  )
}

function PhotoCard() {
  return (
    <div className="w-full max-w-[420px] mx-auto">
      <div className="relative mx-auto w-[280px] sm:w-[320px] md:w-[360px]">
        <div className="absolute -inset-6 rounded-full bg-gradient-to-br from-[#2563EB]/35 via-[#7C3AED]/30 to-[#06B6D4]/35 blur-3xl" />
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#2563EB] via-[#7C3AED] to-[#06B6D4] p-[4px] shadow-[0_0_60px_rgba(59,130,246,0.18)]">
          <div className="h-full w-full rounded-full bg-[#E8E8E8]" />
        </div>
        <div className="relative aspect-square overflow-hidden rounded-full border border-white/10 bg-[#E8E8E8] shadow-2xl">
          <img
            src={officialPhoto}
            alt="Shraddha Revan Shete — PGDM Big Data Analytics, Goa Institute of Management"
            className="h-full w-full object-cover object-top"
          />
        </div>
      </div>
      <div className="mt-8 text-center w-full min-w-0">
        <p className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight leading-tight">
          <span className="text-gradient-warm">Shraddha Revan Shete</span>
        </p>
        <p className="mt-2 text-sm md:text-base text-[#525252] dark:text-[#A3A3A3] break-words">
          PGDM - Big Data Analytics · GIM
        </p>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease: 'easeOut' }}
          className="mt-5 flex justify-center w-full px-2"
        >
          <div className="inline-flex items-center gap-3 px-3 sm:px-4 md:px-5 py-2.5 md:py-3 rounded-full bg-[#1F2937]/90 dark:bg-[#141414]/95 border border-white/10 dark:border-white/5 shadow-[0_8px_30px_rgba(20,20,20,0.25)] backdrop-blur w-full sm:w-fit max-w-full overflow-hidden">
            <span className="relative flex h-3 w-3 flex-shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-60" style={{ backgroundColor: '#2563EB' }} />
              <span className="relative inline-flex rounded-full h-3 w-3 flex-shrink-0" style={{ backgroundColor: '#2563EB', boxShadow: '0 0 10px #2563EB, 0 0 20px rgba(37,99,235,0.4)' }} />
            </span>
            <span className="text-[10px] sm:text-xs md:text-sm font-semibold tracking-wide text-white break-words text-left">
              PGDM – BIG DATA ANALYTICS · GOA INSTITUTE OF MANAGEMENT
            </span>
          </div>
        </motion.div>
      </div>
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
            <div className="flex flex-col gap-6 max-w-2xl w-full min-w-0">
              <FadeUp delay={0}>
                <div className="inline-flex items-center gap-3 px-3 sm:px-4 md:px-5 py-2.5 md:py-3 rounded-full bg-[#1F2937]/90 dark:bg-[#141414]/95 border border-white/10 dark:border-white/5 shadow-[0_8px_30px_rgba(20,20,20,0.25)] backdrop-blur w-full sm:w-fit max-w-full overflow-hidden">
                  <span className="relative flex h-3 w-3 flex-shrink-0">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-60" style={{ backgroundColor: '#10B981' }} />
                    <span className="relative inline-flex rounded-full h-3 w-3 flex-shrink-0" style={{ backgroundColor: '#10B981', boxShadow: '0 0 10px #10B981, 0 0 20px rgba(16,185,129,0.4)' }} />
                  </span>
                  <span className="text-[10px] sm:text-xs md:text-sm font-semibold tracking-wide text-white break-words">
                    Available for Summer Internship 2027
                  </span>
                </div>
              </FadeUp>

              <FadeUp delay={0.08}>
                <h1 className="text-[2.1rem] sm:text-4xl md:text-5xl lg:text-[3.4rem] font-bold leading-[1.08] tracking-[-0.025em] text-[#141414] dark:text-white">
                  Turning data and{' '}
                  <span className="text-gradient-sun">
                    mathematical thinking
                  </span>{' '}
                  into better business decisions.
                </h1>
              </FadeUp>

              <FadeUp delay={0.22}>
                <p className="text-sm sm:text-base md:text-lg text-[#525252] dark:text-[#A3A3A3] leading-relaxed break-words">
                  Business analytics professional in training with a foundation in Mathematics, Statistics, Data Analytics, Visualization and Strategic Problem Solving.
                </p>
              </FadeUp>

              <FadeUp delay={0.32} className="flex items-center gap-2 flex-wrap w-full min-w-0">
                {['React', 'Flask', 'Python', 'Power BI', 'SQL'].map((tech, i) => (
                  <span
                    key={tech}
                    className="text-[10px] font-semibold px-3 py-1.5 rounded-full border break-words"
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

              <FadeUp delay={0.42} className="flex flex-wrap gap-3 pt-1 w-full min-w-0">
                <a
                  href="#projects"
                  className="group flex items-center justify-center gap-2 px-5 sm:px-6 py-3.5 text-sm font-semibold rounded-full text-white shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition-shadow shrink-0"
                  style={{ background: 'linear-gradient(135deg, #F59E0B 0%, #EC4899 50%, #7C3AED 100%)' }}
                >
                  Explore My Work
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="transition-transform group-hover:translate-x-0.5 flex-shrink-0">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </a>
                <a
                  href={resumeImage}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center gap-2 px-5 sm:px-6 py-3.5 border border-[#E5E4E2] dark:border-[#2A2A2A] text-[#141414] dark:text-white text-sm font-semibold rounded-full hover:border-[#F59E0B] hover:text-[#EA580C] dark:hover:border-[#EC4899] dark:hover:text-[#F472B6] transition-all duration-200 bg-white dark:bg-transparent shrink-0"
                >
                  View Resume
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="transition-transform group-hover:translate-x-0.5 -translate-y-px flex-shrink-0">
                    <path d="M7 17L17 7M17 7H7M17 7v10"/>
                  </svg>
                </a>
              </FadeUp>

              <FadeUp delay={0.52}>
                <a
                  href="https://linkedin.com/in/shraddhashete"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-1.5 text-sm text-[#737373] hover:text-[#EC4899] dark:hover:text-[#F472B6] transition-colors w-fit break-words"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="flex-shrink-0">
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
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-center min-w-0">
                  <div className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight break-all">
                    <span className="bg-gradient-to-br from-[#EF4444] via-[#D946EF] to-[#6366F1] bg-clip-text text-transparent">$371.2M</span>
                  </div>
                  <div className="mt-2 text-sm text-[#737373] dark:text-[#A3A3A3] font-medium break-words">YTD sales analyzed</div>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                  <MetricItem value={280} suffix="+" label="Students engaged" active={metricsInView} />
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="text-center min-w-0">
                  <div className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight break-all">
                    <span className="bg-gradient-to-br from-[#FACC15] via-[#F472B6] to-[#10B981] bg-clip-text text-transparent">95%</span>
                  </div>
                  <div className="mt-2 text-sm text-[#737373] dark:text-[#A3A3A3] font-medium break-words">Positive feedback</div>
                </motion.div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="py-20 px-6 lg:px-8 w-full min-w-0">
        <div className="max-w-7xl mx-auto w-full min-w-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12 w-full min-w-0"
          >
            <div className="w-full min-w-0">
              <p className="text-[10px] font-semibold uppercase tracking-[0.14em] bg-gradient-to-r from-[#F59E0B] to-[#EC4899] bg-clip-text text-transparent mb-2 break-words">Selected Work</p>
              <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold tracking-tight text-[#141414] dark:text-white break-words leading-tight">
                Featured <span className="text-gradient-sunset">Projects</span>
              </h2>
            </div>
            <a href="#projects" className="text-sm text-[#525252] dark:text-[#A3A3A3] hover:text-[#EC4899] transition-colors w-fit shrink-0 break-words">View all projects →</a>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full min-w-0">
            {[
              {
                title: 'Marketing Campaign Profitability Analysis',
                problem: 'Identifying where marketing spend creates — and destroys — profit across 1,200 campaigns.',
                metric: '1,200 campaigns', tag: 'Business Analytics',
                c1: '#F59E0B', c2: '#EC4899', delay: 0,
              },
              {
                title: 'Automobile Sales Analytics Dashboard',
                problem: 'Turning complex sales data into decision-ready insights across $371.2M in transactions.',
                metric: '$371.2M YTD', tag: 'Business Intelligence',
                c1: '#EC4899', c2: '#7C3AED', delay: 0.1,
              },
              {
                title: 'Game Theory Research for Strategic Decision-Making',
                problem: 'Using mathematical reasoning to improve strategic decisions through evidence-based frameworks.',
                metric: '95% feedback', tag: 'Strategy',
                c1: '#7C3AED', c2: '#06B6D4', delay: 0.2,
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
                className="group block bg-white dark:bg-[#111111] border border-[#E5E4E2] dark:border-[#1E1E1E] rounded-2xl p-6 hover:shadow-[0_12px_40px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_12px_40px_rgba(0,0,0,0.5)] transition-shadow duration-300 relative overflow-hidden w-full min-w-0"
              >
                <div className="absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: `linear-gradient(90deg, ${project.c1}, ${project.c2})` }} />
                <div className="flex items-center justify-between mb-4 gap-2">
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-[#A3A3A3] break-words">{project.tag}</span>
                  <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: `linear-gradient(135deg, ${project.c1}, ${project.c2})` }} />
                </div>
                <h3 className="text-sm sm:text-base font-semibold text-[#141414] dark:text-white leading-snug mb-3 break-words">{project.title}</h3>
                <p className="text-sm text-[#737373] leading-relaxed mb-6 break-words">{project.problem}</p>
                <div className="pt-4 border-t border-[#F1F0EE] dark:border-[#1A1A1A] flex items-end justify-between gap-2 w-full min-w-0">
                  <p className="text-base sm:text-lg font-bold break-words" style={{
                    background: `linear-gradient(90deg, ${project.c1}, ${project.c2})`,
                    WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent',
                  }}>{project.metric}</p>
                  <span className="text-sm font-medium shrink-0 break-words" style={{
                    background: `linear-gradient(90deg, ${project.c1}, ${project.c2})`,
                    WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent',
                  }}>View →</span>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section
        className="py-20 px-6 lg:px-8 relative overflow-hidden w-full min-w-0"
        style={{ background: 'linear-gradient(135deg, #141414 0%, #1E1B4B 50%, #0C2340 100%)' }}
      >
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full opacity-20 blur-3xl" style={{ background: 'radial-gradient(circle, #EC4899, transparent)' }} />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full opacity-20 blur-3xl" style={{ background: 'radial-gradient(circle, #F59E0B, transparent)' }} />
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative max-w-4xl mx-auto text-center w-full min-w-0 px-2"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white mb-4 break-words leading-tight">
            Interested in how I solve{' '}
            <span className="text-gradient-warm">
              business problems?
            </span>
          </h2>
          <p className="text-[#A3A3A3] mb-8 break-words">From exploratory data analysis to strategic recommendations — let's connect.</p>
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-7 sm:px-8 py-3.5 sm:py-4 text-sm font-semibold rounded-full text-white shadow-lg shrink-0"
            style={{ background: 'linear-gradient(135deg, #F59E0B 0%, #EC4899 50%, #7C3AED 100%)' }}
          >
            Explore My Projects
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="flex-shrink-0">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </motion.a>
        </motion.div>
      </section>
    </>
  )
}
