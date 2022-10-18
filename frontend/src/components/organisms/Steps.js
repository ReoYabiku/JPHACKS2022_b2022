import React from "react";
import Step from "../molecules/Step";
import "./Steps.css";

export default function Steps() {
  const steps = [
    {path:"/set_path", imgPath:"DataQuality.png", num:1, value:"データファイルの指定"},
    {path:"/about", imgPath:"Analytics.png", num:2, value:"データの概観・可視化"},
    {path:"/about", imgPath:"Services.png", num:3, value:"前処理"},
    {path:"/about", imgPath:"MachineLearning.png", num:4, value:"機械学習モデルの構築・学習"},
    {path:"/about", imgPath:"SubmitDocument.png", num:5, value:"予測の出力・提出"}
  ];

  const whichSide = num => {
    if (num % 2 === 0) {
      return "step-right";
    } else {
      return "step-left";
    }
  };

  return (
    <>
      {steps.map(step => {
        return (
          <div key={step.value} className={whichSide(step.num)}>
            <Step
              path={step.path}
              imgPath={step.imgPath}
              num={step.num}
              value={step.value}
            />
          </div>
        )
      })}
    </>
  );
}
