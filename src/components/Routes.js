// React-Router
import { Route, Switch } from "react-router";
import { useSelector, useDispatch } from "react-redux";
// Components
import Home from "./Home";
import Signup from "./authentications/Signup";
import Signin from "./authentications/Signin";
import FlightList from "./FlightList";
import FlightForm from "./forms/FlightForm"
import Airline from "./Airline"
import { fetchFlights } from "../store/actions/flightActions";


function Routes() {
  const _flights = useSelector((state) => state.flightReducer.flights);
  console.log(_flights);
  console.log(useSelector((state) => state.flightReducer.flights));
   const dispatch = useDispatch();
  
   console.log(dispatch(fetchFlights()));

  return (
    <Switch>
      <Route path="/airline/:airlineId">
        <Airline />
      </Route>
      <Route path={["/airlines/:airlineId/flights/new", "/flights/:flightId/edit"]}>
        <FlightForm />
      </Route>
      <Route path="/flights">
        <FlightList flights={_flights} />
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
