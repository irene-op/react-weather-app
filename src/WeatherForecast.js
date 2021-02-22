import React, { useState } from "react";
import axios from "axios";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);
  /*let iconCode = forecast.list[0].weather[0].icon;*/

  function handleForecastResponse(response) {
    setLoaded(true);
    setForecast(response.data);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="forecast">
          <div className="row" id="forecast">
            <div className="col five-days">
              <strong>10:00</strong> <br />
              <div className="low-high">
                {Math.round(forecast.list[0].main.temp_min)}ºC
                <br />
                <strong>{Math.round(forecast.list[0].main.temp_max)}ºC</strong>
                <br />
              </div>
              <span className="icons">
                <img
                  src="http://openweathermap.org/img/wn/01d@2x.png"
                  alt="Clear"
                  id="main-icon"
                />
              </span>
            </div>
            <div className="col five-days">
              <strong>15:00</strong> <br />
              <div className="low-high">
                15°C
                <br />
                <strong>22°C</strong>
                <br />
              </div>
              <span className="icons">
                <img
                  src="http://openweathermap.org/img/wn/01d@2x.png"
                  alt="Clear"
                  id="main-icon"
                />
              </span>
            </div>
            <div className="col five-days">
              <strong>18:00</strong> <br />
              <div className="low-high">
                15°C
                <br />
                <strong>22°C</strong>
                <br />
              </div>
              <span className="icons">
                <img
                  src="http://openweathermap.org/img/wn/01d@2x.png"
                  alt="Clear"
                  id="main-icon"
                />
              </span>
            </div>
            <div className="col five-days">
              <strong>21:00</strong> <br />
              <div className="low-high">
                15°C
                <br />
                <strong>22°C</strong>
                <br />
              </div>
              <span className="icons">
                <img
                  src="http://openweathermap.org/img/wn/01d@2x.png"
                  alt="Clear"
                  id="main-icon"
                />
              </span>
            </div>
            <div className="col five-days">
              <strong>00:00</strong> <br />
              <div className="low-high">
                15°C
                <br />
                <strong>22°C</strong>
                <br />
              </div>
              <span className="icons">
                <img
                  src="http://openweathermap.org/img/wn/01d@2x.png"
                  alt="Clear"
                  id="main-icon"
                />
              </span>
            </div>
          </div>
        </div>
        {/* 10:00
        {Math.round(forecast.list[0].main.temp_max)}ºC
        {Math.round(forecast.list[0].main.temp_min)}ºC */}
        {/* <img src=`http://openweathermap.org/img/wn/${iconCode}@2x.png`/> */}
      </div>
    );
  } else {
    let apiKey = "db15d65fb04d4d3ab973f7ec3f38b472";
    let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleForecastResponse);
    return null;
  }
}
