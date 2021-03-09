import { Link } from "react-router-dom";

const UpdateButton = ({ slug }) => {
  return (
    <Link to={`/flights/${slug}/edit`}>
      <button className="btn btn-primary">Edit</button>
    </Link>
  );
};

export default UpdateButton;