import React from "react";
import "./Weather.css";

export default function Weather() {
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
      <h1>Lisbon</h1>
      <ul>
        <li>Friday 07:00</li>
        <li>Mostly cloudy</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="clearfix">
            <img
              src="http://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              alt="mostly cloudy"
              className="float-left"
            />
            <div className="float-left">
              <spam className="temperature">6</spam>
              <span className="unit">ºC</span>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 15%</li>
            <li>Humidity: 72%</li>
            <li>Wind: 6m/s</li>
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
}