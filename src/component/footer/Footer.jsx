import React from "react";
import "./footer.css";
import { UilInstagram, UilFacebook, UilGithub } from "@iconscout/react-unicons";
import Wave from "../../img/wave.png";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="wave" style={{ width: "100%" }} />
      <div className="f-content">
        <span>thanhtruong182025@gmail.com</span>
        <div className="f-icons">
          <UilInstagram color="white" size="60px" />
          <UilGithub color="white" size="60px" />
          <UilFacebook color="white" size="60px" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
