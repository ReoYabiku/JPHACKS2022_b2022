import React from "react";
import "./InputUnit.css";

export default function InputUnit({label = "", value = "", name = ""}) {
  return (
    <div className="input-unit">
      <p className="text-label">{label}</p>
      <input type={"text"} className="text-box" defaultValue={value} name={name}></input>
    </div>
  );
}