import { motion } from 'framer-motion'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ProjectVisual } from '../components/ProjectVisual.tsx'
import { Reveal } from '../components/Reveal.tsx'
import { ArrowIcon } from '../components/Icons.tsx'
import {
  education,
  experiences,
  languages,
  marquee,
  profile,
  projects,
  skillGroups,
  tx,
  txList,
  type Chip,
  type Lang,
} from '../data/content.ts'
import { useI18n } from '../i18n/LanguageContext.tsx'

const ease = [0.16, 1, 0.3, 1] as const

const fade = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
}

function chipLabel(lang: Lang, item: Chip) {
  return typeof item === 'string' ? item : item[lang]
}

export function Home() {
  const { lang, copy } = useI18n()
  const [filter, setFilter] = useState('all')
  const [copied, setCopied] = useState(false)

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1800)
    } catch {
      window.location.href = `mailto:${profile.email}`
    }
  }

  return (
    <main id="contenu">
      <section className="hero">
        <motion.div className="hero-copy" initial="hidden" animate="show" variants={{ show: { transition: { staggerChildren: 0.06, delayChildren: 0.04 } } }}>
          <motion.p className="kicker" variants={fade}>{copy.heroKicker}</motion.p>
          <motion.h1 className="display" variants={fade}>
            <span className="line-inner">Issam</span>
            <span className="name-last">El Gamez</span>
          </motion.h1>
          <motion.p className="lead" variants={fade}>{copy.heroLead}</motion.p>
          <motion.p className="seek" variants={fade}>{copy.heroSeek}</motion.p>
          <motion.div className="hero-actions" variants={fade}>
            <a className="btn btn-primary" href="#projets">
              {copy.ctaProjects}
              <ArrowIcon />
            </a>
            <a className="btn btn-ghost" href="#contact">
              {copy.ctaContact}
            </a>
          </motion.div>
          <motion.p className="where" variants={fade}>
            <i />
            {tx(lang, profile.city)}
            <span>·</span>
            {copy.spoken}
            <span>·</span>
            {copy.license}
          </motion.p>
        </motion.div>
        <motion.aside
          className="dossier"
          initial="hidden"
          animate="show"
          variants={{ show: { transition: { staggerChildren: 0.08, delayChildren: 0.18 } } }}
        >
          <motion.p className="kicker" variants={fade}>{copy.dossierKicker}</motion.p>
          <motion.h2 variants={fade}>{copy.dossierCompany}</motion.h2>
          <motion.p className="dossier-meta" variants={fade}>{copy.dossierMeta}</motion.p>
          <motion.ul variants={{ show: { transition: { staggerChildren: 0.06 } } }}>
            {copy.axes.map((axis) => (
              <motion.li key={axis.n} variants={fade}>
                <span>{axis.n}</span>
                <div>
                  <strong>{axis.t}</strong>
                  <p>{axis.d}</p>
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </motion.aside>
      </section>

      <ul className="stack-row" aria-label="Stack">
        {marquee.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <section id="profil" className="section">
        <Reveal>
          <div className="section-head">
            <span>{copy.aboutIndex}</span>
            <h2>{copy.aboutTitle}</h2>
          </div>
          <p className="prose">{copy.aboutBody}</p>
        </Reveal>
        <div className="stats">
          {copy.facts.map((fact) => (
            <Reveal key={fact.v} className="stat">
              <strong>{fact.k}</strong>
              <span>{fact.v}</span>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="competences" className="section">
        <div className="section-head">
          <span>{copy.skillsIndex}</span>
          <h2>{copy.skillsTitle}</h2>
        </div>
        <p className="section-lead">{copy.skillsLead}</p>
        <div className="filters" aria-label={copy.skillsTitle}>
          <button type="button" aria-pressed={filter === 'all'} onClick={() => setFilter('all')}>
            {copy.skillsAll}
          </button>
          {skillGroups.map((group) => (
            <button
              key={group.id}
              type="button"
              aria-pressed={filter === group.id}
              onClick={() => setFilter(group.id)}
            >
              {tx(lang, group.label)}
            </button>
          ))}
        </div>
        <div className="skill-grid">
          {skillGroups.map((group) => (
            <article key={group.id} className={filter !== 'all' && filter !== group.id ? 'skill-card dim' : 'skill-card'}>
              <h3>{tx(lang, group.label)}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={chipLabel(lang, item)}>{chipLabel(lang, item)}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section id="parcours" className="section">
        <div className="section-head">
          <span>{copy.journeyIndex}</span>
          <h2>{copy.journeyTitle}</h2>
        </div>
        <h3 className="block-title">{copy.experienceTitle}</h3>
        <div className="timeline">
          {experiences.map((job) => (
            <article key={job.company} className="job">
              <div>
                <p className="job-period">{tx(lang, job.period)}</p>
                <p className="job-place">{tx(lang, job.place)}</p>
              </div>
              <div>
                <h3>
                  {tx(lang, job.role)}
                  <span>{job.company}</span>
                </h3>
                <ul>
                  {txList(lang, job.points).map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <h3 className="block-title">{copy.educationTitle}</h3>
        <div className="edu-list">
          {education.map((item) => (
            <article key={item.year + item.school.fr} className="edu">
              <p>{item.year}</p>
              <div>
                <h3>{tx(lang, item.title)}</h3>
                <p>{tx(lang, item.school)}</p>
                <p>{tx(lang, item.detail)}</p>
              </div>
            </article>
          ))}
        </div>

        <h3 className="block-title">{copy.languagesTitle}</h3>
        <ul className="lang-list">
          {languages.map((item) => (
            <li key={item.name.fr}>
              <strong>{tx(lang, item.name)}</strong>
              <span>{tx(lang, item.level)}</span>
            </li>
          ))}
        </ul>
      </section>

      <section id="projets" className="section">
        <div className="section-head">
          <span>{copy.projectsIndex}</span>
          <h2>{copy.projectsTitle}</h2>
        </div>
        <p className="section-lead">{copy.projectsLead}</p>
        <div className="project-list">
          {projects.map((project, index) => (
            <Reveal key={project.slug} delay={index * 0.05}>
              <Link to={`/projets/${project.slug}`} className={`project-card${index % 2 ? ' flip' : ''}`}>
                <div className="project-copy">
                  <p className="kicker">
                    0{index + 1} — {tx(lang, project.kicker)}
                  </p>
                  <h3>{tx(lang, project.title)}</h3>
                  <p>{tx(lang, project.summary)}</p>
                  <p className="scope-label">{copy.scope}</p>
                  <ul className="scope">
                    {txList(lang, project.points).slice(0, 3).map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                  <ul className="chips">
                    {project.stack.slice(0, 5).map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <span className="text-link">
                    {copy.caseCta}
                    <ArrowIcon />
                  </span>
                </div>
                <ProjectVisual variant={project.visual} caption={tx(lang, project.frame)} label={copy.illustrated} />
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="contact" className="section contact">
        <div className="section-head">
          <span>{copy.contactIndex}</span>
          <h2>{copy.contactTitle}</h2>
        </div>
        <p className="section-lead">{copy.contactLead}</p>
        <a className="mail" href={`mailto:${profile.email}`}>
          {profile.email}
        </a>
        <div className="contact-actions">
          <button type="button" className="btn btn-primary" onClick={copyEmail}>
            {copied ? copy.copied : copy.copy}
          </button>
          <a className="btn btn-ghost" href={profile.phoneHref}>
            {copy.call}
            <span>{profile.phone}</span>
          </a>
          <a className="btn btn-ghost" href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a className="btn btn-ghost" href={profile.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
        <p className="where">
          <i />
          {tx(lang, profile.city)}
        </p>
      </section>
    </main>
  )
}
