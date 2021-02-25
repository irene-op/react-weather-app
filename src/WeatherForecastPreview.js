import React from "react";

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
        {minTemperature()}ºC
        <br />
        <strong>{maxTemperature()}ºC</strong>
      </div>
      <img
        src="http://openweathermap.org/img/wn/01n@2x.png"
        alt="Clear"
        id="main-icon"
      />
    </div>
  );
}
