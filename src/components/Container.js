import React, { useContext } from "react";
import "./Container.css";
import ThemeContext, { themes } from "../theming/Theme";
import WeatherHeader from "./WeatherHeader";
import Home from "./Home";

function Container() {
  const themeContext = useContext(ThemeContext);

  return (
    <div className="Main-container" style={themeContext.mode === "light" ? themes.light : themes.dark}>
      <WeatherHeader></WeatherHeader>
      <Home />
    </div>
  );
}

export default Container;
