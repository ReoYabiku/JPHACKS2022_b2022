import React from "react";
import "./ButtonLink.css";

export default function ButtonLink({path="", value=""}) {
  return (
    <div className="button-link">
      <a href={path} className="inner-button-link">{value}</a>
    </div>
  );
}