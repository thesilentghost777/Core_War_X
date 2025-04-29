import os

def check_alive_status():
    """Vérifie les fichiers de survie et retourne la liste des joueurs vivants."""
    alive_players = []
    for filename in os.listdir('WarZone'):
        if filename.endswith('.txt'):  # Supposons que les fichiers de survie sont des .txt
            alive_players.append(filename[:-4])  # Retire l'extension
    return alive_players