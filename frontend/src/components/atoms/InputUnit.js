import React from "react";
import "./InputUnit.css";

export default function InputUnit({label = "", value = ""}) {
  return (
    <div className="input-unit">
      <label className="text-label">{label}</label>
      <input type={"text"} className="text-box" defaultValue={value}></input>
    </div>
  );
}