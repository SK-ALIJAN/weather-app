import icon1 from "../assets/icons/01d.png";
import icon2 from "../assets/icons/01n.png";
import icon3 from "../assets/icons/02d.png";
import icon4 from "../assets/icons/02n.png";
import icon5 from "../assets/icons/03d.png";
import icon6 from "../assets/icons/03n.png";
import icon7 from "../assets/icons/04d.png";
import icon8 from "../assets/icons/04n.png";
import icon9 from "../assets/icons/09d.png";
import icon10 from "../assets/icons/09n.png";
import icon11 from "../assets/icons/10d.png";
import icon12 from "../assets/icons/10n.png";
import icon13 from "../assets/icons/11d.png";
import icon14 from "../assets/icons/11n.png";
import icon15 from "../assets/icons/13d.png";
import icon16 from "../assets/icons/13n.png";
import icon17 from "../assets/icons/50d.png";
import icon18 from "../assets/icons/50n.png";
import unknown from "../assets/icons/unknown.png";

const allWeatherIcons = {
  "01d.png": icon1,
  "01n.png": icon2,
  "02d.png": icon3,
  "02n.png": icon4,
  "03d.png": icon5,
  "03n.png": icon6,
  "04d.png": icon7,
  "04n.png": icon8,
  "09d.png": icon9,
  "09n.png": icon10,
  "10d.png": icon11,
  "10n.png": icon12,
  "11d.png": icon13,
  "11n.png": icon14,
  "13d.png": icon15,
  "13n.png": icon16,
  "50d.png": icon17,
  "50n.png": icon18,
  "unknown.png": unknown,
};

export function weatherIcon(imageName) {
  const iconModule = allWeatherIcons[imageName];

  if (iconModule) {
    return iconModule;
  }
  return null;
}
