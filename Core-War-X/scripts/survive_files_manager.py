import os
import shutil
import logging
from datetime import datetime

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

class SurviveFilesManager:
    def __init__(self, warzone_path):
        self.warzone_path = warzone_path
        
    def create_survival_file(self, player_id, content=None):
        """Create a new survival file for a player"""
        try:
            file_path = os.path.join(self.warzone_path, f"{player_id}.txt")
            
            if content is None:
                content = f"Survival file for {player_id}\nCreated at: {datetime.now().isoformat()}"
            
            with open(file_path, 'w') as f:
                f.write(content)
            
            os.chmod(file_path, 0o644)
            logger.info(f"Created survival file for player {player_id}")
            return True
        except Exception as e:
            logger.error(f"Error creating survival file: {str(e)}")
            return False
    
    def backup_survival_file(self, player_id):
        """Create a backup of a player's survival file"""
        try:
            source = os.path.join(self.warzone_path, f"{player_id}.txt")
            if not os.path.exists(source):
                logger.error(f"No survival file found for player {player_id}")
                return False
            
            timestamp = datetime.now().strftime('%Y%m%d_%H%M%S')
            backup = os.path.join(self.warzone_path, player_id, f".backup_{timestamp}")
            
            shutil.copy2(source, backup)
            logger.info(f"Created backup for player {player_id}")
            return True
        except Exception as e:
            logger.error(f"Error backing up survival file: {str(e)}")
            return False
    
    def restore_from_backup(self, player_id):
        """Restore a player's survival file from the latest backup"""
        try:
            backup_dir = os.path.join(self.warzone_path, player_id)
            backups = [f for f in os.listdir(backup_dir) if f.startswith('.backup_')]
            
            if not backups:
                logger.error(f"No backups found for player {player_id}")
                return False
            
            latest_backup = max(backups)
            source = os.path.join(backup_dir, latest_backup)
            target = os.path.join(self.warzone_path, f"{player_id}.txt")
            
            shutil.copy2(source, target)
            logger.info(f"Restored survival file for player {player_id}")
            return True
        except Exception as e:
            logger.error(f"Error restoring from backup: {str(e)}")
            return False
    
    def verify_file_integrity(self, player_id):
        """Verify the integrity of a player's survival file"""
        try:
            file_path = os.path.join(self.warzone_path, f"{player_id}.txt")
            
            if not os.path.exists(file_path):
                return False
            
            # Add additional integrity checks here if needed
            return True
        except Exception as e:
            logger.error(f"Error verifying file integrity: {str(e)}")
            return False

if __name__ == '__main__':
    manager = SurviveFilesManager('../WarZone')
    manager.create_survival_file('test_player')