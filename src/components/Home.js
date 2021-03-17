import { Description } from "../styles";
import FlightSearch from "./forms/SearchForm";
import SearchList from "./searchList";
import { useSelector } from "react-redux";

const Home = () => {
  const foundFlights = useSelector((state) => state.flightReducer.foundFlights);

  return (
    <div>
      <Description>Discover Incredible Places Around the Globe</Description>
      <FlightSearch />
      <SearchList flights={foundFlights} />;
    </div>
  );
};

export default Home;
