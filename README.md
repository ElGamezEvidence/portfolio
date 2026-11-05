# Issam El Gamez — portfolio

Site vitrine en React, TypeScript et Vite. Une page d’accueil et une étude de cas par projet. Français / anglais.

## Lancer en local

```bash
npm install
npm run dev
```

Build de production :

```bash
npm run build
npm run preview
```

## Déployer

Le projet est une SPA. Les fichiers `vercel.json` et `netlify.toml` renvoient toutes les routes vers `index.html`, pour que `/projets/jobpilot-ai` fonctionne au rafraîchissement.

### Vercel

1. Pousser ce dossier sur GitHub.
2. [vercel.com/new](https://vercel.com/new) → importer le dépôt.
3. Framework : Vite. Build : `npm run build`. Dossier : `dist`.
4. Déployer. L’URL obtenue (par exemple `https://issam-el-gamez.vercel.app`) est celle à mettre sur le CV.

### Netlify

1. Nouveau site depuis Git, même dépôt.
2. Build : `npm run build`. Publish : `dist`.
3. Le fichier `netlify.toml` couvre déjà la commande et les redirections.

## Ligne à ajouter au CV

Sous l’en-tête, à côté de LinkedIn et GitHub, une fois l’URL connue :

```
Portfolio : https://TON-URL
```

Et une phrase dans le profil :

```
Portfolio en ligne avec études de cas (plateforme Evidence Way, JobPilot AI, boutique GAAMOUZE).
```
