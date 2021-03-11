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
import Profile from "./profile"

const Routes = () => {
  const flights = useSelector((state) => state.flightReducer.flights);

  return (
    <Switch>
      <Route path="/profile">
        <Profile />
      </Route>
      <Route path="/airlines">
        <Airline />
      </Route>
      <Route path={["/flights/:flightId/edit", "/flights/:airlineId/new"]}>
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
