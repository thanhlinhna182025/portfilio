import React from "react";
import "./intro.css";
import Facebook from "../../img/Facebook.png";
import Github from "../../img/github.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import Computer2 from "../../img/Computer2.png";
import Float from "../float/Float";
import Humble from "../../img/humble.png";
import Heartemoji from "../../img/heartemoji.png";
import { ThemeContext } from "../../context/Context";
import { useContext } from "react";
import { motion } from "framer-motion";

const Intro = () => {
  const { darkMode } = useContext(ThemeContext);
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span
            style={{
              color: darkMode ? "white" : "",
            }}
          >
            Hi ! I am
          </span>
          <span>Thanh Truong</span>
          <span
            style={{
              color: darkMode ? "white" : "",
            }}
          >
            I'm fresher frontend developer
          </span>
        </div>
        <button className="button i-button">Hire me</button>
        <div className="i-icons">
          <img src={Facebook} alt="facebooklogo" />
          <img src={Github} alt="githublogo" />
        </div>
      </div>
      <div className="i-right">
        <img src={Vector1} alt="Vector1" />
        <img src={Vector2} alt="Vector2" />
        <img src={Computer2} alt="Computer" />

        <motion.div
          style={{ top: "1rem", left: "40px" }}
          transition={{ duration: 2, type: "spring" }}
          whileInView={{ left: "13rem" }}
        >
          <Float image={Humble} text1="I'm" text2="Web Developer" />
        </motion.div>
        <motion.div
          style={{ bottom: "1rem", left: "-200px" }}
          transition={{ duration: 2, type: "spring" }}
          whileInView={{ left: "10rem" }}
        >
          <Float image={Heartemoji} text1="Fresher" text2="Frontend" />
        </motion.div>
      </div>
    </div>
  );
};

export default Intro;
