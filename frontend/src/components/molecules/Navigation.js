import React from "react";
import List from "../atoms/List";
import "./Navigation.css";

export default function Navigation() {
  return (
    <div className="navigation">
      <ul className="navigation-ul">
        <List path="/" value="Home" />
        <List path="/about" value="About" />
        <List path="/faq" value="FAQ" />
      </ul>
    </div>
  );
}