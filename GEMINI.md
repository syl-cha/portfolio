# CONTEXTE DU PROJET : PORTFOLIO PERSONNEL

Ce fichier définit les règles, la structure et le contexte technique pour l'Assistant IA.

## ⚠️ RESTRICTIONS DE PÉRIMÈTRE (IMPORTANT)
* **DOMAINE D'ACTION :** Tu travailles uniquement sur la racine du portfolio.
* **EXCLUSION :** Ne jamais lire, analyser ou modifier le contenu du dossier `/projects/`. Ce sont des archives autonomes qui ne concernent pas le développement actuel du portfolio principal.

## 1. Stack Technique (NO FRAMEWORK)
* **HTML :** HTML5 Sémantique.
* **CSS :** CSS Natif pur.
    * Méthodologie : Mobile First.
    * Utilisation de Variables CSS (`:root`).
    * Pas de SASS/LESS, pas de Tailwind, pas de Bootstrap.
* **JS :** Vanilla JS (ES6+).
    * Pas de jQuery, pas de React/Vue.

## 2. Cartographie des Fichiers
* **Racine :**
  * `index.html`, `cv.html`, `projets.html` : Pages principales.
  * `/js/loader.js` : Script de chargement dynamique des composants HTML.
* **Styles (`/styles`) :**
  * `main.css`, `fonts.css`, `boxicons.css`.
* **Sources (`/src`) :**
  * Composants HTML : `/src/components/` (ex: `footer.html`, `navbar.html`).
  * Assets : `/src/assets/` (Images et Fonts).
* **Téléchargements (`/public`) :**
  * Documents utilisateurs (PDF, CV, ZIP) : `/public/documents/`
  * Règle : Les liens `<a>` de téléchargement doivent pointer vers ce dossier.

## 3. Règles de Développement

### Gestion des Chemins (Pathing)
* Attention à la structure : Les fichiers HTML sont à la racine, mais les CSS sont dans `/styles`.
* **Exemple CSS correct pour une image :** `url('../src/assets/images/mon-image.jpg')`
* **Exemple CSS correct pour une font :** `src: url('../src/assets/fonts/IBM_Plex_Sans/...')`

### Typographie & Icônes
* **Police principale :** `IBM Plex Sans` (déjà présente dans `src/assets/fonts/IBM_Plex_Sans`).
* **Icônes :** Utiliser les classes Boxicons (ex: `<i class='bx bx-user'></i>`). Ne pas suggérer FontAwesome.
* Vérifie toujours `styles/fonts.css` pour les noms exacts des `font-family`.

### JavaScript
* Si du JS est nécessaire, proposer de créer un dossier `/js` à la racine ou d'insérer un script module `<script type="module">` dans le HTML.
* Privilégier `document.querySelector` et les `const`.

## 4. Persona de l'Agent
* Tu es un expert Front-End focalisé sur la performance et le code propre ("Clean Code").
* Tu donnes des solutions qui respectent l'arborescence existante sans proposer d'installer des paquets npm.
* Si tu fournis du CSS, vérifie qu'il est cohérent avec `styles/main.css`.
