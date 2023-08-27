import { useSelector } from "react-redux";
import "./App.css";
import MainRouters from "./Components/MainRouters";
import { styled } from "styled-components";

function App() {
  let mode = useSelector((store) => store.toggleReducer.mode);
  return (
    <DIV mode={mode.toString()}>
      <MainRouters />
    </DIV>
  );
}

export default App;

let DIV = styled.div`
  background-color: ${({ mode }) => (mode == "false" ? "#171717" : "#D3D3D3")};
  color: ${({ mode }) => (mode == "false" ? "#D3D3D3" : "#171717")};
`;
