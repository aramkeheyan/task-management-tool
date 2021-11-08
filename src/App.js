import React, { useEffect } from "react";
import "./App.css";
import NavigationBar from "./components/navbar/navigationBar";
import { Switch, Route, Redirect } from "react-router-dom";
import StickyFooter from "./containers/footer";
import ColumnSelectorGrid from "./components/TasksTable";
// import TaskDetailed from "./components/TaskDetailed";
import Create from "./modals/Create";
import SignUp from "./components/Logins/signUp";
import SignIn from "./components/Logins/signIn";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { setLoggedInUser } from "./redux/common/auth/actions";
import {
  SIGN_IN,
  SIGN_UP,
  MAIN_PAGE,
  REPORTED_BY_ME,
  ASSIGNED_TO_ME,
  CREATE,
} from "./constants/paths";
import { navItems } from "./components/navbar/navItems";
import ReportedByMe from "./pages/ReportedByMe";

function App() {
  const history = useHistory();
  const dispatch = useDispatch();
  const loggedInUser = useSelector((state) => state.auth.loggedInUser);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setLoggedInUser(user)); // user || auth.currentUser
        //history.push(MAIN_PAGE) // potential bug
      } else {
        history.push(SIGN_IN);
      }
    });
  }, []);
  return (
    <>
      <Switch>
        <Route exact path={MAIN_PAGE}>
          {loggedInUser === null && <Redirect to={SIGN_IN} />}
          <div>
            <NavigationBar />
          </div>

          <div className="container">
            <ColumnSelectorGrid />
          </div>

          <div>
            <StickyFooter />
          </div>
        </Route>

        <Route path={SIGN_IN} component={SignIn} />
        <Route path={SIGN_UP} component={SignUp} />
        <Route path={REPORTED_BY_ME} component={ReportedByMe} />
        <Route path={ASSIGNED_TO_ME} component={navItems[2].id} />
        <Route path={CREATE} component={Create} />
        <Route path="*">404</Route>
      </Switch>
    </>
  );
}

export default App;
