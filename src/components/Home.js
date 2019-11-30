import React, { useState, useEffect, useContext } from "react";
import "./Home.css";
import { getWeatherUpdates } from "../service/Service";
import ThemeContext, { themes } from "../theming/Theme";

function Home() {
  const [cityWiseWeather, weatherUpdates] = useState({ cd: 0, list: [] });
  const themeContext = useContext(ThemeContext);
  useEffect(() => {
    getWeatherUpdates("https://api.openweathermap.org/data/2.5/group?id=1273294,1275339,1275004,1264527&appid=c66d22c190d88257f7e9fa5ff4c3950e")
      .then(weatherUpdate => weatherUpdates(weatherUpdate))
      .catch(err => console.error(err));
  }, []);

  return (
    <React.Fragment>
      <div className="body">
        {cityWiseWeather.list.map((value, index) => (
          <div key={index.toString()} className="container" style={themeContext.mode === "light" ? themes.containerLight : themes.containerDark}>
            <span className="title">{value.name}</span>
            {/* <img src="http://openweathermap.org/img/w/01d.png" /> */}
            <svg className="svg-icon" viewBox="0 0 20 20">
              <path
                fill="none"
                d="M2.568,7.179H8.96c1.411,0,2.557-1.145,2.557-2.557c0-1.412-1.146-2.557-2.557-2.557H8.534c-0.235,0-0.426,0.19-0.426,0.426c0,0.236,0.191,0.426,0.426,0.426H8.96c0.941,0,1.704,0.763,1.704,1.705S9.901,6.327,8.96,6.327H2.568c-0.236,0-0.426,0.19-0.426,0.426C2.142,6.988,2.333,7.179,2.568,7.179 M15.778,7.179c0-0.941-0.763-1.704-1.704-1.704h-0.427c-0.235,0-0.426,0.19-0.426,0.426c0,0.235,0.19,0.426,0.426,0.426h0.427c0.47,0,0.852,0.382,0.852,0.852c0,0.471-0.382,0.853-0.852,0.853H0.864c-0.236,0-0.426,0.19-0.426,0.426c0,0.235,0.19,0.426,0.426,0.426h13.21C15.016,8.884,15.778,8.12,15.778,7.179 M16.631,9.736H2.568c-0.236,0-0.426,0.19-0.426,0.426c0,0.236,0.19,0.426,0.426,0.426h14.062c0.94,0,1.704,0.764,1.704,1.705s-0.764,1.704-1.704,1.704h-0.427c-0.235,0-0.426,0.19-0.426,0.427c0,0.235,0.19,0.426,0.426,0.426h0.427c1.411,0,2.557-1.145,2.557-2.557S18.042,9.736,16.631,9.736 M10.665,11.44H4.273c-0.236,0-0.426,0.19-0.426,0.426c0,0.236,0.19,0.427,0.426,0.427h6.392c1.412,0,2.557,1.145,2.557,2.557s-1.146,2.557-2.557,2.557h-0.426c-0.236,0-0.426,0.19-0.426,0.426s0.19,0.427,0.426,0.427h0.426c1.883,0,3.41-1.526,3.41-3.409S12.548,11.44,10.665,11.44"
              ></path>
            </svg>
            <div className="description">
              <div style={{ fontSize: "3rem" }}>{(value.main.temp - 273).toFixed(2)}</div>
              <div style={{ fontSize: "1.5rem" }}>{value.weather[0].main}</div>
            </div>

            <div className="temp-description">
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span>{(value.main.temp_min - 273).toFixed(2)}</span>
                <span style={{ fontSize: "0.9rem", marginTop: "5px" }}>Min</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span> {(value.main.temp_max - 273).toFixed(2)}</span>
                <span style={{ fontSize: "0.9rem", marginTop: "5px" }}>Max</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
}

export default Home;
