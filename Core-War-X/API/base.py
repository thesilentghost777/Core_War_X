from flask import Flask, jsonify, request
from flask_cors import CORS
import os
import yaml
import subprocess
import logging

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

app = Flask(__name__)
CORS(app)

# Load configurations
with open('configs/arena_config.yaml', 'r') as f:
    ARENA_CONFIG = yaml.safe_load(f)

with open('configs/police_rules.yaml', 'r') as f:
    POLICE_RULES = yaml.safe_load(f)

WARZONE_PATH = 'WarZone'

@app.errorhandler(Exception)
def handle_error(error):
    logger.error(f"An error occurred: {str(error)}")
    return jsonify({"error": str(error)}), 500