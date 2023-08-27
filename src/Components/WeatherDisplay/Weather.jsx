import React, { useEffect } from "react";
import WeatherNav from "./WeatherNav";
import WeatherReport from "./WeatherReport";
import Forcast from "./Forcast";
import { styled } from "styled-components";
import { fetchWeatherData } from "../../Redux/action";
import { useDispatch, useSelector } from "react-redux";

const Weather = () => {
  let default_location = useSelector(
    (store) => store.toggleReducer.default_location
  );

  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchWeatherData(default_location));
  }, [default_location]);

  return (
    <>
      <WeatherNav />
      <DIV>
        <WeatherReport />
        <Forcast />
      </DIV>
    </>
  );
};

export default Weather;

let DIV = styled.div`
  padding-bottom: 100px;
`;
