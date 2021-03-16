import { combineReducers } from "redux";

import authReducer from "./authReducer";
import flightReducer from "./flightReducer";
import airlineReducer from "./airlineReducer";
import locationReducer from "./locationReducer";
// Add booking Reducer
const rootReducer = combineReducers({
  authReducer,
  flightReducer,
  airlineReducer,
  locationReducer,
});

export default rootReducer;
