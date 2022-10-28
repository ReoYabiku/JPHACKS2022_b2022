import React from "react";
import CodeGerenateInterface from "./CodeGenerateInterface";

export default function ModelForm() {
  const step = {imgPath:"MachineLearning.png", num:4, value:"機械学習モデルの構築・学習"};
  const sentenses = [
    "学習を実行するコードを生成します。",
    "学習に使用するモデル、提出ファイルの主キーと予測するカラムを入力してください。"
  ];
  const codeInfos = [
    {
      radio: {
        title: "学習に使用するモデル",
        name: "model",
        selects: [
          {label: "LightGBMによる二値分類", name: "lgbmBinary"},
          {label: "Logistic回帰による二値分類", name: "linerBinary"}
        ]
      }
    },
    {
      inputText: {label: "提出ファイルの主キー名", value: "PassengerId", name: "id"}
    },
    {
      inputText: {label: "予測するカラムの名前", value: "Survived",name: "target"}
    }
  ];

  return (
    <CodeGerenateInterface
      imgPath={step.imgPath}
      num={step.num}
      value={step.value}
      sentenses={sentenses}
      codeInfos={codeInfos}
      nextPath="/predict"
      endpointPath="model"
    />
  );
}