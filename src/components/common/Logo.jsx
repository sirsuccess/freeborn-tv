import React from "react";
import "./Logo.css";
import logo from "../../logo.jpg";

export default function Logo() {
  return (
    <div className="logo-container">
      <img src={logo} alt="site logo" />
      <div className="logo-left"></div>
    </div>
  );
}
