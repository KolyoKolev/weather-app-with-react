import React, { useState } from 'react';
import dateBuilder from './helpers/dateBuilder';
import * as config from './config.json';

function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search = (event) => {
    if (event.key === 'Enter') {
      fetch(
        `${config.api.base}weather?q=${query}&units=metric&APPID=${process.env.REACT_APP_WEATHER_APP_KEY}`
      )
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
          setQuery('');
        });
    }
  };

  return (
    <div
      className={
        typeof weather.main !== 'undefined'
          ? weather.main.temp > 16
            ? 'app warm'
            : 'app cold'
          : 'app neutral'
      }
    >
      <main>
        <div className="search-box">
          <div>
            <input
              type="text"
              className="search-bar"
              placeholder="Search..."
              onChange={(e) => setQuery(e.target.value)}
              value={query}
              onKeyPress={search}
            />
          </div>
        </div>
        {typeof weather.main !== 'undefined' ? (
          <div>
            <div className="location-box">
              <div className="location">
                {weather.name}, {weather.sys.country}
              </div>
              <div className="date">{dateBuilder(new Date())}</div>
            </div>
            <div className="weather-box">
              <div className="temp">{Math.round(weather.main.temp)}°C</div>
              <div className="weather">{weather.weather[0].main}</div>
            </div>
          </div>
        ) : weather.cod === '404' ? (
          <div className="city-not-found-box">
            <div className="city-not-found-text">
              Sorry, but we cannot find this city. <br />
              Please, check if it is spelled correctly <br />
              and try again.
            </div>
          </div>
        ) : (
          <div className="welcome-box">
            <div className="welcome-text">Welcome</div>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
