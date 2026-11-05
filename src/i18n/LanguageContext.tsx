import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import { ui, type Lang } from '../data/content.ts'

type LanguageValue = {
  lang: Lang
  setLang: (lang: Lang) => void
  copy: (typeof ui)[Lang]
}

const LanguageContext = createContext<LanguageValue | null>(null)

function readLang(): Lang {
  if (typeof window === 'undefined') return 'fr'
  return window.localStorage.getItem('lang') === 'en' ? 'en' : 'fr'
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(readLang)

  const setLang = useCallback((next: Lang) => {
    setLangState(next)
    window.localStorage.setItem('lang', next)
  }, [])

  useEffect(() => {
    document.documentElement.lang = lang
    document.title =
      lang === 'fr'
        ? 'Issam El Gamez — Développeur Full Stack'
        : 'Issam El Gamez — Full Stack Developer'
  }, [lang])

  const value = useMemo(() => ({ lang, setLang, copy: ui[lang] }), [lang, setLang])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useI18n() {
  const value = useContext(LanguageContext)
  if (!value) throw new Error('useI18n must be used within LanguageProvider')
  return value
}
