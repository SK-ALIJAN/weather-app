import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { farmattedDate } from "../../utilities/DayMonth";
import { weatherIcon } from "../../utilities/IconUtils";
import { useEffect } from "react";
import { InitialKelvinFromApi } from "../../Redux/actionType";
import { CiTempHigh } from "react-icons/ci";
import { BiWind } from "react-icons/bi";
import { BsClouds } from "react-icons/bs";
import { WiHumidity } from "react-icons/wi";
import { TiWeatherSnow } from "react-icons/ti";
import { TiWeatherWindy } from "react-icons/ti";
import { styled } from "styled-components";
import { ToCalsious, ToFarenhide, ToKelvin } from "../../utilities/TempChanger";

const WeatherReport = () => {
  let weatherData = useSelector((store) => store.weatherReducer.data);

  let data = useSelector((store) => {
    return {
      default_setting: store.toggleReducer.default_setting,
      initialKelvinTemp: store.toggleReducer.initialKelvinTemp,
    };
  }, shallowEqual);

  let dispatch = useDispatch();

  useEffect(() => {
    if (weatherData.main !== undefined) {
      dispatch({ type: InitialKelvinFromApi, payload: weatherData.main.temp });
    }
  }, [weatherData]);

  return (
    <DIV>
      {Object.keys(weatherData).length === 0 ? (
        <div className="LoaderWrapper">
          <div className="loading-bar">Loading</div>
        </div>
      ) : (
        <>
          <header id="weatherBody">
            <div className="temp_condition">
              <h1 id="temp">
                {data.default_setting == "kel"
                  ? ToKelvin(Math.ceil(data.initialKelvinTemp))
                  : data.default_setting == "cal"
                  ? ToCalsious(Math.ceil(data.initialKelvinTemp))
                  : ToFarenhide(Math.ceil(data.initialKelvinTemp))}
              </h1>
              <p>{weatherData.weather[0].main}</p>
            </div>

            <div>
              <h1>
                {weatherData.name}, {weatherData.sys.country}
              </h1>
              <p>{farmattedDate()}</p>
              <div>
                <img
                  src={weatherIcon(`${weatherData.weather[0].icon}.png`)}
                  alt=""
                  id="weatherIcon"
                />
              </div>
            </div>
          </header>

          <header id="air_condition">
            <h2>AIR CONDITIONS</h2>
            <section>
              <div>
                <p>
                  <CiTempHigh className="icon" />
                  Real Feel
                </p>
                <p>
                  {data.default_setting == "kel"
                    ? ToKelvin(Math.ceil(weatherData.main.feels_like))
                    : data.default_setting == "cal"
                    ? ToCalsious(Math.ceil(weatherData.main.feels_like))
                    : ToFarenhide(Math.ceil(weatherData.main.feels_like))}
                </p>
              </div>

              <div>
                <p>
                  <BiWind className="icon" /> Wind
                </p>
                <p>{weatherData.wind.speed} m/s</p>
              </div>

              <div>
                <p>
                  <BsClouds className="icon" /> Clouds
                </p>
                <p>{weatherData.clouds.all}%</p>
              </div>
            </section>

            <section>
              <div>
                <p>
                  <WiHumidity className="icon" /> Humidity
                </p>
                <p>{weatherData.main.humidity}%</p>
              </div>

              <div>
                <p>
                  <TiWeatherSnow className="icon" /> Description
                </p>
                <p>{weatherData.weather[0].description}</p>
              </div>

              <div>
                <p>
                  <TiWeatherWindy className="icon" /> Pressure
                </p>
                <p>{weatherData.main.pressure} hPa</p>
              </div>
            </section>
          </header>
        </>
      )}
    </DIV>
  );
};

export default WeatherReport;

let DIV = styled.div`
  .LoaderWrapper {
    height: 100vh;
  }
  .loading-bar {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 110px;
    height: 110px;
    background: transparent;
    border: px solid #3c3c3c;
    border-radius: 50%;
    text-align: center;
    line-height: 111px;
    font-family: sans-serif;
    font-size: 15px;
    color: #fff000;
    letter-spacing: 3px;
    text-transform: uppercase;
    text-shadow: 0 0 20px #fff000;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
  }

  .loading-bar:before {
    content: "";
    position: absolute;
    top: -3px;
    left: -3px;
    width: 100%;
    height: 100%;
    border: 3px solid transparent;
    border-top: 5px solid #fff000;
    border-right: 5px solid #fff000;
    border-radius: 50%;
    animation: animateC 2s linear infinite;
  }

  @keyframes animateC {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes animate {
    0% {
      transform: rotate(45deg);
    }

    100% {
      transform: rotate(405deg);
    }
  }

  #weatherBody {
    display: flex;
    justify-content: space-around;
  }
  #weatherBody img {
    display: block;
    margin: auto;
  }
  #temp {
    font-size: 3rem;
    font-weight: 900;
  }
  #air_condition {
    background-color: #ffd900a9;
    padding: 10px 0px;
    margin-top: 30px;
  }

  #air_condition h2 {
    text-align: center;
  }
  #air_condition section {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  #air_condition section div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  #air_condition section div > p:nth-child(1) {
    display: flex;
    align-items: center;
  }
  #air_condition section div > p:nth-child(2) {
    position: relative;
    bottom: 20px;
  }
  .icon {
    margin-right: 5px;
  }
  #weatherIcon {
    width: 10rem;
  }
  @media screen and (max-width: 600px) {
    #weatherBody {
      flex-direction: column-reverse;
      align-items: center;
    }
    .temp_condition {
      display: flex;
      align-items: center;
      width: 90%;
      justify-content: space-around;
    }
    #air_condition p {
      font-size: 0.6rem;
    }
  }
`;
