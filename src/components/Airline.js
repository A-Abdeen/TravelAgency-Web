//React
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Airline = () => {
  const airline = useSelector((state) => state.airlineReducer.airlines);
  console.log(airline);
  return (
    <div>
      <Link to={`/airlines/${airline.id}/flights/new`}>Add Flight</Link>
      {/* {airline} */}
    </div>
  );
};

export default Airline;
