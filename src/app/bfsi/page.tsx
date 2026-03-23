'use client'


import { useEffect, useRef, useState, type ReactNode, type CSSProperties } from 'react'

interface NavLink   { label: string; href: string }
interface Feature   { icon: string; color: string; title: string; desc: string }
interface Stat      { value: number; suffix: string; label: string; highlight?: boolean }
interface Holder    { icon: string; label: string }
interface Benefit   { icon: string; color: string; grad: string; title: string; desc: string }
interface FloatCard { icon: string; value: string; label: string; delay: string; pos: 'bottomLeft' | 'topRight' }
interface EcoNode   { label: string; icon: string; color: string; top?: string; bottom?: string; left?: string; right?: string; tx?: string }
interface FooterCol { heading: string; links: string[] }

const NAV_LINKS: NavLink[] = [
  { label: 'About',        href: '#about' },
  { label: 'Role Holders', href: '#role-holders' },
  { label: 'Skills',       href: '#skills' },
  { label: 'Resources',    href: '#resources' },
  { label: 'Company',      href: '#company' },
]

const FEATURES: Feature[] = [
  {
    icon: '🏆', color: '#0ea5e9', title: 'Specialized Courses',
    desc: 'The BFSI sector offers specialized courses covering banking, finance, and insurance. Designed to give students in-depth knowledge and the essential elements of the industry.',
  },
  {
    icon: '📚', color: '#8b5cf6', title: 'Training Modules',
    desc: 'Comprehensive modules developed by BFSI experts help students bridge academic knowledge with real-world applications through simulations and interactive insights.',
  },
  {
    icon: '🎖️', color: '#f59e0b', title: 'Assessments and Certifications',
    desc: 'To ensure students are job-ready, the BFSI sector provides comprehensive assessments and certifications in specific skills, giving graduates a complete measure of their potential.',
  },
  {
    icon: '💼', color: '#22c55e', title: 'Placement Opportunities',
    desc: 'By partnering with BFSI companies, Equippp connects students with potential employers who benefit from a pool of well-trained candidates ready to contribute from day one.',
  },
]

const STATS: Stat[] = [
  { value: 90,  suffix: ' Lakh crore',       label: 'Total BFSI AUM in India',            highlight: true },
  { value: 14,  suffix: '% of GDP',           label: '14.8% BFSI NPL' },
  { value: 17,  suffix: ' Lakh',              label: 'BFSI Jobs in BFSI Role' },
  { value: 1,   suffix: '.6 lakh',            label: 'BFSI Professionals in Hyderabad' },
  { value: 27,  suffix: '%',                  label: 'Annual growth BFSI sector here' },
  { value: 30,  suffix: '-35%',               label: 'MBA students in BFSI' },
  { value: 9,   suffix: ' Million',           label: '9 million to 9.5 million by 2030' },
  { value: 4,   suffix: ' Million',           label: '4 million employees in BankTech' },
  { value: 350, suffix: 'K',                  label: 'Engineering colleges in Telangana' },
  { value: 150, suffix: 'K',                  label: 'Professional Sector in Telangana' },
  { value: 35,  suffix: '-45%',               label: 'Jobs Big BFSI demand' },
  { value: 150, suffix: ' Bn',                label: 'Industry by 2025 in India' },
  { value: 1,   suffix: '.5 lakh',            label: 'Engineering colleges in Telangana' },
  { value: 3,   suffix: '.3 lakh',            label: 'Jobs Big Experts here' },
  { value: 5,   suffix: '+1 Lakh Students',   label: 'are in need of education p.a.' },
]

const STAKEHOLDERS: Holder[] = [
  { icon: '🏛️', label: 'Educational Institutes' },
  { icon: '🤝', label: 'Job ITF' },
  { icon: '📋', label: 'Government' },
  { icon: '📈', label: 'BFSI.IN' },
  { icon: '🎯', label: 'Business & Training Institutes' },
  { icon: '🏦', label: 'BFSI Money Ecosystem' },
  { icon: '✅', label: 'Micro Compliance' },
]

const BENEFITS: Benefit[] = [
  { icon: '⚡', color: '#0ea5e9', grad: 'linear-gradient(135deg,#0ea5e9,#0284c7)', title: 'Skill Development',        desc: 'BFSI courses focus on developing critical skills such as financial analysis, risk management, and strategic planning.' },
  { icon: '📊', color: '#22c55e', grad: 'linear-gradient(135deg,#22c55e,#16a34a)', title: 'Enhanced Employability',   desc: "Assessments from BFSI institutions enhance a student's resume, making them more attractive to potential employers." },
  { icon: '🏢', color: '#f59e0b', grad: 'linear-gradient(135deg,#f59e0b,#d97706)', title: 'Industry Insights',        desc: 'Students gain valuable insights into the workings of the financial sector, preparing them for various roles within the industry.' },
  { icon: '🌐', color: '#8b5cf6', grad: 'linear-gradient(135deg,#8b5cf6,#7c3aed)', title: 'Networking Opportunities', desc: 'Access to BFSI resources and events helps students build professional networks, opening doors to future career opportunities.' },
]

const FOOTER_COLS: FooterCol[] = [
  { heading: 'About',        links: ['Team About', 'Mission', 'Careers', 'Terms & Conditions'] },
  { heading: 'Users',        links: ['Institutes', 'Professionals', 'Govt.', 'Other'] },
  { heading: 'Social Links', links: ['LinkedIn', 'GitHub', 'Twitter', 'YouTube'] },
]

const ECO_NODES: EcoNode[] = [
  { label: 'PHILANTHROPY',    icon: '💡', color: '#8b5cf6', top: '-14px', left: '50%',   tx: 'translateX(-50%)' },
  { label: 'ACADEMIA',        icon: '🎓', color: '#0ea5e9', top: '8px',   right: '0' },
  { label: 'BFSI CONSORTIUM', icon: '🏦', color: '#22c55e', top: '50%',   left: '-14px', tx: 'translateY(-50%)' },
  { label: 'GOVERNMENT',      icon: '🏛️', color: '#f59e0b', top: '50%',   right: '-14px',tx: 'translateY(-50%)' },
]

const FLOAT_CARDS: FloatCard[] = [
  { icon: '📈', value: '75%',  label: 'Skill Gap Reduced', delay: '0s',  pos: 'bottomLeft' },
  { icon: '🎓', value: '50K+', label: 'Students Trained',  delay: '-2s', pos: 'topRight' },
]

const CHART_BARS = [22, 36, 52, 66, 80, 95]

const CONSORTIUM_PILLS = ['FinTech Innovation', 'Talent Development', 'Policy Advocacy', 'Digital Banking']

function useInView(threshold = 0.2) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true)
      },
      { threshold }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return { ref, inView }
}

function useCountUp(target: number, active: boolean, duration = 1800) {
  const [val, setVal] = useState(0)

  useEffect(() => {
    if (!active) return
    const startTime = performance.now()
    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setVal(Math.floor(eased * target))
      if (progress < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [target, active, duration])

  return val
}

function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <p style={{
      fontFamily: 'var(--mono)',
      fontSize: '0.72rem',
      color: 'var(--teal)',
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
      marginBottom: '14px',
      opacity: light ? 0.9 : 1,
    }}>
      {children}
    </p>
  )
}

function SectionTitle({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <h2 style={{
      fontFamily: 'var(--serif)',
      fontSize: 'clamp(1.9rem, 3vw, 2.8rem)',
      color: light ? 'var(--white)' : 'var(--navy)',
      fontWeight: 700,
      marginBottom: '20px',
      lineHeight: 1.2,
    }}>
      {children}
    </h2>
  )
}

function ReadMore({ color }: { color: string }) {
  const [hovered, setHovered] = useState(false)
  return (
    <a
      href="#"
      style={{ display: 'inline-flex', alignItems: 'center', gap: hovered ? '10px' : '6px', fontSize: '0.82rem', fontWeight: 700, color, transition: 'gap 0.2s' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      Read more
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </a>
  )
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const headerStyle: CSSProperties = {
    position: 'fixed',
    top: 0, left: 0, right: 0,
    zIndex: 200,
    padding: scrolled ? '12px 0' : '18px 0',
    background: scrolled ? 'rgba(7,15,30,0.93)' : 'transparent',
    backdropFilter: scrolled ? 'blur(20px)' : 'none',
    WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
    borderBottom: scrolled ? '1px solid rgba(14,165,233,0.15)' : 'none',
    boxShadow: scrolled ? '0 4px 24px rgba(0,0,0,0.25)' : 'none',
    transition: 'all 0.35s ease',
  }

  return (
    <header style={headerStyle}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 48px', display: 'flex', alignItems: 'center', gap: 40 }}>
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0 }}>
          <span style={{
            width: 36, height: 36,
            background: 'linear-gradient(135deg,#0ea5e9,#8b5cf6)',
            borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: 'white', fontFamily: 'var(--serif)', fontWeight: 700, fontSize: '1.1rem',
          }}>E</span>
          <span style={{ fontFamily: 'var(--sans)', fontWeight: 800, fontSize: '1.1rem', color: 'white', letterSpacing: '0.04em' }}>
            EQUIPPP
          </span>
        </a>

        <nav style={{ display: 'flex', alignItems: 'center', gap: 32, marginLeft: 'auto' }} className="bfsi-desk-nav">
          {NAV_LINKS.map((l) => (
            <a key={l.label} href={l.href} className="bfsi-navlink">{l.label}</a>
          ))}
        </nav>

        <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexShrink: 0 }}>
          <a href="#" className="bfsi-login">Log In</a>
          <a href="#" className="bfsi-register">Register</a>
          <button
            className="bfsi-hamburger"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div style={{ background: 'rgba(7,15,30,0.98)', borderTop: '1px solid rgba(14,165,233,0.15)', padding: '16px 20px' }}>
          {NAV_LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              style={{ display: 'block', padding: '12px 0', fontSize: '0.95rem', fontWeight: 500, color: 'rgba(255,255,255,0.75)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}
            >{l.label}</a>
          ))}
        </div>
      )}
    </header>
  )
}

function Consortium() {
  const { ref, inView } = useInView()
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = cardRef.current
    if (!el) return

    const handleMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const rotateX = (y / rect.height - 0.5) * 8
      const rotateY = (x / rect.width - 0.5) * -8
      el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
    }

    const reset = () => {
      el.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`
    }

    el.addEventListener('mousemove', handleMove)
    el.addEventListener('mouseleave', reset)

    return () => {
      el.removeEventListener('mousemove', handleMove)
      el.removeEventListener('mouseleave', reset)
    }
  }, [])

  return (
    <section id="consortium" style={{ padding: '100px 0', background: 'var(--white)' }}>
      <div className="bfsi-wrap bfsi-two-col">
        <div ref={ref} className={`bfsi-reveal ${inView ? 'in-view' : ''}`}>
          <div style={{
            display: 'flex', alignItems: 'center', gap: 10,
            fontFamily: 'var(--mono)', fontSize: '0.72rem', color: 'var(--teal)',
            letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 14
          }}>
            <span style={{ width: 24, height: 1, background: 'var(--teal)' }} />
            About the Platform
          </div>

          <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(2rem,3.5vw,3rem)', color: 'var(--navy)', fontWeight: 700 }}>
            BFSI Consortium
          </h2>

          <div style={{ width: 48, height: 3, background: 'linear-gradient(90deg,var(--teal),var(--purple))', margin: '20px 0' }} />

          {[
            'The BFSI Consortium is a pioneering global platform for the BFSI sector, designed to unite all partners into a single platform. It brings together global and Indian IT companies, educational institutions, regulatory and government bodies, FinTech startups, and IT associations.',
            'The BFSI Consortium aims to enhance business delivery in the BFSI sector, bridge the talent gap, empower startups, and establish a strong, industry-friendly ecosystem.',
          ].map((text, i) => (
            <p key={i} style={{ fontSize: '0.97rem', color: 'var(--slate-600)', lineHeight: 1.8, marginTop: i > 0 ? 16 : 0 }}>
              {text}
            </p>
          ))}

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginTop: 28 }}>
            {CONSORTIUM_PILLS.map((p) => (
              <span key={p} style={{
                fontSize: '0.78rem', fontWeight: 600, color: 'var(--teal-dark)',
                background: 'rgba(14,165,233,0.08)', border: '1px solid rgba(14,165,233,0.2)',
                padding: '6px 14px', borderRadius: 100
              }}>{p}</span>
            ))}
          </div>
        </div>

        <div ref={cardRef} style={{ position: 'relative', transition: 'transform 0.2s ease' }}>
          <div style={{ position: 'relative', borderRadius: 20, overflow: 'visible' }}>
            <div style={{
              width: '100%', aspectRatio: '4/3', borderRadius: 20, overflow: 'hidden',
              position: 'relative', border: '1px solid var(--border)',
            }}>
              <img
                src="/images/Image Sector.png"
                alt="BFSI"
                className="bfsi-img-zoom"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div style={{
                position: 'absolute', inset: 0,
                background: 'radial-gradient(ellipse 60% 60% at 30% 40%,rgba(14,165,233,0.12),transparent 70%),radial-gradient(ellipse 50% 50% at 80% 70%,rgba(139,92,246,0.1),transparent 70%)',
              }} />
            </div>

            {FLOAT_CARDS.map((fc) => (
              <div
                key={fc.label}
                style={{
                  position: 'absolute', background: 'rgba(255,255,255,0.9)',
                  backdropFilter: 'blur(6px)', border: '1px solid var(--border-light)',
                  borderRadius: 12, padding: '14px 18px', display: 'flex', alignItems: 'center', gap: 12,
                  boxShadow: 'var(--shadow-lg)', animation: `p_float 4s ease-in-out ${fc.delay} infinite`,
                  zIndex: 5, cursor: 'pointer', transition: 'all 0.3s ease',
                  ...(fc.pos === 'bottomLeft' ? { bottom: -25, left: -25 } : { top: -25, right: -25 }),
                }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-8px) scale(1.05)' }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0) scale(1)' }}
              >
                <span style={{ fontSize: '1.6rem' }}>{fc.icon}</span>
                <div>
                  <div style={{ fontFamily: 'var(--serif)', fontSize: '1.3rem', color: 'var(--navy)', fontWeight: 700 }}>{fc.value}</div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--slate-400)', marginTop: 3, textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 600 }}>{fc.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function RoleBFSI() {
  return (
    <section id="role-holders" style={{ padding: '100px 0', background: 'var(--off-white)' }}>
      <div className="bfsi-wrap">
        <div style={{ textAlign: 'center', maxWidth: 820, margin: '0 auto 64px' }}>
          <Eyebrow>Industry Collaboration</Eyebrow>
          <SectionTitle>The Role of BFSI Consortium<br />in Student Placement and Training</SectionTitle>
          <p style={{ fontSize: '0.95rem', color: 'var(--slate-600)', lineHeight: 1.75 }}>
            At Equippp here, we recognise the significance of the BFSI sector not just in the economy, but also in shaping the careers of future professionals. The BFSI sector is instrumental in equipping students with the necessary skills and knowledge required for their professional journey.
          </p>
        </div>
        <div className="bfsi-two-grid">
          {FEATURES.map((f, i) => <FeatureCard key={i} feature={f} />)}
        </div>
      </div>
    </section>
  )
}

function FeatureCard({ feature: f }: { feature: Feature }) {
  const [hovered, setHovered] = useState(false)
  return (
    <div className="bfsi-glow">
      <div
        style={{
          background: 'var(--white)', border: '1px solid var(--border-light)', borderRadius: 20,
          padding: '36px 32px', position: 'relative', overflow: 'hidden', transition: 'all 0.3s ease',
          boxShadow: hovered ? '0 12px 40px rgba(0,0,0,0.1)' : 'none',
          transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
          borderColor: hovered ? 'transparent' : 'var(--border-light)',
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: f.color, opacity: hovered ? 1 : 0, transition: 'opacity 0.3s' }} />
        <div style={{ width: 52, height: 52, background: `${f.color}1a`, border: `1.5px solid ${f.color}40`, borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', marginBottom: 20 }}>{f.icon}</div>
        <h3 style={{ fontFamily: 'var(--sans)', fontSize: '1.1rem', fontWeight: 700, color: 'var(--navy)', marginBottom: 12 }}>{f.title}</h3>
        <p style={{ fontSize: '0.9rem', color: 'var(--slate-600)', lineHeight: 1.75, marginBottom: 20 }}>{f.desc}</p>
        <ReadMore color={f.color} />
      </div>
    </div>
  )
}

function StatCell({ stat, active }: { stat: Stat; active: boolean }) {
  const [hovered, setHovered] = useState(false)
  const animated = useCountUp(stat.value, active)

  return (
    <div
      style={{
        background: stat.highlight
          ? 'linear-gradient(135deg,rgba(14,165,233,0.18),rgba(139,92,246,0.18))'
          : hovered ? 'rgba(14,165,233,0.07)' : 'rgba(255,255,255,0.025)',
        padding: '28px 22px', transition: 'background 0.3s',
        border: stat.highlight ? '1px solid rgba(14,165,233,0.22)' : 'none',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={{
        fontFamily: 'var(--serif)',
        fontSize: stat.highlight ? 'clamp(1.7rem,2.5vw,2.3rem)' : 'clamp(1.3rem,2vw,1.75rem)',
        color: stat.highlight ? 'var(--teal)' : 'var(--white)',
        fontWeight: 700, lineHeight: 1.15, marginBottom: 8,
      }}>
        {animated}{stat.suffix}
      </div>
      <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.42)', lineHeight: 1.5, fontWeight: 500 }}>
        {stat.label}
      </div>
    </div>
  )
}

function Stakeholders() {
  const { ref, inView } = useInView()

  return (
    <section style={{ padding: '80px 0', background: 'var(--white)', borderTop: '1px solid var(--border-light)' }}>
      <div className="bfsi-wrap">
        <div ref={ref} className={`bfsi-reveal ${inView ? 'in-view' : ''}`} style={{ textAlign: 'center', marginBottom: 56 }}>
          <Eyebrow>Ecosystem Partners</Eyebrow>
          <SectionTitle>BFSI Stake Holders</SectionTitle>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: 20 }}>
          {STAKEHOLDERS.map((s, i) => (
            <div key={s.label} className={`bfsi-stagger ${inView ? 'in-view' : ''}`} style={{ animationDelay: `${i * 0.08}s` }}>
              <HolderCard holder={s} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function HolderCard({ holder: h }: { holder: Holder }) {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      style={{
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10,
        padding: '20px 16px',
        background: hovered ? 'var(--white)' : 'var(--off-white)',
        border: `1.5px solid ${hovered ? 'var(--teal)' : 'var(--border-light)'}`,
        borderRadius: 12, minWidth: 120,
        boxShadow: hovered ? 'var(--shadow-teal)' : 'none',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        transition: 'all 0.3s ease', cursor: 'default', textAlign: 'center',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={{ width: 52, height: 52, background: 'white', border: '1.5px solid var(--border-light)', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', boxShadow: 'var(--shadow-sm)' }}>{h.icon}</div>
      <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--slate-600)', letterSpacing: '0.03em', textTransform: 'uppercase', maxWidth: 110, lineHeight: 1.4 }}>{h.label}</div>
    </div>
  )
}

function CurriculumBenefits() {
  return (
    <section id="skills" style={{ padding: '100px 0', background: 'var(--off-white)' }}>
      <div className="bfsi-wrap">
        <div style={{ textAlign: 'center', maxWidth: 780, margin: '0 auto 64px' }}>
          <Eyebrow>Student Advantages</Eyebrow>
          <SectionTitle>How BFSI Course Curriculum<br />Benefits Students?</SectionTitle>
          <p style={{ fontSize: '0.95rem', color: 'var(--slate-600)', lineHeight: 1.8 }}>
            At Equippp Here, we bridge the gap between students and the BFSI sector, providing a comprehensive platform for learning, assessment, and placement. By leveraging the strengths of the BFSI industry, we ensure that students are not only prepared for their careers but can also excel in them.
          </p>
        </div>
        <div className="bfsi-two-grid">
          {BENEFITS.map((b, i) => <BenefitCard key={i} benefit={b} />)}
        </div>
      </div>
    </section>
  )
}

function BenefitCard({ benefit: b }: { benefit: Benefit }) {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      style={{
        background: 'var(--white)',
        border: `1.5px solid ${hovered ? 'transparent' : 'var(--border-light)'}`,
        borderRadius: 20, overflow: 'hidden',
        boxShadow: hovered ? '0 16px 48px rgba(0,0,0,0.1)' : 'none',
        transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
        transition: 'all 0.35s ease',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={{ padding: '28px 32px 0' }}>
        <div style={{ width: 56, height: 56, background: b.grad, borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.6rem', marginBottom: 20, boxShadow: `0 6px 20px ${b.color}55` }}>{b.icon}</div>
      </div>
      <div style={{ padding: '0 32px 32px' }}>
        <h3 style={{ fontFamily: 'var(--sans)', fontSize: '1.1rem', fontWeight: 700, color: 'var(--navy)', marginBottom: 12 }}>{b.title}</h3>
        <p style={{ fontSize: '0.9rem', color: 'var(--slate-600)', lineHeight: 1.75, marginBottom: 20 }}>{b.desc}</p>
        <ReadMore color={b.color} />
      </div>
    </div>
  )
}

// ─────────────────────────────────────────────
// OUTCOME — updated to match reference image
// ─────────────────────────────────────────────
const OUTCOME_BARS = [42, 70, 105, 148, 190, 218]

function Outcome() {
  const { ref, inView } = useInView(0.3)

  return (
    <section id="outcome" style={{ padding: '100px 0', background: 'var(--white)' }}>
      <div className="bfsi-wrap">

        {/* Section header */}
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <Eyebrow>Measurable Impact</Eyebrow>
          <h2 style={{
            fontFamily: 'var(--serif)',
            fontSize: 'clamp(2rem, 3.5vw, 3rem)',
            color: 'var(--navy)',
            fontWeight: 700,
          }}>
            Outcome
          </h2>
        </div>

        {/* Dark chart card */}
        <div
          ref={ref}
          style={{
            background: '#0a1628',
            borderRadius: 16,
            overflow: 'hidden',
            border: '1px solid rgba(255,255,255,0.06)',
          }}
        >
          {/* ── Top bar: FROM / title / TO ── */}
          <div style={{
            background: '#102040',
            padding: '11px 32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottom: '1px solid rgba(255,255,255,0.08)',
          }}>
            <span style={{
              fontFamily: 'var(--mono)',
              fontSize: '0.68rem',
              fontWeight: 700,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.45)',
            }}>
              FROM
            </span>
            <span style={{
              fontSize: '0.85rem',
              fontWeight: 700,
              color: 'white',
              letterSpacing: '0.05em',
              textAlign: 'center',
              flex: 1,
            }}>
              BFSI Sector Employability Skill Needs
            </span>
            <span style={{
              fontFamily: 'var(--mono)',
              fontSize: '0.68rem',
              fontWeight: 700,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.45)',
            }}>
              TO
            </span>
          </div>

          {/* ── SVG chart ── */}
          <div style={{ padding: '24px 24px 0' }}>
            <svg
              width="100%"
              viewBox="0 0 680 310"
              style={{ display: 'block', overflow: 'visible' }}
            >
              <defs>
                <linearGradient id="oc_barGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#4ade80" />
                  <stop offset="100%" stopColor="#15803d" />
                </linearGradient>

                {/* Orange Y-axis arrowheads */}
                <marker id="oc_yUp" viewBox="0 0 10 10" refX="5" refY="1"
                  markerWidth="7" markerHeight="7" orient="auto">
                  <polygon points="0,9 5,0 10,9" fill="#f97316" />
                </marker>
                <marker id="oc_yDn" viewBox="0 0 10 10" refX="5" refY="9"
                  markerWidth="7" markerHeight="7" orient="auto">
                  <polygon points="0,1 5,10 10,1" fill="#f97316" />
                </marker>

                {/* Green GAP arrowheads */}
                <marker id="oc_gUp" viewBox="0 0 10 10" refX="5" refY="1"
                  markerWidth="7" markerHeight="7" orient="auto">
                  <polygon points="0,9 5,0 10,9" fill="#4ade80" />
                </marker>
                <marker id="oc_gDn" viewBox="0 0 10 10" refX="5" refY="9"
                  markerWidth="7" markerHeight="7" orient="auto">
                  <polygon points="0,1 5,10 10,1" fill="#4ade80" />
                </marker>

                {/* Green phase span arrowheads */}
                <marker id="oc_spL" viewBox="0 0 10 10" refX="1" refY="5"
                  markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                  <polygon points="9,0 0,5 9,10" fill="#4ade80" />
                </marker>
                <marker id="oc_spR" viewBox="0 0 10 10" refX="9" refY="5"
                  markerWidth="6" markerHeight="6" orient="auto">
                  <polygon points="1,0 10,5 1,10" fill="#4ade80" />
                </marker>
              </defs>

              {/* ── Y-axis label + orange arrow ── */}
              <text
                x="13" y="160"
                textAnchor="middle"
                fill="rgba(255,255,255,0.38)"
                fontSize="9"
                letterSpacing="0.14em"
                fontFamily="var(--mono, monospace)"
                transform="rotate(-90,13,160)"
              >
                CURRENT GAP
              </text>
              <line
                x1="28" y1="20" x2="28" y2="262"
                stroke="#f97316" strokeWidth="1.5"
                markerStart="url(#oc_yUp)" markerEnd="url(#oc_yDn)"
              />

              {/* ── Phase span labels + green double-headed arrows ── */}
              {/* Domain Expertise */}
              <text x="112" y="22" textAnchor="middle"
                fill="rgba(255,255,255,0.58)" fontSize="11"
                fontFamily="var(--sans, sans-serif)">
                Domain Expertise
              </text>
              <line x1="48" y1="30" x2="174" y2="30"
                stroke="#4ade80" strokeWidth="1"
                markerStart="url(#oc_spL)" markerEnd="url(#oc_spR)" />

              {/* Technical Proficiency */}
              <text x="270" y="22" textAnchor="middle"
                fill="rgba(255,255,255,0.58)" fontSize="11"
                fontFamily="var(--sans, sans-serif)">
                Technical Proficiency
              </text>
              <line x1="174" y1="30" x2="366" y2="30"
                stroke="#4ade80" strokeWidth="1"
                markerStart="url(#oc_spL)" markerEnd="url(#oc_spR)" />

              {/* Behavioural Skills */}
              <text x="445" y="22" textAnchor="middle"
                fill="rgba(255,255,255,0.58)" fontSize="11"
                fontFamily="var(--sans, sans-serif)">
                Behavioural Skills
              </text>
              <line x1="366" y1="30" x2="530" y2="30"
                stroke="#4ade80" strokeWidth="1"
                markerStart="url(#oc_spL)" markerEnd="url(#oc_spR)" />

              {/* ── Animated bars ── */}
              {OUTCOME_BARS.map((h, i) => {
                const x = 44 + i * 76
                return (
                  <rect
                    key={i}
                    x={x}
                    y={inView ? 262 - h : 262}
                    width={56}
                    height={inView ? h : 0}
                    rx="3"
                    fill="url(#oc_barGrad)"
                    style={{
                      transition: `y 0.9s cubic-bezier(0.4,0,0.2,1) ${i * 0.1}s,
                                   height 0.9s cubic-bezier(0.4,0,0.2,1) ${i * 0.1}s`,
                    }}
                  />
                )
              })}

              {/* ── S-curve ── */}
              <path
                d="M 50 260 C 92 255, 124 234, 172 202 C 222 168, 278 132, 336 108 C 388 87, 440 73, 486 67"
                fill="none"
                stroke="#f59e0b"
                strokeWidth="2.8"
                strokeLinecap="round"
                strokeDasharray="900"
                strokeDashoffset={inView ? 0 : 900}
                style={{
                  transition: 'stroke-dashoffset 2.2s cubic-bezier(0.4,0,0.2,1) 0.3s',
                }}
              />

              {/* ── GAP vertical arrow + curly brace ── */}
              <line
                x1="572" y1="70" x2="572" y2="260"
                stroke="#4ade80" strokeWidth="1.8"
                markerStart="url(#oc_gUp)" markerEnd="url(#oc_gDn)"
              />
              <path
                d="M569 70 Q582 70 582 84 L582 158 Q582 170 594 170 Q582 170 582 182 L582 248 Q582 262 569 262"
                fill="none" stroke="#4ade80" strokeWidth="1.5"
              />

              {/* GAP label */}
              <text
                x="600" y="104"
                fill="#4ade80"
                fontSize="11"
                fontWeight="700"
                letterSpacing="0.16em"
                fontFamily="var(--mono, monospace)"
              >
                GAP
              </text>

              {/* Skill Gap badge */}
              <rect x="588" y="148" width="80" height="60" rx="8" fill="#16a34a" />
              <text x="628" y="167" textAnchor="middle"
                fill="white" fontSize="10" fontWeight="700"
                fontFamily="var(--sans, sans-serif)">
                Skill Gap gets
              </text>
              <text x="628" y="181" textAnchor="middle"
                fill="white" fontSize="10" fontWeight="700"
                fontFamily="var(--sans, sans-serif)">
                reduced by
              </text>
              <text x="628" y="198" textAnchor="middle"
                fill="white" fontSize="14" fontWeight="700"
                fontFamily="var(--sans, sans-serif)">
                75%
              </text>
            </svg>
          </div>

          {/* ── Bottom bar: X-axis label ── */}
          <div style={{
            background: '#102040',
            padding: '10px 32px',
            textAlign: 'center',
            fontFamily: 'var(--mono)',
            fontSize: '0.7rem',
            color: 'rgba(255,255,255,0.38)',
            letterSpacing: '0.08em',
            borderTop: '1px solid rgba(255,255,255,0.08)',
            marginTop: 6,
          }}>
            Students Academics based Skill level
          </div>
        </div>

      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer style={{ background: 'var(--navy-deep)' }}>
      <div style={{ height: 1, background: 'linear-gradient(90deg,transparent,var(--teal),var(--purple),transparent)' }} />

      <div className="bfsi-wrap bfsi-footer-grid">
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
            <span style={{ width: 36, height: 36, background: 'linear-gradient(135deg,#0ea5e9,#8b5cf6)', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontFamily: 'var(--serif)', fontWeight: 700, fontSize: '1.1rem' }}>E</span>
            <span style={{ fontFamily: 'var(--sans)', fontWeight: 800, fontSize: '1.1rem', color: 'white', letterSpacing: '0.04em' }}>EQUIPPP</span>
          </div>
          <p style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.4)', lineHeight: 1.75, marginBottom: 24 }}>
            Bridging the gap between<br />education and employment.
          </p>
          <div style={{ display: 'flex', gap: 10 }}>
            {['🔗', '🐦', '📘', '▶️'].map((icon, i) => (
              <a key={i} href="#" className="bfsi-social">{icon}</a>
            ))}
          </div>
        </div>

        {FOOTER_COLS.map((col) => (
          <div key={col.heading}>
            <h4 style={{ fontFamily: 'var(--sans)', fontSize: '0.82rem', fontWeight: 800, color: 'white', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 20 }}>{col.heading}</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {col.links.map((link) => (
                <li key={link}><a href="#" className="bfsi-flink">{link}</a></li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', padding: '20px 0' }}>
        <div className="bfsi-wrap" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 10 }}>
          <span style={{ fontFamily: 'var(--mono)', fontSize: '0.8rem', color: 'rgba(255,255,255,0.25)' }}>© 2024 Equippp. Pvt. Ltd.</span>
          <span style={{ fontFamily: 'var(--mono)', fontSize: '0.8rem', color: 'rgba(255,255,255,0.25)' }}>Education for Employability · BFSI Consortium · Telangana</span>
        </div>
      </div>
    </footer>
  )
}

const PAGE_STYLES = `
.bfsi-wrap {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 48px;
}
.bfsi-two-col {
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  gap: 80px;
  align-items: center;
}
.bfsi-two-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
}
.bfsi-stats-grid {
  display: grid !important;
  grid-template-columns: repeat(4, 1fr) !important;
}
.bfsi-footer-grid {
  display: grid;
  grid-template-columns: 1.6fr 1fr 1fr 1fr;
  gap: 48px;
  padding-top: 60px;
  padding-bottom: 48px;
}

.bfsi-desk-nav { display: flex; }
.bfsi-navlink {
  font-size: 0.88rem;
  font-weight: 500;
  color: rgba(255,255,255,0.7);
  letter-spacing: 0.02em;
  transition: color 0.2s;
}
.bfsi-navlink:hover { color: #0ea5e9; }
.bfsi-login {
  font-size: 0.88rem;
  font-weight: 600;
  color: rgba(255,255,255,0.8);
  padding: 8px 20px;
  border-radius: 8px;
  transition: color 0.2s;
}
.bfsi-login:hover { color: white; }
.bfsi-register {
  font-size: 0.88rem;
  font-weight: 700;
  color: white;
  padding: 9px 22px;
  background: linear-gradient(135deg, #0ea5e9, #8b5cf6);
  border-radius: 8px;
  box-shadow: 0 4px 14px rgba(14,165,233,0.35);
  transition: all 0.25s ease;
}
.bfsi-register:hover {
  transform: translateY(-1px);
  box-shadow: 0 6px 20px rgba(14,165,233,0.48);
}
.bfsi-hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  padding: 5px;
  background: transparent;
}
.bfsi-hamburger span {
  display: block;
  width: 22px;
  height: 2px;
  background: white;
  border-radius: 2px;
  transition: all 0.3s;
}

.bfsi-cta-primary {
  background: linear-gradient(135deg, #0ea5e9, #8b5cf6);
  color: white;
  font-weight: 700;
  font-size: 0.95rem;
  padding: 14px 36px;
  border-radius: 10px;
  box-shadow: 0 6px 24px rgba(14,165,233,0.35);
  transition: all 0.25s ease;
  letter-spacing: 0.02em;
  display: inline-block;
}
.bfsi-cta-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 32px rgba(14,165,233,0.52);
}
.bfsi-cta-secondary {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: rgba(255,255,255,0.75);
  font-weight: 600;
  font-size: 0.95rem;
  padding: 14px 28px;
  border: 1px solid rgba(255,255,255,0.15);
  border-radius: 10px;
  transition: all 0.25s;
}
.bfsi-cta-secondary:hover {
  border-color: #0ea5e9;
  color: #0ea5e9;
}

.bfsi-eco-node {
  width: 54px;
  height: 54px;
  background: #122952;
  border: 1.5px solid var(--nc, #0ea5e9);
  border-radius: 13px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.45rem;
  box-shadow: 0 4px 20px rgba(0,0,0,0.35);
  transition: transform 0.3s ease;
}
.bfsi-eco-node:hover { transform: scale(1.12); }

.bfsi-social {
  width: 36px;
  height: 36px;
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
  transition: all 0.2s;
}
.bfsi-social:hover {
  background: rgba(14,165,233,0.15);
  border-color: rgba(14,165,233,0.38);
  transform: translateY(-2px);
}
.bfsi-flink {
  font-size: 0.88rem;
  color: rgba(255,255,255,0.45);
  transition: color 0.2s;
}
.bfsi-flink:hover { color: #0ea5e9; }

.bfsi-reveal {
  opacity: 0;
  transform: translateY(40px);
  transition: all 0.8s ease;
}
.bfsi-reveal.in-view {
  opacity: 1;
  transform: translateY(0);
}

.bfsi-glow:hover {
  transform: translateY(-6px) scale(1.02);
  box-shadow: 0 10px 40px rgba(14,165,233,0.25);
}

.bfsi-img-zoom {
  transition: transform 0.6s ease;
}
.bfsi-img-zoom:hover {
  transform: scale(1.08);
}

@keyframes p_float {
  0%,100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

@keyframes gradientMove {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
.bfsi-animated-bg {
  background-size: 200% 200%;
  animation: gradientMove 10s ease infinite;
}

@keyframes p_fadeDown {
  from { opacity: 0; transform: translateY(-18px); }
  to   { opacity: 1; transform: translateY(0); }
}
@keyframes p_fadeUp {
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
}
@keyframes p_pulse {
  0%, 100% { opacity: 1;   transform: scale(1); }
  50%       { opacity: 0.5; transform: scale(1.45); }
}
@keyframes p_spin {
  to { transform: translate(-50%,-50%) rotate(360deg); }
}

@media (max-width: 1024px) {
  .bfsi-stats-grid { grid-template-columns: repeat(3, 1fr) !important; }
}
@media (max-width: 900px) {
  .bfsi-wrap         { padding: 0 20px; }
  .bfsi-two-col      { grid-template-columns: 1fr !important; gap: 40px; }
  .bfsi-two-grid     { grid-template-columns: 1fr !important; }
  .bfsi-stats-grid   { grid-template-columns: repeat(2, 1fr) !important; }
  .bfsi-footer-grid  { grid-template-columns: 1fr 1fr !important; padding-top: 40px; }
  .bfsi-desk-nav     { display: none !important; }
  .bfsi-hamburger    { display: flex !important; }
  .bfsi-login        { display: none; }
}
@media (max-width: 560px) {
  .bfsi-stats-grid   { grid-template-columns: 1fr 1fr !important; }
  .bfsi-footer-grid  { grid-template-columns: 1fr !important; }
}
`

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: PAGE_STYLES }} />
      <Navbar />
      <main>
        <Consortium />
        <RoleBFSI />
        {/* <Stakeholders /> */}
        <CurriculumBenefits />
        <Outcome />
      </main>
      {/* <Footer /> */}
    </>
  )
}