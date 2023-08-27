import { getCityError, getCityRequest, getCitySuccess } from "../actionType";

const InitialValue = {
  isLoading: false,
  data: [],
  isError: false,
  ErrorMessage: "",
};

export const cityReducer = (state = InitialValue, { type, payload }) => {
  switch (type) {
    case getCityRequest:
      return {
        ...state,
        isLoading: true,
        isError: false,
        ErrorMessage: "",
      };

    case getCitySuccess:
      return {
        ...state,
        isLoading: false,
        data: payload,
        isError: false,
        ErrorMessage: "",
      };
    case getCityError:
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
