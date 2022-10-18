import React from "react";
import Links from "./Links";
import "./Navigation.css";

export default function Navigation() {
  const links = [
    {path: "/", value: "Home"},
    {path: "/about", value: "About"},
    {path: "faq", value: "FAQ"}
  ];

  return (
    <div className="navigation">
      <Links links={links} />
    </div>
  );
}