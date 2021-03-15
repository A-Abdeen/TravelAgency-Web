// import { Link } from "react-router-dom";
// import { useSelector } from "react-redux";
//Styling
import { Description } from "../styles";
import FlightSearch from "./forms/SearchForm";

const Home = () => {
  // const user = useSelector((state) => state.authReducer.user);

  return (
    <div>
      <Description>Discover Incredible Places Around the Globe</Description>
      <FlightSearch />
    </div>
  );
};

export default Home;
