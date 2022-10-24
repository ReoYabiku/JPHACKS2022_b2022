import React from "react";
import CodeGerenateInterface from "./CodeGenerateInterface";

export default function PathForm() {
  const step = {imgPath:"DataQuality.png", num:1, value:"データファイルの指定"};
  const sentenses = [
    "はじめに、trainデータとtestデータが位置するパスを指定します。",
    "実行ファイルからtrain, testデータへの相対パスを記入してください。",
    "「コードを生成」ボタンを押すと、指定したデータを取得するコードが表示されます。",
    "jupyterなどのノートブックに貼り付けて実行してください。"
  ];
  const inputTexts = [
    {
      checkboxExists: false,
      textExists: true,
      text: {label: "trainファイルへの相対パス", value: "./data/train.csv", name: "train"}
    },
    {
      checkboxExists: false,
      textExists: true,
      text: {label: "testファイルへの相対パス", value: "./data/test.csv",name: "test"}
    }
  ];

  return (
    <CodeGerenateInterface
      imgPath={step.imgPath}
      num={step.num}
      value={step.value}
      sentenses={sentenses}
      inputTexts={inputTexts}
      nextPath="/visualize"
      endpointPath="dataframe"
    />
  );
}