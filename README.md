# 🤸‍♀️ Pole Dance Anglet

Une application web vitrine moderne et performante, construite avec Next.js, pour le studio professionnel Pole Dance Anglet.

## 🌟 Présentation du projet

Ce projet est la refonte complète du site internet du studio "Pole Dance Anglet". L'objectif était de remplacer l'ancien site par une architecture moderne, fluide et administrable (headless CMS), offrant :

- Une **expérience utilisateur (UX)** immersive (vidéos, effets parallaxe, animations fluides).
- Une **gestion de contenu autonome** pour la propriétaire grâce à l'intégration profonde de Sanity.
- Un **formulaire de contact performant**, sécurisé et relayé directement par e-mail.

## 🚀 Fonctionnalités principales

- **Hero Section dynamique** : background vidéo HTML5 en lecture automatique et optimisé mobile.
- **Galerie d'images filtrable** : administrée depuis le CMS, avec système de classification par catégories dynamiques.
- **Contenu Modulable** : les textes, les images de parcours, les sections de cours (Pole, Pilates, Yoga) et les formules de tarifs (EVJF).
- **Formulaire de contact** : avec validation Zod stricte côté client/serveur, protection contre les erreurs d'hydratation (causées par les navigateurs/extensions), et notifications toast.
- **Envoi de Mails (API)** : interfaçage avec l'API Resend pour relayer les demandes directement à l'adresse de la propriétaire.
- **Design 100% Responsif** : pensé First-Mobile, avec système de navigation "ScrollToTop" et ancre de défilement fluide.

## 🛠️ Stack Technique

Construit avec des technologies front-end de pointe pour assurer performance, SEO et maintenabilité :

### Core

- [**Next.js 15+ (App Router)**](https://nextjs.org/) - Framework React pour le SSR / SSG.
- [**React 19**](https://react.dev/) - Bibliothèque UI.
- [**TypeScript**](https://www.typescriptlang.org/) - Typage statique robuste.

### Styling & UI

- [**Tailwind CSS (v4)**](https://tailwindcss.com/) - Framework CSS utilitaire pour le design systémique (Thème personnalisé : Rose, Slate, Violet).
- [**Framer Motion**](https://www.framer.com/motion/) - Bibliothèque de contrôle d'animations (fadeIn, apparitions).
- [**Lucide React**](https://lucide.dev/) - Bibliothèque d'icônes légères.
- [**React Hot Toast**](https://react-hot-toast.com/) - Notifications utilisateur élégantes.

### Backend & CMS

- [**Sanity Studio (v3)**](https://www.sanity.io/) - Headless CMS directement embarqué (Route `/studio`).
- [**Resend**](https://resend.com/) - SDK d'envoi et de routage d'e-mails transactionnels.

### Gestion de Formulaire

- [**React Hook Form**](https://react-hook-form.com/) - Gestion de l'état du formulaire.
- [**Zod**](https://zod.dev/) - Définition de schémas et validation asynchrone sécurisée.

## 🏗️ Architecture du projet

```plaintext
src/
├── app/                  # Next.js 15 App Router
│   ├── api/send/         # Route API backend (Resend)
│   ├── studio/           # Route d'administration Sanity CMS intégrée
│   ├── globals.css       # Style global (Tailwind)
│   ├── layout.tsx        # Layout principal de l'application
│   └── page.tsx          # Page d'accueil (Landing Page)
├── components/           # Composants UI React
│   ├── Contact.tsx       # Formulaire avec RHF & Zod
│   ├── Courses.tsx       # Cartes des cours + Parallaxe
│   ├── Gallery.tsx       # Filtrage des images du CMS
│   ├── Hero.tsx          # Section d'accueil vidéo
│   ├── Navbar.tsx        # Navigation sticky
│   ├── Pricing.tsx       # Carrousel et Tarifs
│   └── ScrollToTop.tsx   # Bouton de retour contextuel
└── sanity/               # Configuration et Schémas du CMS
    ├── lib/              # Clients et helpers Sanity
    └── schemaTypes/      # Schémas de BDD (ex: galleryType)
```

## ⚙️ Installation & Lancement local

Si vous souhaitez cloner ou analyser le projet en local :

1. **Cloner le repository**

   ```bash
   git clone https://github.com/votre-pseudo/poledanceanglet.git
   cd poledanceanglet
   ```

2. **Installer les dépendances**

   ```bash
   npm install
   ```

3. **Configurer les variables d'environnement**
   Créez un fichier `.env.local` à la racine reprenant cette structure :

   ```env
   NEXT_PUBLIC_SANITY_PROJECT_ID="votre_project_id"
   NEXT_PUBLIC_SANITY_DATASET="production"
   RESEND_API_KEY="re_votre_cle_api"
   ```

4. **Lancer le serveur de développement**

   ```bash
   npm run dev
   ```

   _L'application sera disponible sur `http://localhost:3000` et le CMS sur `http://localhost:3000/studio`._

## 💎 Qualité du code

- Respect strict des limites Client Components (`use client`) et Server Components (`use server`).
- UI protégée contre les erreurs "Hydration Mismatch" souvent générées par les plugins de mots de passe (stratégie `suppressHydrationWarning`).
- Typage fort `interface` via TypeScript sur l'intégration Sanity.

## 👨‍💻 Auteurs

- **Jacques Poulin** - Développeur.
