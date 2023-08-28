import { useState } from "react";
import { FiSearch, FiSettings } from "react-icons/fi";
import { TfiSupport } from "react-icons/tfi";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import Search from "./Search";
import { ToggleMode } from "../../Redux/actionType";
import { useDispatch } from "react-redux";

const WeatherNav = () => {
  let Navigate = useNavigate();
  let [searchShow, setSearchShow] = useState(false);
  let dispatch = useDispatch();
  let handleClick = () => {
    setSearchShow(!searchShow);
  };

  let SearchBarHide = () => {
    setSearchShow(false);
  };

  let handleToggleSwitch = () => {
    dispatch({ type: ToggleMode });
  };

  return (
    <>
      <DIV>
        <div onClick={handleClick}>
          <FiSearch className="icon" />
          <p>Search</p>
        </div>

        <div
          onClick={() => {
            Navigate("/settings");
          }}
        >
          <FiSettings className="icon" />
          <p>Settings</p>
        </div>

        <div
          onClick={() => {
            Navigate("/support");
          }}
        >
          <TfiSupport className="icon" />
          <p>Support</p>
        </div>

        <div className="toggle">
          {/* <ToggleSwitch /> */}
          <button onClick={handleToggleSwitch} className="button">
            <span className="button-content"> Mode Toggle</span>
          </button>
        </div>
      </DIV>
      {searchShow ? (
        <div id="SearchPopup">
          <Search SearchBarHide={SearchBarHide} />
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default WeatherNav;

let DIV = styled.div`
  position: fixed;
  bottom: 0px;
  display: flex;
  justify-content: space-around;
  padding: 5px 0px;
  background-color: #e5e5e5;
  width: 100%;
  height: 5vh;
  div {
    display: flex;
    /* flex-direction: column; */
    align-items: center;
    justify-content: center;
    color: black;
    font-size: small;
  }
  div,
  p {
    cursor: pointer;
  }
  div:hover {
    color: teal;
  }
  .icon {
    margin-right: 5px;
  }
  #SearchPopup {
    position: fixed;
    bottom: 10rem;
  }
  .toggle button {
    padding: 3px;
    border-radius: 5px;
    border: 0.5px solid grey;
    cursor: pointer;
  }
  .button {
    position: relative;
    overflow: hidden;
    height: 1.5rem;
    padding: 0 2rem;
    border-radius: 1.5rem;
    background: #3d3a4e;
    background-size: 400%;
    color: #fff;
    border: none;
  }

  .button:hover::before {
    transform: scaleX(1);
  }

  .button-content {
    position: relative;
    z-index: 1;
  }

  .button::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    transform: scaleX(0);
    transform-origin: 0 50%;
    width: 100%;
    height: inherit;
    border-radius: inherit;
    background: linear-gradient(
      82.3deg,
      rgba(150, 93, 233, 1) 10.8%,
      rgba(99, 88, 238, 1) 94.3%
    );
    transition: all 0.475s;
  }
`;
