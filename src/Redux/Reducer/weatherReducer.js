import {
  getWeatherError,
  getWeatherRequest,
  getWeatherSuccess,
} from "../actionType";

const InitialValue = {
  isLoading: false,
  data: {},
  isError: false,
  ErrorMessage: "",
};

export const weatherReducer = (state = InitialValue, { type, payload }) => {
  switch (type) {
    case getWeatherRequest:
      return {
        ...state,
        isLoading: true,
        isError: false,
        ErrorMessage: "",
      };

    case getWeatherSuccess:
      return {
        ...state,
        isLoading: false,
        data: payload,
        isError: false,
        ErrorMessage: "",
      };
    case getWeatherError:
      return {
        ...state,
        isLoading: false,
        isError: true,
        ErrorMessage: payload,
      };
    default:
      return state;
  }
};
