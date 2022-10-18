import React from "react";
import Logo from "../atoms/Logo";
import "./Header.css";
import Navigation from "../molecules/Navigation";

export default function Header() {
  return (
    <header className="header-container">
      <Logo />
      <Navigation />
    </header>
  );
}