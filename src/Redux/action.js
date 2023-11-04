import {
  getCityError,
  getCityRequest,
  getCitySuccess,
  getForcastError,
  getForcastRequest,
  getForcastSuccess,
  getWeatherError,
  getWeatherRequest,
  getWeatherSuccess,
} from "./actionType";

import axios from "axios";

const GEO_API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo";

const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5";
const WEATHER_API_KEY = "121e302e951d8768668884818e4982ea";

const GEO_API_OPTIONS = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "4f0dcce84bmshac9e329bd55fd14p17ec6fjsnff18c2e61917",
    "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
  },
};

const forForcast = {
  lat: "",
  lon: "",
};

export const fetchWeatherData = (input) => async (dispatch) => {
  dispatch({ type: getWeatherRequest });

  axios
    .get(`${WEATHER_API_URL}/weather?q=${input}&appid=${WEATHER_API_KEY}`)

    .then((response) => {
      forForcast.lat = response.data.coord.lat;
      forForcast.lon = response.data.coord.lon;
      dispatch({ type: getWeatherSuccess, payload: response.data });
      fetchWeatherForcastData(dispatch, forForcast);
    })

    .catch((error) => {
      dispatch({ type: getWeatherError, payload: error.message });
    });
};

export const fetchWeatherForcastData = async (dispatch, forForcast) => {
  dispatch({ type: getForcastRequest });

  axios
    .get(
      `${WEATHER_API_URL}/forecast?lat=${forForcast.lat}&lon=${forForcast.lon}&appid=${WEATHER_API_KEY}`
    )
    .then((response) => {
      dispatch({ type: getForcastSuccess, payload: response.data });
    })
    .catch((error) => {
      dispatch({ type: getForcastError, payload: error.message });
    });
};

export const fetchCities = (input) => (dispatch) => {
  dispatch({ type: getCityRequest });

  axios
    .get(
      `${GEO_API_URL}/cities?minPopulation=10000&namePrefix=${input}`,
      GEO_API_OPTIONS
    )
    .then((response) => {
      dispatch({ type: getCitySuccess, payload: response.data });
    })
    .catch((error) => {
      dispatch({ type: getCityError, payload: error.message });
    });
};


