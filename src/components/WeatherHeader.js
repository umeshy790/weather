import React, { useContext } from "react";
import "./WeatherHeader.css";
import ThemeContext from "../theming/Theme";

function WeatherHeader(props) {
  const themeContext = useContext(ThemeContext);
  
  return (
    <div className="wrapper">
      <button className="btn" onClick={themeContext.toggleButton}>
        Change Theme
      </button>
    </div>
  );
}

export default WeatherHeader;
