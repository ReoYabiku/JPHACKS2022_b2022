import React from "react";
import "./Step.css";

export default function Step({path="/about", imgPath = "logo192.png", num = 0, value = ""}) {
  return (
    <a href={path} className="step-container">
      <img src={imgPath} alt={imgPath} width={"70px"} height={"70px"}></img>
      <div className="step-title">
        <p className="step-number">{num}</p>
        <div className="step-sentense"><p>{value}</p></div>
      </div>
    </a>
  );
}