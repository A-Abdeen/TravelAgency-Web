import { Description } from "../styles";
import FlightSearch from "./forms/SearchForm";
import SearchList from "./searchList";
import {useSelector} from "react-redux";
import Loading from "./Loading";
import { useState } from "react";

const Home = () => {
  // const [_flights, setFlights] = useState();

  const foundFlights = useSelector((state) => state.flightReducer.foundFlights);
  const loading = useSelector((state) => state.flightReducer.loading);
  if (loading) return <Loading />;

  // const user = useSelector((state) => state.authReducer.user);

  return (
    <div>
      <Description>Discover Incredible Places Around the Globe</Description>
      <FlightSearch />
      <SearchList flights={foundFlights}/>
    </div>
  );
};

export default Home;
