import React from "react";

const FlightItem = ({ flight }) => {
  return (
    <div className="container">
      <p> {flight.toLocationId}</p>
      <p> {flight.fromLocationId}</p>
      <p> BHD {flight.businessPrice}</p>
      <p> {flight.businessSeats}</p>
      <p> BHD {flight.economyPrice}</p>
      <p> {flight.economySeats}</p>
      <p> {flight.arrivalDate}</p>
      <p> {flight.departureDate}</p>
      {/* <UpdateButton slug={flight.id} /> */}
    </div>
  );
};

export default FlightItem;
