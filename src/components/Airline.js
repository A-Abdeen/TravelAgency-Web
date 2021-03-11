//React
import { Link, Redirect, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import FlightList from "./FlightList";

const Airline = () => {
  const flights = useSelector((state) => state.flightReducer.flights);
  const user = useSelector((state) => state.authReducer.user);
  const airline = useSelector((state) => state.airlineReducer.airlines);
  let foundAirline;
  if (user)
    foundAirline = airline.find((airline) => user.id === airline.adminId);
if (!user || user.userType !== "admin"){
  return <Redirect to="/"/>

}
  
  console.log(airline.id);
  return (
    <div>
      <Link to={`/flights/${foundAirline?.id}/new`}>Add Flight</Link>
      <FlightList flights={flights}/>
    </div>
  );
};

export default Airline;
