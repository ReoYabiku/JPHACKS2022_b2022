from flask import Flask
import json

app = Flask(__name__)
app.run(debug=True)

@app.route("/", methods=["GET"])
def hello_world():
    # return json.dumps({"message":"Hello, World!"}, indent=2)
    return "aaa"