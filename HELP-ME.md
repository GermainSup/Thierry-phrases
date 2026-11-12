# HELP-ME — Sauvegarde et reprise du projet

Ce document accompagne le dépôt **Thierry-phrases** et sert de guide de reprise pour une personne non experte ou pour une nouvelle conversation ChatGPT.

## 1. Fichiers essentiels

Le projet doit au minimum conserver ensemble :

- `index.html` — portail principal
- `noms.html` — module Français — Les noms
- `calcul.html` — module Calcul mental
- `tables.html` — module Tables de calcul
- `version.json` — contrôle technique des publications et du cache
- `README.md` — description du projet et règles de publication
- `HELP-ME.md` — présent guide de sauvegarde et de reprise

## 2. Source de référence

La branche publique de référence est `main` du dépôt GitHub :

`GermainSup/Thierry-phrases`

Le site GitHub Pages est publié à partir de cette branche.

## 3. Versions fonctionnelles

Les numéros visibles dans les pages sont les versions fonctionnelles des modules.

Lors d'une modification :
- correction très mineure : le numéro peut rester inchangé si cela est décidé explicitement;
- amélioration mineure : incrémenter la décimale, par exemple V18.3 → V18.4;
- évolution importante : incrémenter le numéro principal, par exemple V18.x → V19.

Le numéro visible dans la page concernée et le numéro correspondant dans `version.json` doivent rester cohérents.

## 4. Contrôle technique des mises à jour

`version.json` contient aussi un identifiant technique de publication (`build`).

Lorsqu'une page est ouverte en ligne :
1. elle consulte `version.json` sans utiliser le cache;
2. si une publication plus récente est détectée, elle recharge automatiquement la page avec le nouvel identifiant de build;
3. hors ligne, la vérification est ignorée et une copie déjà disponible dans le navigateur peut continuer à fonctionner, sans garantie permanente.

Le projet n'utilise volontairement pas de service worker afin de conserver une maintenance simple.

## 5. Règle de publication

Pour toute modification non triviale :
1. préparer les changements sur une branche de test;
2. tester le fonctionnement;
3. incrémenter la version fonctionnelle si nécessaire;
4. mettre à jour `version.json`;
5. conserver l'indicateur de version visible au bas de la page;
6. publier sur `main` seulement après validation explicite;
7. vérifier le déploiement GitHub Pages et le contenu effectivement servi.

## 6. Reprise dans une autre conversation ChatGPT

Pour reprendre le projet sans perdre les conventions :
- fournir le dépôt GitHub ou l'ensemble des fichiers essentiels;
- demander de lire d'abord `README.md`, `HELP-ME.md` et `version.json`;
- préciser que les règles de test, publication et versionnement doivent être conservées.

Les mécanismes de contrôle de version ne doivent pas être retirés lors d'une évolution d'un module.

## 7. Sauvegarde locale

Une sauvegarde locale périodique du dépôt complet est recommandée en plus de GitHub.

Dans GitHub :
1. ouvrir le dépôt;
2. choisir **Code**;
3. choisir **Download ZIP**;
4. conserver le ZIP dans un emplacement personnel de sauvegarde, par exemple OneDrive.

Le ZIP doit contenir tous les fichiers du dépôt au moment de la sauvegarde.

## 8. Restauration

En cas de problème :
- GitHub conserve l'historique des commits;
- privilégier la restauration du fichier concerné à partir d'un commit connu plutôt qu'un retour arrière global du dépôt;
- après restauration, créer un nouveau commit et vérifier le déploiement GitHub Pages.

## 9. Principe directeur

Le projet doit rester exploitable par une personne non experte : la gestion technique des versions, du cache et des publications doit être documentée et intégrée aux fichiers du projet, et non dépendre uniquement de la mémoire d'une conversation.
