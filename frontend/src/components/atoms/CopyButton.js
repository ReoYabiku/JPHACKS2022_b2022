import React from "react";
import "./CopyButton.css";

export default function CopyButton({onClick = f => f}) {
  return (
    <div className="btnWrapper">
      <div className="copyBtn" onClick={onClick}>Copy</div>
    </div>
  );
}