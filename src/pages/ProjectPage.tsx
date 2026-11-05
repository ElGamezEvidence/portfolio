import { Link, useParams } from 'react-router-dom'
import { ProjectVisual } from '../components/ProjectVisual.tsx'
import { ArrowIcon } from '../components/Icons.tsx'
import { projects, tx, txList } from '../data/content.ts'
import { useI18n } from '../i18n/LanguageContext.tsx'
import { NotFound } from './NotFound.tsx'

export function ProjectPage() {
  const { slug } = useParams()
  const { lang, copy } = useI18n()
  const index = projects.findIndex((item) => item.slug === slug)
  const project = projects[index]

  if (!project) return <NotFound />

  const next = projects[(index + 1) % projects.length]

  return (
    <main className="case" id="contenu">
      <div className="case-top">
        <Link to="/#projets" className="text-link back-link">
          <ArrowIcon />
          {copy.back}
        </Link>
        <nav className="case-nav" aria-label={tx(lang, project.title)}>
          {copy.caseNav.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </div>

      <header className="case-hero">
        <div>
          <p className="kicker">{tx(lang, project.kicker)}</p>
          <h1>{tx(lang, project.title)}</h1>
          <p className="lead">{tx(lang, project.summary)}</p>
          <dl className="case-meta">
            <div>
              <dt>{copy.role}</dt>
              <dd>{tx(lang, project.role)}</dd>
            </div>
            <div>
              <dt>{copy.period}</dt>
              <dd>{tx(lang, project.period)}</dd>
            </div>
          </dl>
        </div>
        <ProjectVisual variant={project.visual} caption={tx(lang, project.frame)} label={copy.illustrated} />
      </header>

      <section id="contexte" className="case-block">
        <h2>{copy.context}</h2>
        <p>{tx(lang, project.context)}</p>
      </section>

      <section id="realisation" className="case-block">
        <h2>{copy.built}</h2>
        <ul className="points">
          {txList(lang, project.points).map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </section>

      <section id="architecture" className="case-block">
        <h2>{copy.architecture}</h2>
        <ol className="arch">
          {project.architecture.map((node, nodeIndex) => (
            <li key={node.name}>
              <span>0{nodeIndex + 1}</span>
              <strong>{node.name}</strong>
              <p>{tx(lang, node.detail)}</p>
            </li>
          ))}
        </ol>
      </section>

      <section id="stack" className="case-block">
        <h2>{copy.stack}</h2>
        <ul className="stack">
          {project.stack.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p className="note">{tx(lang, project.note)}</p>
        {project.links.length > 0 && (
          <div className="case-links">
            <h3>{copy.links}</h3>
            {project.links.map((link) => (
              <a key={link.href} href={link.href} target="_blank" rel="noreferrer" className="btn btn-ghost">
                {tx(lang, link.label)}
                <ArrowIcon />
              </a>
            ))}
          </div>
        )}
      </section>

      <Link to={`/projets/${next.slug}`} className="next-project">
        <span>{copy.next}</span>
        <strong>{tx(lang, next.title)}</strong>
        <ArrowIcon />
      </Link>
    </main>
  )
}
