from flask import Flask

api = Flask(__name__)


@api.route('/home')
def home_page():
    response_body = {
        "about": "StreamingBuddy"
    }

    return response_body
