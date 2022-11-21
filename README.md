## redux-saga exercise

Cet exercice est tiré d'un exercice de react-academy.
Le but de cet exercice est d'apprendre redux-saga. Il existe des milliers de tutoriels en ligne, mais le meilleur moyen d'apprendre reste de travailler par soi-même sur le problème.

## Requirements
Être à l'aise avec JavaScript (syntaxe ES6, systèmes de modules, classes etc)
Avoir node et npm ou yarn sur sa machine

## How to install

- `git clone git@github.com:lapwil/redux-saga-exercise.git`
- `cd redux-saga-exercise`
- `npm i`
- `npm start`
- `ouvrir http://localhost:3000` et c'est parti


## Exercise

1. Configurer redux-saga dans le fichier de configuration du store src/store/configureStore.dev.js
2. Déplacer et adapter la logique de l'action startSession de src/actions/index.js dans un fichier de saga dans src/sagas/index
3. Déplacer et adapter la logique de l'action fetchBeers  de src/actions/index.js dans un fichier de saga dans src/sagas/index
4. Lancer les tests `npm test`. Il y en a 3 dans src/sagas/index.spec.js. Le premier est implémenté "#Saga: startSession". Il faut alors implémenter les deux autres pour "#Saga: fetchBeers"
5. Implemente un reducer, action et saga pour qu'à chaque fois qu'un utilisateur aime une bière ce soit stocké dans le state. Affiche ensuite la liste des bières likées dans components/Navigations/Menu.jsx à l'endroit indiqué "This is exercise question 5 ;)"
6. Bonus. Migrer le projet vers react 18. Il y aura des changements à faire comme transformer certains states de components en hooks, migrer ainsi certains class components en functionnal components.

## Infos pratiques

Quelques tips sont écrits dans les fichiers et peuvent te guider à remplir l'exercice, j'attend à ce que chaque point de la liste soit accompagné d'une PR, décrivant la démarche que tu as suivie pour compléter l'exercice.
Le fichier n'est pas normé avec les différentes infos que j'avais pu te transmettre lors des précédents exercices, fais en sorte que cela le devienne.

## License

This material is available for private, non-commercial use under the [GPL version 3](http://www.gnu.org/licenses/gpl-3.0-standalone.html).
