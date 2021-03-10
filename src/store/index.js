import { applyMiddleware, compose, createStore } from "redux";
import rootReducer from "./reducers";
import thunk from "redux-thunk";
import { checkForToken } from "./actions/authActions";
import { fetchFlights } from "./actions/flightActions";
import {
  // fetchAirlineFlight,
  fetchAirlines,
} from "./actions/airlineActions";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

store.dispatch(fetchFlights());
store.dispatch(checkForToken());
store.dispatch(fetchAirlines());
// store.dispatch(fetchAirlineFlight());

export default store;
