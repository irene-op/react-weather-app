import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      city: response.data.name,
      wind: Math.round(response.data.wind.speed),
      humidity: response.data.main.humidity,
      precipitation: 10,
      description: response.data.weather[0].description,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      date: new Date(response.data.dt * 1000),
    });
  }

  function search() {
    const apiKey = "db15d65fb04d4d3ab973f7ec3f38b472";
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city..."
                className="form-control"
                autoFocus="on"
                onChange={handleCityChange}
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
        <WeatherInfo data={weatherData} />

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
    search();
    return "Loading...";
  }
}
