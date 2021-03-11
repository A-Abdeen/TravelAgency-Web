import { useSelector, useDispatch } from "react-redux";
import {useState} from "react";
import { updatedProfile } from "../../store/actions/authActions";

const Profile = () => {
  const user = useSelector((state) => state.authReducer.user);
  const [profile, setProfile] = useState({
      name:"",
      email:"",
    }
  );

  const dispatch = useDispatch();

  return (
    <div>
        <h4>User Profile</h4>
        <p>{user.id}</p>
        <p>{user.username}</p>
        <p>{user.email}</p>
        <button></button>


    </div>
  );
};

export default Profile;
