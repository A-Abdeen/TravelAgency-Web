import React from "react";
import SearchItem from "./SearchItem";
import {useSelector} from "react-redux";
import Loading from "../Loading";

const SearchList = ({ flights }) => {
    const loading = useSelector((state) => state.flightReducer.loading);
    if (loading) return <Loading />;

    let searchList;
    if (flights) 
     searchList = flights.map((flight) => (
        <SearchItem flight={flight} key={flight.id} />
    ));

  return (
    <div className="container">
      <div>{searchList}</div>
    </div>
  );
};

export default SearchList;
