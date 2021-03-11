import React from "react";
import {useSelector} from "react-redux";
import Loading from "../Loading";
import FlightItem from "./FlightItem";

const FlightList = ({ flights }) => {
  // const loading = useSelector((state) => state.flightReducer.loading);
  // if (loading) return <Loading/>;

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
