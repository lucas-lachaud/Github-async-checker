# GitHub Async Checker

Un outil simple pour vérifier le statut des repositories GitHub étoilés.

## Fonctionnalités

- Vérifie si les repos GitHub sont toujours actifs
- Affiche le nombre d'étoiles actuel
- Compare avec le nombre d'étoiles précédent
- Interface web simple avec barre de progression

## Installation

1. Téléchargez les fichiers du projet
2. Ajoutez votre token GitHub dans `github_checker.js` :
   ```javascript
   let githubToken = 'votre_token_ici';
   ```
3. Ouvrez `index.html` dans votre navigateur

## Utilisation

1. Sélectionnez un fichier JSON contenant vos repos étoilés
2. Cliquez sur "Go!" pour démarrer la vérification
3. Les résultats s'affichent avec le statut de chaque repo

## Format des données

Le fichier JSON doit contenir un tableau d'objets avec :
- `url` : URL du repository GitHub
- `description` : Description du projet
- `stars` : Nombre d'étoiles précédent (optionnel)

## Token GitHub

Pour utiliser l'API GitHub, vous devez créer un token personnel sur [GitHub Settings > Developer settings > Personal access tokens](https://github.com/settings/tokens).
