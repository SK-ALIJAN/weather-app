import React from "react";
import WeatherNav from "../WeatherDisplay/WeatherNav";
import { AiOutlineLeftCircle } from "react-icons/ai";
import { BsGithub, BsLinkedin, BsFillHandThumbsUpFill } from "react-icons/bs";
import { BiLogoGmail } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import my_pic from "../../assets/my_pic.png";
const Support = () => {
  let Navigate = useNavigate();
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
          <h2>Support me</h2>
        </div>

        <div className="my_pic">
          <img src={my_pic} alt="" />
          <h2>Sk Alijan</h2>
          <p> Full stack web developer</p>
          <div>
            <a href="https://github.com/SK-ALIJAN">
              <BsGithub />
            </a>
            <a href="https://www.linkedin.com/in/alijan786/">
              <BsLinkedin />
            </a>
            <a href="mailto:alizaan8695@.gmail.com">
              <BiLogoGmail />
            </a>
          </div>
        </div>

        <div id="my_details">
          <p>
            Hello, I'm Sk Alijan. I developed this weather application in 2023
            to enhance my React skills while creating an ad-free and
            user-friendly tool for personal use. I usually open-source this
            project to provide people with learning opportunities out of it .
          </p>
          <a href="https://github.com/SK-ALIJAN">
            <button>Support On Github</button>
          </a>
        </div>

        <div id="repo">
          <p className="text">
            <BsFillHandThumbsUpFill className="icon" /> Show Your Support for
            Further Development!
          </p>
          <p>
            You have the ability to access the source codes of this undertaking,
            mark the repository as a favorite, identify errors, and propose
            solutions for rectification. Additionally, you can partake in
            enhancing the project by providing solutions for newly proposed
            functionalities.
          </p>
          <a href="https://github.com/SK-ALIJAN/weather-app">
            <button>View Github Repository</button>
          </a>
        </div>
      </WRAPPER>
    </div>
  );
};

export default Support;

let WRAPPER = styled.div`
  padding: 0px 35px;
  padding-bottom: 100px;
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
  .my_pic {
    text-align: center;
  }
  .my_pic img {
    width: 10rem;
    border: 2px solid grey;
    border-radius: 100%;
  }

  .my_pic p {
    position: relative;
    bottom: 10px;
  }
  .my_pic > div a {
    font-size: 1.5rem;
    margin-right: 40px;
    color: teal;
  }
  #my_details {
    display: flex;
    flex-direction: column;
    margin-bottom: 40px;
  }
  #my_details button,
  #repo button {
    height: 2rem;
    border-radius: 7px;
    border: 2px solid teal;
    width: 100%;
    cursor: pointer;
  }
  #repo p {
    display: flex;
    align-items: center;
  }
  .text {
    font-weight: 600;
  }
  .icon {
    margin-right: 20px;
    color: teal;
  }

  @media screen and (max-width: 600px) {
    #my_details,#repo {
      font-size: 0.9rem;
    }
      .icon{
      font-size:4rem;
      }
  }
`;
