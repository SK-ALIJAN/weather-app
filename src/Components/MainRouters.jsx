import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Weather from "./WeatherDisplay/Weather";
import NotFound from "./Home/NotFound";
import Setting from "../Components/Settings/Setting";
import Support from "../Components/Support/Support"

const MainRouters = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/weather" element={<Weather />} />
      <Route path="/settings" element={<Setting />} />
      <Route path="/support" element={<Support />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default MainRouters;
