import os
import subprocess
import logging
import yaml

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

class ShellManager:
    def __init__(self, warzone_path):
        self.warzone_path = warzone_path
        
    def verify_player_access(self, player_id):
        """Verify if a player should have shell access"""
        try:
            player_file = os.path.join(self.warzone_path, f"{player_id}.txt")
            return os.path.exists(player_file)
        except Exception as e:
            logger.error(f"Error verifying player access: {str(e)}")
            return False
    
    def setup_shell_environment(self, player_id):
        """Set up the shell environment for a player"""
        try:
            if not self.verify_player_access(player_id):
                logger.error(f"Player {player_id} does not have access")
                return False
            
            player_dir = os.path.join(self.warzone_path, player_id)
            bashrc_path = os.path.join(player_dir, '.bashrc')
            
            # Create custom .bashrc
            with open(bashrc_path, 'w') as f:
                f.write(f"""
# Core War Ghost shell configuration
export PS1="[{player_id}@arena]$ "
export PATH="/usr/local/bin:/usr/bin:/bin"
export WARZONE_PATH="{self.warzone_path}"
export PLAYER_ID="{player_id}"

# Restrict certain commands
alias sudo='echo "Command not allowed"'
alias su='echo "Command not allowed"'

# Auto-check survival file
check_survival() {{
    if [ ! -f "$WARZONE_PATH/{player_id}.txt" ]; then
        echo "WARNING: Survival file not found!"
        return 1
    fi
}}

# Run survival check before each command
PROMPT_COMMAND="check_survival"
""")
            
            logger.info(f"Shell environment set up for player {player_id}")
            return True
        except Exception as e:
            logger.error(f"Error setting up shell environment: {str(e)}")
            return False
    
    def grant_shell_access(self, player_id):
        """Grant shell access to a player"""
        try:
            if not self.verify_player_access(player_id):
                return False
            
            if not self.setup_shell_environment(player_id):
                return False
            
            # Start restricted shell
            shell_cmd = f"chroot {self.warzone_path}/{player_id} /bin/bash --rcfile .bashrc"
            subprocess.run(shell_cmd, shell=True)
            return True
        except Exception as e:
            logger.error(f"Error granting shell access: {str(e)}")
            return False

if __name__ == '__main__':
    manager = ShellManager('../WarZone')
    manager.grant_shell_access('test_player')