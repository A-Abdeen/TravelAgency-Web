//React
import React from "react";
//Styling
import {FlightCard, Table} from "../../styles";


const SearchItem = ({ flight }) => {
  return (
    <FlightCard className="card w-75">
  <div class="card-body">
    <Table>
      <tr>
      From:<td>{flight.fromLocationId}</td>
      To:<td>{flight.toLocationId}</td>
      </tr>
      <tr>
      DepartureDate:<td> {flight.departureDate}, {flight.departureTime}</td>
      ArrivalDate:<td> {flight.arrivalDate}, {flight.arrivalTime}</td>
      </tr>
      <tr>
      Seats available:<td>{flight.economySeats}</td>
      Price:<td>BHD {flight.economyPrice}</td>
      </tr>
    </Table>
      <button className="btn btn-lg-danger">Book</button>
      </div>
    </FlightCard>
  );
};

export default SearchItem;
