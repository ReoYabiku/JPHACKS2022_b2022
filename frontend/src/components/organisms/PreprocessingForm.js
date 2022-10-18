import React from "react";
import CodeGerenateInterface from "./CodeGenerateInterface";

export default function PreprocessingForm() {
  const step = {imgPath:"Services.png", num:3, value:"前処理"};
  const sentenses = [
    "まだ機能不十分です。",
    "学習に使用するカラムを指定してください。"
  ];
  const inputTexts = [
    {label: "そのまま利用するカラム", value: "カラム名1, カラム名2", name: "normalColumns"},
    {label: "One-Hotエンコーディングするカラム", value: "カラム名1, カラム名2", name: "oneHotColumns"}
  ];

  return (
    <CodeGerenateInterface
      imgPath={step.imgPath}
      num={step.num}
      value={step.value}
      sentenses={sentenses}
      inputTexts={inputTexts}
      nextPath="/model"
      endpointPath="/preprocessing"
    />
  );
}