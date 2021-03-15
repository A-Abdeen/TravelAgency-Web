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
          src="https://www.pringles.com/content/dam/global/pringles/images/site/logo-pringles-v2.svg"
          alt="Logo"
        />
      </Logo>

      <h3>Pringles Travel and Tourism Services</h3>

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
