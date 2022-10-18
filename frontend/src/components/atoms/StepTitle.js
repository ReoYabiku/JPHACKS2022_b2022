import React from "react";
import "./StepTitle.css";

export default function StepTitle({imgPath = "logo192.png", num = 0, value = ""}) {
  return (
    <div className="step-title-container">
      <img src={imgPath} alt={imgPath} width={"70px"} height={"70px"}></img>
      <div className="step-title">
        <p className="step-number">{num}</p>
        <div className="step-sentense"><p>{value}</p></div>
      </div>
    </div>
  );
}