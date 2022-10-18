import React from "react";
import CodeGerenateInterface from "./CodeGenerateInterface";

export default function VisualizeForm() {
  const step = {imgPath:"Analytics.png", num:2, value:"データの概観・可視化"};
  const sentenses = [
    "未実装"
  ];

  return (
    <CodeGerenateInterface
      imgPath={step.imgPath}
      num={step.num}
      value={step.value}
      sentenses={sentenses}
      nextPath="/preprocessing"
      endpointPath="tmp"
    />
  );
}