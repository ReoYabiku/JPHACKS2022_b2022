import React from "react";
import Links from "../molecules/Links";
import Logo from "../atoms/Logo";
import LogoSub from "../atoms/LogoSub";
import "./Footer.css";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  const links = [
    {path: "/", value: "Home"},
    {path: "/about", value: "About"},
    {path: "faq", value: "FAQ"}
  ];

  return (
    <footer className="footer-container">
      <div className="footer-main">
        <div className="footer-logo">
          <Logo />
          <LogoSub />
        </div>
        <div className="footer-links">
          <Links links={links} />
        </div>
      </div>
      <div className="footer-sns">
        <a href="https://twitter.com/percentaction7">
          <FaTwitter color="white" size={"1.5em"} style={{padding: "0 5px"}} />
        </a>
        <a href="/instagram_of_mi-chan">
          <FaInstagram color="white" size={"1.5em"} style={{padding: "0 5px"}} />
        </a>
      </div>
      <div className="footer-copy-right">©コクリ created by JPHACKS2022</div>
    </footer>
  );
}