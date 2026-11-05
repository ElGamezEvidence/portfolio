import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { profile } from '../data/content.ts'
import { useI18n } from '../i18n/LanguageContext.tsx'
import { GitHubIcon, LinkedInIcon } from './Icons.tsx'

export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 28, restDelta: 0.001 })
  return <motion.div className="progress" style={{ scaleX }} />
}

export function Intro({ onDone }: { onDone: () => void }) {
  useEffect(() => {
    const timer = window.setTimeout(() => {
      window.sessionStorage.setItem('ie-intro', '1')
      onDone()
    }, 780)
    return () => window.clearTimeout(timer)
  }, [onDone])

  return (
    <motion.div
      className="loader"
      exit={{ y: '-100%' }}
      transition={{ duration: 0.75, ease: [0.76, 0, 0.24, 1] }}
      role="status"
    >
      <div className="loader-inner">
        <span>IE</span>
        <strong>Issam El Gamez</strong>
        <i />
      </div>
    </motion.div>
  )
}

function LanguageSwitch() {
  const { copy, lang, setLang } = useI18n()
  return (
    <div className="lang" role="group" aria-label={copy.langLabel}>
      <button type="button" aria-pressed={lang === 'fr'} onClick={() => setLang('fr')}>
        <span className="short">FR</span>
        <span className="long">Français</span>
      </button>
      <button type="button" aria-pressed={lang === 'en'} onClick={() => setLang('en')}>
        <span className="short">EN</span>
        <span className="long">English</span>
      </button>
    </div>
  )
}

export function Nav() {
  const { copy } = useI18n()
  const { pathname } = useLocation()
  const [menuPath, setMenuPath] = useState<string | null>(null)
  const open = menuPath === pathname
  const [scrolled, setScrolled] = useState(() => window.scrollY > 12)
  const [active, setActive] = useState('profil')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    if (!open) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuPath(null)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  useEffect(() => {
    if (pathname !== '/') return
    const nodes = copy.nav
      .map((item) => document.getElementById(item.id))
      .filter((node): node is HTMLElement => Boolean(node))
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible?.target.id) setActive(visible.target.id)
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: [0.15, 0.4] },
    )
    nodes.forEach((node) => observer.observe(node))
    return () => observer.disconnect()
  }, [pathname, copy.nav])

  return (
    <header className={`nav${scrolled ? ' scrolled' : ''}`}>
      <div className="nav-inner">
        <Link to="/" className="brand" aria-label="Issam El Gamez">
          <span>IE</span>
          <span className="brand-name">Issam El Gamez</span>
        </Link>
        <nav className="nav-links" aria-label="Sections">
          {copy.nav.map((item) => (
            <a key={item.id} href={item.href} className={pathname === '/' && active === item.id ? 'active' : undefined}>
              {item.label}
            </a>
          ))}
        </nav>
        <div className="nav-tools">
          <p className="status">
            <i />
            {copy.status}
          </p>
          <LanguageSwitch />
          <button
            type="button"
            className="burger"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setMenuPath(open ? null : pathname)}
          >
            <span className="sr-only">{open ? copy.close : copy.menu}</span>
            <i />
            <i />
          </button>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            className="menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
          >
            {copy.nav.map((item) => (
              <a key={item.id} href={item.href} onClick={() => setMenuPath(null)}>
                {item.label}
              </a>
            ))}
            <LanguageSwitch />
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

const year = new Date().getFullYear()

export function Footer() {
  const { copy } = useI18n()
  return (
    <footer className="footer">
      <div className="footer-inner">
        <p>© {year} {profile.name}. {copy.rights}</p>
        <p>{copy.footerNote}</p>
        <div className="socials">
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            <LinkedInIcon />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer">
            <GitHubIcon />
            <span className="sr-only">GitHub</span>
          </a>
        </div>
      </div>
    </footer>
  )
}
