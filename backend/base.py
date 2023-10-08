from flask import Flask, send_from_directory
from flask_cors import CORS, cross_origin

api = Flask(__name__, static_folder='../frontend/build', static_url_path='')

CORS(api)
@api.route('/home')
@cross_origin()
def home_page():
    response_body = {
        "about": "StreamingBuddy"
    }
    return response_body

@api.route('/')
@cross_origin()
def serve():
    return send_from_directory(api.static_folder, 'index.html')
