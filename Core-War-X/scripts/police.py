import os
import random
import time
import logging
import yaml
from datetime import datetime, timedelta
from death_or_alive_verificator import DeathVerificator

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

class Police:
    def __init__(self, config_path, warzone_path):
        self.config_path = config_path
        self.warzone_path = warzone_path
        self.config = self.load_config()
        self.verificator = DeathVerificator(warzone_path)
        
    def load_config(self):
        """Load police configuration from YAML file"""
        try:
            with open(self.config_path, 'r') as f:
                return yaml.safe_load(f)
        except Exception as e:
            logger.error(f"Error loading config: {str(e)}")
            return {"deletion_probability": 0.7, "scan_interval": 1800}
    
    def scan_arena(self):
        """Scan the arena and potentially eliminate players"""
        try:
            logger.info("Police scan starting...")
            players = self.verificator.verify_all()
            
            for player_id, status in players.items():
                if status["alive"]:
                    if random.random() < self.config["deletion_probability"]:
                        if self.verificator.kill_player(player_id):
                            logger.info(f"Police eliminated player {player_id}")
                    else:
                        logger.info(f"Player {player_id} survived the scan")
            
            logger.info("Police scan completed")
        except Exception as e:
            logger.error(f"Error during police scan: {str(e)}")
    
    def run(self):
        """Run the police scanner at regular intervals"""
        try:
            while True:
                self.scan_arena()
                logger.info(f"Next scan in {self.config['scan_interval']} seconds")
                time.sleep(self.config["scan_interval"])
        except KeyboardInterrupt:
            logger.info("Police scanner stopped")
        except Exception as e:
            logger.error(f"Error in police scanner: {str(e)}")

if __name__ == '__main__':
    police = Police('../configs/police_rules.yaml', '../WarZone')
    police.run()