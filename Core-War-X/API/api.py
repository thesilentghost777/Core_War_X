from flask import jsonify, request, Blueprint
import os
import sys
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '../')))
from .base import app, ARENA_CONFIG, POLICE_RULES, WARZONE_PATH

import json
import logging
from datetime import datetime

logger = logging.getLogger(__name__)

api_bp = Blueprint('api', __name__)
@api_bp.route('/example')
def example():
    return 'This is an example'

@app.route('/api/players', methods=['GET'])
def get_players():
    try:
        players = []
        for item in os.listdir(WARZONE_PATH):
            if os.path.isdir(os.path.join(WARZONE_PATH, item)):
                player_file = os.path.join(WARZONE_PATH, f"{item}.txt")
                is_alive = os.path.exists(player_file)
                last_seen = None
                if is_alive:
                    last_seen = datetime.fromtimestamp(
                        os.path.getmtime(player_file)
                    ).isoformat()
                
                players.append({
                    "id": item,
                    "alive": is_alive,
                    "last_seen": last_seen
                })
        
        return jsonify({"players": players})
    except Exception as e:
        logger.error(f"Error getting players: {str(e)}")
        return jsonify({"error": "Failed to get players"}), 500

@app.route('/api/player/<player_id>/status', methods=['GET'])
def get_player_status(player_id):
    try:
        player_dir = os.path.join(WARZONE_PATH, player_id)
        player_file = os.path.join(WARZONE_PATH, f"{player_id}.txt")
        
        if not os.path.exists(player_dir):
            return jsonify({"error": "Player not found"}), 404
            
        is_alive = os.path.exists(player_file)
        last_seen = None
        if is_alive:
            last_seen = datetime.fromtimestamp(
                os.path.getmtime(player_file)
            ).isoformat()
            
        return jsonify({
            "id": player_id,
            "alive": is_alive,
            "last_seen": last_seen
        })
    except Exception as e:
        logger.error(f"Error getting player status: {str(e)}")
        return jsonify({"error": "Failed to get player status"}), 500

@app.route('/api/arena/status', methods=['GET'])
def get_arena_status():
    try:
        total_players = 0
        active_players = 0
        
        for item in os.listdir(WARZONE_PATH):
            if os.path.isdir(os.path.join(WARZONE_PATH, item)):
                total_players += 1
                if os.path.exists(os.path.join(WARZONE_PATH, f"{item}.txt")):
                    active_players += 1
        
        next_police_run = None  # TODO: Implement police schedule tracking
        
        return jsonify({
            "total_players": total_players,
            "active_players": active_players,
            "next_police_run": next_police_run,
            "arena_config": ARENA_CONFIG
        })
    except Exception as e:
        logger.error(f"Error getting arena status: {str(e)}")
        return jsonify({"error": "Failed to get arena status"}), 500

if __name__ == '__main__':
    app.run(debug=True)