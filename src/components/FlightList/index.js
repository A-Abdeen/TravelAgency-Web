import React from "react";
import FlightItem from "./FlightItem";

const FlightList = ({ flights }) => {
  const flightList = flights.map((flight) => (
    <FlightItem flight={flight} key={flight.id} />
  ));

  return (
    <div className="container">
      <div>{flightList}</div>
    </div>
  );
};

export default FlightList;
