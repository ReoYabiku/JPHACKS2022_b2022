from importlib.metadata import requires
from flask import *
from flask_cors import CORS
import ast
import re

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

@app.route("/dataframe", methods=["POST"])
def dataframe():
    req = ast.literal_eval(request.get_data().decode('utf-8'))
    json = {
        "codes":[
            "## 必要なライブラリをインポートする",
            "import pandas as pd",
            "",
            "train = pd.read_csv('{}')".format(req["train"]),
            "test = pd.read_csv('{}')".format(req["test"])
        ]
    }
    return jsonify(json)

@app.route("/preprocessing", methods=["POST"])
def preprocessing():
    req = ast.literal_eval(request.get_data().decode('utf-8'))

    normal_column_set = ""
    if req["normalColumnsExist"] == "true":
        normal_columns = re.split(', *', req["normalColumns"])
        # normal_column_set = ""
        for i, column in enumerate(normal_columns):
            normal_column_set += "'"
            normal_column_set += column
            if i != len(normal_columns) - 1:
                normal_column_set += "', "
            else:
                normal_column_set += "'"

    one_hot_column_set = ""
    if req["oneHotColumnsExist"] == "true":
        one_hot_columns = re.split(', *', req["oneHotColumns"])
        # one_hot_column_set = ""
        for i, column in enumerate(one_hot_columns):
            one_hot_column_set += "'"
            one_hot_column_set += column
            if i != len(one_hot_columns) - 1:
                one_hot_column_set += "', "
            else:
                one_hot_column_set += "'"
    
    codes = []
    if req["normalColumnsExist"] == "true" and req["oneHotColumnsExist"] == "false":
        codes = [
            "## カラムを限定する",
            "df = df.loc[: ,[{}]]".format(normal_column_set),
        ]
    elif req["normalColumnsExist"] == "false" and req["oneHotColumnsExist"] == "true":
        codes = [
            "## one-hotエンコーディング",
            "df = pd.get_dummies(df.loc[:, [{}]])".format(one_hot_column_set),
        ]
    elif req["normalColumnsExist"] == "true" and req["oneHotColumnsExist"] == "true":
        codes = [
            "## カラムの限定とone-hotエンコーディング",
            "df_part = df_.loc[: ,[{}]]".format(normal_column_set),
            "df_dummy = pd.get_dummies(df.loc[:, [{}]])".format(one_hot_column_set),
            "df = pd.concat([df_part, df_dummy], axis=1)"
        ]

    json = {
        "codes":[
            "## 全データテーブルの作成",
            "N_train = len(train)",
            "df = pd.concat([train, test], axis=0)",
            "",
            *codes,
        ]
    }
    return jsonify(json)

@app.route("/visualize", methods=["POST"])
def visualize():
    json = {
        "codes":[
            "import matplotlib.pyplot as plt",
            "import seaborn as sns",
            "",
            "## 相関行列のヒートマップを作成",
            "sns.heatmap(train.corr(),annot=True,cmap='bwr',linewidths=0.2) ",
            "fig=plt.gcf()",
            "fig.set_size_inches(10,8)",
            "plt.show()"
        ]
    }
    return jsonify(json)

@app.route("/model", methods=["POST"])
def model():
    req = ast.literal_eval(request.get_data().decode('utf-8'))
    json = {
        "codes":[
            "## 予測に使う列",
            "id = test.loc[:, ['{}']]".format(req["id"]),
            "target = train.loc[:, ['{}']]".format(req["target"]),
            "",
            "## LightGBMを用いた学習",
            "import lightgbm as lgbm",
            "model = lgbm.LGBMClassifier()",
            "model.fit(df[:N_train], target)",
            "pred = pd.DataFrame(model.predict(df[N_train:]), columns=['{}'])".format(req["target"])
        ]
    }
    return jsonify(json)

@app.route("/predict", methods=["POST"])
def predict():
    req = ast.literal_eval(request.get_data().decode('utf-8'))
    json = {
        "codes":[
            "## csvファイルの作成",
            "sub = pd.concat([id, pred], axis=1)",
            "sub.to_csv('{}', index=False)".format(req["submission"])
        ]
    }
    return jsonify(json)