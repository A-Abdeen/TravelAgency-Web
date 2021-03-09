//React
import { Link, useParams } from "react-router-dom";
import {useSelector} from "react-redux";
//Components
import FlightItem from "./FlightList/FlightItem";
import FlightList from "./FlightList";

const Airline = () => {
  const flights = useSelector((state) => state.flightReducer.flights);
  // const airlines = useSelector((state) => state.airlineReducer.airlines);
  const {airlineId} = useParams();
console.log(airlineId);
console.log(flights);
  // const airlineFlights = airlines.flights.map((flight) =>
  // allFlights.find((_flight) => _flight.airlineId === airlines.action.payload.id))
  // console.log(airlines);

  const airlineFlights = flights.filter((flight) => flight.airlineId === airlineId)
     .map((flight) => (<FlightItem key={flight.id} flight={flight} />));
      
  return (
    <div>
      <Link to={`/airlines/1/flights/new`}>Add Flight</Link>
      <FlightList flight={airlineFlights}/>
    </div>
  );
};

export default Airline;