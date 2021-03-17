import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
//Styling
import { AddFlight, FlightCard, Table } from "../../styles";
import Booking from "../forms/Booking";

const SearchItem = ({ flight }) => {
  <Booking flight={flight} />;
  // const airline = useSelector((state) => state.airlineReducer.airlines);
  // let foundAirline = airline.find((airline) => user.id === airline.adminId);

  const origin = useSelector((state) => state.locationReducer.origins);
  const destination = useSelector(
    (state) => state.locationReducer.destinations
  );

  const foundOrigin = origin.find((origin) => origin.id === flight.originId);
  const foundDestination = destination.find(
    (destination) => destination.id === flight.destinationId
  );

  return (
    <FlightCard className="card w-75">
      <div class="card-body">
        <Table>
          <tr>
            <td>{flight.airline.name}</td>
          </tr>
          <tr>
            From:<td>{foundOrigin.airportName}</td>
            To:<td>{foundDestination.airportName}</td>
          </tr>
          <tr>
            DepartureDate:
            <td>
              {" "}
              {flight.departureDate}, {flight.departureTime}
            </td>
            ArrivalDate:
            <td>
              {" "}
              {flight.arrivalDate}, {flight.arrivalTime}
            </td>
          </tr>
          <tr>
            Price:
            <td>
              BHD{" "}
              {flight.class === "economySeats"
                ? flight.economyPrice
                : flight.businessPrice}
            </td>
          </tr>
        </Table>
        <Link to={`/booking/${flight.id}`}>
          <AddFlight className="btn btn-lg-danger">Book</AddFlight>
        </Link>
      </div>
    </FlightCard>
  );
};

export default SearchItem;
