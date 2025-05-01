from flask import Flask, render_template, Blueprint
import sys
import os
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '../')))

from API.api import app as api_app
from API.api import api_bp as example_blueprint
app = Flask(__name__)
app.register_blueprint(example_blueprint, url_prefix='/example')
# app.register_blueprint(api_app, url_prefix='/api')

@app.route('/')
def index():
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True, port=5000)
