//React
import React from "react";
//Styling
import {FlightCard} from "../../styles";
//Components
import UpdateButton from "../buttons/UpdateButton";

const FlightItem = ({ flight }) => {
  return (
    <FlightCard className="card w-75">
  <div class="card-body">
      <p> {flight.toLocationId}</p>
      <p> {flight.fromLocationId}</p>
      <p>BusinessPrice: BHD {flight.businessPrice}</p>
      <p>BusinessSeats: {flight.businessSeats}</p>
      <p>EconomyPrice: BHD {flight.economyPrice}</p>
      <p>EconomySeats: {flight.economySeats}</p>
      <p>ArrivalDate: {flight.arrivalDate}</p>
      <p>DepartureDate: {flight.departureDate}</p>
      <UpdateButton flight={flight} />
      </div>
    </FlightCard>
  );
};

export default FlightItem;
