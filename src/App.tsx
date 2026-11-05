import { AnimatePresence, MotionConfig, motion } from 'framer-motion'
import { useEffect } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import { Footer, Nav, ScrollProgress } from './components/Chrome.tsx'
import { LanguageProvider, useI18n } from './i18n/LanguageContext.tsx'
import { Home } from './pages/Home.tsx'
import { NotFound } from './pages/NotFound.tsx'
import { ProjectPage } from './pages/ProjectPage.tsx'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function Shell() {
  const { copy } = useI18n()
  const location = useLocation()

  return (
    <>
      <a className="skip" href="#contenu">
        {copy.skip}
      </a>
      <ScrollProgress />
      <ScrollToTop />
      <Nav />
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
        >
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/projets/:slug" element={<ProjectPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </motion.div>
      </AnimatePresence>
      <Footer />
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
