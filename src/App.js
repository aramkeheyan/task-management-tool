import React, { useEffect } from "react";
import "./App.css";
import Navbar from "./components/navbar/index";
import { Switch, Route } from "react-router-dom";
import StickyFooter from "./containers/footer";
import ColumnSelectorGrid from "./components/TasksTable";
// import TaskDetailed from "./components/TaskDetailed";
import Create from "./modals/create";
import SignUp from "./components/Logins/signUp";
import SignIn from "./components/Logins/signIn";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux"
import { setLoggedInUser } from "./redux/common/auth/actions";
import { SIGN_IN, SIGN_UP, MAIN_PAGE } from "./constants/paths";

function App() {
  const history = useHistory()
  const dispatch = useDispatch()
  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if (user) {
        dispatch(setLoggedInUser(user)) // user || auth.currentUser
        history.push(MAIN_PAGE) // potential bug
      } else {
        history.push(SIGN_IN)
      }

    })
  }, [dispatch, history])
  return (
    <>
      <Switch>
        <Route path="/">
          <div>
            <Navbar />
            <Create />
          </div>

          <div className="container">
            <SignUp />
            <SignIn />
            <ColumnSelectorGrid />
          </div>

          <div>
            <StickyFooter />
          </div>
        </Route>
      </Switch>
    </>
  );
}

export default App;
