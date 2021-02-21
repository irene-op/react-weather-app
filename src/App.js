import "./App.css";
import Weather from "./Weather";
export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Berlin" />
        <footer>
          This project was coded by Irene Ortega and is{" "}
          <a
            href="https://github.com/irene-op/react-weather-app"
            target="blank"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
