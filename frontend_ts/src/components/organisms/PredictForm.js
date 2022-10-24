import React from "react";
import CodeGerenateInterface from "./CodeGenerateInterface";

export default function PredictForm() {
  const step = {imgPath:"SubmitDocument.png", num:5, value:"予測の出力・提出"};
  const sentenses = [
    "最後に、予測した結果をCSVファイルとして出力します。",
    "CSVファイルを出力するパスを指定してください。"
  ];
  const inputTexts = [
    {
      checkboxExists: false,
      textExists: true,
      text: {label: "提出ファイルのパス", value: "./submission/lgbm.csv", name: "submission"}
    }
  ];

  return (
    <CodeGerenateInterface
      imgPath={step.imgPath}
      num={step.num}
      value={step.value}
      sentenses={sentenses}
      inputTexts={inputTexts}
      nextPath="/"
      endpointPath="predict"
    />
  );
}