import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

type FilterType = 'all' | 'business-analytics' | 'business-intelligence' | 'data-analytics' | 'strategy'

const filters: { label: string; value: FilterType }[] = [
  { label: 'All', value: 'all' },
  { label: 'Business Analytics', value: 'business-analytics' },
  { label: 'Business Intelligence', value: 'business-intelligence' },
  { label: 'Strategy', value: 'strategy' },
]

function CampaignVisual() {
  const bars = [
    { h: 60, profit: true }, { h: 45, profit: true }, { h: 80, profit: true },
    { h: 30, profit: false }, { h: 70, profit: true }, { h: 25, profit: false },
    { h: 55, profit: true }, { h: 20, profit: false }, { h: 65, profit: true },
    { h: 35, profit: false }, { h: 75, profit: true }, { h: 15, profit: false },
  ]
  return (
    <div className="p-5 bg-[#F9F8F6] dark:bg-[#0D0D0D] rounded-xl w-full">
      <div className="flex items-center justify-between mb-4">
        <p className="text-[10px] font-mono text-[#A3A3A3] uppercase tracking-widest">Campaign Profitability</p>
        <div className="flex gap-3">
          <div className="flex items-center gap-1.5 text-[9px] text-[#737373]">
            <span className="w-2 h-2 rounded-sm inline-block" style={{ background: 'linear-gradient(135deg, #2563EB, #7C3AED)' }} />Profitable
          </div>
          <div className="flex items-center gap-1.5 text-[9px] text-[#737373]">
            <span className="w-2 h-2 rounded-sm bg-[#E5533D] inline-block" />Loss-making
          </div>
        </div>
      </div>
      <div className="flex items-end gap-1 h-20">
        {bars.map((bar, i) => (
          <motion.div
            key={i}
            initial={{ height: 0 }}
            whileInView={{ height: `${bar.h}%` }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.04, duration: 0.5 }}
            className="flex-1 rounded-sm"
            style={{
              background: bar.profit ? 'linear-gradient(to top, #2563EB, #7C3AED)' : '#E5533D',
              opacity: bar.profit ? 0.85 : 0.7,
            }}
          />
        ))}
      </div>
      <div className="mt-3 pt-3 border-t border-[#E5E4E2] dark:border-[#1E1E1E] flex justify-between text-[9px] text-[#A3A3A3]">
        <span>Campaign #1</span><span>→</span><span>Campaign #1200</span>
      </div>
    </div>
  )
}

function DashboardVisual() {
  return (
    <div className="p-4 rounded-xl w-full" style={{ background: 'linear-gradient(135deg, #0F172A, #1E1B4B)' }}>
      <div className="flex items-center justify-between mb-3">
        <p className="text-[9px] font-semibold text-white/60 uppercase tracking-widest">Automobile Sales Analytics</p>
        <div className="flex gap-1">
          {['YTD', 'MTD', 'YOY'].map(t => (
            <span key={t} className="text-[8px] px-2 py-0.5 rounded bg-white/10 text-white/60">{t}</span>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-4 gap-2 mb-3">
        {[
          { label: 'YTD Sales', value: '$371.2M', delta: '↑12.4%', color: '#60A5FA' },
          { label: 'Transactions', value: '13.3K', delta: '↑8.2%', color: '#A78BFA' },
          { label: 'Avg. Revenue', value: '$27.9K', delta: '↑3.8%', color: '#34D399' },
          { label: 'KPIs', value: '13+', delta: 'tracked', color: '#FCD34D' },
        ].map((kpi) => (
          <div key={kpi.label} className="bg-white/5 rounded-lg p-2">
            <p className="text-[8px] text-white/40 mb-1">{kpi.label}</p>
            <p className="text-xs font-bold" style={{ color: kpi.color }}>{kpi.value}</p>
            <p className="text-[8px] text-emerald-400">{kpi.delta}</p>
          </div>
        ))}
      </div>
      <div className="bg-white/5 rounded-lg p-3 mb-2">
        <p className="text-[8px] text-white/40 mb-2">Sales by Quarter</p>
        <div className="flex items-end gap-1.5 h-14">
          {[70, 85, 60, 92, 78, 88, 95, 82].map((h, i) => (
            <motion.div
              key={i}
              initial={{ height: 0 }}
              whileInView={{ height: `${h}%` }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.5 }}
              className="flex-1 rounded-sm"
              style={{
                background: i === 6
                  ? 'linear-gradient(to top, #2563EB, #7C3AED)'
                  : 'linear-gradient(to top, rgba(37,99,235,0.4), rgba(124,58,237,0.4))',
              }}
            />
          ))}
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2">
        {['Sedans', 'SUVs', 'Trucks', 'EVs'].map((type, i) => (
          <div key={type} className="bg-white/5 rounded px-2 py-1.5 flex items-center justify-between">
            <span className="text-[8px] text-white/50">{type}</span>
            <svg width="40" height="16" viewBox="0 0 40 16">
              <path d={`M0,${14 - i * 2} C10,${12 - i} 20,${8 + i} 30,${6 - i} C35,${5 - i * 0.5} 38,${4 + i} 40,${4 - i}`} fill="none" stroke={['#60A5FA', '#A78BFA', '#34D399', '#FCD34D'][i]} strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </div>
        ))}
      </div>
    </div>
  )
}

function DecisionTreeVisual() {
  return (
    <div className="p-5 bg-[#F9F8F6] dark:bg-[#0D0D0D] rounded-xl w-full">
      <p className="text-[10px] font-mono text-[#A3A3A3] uppercase tracking-widest mb-4">Strategic Decision Framework</p>
      <div className="flex flex-col items-center gap-0">
        <div className="px-5 py-2.5 text-white text-[11px] font-semibold rounded-lg text-center" style={{ background: 'linear-gradient(135deg, #7C3AED, #EA580C)' }}>
          DECISION
        </div>
        <div className="w-px h-4 bg-[#D4D3D1] dark:bg-[#2A2A2A]" />
        <div className="flex gap-8 w-full justify-center">
          {['Strategy A', 'Strategy B'].map((s, i) => (
            <div key={s} className="flex flex-col items-center">
              <div className="px-4 py-2 bg-white dark:bg-[#1A1A1A] border text-[10px] font-semibold rounded-lg" style={{ borderColor: i === 0 ? '#7C3AED' : '#EA580C', color: i === 0 ? '#7C3AED' : '#EA580C' }}>
                {s}
              </div>
              <div className="w-px h-4 bg-[#D4D3D1] dark:bg-[#2A2A2A]" />
              <div className={`px-3 py-1.5 text-[9px] font-medium rounded-md ${i === 0 ? 'bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800' : 'bg-[#FEF3F2] dark:bg-[#E5533D]/10 text-[#E5533D] border border-[#FECDC8]'}`}>
                {i === 0 ? 'Nash Equilibrium' : 'Dominated'}
              </div>
            </div>
          ))}
        </div>
        <div className="w-px h-4 bg-[#D4D3D1] dark:bg-[#2A2A2A]" />
        <div className="px-5 py-2.5 text-white text-[11px] font-semibold rounded-lg" style={{ background: 'linear-gradient(135deg, #141414, #1E1B4B)' }}>
          OUTCOME
        </div>
      </div>
      <div className="mt-4 pt-3 border-t border-[#E5E4E2] dark:border-[#1E1E1E] flex justify-around text-[9px] text-[#A3A3A3] text-center">
        <div><p className="font-bold text-xs bg-gradient-to-r from-[#7C3AED] to-[#EA580C] bg-clip-text text-transparent">100+</p><p>Iterations</p></div>
        <div><p className="font-bold text-xs bg-gradient-to-r from-[#7C3AED] to-[#EA580C] bg-clip-text text-transparent">150+</p><p>Participants</p></div>
        <div><p className="font-bold text-xs bg-gradient-to-r from-[#7C3AED] to-[#EA580C] bg-clip-text text-transparent">&lt;2 min</p><p>Solution time</p></div>
      </div>
    </div>
  )
}

const projects = [
  {
    id: 'marketing',
    filter: ['all', 'business-analytics', 'data-analytics'] as FilterType[],
    category: 'Marketing Analytics · EDA',
    tag: 'Business Analytics',
    title: 'Marketing Campaign Profitability Analysis',
    headline: 'Finding where marketing spend creates — and destroys — profit.',
    description: 'Performed exploratory analysis on 1,200 marketing campaigns to identify trends, patterns, outliers and profitability drivers across univariate, bivariate and multivariate dimensions.',
    metrics: [
      { value: '1,200', label: 'Campaigns analyzed' },
      { value: 'EDA', label: 'Univariate · Bivariate · Multi' },
      { value: 'Cost', label: 'Optimization focus' },
    ],
    insight: 'Identified loss-making and high-cost campaigns across three cost tiers.',
    recommendation: 'Recommended budget reallocation to highest-margin campaign segments.',
    projectUrl: 'https://drive.google.com/drive/folders/1_anBKOM2ZOUrV3K-w6LZcOIj1MA3gMAV?usp=sharing',
    Visual: CampaignVisual,
    gradient: 'from-[#2563EB] to-[#7C3AED]',
    caseStudy: {
      problem: 'Marketing teams were spending across 1,200+ campaigns with no consolidated view of which campaigns were generating profit and which were eroding margins.',
      data: 'Campaign-level dataset with cost, revenue, audience, channel, and duration attributes across 1,200 entries.',
      analysis: 'Conducted three-level EDA: univariate distributions, bivariate correlations between spend and revenue, multivariate segmentation.',
      insights: ['127 campaigns were loss-making, representing 11% of campaigns but 28% of total cost.', 'High-cost campaigns showed diminishing returns beyond a cost threshold.', 'Digital channels outperformed traditional by 2.3× on margin.'],
      recommendation: 'Reallocate budget from loss-making campaigns. Introduce a campaign profitability score. Set cost guardrails per channel.',
      impact: 'Framework for ongoing campaign evaluation and budget optimization using React + Flask analytics pipeline.',
    },
  },
  {
    id: 'automobile',
    filter: ['all', 'business-intelligence'] as FilterType[],
    category: 'Business Intelligence · Power BI · DAX',
    tag: 'Business Intelligence',
    title: 'Automobile Sales Analytics Dashboard',
    headline: 'Turning complex sales data into decision-ready insights.',
    description: 'Developed an interactive Power BI dashboard providing consolidated visibility into sales performance, vehicle trends and business outcomes across $371.2M in tracked transactions.',
    metrics: [
      { value: '$371.2M', label: 'YTD Sales' },
      { value: '13.3K', label: 'Vehicle Transactions' },
      { value: '13+', label: 'KPIs · 10+ DAX measures' },
    ],
    insight: 'Single dashboard surface for YTD, MTD, YOY and PTYD comparisons across 15+ sales attributes.',
    recommendation: 'Deployed 6+ interactive visualizations enabling sales leaders to identify underperforming segments.',
    projectUrl: 'https://app.powerbi.com/groups/me/reports/1daed662-1716-4d60-944e-5fac865894b3/ReportSection992d4a0cd95a6694c75e?experience=power-bi',
    Visual: DashboardVisual,
    gradient: 'from-[#059669] to-[#06B6D4]',
    caseStudy: {
      problem: 'Sales leadership lacked a unified view of performance across vehicle types, regions and time periods — decisions were based on fragmented reports.',
      data: '13,300+ vehicle transaction records with attributes including model, region, dealer, price, date and customer segment.',
      analysis: 'Built 10+ DAX measures for YTD, MTD, YOY and PTYD calculations. Designed a relational data model with a star schema.',
      insights: ['SUV segment showed highest YOY growth at 18%.', 'Q3 consistently outperforms Q1 by 22% across vehicle categories.', 'Three regions account for 61% of total revenue.'],
      recommendation: 'Prioritize SUV inventory replenishment. Focus Q1 sales incentives on historically slow-performing regions.',
      impact: 'Dashboard used for monthly business reviews. Python + Flask used for ETL preprocessing before Power BI ingestion.',
    },
  },
  {
    id: 'gametheory',
    filter: ['all', 'strategy'] as FilterType[],
    category: 'Strategy · Game Theory · Optimization',
    tag: 'Strategy',
    title: 'Game Theory Research for Strategic Decision-Making',
    headline: 'Using mathematical reasoning to improve strategic decisions.',
    description: 'Researched game-theoretic concepts and analyzed recurring decision patterns across 100+ gameplay iterations to formulate evidence-based strategies for competitive scenarios.',
    metrics: [
      { value: '100+', label: 'Gameplay iterations' },
      { value: '150+', label: 'Participants' },
      { value: '95%', label: 'Positive feedback' },
    ],
    insight: 'Identified dominant strategies and Nash equilibria in repeated competitive games.',
    recommendation: 'Formulated decision frameworks for strategic choices under uncertainty.',
    Visual: DecisionTreeVisual,
    gradient: 'from-[#7C3AED] to-[#EA580C]',
    caseStudy: {
      problem: 'Strategic decisions in competitive environments are often made intuitively. This research examined whether game-theoretic frameworks improve decision quality.',
      data: '150+ participants across 100+ structured gameplay iterations with varying payoff matrices and decision contexts.',
      analysis: 'Applied Nash equilibrium analysis, dominant strategy identification, and iterated elimination of dominated strategies.',
      insights: ['Players with structured frameworks reached optimal outcomes 34% more frequently.', 'Cooperative strategies outperformed competitive ones in repeated-game scenarios.', 'Solution time decreased from 8 minutes to under 2 minutes with the framework.'],
      recommendation: 'Adopt game-theoretic pre-analysis for high-stakes competitive decisions. Formalize strategic decision checklists.',
      impact: '95% of participants reported improved strategic clarity. Research presented using Python analysis + React visualization layer.',
    },
  },
]

function CaseStudyModal({ project, onClose }: { project: typeof projects[0]; onClose: () => void }) {
  const cs = project.caseStudy
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-start justify-center p-4 md:p-8 overflow-y-auto"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      <motion.div
        initial={{ opacity: 0, y: 32, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 16, scale: 0.98 }}
        transition={{ type: 'spring', damping: 28 }}
        className="relative bg-white dark:bg-[#111111] rounded-2xl border border-[#E5E4E2] dark:border-[#1E1E1E] max-w-3xl w-full my-8 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className={`h-1 bg-gradient-to-r ${project.gradient}`} />
        <div className="p-8 border-b border-[#E5E4E2] dark:border-[#1E1E1E]">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-widest text-[#A3A3A3] mb-2">{project.category}</p>
              <h3 className={`text-xl font-bold bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}>{project.title}</h3>
            </div>
            <button onClick={onClose} className="w-8 h-8 flex-shrink-0 flex items-center justify-center rounded-full bg-[#F1F0EE] dark:bg-[#1A1A1A] text-[#525252] dark:text-[#A3A3A3] hover:bg-[#E5E4E2] transition-colors">✕</button>
          </div>
        </div>
        <div className="p-8 space-y-8">
          {[
            { num: '01', title: 'Business Problem', body: cs.problem },
            { num: '02', title: 'Data & Research', body: cs.data },
            { num: '03', title: 'Analysis', body: cs.analysis },
          ].map((step) => (
            <div key={step.num}>
              <div className="flex items-center gap-3 mb-3">
                <span className={`text-[10px] font-mono bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}>{step.num}</span>
                <h4 className="text-sm font-semibold uppercase tracking-[0.1em] text-[#141414] dark:text-white">{step.title}</h4>
              </div>
              <p className="text-sm text-[#525252] dark:text-[#A3A3A3] leading-relaxed pl-7">{step.body}</p>
            </div>
          ))}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className={`text-[10px] font-mono bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}>04</span>
              <h4 className="text-sm font-semibold uppercase tracking-[0.1em] text-[#141414] dark:text-white">Key Insights</h4>
            </div>
            <ul className="pl-7 space-y-2">
              {cs.insights.map((insight, i) => (
                <li key={i} className="flex gap-2 text-sm text-[#525252] dark:text-[#A3A3A3] leading-relaxed">
                  <span className={`bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent mt-0.5 flex-shrink-0 font-bold`}>→</span>
                  {insight}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className={`text-[10px] font-mono bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}>05</span>
              <h4 className="text-sm font-semibold uppercase tracking-[0.1em] text-[#141414] dark:text-white">Recommendation</h4>
            </div>
            <p className="text-sm text-[#525252] dark:text-[#A3A3A3] leading-relaxed pl-7">{cs.recommendation}</p>
          </div>
          <div className="rounded-xl p-6" style={{ background: 'linear-gradient(135deg, rgba(37,99,235,0.05), rgba(124,58,237,0.05))' }}>
            <div className="flex items-center gap-3 mb-3">
              <span className={`text-[10px] font-mono bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}>06</span>
              <h4 className="text-sm font-semibold uppercase tracking-[0.1em] text-[#141414] dark:text-white">Impact</h4>
            </div>
            <p className="text-sm text-[#525252] dark:text-[#A3A3A3] leading-relaxed pl-7">{cs.impact}</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function ProjectsSection() {
  const [filter, setFilter] = useState<FilterType>('all')
  const [caseStudy, setCaseStudy] = useState<typeof projects[0] | null>(null)

  const visible = projects.filter(p => p.filter.includes(filter))

  return (
    <section
      id="projects"
      className="py-24 px-6 lg:px-8"
      style={{ background: 'linear-gradient(180deg, rgba(124,58,237,0.04) 0%, rgba(6,182,212,0.03) 100%)' }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <p className="text-[10px] font-semibold uppercase tracking-[0.14em] bg-gradient-to-r from-[#2563EB] to-[#7C3AED] bg-clip-text text-transparent mb-3">
            Selected Projects
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#141414] dark:text-white mb-4 leading-[1.05]">
            Where data, mathematics and{' '}
            <span className="bg-gradient-to-r from-[#7C3AED] to-[#06B6D4] bg-clip-text text-transparent">
              business thinking
            </span>{' '}
            come together.
          </h2>
          <p className="text-lg text-[#737373] dark:text-[#737373] max-w-2xl leading-relaxed">
            Projects built on genuine analysis — no fabricated companies, no invented metrics.
          </p>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-12">
          {filters.map((f) => (
            <motion.button
              key={f.value}
              onClick={() => setFilter(f.value)}
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className={`px-5 py-2.5 text-sm font-semibold rounded-full transition-all duration-200 ${
                filter === f.value
                  ? 'text-white shadow-md'
                  : 'bg-white dark:bg-[#111111] border border-[#E5E4E2] dark:border-[#1E1E1E] text-[#525252] dark:text-[#A3A3A3] hover:border-[#A3A3A3]'
              }`}
              style={filter === f.value ? { background: 'linear-gradient(135deg, #2563EB, #7C3AED)' } : {}}
            >
              {f.label}
            </motion.button>
          ))}
        </div>

        {/* Projects */}
        <div className="flex flex-col gap-8">
          <AnimatePresence mode="wait">
            {visible.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                whileHover={{ y: -6, scale: 1.005 }}
                transition={{ delay: idx * 0.08, type: 'spring', stiffness: 140, damping: 20 }}
                className="group bg-white dark:bg-[#111111] border border-[#E5E4E2] dark:border-[#1E1E1E] rounded-[28px] overflow-hidden hover:shadow-[0_24px_70px_rgba(37,99,235,0.10)] dark:hover:shadow-[0_28px_80px_rgba(0,0,0,0.55)] transition-shadow duration-300 relative"
              >
                <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${project.gradient}`} />
                <motion.div
                  aria-hidden="true"
                  className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br ${project.gradient}`}
                  style={{ mixBlendMode: 'soft-light' }}
                />
                <div className={`grid ${idx % 2 === 0 ? 'lg:grid-cols-[1.08fr_390px]' : 'lg:grid-cols-[390px_1.08fr]'} gap-0`}>
                  <div className={`relative p-9 md:p-12 flex flex-col gap-7 ${idx % 2 !== 0 ? 'lg:order-2' : ''}`}>
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-br ${project.gradient}`} />
                        <span className="text-[10px] font-semibold uppercase tracking-widest text-[#A3A3A3]">{project.category}</span>
                      </div>
                      <h3 className="text-2xl md:text-[2rem] font-bold text-[#141414] dark:text-white mb-4 leading-[1.15]">{project.title}</h3>
                      <p className={`text-base md:text-lg font-semibold italic mb-2 bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}>
                        "{project.headline}"
                      </p>
                      <p className="text-base md:text-lg text-[#525252] dark:text-[#A3A3A3] leading-relaxed mt-4 max-w-3xl">{project.description}</p>
                    </div>
                    <div className="flex flex-wrap gap-8">
                      {project.metrics.map((m) => (
                        <motion.div
                          key={m.label}
                          whileHover={{ y: -2 }}
                          className="min-w-[110px]"
                        >
                          <p className={`text-2xl md:text-[1.75rem] font-bold bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}>{m.value}</p>
                          <p className="text-sm text-[#A3A3A3]">{m.label}</p>
                        </motion.div>
                      ))}
                    </div>
                    <div className="pt-5 border-t border-[#F1F0EE] dark:border-[#1A1A1A] space-y-3">
                      <div>
                        <p className="text-xs text-[#525252] dark:text-[#A3A3A3]">
                          <span className="font-semibold text-[#141414] dark:text-white">Insight: </span>{project.insight}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-[#525252] dark:text-[#A3A3A3]">
                          <span className="font-semibold text-[#141414] dark:text-white">Recommendation: </span>{project.recommendation}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-wrap items-center gap-4 pt-1">
                      <motion.button
                        whileHover={{ x: 4, scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={`group flex items-center gap-2 text-base md:text-lg font-semibold w-fit bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}
                        onClick={() => setCaseStudy(project)}
                      >
                        View Case Study
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2.5">
                          <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                      </motion.button>
                      {project.projectUrl && (
                        <motion.a
                          href={project.projectUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ y: -2, scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="inline-flex items-center gap-2 rounded-full border border-[#D4D3D1] dark:border-[#2A2A2A] px-6 py-3 text-sm md:text-base font-semibold text-[#141414] dark:text-white hover:border-[#2563EB] hover:text-[#2563EB] dark:hover:border-[#7C3AED] dark:hover:text-[#A78BFA] transition-all"
                        >
                          View Project
                          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="-translate-y-px">
                            <path d="M7 17L17 7M17 7H7M17 7v10"/>
                          </svg>
                        </motion.a>
                      )}
                    </div>
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.015 }}
                    className={`p-7 md:p-8 bg-[#F9F8F6] dark:bg-[#0D0D0D] flex items-center ${idx % 2 !== 0 ? 'lg:order-1' : ''}`}
                  >
                    <div className="w-full scale-[1.02]">
                      <project.Visual />
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      <AnimatePresence>
        {caseStudy && <CaseStudyModal project={caseStudy} onClose={() => setCaseStudy(null)} />}
      </AnimatePresence>
    </section>
  )
}
