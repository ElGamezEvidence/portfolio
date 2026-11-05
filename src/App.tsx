import { AnimatePresence, MotionConfig } from 'framer-motion'
import { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import { CursorGlow, Footer, Intro, Nav, ScrollProgress } from './components/Chrome.tsx'
import { LanguageProvider, useI18n } from './i18n/LanguageContext.tsx'
import { Home } from './pages/Home.tsx'
import { NotFound } from './pages/NotFound.tsx'
import { ProjectPage } from './pages/ProjectPage.tsx'

function shouldPlayIntro() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return false
  return window.sessionStorage.getItem('ie-intro') !== '1'
}

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function Shell() {
  const { copy } = useI18n()
  const [showIntro, setShowIntro] = useState(shouldPlayIntro)

  return (
    <>
      <a className="skip" href="#contenu">
        {copy.skip}
      </a>
      <ScrollProgress />
      <CursorGlow />
      <ScrollToTop />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projets/:slug" element={<ProjectPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <AnimatePresence>{showIntro && <Intro onDone={() => setShowIntro(false)} />}</AnimatePresence>
    </>
  )
}

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <LanguageProvider>
        <BrowserRouter>
          <Shell />
        </BrowserRouter>
      </LanguageProvider>
    </MotionConfig>
  )
}
