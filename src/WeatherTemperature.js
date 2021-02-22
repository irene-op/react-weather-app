import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celcius");

  function showFarenheit(event) {
    event.preventDefault();
    setUnit("farenheit");
  }

  function showCelcius(event) {
    event.preventDefault();
    setUnit("celcius");
  }

  if (unit === "celcius") {
    return (
      <div className="WeatherTemperature">
        <span className="temperature">{Math.round(props.celcius)}</span>
        <span className="unit">
          ºC |{" "}
          <a href="/" onClick={showFarenheit}>
            ºF
          </a>
        </span>
      </div>
    );
  } else {
    let farenheit = (props.celcius * 9) / 5 + 32;
    return (
      <div className="WeatherTemperature">
        <span className="temperature">{Math.round(farenheit)}</span>
        <span className="unit">
          <a href="/" onClick={showCelcius}>
            ºC
          </a>{" "}
          | ºF
        </span>
      </div>
    );
  }
}
