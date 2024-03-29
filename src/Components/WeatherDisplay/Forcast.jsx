import { useSelector } from "react-redux";
import { weatherIcon } from "../../utilities/IconUtils";
import { CiTempHigh } from "react-icons/ci";
import { BiWind } from "react-icons/bi";
import { BsClouds } from "react-icons/bs";
import { WiHumidity } from "react-icons/wi";
import { styled } from "styled-components";
import { ToCalsious, ToFarenhide, ToKelvin } from "../../utilities/TempChanger";

const Forcast = () => {
  let forcastData = useSelector((store) => store.forcastReducer.data);
  let today_forcast = [];
  const Weekly_forcast = [];

  let default_setting = useSelector(
    (store) => store.toggleReducer.default_setting
  );

  // ........today date..............

  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, "0");
  const day = String(currentDate.getDate()).padStart(2, "0");
  const todays_Date = `${year}-${month}-${day}`;

  // ...........getting today forcast.............

  if ((Object.keys(forcastData).length === 0) == false) {
    const forcast = forcastData.list.filter((ele) => {
      let date = ele.dt_txt.split(" ");
      return todays_Date == date[0];
    });
    today_forcast = forcast;
  }

  // ............Weekly forcast................

  if ((Object.keys(forcastData).length === 0) == false) {
    for (let i = 1; i < forcastData.list.length; i++) {
      let today = forcastData.list[i - 1].dt_txt.split(" ")[0];
      let tommarow = forcastData.list[i].dt_txt.split(" ")[0];

      if (today !== tommarow) {
        Weekly_forcast.push(forcastData.list[i]);
      }
    }
  }

  function forcastTime(str) {
    let time = str.trim().split(" ")[1];
    let actualTime = time.trim().split(":");
    return `${actualTime[0]}:${actualTime[1]}`;
  }

  function dayFinder(celender) {
    const date = new Date(celender);
    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    const dayName = daysOfWeek[date.getDay()];

    return dayName;
  }

  return (
    <DIV>
      {Object.keys(forcastData).length === 0 ? (
        ""
      ) : (
        <>
          <header className="head">
            <h2>{"TODAY'S FORECAST"}</h2>
            <p>{today_forcast.length} available forecasts</p>
            <WRAPPER>
              {today_forcast.map((ele) => {
                return (
                  <div key={ele.dt} className="forcast">
                    <p>{forcastTime(ele.dt_txt)}</p>

                    <div className="sidebyside">
                      <img
                        src={weatherIcon(`${ele.weather[0].icon}.png`)}
                        alt=""
                      />
                      <p className="temparature">
                        {default_setting == "kel"
                          ? ToKelvin(Math.ceil(ele.main.temp))
                          : default_setting == "cal"
                          ? ToCalsious(Math.ceil(ele.main.temp))
                          : ToFarenhide(Math.ceil(ele.main.temp))}
                      </p>
                    </div>

                    <div>
                      <p>{ele.weather[0].description}</p>
                    </div>
                  </div>
                );
              })}
            </WRAPPER>
          </header>

          <header id="weekly_forcast">
            <h2>{"Tomorrow's Weather Forecast"}</h2>
            <div className="All_forcast">
              {Weekly_forcast.map((ele) => {
                return (
                  <div key={ele.dt}>
                    <div>
                      <p id="dayname">{dayFinder(ele.dt_txt.split(" ")[0])}</p>
                      <div id="image_state">
                        <img
                          src={weatherIcon(`${ele.weather[0].icon}.png`)}
                          alt=""
                        />
                        <p>{ele.weather[0].description}</p>
                      </div>
                    </div>

                    <div className="forIcons">
                      <p>
                        <CiTempHigh className="iconss" />
                        {default_setting == "kel"
                          ? ToKelvin(Math.ceil(ele.main.temp))
                          : default_setting == "cal"
                          ? ToCalsious(Math.ceil(ele.main.temp))
                          : ToFarenhide(Math.ceil(ele.main.temp))}
                      </p>
                      <p>
                        <BsClouds className="iconss" />
                        {ele.clouds.all} %
                      </p>
                    </div>

                    <div className="forIcons">
                      <p>
                        <BiWind className="iconss" />
                        {ele.wind.speed} m/s
                      </p>
                      <p>
                        <WiHumidity className="iconss" />
                        {ele.main.humidity} %
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </header>
        </>
      )}
    </DIV>
  );
};

export default Forcast;
let DIV = styled.div`
  margin-top: 20px;
  .head > h2,
  .head > p {
    text-align: center;
  }
  .head > p {
    font-size: 15px;
    position: relative;
    bottom: 15px;
  }
  #weekly_forcast h2 {
    text-align: center;
  }
  .All_forcast > div {
    display: flex;
    justify-content: space-around;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
      rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
    margin-bottom: 20px;
  }
  #dayname {
    font-weight: 600;
    letter-spacing: 2px;
  }
  #image_state {
    display: flex;
    align-items: center;
    position: relative;
    bottom: 10px;
  }
  .All_forcast div img {
    width: 2rem;
    margin-right: 10px;
  }
  .forIcons p {
    display: flex;
    align-items: center;
  }
  .iconss {
    margin-right: 10px;
    font-size: 1.5rem;
  }

  @media screen and (max-width: 600px) {
    #weekly_forcast p {
      font-size: 0.7rem;
    }
    #weekly_forcast h2 {
      font-size: 1rem;
    }
  }
`;

let WRAPPER = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 90%;
  margin: auto;
  .forcast {
    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
      rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
    padding: 10px 30px;
    margin: 10px;
    text-align: center;
    border-radius: 11px;
  }
  .forcast img {
    width: 4rem;
  }
  .sidebyside {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .temparature {
    margin-left: 10px;
    font-weight: 600;
  }
  @media screen and (max-width: 600px) {
    width: 90%;
    place-content: center;
    .forcast {
      width: 80%;
      padding: 0px 50px;
    }
    .forcast img {
      width: 5rem;
    }
  }
`;
