# QUUBE IA Santé

**Version 4.0.0** - Site enrichi avec nouvelles prestations 2025

## 🎨 Charte Graphique Officielle QUUBE Appliquée

**Ce site respecte à 100% l'identité visuelle officielle QUUBE** extraite de [www.quube.fr](https://www.quube.fr) :
- ✅ **Jaune fluo (#fcf474)** - Couleur signature QUUBE pour tous les CTAs principaux
- ✅ **Bleu (#0082f3)** - Couleur IA pour les éléments technologiques et icônes
- ✅ **Noir absolu (#000000)** - Texte principal et éléments structurels
- ✅ **Typographie Inter** - Police géométrique moderne et clean
- ✅ **Minimalisme** - Design épuré avec contrastes forts noir/blanc/jaune

👉 **Voir la documentation complète** : [QUUBE_BRANDING.md](./QUUBE_BRANDING.md)

---

## 🚀 Nouveautés Version 4.0.0 (30 janvier 2025)

### 🆕 3 Nouvelles Offres Majeures
1. **Diagnostic Flash QUUBE®** - Méthode propriétaire 3 niveaux (Base, Support, Cœur métier)
2. **Conférences & Sensibilisation sur Mesure** - Avec démonstrations sur VOS cas d'usage
3. **Accompagnement Technique Avancé** - Agents IA, MCP, no-code, outils spécialisés

### 📚 6 Nouveaux Articles Blog DSI/Dirigeants
- Le vrai coût de l'IA : licences, API tokens, modèles on-premise
- Coûts RH de maintenance et développement IA
- Éditeurs qui ouvrent leurs API : opportunités et pièges
- Qu'est-ce qu'un Proxy IA, AI Gateway et pseudonymisation ?
- Cloud vs On-Premise vs Hybrid : guide de décision
- Comparatif 2025 des plateformes IA (Azure, AWS, Google, Mistral)

👉 **Voir le détail complet** : [NOUVELLES_PRESTATIONS_2025.md](./NOUVELLES_PRESTATIONS_2025.md)

---

## Vue d'Ensemble du Projet

**QUUBE IA Santé** est une plateforme web professionnelle dédiée à l'accompagnement des établissements de santé et médico-sociaux dans leur transformation par l'Intelligence Artificielle. Le site valorise une offre complète de formations, coaching, conseil et audits spécialisés en IA générative pour le secteur de la santé.

## 🎯 Objectifs du Projet

- Présenter l'offre complète de QUUBE en IA pour le secteur santé
- Valoriser les **8 piliers de l'offre** (vs 6 avant) : Formations, Coaching, Conseil & Gouvernance, Audits, Diagnostic Flash, Conférences, Accompagnement Technique, Cas d'Usage
- Démontrer les cas d'usage métiers concrets (DRH, DAF, DG, Directeurs, Équipes soins/éducatives)
- Positionner QUUBE auprès des **DSI, Architectes IT** et Responsables Innovation (nouveau)
- Générer des leads qualifiés via un formulaire de contact optimisé
- Positionner QUUBE comme expert de la transformation IA en santé

## 🌐 URLs du Projet

### Développement
- **URL Locale**: http://localhost:3000
- **URL Sandbox Publique**: https://3000-i4qus5wkajuu09mklzfv1-a402f90a.sandbox.novita.ai

### Production (À venir)
- **Cloudflare Pages**: Sera déployé après configuration
- **Domaine personnalisé**: quube.fr ou sous-domaine à définir

## ✨ Fonctionnalités Actuellement Implémentées

### Pages et Sections
- ✅ **Page d'accueil** avec hero section IA percutante
- ✅ **Section Notre Offre** (8 cartes détaillées - vs 6 avant)
  - Formations (initiation, perfectionnement ChatGPT/Claude/Gemini, outils vidéo/GenSpark)
  - Coaching (dirigeants, CODIR, équipes)
  - Conseil Stratégique & Gouvernance (chartes éthique/usages, gouvernance IA, RGPD)
  - Audits IA (maturité, processus, opportunités)
  - **Diagnostic Flash QUUBE®** (méthode 3 niveaux) - 🆕
  - **Conférences & Sensibilisation** (formats 2h + CODIR avec démos cas d'usage) - 🆕
  - **Accompagnement Technique** (agents IA, MCP, N8n, no-code) - 🆕
  - Cas d'Usage Métiers (solutions personnalisées)

- ✅ **Section Cas d'Usage Métiers** (6 profils détaillés)
  - DRH - Recrutement & Gestion RH
  - DAF - Finance & Reporting intelligent
  - Direction Générale - Vision stratégique
  - Directeurs d'Établissement - Gestion opérationnelle
  - Équipes de Soins - Qualité des soins
  - Équipes Éducatives - Accompagnement personnalisé

- ✅ **Section Blog IA Santé** (15 articles - vs 9 avant) - 🆕
  - 9 articles métiers/transformation (existants)
  - **6 articles techniques DSI/Dirigeants** (nouveaux) :
    - Coûts IA (licences, API, infrastructure, RH)
    - Architecture (Proxy, AI Gateway, pseudonymisation)
    - Choix déploiement (Cloud, On-Premise, Hybrid)
    - Comparatif plateformes 2025 (Azure, AWS, Google, Mistral)

- ✅ **Section Notre Approche**
  - Méthodologie en 3 étapes
  - Singularité QUUBE (IA au service du conseil)
  - Différenciation competitive

- ✅ **Section Pourquoi Maintenant**
  - Contexte marché (450+ HealthTech, 76% croissance)
  - Enjeu de non-décrochage professionnel
  - Responsabilité employeur

- ✅ **Formulaire de Contact Complet**
  - Champs personnalisés secteur santé
  - Sélection multi-besoins (Formation, Coaching, Conseil, Audit, Diagnostic, Conférences)
  - API backend Hono `/api/contact`
  - Validation et feedback utilisateur

- ✅ **Footer Complet**
  - Liens navigation (inclus Blog)
  - Coordonnées de contact
  - Réseaux sociaux

### Features Techniques
- ✅ **Design Responsive** (mobile-first)
- ✅ **Animations CSS** (hover, transitions, gradients)
- ✅ **Navigation smooth scroll**
- ✅ **Iconographie Font Awesome**
- ✅ **Tailwind CSS** via CDN
- ✅ **TypeScript** avec Hono JSX
- ✅ **API REST** pour formulaire de contact

## 🏗️ Architecture Technique

### Stack Technologique
```
Frontend:
- HTML5 + Tailwind CSS (via CDN)
- JavaScript vanilla (formulaires, animations)
- Font Awesome Icons
- Google Fonts (Inter)

Backend:
- Hono Framework v4.11.4
- TypeScript
- JSX Renderer (Hono)

Build & Deploy:
- Vite v6.3.5
- Wrangler v4.4.0 (Cloudflare CLI)
- PM2 (développement local)
- Cloudflare Pages (production)
```

### Structure du Projet
```
webapp/
├── src/
│   ├── index.tsx          # Application principale Hono
│   └── renderer.tsx       # JSX renderer avec layout
├── public/
│   └── static/
│       └── style.css      # Styles CSS personnalisés
├── dist/                  # Build output (généré)
├── logs/                  # Logs PM2 (généré)
├── .git/                  # Git repository
├── .gitignore            # Git ignore rules
├── ecosystem.config.cjs  # Configuration PM2
├── wrangler.jsonc        # Configuration Cloudflare
├── package.json          # Dependencies & scripts
├── tsconfig.json         # TypeScript config
├── vite.config.ts        # Vite config
└── README.md             # Ce fichier
```

## 📊 Architecture des Données

### Modèle de Contact (Formulaire)
```typescript
interface ContactForm {
  nom: string              // Nom du contact
  prenom: string           // Prénom
  email: string            // Email (required)
  telephone?: string       // Téléphone (optionnel)
  organisation: string     // Nom établissement
  type: string             // Type établissement (hopital, ehpad, etc.)
  fonction: string         // Fonction (dg, drh, daf, etc.)
  besoins: string[]        // Besoins multiples (formation, coaching, etc.)
  message?: string         // Message libre
}
```

### Services de Stockage
- **Formulaires de contact** : À intégrer avec service email (SendGrid, Mailgun, etc.)
- **Pas de base de données** pour le moment (site vitrine)
- **Future évolution** : Possibilité d'ajouter Cloudflare D1 pour stockage leads

## 📝 Guide d'Utilisation

### Pour les Visiteurs
1. **Navigation** : Utiliser le menu fixe en haut ou scroll naturel
2. **Explorer l'offre** : 6 piliers détaillés dans la section "Notre Offre"
3. **Cas d'usage** : Trouver les solutions par métier
4. **Contact** : Formulaire complet en bas de page
5. **Smooth scroll** : Tous les liens internes ont un défilement fluide

### Pour l'Administration
- **Modifier le contenu** : Éditer `/home/user/webapp/src/index.tsx`
- **Personnaliser les styles** : Éditer `/home/user/webapp/public/static/style.css`
- **Gérer les formulaires** : API route `/api/contact` dans `index.tsx`

## 🚀 Déploiement

### Statut Actuel
- ✅ **Développement local** : Opérationnel (PM2 + Wrangler)
- ✅ **URL publique sandbox** : Active et accessible
- ⏳ **Production Cloudflare Pages** : À configurer

### Prochaines Étapes de Déploiement

1. **Configurer Cloudflare API**
   ```bash
   # Configurer l'API key Cloudflare
   # Via l'interface Deploy tab
   ```

2. **Créer le projet Cloudflare Pages**
   ```bash
   cd /home/user/webapp
   npx wrangler pages project create quube-ia-sante \
     --production-branch main \
     --compatibility-date 2024-01-01
   ```

3. **Déployer en production**
   ```bash
   npm run build
   npx wrangler pages deploy dist --project-name quube-ia-sante
   ```

4. **Configuration domaine personnalisé** (optionnel)
   ```bash
   npx wrangler pages domain add quube.fr --project-name quube-ia-sante
   ```

## 🛠️ Technologies Non Implémentées (Prévues)

- ❌ **Newsletter** : Intégration future avec service email
- ❌ **Blog IA Santé** : Section contenu à ajouter
- ❌ **Espace client** : Authentification et tableau de bord
- ❌ **Système de réservation** : Calendly ou solution custom
- ❌ **Analytics** : Google Analytics ou Cloudflare Analytics
- ❌ **Chat en direct** : Widget de support client
- ❌ **Témoignages clients** : Section sociale proof

## 📈 Prochaines Étapes de Développement Recommandées

### Phase 1 - Court Terme
1. ✅ Intégrer service email pour formulaire de contact (SendGrid/Mailgun)
2. ✅ Ajouter Google Analytics / Cloudflare Web Analytics
3. ✅ Configurer domaine personnalisé
4. ✅ Ajouter section témoignages clients
5. ✅ Optimiser SEO (meta tags, structured data)

### Phase 2 - Moyen Terme
1. ⏳ Créer un blog IA Santé (articles, études de cas)
2. ⏳ Ajouter système de prise de RDV (Calendly integration)
3. ⏳ Développer landing pages spécifiques par métier
4. ⏳ Newsletter et automation marketing
5. ⏳ Section ressources téléchargeables (guides, e-books)

### Phase 3 - Long Terme
1. ⏳ Espace client avec authentification
2. ⏳ Plateforme de formation en ligne
3. ⏳ Tableau de bord de suivi projets clients
4. ⏳ Intégration CRM (HubSpot, Salesforce)
5. ⏳ Chatbot IA pour qualification leads

## 🔧 Maintenance et Mises à Jour

### Dernière Mise à Jour
- **Date** : 2025-01-21
- **Version** : 1.0.0
- **Statut** : ✅ En ligne et fonctionnel

### Changelog
- **v1.0.0** (2025-01-21)
  - Création initiale du site complet
  - 6 sections principales implémentées
  - Formulaire de contact fonctionnel
  - Design responsive finalisé
  - Déploiement local PM2 configuré

## 👥 Contributeurs

- **Samuel Bottaro** - Fondateur QUUBE
- **Équipe Développement** - Implementation technique

## 📄 Licence

© 2025 QUUBE IA Santé. Tous droits réservés.

---

**Pour toute question sur ce projet, contactez : contact@quube.fr**
