// React-Router
import { Route, Switch } from "react-router";
import { useSelector } from "react-redux";
// Components
import Home from "./Home";
import Signup from "./authentications/Signup";
import Signin from "./authentications/Signin";
import FlightList from "./FlightList";
import FlightForm from "./forms/FlightForm";
import Airline from "./Airline";

const Routes = () => {
  const flights = useSelector((state) => state.flightReducer.flights);

  return (
    <Switch>
      <Route path="/airlines">
        <Airline />
      </Route>
      <Route path={["/flights/new", "/flights/:flightId/edit"]}>
        <FlightForm />
      </Route>
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
};

export default Routes;
