import React from "react";
import "./LinkWhite.css"

export default function LinkWhite({path = "" ,value = ""}) {
  return (
    <li className="header-list">
      <a className="link" href={path}>{value}</a>
    </li>
  );
}