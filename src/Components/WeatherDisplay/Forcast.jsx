import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeatherData } from "../../Redux/action";

const Forcast = () => {
  let default_location = useSelector(
    (store) => store.toggleReducer.default_location
  );
  let dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(fetchWeatherData(default_location));
//   }, [default_location]);

  let forcastData = useSelector((store) => store.forcastReducer.data);

//   console.log(forcastData);
  return (
    <div>
      <header>
        <h1>{"TODAY'S FORECAST"}</h1>
      </header>
    </div>
  );
};

export default Forcast;
