#!/bin/bash

# Créer la racine du projet
mkdir -p Core-War-X/{API,WarZone,WarZoneWeb,scripts,configs}

# Créer les scripts dans le dossier scripts
touch Core-War-X/scripts/death_or_alive_verificator.py
touch Core-War-X/scripts/player_env_generator.py
touch Core-War-X/scripts/police.py
touch Core-War-X/scripts/shell_manager.py
touch Core-War-X/scripts/survive_files_manager.py

# Créer les fichiers de configuration dans configs
touch Core-War-X/configs/arena_config.yaml
touch Core-War-X/configs/police_rules.yaml

# Créer le dossier de documentation
mkdir docs
touch docs/description.md

# Créer le README principal
touch README.md

echo "✅ Arborescence Core-War-X créée avec succès !"
