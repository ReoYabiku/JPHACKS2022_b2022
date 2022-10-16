from flask import *
from flask_cors import CORS

# import json

app = Flask(__name__)
CORS(app)

@app.route("/", methods=["GET"])
def hello_world():
    # return json.dumps([{"message":"Hello, World!"}], indent=2)
    json = {
        "users":[
            {
                "id": 1,
                "title": "Takeshi",
                "height": 168
            },
            {
                "id": 2,
                "title": "Hiroki",
                "height": 178
            }
        ]
    }
    return jsonify(json["users"])

# fetch('http://localhost:5000').then(res => res.json()).then(data => console.log(data["users"]))
# でアクセスできる