import React from "react";

export const themes = {
  light: {
    background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(28,18,97,1) 0%, rgba(199,188,205,0.9332107843137255) 100%)",
    color: "#FFFFFF"
  },
  dark: {
    background: "rgb(2, 0, 36)",
    color: "#FFFFFF",
    boxShadow: "0px 0px 10px 4px #FFFFFF"
  },
  containerLight: {
    color: "#000000",
    background: "#FFFFFF",
    boxShadow: "0px 0px 10px 3px rgba(20,20,36,0.42)"
  },
  containerDark: {
    background: "rgb(2, 0, 36)",
    color: "#FFFFFF",
    boxShadow: "0px 0px 10px 3px #FFFFFF"
  }
};

const ThemeContext = React.createContext({ mode: "light", toggleButton: () => {} });

export default ThemeContext;
