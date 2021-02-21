import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      city: response.data.name,
      wind: Math.round(response.data.wind.speed),
      humidity: response.data.main.humidity,
      precipitation: 10,
      description: response.data.weather[0].description,
      icon: "http://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
      date: "Monday 7:00",
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city..."
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <h1>{weatherData.city}</h1>
        <ul>
          <li>{weatherData.date}</li>
          <li className="text-capitalize">{weatherData.description}</li>
        </ul>
        <div className="row mt-3">
          <div className="col-6">
            <div className="clearfix">
              <img
                src={weatherData.icon}
                alt={weatherData.description}
                className="float-left"
              />
              <div className="float-left">
                <spam className="temperature">
                  {Math.round(weatherData.temperature)}
                </spam>
                <span className="unit">ºC</span>
              </div>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Precipitation: {weatherData.precipitation}%</li>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {weatherData.wind}m/s</li>
            </ul>
          </div>
        </div>
        <section class="forecast">
          <div class="row" id="forecast">
            <div class="col five-days">
              <strong>12:00</strong> <br />
              <div class="low-high">
                15°C
                <br />
                <strong>22°C</strong>
                <br />
              </div>
              <span class="icons">
                <img
                  src="http://openweathermap.org/img/wn/01d@2x.png"
                  alt="Clear"
                  id="main-icon"
                />
              </span>
            </div>
            <div class="col five-days">
              <strong>15:00</strong> <br />
              <div class="low-high">
                15°C
                <br />
                <strong>22°C</strong>
                <br />
              </div>
              <span class="icons">
                <img
                  src="http://openweathermap.org/img/wn/01d@2x.png"
                  alt="Clear"
                  id="main-icon"
                />
              </span>
            </div>
            <div class="col five-days">
              <strong>18:00</strong> <br />
              <div class="low-high">
                15°C
                <br />
                <strong>22°C</strong>
                <br />
              </div>
              <span class="icons">
                <img
                  src="http://openweathermap.org/img/wn/01d@2x.png"
                  alt="Clear"
                  id="main-icon"
                />
              </span>
            </div>
            <div class="col five-days">
              <strong>21:00</strong> <br />
              <div class="low-high">
                15°C
                <br />
                <strong>22°C</strong>
                <br />
              </div>
              <span class="icons">
                <img
                  src="http://openweathermap.org/img/wn/01d@2x.png"
                  alt="Clear"
                  id="main-icon"
                />
              </span>
            </div>
            <div class="col five-days">
              <strong>00:00</strong> <br />
              <div class="low-high">
                15°C
                <br />
                <strong>22°C</strong>
                <br />
              </div>
              <span class="icons">
                <img
                  src="http://openweathermap.org/img/wn/01d@2x.png"
                  alt="Clear"
                  id="main-icon"
                />
              </span>
            </div>
          </div>
        </section>
      </div>
    );
  } else {
    const apiKey = "db15d65fb04d4d3ab973f7ec3f38b472";
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
