import type { ProjectVisual } from '../data/content.ts'

type Props = {
  variant: ProjectVisual
  caption: string
  label: string
}

export function ProjectVisual({ variant, caption, label }: Props) {
  return (
    <div className={`frame frame-${variant}`} aria-hidden="true">
      <div className="frame-bar">
        <span />
        <span />
        <span />
        <em>{caption}</em>
      </div>
      <div className="frame-body">
        {variant === 'ops' && <OpsScreen />}
        {variant === 'career' && <CareerScreen />}
        {variant === 'shop' && <ShopScreen />}
      </div>
      <p className="frame-note">{label}</p>
    </div>
  )
}

function OpsScreen() {
  return (
    <div className="screen ops">
      <aside>
        <i className="on" />
        <i />
        <i />
        <i />
      </aside>
      <div className="ops-main">
        <div className="metrics">
          <div>
            <small>API</small>
            <strong>NestJS</strong>
          </div>
          <div>
            <small>Bus</small>
            <strong>Kafka</strong>
          </div>
          <div>
            <small>Auth</small>
            <strong>Keycloak</strong>
          </div>
        </div>
        <ul>
          <li>
            <span>Web</span>
            <em>React</em>
          </li>
          <li>
            <span>Terrain</span>
            <em>Expo</em>
          </li>
          <li>
            <span>Données</span>
            <em>PostgreSQL</em>
          </li>
          <li>
            <span>Livraison</span>
            <em>Kubernetes</em>
          </li>
        </ul>
      </div>
    </div>
  )
}

function CareerScreen() {
  const rows = [
    { name: 'Profil', width: '92%' },
    { name: 'CV', width: '78%' },
    { name: 'Match', width: '84%' },
    { name: 'Suivi', width: '64%' },
  ]
  return (
    <div className="screen career">
      <div className="score">
        <svg viewBox="0 0 120 120">
          <circle className="ring-track" cx="60" cy="60" r="46" />
          <circle className="ring-value" cx="60" cy="60" r="46" />
          <text x="60" y="66" textAnchor="middle">
            match
          </text>
        </svg>
      </div>
      <div className="pipe">
        {rows.map((row) => (
          <div key={row.name}>
            <span>{row.name}</span>
            <b>
              <i style={{ width: row.width }} />
            </b>
          </div>
        ))}
      </div>
    </div>
  )
}

function ShopScreen() {
  const items = ['Ambre', 'Néroli', 'Cèdre', 'Musc']
  return (
    <div className="screen shop">
      {items.map((item) => (
        <div className="tile" key={item}>
          <div className="bottle" />
          <span>{item}</span>
        </div>
      ))}
    </div>
  )
}
