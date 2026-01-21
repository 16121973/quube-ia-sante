# Guide de Déploiement - QUUBE IA Santé

Ce guide vous accompagne pas à pas pour déployer votre site sur GitHub et Cloudflare Pages.

## 📋 Pré-requis

- ✅ Compte GitHub actif
- ✅ Compte Cloudflare actif
- ✅ Repository GitHub créé (ou à créer)
- ✅ API Token Cloudflare (à obtenir)

## 🔐 Étape 1 : Configuration GitHub

### 1.1 Configurer l'authentification GitHub

**IMPORTANT** : Avant toute opération GitHub, exécutez cette commande dans votre terminal :

```bash
# Cette commande configure automatiquement Git et GitHub CLI
# Elle utilise vos tokens GitHub stockés dans GenSpark
setup_github_environment
```

**Si la commande échoue** :
1. Rendez-vous dans l'onglet **#github** de GenSpark
2. Autorisez l'accès à votre compte GitHub
3. Configurez GitHub App et OAuth
4. Réessayez la commande `setup_github_environment`

### 1.2 Push vers GitHub

Une fois l'authentification configurée :

```bash
cd /home/user/webapp

# Vérifier l'état Git
git status

# Si vous avez un repository existant
git remote add origin https://github.com/VOTRE-USERNAME/quube-ia-sante.git
git push -f origin main

# Si vous créez un nouveau repository via GitHub CLI
gh repo create quube-ia-sante --public --source=. --remote=origin --push
```

**Note** : Remplacez `VOTRE-USERNAME` par votre nom d'utilisateur GitHub.

## ☁️ Étape 2 : Déploiement Cloudflare Pages

### 2.1 Configurer l'API Cloudflare

**IMPORTANT** : Avant d'utiliser Wrangler, configurez votre API key :

```bash
# Cette commande configure automatiquement CLOUDFLARE_API_TOKEN
setup_cloudflare_api_key
```

**Si la commande échoue** :
1. Rendez-vous dans l'onglet **Deploy** de GenSpark
2. Ajoutez votre Cloudflare API Token
3. Réessayez la commande `setup_cloudflare_api_key`

**Pour obtenir votre API Token Cloudflare** :
1. Connectez-vous à https://dash.cloudflare.com
2. Allez dans **Mon Profil** → **API Tokens**
3. Créez un token avec les permissions **Cloudflare Pages:Edit**
4. Copiez le token et ajoutez-le dans GenSpark Deploy tab

### 2.2 Vérifier l'authentification

```bash
# Cette commande devrait afficher vos informations Cloudflare
npx wrangler whoami
```

### 2.3 Créer le projet Cloudflare Pages

```bash
cd /home/user/webapp

# Créer le projet (utiliser 'main' comme branche de production)
npx wrangler pages project create quube-ia-sante \
  --production-branch main \
  --compatibility-date 2024-01-01
```

**Note** : Si le nom `quube-ia-sante` est déjà pris, essayez :
- `quube-ia-sante-2`
- `quube-ia-sante-prod`
- Ou un autre nom unique

### 2.4 Build et Déploiement

```bash
cd /home/user/webapp

# Build le projet
npm run build

# Déployer sur Cloudflare Pages
npx wrangler pages deploy dist --project-name quube-ia-sante
```

### 2.5 Récupérer les URLs de déploiement

Après le déploiement, vous recevrez :
- **URL de production** : `https://quube-ia-sante.pages.dev`
- **URL de branche** : `https://main.quube-ia-sante.pages.dev`

## 🌐 Étape 3 : Domaine Personnalisé (Optionnel)

Si vous souhaitez utiliser votre domaine `quube.fr` :

```bash
# Ajouter le domaine personnalisé
npx wrangler pages domain add quube.fr --project-name quube-ia-sante

# Ou pour un sous-domaine
npx wrangler pages domain add ia.quube.fr --project-name quube-ia-sante
```

Ensuite, configurez vos DNS chez votre registrar :
- **Type** : CNAME
- **Nom** : @ (pour domaine principal) ou `ia` (pour sous-domaine)
- **Valeur** : `quube-ia-sante.pages.dev`

## 🔄 Étape 4 : Mises à Jour Futures

Pour déployer des mises à jour :

```bash
cd /home/user/webapp

# 1. Faire vos modifications dans le code

# 2. Commit les changements
git add .
git commit -m "Description de vos changements"

# 3. Push vers GitHub
git push origin main

# 4. Build et redéployer sur Cloudflare
npm run build
npx wrangler pages deploy dist --project-name quube-ia-sante
```

## 📊 Étape 5 : Configuration du Formulaire de Contact

Le formulaire de contact nécessite un service d'envoi d'emails. Options recommandées :

### Option 1 : SendGrid (Recommandé)
1. Créez un compte sur https://sendgrid.com
2. Obtenez une API Key
3. Ajoutez-la comme secret Cloudflare :
   ```bash
   npx wrangler pages secret put SENDGRID_API_KEY --project-name quube-ia-sante
   ```
4. Modifiez `/src/index.tsx` pour intégrer SendGrid

### Option 2 : Mailgun
1. Créez un compte sur https://www.mailgun.com
2. Obtenez votre API Key
3. Ajoutez-la comme secret :
   ```bash
   npx wrangler pages secret put MAILGUN_API_KEY --project-name quube-ia-sante
   npx wrangler pages secret put MAILGUN_DOMAIN --project-name quube-ia-sante
   ```

### Option 3 : Service Web (Formspree, etc.)
Utilisez un service tiers qui gère l'envoi d'emails directement depuis le frontend.

## 🔍 Étape 6 : Monitoring et Analytics

### Ajouter Google Analytics
Éditez `/src/renderer.tsx` et ajoutez dans le `<head>` :

```tsx
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"></script>
<script dangerouslySetInnerHTML={{
  __html: `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'GA_TRACKING_ID');
  `
}} />
```

### Cloudflare Web Analytics (Gratuit)
1. Dans votre dashboard Cloudflare, allez dans **Analytics & Logs** → **Web Analytics**
2. Ajoutez votre site
3. Copiez le script d'analytics
4. Ajoutez-le dans le `<head>` du renderer

## ✅ Checklist de Déploiement

Avant de considérer le déploiement comme terminé :

- [ ] ✅ Code pushé sur GitHub
- [ ] ✅ Site déployé sur Cloudflare Pages
- [ ] ✅ URLs de production fonctionnelles
- [ ] ✅ Formulaire de contact testé
- [ ] ✅ Responsive vérifié (mobile, tablette, desktop)
- [ ] ✅ SEO optimisé (meta tags, descriptions)
- [ ] ⏳ Service email configuré (SendGrid/Mailgun)
- [ ] ⏳ Analytics configuré (Google Analytics/Cloudflare)
- [ ] ⏳ Domaine personnalisé configuré (optionnel)

## 🆘 Résolution de Problèmes

### Problème : Erreur d'authentification GitHub
**Solution** : Exécutez `setup_github_environment` et vérifiez l'onglet #github

### Problème : Erreur d'authentification Cloudflare
**Solution** : Exécutez `setup_cloudflare_api_key` et vérifiez l'onglet Deploy

### Problème : Nom de projet déjà pris
**Solution** : Utilisez un nom différent (ex: `quube-ia-sante-2`)

### Problème : Build échoue
**Solution** :
```bash
cd /home/user/webapp
rm -rf dist node_modules
npm install
npm run build
```

### Problème : Le formulaire ne fonctionne pas
**Solution** : Configurez un service email (voir Étape 5)

## 📞 Support

Pour toute question :
- **Email** : contact@quube.fr
- **Documentation Cloudflare** : https://developers.cloudflare.com/pages/
- **Documentation Hono** : https://hono.dev/

---

**Bon déploiement ! 🚀**
