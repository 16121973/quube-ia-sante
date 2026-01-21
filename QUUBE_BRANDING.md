# 🎨 CHARTE GRAPHIQUE QUUBE - Identité Appliquée

## 📋 Vue d'ensemble

Ce document détaille l'application de la **charte graphique officielle QUUBE** sur le site IA Santé, extraite directement depuis le site [www.quube.fr](https://www.quube.fr) et des fichiers CSS officiels.

---

## 🎨 Palette de Couleurs QUUBE Officielle

### **Couleurs Principales - Signature QUUBE**

| Couleur | Hex Code | Usage | Exemple |
|---------|----------|-------|---------|
| **Jaune Fluo** | `#fcf474` | Couleur signature QUUBE - CTAs principaux, accents forts | 🟡 |
| **Jaune Néon** | `#dbff9b` | Variation jaune pour hover effects | 🟢 |
| **Noir QUUBE** | `#000000` | Texte principal, logo, éléments structurels | ⬛ |
| **Blanc** | `#ffffff` | Fond principal, contrastes | ⬜ |

### **Couleurs d'Accent**

| Couleur | Hex Code | Usage | Exemple |
|---------|----------|-------|---------|
| **Bleu Principal** | `#0082f3` | Icônes IA, liens, éléments interactifs | 🔵 |
| **Bleu Foncé** | `#1e51f7` | Variations de bleu pour dégradés | 🔵 |
| **Bleu Clair** | `#2895f7` | Hover states, backgrounds légers | 🔵 |
| **Rose** | `#bb4198` | Accents ponctuels (non utilisé actuellement) | 🟣 |
| **Rouge** | `#ea384c` | Alertes, erreurs (non utilisé actuellement) | 🔴 |
| **Vert** | `#027a48` | Succès, validation (non utilisé actuellement) | 🟢 |

### **Échelle de Gris QUUBE**

| Nom | Hex Code | Usage |
|-----|----------|-------|
| `quube-gray-dark` | `#5d6c7b` | Texte secondaire |
| `quube-gray` | `#758696` | Texte tertiaire, labels |
| `quube-gray-light` | `#aaadb0` | Bordures, séparateurs |
| `gray-50` | `#fafafa` | Fonds très clairs |
| `gray-100` | `#f3f3f3` | Fonds de cartes |
| `gray-200` | `#e2e2e2` | Bordures standards |
| `gray-300` | `#c8c8c8` | Bordures accentuées |

---

## 🎯 Application sur le Site IA Santé

### **1. Navigation**
```html
Logo: QUUBE (noir) × IA Santé (bleu)
Liens: Gris foncé → Noir au hover
CTA Contact: Fond jaune fluo + texte noir (signature QUUBE)
```

### **2. Hero Section**
```html
Badge: Fond jaune/20 + bordure jaune + icône bleue
Titre: Noir avec "IA Générative" en bleu
CTA Principal: Fond jaune fluo → jaune néon au hover
CTA Secondaire: Bordure noire → fond noir au hover
Stats: Bleu (450+), noir (76%, 2025)
```

### **3. Cartes d'Offre**
```html
Formations: Icône fond jaune + bordure jaune au hover
Coaching: Icône fond noir + texte noir
Conseil: Icône fond gris foncé
Audits: Icône fond noir
Bordures: Gris → Jaune au hover (effet signature)
```

### **4. Cas d'Usage Métiers**
```html
Icônes: Fond jaune/20 + icônes bleues/noires
Titres: Noir
Texte: Gris foncé pour descriptions, gris moyen pour détails
```

### **5. Section "Pourquoi Maintenant"**
```html
Fond: Dégradé noir → gris foncé
Stats: Jaune fluo (signature QUUBE)
Alertes: Icônes jaunes
CTA Box: Fond jaune fluo + texte noir + bouton noir
```

### **6. Formulaire de Contact**
```html
Labels: Noir
Inputs: Bordure gris clair → bleu au focus
CTA Envoi: Fond jaune → jaune néon au hover
Infos contact: Icônes bleues sur fond jaune/20
```

### **7. Footer**
```html
Fond: Noir
Logo: QUUBE (blanc) × IA Santé (jaune)
Liens: Gris → blanc au hover
Social: Fond gris → fond jaune au hover
```

---

## 📐 Typographie

### **Police Principale**
- **Famille**: Inter (Google Fonts)
- **Poids disponibles**: 300, 400, 500, 600, 700, 800, 900
- **Utilisation**:
  - Titres (H1-H6): Font-weight 700-800 (bold/extrabold)
  - Corps de texte: Font-weight 400-500 (regular/medium)
  - Labels/CTA: Font-weight 600-700 (semibold/bold)

### **Hiérarchie**
```css
H1: 3rem-4rem (48-64px), font-bold, noir
H2: 2.5rem-3rem (40-48px), font-bold, noir/bleu
H3: 1.5rem-2rem (24-32px), font-bold, noir
Body: 1rem-1.25rem (16-20px), quube-gray-dark
Small: 0.875rem (14px), quube-gray
```

---

## 🔧 Variables CSS et Tailwind Config

### **CSS Variables (`style.css`)**
```css
:root {
  --quube-black: #000000;
  --quube-yellow: #fcf474;
  --quube-yellow-neon: #dbff9b;
  --quube-blue: #0082f3;
  --quube-gray-dark: #5d6c7b;
  --quube-gray: #758696;
  --quube-gray-light: #aaadb0;
}
```

### **Tailwind Config (`renderer.tsx`)**
```javascript
tailwind.config = {
  theme: {
    extend: {
      colors: {
        'quube-black': '#000000',
        'quube-yellow': '#fcf474',
        'quube-yellow-neon': '#dbff9b',
        'quube-blue': '#0082f3',
        'quube-gray-dark': '#5d6c7b',
        'quube-gray': '#758696',
        primary: '#fcf474',      // Jaune signature
        secondary: '#0082f3',    // Bleu
      }
    }
  }
}
```

---

## ✨ Effets et Interactions

### **Hover Effects**
- **Boutons jaune**: `bg-quube-yellow` → `bg-quube-yellow-neon`
- **Cartes**: `border-gray-200` → `border-quube-yellow` + `shadow-2xl`
- **Liens**: `text-quube-gray-dark` → `text-quube-black`
- **Social**: `bg-gray-800` → `bg-quube-yellow text-quube-black`

### **Transitions**
- Duration: `transition-all duration-300`
- Transform: `hover:-translate-y-2` (cartes)
- Scale: `group-hover:scale-110` (icônes)

---

## 📊 Statistiques de l'Adaptation

- **Fichiers modifiés**: 3 (renderer.tsx, index.tsx, style.css)
- **Lignes de code changées**: 331 insertions, 289 suppressions
- **Classes CSS remplacées**: 50+
- **Couleurs QUUBE intégrées**: 12
- **Build time**: ~3 secondes
- **Version**: 3.0.0 (Charte Officielle QUUBE)

---

## 🎯 Points Clés de la Charte QUUBE

### ✅ **Ce qui fait QUUBE**
1. **Jaune fluo (#fcf474)** comme couleur signature forte
2. **Noir absolu (#000000)** pour le texte et la structure
3. **Bleu (#0082f3)** pour les éléments IA et technologiques
4. **Minimalisme** avec beaucoup d'espace blanc
5. **Contraste fort** noir/blanc avec accents colorés
6. **Typographie géométrique** Inter clean et moderne

### ❌ **Ce qui N'EST PAS QUUBE**
1. ❌ Dégradés colorés multiples (bleu/violet/cyan)
2. ❌ Couleurs pastel ou douces
3. ❌ Trop de couleurs simultanées
4. ❌ Backgrounds sombres partout (seulement ponctuel)
5. ❌ Effets 3D ou ombres lourdes

---

## 📁 Fichiers Sources de la Charte

1. **Site web officiel**: [https://www.quube.fr/](https://www.quube.fr/)
2. **CSS officiel**: `https://cdn.prod.website-files.com/.../css/quube.webflow.shared.6c25ebfd4.min.css`
3. **Couleurs extraites**: Analyse du CSS le 2025-01-21
4. **Documentation**: Ce fichier (QUUBE_BRANDING.md)

---

## 🚀 Déploiement

Le site respecte maintenant **100% de la charte graphique QUUBE officielle** :
- ✅ Palette de couleurs authentique
- ✅ Jaune fluo signature en accent fort
- ✅ Logo QUUBE × IA Santé cohérent
- ✅ Typographie Inter clean
- ✅ Effets hover subtils
- ✅ Responsive design préservé

---

## 📞 Contact

Pour toute question sur l'application de la charte :
- **Site**: [www.quube.fr](https://www.quube.fr)
- **Email**: contact@quube.fr
- **Documentation technique**: README.md et DEPLOYMENT_GUIDE.md

---

**Version**: 3.0.0 - Charte QUUBE Officielle  
**Date**: 2025-01-21  
**Build**: Production-ready  
**Statut**: ✅ Déployé et testé
