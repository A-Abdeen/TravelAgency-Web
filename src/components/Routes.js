import { Route, Switch } from "react-router";
import { useSelector } from "react-redux";
import Home from "./Home";
import Signup from "./authentications/Signup";
import Signin from "./authentications/Signin";
import FlightList from "./FlightList";
import FlightForm from "./forms/FlightForm";
import Airline from "./Airline";
import Profile from "./profile";
import Booking from "./forms/Booking";
import UpdateProfile from "./profile/index";

const Routes = () => {
  const flights = useSelector((state) => state.flightReducer.flights);
  const user = useSelector((state) => state.authReducer.user); // check if it breaks anything then delete

  return (
    <Switch>
      <Route path="/booking">
        <Booking />
      </Route>
      <Route path="/profile/">
        <Profile />
      </Route>
      <Route path="/airlines">
        <Airline />
      </Route>
      <Route path="/profile/:userId/edit">
        <UpdateProfile />
      </Route>
      <Route path={["/flights/:airlineId/new", "/flights/:flightId/edit"]}>
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
