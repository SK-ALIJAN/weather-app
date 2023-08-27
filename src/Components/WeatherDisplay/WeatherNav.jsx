import { useState } from "react";
import { FiSearch, FiSettings } from "react-icons/fi";
import { TfiSupport } from "react-icons/tfi";
import ToggleSwitch from "../Home/ToggleSwitch";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import Search from "./Search";

const WeatherNav = () => {
  let Navigate = useNavigate();
  let [searchShow, setSearchShow] = useState(false);
  let handleClick = () => {
    setSearchShow(!searchShow);
  };
  let SearchBarHide = () => {
    setSearchShow(false);
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
          <ToggleSwitch />
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
  padding: 10px 30px;
  background-color:#E5E5E5;
  width: 100%;
  height:5vh;
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
`;
