import {
  Default_Location,
  Default_Setting,
  InitialKelvinFromApi,
  ToggleMode,
} from "../actionType";

let Initialdata = {
  mode: false,
  default_location: "",
  initialKelvinTemp: 0,
  default_setting: "cal",
};

export const toggleReducer = (state = Initialdata, { type, payload }) => {
  switch (type) {
    case ToggleMode:
      return { ...state, mode: !state.mode };
    case Default_Location:
      return { ...state, default_location: payload };
    case Default_Setting:
      return { ...state, default_setting: payload };
    case InitialKelvinFromApi:
      return {
        ...state,
        initialKelvinTemp: payload,
      };
    default:
      return state;
  }
};
