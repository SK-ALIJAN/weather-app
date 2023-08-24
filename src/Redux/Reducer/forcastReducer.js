import {
  getForcastError,
  getForcastRequest,
  getForcastSuccess,
} from "../actionType";

const InitialValue = {
  isLoading: false,
  data: {},
  isError: false,
  ErrorMessage: "",
};

export const forcastReducer = (state = InitialValue, { type, payload }) => {
  switch (type) {
    case getForcastRequest:
      return {
        ...state,
        isLoading: true,
        isError: false,
        ErrorMessage: "",
      };

    case getForcastSuccess:
      return {
        ...state,
        isLoading: false,
        data: payload,
        isError: false,
        ErrorMessage: "",
      };
    case getForcastError:
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
