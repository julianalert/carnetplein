# Carnet plein

Le site de l'offre Carnet plein de vision, prévu pour `carnetplein.visionbtp.com` : une home qui oriente, et une page par métier (spa, panneaux solaires, cuisiniste, lieu de réception) sur un même template.

Projet Next.js autonome, sorti du dépôt `vision-website` le 13 octobre 2026. Pas de base de données ni de route d'API : les boutons de démo ouvrent un agenda Calendly.

## Lancer le site

```bash
npm install
```

```bash
npm run dev
```

Le site s'ouvre sur `http://localhost:3000/`, les pages métier sur `/spa/`, `/solaire/`, `/cuisiniste/` et `/lieu-de-reception/`.

## Où sont les choses

| Quoi | Où |
| --- | --- |
| La home | `src/app/page.tsx`, textes dans `src/content/meta.ts` |
| Le template des pages métier | `src/app/[niche]/page.tsx` |
| Les textes d'un métier | `src/content/niches/<slug>.ts` |
| Les blocs communs (en-tête, tarifs, FAQ, pied de page) | `src/app/sections.tsx` |
| La fenêtre de rendez-vous | `src/app/Booking.tsx` |
| Les styles | `src/app/carnet.css` |
| Les prix | `PRICES` dans `src/content/meta.ts` |

## Ajouter un métier

1. Créer `src/content/niches/<slug>.ts` sur le modèle de `spa.ts`.
2. L'inscrire dans `NICHES` (`src/content/niches/index.ts`).

La page `/<slug>/` existe alors, et sa carte apparaît dans le sélecteur de la home.

## Avant le lancement

- Le site est en `noindex` : passer `NOINDEX` à `false` dans `next.config.ts`.
- Le domaine `carnetplein.visionbtp.com` est à brancher sur ce projet dans Vercel.

## Archive

`docs/v1-suivi-commercial/` garde la première version de la page (une page unique, « suivi commercial »), textes et sources compris.
