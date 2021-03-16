import React from "react";
import { FlightCard, Table } from "../../styles";

const SearchItem = ({ flight }) => {
  // change from and to like the flightlist component (id -> name)
  return (
    <FlightCard className="card w-75">
      <div class="card-body">
        <Table>
          <tr>
            <td>{flight.airline.name}</td>
          </tr>
          <tr>
            From:<td>{flight.originId}</td>
            To:<td>{flight.destinationId}</td>
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
        <button className="btn btn-lg-danger">Book</button>
      </div>
    </FlightCard>
  );
};

export default SearchItem;
