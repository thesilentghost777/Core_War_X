import os
import sys
import logging
import random
import string
import shutil

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

class PlayerEnvironmentGenerator:
    def __init__(self, warzone_path):
        self.warzone_path = warzone_path
        
    def generate_player_id(self, length=8):
        """Generate a random player ID"""
        chars = string.ascii_lowercase + string.digits
        return ''.join(random.choice(chars) for _ in range(length))
    
    def create_player_environment(self, player_id=None):
        """Create a new player environment"""
        try:
            if player_id is None:
                player_id = self.generate_player_id()
            
            player_dir = os.path.join(self.warzone_path, player_id)
            player_file = os.path.join(self.warzone_path, f"{player_id}.txt")
            
            # Create player directory
            os.makedirs(player_dir, exist_ok=True)
            
            # Create initial survival file
            with open(player_file, 'w') as f:
                f.write(f"Player {player_id} survival file\n")
            
            # Set appropriate permissions
            os.chmod(player_dir, 0o755)
            os.chmod(player_file, 0o644)
            
            logger.info(f"Created environment for player {player_id}")
            return player_id
        except Exception as e:
            logger.error(f"Error creating player environment: {str(e)}")
            return None
    
    def cleanup_player_environment(self, player_id):
        """Clean up a player's environment"""
        try:
            player_dir = os.path.join(self.warzone_path, player_id)
            player_file = os.path.join(self.warzone_path, f"{player_id}.txt")
            
            if os.path.exists(player_dir):
                shutil.rmtree(player_dir)
            
            if os.path.exists(player_file):
                os.remove(player_file)
            
            logger.info(f"Cleaned up environment for player {player_id}")
            return True
        except Exception as e:
            logger.error(f"Error cleaning up player environment: {str(e)}")
            return False

if __name__ == '__main__':
    generator = PlayerEnvironmentGenerator('../WarZone')
    if len(sys.argv) > 1:
        player_id = generator.create_player_environment(sys.argv[1])
    else:
        player_id = generator.create_player_environment()
    print(f"Created player: {player_id}")