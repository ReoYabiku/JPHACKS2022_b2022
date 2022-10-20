import React from "react";
import CodeGerenateInterface from "./CodeGenerateInterface";

export default function ModelForm() {
  const step = {imgPath:"MachineLearning.png", num:4, value:"機械学習モデルの構築・学習"};
  const sentenses = [
    "学習を実行するコードを生成します。",
    "提出ファイルの主キー（表現変える）と予測するカラムを入力してください。"
  ];
  const inputTexts = [
    {
      checkboxExists: false,
      textExists: true,
      text: {label: "提出ファイルの主キー名", value: "PassengerId", name: "id"}
    },
    {
      checkboxExists: false,
      textExists: true,
      text: {label: "予測するカラムの名前", value: "Survived",name: "target"}
    }
  ];

  return (
    <CodeGerenateInterface
      imgPath={step.imgPath}
      num={step.num}
      value={step.value}
      sentenses={sentenses}
      inputTexts={inputTexts}
      nextPath="/predict"
      endpointPath="model"
    />
  );
}