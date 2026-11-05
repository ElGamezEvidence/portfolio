import { Link } from 'react-router-dom'
import { useI18n } from '../i18n/LanguageContext.tsx'

export function NotFound() {
  const { copy } = useI18n()
  return (
    <main className="not-found" id="contenu">
      <p className="kicker">404</p>
      <h1>{copy.missing}</h1>
      <Link to="/" className="btn btn-primary">
        {copy.missingCta}
      </Link>
    </main>
  )
}
