import { Link, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import FlightList from "./FlightList";
import { AddFlight } from "../styles";
import Loading from "../components/Loading";

const Airline = () => {
  const flights = useSelector((state) => state.flightReducer.flights); // Check if it breaks anything, and delete
  const user = useSelector((state) => state.authReducer.user);
  const airline = useSelector((state) => state.airlineReducer.airlines);
  const loading = useSelector((state) => state.airlineReducer.loading);

  if (loading) return <Loading />;
  let foundAirline;
  if (user)
    foundAirline = airline.find((airline) => user.id === airline.adminId);
  if (!user || user.userType !== "admin") {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <Link to={`/flights/${foundAirline?.id}/new`}>
        <AddFlight type="button" className="btn btn-info float-right">
          Add Flight
        </AddFlight>
      </Link>
      <FlightList flights={foundAirline.flights} />
    </div>
  );
};

export default Airline;
