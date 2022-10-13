from flask import *
from flask_cors import CORS

# import json

app = Flask(__name__)
CORS(app)

@app.route("/", methods=["GET"])
def hello_world():
    # return json.dumps([{"message":"Hello, World!"}], indent=2)
    return jsonify({"language": "python"})