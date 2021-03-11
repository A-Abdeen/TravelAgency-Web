import { Link } from "react-router-dom";

const UpdateButton = ({ flight }) => {
  return (
    <Link to={`/flights/${flight.id}/edit`}>
      <button className="btn btn-primary">Edit</button>
    </Link>
  );
};

export default UpdateButton;