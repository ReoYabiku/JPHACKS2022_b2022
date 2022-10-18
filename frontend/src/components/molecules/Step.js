import React from "react";
import "./Step.css";

export default function Step({path="/about", imgPath = "logo192.png", num = 0, value = ""}) {
  return (
    <a href={path} className="step-container">
      <img src={imgPath} alt={imgPath}></img>
      <p className="step-number">{num}</p>
      <p>{value}</p>
    </a>
  );
}