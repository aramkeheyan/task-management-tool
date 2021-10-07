import React from "react";
import "./App.css";
import Navbar from "./components/navbar/index";
<<<<<<< HEAD
import { Switch, Route } from "react-router-dom";
=======
import { BrowserRouter as Switch, Route } from "react-router-dom";
>>>>>>> 2bdf90721a72610ec5e9818cd3d9afb4105d7b5b
import StickyFooter from "./containers/footer";
import ColumnSelectorGrid from "./components/TasksTable";
// import TaskDetailed from "./components/TaskDetailed";
import Create from "./modals/create";
import SignUp from "./components/Logins/signUp";
import SignIn from "./components/Logins/signIn";
function App() {
  return (
    <>
      <Switch>
        <Route path="/">
          <div>
            <Navbar />
          </div>

          <div>
            <SignUp />
            <SignIn />
          </div>

          <div>
            <Create />
          </div>

          <div>
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
