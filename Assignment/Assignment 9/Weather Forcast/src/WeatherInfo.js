import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1> 
      <div className="today">
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              {" "}
              <WeatherIcon code={props.data.icon} size={72} />
            </div>
            <div className="col">
              <h2>
                <span className="temperature" id="temperature">
                  <WeatherTemperature celsius={props.data.temperature} />
                </span>
          
              </h2>
              <h3>{props.data.description}</h3>
              <h4>
                <FormattedDate date={props.data.date} />
              </h4>
            </div>
            <div className="col" id="extras">
              {" "}
              <p>
                <span>Humidity: {props.data.humidity}%</span>
                <br />
                <span>Wind: {Math.round(props.data.wind)} km/h</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
