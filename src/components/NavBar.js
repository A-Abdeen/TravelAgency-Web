//React
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { GoSignOut } from "react-icons/go";
//Components
import { signout } from "../store/actions/authActions";
//Styling
import {
  AuthButtonStyled,
  UsernameStyled,
  NavStyled,
  Logo,
  NavItem,
} from "../styles";

const NavBar = () => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.authReducer.user);

  const airline = useSelector((state) => state.airlineReducer.airlines);
  let foundAirline;
  if (user)
    foundAirline = airline.find((airline) => user.id === airline.adminId);

  return (
    <NavStyled className="navbar navbar-expand">
      <Logo className="navbar-brand" to="/">
        <img
          src="https://lh3.googleusercontent.com/proxy/WHtVkDXcIlEI5scCLpb5ls7-y0ulKhf9kMaUB5Xg1k9WvOOUeKDzpp_b-xPksGLkC7k4gESObDbyxk6THgAiXnoOJ7BfSh9C5kJUBpWMyjeE3brezZgxaitun-06oetX6AM"
          alt="Logo"
        />
      </Logo>

      <h3>Pringles Travel and Torism</h3>

      <div className="navbar-nav ml-auto">
        {user ? (
          <>
            {user.userType === "admin" ? (
              <NavItem
                className="nav-item"
                to={`/airlines/${foundAirline?.id}/`}
              >
                Admin Page{" "}
              </NavItem>
            ) : (
              <NavItem className="nav-item" to={`/profile/${user?.id}`}>
                {" "}
                User Profile
              </NavItem>
            )}
            <UsernameStyled>Welcome, {user.username}!</UsernameStyled>
            <NavItem className="nav-item" to="/">
              <GoSignOut
                onClick={() => dispatch(signout())}
                color="red"
                size="1.0em"
              />
            </NavItem>
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
