//React
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { GoSignOut } from "react-icons/go";
//Components
import { signout } from "../store/actions/authActions";
//Styling
import { AuthButtonStyled, UsernameStyled, NavStyled, Logo, NavItem } from "../styles";

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
          <img src= "https://lh3.googleusercontent.com/proxy/5fz_dxHOGNuSyVCilFpHPN63ECwfrGpbWlZaM-AJAu9y9Z-T_UnQ1R1acIRXpAmVjv0_xp4E0XncmRSK0mmF42fk9362kWYN9FxdNv0YHlmi7i1_VzSiK9JRArBYBdsNsTE" alt="Logo"/>
      </Logo>

      <h3>Pringles Travel and Torism</h3>

      <div className="navbar-nav ml-auto">
        {user ? (
          <>
          {user.userType === "admin" ? (
              <NavItem className="nav-item" to={`/airlines/${foundAirline?.id}/`}>Admin Page </NavItem>
            ) : (
              <NavItem className="nav-item" to={`/profile/${user?.id}`}> User Profile</NavItem>
            )}
            <UsernameStyled>Welcome, {user.username}!</UsernameStyled>
            <GoSignOut
              onClick={() => dispatch(signout())}
              color="red"
              size="1.0em"
            />
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
