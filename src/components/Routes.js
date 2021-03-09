// React-Router
import { Route, Switch } from "react-router";

// Components
import Home from "./Home";
import Signup from "./authentications/Signup";
import Signin from "./authentications/Signin";
import FlightList from "./FlightList";
import { useSelector } from "react-redux";

function Routes() {
  const flights = useSelector((state) => state.flightReducer.flights);
  console.log(flights);
  return (
    <Switch>
      <Route path="/flights">
        <FlightList flights={flights} />
      </Route>
      <Route path="/signin">
        <Signin />
      </Route>
      <Route path="/signup">
        <Signup />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
}

export default Routes;
