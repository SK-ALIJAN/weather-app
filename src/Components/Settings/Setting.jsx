import React, { useState } from "react";
import WeatherNav from "../WeatherDisplay/WeatherNav";
import { AiOutlineLeftCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { Default_Location, Default_Setting } from "../../Redux/actionType";

const Setting = () => {
  let Navigate = useNavigate();

  let defualt_location = useSelector(
    (store) => store.toggleReducer.default_location
  );

  let dispatch = useDispatch();

  let [locationText, setLocationText] = useState(defualt_location);
  let [unit, setUnit] = useState("cal");
  let [showAlert, setShowAlert] = useState(false);

  let handleLocation = () => {
    dispatch({ type: Default_Location, payload: locationText });
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 2000);
  };

  let handleUnit = () => {
    dispatch({ type: Default_Setting, payload: unit });
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 2000);
  };

  return (
    <div>
      <WeatherNav />
      <WRAPPER>
        <div className="title">
          <p>
            <AiOutlineLeftCircle
              onClick={() => {
                Navigate("/weather");
              }}
            />
          </p>
          <h2>Change Settings</h2>
        </div>

        <div className="location">
          <p>Change your default location</p>
          <input
            type="text"
            value={locationText}
            onChange={(e) => {
              setLocationText(e.target.value);
            }}
          />
          <button onClick={handleLocation}>Save Location</button>
        </div>

        <div className="unit">
          <p>Choose your preferred weather unit.</p>
          <select
            onChange={(e) => {
              setUnit(e.target.value);
            }}
          >
            <option value="cal">Celsius</option>
            <option value="far">Fahrenheit</option>
            <option value="kel">Kelvin</option>
          </select>
          <button onClick={handleUnit}>Save Unit</button>
        </div>

        <div className="restore">
          <p>Restore Factory Settings</p>
          <button
            onClick={() => {
              Navigate("/");
            }}
          >
            Reset to default settings
          </button>
        </div>
      </WRAPPER>
      {showAlert ? (
        <DIV>
          <p>Updated successfully!</p>
        </DIV>
      ) : (
        ""
      )}
    </div>
  );
};

export default Setting;

let WRAPPER = styled.div`
  padding: 0px 15px;
  .title {
    display: flex;
    align-items: center;
  }
  .title > p {
    font-size: 40px;
    cursor: pointer;
  }
  .title h2 {
    position: relative;
    left: 48%;
    transform: translate(-50%);
    font-weight: 900;
  }
  .location input {
    width: 99%;
    height: 2rem;
    padding-left: 10px;
    outline: 0;
    border: 0;
    border-radius: 7px;
  }
  .location button,
  .unit button {
    margin-top: 20px;
    width: 100%;
    outline: 0;
    border: 0;
    border-radius: 7px;
    height: 2rem;
    cursor: pointer;
    background-color: teal;
    color: white;
    margin-bottom: 30px;
  }
  .unit select {
    width: 100%;
    height: 2rem;
    outline: 0;
    border: 0;
    border-radius: 7px;
    cursor: pointer;
  }

  .unit button {
    background-color: white;
    color: black;
    border: 2px solid teal;
  }

  .restore button {
    width: 100%;
    outline: 0;
    border: 0;
    border-radius: 7px;
    height: 2rem;
    cursor: pointer;
    margin-bottom: 100px;
  }
`;

let DIV = styled.div`
  position: fixed;
  top: 8%;
  left: 50%;
  transform: translate(-50%);
  width: max-content;
  padding: 5px 30px;
  border-radius: 7px;
  background-color: teal;
  color: white;
  text-align: center;
`;
