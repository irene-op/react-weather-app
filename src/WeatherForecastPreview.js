import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastPreview(props) {
  function hours() {
    let date = new Date(props.data.dt * 1000);
    let hours = date.getHours();

    return `${hours}:00`;
  }

  function minTemperature() {
    let minTemperature = Math.round(props.data.main.temp_min);
    return `${minTemperature}ºC`;
  }
  function maxTemperature() {
    let maxTemperature = Math.round(props.data.main.temp_max);
    return `${maxTemperature}ºC`;
  }

  return (
    <div className="col five-days">
      <strong>{hours()}</strong>
      <br />
      <div className="low-high">
        {minTemperature()}
        <br />
        <strong>{maxTemperature()}</strong>
      </div>
      <WeatherIcon code={props.data.weather[0].icon} />
    </div>
  );
}
