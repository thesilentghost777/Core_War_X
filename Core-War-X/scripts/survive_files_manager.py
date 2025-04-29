import os

ARENA_PATH = 'WarZone'

def create_survive_file(player_id):
    filepath = os.path.join(ARENA_PATH, f"{player_id}.txt")
    if not os.path.exists(filepath):
        with open(filepath, 'w') as f:
            f.write("Fichier de survie de {}".format(player_id))
        return True
    return False

def delete_survive_file(player_id):
    filepath = os.path.join(ARENA_PATH, f"{player_id}.txt")
    if os.path.exists(filepath):
        os.remove(filepath)
        return True
    return False