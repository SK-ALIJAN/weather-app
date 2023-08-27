import Homepage from "../../assets/Homepage.png";
import { styled } from "styled-components";
import ToggleSwitch from "./ToggleSwitch";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Default_Location } from "../../Redux/actionType";
import { useNavigate } from "react-router-dom";

function getFormattedDate() {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const now = new Date();

  const dayOfWeek = days[now.getDay()];
  const month = months[now.getMonth()];
  const dayOfMonth = now.getDate();
  const year = now.getFullYear();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const formattedDate = `${dayOfWeek} ${month} ${dayOfMonth} ${year} ${hours}:${minutes}`;

  return formattedDate;
}

const Home = () => {
  let [date] = useState(getFormattedDate());
  let [show, setShow] = useState({
    dialog1: false,
    dialog2: false,
  });
  let [text, setText] = useState("");
  let dispatch = useDispatch();
  let Navigate = useNavigate();

  let handleClick = () => {
    setShow((prev) => {
      return { ...prev, dialog1: true };
    });
  };

  let handleSave = () => {
    if (text == "") {
      setShow((prev) => {
        return { ...prev, dialog2: true, dialog1: false };
      });
    } else {
      dispatch({ type: Default_Location, payload: text });
      setShow((prev) => {
        return { ...prev, dialog1: false };
      });
      Navigate("/weather");
    }
  };

  return (
    <>
      <NAV>
        <p id="title"> Climate View</p>
        <p id="date">{date}</p>
        <ToggleSwitch />
      </NAV>

      <WRAPPER>
        <img src={Homepage} alt="" />
        <div>
          <p>
            Discover Real-Time Weather Conditions and Extended Forecasts for
            Over 200,000 Cities!
          </p>
          <p>
            Embark on a worldwide weather expedition: Uncover live conditions
            and extended 6-day forecasts for over thousands of cities globally!
          </p>
          <button onClick={handleClick}>Tap for Weather Update</button>
        </div>
      </WRAPPER>

      <ModalWrapper>
        {show.dialog1 ? (
          <div className="Dialog1">
            <h3>Default Location</h3>
            <input
              type="text"
              placeholder="Enter location"
              onChange={(e) => {
                setText(e.target.value);
              }}
              value={text}
            />
            <button onClick={handleSave}>Save Locaton</button>
          </div>
        ) : (
          ""
        )}

        {show.dialog2 ? (
          <div className="Dialog2">
            <h3>Invalid Location!</h3>
            <p>Please enter a valid location</p>
            <button
              onClick={() => {
                setShow((prev) => {
                  return { ...prev, dialog2: false };
                });
              }}
            >
              OK
            </button>
          </div>
        ) : (
          ""
        )}
      </ModalWrapper>
    </>
  );
};

export default Home;

const NAV = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 30px;
  #title {
    font-weight: 600;
    letter-spacing: 2px;
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
      "Lucida Sans", Arial, sans-serif;
  }
  #date {
    font-size: 0.8rem;
    font-weight: 600;
    letter-spacing: 2px;
  }
`;

let WRAPPER = styled.div`
  width: 95%;
  height: 95vh;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  img {
    width: 42%;
    display: block;
    margin: auto;
  }
  div {
    width: 50%;
  }
  button {
    border: 0;
    padding: 15px 40px;
    letter-spacing: 1px;
    background-color: #08ceb9;
    font-weight: 600;
    color: #434242;
    cursor: pointer;
    border-radius: 5px;
  }
  button:hover {
    background-color: #08cebacb;
  }
  @media screen and (max-width: 1300px) {
    flex-direction: column;
    height: max-content;
    img {
      width: 70%;
    }
    div {
      width: 90%;
      margin-bottom: 20px;
    }
  }
`;

let ModalWrapper = styled.div`
  .Dialog1,
  .Dialog2 {
    background-color: white;
    padding: 10px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 20rem;
    display: flex;
    flex-direction: column;
    color: black;
  }
  .Dialog1 > input {
    height: 2rem;
    outline: 0;
    border: 0.5px solid #6a6767;
    border-radius: 5px;
    margin-bottom: 20px;
    padding-left: 10px;
  }
  .Dialog1 > button,
  .Dialog2 > button {
    width: max-content;
    display: block;
    margin: auto;
    border: 0;
    background-color: #08ceba;
    color: #fff;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
  }
  .Dialog1 > button:hover {
    background-color: #08cebabb;
  }
  h3 {
    text-align: center;
  }
  .Dialog2 > p {
    text-align: center;
    color: red;
    position: relative;
    bottom: 10px;
  }
`;
