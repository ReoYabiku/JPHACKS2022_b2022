import React from "react";
import StepTitle from "../atoms/StepTitle";
import "./Step.css";

export default function Step({path="/about", imgPath = "logo192.png", num = 0, value = ""}) {
  return (
    <a href={path} className="step-container">
      <StepTitle imgPath={imgPath} num={num} value={value} />
    </a>
  );
}