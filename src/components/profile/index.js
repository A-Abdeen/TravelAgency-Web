import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { updateUser } from "../../store/actions/authActions";
import { useDispatch, useSelector } from "react-redux";
import { EditableInput } from "react-form-editables";
import Loading from "../Loading";

const Profile = () => {
  const loading = useSelector((state) => state.airlineReducer.loading);
  const _user = useSelector((state) => state.authReducer.user);
  const dispatch = useDispatch();
  const history = useHistory();
  const [user, setUser] = useState({
    ..._user,
    username: _user.username,
    email: _user.email,
  });
  if (loading) return <Loading />;

  const handleSubmit = () => {
    dispatch(updateUser(user));

    history.replace("/"); //MUST AUTO RELOAD
  };

  return (
    <div className="container">
      <h3>EDIT PROFILE</h3>
      <div className="form-group">
        <label>Username</label>
        <EditableInput
          name="username"
          value={_user.username}
          type="text"
          className="form-control"
          handleSubmit={(value) => setUser({ ..._user, username: value })}
        />
      </div>

      <div className="form-group">
        <label>Email</label>
        <EditableInput
          name="email"
          value={_user.email}
          type="text"
          className="form-control"
          handleSubmit={(value) => setUser({ ..._user, email: value })}
        />
      </div>
      <button onClick={handleSubmit} className="btn float-right" type="submit">
        Update
      </button>
    </div>
  );
};

export default Profile;
