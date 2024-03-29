import Homepage from "../../assets/Homepage.png";
import { styled } from "styled-components";
import ToggleSwitch from "./ToggleSwitch";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Default_Location } from "../../Redux/actionType";
import { useNavigate } from "react-router-dom";
import { BsGithub } from "react-icons/bs";
import logo from "../../assets/logo.png";

// to get the date
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
    <DIV>
      <NAV>
        <img src={logo} alt="" id="title" />
        <p id="date">
          {date}{" "}
          <a href="https://github.com/SK-ALIJAN">
            <BsGithub />
          </a>
        </p>
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
            <div>
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
          </div>
        ) : (
          ""
        )}

        {show.dialog2 ? (
          <div className="Dialog2">
            <div>
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
          </div>
        ) : (
          ""
        )}
      </ModalWrapper>
    </DIV>
  );
};

export default Home;

const NAV = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 30px;
  #title {
    width: 10rem;
    height: 4rem;
    object-fit: cover;
  }
  #date {
    font-size: 0.8rem;
    font-weight: 600;
    letter-spacing: 2px;
    display: flex;
    align-items: center;
  }
  #date a {
    color: teal;
    margin-left: 10px;
    position: relative;
    top: 1px;
    font-size: 0.9rem;
  }
  @media screen and (max-width: 900px) {
    #title {
      width: 8rem;
      height: 2rem;
    }
  }
  @media screen and (max-width: 600px) {
    #title {
      width: 5rem;
      height: 2rem;
    }
    #date {
      font-size: 0.5rem;
    }
    padding-top: 15px;
  }

  @media screen and (max-width: 400px) {
    #title {
      margin-right: 5px;
    }
    #date {
      font-size: 0.3rem;
      margin-right: 5px;
    }
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

  @media screen and (max-width: 600px) {
    margin-top: 100px;
  }
`;

let ModalWrapper = styled.div`
  .Dialog1,
  .Dialog2 {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #2726269a;
  }

  .Dialog1 > div,
  .Dialog2 > div {
    background-color: #0ba999;
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
  .Dialog1 input {
    height: 2rem;
    outline: 0;
    border: 0.5px solid #6a6767;
    border-radius: 5px;
    margin-bottom: 20px;
    padding-left: 10px;
  }
  .Dialog1 button,
  .Dialog2 button {
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
  .Dialog1 button:hover {
    background-color: #08cebabb;
  }
  h3 {
    text-align: center;
  }
  .Dialog2 p {
    text-align: center;
    color: red;
    position: relative;
    bottom: 10px;
  }
  @media screen and (max-width: 450px) {
    .Dialog1,
    .Dialog2 {
      width: 85%;
    }
  }
`;

let DIV = styled.div`
  @media screen and (max-width: 900px) {
    height: 100vh;
  }
  @media screen and (max-width: 600px) {
    height: 120vh;
  }
`;
