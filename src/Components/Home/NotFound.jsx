import React from "react";
import NotFounds from "../../assets/NotFound.png";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
const NotFound = () => {
  let mode = "ligh";
  return (
    <DIV mode={mode}>
      <div>
        <img src={NotFounds} alt="" />
        <h1>Not Found !</h1>
        <p>The Page Requested For Was Not Found!</p>
        <button>
          <Link to={"/"}>Home</Link>
        </button>
      </div>
    </DIV>
  );
};

export default NotFound;

let DIV = styled.div`
  text-align: center;
  height: 100vh;
  div img {
    width: 50%;
    display: block;
    margin: auto;
  }
  button {
    background-color: teal;
    padding: 10px 40px;
    border: 0;
    border-radius: 5px;
    letter-spacing: 2px;
  }
  button a {
    text-decoration: none;
    color: white;
    cursor: pointer;
  }
  div {
    position: relative;
    top: 5%;
  }
`;
