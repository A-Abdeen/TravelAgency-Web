import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import UpdateProfile from "./UpdateProfile";

const Profile = () => {
  const [edit, setEdit] = useState(false);
  const _user = useSelector((state) => state.authReducer.user);

  return (
    <div className="container">
      {/* <h4>User Profile</h4>
      <p>{_user.id}</p>
      <p>{_user.username}</p>
      <p>{_user.email}</p> */}
      <UpdateProfile />
      {/* <Link to={`profile/${_user.id}/edit`}>
        <button className="btn btn-primary">Edit Profile</button>
      </Link> */}
    </div>
  );
};

export default Profile;
