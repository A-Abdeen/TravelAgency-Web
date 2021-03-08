// React-Router
import { Route, Switch } from "react-router";

// Components
import Home from "./Home";
import Signup from "./authentications/Signup";
import Signin from "./authentications/Signin";

function Routes() {
  return (
    <Switch>
      <Route path="/signin">
        <Signin />
      </Route>
      <Route path="/signup">
        <Signup />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
}

export default Routes;