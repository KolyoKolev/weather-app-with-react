# Simple weather app with React

## Summary

This is a simple application inspired by [Tyler Potts'](https://www.youtube.com/channel/UCBBGM84ZOs7z5jpTQAaZ_Hg) educational [video](https://www.youtube.com/watch?v=GuA0_Z1llYU).

The API for fetching real time data used is provided by [OpenWeather](https://openweathermap.org/).

The full documentation for this particular API could be found [here](https://openweathermap.org/current).

<hr/>

## Setup

- Clone the project;
- In the root directory: `run npm install` command in order to download the general dependencies;

<hr />

## Steps to obtain a personal API Key

- Create account (if you don't have one) in the [OpenWeather](https://openweathermap.org/) platform;
- Navigate to the My API Keys option in the top bar drop down menu:

  <img alt="My API keys" src='./src/assets/myApiKeys.png' width="300px" height="150px"></img>

- Choose either the default / already available key or create a new one;
- Rename `.evn_sample` file to `.env`;
- Inside the `.env` file replace the value of the `REACT_APP_WEATHER_APP_KEY` with your newly created API key;
- Save the file;
- Start (or restart if it has been started before) the react server via `npm start`;
