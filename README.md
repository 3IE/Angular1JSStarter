# Javascript Angular Starter v0.1 #

Build : [![Build Status](https://travis-ci.org/3IE/AngularStarter.svg)](https://travis-ci.org/3IE/AngularStarter) [![Build status](https://ci.appveyor.com/api/projects/status/xyvd3opvueomvtuj?svg=true)](https://ci.appveyor.com/project/BenoitVerdier/angularstarter)

Dependecies : [![devDependency Status](https://david-dm.org/3IE/AngularStarter/dev-status.svg)](https://david-dm.org/3IE/AngularStarter/#info=devDependencies)  

## Installation ##
### Les prérequis sont: ###

* [Npm (NodeJS)](http://nodejs.org)

* [Bower](http://www.bower.io)

* [Serveur Web](http://wiki.3ie.fr/index.php/Server_config_guidelines)

Une fois ces prérequis installés, pour initialiser la solution il faut aller dans le répertoire de la solution et faire:


```
#!shell

npm install
```


## Développement ##

Tous les développements doivent être fait dans le répertoire app.

Pour les composants js externes essayer toujours de les récupérer sur bower et si il n'existe pas dessus alors vous pouvez les installés dans le répertoire externalJS.

*Attention il ne doit servir que dans ce cas bien précis.*

Pour ajouter un package et l'enregistrer dans le fichier de config de bower il faut faire:


```
#!shell

bower install <nom-du-package> --save-dev
```


## Tests unitaires et couverture de code ##

Dans cette solution les tests unitaires sont obligatoires pour pouvoir déployer la solution sur un serveur de dev ou de prod.

Pour les réalisés vous avez accès aux fichiers de tests dans le répertoire test/unit/app/.

*Attention le déploiement ne se fera pas si vous votre couverture de code n'est pas assez haute.
*

## Commandes utiles ##

Compiler le site pour un serveur de dev:


```
#!shell

npm run debug
```

Compiler le site pour un serveur de prod ou preprod:


```
#!shell

npm run release
```

Lancer les tests unitaires et la couverture de code sur le site:


```
#!shell

npm run test
```

# Liens utiles #

test du site sur son environnement local:

```
#!HTML

http://localhost/ ou http://localhost/app
```

test du site en mode debug:

```
#!HTML

http://localhost/build/debug/ou http://localhost/build/debug/app
```

test du site en mode release:

```
#!HTML

http://localhost/build/release
```

page affichant les résultats de la couverture de code:

```
#!HTML

http://localhost/test/ ou http://localhost/test/coverage/app/
```

page affichant les résultats des tests unitaires:

```
#!HTML

http://localhost/test/coverage/app/units.html
```