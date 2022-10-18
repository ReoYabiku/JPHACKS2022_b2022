import React from "react";
import StepTitle from "../atoms/StepTitle";
import "./PathForm.css";
import InputUnit from "../atoms/InputUnit";

export default function PathForm() {
  const step = {path:"/set_path", imgPath:"DataQuality.png", num:1, value:"データファイルの指定"};
  const sentenses = [
    "はじめに、trainデータとtestデータが位置するパスを指定します。",
    "実行ファイルからtrain, testデータへの相対パスを記入してください。",
    "「コードを生成」ボタンを押すと、指定したデータを取得するコードが表示されます。",
    "jupyterなどのノートブックに貼り付けて実行してください。"
  ];

  return (
    <div className="set-path-container">
      <div className="set-path-title">
        <StepTitle imgPath={step.imgPath} num={step.num} value={step.value} />
      </div>
      <div className="set-path-wrapper">
        {sentenses.map((sentense, i) => <p className="set-path-sentense" key={i}>{sentense}</p>)}
        <InputUnit label="trainファイルへの相対パス" value="./data/train.csv" />
        <InputUnit label="testファイルへの相対パス" value="./data/test.csv" />
      </div>
    </div>
  );
}