from flask import Flask, jsonify, request
from scripts.survive_files_manager import create_survive_file, delete_survive_file
from scripts.death_or_alive_verificator import check_alive_status

app = Flask(__name__)

@app.route('/register', methods=['POST'])
def register_player():
    player_id = request.json.get('player_id')
    if create_survive_file(player_id):
        return jsonify({'message': f'Joueur {player_id} enregistré avec succès'}), 201
    return jsonify({'error': 'Erreur lors de l\'enregistrement du joueur'}), 400

@app.route('/attack', methods=['POST'])
def attack():
    attacker_id = request.json.get('attacker_id')
    target_id = request.json.get('target_id')
    if delete_survive_file(target_id):
        return jsonify({'message': f'{target_id} a été attaqué avec succès'}), 200
    return jsonify({'error': 'Échec de l\'attaque'}), 400

@app.route('/status', methods=['GET'])
def status():
    """Retourne l'état des joueurs dans l'arène."""
    alive_players = check_alive_status()
    return jsonify({'players': alive_players}), 200

if __name__ == '__main__':
    app.run(debug=True)