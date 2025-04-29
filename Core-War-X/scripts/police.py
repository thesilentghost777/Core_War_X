import os
import random
import time
import yaml

def load_police_rules():
    with open("configs/police_rules.yaml", 'r') as file:
        return yaml.safe_load(file)

def police_action():
    rules = load_police_rules()
    scan_interval = rules['police']['scan_interval']
    delete_probability = rules['police']['delete_probability'] / 100

    while True:
        time.sleep(scan_interval)
        for filename in os.listdir('WarZone'):
            if random.random() < delete_probability:
                os.remove(os.path.join('WarZone', filename))
                print(f"{filename} a été supprimé par le policier.")