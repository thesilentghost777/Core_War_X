# Core War Ghost 🎮💀

## Résumé

**Core War Ghost** est un jeu de survie informatique où les joueurs s'affrontent en téléchargeant et exécutant des programmes malveillants dans une arène virtuelle. Le but du jeu est de survivre en cachant, manipulant et protégeant son fichier de survie tout en attaquant ou sabordant les programmes des autres joueurs.

## Mécaniques du jeu

### 1. Téléchargement de fichiers

Chaque joueur télécharge un fichier dans l'Arène pour commencer. Ce fichier peut être écrit dans le langage de son choix (C, Python, Shell, etc.). Tant que ce fichier reste intact, le joueur peut se connecter à son compte sur le serveur via un accès shell.

### 2. Objectif

Le but ultime est de détruire les fichiers des autres joueurs tout en protégeant le sien. Le dernier joueur dont le fichier survit remporte la partie.

### 3. Accès Shell

Chaque joueur a un compte Linux dédié, avec un accès shell limité à son répertoire personnel. Ils peuvent manipuler leurs fichiers, les déplacer, les renommer, ou même utiliser des scripts pour se défendre et attaquer. Cet accès ne dure que tant que le fichier de survie du joueur n'est pas supprimé.

## Éléments clés

### 1️⃣ Le Dossier de l'Arène

- L'Arène est un répertoire virtuel où les joueurs peuvent naviguer.
- Les règles sont simples : Vous ne pouvez ni sortir du répertoire de l'Arène, ni accéder à des fichiers systèmes.
- Déplacements limités : Chaque joueur ne peut déplacer qu’un seul fichier à la fois.

### 2️⃣ Hacks et Stratégies

Les joueurs peuvent hacker leur propre shell et modifier des fichiers comme `.bashrc`, créer des alias ou automatiser des tâches via des scripts pour tromper leurs adversaires. Les actions possibles incluent :

- Modifier les commandes du shell pour fausser les actions d'un autre joueur.
- Créer des fichiers secrets pour les protéger de la suppression.
- Installer des boucles infinies pour rendre l'accès shell difficile.

### 3️⃣ Le "Policier" (Antivirus du Chaos)

Tous les 30 minutes, un script antivirus, appelé "le policier", scanne l'Arène et supprime des fichiers avec une probabilité de 70%. Les joueurs doivent cacher leurs fichiers avant l’arrivée du policier.

### 4️⃣ Supprimer ou Corrompre

Les joueurs peuvent attaquer les fichiers des autres en utilisant des commandes comme `rm`, ou en créant des virus et des scripts malveillants.

### 5️⃣ Système de Compte et Accès

Chaque joueur a un compte unique sur le serveur. Tant qu’il a son fichier de survie, il a accès à un shell complet dans son répertoire personnel.

## Stratégies pour Survivre

- Créer des sauvegardes automatiques de son fichier.
- Distraire et tromper les autres joueurs.
- Utiliser des scripts pour recréer son fichier de survie.

## Règles Supplémentaires et Limitations

- Sortie interdite : Aucun joueur ne peut sortir du répertoire de l'Arène.
- Privilèges limités : Les joueurs ne peuvent pas accéder à des fichiers système ou obtenir les privilèges root.
- Manipulation de fichiers : Chaque joueur peut déplacer, copier et supprimer des fichiers, mais les déplacements doivent être faits un à un.

## Comment Gagner ?

Le dernier joueur dont le fichier de survie reste intact après toutes les attaques et les interventions du policier est le gagnant.

## Conclusion

**Core War Ghost** est un jeu de stratégie, de piratage et de survie où les compétences informatiques sont essentielles. C'est un vrai jeu de guerre mentale et informatique, où chaque erreur peut être fatale.

---

### Installation

1. Clonez le dépôt :
   ```bash
   git clone https://github.com/votre_nom_utilisateur/core-war-ghost.git
   cd core-war-ghost
   ```
2. Installez les dépendances nécessaires (si applicable) :
   ```bash
   pip install -r requirements.txt
   ```
