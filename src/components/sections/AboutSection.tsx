import { motion } from 'framer-motion'

const education = [
  { years: '2026 – 2028', degree: 'PGDM – Big Data Analytics', institution: 'Goa Institute of Management', detail: 'Currently pursuing', primary: true, color: '#2563EB' },
  { years: '2022 – 2025', degree: 'B.Sc. Mathematics', institution: 'Fergusson (Autonomous) College, Pune', detail: '8.91 / 10 CGPA', primary: true, color: '#7C3AED' },
  { years: '2021 – 2022', degree: 'HSC – Science', institution: '', detail: '82.67%', primary: false, color: '#06B6D4' },
  { years: '2019 – 2020', degree: 'SSC', institution: '', detail: '96.40%', primary: false, color: '#059669' },
]

const approach = [
  { num: '01', title: 'UNDERSTAND', body: 'Define the real problem before jumping to solutions.', color: '#2563EB' },
  { num: '02', title: 'ANALYZE', body: 'Explore data and identify patterns that matter.', color: '#7C3AED' },
  { num: '03', title: 'STRATEGIZE', body: 'Evaluate options and formulate recommendations.', color: '#06B6D4' },
  { num: '04', title: 'IMPACT', body: 'Translate insights into decisions with measurable outcomes.', color: '#059669' },
]

const differentiators = [
  {
    title: 'Mathematical Thinking',
    body: 'A rigorous foundation in mathematics, analytical reasoning and optimization that shapes how I approach every problem.',
    gradient: 'from-[#2563EB] to-[#7C3AED]',
    iconBg: 'rgba(37,99,235,0.1)',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="url(#g1)" strokeWidth="1.5">
        <defs><linearGradient id="g1" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#2563EB"/><stop offset="1" stopColor="#7C3AED"/></linearGradient></defs>
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
      </svg>
    ),
  },
  {
    title: 'Data & Analytics',
    body: 'Experience with EDA, statistical analysis, KPI design, visualization and business analytics tools across real projects.',
    gradient: 'from-[#059669] to-[#06B6D4]',
    iconBg: 'rgba(5,150,105,0.1)',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="url(#g2)" strokeWidth="1.5">
        <defs><linearGradient id="g2" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#059669"/><stop offset="1" stopColor="#06B6D4"/></linearGradient></defs>
        <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>
      </svg>
    ),
  },
  {
    title: 'Strategic Thinking',
    body: 'Application of game theory, structured reasoning and evidence-based decision-making to business challenges.',
    gradient: 'from-[#7C3AED] to-[#EA580C]',
    iconBg: 'rgba(124,58,237,0.1)',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="url(#g3)" strokeWidth="1.5">
        <defs><linearGradient id="g3" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#7C3AED"/><stop offset="1" stopColor="#EA580C"/></linearGradient></defs>
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
      </svg>
    ),
  },
]

const personal = [
  { label: 'Mathematics', icon: '∑', color: '#2563EB' },
  { label: 'Leadership', icon: '◈', color: '#7C3AED' },
  { label: 'Sports', icon: '◎', color: '#06B6D4' },
  { label: 'Research', icon: '⌘', color: '#059669' },
  { label: 'Continuous Learning', icon: '∞', color: '#EA580C' },
]

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-24 px-6 lg:px-8"
      style={{ background: 'radial-gradient(ellipse 80% 60% at 0% 50%, rgba(37,99,235,0.04) 0%, transparent 60%)' }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 max-w-2xl"
        >
          <p className="text-[10px] font-semibold uppercase tracking-[0.14em] bg-gradient-to-r from-[#2563EB] to-[#7C3AED] bg-clip-text text-transparent mb-3">
            About Me
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#141414] dark:text-white mb-4">
            A{' '}
            <span className="bg-gradient-to-r from-[#2563EB] to-[#7C3AED] bg-clip-text text-transparent">
              mathematical foundation
            </span>{' '}
            with a business analytics mindset.
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 mb-20">
          {/* Intro */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-base text-[#525252] dark:text-[#A3A3A3] leading-[1.8] mb-4">
              I am currently pursuing a PGDM in Big Data Analytics at Goa Institute of Management, building on my undergraduate foundation in Mathematics from Fergusson College, Pune.
            </p>
            <p className="text-base text-[#525252] dark:text-[#A3A3A3] leading-[1.8]">
              My academic journey has shaped how I approach problems: understand the structure, analyze the evidence, identify patterns and translate insights into meaningful decisions.
            </p>
            <div className="mt-8 pt-8 border-t border-[#E5E4E2] dark:border-[#1E1E1E]">
              <div className="relative pl-4">
                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#2563EB] to-[#7C3AED] rounded-full" />
                <p className="text-base font-medium text-[#141414] dark:text-white italic leading-relaxed">
                  "I enjoy turning complex problems into structured decisions using data, mathematics and analytical thinking."
                </p>
              </div>
            </div>
          </motion.div>

          {/* Education Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#A3A3A3] mb-8">Education</p>
            <div className="relative">
              <div className="absolute left-0 top-0 bottom-0 w-px" style={{ background: 'linear-gradient(to bottom, #2563EB, #7C3AED, #06B6D4, #059669)' }} />
              <div className="flex flex-col gap-8 pl-8">
                {education.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="relative"
                  >
                    <div
                      className="absolute -left-8 top-1 w-3 h-3 rounded-full border-2 z-10"
                      style={{
                        backgroundColor: item.primary ? item.color : 'var(--color-bg, #FAFAF8)',
                        borderColor: item.color,
                        transform: 'translateX(-5px)',
                      }}
                    />
                    <p className="text-[10px] font-mono text-[#A3A3A3] mb-1 tracking-wider">{item.years}</p>
                    <p className={`font-semibold mb-0.5 ${item.primary ? 'text-base text-[#141414] dark:text-white' : 'text-sm text-[#525252] dark:text-[#737373]'}`}>
                      {item.degree}
                    </p>
                    {item.institution && (
                      <p className={`text-sm mb-1 ${item.primary ? 'text-[#525252] dark:text-[#A3A3A3]' : 'text-[#737373]'}`}>
                        {item.institution}
                      </p>
                    )}
                    <p className="text-xs font-semibold" style={{ color: item.color }}>{item.detail}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Approach */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 rounded-2xl p-8 md:p-12 border border-[#E5E4E2] dark:border-[#1E1E1E] overflow-hidden relative"
          style={{ background: 'linear-gradient(135deg, rgba(37,99,235,0.04) 0%, rgba(124,58,237,0.04) 50%, rgba(6,182,212,0.04) 100%)' }}
        >
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-30 blur-3xl" style={{ background: 'radial-gradient(circle, #7C3AED, transparent)' }} />
          <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#A3A3A3] mb-8 relative z-10">My Approach</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {approach.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative"
              >
                {i < approach.length - 1 && (
                  <div className="hidden lg:block absolute top-4 left-full w-full h-px border-t border-dashed border-[#D4D3D1] dark:border-[#2A2A2A] -translate-y-px z-0" />
                )}
                <p className="text-[10px] font-mono mb-3 tracking-widest relative z-10" style={{ color: step.color }}>{step.num}</p>
                <p className="text-sm font-bold uppercase tracking-[0.1em] mb-2" style={{ color: step.color }}>{step.title}</p>
                <p className="text-sm text-[#737373] dark:text-[#737373] leading-relaxed">{step.body}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Differentiators */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#A3A3A3] mb-8">What Differentiates Me</p>
          <div className="grid md:grid-cols-3 gap-6">
            {differentiators.map((d, i) => (
              <motion.div
                key={d.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="bg-white dark:bg-[#111111] border border-[#E5E4E2] dark:border-[#1E1E1E] rounded-2xl p-8 group relative overflow-hidden transition-shadow hover:shadow-lg"
              >
                <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${d.gradient} opacity-0 group-hover:opacity-100 transition-opacity`} />
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-6" style={{ backgroundColor: d.iconBg }}>
                  {d.icon}
                </div>
                <h3 className={`text-base font-semibold mb-3 bg-gradient-to-r ${d.gradient} bg-clip-text text-transparent`}>{d.title}</h3>
                <p className="text-sm text-[#737373] dark:text-[#737373] leading-relaxed">{d.body}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Personal dimension */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="pt-12 border-t border-[#E5E4E2] dark:border-[#1E1E1E]"
        >
          <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#A3A3A3] mb-6">Beyond Analytics</p>
          <div className="flex flex-wrap gap-3">
            {personal.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2.5 px-4 py-2.5 bg-white dark:bg-[#111111] border border-[#E5E4E2] dark:border-[#1E1E1E] rounded-full cursor-default"
              >
                <span className="text-sm font-mono font-bold" style={{ color: item.color }}>{item.icon}</span>
                <span className="text-sm text-[#525252] dark:text-[#A3A3A3] font-medium">{item.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
