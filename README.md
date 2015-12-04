# Javascript Angular Starter v0.2 #

Build : 
[![Build Status](https://travis-ci.org/3IE/AngularStarter.svg)](https://travis-ci.org/3IE/AngularStarter) 
[![Build status](https://ci.appveyor.com/api/projects/status/xyvd3opvueomvtuj?svg=true)](https://ci.appveyor.com/project/BenoitVerdier/angularstarter)

Dependecies : [![devDependency Status](https://david-dm.org/3IE/AngularStarter/dev-status.svg)](https://david-dm.org/3IE/AngularStarter/#info=devDependencies)  

## Installation ##
### Les prérequis sont: ###

* [Npm (NodeJS)](http://nodejs.org)

* [Bower](http://www.bower.io)

* [Serveur Web](http://wiki.3ie.fr/index.php/Server_config_guidelines)

Une fois ces prérequis installés, pour initialiser la solution il faut aller dans le répertoire de la solution et faire:


```
$ npm install
```


## Développement ##

Tous les développements doivent être fait dans le répertoire app.

Pour les composants js externes essayer toujours de les récupérer sur bower et si il n'existe pas dessus alors vous pouvez les installés dans le répertoire externalJS.

*Attention il ne doit servir que dans ce cas bien précis.*

Pour ajouter un package et l'enregistrer dans le fichier de config de bower il faut faire:


```
$ bower install <nom-du-package> --save-dev
```


## Tests unitaires ##

Dans cette solution les tests unitaires sont obligatoires pour pouvoir déployer la solution.

Pour les réaliser vous avez accès aux fichiers de tests dans le répertoire test/unit/.

## Commandes utiles ##

Compiler le site 

```
$ grunt build
```

Lancer la vérification du code et les tests unitaires :


```
$ grunt test
```

# Liens utiles #

test du site sur son environnement local:

```
$ grunt web
```
