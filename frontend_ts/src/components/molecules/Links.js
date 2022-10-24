import React from "react";
import LinkWhite from "../atoms/LinkWhite";
import "./Links.css";

export default function Links({links = []}) {
  return (
    <ul className="links-ul">
      {links.map((link, i) => <LinkWhite key={i} path={link.path} value={link.value} />)}
    </ul>
  );
}