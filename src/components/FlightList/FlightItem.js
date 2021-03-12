//React
import React from "react";
//Styling
import {FlightCard, Table} from "../../styles";
//Components
import UpdateButton from "../buttons/UpdateButton";

const FlightItem = ({ flight }) => {
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
      EconomySeats:<td>{flight.economySeats}</td>
      EconomyPrice:<td>BHD {flight.economyPrice}</td>
      </tr>
      <tr>
      BusinessSeats:<td>{flight.businessSeats}</td>
      BusinessPrice:<td>BHD {flight.businessPrice}</td>
      </tr>
    </Table>
      <UpdateButton flight={flight} />
      </div>
    </FlightCard>
  );
};

export default FlightItem;
