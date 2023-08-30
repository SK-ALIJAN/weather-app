import {
  Default_Location,
  Default_Setting,
  InitialKelvinFromApi,
  ToggleMode,
} from "../actionType";

let Initialdata = {
  mode: localStorage.getItem(ToggleMode) || true,
  default_location: localStorage.getItem(Default_Location) || "kolkata",
  initialKelvinTemp: 0,
  default_setting: "cal",
};

export const toggleReducer = (state = Initialdata, { type, payload }) => {
  switch (type) {
    case ToggleMode:
      localStorage.setItem(ToggleMode, !state.mode);
      return { ...state, mode: !state.mode };

    case Default_Location:
      localStorage.setItem(Default_Location, payload);
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
