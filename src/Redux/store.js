import {
  legacy_createStore as createStore,
  combineReducers,
  compose,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";
import { weatherReducer } from "./Reducer/weatherReducer";
import { forcastReducer } from "./Reducer/forcastReducer";
import { cityReducer } from "./Reducer/cityReducer";

const RootReducer = combineReducers({
  weatherReducer,
  forcastReducer,
  cityReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  RootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
