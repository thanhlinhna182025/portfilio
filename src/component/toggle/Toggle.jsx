import React from "react";
import "./toggle.css";
import { UilSun, UilMoon } from "@iconscout/react-unicons";
import { ThemeContext } from "../../context/Context";
import { useContext } from "react";

const Toggle = () => {
  const { darkMode, dispatch } = useContext(ThemeContext);
  const handleClick = () => {
    console.log(darkMode);
    dispatch({ type: "TOGGLE" });
  };

  return (
    <div className="toggle">
      <UilSun />
      <UilMoon />
      <div
        className="t-button"
        style={darkMode ? { right: "2px" } : { left: "2px" }}
        onClick={handleClick}
      ></div>
    </div>
  );
};

export default Toggle;
