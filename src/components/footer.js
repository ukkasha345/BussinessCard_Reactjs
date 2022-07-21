import React from "react";
import "./styleall.css";
import {
  FaInstagramSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaLinkedin
} from "react-icons/fa";

export default function Footer() {
  return (
    <div className="footer-sec">
      <div className="icons">
        <FaInstagramSquare size={40} style={{ backgroundColor: "black" }} />
        <FaFacebookSquare size={40} style={{ backgroundColor: "black" }} />
        <FaGithubSquare size={40} style={{ backgroundColor: "black" }} />
        <FaLinkedin size={40} style={{ backgroundColor: "black" }} />
      </div>
    </div>
  );
}
