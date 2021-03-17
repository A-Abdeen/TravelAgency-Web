import { Description } from "../styles";
import FlightSearch from "./forms/SearchForm";
import SearchList from "./searchList";
import { useSelector } from "react-redux";
import Loading from "./Loading";
import { useState } from "react";

const Home = () => {
  // const loading = useSelector((state) => state.flightReducer.loading);
  const foundFlights = useSelector((state) => state.flightReducer.foundFlights);
  // if (loading) return <Loading />;
  // if (foundFlights) return

  console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%% PAYLOAD", foundFlights);
  // const [_flights, setFlights] = useState();

  return (
    <div>
      <Description>Discover Incredible Places Around the Globe</Description>
      <FlightSearch />
      <SearchList flights={foundFlights} />;
    </div>
  );
};

export default Home;
