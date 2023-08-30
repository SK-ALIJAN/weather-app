import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { ToggleMode } from "../../Redux/actionType";

const ToggleSwitch = () => {
  let dispatch = useDispatch();
  const currentMode = useSelector((store) => store.toggleReducer.mode);

  let handleChange = () => {
    dispatch({ type: ToggleMode });
  };

  return (
    <SwitchContainer>
      <input type="checkbox" onChange={handleChange} />
      <Slider mode={currentMode} />
    </SwitchContainer>
  );
};

const SwitchContainer = styled.label`
  font-size: 17px;
  position: relative;
  display: inline-block;
  width: 3.5em;
  height: 2em;

  @media screen and (max-width: 600px) {
    width: 3rem;
    height: 1.7rem;
  }

     @media screen and (max-width: 400px) {
    
  }
`;

const Slider = styled.span`
  --background: #28096b;
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--background);
  transition: 0.5s;
  border-radius: 30px;

  &:before {
    position: absolute;
    content: "";
    height: 1.4em;
    width: 1.4em;
    border-radius: 50%;
    left: 10%;
    bottom: 15%;
    box-shadow: inset 8px -4px 0px 0px #fff000;
    background: var(--background);
    transition: 0.5s;
  }

  ${SwitchContainer} input:checked + & {
    background-color: #522ba7;
  }

  ${SwitchContainer} input:checked + &::before {
    transform: translateX(100%);
    box-shadow: inset 15px -4px 0px 15px #fff000;
  }

  @media screen and (max-width: 600px) {
    &:before {
      height: 1.4em;
      width: 1.4em;
    }
  }
`;

export default ToggleSwitch;
