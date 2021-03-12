// import { useState } from "react";
// import { updateUser } from "../../store/actions/authActions";
// import { useDispatch, useSelector } from "react-redux";
// import { useHistory } from "react-router-dom";
// import { EditableInput } from "react-form-editables";

// const UpdateProfile = () => {
//   const dispatch = useDispatch();
//   const history = useHistory();
//   const _user = useSelector((state) => state.authReducer.user);
//   const [user, setUser] = useState({
//     ..._user,
//     username: _user.username,
//     email: _user.email,
//   });

//   // const handleSubmit = (updatedValue) => {
//   //   setUser({ textInputValue: updatedValue });
//   // };

//   const handleChange = (event) =>
//     setUser({ ...user, [event.target.name]: event.target.value });

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     dispatch(updateUser(user));
//     history.push("/profile");
//   };

//   return (
//     <div className="container">
//       <h3>EDIT PROFILE</h3>
//       <form onSubmit={() => handleSubmit}>
//         <div className="form-group">
//           <label>Username</label>
//           <EditableInput
//             name="username"
//             value={user.username}
//             type="text"
//             className="form-control"
//             // value={user.textInputValue}
//             handleSubmit={handleChange}
//           />
//         </div>
//         <div className="form-group">
//           <label>Email</label>
//           <EditableInput
//             name="email"
//             value={user.email}
//             type="email"
//             className="form-control"
//             // value={user.textInputValue}
//             handleSubmit={handleChange}
//           />
//         </div>
//         <button className="btn float-right" type="submit">
//           Done
//         </button>
//       </form>
//     </div>
//   );
// };

// export default UpdateProfile;
