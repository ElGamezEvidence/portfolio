export type Lang = 'fr' | 'en'

export type Localized = { fr: string; en: string }

export const profile = {
  name: 'Issam El Gamez',
  email: 'Issamgamez17@gmail.com',
  phone: '+212 610 36 48 97',
  phoneHref: 'tel:+212610364897',
  city: { fr: 'Casablanca, Maroc', en: 'Casablanca, Morocco' } satisfies Localized,
  linkedin: 'https://www.linkedin.com/in/issam-el-gamez-b7a75326a',
  github: 'https://github.com/ElGamezEvidence',
}

export const tx = (lang: Lang, value: Localized) => value[lang]

export const txList = (lang: Lang, value: { fr: string[]; en: string[] }) => value[lang]

export const ui = {
  fr: {
    skip: 'Aller au contenu',
    menu: 'Menu',
    close: 'Fermer',
    langLabel: 'Langue',
    status: 'Ouvert à un poste',
    nav: [
      { href: '/#profil', id: 'profil', label: 'Profil' },
      { href: '/#competences', id: 'competences', label: 'Compétences' },
      { href: '/#parcours', id: 'parcours', label: 'Parcours' },
      { href: '/#projets', id: 'projets', label: 'Projets' },
      { href: '/#contact', id: 'contact', label: 'Contact' },
    ],
    heroKicker: 'Développeur Full Stack · Team Lead',
    heroLead:
      'Je conçois et livre des applications web et mobiles de bout en bout : API sécurisées, interfaces produit, et mise en production.',
    heroSeek: 'Recherche un poste Full Stack ou Backend dans une équipe produit.',
    ctaProjects: 'Voir les projets',
    ctaContact: 'Me contacter',
    dossierKicker: 'En poste',
    dossierCompany: 'Evidence Way',
    dossierMeta: 'Casablanca · depuis août 2024',
    axes: [
      { n: '01', t: 'Équipe', d: 'Deux développeurs, revues de code et suivi des livraisons.' },
      { n: '02', t: 'Backend', d: 'NestJS, PostgreSQL, Kafka, Keycloak et JWT.' },
      { n: '03', t: 'Produit', d: 'React, React Native, travail agile avec le design.' },
    ],
    aboutIndex: '01',
    aboutTitle: 'Profil',
    aboutBody:
      'Développeur Full Stack et team lead, avec plus de deux ans d’expérience en entreprise. Je suis spécialisé en React, TypeScript, Node.js et NestJS, et à l’aise sur Angular et .NET. J’encadre une équipe de deux développeurs au quotidien. Rigoureux sur la qualité et la performance, je travaille en agile avec les équipes produit et design.',
    facts: [
      { k: '2+', v: 'années en entreprise' },
      { k: '2', v: 'développeurs encadrés' },
      { k: 'Web · API · Mobile', v: 'livraison de bout en bout' },
      { k: 'FR · EN · AR', v: 'interfaces, dont RTL' },
    ],
    skillsIndex: '02',
    skillsTitle: 'Compétences',
    skillsLead: 'Le stack que j’utilise en production, sur les projets personnels, et celui que je continue d’approfondir.',
    skillsAll: 'Tout',
    journeyIndex: '03',
    journeyTitle: 'Parcours',
    experienceTitle: 'Expérience',
    educationTitle: 'Formation',
    languagesTitle: 'Langues',
    projectsIndex: '04',
    projectsTitle: 'Projets',
    projectsLead:
      'Trois réalisations présentées comme des études de cas : le produit en entreprise, un assistant de carrière, et une boutique en ligne.',
    caseCta: 'Étude de cas',
    illustrated: 'Aperçu illustré',
    contactIndex: '05',
    contactTitle: 'Contact',
    contactLead: 'Pour un poste de développeur Full Stack ou Backend. Réponse directe, sans formulaire.',
    copy: 'Copier l’e-mail',
    copied: 'E-mail copié',
    call: 'Appeler',
    footerNote: 'Ce site est construit avec React, TypeScript et Vite.',
    rights: 'Tous droits réservés.',
    back: 'Retour aux projets',
    role: 'Rôle',
    period: 'Période',
    context: 'Contexte',
    built: 'Ce que j’ai porté',
    architecture: 'Architecture',
    stack: 'Stack',
    links: 'Liens',
    next: 'Projet suivant',
    missing: 'Cette page n’existe pas.',
    missingCta: 'Revenir à l’accueil',
    caseNav: [
      { href: '#contexte', label: 'Contexte' },
      { href: '#realisation', label: 'Réalisation' },
      { href: '#architecture', label: 'Architecture' },
      { href: '#stack', label: 'Stack' },
    ],
  },
  en: {
    skip: 'Skip to content',
    menu: 'Menu',
    close: 'Close',
    langLabel: 'Language',
    status: 'Open to work',
    nav: [
      { href: '/#profil', id: 'profil', label: 'Profile' },
      { href: '/#competences', id: 'competences', label: 'Skills' },
      { href: '/#parcours', id: 'parcours', label: 'Path' },
      { href: '/#projets', id: 'projets', label: 'Work' },
      { href: '/#contact', id: 'contact', label: 'Contact' },
    ],
    heroKicker: 'Full Stack Developer · Team Lead',
    heroLead:
      'I design and ship web and mobile products end to end: secure APIs, product interfaces, and production delivery.',
    heroSeek: 'Looking for a Full Stack or Backend role on a product team.',
    ctaProjects: 'View the work',
    ctaContact: 'Get in touch',
    dossierKicker: 'Currently',
    dossierCompany: 'Evidence Way',
    dossierMeta: 'Casablanca · since August 2024',
    axes: [
      { n: '01', t: 'Team', d: 'Two developers, code reviews, and delivery follow-up.' },
      { n: '02', t: 'Backend', d: 'NestJS, PostgreSQL, Kafka, Keycloak, and JWT.' },
      { n: '03', t: 'Product', d: 'React, React Native, agile work with design.' },
    ],
    aboutIndex: '01',
    aboutTitle: 'Profile',
    aboutBody:
      'Full Stack developer and team lead, with more than two years in industry. I specialize in React, TypeScript, Node.js, and NestJS, and I am also comfortable with Angular and .NET. I lead a team of two developers day to day. I care about quality and performance, and I work in agile with product and design.',
    facts: [
      { k: '2+', v: 'years in industry' },
      { k: '2', v: 'developers mentored' },
      { k: 'Web · API · Mobile', v: 'end-to-end delivery' },
      { k: 'FR · EN · AR', v: 'interfaces, including RTL' },
    ],
    skillsIndex: '02',
    skillsTitle: 'Skills',
    skillsLead: 'The stack I use in production, on personal projects, and the one I keep deepening.',
    skillsAll: 'All',
    journeyIndex: '03',
    journeyTitle: 'Path',
    experienceTitle: 'Experience',
    educationTitle: 'Education',
    languagesTitle: 'Languages',
    projectsIndex: '04',
    projectsTitle: 'Selected work',
    projectsLead: 'Three case studies: the product at work, a career assistant, and an online store.',
    caseCta: 'Case study',
    illustrated: 'Illustrated preview',
    contactIndex: '05',
    contactTitle: 'Contact',
    contactLead: 'For a Full Stack or Backend role. Direct reply, no form.',
    copy: 'Copy email',
    copied: 'Email copied',
    call: 'Call',
    footerNote: 'This site is built with React, TypeScript, and Vite.',
    rights: 'All rights reserved.',
    back: 'Back to work',
    role: 'Role',
    period: 'Period',
    context: 'Context',
    built: 'What I owned',
    architecture: 'Architecture',
    stack: 'Stack',
    links: 'Links',
    next: 'Next project',
    missing: 'This page does not exist.',
    missingCta: 'Back home',
    caseNav: [
      { href: '#contexte', label: 'Context' },
      { href: '#realisation', label: 'Delivery' },
      { href: '#architecture', label: 'Architecture' },
      { href: '#stack', label: 'Stack' },
    ],
  },
} as const

export const marquee = [
  'React',
  'Angular',
  'TypeScript',
  'NestJS',
  '.NET',
  'PostgreSQL',
  'Kafka',
  'Docker',
  'Kubernetes',
  'Keycloak',
  'React Native',
  'FastAPI',
]

export type Chip = string | Localized

export const skillGroups: { id: string; label: Localized; items: Chip[] }[] = [
  {
    id: 'front',
    label: { fr: 'Frontend', en: 'Frontend' },
    items: [
      'React.js',
      'Angular',
      'TypeScript',
      'JavaScript',
      'RxJS',
      'Redux Toolkit',
      'Angular Material',
      'Material UI',
      'Tailwind CSS',
      'Bootstrap',
      'SCSS',
      'HTML & CSS',
      'jQuery',
      'Vite',
      'React Hook Form',
      'Chart.js',
    ],
  },
  {
    id: 'back',
    label: { fr: 'Backend', en: 'Backend' },
    items: [
      'NestJS',
      'Node.js',
      'Express.js',
      'TypeORM',
      'C# / .NET',
      'ASP.NET Core',
      'Entity Framework Core',
      'ASP.NET Core Identity',
      'SignalR',
      'PHP / Laravel',
      'Spring Boot',
      'API REST',
      'OpenAPI / Swagger',
      'Socket.IO',
    ],
  },
  {
    id: 'mobile',
    label: { fr: 'Mobile', en: 'Mobile' },
    items: ['React Native', 'Expo'],
  },
  {
    id: 'data',
    label: { fr: 'Données', en: 'Data' },
    items: ['PostgreSQL', 'SQLite', 'pgvector', 'Redis', 'Apache Kafka', 'AWS S3', 'MinIO'],
  },
  {
    id: 'ai',
    label: { fr: 'IA & data', en: 'AI & data' },
    items: [
      'Python',
      'FastAPI',
      'Pydantic',
      'Embeddings',
      { fr: 'Similarité lexicale', en: 'Lexical similarity' },
      'Apache Spark',
      'PySpark',
      'Pipelines ETL',
    ],
  },
  {
    id: 'security',
    label: { fr: 'Sécurité', en: 'Security' },
    items: ['Keycloak', 'JWT', { fr: 'Rotation des jetons', en: 'Token rotation' }, 'ASP.NET Core Identity', 'Spring Security'],
  },
  {
    id: 'devops',
    label: { fr: 'DevOps & qualité', en: 'DevOps & quality' },
    items: [
      'Docker',
      'Docker Compose',
      'Nginx',
      'Kubernetes',
      'GitHub Actions',
      'AWS ECR',
      'Git',
      'Jest',
      'Vitest',
      'xUnit',
      'pytest',
      'ESLint',
      'Prettier',
      'Serilog',
    ],
  },
  {
    id: 'arch',
    label: { fr: 'Architecture & autres', en: 'Architecture & more' },
    items: ['Microservices', 'Clean Architecture', 'MVC', 'API-First', { fr: 'POO', en: 'OOP' }, 'UML', 'Java', 'Figma', 'i18n', 'RTL'],
  },
]

export const experiences: {
  company: string
  role: Localized
  period: Localized
  place: Localized
  points: { fr: string[]; en: string[] }
}[] = [
  {
    company: 'Evidence Way',
    role: { fr: 'Développeur Full Stack & Team Lead', en: 'Full Stack Developer & Team Lead' },
    period: { fr: 'Août 2024 — Présent', en: 'August 2024 — Present' },
    place: { fr: 'Casablanca, Maroc', en: 'Casablanca, Morocco' },
    points: {
      fr: [
        'Encadrement de deux développeurs : répartition des tâches, planification, revues de code et suivi des livraisons.',
        'API REST NestJS en microservices, PostgreSQL, TypeORM, documentation OpenAPI, Keycloak et JWT.',
        'Applications web React (TypeScript, Vite, Material UI, Redux Toolkit) branchées sur des API sécurisées.',
        'Application React Native (Expo) pour les opérations terrain, avec synchronisation Socket.IO.',
        'Kafka entre les services, cache Redis, Docker, Kubernetes et pipelines GitHub Actions. Tests Jest.',
      ],
      en: [
        'Leading two developers: task split, planning, code reviews, and delivery follow-up.',
        'NestJS REST APIs in a microservice architecture, PostgreSQL, TypeORM, OpenAPI docs, Keycloak, and JWT.',
        'React web apps (TypeScript, Vite, Material UI, Redux Toolkit) connected to secured APIs.',
        'React Native (Expo) app for field operations, with Socket.IO live sync.',
        'Kafka between services, Redis cache, Docker, Kubernetes, and GitHub Actions. Jest tests.',
      ],
    },
  },
  {
    company: 'Al Misbah Info',
    role: { fr: 'Stagiaire développeur web', en: 'Web developer intern' },
    period: { fr: 'Avril 2024 — Juin 2024', en: 'April 2024 — June 2024' },
    place: { fr: 'Casablanca, Maroc', en: 'Casablanca, Morocco' },
    points: {
      fr: [
        'Mise en œuvre d’une architecture MVC avec Laravel pour structurer la logique métier.',
        'Interfaces responsives en CSS et JavaScript.',
      ],
      en: [
        'Implemented an MVC architecture with Laravel to structure the backend domain logic.',
        'Built responsive interfaces with CSS and JavaScript.',
      ],
    },
  },
]

export const education: {
  title: Localized
  school: Localized
  year: string
  detail: Localized
}[] = [
  {
    title: {
      fr: 'Licence en IA, Big Data et Cybersécurité (AIBDCyS)',
      en: 'Bachelor’s in AI, Big Data and Cybersecurity (AIBDCyS)',
    },
    school: { fr: 'Université Ibn Tofaïl, Kénitra', en: 'Ibn Tofail University, Kenitra' },
    year: '2026',
    detail: {
      fr: 'Data science, NoSQL, cybersécurité, réseaux, BI.',
      en: 'Data science, NoSQL, cybersecurity, networks, BI.',
    },
  },
  {
    title: {
      fr: 'Technicien spécialisé en développement web Full Stack',
      en: 'Specialized technician, Full Stack web development',
    },
    school: { fr: 'ISTA', en: 'ISTA' },
    year: '2024',
    detail: {
      fr: 'HTML, CSS, JavaScript, jQuery, Bootstrap, PHP, Laravel, MVC, bases relationnelles.',
      en: 'HTML, CSS, JavaScript, jQuery, Bootstrap, PHP, Laravel, MVC, relational databases.',
    },
  },
  {
    title: {
      fr: 'Baccalauréat scientifique (SVT)',
      en: 'Scientific baccalaureate (life and earth sciences)',
    },
    school: { fr: 'Lycée Hassan II, Tinjdad', en: 'Hassan II High School, Tinjdad' },
    year: '2021',
    detail: { fr: 'Filière sciences de la vie et de la terre.', en: 'Life and earth sciences track.' },
  },
]

export const languages: { name: Localized; level: Localized }[] = [
  { name: { fr: 'Arabe', en: 'Arabic' }, level: { fr: 'Langue maternelle', en: 'Native' } },
  { name: { fr: 'Français', en: 'French' }, level: { fr: 'Communication professionnelle', en: 'Professional' } },
  { name: { fr: 'Anglais', en: 'English' }, level: { fr: 'Communication', en: 'Working proficiency' } },
]

export type ProjectVisual = 'ops' | 'career' | 'shop'

export type Project = {
  slug: string
  visual: ProjectVisual
  title: Localized
  kicker: Localized
  summary: Localized
  role: Localized
  period: Localized
  context: Localized
  points: { fr: string[]; en: string[] }
  stack: string[]
  architecture: { name: string; detail: Localized }[]
  links: { label: Localized; href: string }[]
  note: Localized
  frame: Localized
}

export const projects: Project[] = [
  {
    slug: 'evidence-way',
    visual: 'ops',
    title: { fr: 'Plateforme d’opérations', en: 'Operations platform' },
    kicker: { fr: 'Evidence Way · produit interne', en: 'Evidence Way · internal product' },
    summary: {
      fr: 'Back-office web et application terrain, branchés sur des API NestJS en microservices. J’en assure le développement et le lead technique.',
      en: 'Web back office and a field app, connected to NestJS APIs in a microservice setup. I build them and lead the technical delivery.',
    },
    role: { fr: 'Développeur Full Stack & Team Lead', en: 'Full Stack Developer & Team Lead' },
    period: { fr: 'Août 2024 — Présent', en: 'August 2024 — Present' },
    context: {
      fr: 'Chez Evidence Way, je participe à la conception et à la livraison d’outils utilisés par les équipes : interfaces web, application mobile de terrain, et services backend sécurisés. Le code reste interne. Cette page reprend le périmètre public de la mission, tel qu’il figure sur mon CV.',
      en: 'At Evidence Way I help design and ship tools the teams use every day: web interfaces, a field mobile app, and secured backend services. The code stays internal. This page covers the public scope of the role, as stated on my résumé.',
    },
    points: {
      fr: [
        'Leadership : répartition des tâches, planification, revues de code et accompagnement de deux développeurs.',
        'API REST NestJS, PostgreSQL, TypeORM, Swagger/OpenAPI, authentification Keycloak et JWT.',
        'Front React.js, TypeScript, Vite, Material UI et Redux Toolkit.',
        'Mobile React Native (Expo) pour le terrain, temps réel via Socket.IO.',
        'Kafka pour la communication inter-services, cache Redis, optimisation des requêtes et des appels asynchrones.',
        'Tests Jest, images Docker, déploiement Kubernetes, CI/CD GitHub Actions.',
        'Livraison itérative en agile avec le produit et le design.',
      ],
      en: [
        'Leadership: task split, planning, code reviews, and day-to-day support for two developers.',
        'NestJS REST APIs, PostgreSQL, TypeORM, Swagger/OpenAPI, Keycloak and JWT authentication.',
        'React.js front end with TypeScript, Vite, Material UI, and Redux Toolkit.',
        'React Native (Expo) for field work, live updates through Socket.IO.',
        'Kafka for service-to-service messaging, Redis cache, and tighter SQL and async API calls.',
        'Jest tests, Docker images, Kubernetes deployment, GitHub Actions CI/CD.',
        'Iterative agile delivery with product and design.',
      ],
    },
    stack: [
      'React',
      'TypeScript',
      'Vite',
      'Material UI',
      'Redux Toolkit',
      'React Native',
      'Expo',
      'NestJS',
      'TypeORM',
      'PostgreSQL',
      'Kafka',
      'Redis',
      'Keycloak',
      'JWT',
      'Socket.IO',
      'Docker',
      'Kubernetes',
      'GitHub Actions',
      'Jest',
    ],
    architecture: [
      { name: 'Clients', detail: { fr: 'React web et React Native', en: 'React web and React Native' } },
      { name: 'API', detail: { fr: 'Microservices NestJS', en: 'NestJS microservices' } },
      { name: 'Données', detail: { fr: 'PostgreSQL, Redis, Kafka', en: 'PostgreSQL, Redis, Kafka' } },
      { name: 'Accès', detail: { fr: 'Keycloak et JWT', en: 'Keycloak and JWT' } },
      { name: 'Livraison', detail: { fr: 'Docker, Kubernetes, GitHub Actions', en: 'Docker, Kubernetes, GitHub Actions' } },
    ],
    links: [],
    note: {
      fr: 'Projet d’entreprise. Pas de dépôt public, volontairement.',
      en: 'Company product. No public repository, on purpose.',
    },
    frame: { fr: 'Back-office · terrain', en: 'Back office · field' },
  },
  {
    slug: 'jobpilot-ai',
    visual: 'career',
    title: { fr: 'JobPilot AI', en: 'JobPilot AI' },
    kicker: { fr: 'Projet personnel · quasi finalisé', en: 'Personal project · nearly finished' },
    summary: {
      fr: 'Assistant de carrière limité aux données du compte : profil, analyse de CV, score de compatibilité expliqué, candidatures et préparation d’entretiens.',
      en: 'A career assistant bounded to the account’s own data: profile, résumé analysis, an explained match score, applications, and interview prep.',
    },
    role: { fr: 'Conception et développement complets', en: 'End-to-end design and build' },
    period: { fr: 'Projet personnel', en: 'Personal project' },
    context: {
      fr: 'JobPilot pilote une recherche d’emploi : compétences, dépôt de CV (PDF et DOCX) avec extraction du texte, recherche d’offres, matching multi-critères, suivi des candidatures, brouillons et préparation d’entretiens. Le monorepo suit une architecture modulaire (Clean Architecture). Les actions sensibles, comme l’envoi d’un e-mail, passent par une validation explicite. Les connecteurs externes (sites d’offres, messagerie) sont en cours d’intégration.',
      en: 'JobPilot runs a job search: skills, CV upload (PDF and DOCX) with text extraction, offer search, multi-criteria matching, an application pipeline, drafts, and interview prep. The monorepo follows a modular Clean Architecture. Sensitive actions, such as sending an email, require an explicit user confirmation. External connectors (job boards, mail) are still being integrated.',
    },
    points: {
      fr: [
        'JWT avec jeton d’accès, jeton de rafraîchissement et rotation, rôles, et isolation des données par utilisateur.',
        'Profil : compétences, expériences, formations, dépôt de CV et extraction du texte.',
        'Moteur de matching : compétences, expérience, lieu, langues et similarité, avec un score expliqué.',
        'Suivi des candidatures, brouillons, préparation d’entretiens, tableau de bord et analytique.',
        'Interface en français, anglais et arabe, avec sens de lecture droite-à-gauche.',
        'OpenAPI, tests Vitest, xUnit et pytest, images Docker et GitHub Actions.',
      ],
      en: [
        'JWT access and refresh tokens with rotation, roles, and per-user data isolation.',
        'Profile: skills, experience, education, CV upload, and text extraction.',
        'Matching engine across skills, experience, location, languages, and similarity, with an explained score.',
        'Application pipeline, drafts, interview prep, dashboard, and analytics.',
        'French, English, and Arabic UI, including right-to-left layout.',
        'OpenAPI, Vitest, xUnit, and pytest, Docker images, and GitHub Actions.',
      ],
    },
    stack: [
      'Angular 22',
      'TypeScript',
      'RxJS',
      'Signals',
      'Angular Material',
      'Tailwind CSS',
      'ngx-translate',
      'Chart.js',
      'C#',
      '.NET 10',
      'ASP.NET Core',
      'Entity Framework Core',
      'Identity',
      'FluentValidation',
      'SignalR',
      'Serilog',
      'PostgreSQL',
      'SQLite',
      'pgvector',
      'Python',
      'FastAPI',
      'Pydantic',
      'Docker',
      'Nginx',
      'GitHub Actions',
    ],
    architecture: [
      { name: 'Angular', detail: { fr: 'UI, i18n, RTL', en: 'UI, i18n, RTL' } },
      { name: '.NET 10', detail: { fr: 'API, Identity, SignalR', en: 'API, Identity, SignalR' } },
      { name: 'FastAPI', detail: { fr: 'Embeddings et similarité', en: 'Embeddings and similarity' } },
      { name: 'PostgreSQL', detail: { fr: 'Données et pgvector', en: 'Data and pgvector' } },
      { name: 'Livraison', detail: { fr: 'Docker, Nginx, GitHub Actions', en: 'Docker, Nginx, GitHub Actions' } },
    ],
    links: [],
    note: {
      fr: 'Quasi finalisé. Le dépôt n’est pas public pour le moment.',
      en: 'Nearly finished. The repository is not public yet.',
    },
    frame: { fr: 'Profil · matching', en: 'Profile · matching' },
  },
  {
    slug: 'gaamouze',
    visual: 'shop',
    title: { fr: 'GAAMOUZE', en: 'GAAMOUZE' },
    kicker: { fr: 'Boutique en ligne · parfumerie', en: 'Online store · fragrance' },
    summary: {
      fr: 'Vitrine e-commerce et back-office d’administration : catalogue, panier, commandes, stock, coupons et comptes.',
      en: 'A storefront and an admin back office: catalog, cart, orders, inventory, coupons, and accounts.',
    },
    role: { fr: 'Frontend React et API Express', en: 'React frontend and Express API' },
    period: { fr: 'Projet publié', en: 'Published project' },
    context: {
      fr: 'GAAMOUZE est une boutique de parfums. J’ai développé la vitrine React et l’API REST qui l’alimente. Le parcours client couvre la boutique, la fiche produit, le panier, le checkout, la liste d’envies et le suivi des commandes. Le back-office couvre les produits, catégories, stocks, commandes, coupons, avis, contenus, clients, utilisateurs et journaux d’audit.',
      en: 'GAAMOUZE is a fragrance shop. I built the React storefront and the REST API behind it. The customer path covers the shop, product page, cart, checkout, wishlist, and order history. The back office covers products, categories, inventory, orders, coupons, reviews, content, customers, users, and audit logs.',
    },
    points: {
      fr: [
        'Vitrine React, Vite, Tailwind CSS, React Router et i18n.',
        'API Express en modules ES, Prisma et PostgreSQL (Neon), validation Zod.',
        'Authentification JWT, Helmet, limitation de débit, documentation Swagger.',
        'Médias via Cloudinary. API déployée sur Railway, vitrine prévue pour Netlify ou Vercel.',
      ],
      en: [
        'React storefront with Vite, Tailwind CSS, React Router, and i18n.',
        'Express API in ES modules, Prisma, and PostgreSQL (Neon), with Zod validation.',
        'JWT authentication, Helmet, rate limiting, and Swagger docs.',
        'Media through Cloudinary. API deployed on Railway, storefront set up for Netlify or Vercel.',
      ],
    },
    stack: [
      'React',
      'Vite',
      'Tailwind CSS',
      'React Router',
      'i18next',
      'Axios',
      'Node.js',
      'Express',
      'Prisma',
      'PostgreSQL',
      'Zod',
      'JWT',
      'Swagger',
      'Cloudinary',
      'Jest',
    ],
    architecture: [
      { name: 'Vitrine', detail: { fr: 'React et Tailwind', en: 'React and Tailwind' } },
      { name: 'API', detail: { fr: 'Express, Zod, Swagger', en: 'Express, Zod, Swagger' } },
      { name: 'Données', detail: { fr: 'Prisma et PostgreSQL', en: 'Prisma and PostgreSQL' } },
      { name: 'Médias', detail: { fr: 'Cloudinary', en: 'Cloudinary' } },
      { name: 'Hébergement', detail: { fr: 'Railway et Netlify', en: 'Railway and Netlify' } },
    ],
    links: [
      {
        label: { fr: 'Code vitrine', en: 'Storefront code' },
        href: 'https://github.com/ElGamezEvidence/parfums_gamouz_front',
      },
      {
        label: { fr: 'Code API', en: 'API code' },
        href: 'https://github.com/ElGamezEvidence/parfums_gamouz_back',
      },
    ],
    note: {
      fr: 'Les deux dépôts sont publics sur GitHub.',
      en: 'Both repositories are public on GitHub.',
    },
    frame: { fr: 'Boutique · admin', en: 'Shop · admin' },
  },
]
