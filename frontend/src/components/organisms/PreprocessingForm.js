import React from "react";
import CodeGerenateInterface from "./CodeGenerateInterface";

export default function PreprocessingForm() {
  const step = {imgPath:"Services.png", num:3, value:"前処理"};
  const sentenses = [
    "学習に使用するカラムを指定してください。",
    "そのまま利用するカラムと、one-hotエンコーディングするカラムをそれぞれ選択することができます。"
  ];
  const codeInfos = [
    {
      checkbox: {label: "そのまま使うカラムがある", name: "normalColumnsExist"},
      inputText: {label: "そのまま利用するカラム", value: "カラム名1, カラム名2", name: "normalColumns"}
    },
    {
      checkbox: {label: "One-Hotエンコーディングする", name: "oneHotColumnsExist"},
      inputText: {label: "One-Hotエンコーディングするカラム", value: "カラム名1, カラム名2", name: "oneHotColumns"}
    }
  ];

  return (
    <CodeGerenateInterface
      imgPath={step.imgPath}
      num={step.num}
      value={step.value}
      sentenses={sentenses}
      codeInfos={codeInfos}
      nextPath="/model"
      endpointPath="/preprocessing"
    />
  );
}