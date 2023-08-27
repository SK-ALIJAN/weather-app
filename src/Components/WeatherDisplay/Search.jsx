import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeatherData } from "../../Redux/action";
import { styled } from "styled-components";
import { Default_Location } from "../../Redux/actionType";
import { MdOutlineCancel } from "react-icons/md";

const Search = (props) => {
  let Default_location = useSelector(
    (store) => store.toggleReducer.default_location
  );
  let [searchValue, setSearchValue] = useState("");
  let [errorshow, setErrorShow] = useState(false);
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchWeatherData(Default_location));
  }, []);

  let handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  let handleSubmit = () => {
    if (searchValue !== "") {
      dispatch({ type: Default_Location, payload: searchValue });
      dispatch(fetchWeatherData(searchValue));
      props.SearchBarHide();
    } else {
      setErrorShow(true);
    }
  };

  return (
    <DIV errorShow={errorshow.toString()}>
      <MdOutlineCancel
        id="crossIcon"
        onClick={() => {
          props.SearchBarHide();
        }}
      />
      <div>
        <label>Search City</label>
        <input
          type="text"
          onChange={handleChange}
          placeholder="Enter city name "
        />
        {errorshow ? <p>Please enter city name</p> : ""}
      </div>

      <button onClick={handleSubmit}>Save Location!</button>
    </DIV>
  );
};

export default Search;

let DIV = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #08ceb9;
  height: 45vh;
  position: fixed;
  bottom: 1px;
  left: 50%;
  transform: translate(-50%);
  z-index: 3;
  border-radius: 6px;
  padding: 30px;

  div {
    display: flex;
    flex-direction: column;
    position: relative;
    top: 20px;
  }
  div label {
    color: white;
    margin-bottom: 10px;
  }
  div input {
    height: 2rem;
    outline: 0;
    border: 0;
    outline: ${({ errorShow }) => (errorShow == "true" ? "3px solid red" : 0)};
    width: 15rem;
    padding-left: 10px;
    margin-bottom: ${({ errorShow }) => (errorShow == "true" ? 0 : "50px")};
    border-radius: 8px;
  }
  div > p {
    font-size: 15px;
    color: red;
  }

  button {
    padding: 10px 30px;
    background-color: white;
    border: 0;
    width: max-content;
    display: block;
    align-self: center;
    border-radius: 8px;
    cursor: pointer;
    position: relative;
    top: 20px;
  }
  #crossIcon {
    position: absolute;
    right: 10px;
    top: 10px;
    color: white;
    font-size: 2rem;
    cursor: pointer;
  }
  #crossIcon:hover {
    color: #0a0a0a90;
  }
`;
