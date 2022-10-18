import React from "react";
import "./List.css"

export default function List({path = "" ,value = ""}) {
  return (
    <li className="header-list">
      <a className="link" href={path}>{value}</a>
    </li>
  );
}