import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { farmattedDate } from "../../utilities/DayMonth";
import { weatherIcon } from "../../utilities/IconUtils";
import { useEffect } from "react";
import { Default_Setting, InitialKelvinFromApi } from "../../Redux/actionType";
import { CiTempHigh } from "react-icons/ci";
import { BiWind } from "react-icons/bi";
import { BsClouds } from "react-icons/bs";
import { WiHumidity } from "react-icons/wi";
import { TiWeatherSnow } from "react-icons/ti";
import { TiWeatherWindy } from "react-icons/ti";
import { styled } from "styled-components";

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
    dispatch({ type: InitialKelvinFromApi, payload: weatherData.main.temp });
    // dispatch({ type: Default_Setting, payload: "cal" });
  }, [weatherData]);

  console.log(weatherData);
  function ToCalsious(kelvinTemp) {
    let Celsius = kelvinTemp - 273.15;
    return (
      <span>
        {`${Math.ceil(Celsius)}`} <sup>°</sup>C
      </span>
    );
  }

  function ToFarenhide(kelvinTemp) {
    let Farenhide = ((kelvinTemp - 273.15) * 9) / 5 + 32;
    return (
      <span>
        {`${Math.ceil(Farenhide)}`} <sup>°</sup>F
      </span>
    );
  }

  function ToKelvin(kelvinTemp) {
    return <span>{kelvinTemp} K</span>;
  }

  // console.log(weatherData);
  return (
    <DIV>
      <header id="weatherBody">
       <div>
       <img src={weatherIcon(`${weatherData.weather[0].icon}.png`)} alt="" />
       </div>
        <div>
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
        </div>
      </header>

      <header id="air_condition">
        {/* <h1>AIR CONDITIONS</h1> */}
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
    </DIV>
  );
};

export default WeatherReport;

let DIV = styled.div`
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

  #air_condition h1 {
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
`;
