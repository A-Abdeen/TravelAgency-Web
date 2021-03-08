import { checkForToken } from "./actions/authActions";
import {applyMiddleware,compose, createStore} from "redux";
import thunk from "redux-thunk";
import reducer from "./reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware (thunk)));
store.dispatch(checkForToken());

export default store;