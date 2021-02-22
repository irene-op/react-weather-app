import React from "react";

export default function WeatherForecast() {
  return (
    <div className="forecast">
      <div className="row" id="forecast">
        <div className="col five-days">
          <strong>12:00</strong> <br />
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
  );
}
