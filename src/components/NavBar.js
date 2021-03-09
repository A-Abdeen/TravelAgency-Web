//React
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { FiLogOut } from "react-icons/fi";
//Components
import { signout } from "../store/actions/authActions";
//Styling
import { AuthButtonStyled, UsernameStyled, NavStyled } from "../styles";

const NavBar = () => {
  const user = useSelector((state) => state.authReducer.user);
  const dispatch = useDispatch();

  return (
    <NavStyled className="navbar navbar-expand">
      <h2>Travel-Agency</h2>

      <div className="navbar-nav ml-auto">
        {user ? (
          <>
            <UsernameStyled>Hello, {user.username}! </UsernameStyled>
            <FiLogOut
              onClick={() => dispatch(signout())}
              color="red"
              size="1.5em"
            />
            <Link to="/airline/:airlineId">Admin Page</Link>
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