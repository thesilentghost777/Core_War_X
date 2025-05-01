import os
import logging
from datetime import datetime
import yaml

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

class DeathVerificator:
    def __init__(self, warzone_path):
        self.warzone_path = warzone_path
        self.players = {}
        self.load_players()
    
    def load_players(self):
        """Load all players from the WarZone directory"""
        try:
            for item in os.listdir(self.warzone_path):
                if os.path.isdir(os.path.join(self.warzone_path, item)):
                    self.players[item] = self.check_player_status(item)
        except Exception as e:
            logger.error(f"Error loading players: {str(e)}")
    
    def check_player_status(self, player_id):
        """Check if a player is still alive"""
        try:
            player_file = os.path.join(self.warzone_path, f"{player_id}.txt")
            is_alive = os.path.exists(player_file)
            last_seen = None
            
            if is_alive:
                last_seen = datetime.fromtimestamp(
                    os.path.getmtime(player_file)
                ).isoformat()
            
            return {
                "alive": is_alive,
                "last_seen": last_seen
            }
        except Exception as e:
            logger.error(f"Error checking player {player_id} status: {str(e)}")
            return {"alive": False, "last_seen": None}
    
    def verify_all(self):
        """Verify the status of all players"""
        try:
            for player_id in self.players:
                self.players[player_id] = self.check_player_status(player_id)
            return self.players
        except Exception as e:
            logger.error(f"Error verifying all players: {str(e)}")
            return {}
    
    def kill_player(self, player_id):
        """Mark a player as dead by removing their file"""
        try:
            player_file = os.path.join(self.warzone_path, f"{player_id}.txt")
            if os.path.exists(player_file):
                os.remove(player_file)
                logger.info(f"Player {player_id} has been eliminated")
                return True
            return False
        except Exception as e:
            logger.error(f"Error killing player {player_id}: {str(e)}")
            return False

if __name__ == '__main__':
    verificator = DeathVerificator('../WarZone')
    print(verificator.verify_all())