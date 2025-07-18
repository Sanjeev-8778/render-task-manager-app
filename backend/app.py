from flask import Flask, jsonify, request, send_from_directory
from flask_cors import CORS
import os

app = Flask(__name__, static_folder='build', static_url_path='')
CORS(app)

# Example API route (update this to your app logic)
@app.route('/api/tasks', methods=['GET'])
def get_tasks():
    return jsonify({"tasks": ["Task 1", "Task 2"]})

# Serve React frontend
@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve(path):
    if path != "" and os.path.exists(os.path.join(app.static_folder, path)):
        return send_from_directory(app.static_folder, path)
    else:
        return send_from_directory(app.static_folder, 'index.html')
