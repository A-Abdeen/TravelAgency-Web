import { Link } from "react-router-dom";
import { AddFlight } from "../../styles";

const UpdateButton = ({ flight }) => {
  return (
    <Link to={`/flights/${flight.id}/edit`}>
      <AddFlight className="btn btn-info ">Edit</AddFlight>
    </Link>
  );
};

export default UpdateButton;