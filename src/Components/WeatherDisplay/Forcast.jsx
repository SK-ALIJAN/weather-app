import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";


const Forcast = () => {
  // let default_location = useSelector(
  //   (store) => store.toggleReducer.default_location
  // );
  // let dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchWeatherForcastData());
  // }, []);

  let forcastData = useSelector((store) => store.forcastReducer.data);

  console.log(forcastData.list);

  return (
    <div>
      <header>
        <h1>{"TODAY'S FORECAST"}</h1>
      </header>
    </div>
  );
};

export default Forcast;
