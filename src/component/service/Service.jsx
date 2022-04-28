import "./service.css";
import Card from "../card/Card";
import Like from "../../img/like.png";
import Cute from "../../img/cute.png";
import Wink from "../../img/wink.png";
import CV from "./TruongTuanThanh.pdf";
import { ThemeContext } from "../../context/Context";
import { useContext } from "react";
import { motion } from "framer-motion";
const Service = () => {
  const { darkMode } = useContext(ThemeContext);
  const transition = { duration: 2, type: "spring" };
  return (
    <div className="service" id="service">
      {/* Left side */}
      <div className="awesome">
        <span>My Awesome</span>
        <span
          style={{
            color: darkMode ? "white" : "",
          }}
        >
          services
        </span>
        <span
          style={{
            color: darkMode ? "white" : "",
          }}
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit <br />.
          Nihil, officiis. Doloribus, ullam.{" "}
        </span>
        <a href={CV} download>
          <button className="button s-button">Down load CV</button>
        </a>
      </div>
      {/* Right side */}
      <div className="cards">
        {/* 1st Cart */}
        <motion.div
          style={{ left: "25rem" }}
          transition={transition}
          whileInView={{ left: "2rem" }}
        >
          <Card
            emoji={Like}
            heading="Design"
            detail="Photoshop ,Figma , Adode"
          />
        </motion.div>
        {/* 2st Cart */}
        <motion.div
          style={{ left: "-5rem", top: "10rem" }}
          transition={{ duration: 2, type: "spring" }}
          whileInView={{ left: "20rem" }}
        >
          <Card
            emoji={Cute}
            heading="Developer"
            detail="HTML , CSS ,JavaScript, React"
          />
        </motion.div>
        {/* 3st Cart */}
        <motion.div
          style={{ left: "15rem", top: "20rem" }}
          transition={{ duration: 2, type: "spring" }}
          whileInView={{ left: "2rem" }}
        >
          <Card
            emoji={Wink}
            heading="Backend"
            detail="Mongoose ,Express,React ,NodeJS"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Service;
