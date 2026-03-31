from flask import Flask, request

app = Flask(__name__)

@app.route('/health-check', methods=['GET'])
def health():
    return "OK"

@app.route('/admin/config', methods=['POST', 'PUT'])
def update_config():
    return "Config Updated"
