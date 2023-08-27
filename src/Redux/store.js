import {
  legacy_createStore as createStore,
  combineReducers,
  compose,
  applyMiddleware,
} from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Use storage of your choice

import thunk from "redux-thunk";
import { weatherReducer } from "./Reducer/weatherReducer";
import { forcastReducer } from "./Reducer/forcastReducer";
import { cityReducer } from "./Reducer/cityReducer";
import { toggleReducer } from "./Reducer/toggleReducer";

const RootReducer = combineReducers({
  weatherReducer,
  forcastReducer,
  cityReducer,
  toggleReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
  key: "root", // Key under which your data will be stored
  storage, // Storage mechanism to use
  // Other options like whitelist, blacklist, etc.
};

const persistedReducer = persistReducer(persistConfig, RootReducer);

export const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export const persistor = persistStore(store);
