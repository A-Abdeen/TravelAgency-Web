//React
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { FiLogOut } from "react-icons/fi";
//Components
import { signout } from "../store/actions/authActions";
//Styling
import { AuthButtonStyled, UsernameStyled, NavStyled } from "../styles";

const NavBar = () => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.authReducer.user);

  const airline = useSelector((state) => state.airlineReducer.airlines);
  let foundAirline;
  if (user)
    foundAirline = airline.find((airline) => user.id === airline.adminId);

  return (
    <NavStyled className="navbar navbar-expand">
      <h2>Travel-Agency</h2>

      <div className="navbar-nav ml-auto">
        {user ? (
          <>
            <UsernameStyled>Hello, {user.username}!</UsernameStyled>
            <FiLogOut
              onClick={() => dispatch(signout())}
              color="red"
              size="1.5em"
            />
            {user.userType === "admin" ? (
              <Link to={`/airlines/${foundAirline?.id}/`}>Admin Page </Link>
            ) : (
              <Link to="/:userId/"> User Profile</Link>
            )}
          </>
        ) : (
          <>
            <Link to="/signup">
              <AuthButtonStyled>Sign up</AuthButtonStyled>
            </Link>
            <Link to="/signin">
              <AuthButtonStyled>Sign in</AuthButtonStyled>
            </Link>
          </>
        )}
      </div>
    </NavStyled>
  );
};

export default NavBar;
