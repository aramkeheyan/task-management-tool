import React from "react";
import "./App.css";
import Navbar from "./components/navbar/index";
import { BrowserRouter as Switch, Route } from "react-router-dom";
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
