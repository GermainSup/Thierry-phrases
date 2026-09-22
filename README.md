# Exercices éducatifs interactifs — français et mathématiques

Portail d’exercices éducatifs interactifs destiné à l’apprentissage du français et du calcul.

## Modules actuels

- **Français — Les noms**
  - 150 activités
  - 3 niveaux de difficulté
  - identification des noms propres et communs
  - singulier et pluriel
  - masculin et féminin
  - correction immédiate, historique et statistiques

- **Calcul mental**
  - addition, soustraction, multiplication et division
  - nombre maximal et nombre de questions paramétrables
  - points, séries de bonnes réponses, historique et statistiques
  - chronométrage des sessions

- **Tables de calcul**
  - tables de 1 à 10
  - addition, soustraction, multiplication et division
  - mode séquentiel ou aléatoire
  - résultats, points, historique et temps requis

- **Portail**
  - accès centralisé aux trois exercices

> La version courante de chaque module est affichée au bas de sa page.

## Accès à l’application

https://germainsup.github.io/Thierry-phrases/

## Organisation du dépôt

- `index.html` — portail
- `noms.html` — français : les noms
- `calcul.html` — calcul mental
- `tables.html` — tables de calcul

## Versions et retour arrière

Chaque modification publiée est conservée dans l’historique GitHub des commits. Une version antérieure d’un module peut donc être restaurée sans nécessairement modifier les autres modules.

Les numéros de version affichés au bas des pages servent à vérifier rapidement la version chargée dans le navigateur. Ils sont indépendants des identifiants techniques de commits GitHub.

## Contrôle de version et mise à jour

Le portail utilise un contrôle de version léger, sans service worker.

- Chaque page affiche sa version courante au bas de l’écran.
- Le fichier `version.json` contient un identifiant technique de publication pour le portail et chaque module.
- Lorsqu’une page est ouverte avec une connexion Internet, elle vérifie cet identifiant directement sur GitHub Pages en contournant le cache du navigateur.
- Si une publication plus récente existe, la page se recharge automatiquement avec un identifiant de build afin d’éviter d’utiliser une ancienne copie en cache.
- Sans connexion Internet, cette vérification est simplement ignorée et le navigateur peut continuer à utiliser une copie déjà disponible en cache, sans garantie de conservation permanente.

Ce mécanisme vise à rendre les mises à jour transparentes sur les principaux navigateurs tout en gardant le projet simple à maintenir. Lors d’une publication, le fichier `version.json` doit être mis à jour avec le ou les modules modifiés.

## Règle de publication

Lors de toute évolution du portail ou d’un module :

1. Préparer et tester les changements avant publication pour toute modification non triviale.
2. Incrémenter le numéro de version fonctionnelle lorsque la modification le justifie.
3. Conserver l’affichage de la version fonctionnelle au bas de chaque page.
4. Mettre à jour `version.json` avec la version fonctionnelle concernée et un nouvel identifiant technique de publication.
5. Ne publier sur `main` qu’après validation explicite.
6. Vérifier après publication que GitHub Pages a été redéployé et que les fichiers publics correspondent bien à la version attendue.

Cette règle fait partie intégrante du projet et doit être respectée même lorsque les modifications sont effectuées dans une autre conversation ou par un autre intervenant.

