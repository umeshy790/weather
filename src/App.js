import React, { useState } from "react";
import Container from "./components/Container";
import ThemeContext, { themes } from "./theming/Theme";

function App() {
  const [state, changeTheme] = useState({ mode: "light", toggleButton: () => {} });

  state.toggleButton = () => {
    if (state.mode === "light") {
      changeTheme({ mode: "dark", toggleButton: () => {} });
    }

    if (state.mode === "dark") {
      changeTheme({ mode: "light", toggleButton: () => {} });
    }
  };

  return (
    <ThemeContext.Provider value={state}>
      <Container></Container>
    </ThemeContext.Provider>
  );
}

export default App;
