
# GitHub Async Checker
<img width="1283" height="469" alt="image" src="https://github.com/user-attachments/assets/5c4c6506-7c1e-495e-b66f-5e65cf5063e8" />
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
3. Démarrez un serveur local :
   ```bash
   python3 -m http.server --bind 127.0.0.1 5000
   ```
4. Ouvrez `http://127.0.0.1:5000` dans votre navigateur

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

