import "./styleall.css";
import React from "react";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Info() {
  return (
    <div className="profile-about">
      <h1>Muhammad Ukkasha</h1>
      <p
        className="dev-info"
        style={{ marginTop: -20, color: "orange", fontSize: 26 }}
      >
        FrontEnd Developer
      </p>
      <p>ukkashameh.com</p>
      <div className="buttons" style={{ padding: 5 }}>
        {/* <a href="https://google.com" target="_blank" style={{width:70}}> */}

        <button
          className="self-button"
          // icon = { <FaInstagramSquare />}
          onClick={() => {
            console.log("button pressed");
          }}
          style={{
            backgroundColor: "white",
            color: "black",
            borderRadius: 8,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <FaEnvelope
            style={{ color: "black", backgroundColor: "white" }}
            size={16}
          />
          Email
        </button>
        {/* </a> */}

        <button
          className="self-button"
          style={{
            backgroundColor: "skyblue",
            color: "white",
            borderRadius: 8,
            padding: "3%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between"
          }}
        >
          <FaLinkedin
            style={{ color: "white", backgroundColor: "skyblue" }}
            size={18}
          />
          Linkdin
        </button>
      </div>
    </div>
  );
}
