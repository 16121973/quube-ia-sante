# 💾 Informations de Sauvegarde - QUUBE IA Santé

## 📦 Sauvegardes Disponibles

### ✅ **Sauvegarde Cloud GenSpark** (RECOMMANDÉ)
- **Date** : 2025-01-21 22:26 UTC
- **Version** : v3.0.0 - Charte QUUBE Officielle
- **URL de téléchargement** : https://www.genspark.ai/api/files/s/37zfAloi
- **Taille** : 167 KB (compressé)
- **Contenu** : Projet complet avec Git, code source, configuration, documentation
- **Validité** : Permanent (stockage cloud GenSpark)

### 📋 **Contenu du Projet Sauvegardé**

```
webapp/
├── src/
│   ├── index.tsx           # Application Hono principale
│   └── renderer.tsx        # Renderer avec config Tailwind
├── public/
│   └── static/
│       └── style.css       # Styles QUUBE officiels
├── .git/                   # Historique Git complet (13 commits)
├── ecosystem.config.cjs    # Configuration PM2
├── wrangler.jsonc          # Configuration Cloudflare
├── package.json            # Dépendances et scripts
├── tsconfig.json           # Configuration TypeScript
├── vite.config.ts          # Configuration Vite
├── README.md               # Documentation principale
├── DEPLOYMENT_GUIDE.md     # Guide de déploiement
├── QUUBE_BRANDING.md       # Documentation charte graphique
├── CHANGELOG_BRANDING.md   # Changelog détaillé
├── BRANDING_SUCCESS.txt    # Récapitulatif visuel
└── BACKUP_INFO.md          # Ce fichier
```

---

## 🔄 Restauration du Projet

### **Méthode 1 : Depuis le Cloud GenSpark**

```bash
# 1. Télécharger l'archive
wget https://www.genspark.ai/api/files/s/37zfAloi -O quube-backup.tar.gz

# 2. Extraire (le projet sera dans home/user/webapp/)
tar -xzf quube-backup.tar.gz

# 3. Naviguer vers le projet
cd home/user/webapp

# 4. Installer les dépendances
npm install

# 5. Build du projet
npm run build

# 6. Lancer en développement
npm run dev
# OU avec PM2 (en production)
pm2 start ecosystem.config.cjs
```

### **Méthode 2 : Clone depuis GitHub** (Une fois poussé)

```bash
# 1. Cloner le repository
git clone https://github.com/VOTRE-USERNAME/quube-ia-sante.git
cd quube-ia-sante

# 2. Installer les dépendances
npm install

# 3. Build
npm run build

# 4. Lancer
npm run dev
```

---

## 🎨 Caractéristiques du Projet Sauvegardé

### **Version : 3.0.0 - Charte QUUBE Officielle**

✅ **Charte Graphique QUUBE** :
- Jaune fluo (#fcf474) - Couleur signature
- Bleu QUUBE (#0082f3) - Éléments IA
- Noir absolu (#000000) - Texte et structure
- Palette complète : 12 couleurs QUUBE officielles

✅ **Fonctionnalités Complètes** :
- Page d'accueil avec hero section IA
- 6 Piliers d'offre (Formations, Coaching, Conseil, Audits, Séminaires, Cas d'usage)
- 6 Cas d'usage métiers (DRH, DAF, DG, Directeurs, Équipes soins/éducatives)
- Formulaire de contact avec API backend
- Section "Pourquoi Maintenant" avec contexte marché
- Footer QUUBE × IA Santé

✅ **Technologies** :
- Hono 4.11.4 (Framework backend)
- Cloudflare Pages (Déploiement)
- TypeScript + Vite
- Tailwind CSS (CDN)
- PM2 (Process management)

✅ **Documentation** :
- README.md complet
- Guide de déploiement Cloudflare
- Documentation charte QUUBE
- Changelog détaillé
- 13 commits Git avec historique

---

## 📊 Informations Techniques

- **Taille totale** : ~60 MB (avec node_modules)
- **Taille source** : 169 KB (sans node_modules)
- **Lignes de code** : ~1500 lignes
- **Commits Git** : 13
- **Build time** : ~4 secondes
- **Bundle size** : 93.06 kB (dist/_worker.js)

---

## 🚀 Déploiement Production

### **Vers Cloudflare Pages** :

```bash
# 1. Setup Cloudflare API key
# Appelez setup_cloudflare_api_key dans GenSpark

# 2. Build
npm run build

# 3. Créer le projet Cloudflare
npx wrangler pages project create quube-ia-sante \
  --production-branch main

# 4. Déployer
npx wrangler pages deploy dist --project-name quube-ia-sante
```

Voir `DEPLOYMENT_GUIDE.md` pour les instructions détaillées.

---

## 📞 Support

- **Documentation technique** : README.md
- **Charte graphique** : QUUBE_BRANDING.md
- **Déploiement** : DEPLOYMENT_GUIDE.md
- **Site QUUBE** : https://www.quube.fr
- **Contact** : contact@quube.fr

---

## ✅ Checklist Post-Restauration

Après restauration du projet, vérifiez :

- [ ] `npm install` réussi
- [ ] `npm run build` réussi
- [ ] Port 3000 libre
- [ ] `pm2 start ecosystem.config.cjs` réussi
- [ ] Site accessible sur http://localhost:3000
- [ ] Formulaire de contact fonctionne
- [ ] Navigation fluide
- [ ] Design QUUBE appliqué (jaune fluo visible)
- [ ] Responsive design OK

---

**Backup créé le** : 2025-01-21 22:26 UTC  
**Version** : 3.0.0  
**Statut** : ✅ Production Ready  
**URL Cloud** : https://www.genspark.ai/api/files/s/37zfAloi
