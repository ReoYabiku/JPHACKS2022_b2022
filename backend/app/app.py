from flask import *
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/", methods=["GET"])
def hello_world():
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

@app.route("/sample-code", methods=["GET"])
def sample_code():
    json = {
        "codes":[
            "## 必要なライブラリをインポートする",
            "import numpy as np",
            "import pandas as pd",
            "import lightgbm as lgbm"
        ]
    }
    return jsonify(json)