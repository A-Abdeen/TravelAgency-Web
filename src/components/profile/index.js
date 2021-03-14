import { useState } from "react";
import { updateUser } from "../../store/actions/authActions";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { EditableInput } from "react-form-editables";

const Profile = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const _user = useSelector((state) => state.authReducer.user);
  const [user, setUser] = useState({
    ..._user,
    username: _user.username,
    email: _user.email,
  });

  // const handleSubmit = (updatedValue) => {
  //   setUser({ textInputValue: updatedValue });
  // };

  const handleSubmit = () => {
    console.log(user);
    dispatch(updateUser(user));
    // history.push(`/profile/${user?.id}`);
  };

  return (
    <div className="container">
      <h3>EDIT PROFILE</h3>
      <div className="form-group">
        <label>Username</label>
        <EditableInput
          name="username"
          value={user.username}
          type="text"
          className="form-control"
          handleSubmit={(value) => setUser({ ...user, username: value })}
        />
      </div>

      <div className="form-group">
        <label>Email</label>
        <EditableInput
          name="email"
          value={user.email}
          type="text"
          className="form-control"
          //onChange={handleChange}
          handleSubmit={(value) => setUser({ ...user, email: value })}
        />
      </div>
      <button onClick={handleSubmit} className="btn float-right" type="submit">
        Done
      </button>
    </div>
  );
};

export default Profile;
