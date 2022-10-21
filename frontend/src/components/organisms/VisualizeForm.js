import React from "react";
import CodeGerenateInterface from "./CodeGenerateInterface";

export default function VisualizeForm() {
  const step = {imgPath:"Analytics.png", num:2, value:"データの概観・可視化"};
  const sentenses = [
    "相関行列のヒートマップを表示してみましょう。相関行列とは各成分に対応する相関係数を並べた行列のことであり、値の大小に応じて色をつけたものをヒートマップと呼びます。この図を表示することによって、変数間の相関の強さを一目で把握することができます"
  ];
  const inputTexts = [
    {
      checkboxExists: false,
      textExists: false,
    },
  ];

  return (
    <CodeGerenateInterface
      imgPath={step.imgPath}
      num={step.num}
      value={step.value}
      sentenses={sentenses}
      inputTexts={inputTexts}
      nextPath="/preprocessing"
      endpointPath="visualize"
    />
  );
}